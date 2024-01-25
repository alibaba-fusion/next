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
import glob from 'glob';
import { CWD, TARGETS, ARGV, execSync, registryTask } from './utils';

const cypressBin = resolve(CWD, 'node_modules/.bin/cypress');

if (!existsSync(cypressBin)) {
    throw new Error('Not found cypress');
}

const { head, browser = undefined, node = undefined } = ARGV;
const isSpecEnv = [browser, node].some(Boolean);

function getMatchedSpecs(patterns: string[]) {
    const files = patterns
        .map(p => {
            return glob.sync(p, { cwd: CWD, absolute: true });
        })
        .flat();
    return files;
}

registryTask(__filename, 'test', async () => {
    if (head) {
        execSync(cypressBin, ['open', '--component', '-b', 'chrome']);
        return;
    }

    if (!isSpecEnv || browser) {
        const patterns = TARGETS.map(dir => [
            relative(CWD, join(dir, '**/__tests__/**/*-spec.{ts,tsx}')),
        ]).flat();
        const files = getMatchedSpecs(patterns);
        if (files.length) {
            await registryTask(__filename, 'browser', () => {
                execSync(cypressBin, ['run', '--component', '-b', 'chrome', '-s', ...patterns]);
            });
        }
    }
    if (!isSpecEnv || node) {
        const patterns = TARGETS.map(dir => [
            relative(CWD, join(dir, '**/__tests__/**/*-node.{ts,tsx}')),
        ]).flat();
        const files = getMatchedSpecs(patterns);
        if (files.length) {
            await registryTask(__filename, 'node', async () => {
                process.env.TS_NODE_PROJECT = resolve(__dirname, './tsconfig.json');
                require('ts-mocha');
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                const Mocha = require('mocha');
                const mocha = new Mocha();
                files.forEach(f => mocha.addFile(f));
                await new Promise<void>((resolve, reject) => {
                    mocha.run((failures: number) => {
                        failures ? reject(failures) : resolve();
                    });
                });
            });
        }
    }
});
