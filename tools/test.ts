/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-17 18:05:55
  description: 执行测试
  example:
    test in head: npm run test:head button
    test in headless: npm run test button
    test all in headless: npm run test
------------------------------------------------------------
*/

import { join, relative, resolve } from 'path';
import { existsSync } from 'fs-extra';
import { CWD, TARGETS, ARGV, execSync, registryTask } from './utils';

const cypressBin = resolve(CWD, 'node_modules/.bin/cypress');

if (!existsSync(cypressBin)) {
    throw new Error('Not found cypress');
}

registryTask(__filename, 'test', () => {
    if (ARGV.head) {
        execSync(cypressBin, ['open', '--component', '-b', 'chrome']);
    } else {
        const specArgs = TARGETS.map(dir => [relative(CWD, join(dir, '**/__tests__/**/*'))]).flat();
        if (specArgs.length) {
            specArgs.unshift('-s');
        }
        execSync(cypressBin, ['run', '--component', '-b', 'chrome'].concat(specArgs));
    }
});
