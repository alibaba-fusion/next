const path = require('path');
const loaderUtils = require('loader-utils');
const ejs = require('ejs');
const _ = require('lodash');
const { logger, parseMD, marked, replaceExt } = require('../../../utils');
const selectorPath = require.resolve('./selector');

const cwd = process.cwd();
const IMPORT_REG = /import {(.+)} from '@alifd\/next';/;
const tplsPath = path.resolve(__dirname, '../../tpls');
const headerTplPath = path.resolve(tplsPath, 'partials/header.ejs');
const demoTplPath = path.resolve(tplsPath, 'demo.ejs');

module.exports = function(content) {
  const options = loaderUtils.getOptions(this);
  const links = options.links;
  const disableAnimation = options.disableAnimation;
  const lang = options.lang;
  const resourcePath = this.resourcePath;
  const ext = path.extname(resourcePath);
  const name = path.basename(resourcePath, ext);
  const scripts = [
    '/common.js',
    `/${replaceExt(path.relative(cwd, this.resourcePath), '.js')}`
  ];

  this.addDependency(headerTplPath);
  this.addDependency(demoTplPath);

  ejs.renderFile(demoTplPath, {
    scripts,
    links,
    disableAnimation,
    lang,
    name
  }, (err, html) => {
    if (err) {
      logger.error(`Render ${name}.html failed: ${err}`);
    } else {
      const htmlPath = replaceExt(path.relative(path.join(cwd, 'docs'), this.resourcePath), '.html');
      this.emitFile(htmlPath, html);
    }
  });

  const result = parseMD(content, resourcePath, lang);
  return processJS(result.js, result.css, result.meta.desc, result.body, resourcePath, this.context);
};

function processJS(js, css, desc, body, resourcePath, context) {
  if (!js) {
    return '';
  }

  js = fixImport(js, resourcePath);

  // eslint-disable-next-line
  body = marked(body).replace(/`/g, '{backquote}').replace(/\$/g, '{dollar}');

  let hotReloadCode = `


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

  return `${css ? getCSSRequireString(resourcePath, context) : ''}${js}${hotReloadCode}`;
}

function getCSSRequireString(resourcePath, context) {
  const requestString = loaderUtils.stringifyRequest(context, `!!style-loader!css-loader!${selectorPath}!${resourcePath}`);
  return `require(${requestString})

`;
}

function fixImport(code, resourcePath) {
  const matched = code.match(IMPORT_REG);
  if (matched) {
    const components = matched[1].replace(/\s/g, '').split(',');

    const importStrings = components.map(component => {
      const componentPath = path.join(cwd, 'src', _.kebabCase(component));
      const relativePath = path.relative(path.dirname(resourcePath), componentPath);

      return `
import ${component} from '${relativePath}';
import '${path.join(relativePath, 'style.js')}';
`;
    }).join('\n');

    return code.replace(IMPORT_REG, importStrings);
  }

  return code;
}
