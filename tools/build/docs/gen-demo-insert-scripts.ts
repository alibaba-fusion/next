/* eslint-disable @typescript-eslint/no-explicit-any */
import path = require('path');
import fs = require('fs');
import _ = require('lodash');
import createDocParser = require('@alifd/doc-parser');
import MagicString from 'magic-string';
import { marked } from './utils';
import { getLiveDemoOp, getDemoRenderScript } from './render-creator';
import { visitCode } from '../../utils';

const docParser = createDocParser({});
const EN_DOC_REG = /:{3}lang=en-us((.|\r|\n)*):{3}/;

function filterByLang(content: string, lang?: string) {
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

async function processDemoJS(
    js: string,
    css: string,
    body: string,
    demoPath: string,
    componentName: string
) {
    if (!js) {
        return '';
    }

    const ext = path.extname(demoPath);
    const name = _.camelCase(path.basename(demoPath, ext));

    const { sourceFile } = visitCode(js);
    const _importJs = sourceFile
        .getImportDeclarations()
        .map(t => t.getText().replace(/\n+/g, ''))
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

    const importJs = _importJs
        .split('\n')
        /* eslint-disable array-callback-return */
        .map(line => {
            if (/import '.*';$/g.test(line)) return;
            if (/(\{\s*Ballon\s*\}|\{\s*Message\s*\})/g.test(line)) return;
            return line.replace(/(\s*Balloon\s*,*\s*|\s*Message\s*,*\s*)/g, '');
        })
        .join('\n');
    const ms = new MagicString(js);
    sourceFile.getImportDeclarations().forEach(d => {
        ms.remove(d.getStart(), d.getEnd());
    });
    const noImportJs = ms.toString();

    // eslint-disable-next-line
    body = marked(body).replace(/`/g, '{backquote}').replace(/\$/g, '{dollar}');

    const hotReloadCode = `
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Balloon, Message } from '@alifd/next';
window.demoNames.push('${name}');
${importJs}
${rawCss ? `document.getElementById('${name}-style').innerHTML = \`${css}\`;` : ''}
${await getDemoRenderScript(js, name, body, noImportJs, rawCss, rawImportJs, componentName)}
${getLiveDemoOp(name, componentName)}
`;

    return hotReloadCode;
}

export async function getOnlineDemos(demoPaths: string[], componentName: string) {
    const demoResults: Record<string, any> = {};
    const demoListOrdered = [];
    const demoMetas = demoPaths.reduce(
        (ret, demoPath) => {
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
        },
        {} as Record<string, any>
    );
    const demoOrders = demoPaths.reduce(
        (ret, demoPath) => {
            const meta: any = demoMetas[demoPath];
            let order = 9999;
            if (meta) {
                const number = parseInt(meta.order, 10);
                if (!isNaN(number)) {
                    order = number;
                }
            }
            ret[demoPath] = order;
            return ret;
        },
        {} as Record<string, any>
    );
    const orderedDemoPaths = demoPaths.sort((prev, next) => demoOrders[prev] - demoOrders[next]);
    let demoInsertScript = '';
    for (const demoPath of orderedDemoPaths) {
        const result = demoResults[demoPath];
        demoListOrdered.push(result.meta);
        demoInsertScript = `
                ${demoInsertScript}
                ${await processDemoJS(
                    result.js,
                    result.css,
                    result.body,
                    demoPath,
                    componentName
                )}`;
    }

    return `
        ${demoInsertScript}
        `;
}
