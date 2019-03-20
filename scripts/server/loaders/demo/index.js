const path = require('path');
const loaderUtils = require('loader-utils');
const ejs = require('ejs');
const _ = require('lodash');
const { logger, parseMD, marked, replaceExt } = require('../../../utils');

const selectorPath = require.resolve('./selector');

const cwd = process.cwd();
const IMPORT_REG = /import {(.+)} from ['"]@alifd\/next['"];?/;
const IMPORT_LIB_REG = /import (.+) from ['"]@alifd\/next\/lib\/(.+)['"];?/;
const IMPORT_LIB_REG_G = /^import .+ from ['"]@alifd\/next\/lib\/(.+)['"];?/gm;
const tplsPath = path.resolve(__dirname, '../../tpls');
const headerTplPath = path.resolve(tplsPath, 'partials/header.ejs');
const demoTplPath = path.resolve(tplsPath, 'demo.ejs');

module.exports = function(content) {
    const options = loaderUtils.getOptions(this);
    const { dir, lang, links, disableAnimation } = options;
    const resourcePath = this.resourcePath;
    const ext = path.extname(resourcePath);
    const name = path.basename(resourcePath, ext);
    const scripts = [
        '/common.js',
        `/${replaceExt(path.relative(cwd, this.resourcePath), '.js')}`,
    ];

    this.addDependency(headerTplPath);
    this.addDependency(demoTplPath);

    ejs.renderFile(
        demoTplPath,
        {
            scripts,
            links,
            dir,
            disableAnimation,
            lang,
            name,
        },
        (err, html) => {
            if (err) {
                logger.error(`Render ${name}.html failed: ${err}`);
            } else {
                const htmlPath = replaceExt(
                    path.relative(path.join(cwd, 'docs'), this.resourcePath),
                    '.html'
                );
                this.emitFile(htmlPath, html);
            }
        }
    );

    const result = parseMD(content, resourcePath, lang, dir);
    return processJS(
        result.js,
        result.css,
        result.meta.desc,
        result.body,
        resourcePath,
        this.context,
        dir,
        options
    );
};

// eslint-disable-next-line max-params
function processJS(js, css, desc, body, resourcePath, context, dir, options) {
    const { devA11y } = options;
    if (!js) {
        return '';
    }

    js = fixImport(js, resourcePath, dir);

    // eslint-disable-next-line
    body = marked(body)
        .replace(/`/g, '{backquote}')
        .replace(/\$/g, '{dollar}');

    const hotReloadCode = `


// HOT RELOAD CODE
const componentDesc = document.querySelector('#component-desc');
componentDesc.innerHTML = \`${desc}\`;
const componentBody = document.querySelector('#component-body');
componentBody.innerHTML = \`${body}\`.replace(/{backquote}/g, '\`').replace(/{dollar}/g, '$');

if (module.hot) {
  module.hot.accept();

  const reloading = document.querySelector('#next-demo-reloading');

  if (!window.hasAddStatusHandler) {
    module.hot.addStatusHandler(status => {
      window.hasAddStatusHandler = true;
      if (status === 'check') {
        reloading.style.display = 'block';
      } else if (status === 'idle') {
        reloading.style.display = 'none';
      }
    });
  }
}`;
    let reactAxe;
    if (devA11y) {
        reactAxe = `
            // Load react-axe library for a11y testing during development
            import Axe from 'react-axe';
            Axe(React, ReactDOM, 1000);
            `;
    }

    return `${
        css ? getCSSRequireString(resourcePath, context) : ''
    }${js}${hotReloadCode}${reactAxe}`;
}

function getCSSRequireString(resourcePath, context) {
    const requestString = loaderUtils.stringifyRequest(
        context,
        `!!style-loader!css-loader!${selectorPath}!${resourcePath}`
    );
    return `require(${requestString})

`;
}

function fixImport(code, resourcePath) {
    const matched = code.match(IMPORT_REG);
    const matchedLib = code.match(IMPORT_LIB_REG_G);

    if (matched) {
        const components = matched[1].replace(/\s/g, '').split(',');

        const importStrings = components
            .map(component => {
                const componentPath = path.join(
                    cwd,
                    'src',
                    _.kebabCase(component)
                );
                const relativePath = path.relative(
                    path.dirname(resourcePath),
                    componentPath
                );

                return `
import ${component} from '${relativePath}';
import '${path.join(relativePath, 'style.js')}';
`;
            })
            .join('\n');

        code = code.replace(IMPORT_REG, importStrings);
    }

    if (matchedLib) {
        matchedLib.forEach(element => {
            const component = element
                .match(IMPORT_LIB_REG)[1]
                .replace(/\s/g, '');
            const afterLib = element
                .match(IMPORT_LIB_REG)[2]
                .replace(/\s/g, '');
            const libPath = path.join(cwd, 'src', afterLib);
            const newLibPath = path.relative(
                path.dirname(resourcePath),
                libPath
            );
            const newLibStr = `
import ${component} from'${newLibPath}'`;

            code = code.replace(IMPORT_LIB_REG, newLibStr);
        });
    }

    return code;
}
