import * as glob from 'glob';
import { readFileSync } from 'fs-extra';
import { dirname, relative, resolve } from 'path';
import { CWD, SRC_DIR_PATH, visitCode, warn } from '../../utils';

function isComponentStyle(file: string) {
    return resolve(dirname(file), '../') === SRC_DIR_PATH;
}

export function generateSassIndex(targets: string[]) {
    const styleFiles = glob
        .sync(`@(${targets.map(t => relative(CWD, t)).join('|')})/**/style.@(js|ts)`, { cwd: CWD, absolute: true })
        .filter(isComponentStyle);
    const outputFileMap = new Map<string, string>();
    for (const file of styleFiles) {
        const scssIndexPath = resolve(dirname(file), 'index.scss');

        const text = readFileSync(file, 'utf-8');
        const { sourceFile } = visitCode(text);

        const imports = sourceFile.getImportDeclarations();
        const relaySources = imports.map(t => t.getModuleSpecifier().getText().slice(1, -1));

        const resolvedRelaySources: string[] = [];
        for (const source of relaySources) {
            if (/\.(css|scss|sass)$/.test(source)) {
                resolvedRelaySources.push(source);
            } else if (/style(\.(js|ts))?$/.test(source)) {
                resolvedRelaySources.push(source.replace(/style(\.(js|ts))?$/, 'index.scss'));
            } else {
                warn('Unknown import from', file);
            }
        }
        outputFileMap.set(
            scssIndexPath,
            `${resolvedRelaySources.map(s => `@import "${s}";`).join('\n')}\n`
        );
    }
    return outputFileMap;
}
