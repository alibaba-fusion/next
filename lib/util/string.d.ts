/**
 * 将字符串转化为驼峰式写法
 * @param str - 例：-webkit-transition
 * @returns 例：WebkitTransition
 */
export declare function camelcase(str: string): string;
/**
 * 将驼峰式字符串转化为连字符写法
 * @param str - 例：WebkitTransition
 * @returns 例：-webkit-transition
 */
export declare function hyphenate(str?: unknown): string;
/**
 * 替换模板字符串
 * @param tpl - 例：当前\{current\}, 共\{total\}页
 * @param object - 例：\{current: 1, total: 9\}
 */
export declare function template(tpl?: unknown, object?: Record<string, unknown>): string;
