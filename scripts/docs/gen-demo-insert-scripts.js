const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const createDocParser = require('@alifd/doc-parser');
const { marked } = require('../utils');
const { getLiveDemoOp, getDemoRenderScript } = require('../preview/loaders/index/render-creator');

const docParser = createDocParser({});
const EN_DOC_REG = /:{3}lang=en-us((.|\r|\n)*):{3}/;

function getDemos(demoPaths) {
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
    const demoInsertScript = orderedDemoPaths.reduce((ret, demoPath, index, array) => {
        const result = demoResults[demoPath];
        demoListOrdered.push(result.meta);
        ret = `
                ${ret}
                ${processDemoJS(result.js, result.css, result.body, demoPath)}`;
        return ret;
    }, '');
    return `
        ${demoInsertScript}
        `;
}

// eslint-disable-next-line max-params
function processDemoJS(js, css, body, demoPath) {
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

    const importJs = js
        .split('\n')
        .filter(line => /import/.test(line))
        /* eslint-disable array-callback-return */
        .map(line => {
            if (/(\{\s*Ballon\s*\}|\{\s*Message\s*\})/g.test(line)) return;
            return line.replace(/(\s*Balloon\s*,*\s*|\s*Message\s*,*\s*)/g, '');
        })
        /* eslint-enable */
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
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Balloon, Message } from '@alifd/next';
window.demoNames.push('${name}');
${importJs}
${rawCss ? `document.getElementById('${name}-style').innerHTML = \`${css}\`;` : ''}
${getDemoRenderScript(js, name, body, noImportJs, rawCss, rawImportJs)}
${getLiveDemoOp(name)}
`;

    return hotReloadCode;
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

module.exports.getOnlineDemos = getDemos;
