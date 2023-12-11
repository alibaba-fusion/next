let timestamp = Date.now();

/**
 * 生成全局唯一的id
 * @param  {String} [prefix=''] 前缀字符串
 * @return {String}
 *
 * @example
 * guid(); // j7jv509c
 * guid('prefix-'); // prefix-j7jv509d
 */
export function guid(prefix?: string): string {
    prefix = prefix || '';

    return prefix + (timestamp++).toString(36);
}

export default guid;
