/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-25 15:53:12
  description: 任务管理器
------------------------------------------------------------
*/
import co from 'co';
import { resolve } from 'path';
import { existsSync, outputFileSync, readFileSync } from 'fs-extra';
import { log, error, setLevel, getLevel, setSlient } from './log';
import { beforeExit } from './common';
import { ARGV, CWD } from './consts';

process.on('unhandledRejection', e => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
});

const isContinue = Boolean(ARGV.continue);

class Cache {
    static CACHE_PATH = resolve(CWD, 'node_modules/.cache/.next_task');
    constructor() {
        this.read();
    }
    private _cache: { completes: Array<string> } = { completes: [] };
    private read() {
        if (!existsSync(Cache.CACHE_PATH)) {
            return;
        }
        const cacheText = readFileSync(Cache.CACHE_PATH, 'utf-8');
        this._cache = JSON.parse(cacheText);
    }
    private write() {
        outputFileSync(Cache.CACHE_PATH, JSON.stringify(this._cache));
    }
    clear() {
        this._cache = { completes: [] };
        this.write();
    }
    addComplete(name: string) {
        this._cache.completes.push(name);
        this.write();
    }
    isComplete(name: string) {
        return this._cache.completes.includes(name);
    }
}

const cache = new Cache();
process.on('exit', code => {
    if (code === 0) {
        // 正常退出，清空缓存
        cache.clear();
    }
});

export interface Task {
    name: string;
    exec: () => void | Promise<void> | Generator | AsyncGenerator;
    rollback?: () => unknown;
}

const tasks = new Map<string, Task>();
const taskYieldMap = new Map<string, () => unknown>();

export async function run() {
    const rollbackSet = new Set<() => unknown>();
    const runRollback = async (rollback?: () => unknown) => {
        if (!rollback) {
            return Promise.resolve();
        }
        if (rollbackSet.has(rollback)) {
            rollbackSet.delete(rollback);
            setSlient();
            const result = await rollback();
            setSlient(false);
            return result;
        }
        return Promise.resolve();
    };
    beforeExit(async () => {
        for (const fn of Array.from(rollbackSet.values()).reverse()) {
            await runRollback(fn);
        }
    });
    await co(function* () {
        for (const [key, { name, exec, rollback }] of tasks.entries()) {
            log(`> run "${name}"...`);
            const logLevel = getLevel() + 1;
            setLevel(logLevel);
            let pass = true;
            try {
                tasks.delete(key);
                if (rollback) {
                    rollbackSet.add(rollback);
                }
                yield exec() ?? Promise.resolve();
                taskYieldMap.get(key)?.();
                setLevel(logLevel - 1);
                cache.addComplete(key);
                log(`> run "${name}" done.`);
            } catch (e) {
                pass = false;
                yield runRollback(rollback);
                setLevel(logLevel - 1);
                throw e;
            } finally {
                if (!pass) {
                    error(`> run "${name} failed."`);
                }
            }
        }
    });
}

let timeout: ReturnType<typeof setTimeout>;

function triggerRun() {
    clearTimeout(timeout);
    timeout = setTimeout(run, 200);
}

export async function registryTask(
    file: string,
    name: string,
    exec: Task['exec'],
    rollback?: Task['rollback']
) {
    const args = process.argv.slice(0, 2);
    if (!args.includes(file)) {
        return;
    }
    const fn = function* () {
        const key = `${file}:${name}`;
        if (isContinue && cache.isComplete(key)) {
            return;
        }
        if (tasks.has(key)) {
            throw new Error(`Task exists: ${key}`);
        }
        tasks.set(key, {
            name,
            exec,
            rollback,
        });
        triggerRun();
        yield new Promise<void>(resolve => {
            taskYieldMap.set(key, resolve);
        });
    };
    await co(fn);
}
