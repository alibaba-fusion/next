/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-18 14:19:12
  description: 执行 eslint 检查
  example:
    npm run check:eslint button
    npm run check:eslint ./components/button
    npm run check:eslint button --fix
------------------------------------------------------------
*/
import { join } from 'path';
import chalk from 'chalk';
import { TARGETS, ARGV, execSync, getBin, log, error } from '../utils';

const binPath = getBin('eslint');
if (!binPath) {
    throw new Error('Not found eslint');
}

if (!TARGETS.length) {
    log(chalk.yellow('[Example]:'));
    log(chalk.green('npm run check:eslint button table'));
    log(chalk.green(`npm run check:eslint ./components/button ./components/table`));
    log();
    throw new Error('请指定一个合法目录');
}

const args: string[] = ['--no-error-on-unmatched-pattern'];
const fix = ARGV.fix;
if (fix) {
    args.push('--fix');
}
const includes = TARGETS.map(dir => [join(dir, '**/*.ts'), join(dir, '**/*.tsx')]).flat();
args.push(...includes);

const result = execSync(binPath, args);

if (result === true) {
    log('eslint 校验通过');
} else if (result === false) {
    error('eslint 校验失败');
}
