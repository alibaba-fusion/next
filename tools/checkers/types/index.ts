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
import { writeFileSync, readFileSync, writeJSONSync } from 'fs-extra';
import { resolve, join } from 'path';
import { CWD, TARGETS, execSync, registryTask, getBin } from '../../utils';

let rollbackImpl = () => {};
const rollback = () => {
    rollbackImpl();
};

function checkTypes() {
    const tscPath = getBin('tsc');
    if (!tscPath) {
        throw new Error('Not found tsc');
    }

    const checkTsConfigPath = resolve(__dirname, 'config.json');

    const include = TARGETS.map(dir => [join(dir, '**/*.ts'), join(dir, '**/*.tsx')]).flat();
    const checkTsConfigText = readFileSync(checkTsConfigPath, 'utf-8');

    const checkTsConfig: { include: string[] } = JSON.parse(checkTsConfigText);

    checkTsConfig.include = checkTsConfig.include.map(str => resolve(CWD, str)).concat(include);
    writeJSONSync(checkTsConfigPath, checkTsConfig, { spaces: 4 });
    rollbackImpl = () => {
        writeFileSync(checkTsConfigPath, checkTsConfigText, 'utf-8');
    };

    execSync(tscPath, ['-p', checkTsConfigPath]);

    rollback();
}

export function registryCheckTypes(file = __filename) {
    return registryTask(file, 'types check', checkTypes, rollback);
}

registryCheckTypes();
