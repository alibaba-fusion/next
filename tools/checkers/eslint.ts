/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-18 14:19:12
  description: 执行 eslint 检查
------------------------------------------------------------
*/
import { resolve, join } from 'path';
import { existsSync } from 'fs-extra';
import chalk from 'chalk';
import { spawnSync } from 'child_process';
import { cwd, targets } from '../utils';

const binPath = resolve(cwd, 'node_modules/.bin/eslint');
if (!existsSync(binPath)) {
    throw new Error('Not found eslint');
}

if (!targets.length) {
  console.log(chalk.yellow('[Example]:'));
  console.log(chalk.green('npm run check:eslint button table'));
  console.log(chalk.green(`npm run check:eslint ./components/button ./components/table`));
  console.log();
  throw new Error('请指定一个合法目录');
}


const includes = targets.map(dir => [join(dir, '**/*.ts'), join(dir, '**/*.tsx')]).flat();

const child = spawnSync(binPath, includes, { cwd, stdio: 'inherit' });

if (!child.status) {
    if (child.status === 0) {
        console.log(chalk.green('校验通过'));
    }
} else {
    console.log(chalk.red('校验失败'));
}
