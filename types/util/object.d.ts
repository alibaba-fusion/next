import {
    type JSXElementConstructor,
    type ComponentClass,
    type ForwardRefExoticComponent,
} from 'react';
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
export declare function typeOf(obj?: unknown): string;
/**
 * 判断是否是数组或类数组对象
 * @example
 * isArrayLike([]) === true
 * isArrayLike(arguments) === true
 * isArrayLike(this.props.children) === true
 */
export declare function isArrayLike(obj: unknown): obj is ArrayLike<unknown>;
/**
 * 判断对象是否是一个 promise，即是否可以用.then
 */
export declare function isPromise(obj: unknown): obj is Promise<unknown>;
/**
 * 是否是一个纯净的对象
 * @see https://github.com/jonschlinkert/is-plain-object
 */
export declare function isPlainObject(obj?: unknown): obj is Record<string, unknown>;
/**
 * 对象浅比较
 * @example
 * object.shallowEqual(\{a: 100\}, \{a: 100\}); // true
 */
export declare function shallowEqual(
    objA: unknown,
    objB: unknown,
    compare?: (val1: unknown, val2: unknown, key: string) => boolean | undefined
): boolean;
export declare function each<Obj extends Record<string, unknown>>(
    obj: Obj,
    callback: (
        val: Obj extends Record<PropertyKey, infer V> ? V : unknown,
        key: string
    ) => void | boolean,
    direction?: number
): typeof obj;
export declare function each<Arr extends ArrayLike<unknown>>(
    obj: Arr,
    callback: (val: Arr extends ArrayLike<infer T> ? T : unknown, key: number) => void | boolean,
    direction?: number
): typeof obj;
/**
 * 过滤出其它属性
 * @param holdProps - 过滤的参照对象，最终的结果只保留不在参照对象中的 key
 * @param props - 被过滤的对象
 *
 * @example
 * object.pickOthers(FooComponent.propTypes, this.props);
 * object.pickOthers(['className', 'onChange'], this.props);
 */
export declare function pickOthers<T extends string, P extends Record<string, unknown>>(
    holdProps: T[] | Partial<Record<T, any>>,
    props: P
): Writable<Omit<P, T>>;
/**
 * 过滤出需要的属性
 * @param holdProps - 过滤的参照对象，最终的结果只保留在参照对象中的 key
 * @param props - 被过滤的对象
 *
 * @example
 * object.pickProps(FooComponent.propTypes, this.props);
 * object.pickProps(['className', 'onChange'], this.props);
 */
export declare function pickProps<T extends string, P extends Record<string, unknown>>(
    holdProps: T[] | Record<T, unknown>,
    props: P
): Writable<Pick<P, T>>;
/**
 * 过滤出带 prefix 的属性
 * @param holdProps - 过滤的参照对象，最终的结果只保留不在参照对象中的 key
 * @param prefix - 包含的字符串
 *
 * @example
 * object.pickAttrsWith(FooComponent.propTypes, 'data-');
 */
export declare function pickAttrsWith<P extends Record<string, unknown>, S extends string = string>(
    holdProps: P,
    prefix: S
): Pick<P, Extract<keyof P, `${string}${S}${string}`>>;
/**
 * Checks if value is `null` or `undefined`.
 */
export declare function isNil(value: unknown): value is null | undefined;
export declare function deepMerge(target: unknown): typeof target;
export declare function deepMerge(target: unknown, ...sources: unknown[]): Record<string, unknown>;
type AnyFunction = ((...args: unknown[]) => unknown) | (new (...args: unknown[]) => unknown);
/**
 * 组件是否为 Fucntion Component
 * @param component - 传入的组件
 */
export declare function isFunctionComponent(
    component: AnyFunction
): component is JSXElementConstructor<unknown>;
/**
 * 组件是否为 Class Component
 * @param component - 传入的组件
 */
export declare function isClassComponent(component?: unknown): component is ComponentClass;
export declare function isForwardRefComponent(
    component?: unknown
): component is ForwardRefExoticComponent<any>;
/**
 * 判断是否为 isReactFragmentElement
 * @param component - 传入的组件
 */
export declare function isReactFragmentElement(component?: unknown): boolean;
/**
 * Creates an array of the own enumerable string keyed property values of object.
 * @example
 * // returns [1, 2]
 * values(\{a: 1, b: 2\})
 */
export declare function values<T>(obj: ObjectOrArray<T>): T[];
export {};
