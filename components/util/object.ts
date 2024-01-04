import React, { ReactElement, JSXElementConstructor, ComponentClass } from 'react';

export type ObjectOrArray<T = unknown> = Record<PropertyKey, T> | ArrayLike<T>;
type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};

/**
 * 获取对象的类型
 * @example
 * typeOf([]) === 'Array'
 * typeOf() === 'Undefined'
 * typeOf(1) === 'Number'
 */
export function typeOf(obj?: unknown): string {
    return Object.prototype.toString.call(obj).replace(/\[object\s|]/g, '');
}

/**
 * 判断是否是数组或类数组对象
 * @example
 * isArrayLike([]) === true
 * isArrayLike(arguments) === true
 * isArrayLike(this.props.children) === true
 */
export function isArrayLike(obj: unknown): obj is ArrayLike<unknown> {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    const length = !!obj && 'length' in obj && obj.length;
    const type = typeOf(obj);

    return (
        type === 'Array' ||
        length === 0 ||
        (typeof length === 'number' && length > 0 && length - 1 in obj)
    );
}

/**
 * 判断对象是否是一个 promise，即是否可以用.then
 */
export function isPromise(obj: unknown): obj is Promise<unknown> {
    return (
        !!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof (obj as Promise<unknown>).then === 'function'
    );
}

/**
 * 是否是一个纯净的对象
 * @see https://github.com/jonschlinkert/is-plain-object
 */
export function isPlainObject(obj?: unknown): obj is Record<string, unknown> {
    if (typeOf(obj) !== 'Object') {
        return false;
    }

    const ctor = (obj as Record<string, unknown>).constructor;

    if (typeof ctor !== 'function') {
        return false;
    }

    const prot = ctor.prototype;

    if (typeOf(prot) !== 'Object') {
        return false;
    }

    if (!prot.hasOwnProperty('isPrototypeOf')) {
        return false;
    }

    return true;
}

/**
 * 对象浅比较
 * @example
 * object.shallowEqual(\{a: 100\}, \{a: 100\}); // true
 */
export function shallowEqual(
    objA: unknown,
    objB: unknown,
    compare?: (val1: unknown, val2: unknown, key: string) => boolean | undefined
): boolean {
    if (objA === objB) {
        return true;
    }

    // 其中一个不是 object，则不相等
    if (!objA || !objB || typeof objA + typeof objB !== 'objectobject') {
        return false;
    }

    const keyA = Object.keys(objA);
    const keyB = Object.keys(objB);
    const len = keyA.length;

    // key 数量不一致则不相等
    if (len !== keyB.length) {
        return false;
    }

    const hasCallback = typeof compare === 'function';

    for (let i = 0; i < len; i++) {
        const key = keyA[i];

        if (!Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }

        const valA = (objA as Record<string, unknown>)[key];
        const valB = (objB as Record<string, unknown>)[key];

        const ret = hasCallback ? compare(valA, valB, key) : void 0;

        if (ret === false || (ret === void 0 && valA !== valB)) {
            return false;
        }
    }

    return true;
}

export function each<Obj extends Record<string, unknown>>(
    obj: Obj,
    callback: (
        val: Obj extends Record<PropertyKey, infer V> ? V : unknown,
        key: string
    ) => void | boolean,
    direction?: number
): typeof obj;
export function each<Arr extends ArrayLike<unknown>>(
    obj: Arr,
    callback: (val: Arr extends ArrayLike<infer T> ? T : unknown, key: number) => void | boolean,
    direction?: number
): typeof obj;
/**
 * 遍历对象或数组，或者类数组，例如 React 中的 children 对象、arguments 等
 * @param obj - 目标对象或类数组
 * @param callback - fn(n, i) or fn(val, key)
 * @param direction - 是否倒序遍历，只对数组有效，传入 -1 则是倒序
 *
 * @example
 * // 遍历数组
 * object.each([100, 200, 300], (n, i) =\> console.log(n, i));
 * // 遍历json对象
 * object.each(\{a: 100, b: 200\}, (value, key) =\> console.log(key, value));
 * // 遍历React子节点
 * object.each(this.props.children, (child, index) =\> console.log(child));
 * // 遍历arguments
 * object.each(arguments, (arg, i) =\> console.log(arg));
 */
export function each(
    obj: ObjectOrArray,
    callback: (val: any, key: any) => void | boolean,
    direction?: number
): typeof obj {
    const reversed = direction === -1;

    if (isArrayLike(obj)) {
        const length = obj.length;
        for (let i = reversed ? length - 1 : 0; i < length && i >= 0; reversed ? i-- : i++) {
            const shouldContinue = callback.call(obj[i], obj[i], i);

            if (shouldContinue === false) {
                break;
            }
        }
    } else {
        for (const key in obj) {
            /* istanbul ignore else */
            if (obj.hasOwnProperty(key)) {
                const shouldContinue = callback.call(obj[key], obj[key], key);

                if (shouldContinue === false) {
                    break;
                }
            }
        }
    }

    return obj;
}

