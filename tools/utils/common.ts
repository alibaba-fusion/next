import { join, resolve } from 'path';
import { existsSync } from 'fs-extra';
import { CWD } from './consts';

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

export function getBin(name: string) {
    const binPath = resolve(CWD, join('node_modules/.bin/', name));
    if (existsSync(binPath)) {
        return binPath;
    }
    return null;
}
