import { isAbsolute, join, resolve } from 'path';
import { existsSync } from 'fs-extra';
import _ = require('lodash');
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
            process.exit(1);
        });
    });
    process.prependListener('uncaughtException', async e => {
        await task();
        process.exit(1);
    });
    process.prependListener('unhandledRejection', async () => {
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

export async function getRegularTsconfigJson(tsconfigText: string) {
    const tsconfck = await import('tsconfck');
    const json = tsconfck.toJson(tsconfigText);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return JSON.parse(json) as Record<string, any>;
}

export function findFile(
    filename: string,
    extnames = ['.tsx', '.ts', '.jsx', '.js', '.scss', '.sass', '.css']
) {
    if (!isAbsolute(filename)) {
        throw new Error(`Could not find relative filename: ${filename}`);
    }
    if (existsSync(filename)) {
        return filename;
    }
    const noExtName = filename.replace(/\.[^/]+$/, '');
    for (const ext of extnames) {
        const fullName = noExtName + ext;
        if (existsSync(fullName)) {
            return fullName;
        }
    }
    return null;
}

export function getComponentName(name: string) {
    const camelCaseName = _.camelCase(name);
    return camelCaseName[0].toUpperCase() + camelCaseName.slice(1);
}