// @private 判断 key 是否在数组或对象中
const _isInObj = <O extends ObjectOrArray>(key: PropertyKey, obj: O, isArray?: boolean): boolean =>
    isArray ? (obj as Array<unknown>).indexOf(key) > -1 : key in obj;

/**
 * 过滤出其它属性
 * @param holdProps - 过滤的参照对象，最终的结果只保留不在参照对象中的 key
 * @param props - 被过滤的对象
 *
 * @example
 * object.pickOthers(FooComponent.propTypes, this.props);
 * object.pickOthers(['className', 'onChange'], this.props);
 */
export function pickOthers<T extends string, P extends Record<string, unknown>>(
    holdProps: T[] | Record<T, any>,
    props: P
): Writable<Omit<P, T>> {
    const others: any = {};
    const isArray = typeOf(holdProps) === 'Array';

    for (const key in props) {
        if (!_isInObj(key, holdProps, isArray)) {
            others[key] = props[key];
        }
    }

    return others;
}

/**
 * 过滤出需要的属性
 * @param holdProps - 过滤的参照对象，最终的结果只保留在参照对象中的 key
 * @param props - 被过滤的对象
 *
 * @example
 * object.pickProps(FooComponent.propTypes, this.props);
 * object.pickProps(['className', 'onChange'], this.props);
 */
export function pickProps<P extends Record<string, unknown>>(
    holdProps: ObjectOrArray,
    props: P
): Partial<P> {
    const others: Partial<P> = {};
    const isArray = typeOf(holdProps) === 'Array';

    for (const key in props) {
        if (_isInObj(key, holdProps, isArray)) {
            others[key] = props[key];
        }
    }

    return others;
}

/**
 * 过滤出带 prefix 的属性
 * @param holdProps - 过滤的参照对象，最终的结果只保留不在参照对象中的 key
 * @param prefix - 包含的字符串
 *
 * @example
 * object.pickAttrsWith(FooComponent.propTypes, 'data-');
 */
export function pickAttrsWith<P extends Record<string, unknown>>(
    holdProps: P,
    prefix: string
): Partial<P> {
    const others: Partial<P> = {};

    for (const key in holdProps) {
        if (key.match(prefix)) {
            others[key] = holdProps[key];
        }
    }

    return others;
}

/**
 * Checks if value is `null` or `undefined`.
 */
export function isNil(value: unknown): value is null | undefined {
    // It will returns `true` only if `null` or `undefined` compare with `null`
    // with loose equaliy
    return value == null; // eslint-disable-line eqeqeq
}
export function deepMerge(target: unknown): typeof target;
export function deepMerge(target: unknown, ...sources: unknown[]): Record<string, unknown>;
/**
 * Deep merge two objects.
 * @see https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge?page=1&tab=votes#tab-top
 */
export function deepMerge(
    target: unknown,
    ...sources: unknown[]
): typeof target | Record<string, unknown> {
    if (!sources.length) return target;
    const source = sources.shift();

    if (!isPlainObject(target)) {
        target = {};
    }

    if (isPlainObject(target) && isPlainObject(source)) {
        for (const key in source) {
            // 如果是 object 进行深拷贝
            if (isPlainObject(source[key]) && !React.isValidElement(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                // fix {a: 'te'}, {a:{b:3}}
                if (!isPlainObject(target[key])) {
                    target[key] = source[key];
                }
                deepMerge(target[key], source[key]);
                // string/number/function/react node 等直接复制
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return deepMerge(target, ...sources);
}

type AnyFunction = ((...args: unknown[]) => unknown) | (new (...args: unknown[]) => unknown);

/**
 * 组件是否为 Fucntion Component
 * @param component - 传入的组件
 */
export function isFunctionComponent(
    component: AnyFunction
): component is JSXElementConstructor<unknown> {
    return (
        typeOf(component) === 'Function' &&
        component.prototype &&
        component.prototype.isReactComponent === undefined
    );
}

/**
 * 组件是否为 Class Component
 * @param component - 传入的组件
 */
export function isClassComponent(component?: unknown): component is ComponentClass {
    return (
        typeOf(component) === 'Function' &&
        (component as AnyFunction).prototype &&
        (component as AnyFunction).prototype.isReactComponent !== undefined
    );
}

export function isReactFragment(component?: null): false;
export function isReactFragment(component: { type: typeof React.Fragment }): true;
export function isReactFragment(component: typeof React.Fragment): true;
export function isReactFragment(component: unknown): boolean;
/**
 * 判断是否为 ReactFragment
 * @param component - 传入的组件
 */
export function isReactFragment(component?: unknown): boolean {
    if (isNil(component)) {
        return false;
    }

    if ((component as ReactElement).type) {
        return (component as ReactElement).type === React.Fragment;
    }
    return component === React.Fragment;
}

/**
 * Creates an array of the own enumerable string keyed property values of object.
 * @example
 * // returns [1, 2]
 * values(\{a: 1, b: 2\})
 */
export function values<T>(obj: ObjectOrArray<T>): T[] {
    if (Object.values) {
        return Object.values(obj);
    }

    const vals: T[] = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            vals.push((obj as Record<string, T>)[key]);
        }
    }

    return vals;
}
