import { obj } from '../util';
import type { ObjectType } from './types';

const { isPlainObject } = obj;
/**
 * 过滤 undefined 类型的值
 */
export function filterUndefinedValue(object: ObjectType) {
    if (!isPlainObject(object)) {
        return object;
    }

    const obj: ObjectType = {};

    Object.keys(object).forEach(key => {
        const value = object[key];

        if (value !== undefined) {
            obj[key] = value;
        }
    });

    return obj;
}

/**
 * 从 obj 中去除 subObj
 */
export function stripObject(obj: ObjectType, subObj: ObjectType) {
    const newObject: ObjectType = {};

    Object.keys(obj).forEach(key => {
        if (!(key in subObj)) {
            newObject[key] = obj[key];
        }
    });
    return newObject;
}
