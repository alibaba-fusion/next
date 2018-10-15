/**
 * 将字符串转化为坨峰式写法
 * @param  {String} str 例：-webkit-transition
 * @return {String}     例：WebkitTransition
 */
export function camelcase (str) {
    if (!/-/.test(str)) {
        return str || '';
    }
    return str.toLowerCase().replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase());
}

/**
 * 将坨峰式字符串转化为连字符写法
 * @param  {String} str 例：WebkitTransition
 * @return {String}     例：-webkit-transition
 */
export function hyphenate (str) {
    return str.replace(/([A-Z])/g, $0 => `-${$0.toLowerCase()}`);
}
