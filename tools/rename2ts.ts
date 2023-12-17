/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-14 16:13:36
  description: 将目标目录内的所有 js、jsx 文件转换为 ts、tsx 文件
  example: ts-node ./tools/rename2ts.ts ./components/table
------------------------------------------------------------
*/
import { resolve, relative, extname } from 'path';
import { readdirSync, statSync, readFileSync, renameSync } from 'fs';
import chalk from 'chalk';
import { cwd, targets } from './utils';

if (!targets.length) {
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
                renameSync(file, tsFile);
                console.log(
                    chalk.green('[rename2ts]'),
                    relative(cwd, file),
                    ' -> ',
                    relative(cwd, tsFile)
                );
            }
        } else {
            console.warn('不能处理的文件类型', file);
        }
    }
}

renameDirs(targets);
