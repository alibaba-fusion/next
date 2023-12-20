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

import { resolve, relative, extname } from 'path';
import { readdirSync, statSync, readFileSync, renameSync } from 'fs';
import chalk from 'chalk';
import { CWD, TARGETS, execSync, getBin, log, warn } from './utils';

if (!TARGETS.length) {
    throw new Error('请指定一个合法目录');
}

function renameJs2Ts(js: string) {
    const text = readFileSync(js, 'utf-8');
    if (/<[a-zA-Z][\s\S]*(>|\/>)/m.test(text)) {
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

async function renameDirs(files: string[]) {
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
            }
        } else {
            warn('不能处理的文件类型', file);
        }
    }
}

renameDirs(TARGETS).then(() => {
    log();
    warn('为保证重命名能够被 git 追踪，请执行一次 commit');
    log();
});
