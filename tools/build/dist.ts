/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-25 17:34:40
  description: 构建 dist 目录
------------------------------------------------------------
*/
import { resolve } from 'path';
import { removeSync } from 'fs-extra';
import { CWD, registryTask } from '../utils';
import pack = require('./tools/pack');
import packAdaptor = require('./tools/pack-adaptor');

const distPath = resolve(CWD, 'dist');

export function registryDist(file = __filename) {
    return registryTask(file, 'dist', async function () {
        await registryTask(file, 'dist:clean', () => {
            removeSync(distPath);
        });
        await registryTask(file, 'dist:next', pack);
        await registryTask(file, 'dist:next:minify', pack.bind(undefined, true));
        await registryTask(file, 'dist:adaptor', packAdaptor.run, packAdaptor.rollback);
    });
}

registryDist();
