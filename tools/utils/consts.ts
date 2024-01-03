import { resolve } from 'path';
import { existsSync } from 'fs-extra';
// @ts-expect-error ignore
import * as yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

export const ARGV = yargs(hideBin(process.argv)).argv as {
    _: string[];
    [key: string]: unknown;
};
export const DEBUG = Boolean(ARGV.debug);
export const CWD = process.cwd();
export const SRC_DIR = 'components';
export const SRC_DIR_PATH = resolve(CWD, SRC_DIR);
export const DIST_PATH = resolve(CWD, 'dist');
export const TSCONFIG_PATH = resolve(CWD, 'tsconfig.json');
export const PKG_PATH = resolve(CWD, 'package.json');
export const TARGETS = (() => {
    const dirs = ARGV._.map(dir => [resolve(CWD, dir), resolve(SRC_DIR_PATH, dir)])
        .flat()
        .filter(dir => existsSync(dir));
    const results = Array.from(new Set(dirs));

    if (!results.length) {
        return [SRC_DIR_PATH];
    }
    return results;
})();
