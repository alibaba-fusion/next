/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-26 16:25:39
  description: 代码检查
------------------------------------------------------------
*/
import { registryTask } from '../utils';
import { registryCheckTypes } from './types';
import { registryCheckEslint } from './eslint';
import { registryCheckStylelint } from './stylelint';

export function registryCheck(file = __filename) {
    return registryTask(file, 'code check', async () => {
        // fixme: ts 升级未完成前暂时取消 types 和 eslint 的全量检查
        // await registryCheckTypes(file);
        // await registryCheckEslint(file);
        await registryCheckStylelint(file);
    });
}
export function registryAllCheck(file = __filename) {
    return registryTask(file, 'code check', async () => {
        await registryCheckTypes(file);
        await registryCheckEslint(file);
        await registryCheckStylelint(file);
    });
}

registryAllCheck();
