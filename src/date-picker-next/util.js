/**
 * @param {String | Array} key
 * @param {Object} obj
 * @param {Object} defaultObj
 */
export function getValue(key, obj, defaultObj) {
    const getSingle = n => (n in obj ? obj[n] : defaultObj[n]);

    return Array.isArray(key) ? key.map(k => getSingle(k)) : getSingle(key);
}

export function getFromPropOrState(key) {
    return getValue(key, this.props, this.state);
}

export function call(obj, method, ...args) {
    return method in obj && obj[method] ? obj[method](...args) : undefined;
}

/**
 * 判断是否是函数
 * @param {*} func
 * @return {Boolean}
 */
export function isFunction(func) {
    return typeof func === 'function';
}

// Optional chaining (?.)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// export function optChaining
