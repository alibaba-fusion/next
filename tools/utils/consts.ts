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
export const TARGETS = (() => {
    const dirs = ARGV._.map(dir => [resolve(CWD, dir), resolve(CWD, 'components', dir)])
        .flat()
        .filter(dir => existsSync(dir));
    return Array.from(new Set(dirs));
})();
