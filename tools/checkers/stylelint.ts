/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-19 15:19:10
  description: css 样式检查
  example: 
    npm run check:stylelint button
    npm run check:stylelint button --fix
    npm run check:stylelint ./components/button table
------------------------------------------------------------
*/

import chalk from 'chalk';
import { execSync, TARGETS, ARGV, getBin, log, error } from '../utils';

const binPath = getBin('stylelint');

if (!binPath) {
    throw new Error('Not found stylelint');
}

if (!TARGETS.length) {
    log(chalk.yellow('[Example]:'));
    log('npm run check:stylelint button');
    log('npm run check:stylelint button --fix');
    log(`npm run check:stylelint ./components/button table`);

    throw new Error('请指定一个合法目录');
}

const args: string[] = [];

if (ARGV.fix) {
    args.push('--fix');
}
args.push(...TARGETS);

const result = execSync(binPath, args);

if (result === true) {
    log('stylelint 校验通过');
} else if (result === false) {
    error('stylelint 校验失败');
}
