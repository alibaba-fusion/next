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
import { registryCheckSass } from './sass';
import { registryCheckStylelint } from './stylelint';

export function registryCheck(file = __filename) {
    return registryTask(file, 'code check', async () => {
        await registryCheckTypes(file);
        await registryCheckEslint(file);
        await registryCheckStylelint(file);
        await registryCheckSass(file);
    });
}

registryCheck();
