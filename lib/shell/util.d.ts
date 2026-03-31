import type { CollapseMap } from './types';
/**
 * 判断是否为布尔类型
 * @param val - 要判断的值，例如 'str', undefined, null, true, false, 0 等
 * @returns boolean
 */
export declare function isBoolean(val?: unknown): val is boolean;
export declare function getCollapseMap(device?: string): CollapseMap;
