"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = exports.hyphenate = exports.camelcase = void 0;
var log_1 = require("./log");
var object_1 = require("./object");
/**
 * 将字符串转化为驼峰式写法
 * @param str - 例：-webkit-transition
 * @returns 例：WebkitTransition
 */
function camelcase(str) {
    if (!/-/.test(str)) {
        return str || '';
    }
    return str.toLowerCase().replace(/-([a-z])/g, function ($0, $1) { return $1.toUpperCase(); });
}
exports.camelcase = camelcase;
/**
 * 将驼峰式字符串转化为连字符写法
 * @param str - 例：WebkitTransition
 * @returns 例：-webkit-transition
 */
function hyphenate(str) {
    var strType = (0, object_1.typeOf)(str);
    if (strType !== 'String') {
        (0, log_1.warning)('[ hyphenate(str: string): string ] ' +
            "Expected arguments[0] to be a string but get a ".concat(strType, ".") +
            'It will return an empty string without any processing.');
        return '';
    }
    return str.replace(/([A-Z])/g, function ($0) { return "-".concat($0.toLowerCase()); });
}
exports.hyphenate = hyphenate;
/**
 * 替换模板字符串
 * @param tpl - 例：当前\{current\}, 共\{total\}页
 * @param object - 例：\{current: 1, total: 9\}
 */
function template(tpl, object) {
    if (object === void 0) { object = {}; }
    var tplType = (0, object_1.typeOf)(tpl);
    if (tplType !== 'String') {
        (0, log_1.warning)('[ template(tpl: string, object: object): string ] ' +
            "Expected arguments[0] to be a string but get a ".concat(tplType, ".") +
            'It will return an empty string without any processing.');
        return '';
    }
    return tpl.replace(/\{[a-z]*\}/g, function (str) {
        var key = str.substring(1, str.length - 1);
        return object[key] || '';
    });
}
exports.template = template;
