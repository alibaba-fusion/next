"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warning = exports.deprecated = void 0;
var env_1 = require("./env");
/* eslint no-console: 0 */
/**
 * 反对使用某一方法或属性的警告
 * @param props - 过时的属性或方法名
 * @param instead - 替代的属性或方法名
 * @param component - 组件名
 *
 * @example
 * log.deprecated('onBeforeClose', 'beforeClose', 'Dialog');
 * // Warning: onBeforeClose is deprecated at [ Dialog ], use [ beforeClose ] instead of it.
 */
function deprecated(props, instead, component) {
    /* istanbul ignore else */
    if (!(0, env_1.isProduction)() && typeof console !== 'undefined' && console.error) {
        return console.error("Warning: [ ".concat(props, " ] is deprecated at [ ").concat(component, " ], use [ ").concat(instead, " ] instead of it."));
    }
}
exports.deprecated = deprecated;
/**
 * 控制台警告日志
 */
function warning(msg) {
    /* istanbul ignore else */
    if (!(0, env_1.isProduction)() && typeof console !== 'undefined' && console.error) {
        return console.error("Warning: ".concat(msg));
    }
}
exports.warning = warning;
