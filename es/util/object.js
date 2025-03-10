import { __read, __spreadArray } from "tslib";
import React from 'react';
/**
 * 获取对象的类型
 * @example
 * typeOf([]) === 'Array'
 * typeOf() === 'Undefined'
 * typeOf(1) === 'Number'
 */
export function typeOf(obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|]/g, '');
}
/**
 * 判断是否是数组或类数组对象
 * @example
 * isArrayLike([]) === true
 * isArrayLike(arguments) === true
 * isArrayLike(this.props.children) === true
 */
export function isArrayLike(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    var length = !!obj && 'length' in obj && obj.length;
    var type = typeOf(obj);
    return (type === 'Array' ||
        length === 0 ||
        (typeof length === 'number' && length > 0 && length - 1 in obj));
}
/**
 * 判断对象是否是一个 promise，即是否可以用.then
 */
export function isPromise(obj) {
    return (!!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof obj.then === 'function');
}
/**
 * 是否是一个纯净的对象
 * @see https://github.com/jonschlinkert/is-plain-object
 */
export function isPlainObject(obj) {
    if (typeOf(obj) !== 'Object') {
        return false;
    }
    var ctor = obj.constructor;
    if (typeof ctor !== 'function') {
        return false;
    }
    var prot = ctor.prototype;
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
export function shallowEqual(objA, objB, compare) {
    if (objA === objB) {
        return true;
    }
    // 其中一个不是 object，则不相等
    if (!objA || !objB || typeof objA + typeof objB !== 'objectobject') {
        return false;
    }
    var keyA = Object.keys(objA);
    var keyB = Object.keys(objB);
    var len = keyA.length;
    // key 数量不一致则不相等
    if (len !== keyB.length) {
        return false;
    }
    var hasCallback = typeof compare === 'function';
    for (var i = 0; i < len; i++) {
        var key = keyA[i];
        if (!Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }
        var valA = objA[key];
        var valB = objB[key];
        var ret = hasCallback ? compare(valA, valB, key) : void 0;
        if (ret === false || (ret === void 0 && valA !== valB)) {
            return false;
        }
    }
    return true;
}
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
export function each(obj, callback, direction) {
    var reversed = direction === -1;
    if (isArrayLike(obj)) {
        var length_1 = obj.length;
        for (var i = reversed ? length_1 - 1 : 0; i < length_1 && i >= 0; reversed ? i-- : i++) {
            var shouldContinue = callback.call(obj[i], obj[i], i);
            if (shouldContinue === false) {
                break;
            }
        }
    }
    else {
        for (var key in obj) {
            /* istanbul ignore else */
            if (obj.hasOwnProperty(key)) {
                var shouldContinue = callback.call(obj[key], obj[key], key);
                if (shouldContinue === false) {
                    break;
                }
            }
        }
    }
    return obj;
}
// @private 判断 key 是否在数组或对象中
var _isInObj = function (key, obj, isArray) {
    return isArray ? obj.indexOf(key) > -1 : key in obj;
};
/**
 * 过滤出其它属性
 * @param holdProps - 过滤的参照对象，最终的结果只保留不在参照对象中的 key
 * @param props - 被过滤的对象
 *
 * @example
 * object.pickOthers(FooComponent.propTypes, this.props);
 * object.pickOthers(['className', 'onChange'], this.props);
 */
export function pickOthers(holdProps, props) {
    var others = {};
    var isArray = typeOf(holdProps) === 'Array';
    for (var key in props) {
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
export function pickProps(holdProps, props) {
    var others = {};
    var isArray = typeOf(holdProps) === 'Array';
    for (var key in props) {
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
export function pickAttrsWith(holdProps, prefix) {
    var others = {};
    for (var key in holdProps) {
        if (key.match(prefix)) {
            others[key] = holdProps[key];
        }
    }
    return others;
}
/**
 * Checks if value is `null` or `undefined`.
 */
export function isNil(value) {
    // It will returns `true` only if `null` or `undefined` compare with `null`
    // with loose equaliy
    return value == null; // eslint-disable-line eqeqeq
}
/**
 * Deep merge two objects.
 * @see https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge?page=1&tab=votes#tab-top
 */
export function deepMerge(target) {
    var _a, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length)
        return target;
    var source = sources.shift();
    if (!isPlainObject(target)) {
        target = {};
    }
    if (isPlainObject(target) && isPlainObject(source)) {
        for (var key in source) {
            // 如果是 object 进行深拷贝
            if (isPlainObject(source[key]) && !React.isValidElement(source[key])) {
                if (!target[key])
                    Object.assign(target, (_a = {}, _a[key] = {}, _a));
                // fix {a: 'te'}, {a:{b:3}}
                if (!isPlainObject(target[key])) {
                    target[key] = source[key];
                }
                deepMerge(target[key], source[key]);
                // string/number/function/react node 等直接复制
            }
            else {
                Object.assign(target, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return deepMerge.apply(void 0, __spreadArray([target], __read(sources), false));
}
/**
 * 组件是否为 Fucntion Component
 * @param component - 传入的组件
 */
export function isFunctionComponent(component) {
    return (typeOf(component) === 'Function' &&
        component.prototype &&
        component.prototype.isReactComponent === undefined);
}
/**
 * 组件是否为 Class Component
 * @param component - 传入的组件
 */
export function isClassComponent(component) {
    return (typeOf(component) === 'Function' &&
        component.prototype &&
        component.prototype.isReactComponent !== undefined);
}
export function isForwardRefComponent(component) {
    if (!component || typeof component !== 'object') {
        return false;
    }
    var $$typeof = component.$$typeof;
    // FIXME 依据 react 内部实现代码来判断，有可能因 react 版本变更错误判断，先用测试用例来保证运行正常，关注测试用例异常适时调整此处代码
    return (!!$$typeof && $$typeof.toString().includes('react.forward_ref')) || $$typeof === 0xead0;
}
/**
 * 判断是否为 isReactFragmentElement
 * @param component - 传入的组件
 */
export function isReactFragmentElement(component) {
    if (isNil(component)) {
        return false;
    }
    var type = component.type;
    return type === React.Fragment;
}
/**
 * Creates an array of the own enumerable string keyed property values of object.
 * @example
 * // returns [1, 2]
 * values(\{a: 1, b: 2\})
 */
export function values(obj) {
    if (Object.values) {
        return Object.values(obj);
    }
    var vals = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            vals.push(obj[key]);
        }
    }
    return vals;
}
