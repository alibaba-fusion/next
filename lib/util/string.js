'use strict';

exports.__esModule = true;
exports.camelcase = camelcase;
exports.hyphenate = hyphenate;
exports.template = template;

var _log = require('./log');

var _object = require('./object');

/**
 * 将字符串转化为驼峰式写法
 * @param  {String} str 例：-webkit-transition
 * @return {String}     例：WebkitTransition
 */
function camelcase(str) {
    if (!/-/.test(str)) {
        return str || '';
    }
    return str.toLowerCase().replace(/-([a-z])/g, function ($0, $1) {
        return $1.toUpperCase();
    });
}

/**
 * 将驼峰式字符串转化为连字符写法
 * @param  {String} str 例：WebkitTransition
 * @return {String}     例：-webkit-transition
 */
function hyphenate(str) {
    var strType = (0, _object.typeOf)(str);
    if (strType !== 'String') {
        (0, _log.warning)('[ hyphenate(str: string): string ] ' + ('Expected arguments[0] to be a string but get a ' + strType + '.') + 'It will return an empty string without any processing.');
        return '';
    }
    return str.replace(/([A-Z])/g, function ($0) {
        return '-' + $0.toLowerCase();
    });
}

/**
 * 替换模板字符串
 * @param {String} tpl     例：当前{current}, 共{total}页
 * @param {Object} object  例：{current: 1, total: 9}
 * @return {String}        例：
 */
function template(tpl) {
    var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tplType = (0, _object.typeOf)(tpl);
    if (tplType !== 'String') {
        (0, _log.warning)('[ template(tpl: string, object: object): string ] ' + ('Expected arguments[0] to be a string but get a ' + tplType + '.') + 'It will return an empty string without any processing.');
        return '';
    }

    return tpl.replace(/\{[a-z]*\}/g, function (str) {
        var key = str.substring(1, str.length - 1);
        return object[key] || '';
    });
}