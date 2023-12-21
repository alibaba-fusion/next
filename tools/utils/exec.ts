import { spawnSync, execSync as nodeExecSync, SpawnSyncOptions } from 'child_process';
import { CWD } from './consts';

/**
 * 执行 command line 命令
 * @param bin - 命令路径
 * @param args - 参数列表
 * @param cwd - 自定义执行路径
 * @returns false: 失败; true: 成功; null: 中断；
 */
export function execSync(bin: string, args: string[], options?: SpawnSyncOptions) {
    const child = spawnSync(bin, args, { stdio: 'inherit', cwd: CWD, ...options });
    if (!child.status) {
        return child.status === 0 ? true : null;
    } else {
        return false;
    }
}

/**
 * 获取命令输入字符
 * @param bin - 命令路径
 * @param args - 参数列表
 * @param cwd - 自定义执行路径
 */
export function querySync(bin: string, args: string[], cwd?: string) {
    return nodeExecSync([bin].concat(args).join(' '), { cwd, encoding: 'utf-8' });
}
