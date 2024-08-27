/**
 * 生成全局唯一的 id
 * @param prefix - 前缀字符串，默认为空串
 *
 * @example
 * guid(); // j7jv509c
 * guid('prefix-'); // prefix-j7jv509d
 */
export declare function guid(prefix?: string): string;
export default guid;
