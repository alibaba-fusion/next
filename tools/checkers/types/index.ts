/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-17 16:43:00
  description: 检测目标目录所有 ts 文件类型定义
  example:
    npm run check:types button
    npm run check:types ./components/button
------------------------------------------------------------
*/
import { writeFileSync, readFileSync, existsSync, writeJSONSync } from 'fs-extra';
import { resolve, join } from 'path';
import chalk from 'chalk';
import { beforeExit, CWD, TARGETS, execSync, log, error } from '../../utils';

const tscPath = resolve(CWD, 'node_modules/.bin/tsc');
if (!existsSync(tscPath)) {
    throw new Error('Not found tsc');
}

if (!TARGETS.length) {
    log(chalk.yellow('[Example]:'));
    log(chalk.green('npm run check:types button table'));
    log(chalk.green(`npm run check:types ./components/button ./components/table`));
    log();
    throw new Error('请指定一个合法目录');
}

const checkTsConfigPath = resolve(__dirname, 'config.json');

const include = TARGETS.map(dir => [join(dir, '**/*.ts'), join(dir, '**/*.tsx')]).flat();
const checkTsConfigText = readFileSync(checkTsConfigPath, 'utf-8');

const checkTsConfig: { include: string[] } = JSON.parse(checkTsConfigText);

checkTsConfig.include = checkTsConfig.include.map(str => resolve(CWD, str)).concat(include);
writeJSONSync(checkTsConfigPath, checkTsConfig, { spaces: 4 });
const rollback = () => {
    writeFileSync(checkTsConfigPath, checkTsConfigText, 'utf-8');
};

beforeExit(rollback);

const result = execSync(tscPath, ['-p', checkTsConfigPath]);
rollback();

if (result === true) {
    log('类型校验通过');
} else if (result === false) {
    error('类型校验失败');
}
