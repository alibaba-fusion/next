/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-14 16:13:36
  description: 将目标目录内的所有 js、jsx 文件转换为 ts、tsx 文件
  example: 
    npm run tool:rename2ts table
    npm run tool:rename2ts ./components/table
------------------------------------------------------------
*/

import { resolve, relative, extname, dirname } from 'path';
import { readdirSync, statSync, readFileSync } from 'fs';
import chalk from 'chalk';
import ts from 'typescript';
import { CWD, TARGETS, execSync, log, warn, registryTask, visitCode } from './utils';

function hasJsx(code: string) {
    let has = false;
    visitCode(code, node => {
        if (ts.isJsxElement(node) || ts.isJsxFragment(node) || ts.isJsxSelfClosingElement(node)) {
            has = true;
        }

        return node;
    });
    return has;
}

function renameJs2Ts(js: string) {
    const text = readFileSync(js, 'utf-8');
    if (hasJsx(text)) {
        // 文件内有 jsx 语法，转为 tsx
        return js.replace(/\.(js|jsx|ts)$/, '.tsx');
    } else {
        return js.replace(/\.(?:j|t)s(x?)$/, (_, x) => {
            return `.ts${x || ''}`;
        });
    }
}

function gitRename(from: string, to: string) {
    execSync('git', ['mv', from, to]);
}

export async function renameDirs(files: string[]) {
    for (const file of files) {
        const stat = statSync(file);
        if (stat.isDirectory()) {
            const children = readdirSync(file).map(f => resolve(file, f));
            await renameDirs(children);
        } else if (stat.isFile()) {
            const ext = extname(file);
            if (['.js', '.jsx'].includes(ext)) {
                const tsFile = renameJs2Ts(file);
                gitRename(file, tsFile);
                log(chalk.green('[rename2ts]'), relative(CWD, file), ' -> ', relative(CWD, tsFile));
            } else if (file.endsWith('index.d.ts')) {
                const tsFile = resolve(dirname(file), 'types.ts');
                gitRename(file, tsFile);
                log(chalk.green('[rename2ts]'), relative(CWD, file), ' -> ', relative(CWD, tsFile));
            }
        } else {
            warn('不能处理的文件类型', file);
        }
    }
}

registryTask(__filename, 'rename2ts', async () => {
    if (!TARGETS.length) {
        throw new Error('请指定一个合法目录');
    }
    await renameDirs(TARGETS);
    warn('为保证重命名能够被 git 追踪，请执行一次 commit');
});
