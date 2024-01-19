import path from 'path';
import { spawnSync, execSync as nodeExecSync, SpawnSyncOptions } from 'child_process';
import { CWD } from './consts';
import { error, log } from './log';

/**
 * 执行 command line 命令
 * @param bin - 命令路径
 * @param args - 参数列表
 * @param cwd - 自定义执行路径
 * @returns false: 失败; true: 成功; null: 中断；
 */
export function execSync(bin: string, args: string[], options?: SpawnSyncOptions) {
    log('SHELL:', `${path.basename(bin)} ${args.join(' ')}`);
    const child = spawnSync(bin, args, { stdio: 'inherit', cwd: CWD, ...options });
    if (child.status !== 0) {
        if (child.status) {
            child.stderr && error(child.stderr.toString());
            throw new Error('非正常退出');
        } else {
            throw new Error('命令终止');
        }
    }
}

/**
 * 获取命令输入字符
 * @param bin - 命令路径
 * @param args - 参数列表
 * @param cwd - 自定义执行路径
 */
export function querySync(bin: string, args: string[], cwd?: string) {
    return nodeExecSync([bin].concat(args).join(' '), { cwd: cwd || CWD, encoding: 'utf-8' }).replace(
        /^[\s\n]+|[\s\n]+$/g,
        ''
    );
}
