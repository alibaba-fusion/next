import { resolve } from 'path';
import { existsSync } from 'fs-extra';
// @ts-expect-error ignore
import * as yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

export const argv = yargs(hideBin(process.argv)).argv as {
    _: string[];
    [key: string]: unknown;
};

export const cwd = process.cwd();
export const targets = (() => {
    const dirs = argv._.map(dir => [resolve(cwd, dir), resolve(cwd, 'components', dir)])
        .flat()
        .filter(dir => existsSync(dir));
    return Array.from(new Set(dirs));
})();

export function beforeExit(task: () => unknown) {
    const exitSignals = [
        'SIGHUP',
        'SIGINT',
        'SIGQUIT',
        'SIGILL',
        'SIGTRAP',
        'SIGABRT',
        'SIGBUS',
        'SIGFPE',
        'SIGUSR1',
        'SIGSEGV',
        'SIGUSR2',
        'SIGTERM',
    ];
    const exitSignalSet = new Set(exitSignals);
    exitSignals.forEach(sig => {
        if (process.listenerCount(sig) > 0) {
            process.removeAllListeners(sig);
        }
        process.on(sig, async () => {
            await task();
            process.exit(0);
        });
    });
    process.prependListener('uncaughtException', async e => {
        await task();
        throw e;
    });
    process.prependListener('unhandledRejection', async reason => {
        console.error('unhandledRejection', JSON.stringify(reason));
        await task();
        process.exit(1);
    });
    process.on('newListener', (name, listener) => {
        if (exitSignalSet.has(name as string)) {
            process.nextTick(() => {
                process.off(name, listener);
            });
        }
    });
}
