/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-17 16:43:00
  description: 检测目标目录所有 ts 文件类型定义
  example: ts-node ./tools/checkers/types/index.ts ./components/table button
------------------------------------------------------------
*/
import { writeFileSync, readFileSync, existsSync, writeJSONSync } from 'fs-extra';
import { resolve, join } from 'path';
import { spawnSync } from 'child_process';
import chalk from 'chalk';
import { beforeExit, cwd, targets } from '../../utils';

const tscPath = resolve(cwd, 'node_modules/.bin/tsc');
if (!existsSync(tscPath)) {
    throw new Error('Not found tsc');
}

if (!targets.length) {
    console.log(chalk.yellow('[Example]:'));
    console.log(chalk.green('npm run check:types button table'));
    console.log(chalk.green(`npm run check:types ./components/button ./components/table`));
    console.log();
    throw new Error('请指定一个合法目录');
}

const checkTsConfigPath = resolve(__dirname, 'config.json');

const include = targets.map(dir => [join(dir, '**/*.ts'), join(dir, '**/*.tsx')]).flat();
const checkTsConfigText = readFileSync(checkTsConfigPath, 'utf-8');

const checkTsConfig: { include: string[] } = JSON.parse(checkTsConfigText);

checkTsConfig.include = checkTsConfig.include.map(str => resolve(cwd, str)).concat(include);
writeJSONSync(checkTsConfigPath, checkTsConfig, { spaces: 4 });
const rollback = () => {
    writeFileSync(checkTsConfigPath, checkTsConfigText, 'utf-8');
};

beforeExit(rollback);

const child = spawnSync(tscPath, ['-p', checkTsConfigPath], { cwd, stdio: 'inherit' });
rollback();

if (!child.status) {
    if (child.status === 0) {
        console.log(chalk.green('校验通过'));
    }
} else {
    console.log(chalk.red('校验失败'));
}
