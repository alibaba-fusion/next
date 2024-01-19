import _ = require('lodash');
import path = require('path');
import fs = require('fs-extra');
import prism = require('markdown-it-prism');
import MarkdownIt = require('markdown-it');
import markdownItAnchor = require('markdown-it-anchor');
import remark = require('remark');
import { transform as esbuildTransform } from 'esbuild';
import { getRegularTsconfigJson, CWD } from '../../utils';

const mdIt = MarkdownIt({
    html: true,
    xhtmlOut: true,
})
    .use(markdownItAnchor, {
        level: [1, 2, 3],
        slugify: (id: string) => _.startCase(id),
        permalink: true,
        permalinkClass: 'header-anchor scroll-count-item',
        permalinkAttrs: (id: string) => {
            return { 'data-scroll-id': _.startCase(id) };
        },
        permalinkSymbol: '#',
        permalinkBefore: false,
    })
    .use(prism, {});

export function getComponentName(component: string) {
    const camelCaseName = _.camelCase(component);
    return camelCaseName[0].toUpperCase() + camelCaseName.slice(1);
}

export function marked(md: string) {
    return mdIt.render(md);
}

export function parse(md: string) {
    return remark().parse(md);
}

const TSCONFIG_PATH = path.resolve(CWD, 'tsconfig.json');

export async function transform(code: string, jsx: 'transform' | 'preserve' = 'transform', format: 'cjs' | 'esm' = 'cjs') {
    const tsconfig = await getRegularTsconfigJson(fs.readFileSync(TSCONFIG_PATH, 'utf-8'));
    try {
        
        const result = await esbuildTransform(code, {
            format,
            loader: 'tsx',
            jsx,
            tsconfigRaw: JSON.stringify({ compilerOptions: tsconfig.compilerOptions }),
        });
        return result.code;
    } catch (error) {
        throw error
    }
}
