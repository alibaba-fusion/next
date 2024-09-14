import type { ObjectType } from './types';
/**
 * 过滤 undefined 类型的值
 */
export declare function filterUndefinedValue(object: ObjectType): ObjectType;
/**
 * 从 obj 中去除 subObj
 */
export declare function stripObject(obj: ObjectType, subObj: ObjectType): ObjectType;
