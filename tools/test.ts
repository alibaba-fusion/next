/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-17 18:05:55
  description: 执行测试
  example:
    test in head: ts-node ./tools/test.ts button --head
    test in headless: ts-node ./tools/test.ts button ./components/affix
    test all in headless: ts-node ./tools/test.ts
------------------------------------------------------------
*/

import { join, relative, resolve } from 'path';
import { spawnSync } from 'child_process';
import { existsSync } from 'fs-extra';
import { cwd, targets, argv } from './utils';

const cypressBin = resolve(cwd, 'node_modules/.bin/cypress');

if (!existsSync(cypressBin)) {
    throw new Error('Not found cypress');
}

if (argv.head) {
    spawnSync(cypressBin, ['open', '--component', '-b', 'chrome'], { cwd, stdio: 'inherit' });
} else {
    const specArgs = targets.map(dir => [relative(cwd, join(dir, '__tests__/**/*'))]).flat();
    if (specArgs.length) {
        specArgs.unshift('-s');
    }
    spawnSync(cypressBin, ['run', '--component', '-b', 'chrome'].concat(specArgs), {
        cwd,
        stdio: 'inherit',
    });
}
