"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProduction = exports.ieVersion = void 0;
/**
 * IE 浏览器的渲染引擎版本号
 * 注意：此属性与浏览器版本号不同，IE 的渲染引擎版本号是可以通过 HTML header 或手动设置去更改的
 * 6 ~ 11
 */
exports.ieVersion = typeof document !== 'undefined' ? document.documentMode : undefined;
/**
 * 判断是否是生产环境
 */
var isProduction = function () {
    var PRODUCTION_ENV = 'production';
    var result = false;
    try {
        if (process.env.NODE_ENV === PRODUCTION_ENV) {
            result = true;
        }
    }
    catch (err) {
        //
    }
    return result;
};
exports.isProduction = isProduction;
exports.default = {
    ieVersion: exports.ieVersion,
    isProduction: exports.isProduction,
};
