/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-21 16:56:00
  description: 根据 style.ts 生成各个组件的 index.scss 文件
------------------------------------------------------------
*/

import { dirname, relative, resolve, join } from 'path';
import { writeFileSync, readFileSync, removeSync, outputFileSync } from 'fs-extra';
import * as glob from 'glob';
import { ARGV, CWD, SRC_DIR, SRC_DIR_PATH, TARGETS, visitCode, warn, registryTask } from '../utils';
import cssVarTempFileCore from './tools/css-var-temp-file-core';
import cssVarTempFile from './tools/css-var-temp-file';
import generateCssEntryCore from './tools/generate-css-entry-core';
import generateCssEntry from './tools/generate-css-entry';

function isComponentStyle(file: string) {
    return resolve(dirname(file), '../') === SRC_DIR_PATH;
}

function generateSassIndex(targets: string[]) {
    const styleFiles = glob
        .sync(`@(${targets.map(t => relative(CWD, t)).join('|')})/**/style.@(js|ts)`, {
            cwd: CWD,
            absolute: true,
        })
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

function sassIndex() {
    const sassIndexMap = generateSassIndex(TARGETS);

    const outDirs = (ARGV.out as string[]) || ['es', 'lib'];

    sassIndexMap.forEach((text, file) => {
        outDirs.forEach(dir => {
            const dest = resolve(CWD, dir);
            const destPath = file.replace(SRC_DIR_PATH, dest);
            writeFileSync(destPath, text, 'utf-8');
        });
    });

    // 旧包中 lib/_components/@alife/next-core/lib 下的 index.scss 和 index-noreset.scss 很可能被用户使用，故保留该文件夹结构
    // fixme: 2.x 移除
    const _corePath = resolve(CWD, 'lib/_components/@alife/next-core/lib');
    outputFileSync(resolve(_corePath, 'index.scss'), '@import "../../../../core/reset.scss";\n');
    outputFileSync(
        resolve(_corePath, 'index-noreset.scss'),
        '@import "../../../../core/index-noreset.scss";\n'
    );
}

export function registryBuildSass(file = __filename) {
    return registryTask(file, 'sass', async () => {
        await registryTask(file, '[Component] generate component index.scss', sassIndex);

        await registryTask(
            file,
            `[Core] empty and generate ${SRC_DIR}/core-temp...`,
            cssVarTempFileCore
        );
        await registryTask(
            file,
            '[Component] add scss-var-to-css-var.scss & css-var-def-default.scss',
            cssVarTempFile
        );
        await registryTask(file, '[Core]generate core2 files', generateCssEntryCore);
        await registryTask(
            file,
            '[Component] generate css-var files (style2.js / varaible.css / index.css )',
            generateCssEntry
        );
        await registryTask(file, 'clean temp and useless', () => {
            ['es', 'lib'].forEach(dir => {
                removeSync(resolve(CWD, dir, 'demo-helper'));
                removeSync(resolve(CWD, dir, 'core-temp'));
                removeSync(resolve(CWD, SRC_DIR, 'core-temp'));
            });
            const tempPaths = glob.sync(
                join(CWD, '@(lib|es)', '*', 'scss/@(scss-var-to-css-var|css-var-def-default).scss'),
                { cwd: CWD }
            );
            tempPaths.forEach(p => removeSync(p));
        });
    });
}

registryBuildSass();
