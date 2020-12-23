const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const loaderUtils = require('loader-utils');
const createDocParser = require('@alifd/doc-parser');
const { marked, logger, getComPathName } = require('../../../utils');
const { getDemoOp, getDemoRenderScript } = require('./render-creator');

const selectorPath = require.resolve('./selector');
const cwd = process.cwd();
const docParser = createDocParser({});
const EN_DOC_REG = /:{3}lang=en-us((.|\r|\n)*):{3}/;
const IMPORT_REG = /import {(.+)} from ['"]@alifd\/next['"];?/;
const IMPORT_LIB_REG = /import (.+) from ['"]@alifd\/next\/lib\/(.+)['"];?/;
const IMPORT_LIB_REG_G = /^import .+ from ['"]@alifd\/next\/lib\/(.+)['"];?/gm;

// TODO watch change
function getDemos(demoPaths, lang, dir, context, resourcePath) {
    const demoResults = {};
    const demoListOrdered = [];
    const demoMetas = demoPaths.reduce((ret, demoPath) => {
        const ext = path.extname(demoPath);
        const name = _.camelCase(path.basename(demoPath, ext));
        const content = fs.readFileSync(demoPath, 'utf8');
        const result = docParser.parse(filterByLang(content));
        result.meta.desc = result.meta.description;
        delete result.meta.description;
        result.js = result.codes.jsx;
        result.css = result.codes.css;
        delete result.codes;
        result.meta.name = name;
        demoResults[demoPath] = result;
        ret[demoPath] = result.meta;
        return ret;
    }, {});
    const demoOrders = demoPaths.reduce((ret, demoPath) => {
        const meta = demoMetas[demoPath];
        let order = 9999;
        if (meta) {
            const number = parseInt(meta.order, 10);
            if (!isNaN(number)) {
                order = number;
            }
        }
        ret[demoPath] = order;
        return ret;
    }, {});
    const orderedDemoPaths = demoPaths.sort((prev, next) => demoOrders[prev] - demoOrders[next]);
    const importSet = [
        "import Loading from '../../src/loading';",
        "import Balloon from '../../src/balloon';",
        "import Message from '../../src/message';",
    ];
    const demoInsertScript = orderedDemoPaths
        .reduce((ret, demoPath, index, array) => {
            const result = demoResults[demoPath];
            demoListOrdered.push(result.meta);
            ret = `
                ${ret}
                ${result.css ? getCSSRequireString(path.resolve(demoPath), context) : ''}
                ${processDemoJS(result.js, result.css, result.body, demoPath, resourcePath)}`;
            return ret;
        }, '')
        .split('\n')
        /* eslint-disable array-callback-return */
        .filter(line => {
            // TODO 引入/变量 去重
            if (importSet.includes(line)) return;
            if (line.startsWith('import')) importSet.push(line);
            return line;
        })
        .join('\n');
    /* eslint-enable */ return [demoInsertScript, demoListOrdered];
}

// TODO add react-axe
// eslint-disable-next-line max-params
function processDemoJS(js, css, body, demoPath, resourcePath) {
    if (!js) {
        return '';
    }

    const ext = path.extname(demoPath);
    const name = _.camelCase(path.basename(demoPath, ext));

    const _importJs = js
        .split('\n')
        .filter(line => /import/.test(line))
        .join('\n')
        .replace(/`/g, '{backquote}')
        .replace(/\$/g, '{dollar}');

    const rawImportJs = _importJs
        ? `
\`\`\`jsx
${_importJs}
\`\`\``
        : '';

    const rawCss = css
        ? `
\`\`\`css
${css.replace(/`/g, '{backquote}').replace(/\$/g, '{dollar}')}
\`\`\``
        : '';

    js = fixImport(js, resourcePath);
    const importJs = js
        .split('\n')
        .filter(line => /import/.test(line))
        .join('\n');
    const noImportJs = js
        .split('\n')
        .filter(line => !/import/.test(line))
        .join('\n');

    // eslint-disable-next-line
    body = marked(body)
        .replace(/`/g, '{backquote}')
        .replace(/\$/g, '{dollar}');

    const hotReloadCode = `

// HOT RELOAD CODE
window.demoNames.push('${name}');
${getDemoOp(name)}
${importJs}
${getDemoRenderScript(js, name, body, noImportJs, rawCss, rawImportJs)}
`;

    return hotReloadCode;
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
                const componentPath = path.join(cwd, 'src', getComPathName(component));
                const relativePath = path.relative(path.dirname(resourcePath), componentPath);

                return `
import ${component} from '${relativePath}';
`;
            })
            .join('\n');

        code = code.replace(IMPORT_REG, importStrings);
    }

    if (matchedLib) {
        matchedLib.forEach(element => {
            const component = element.match(IMPORT_LIB_REG)[1].replace(/\s/g, '');
            const afterLib = element.match(IMPORT_LIB_REG)[2].replace(/\s/g, '');
            const libPath = path.join(cwd, 'src', afterLib);
            const newLibPath = path.relative(path.dirname(resourcePath), libPath);
            const newLibStr = `
import ${component} from'${newLibPath}'`;

            code = code.replace(IMPORT_LIB_REG, newLibStr);
        });
    }

    return code;
}

function filterByLang(content, lang) {
    if (lang === 'en') {
        const matched = content.match(EN_DOC_REG);
        if (matched) {
            const enDoc = matched[1];
            const parts = content.split(matched[0]);
            return enDoc + parts[1];
        }

        return content;
    }

    return content.replace(EN_DOC_REG, '');
}

module.exports.getDemos = getDemos;
