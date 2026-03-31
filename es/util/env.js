/**
 * IE 浏览器的渲染引擎版本号
 * 注意：此属性与浏览器版本号不同，IE 的渲染引擎版本号是可以通过 HTML header 或手动设置去更改的
 * 6 ~ 11
 */
export var ieVersion = typeof document !== 'undefined' ? document.documentMode : undefined;
/**
 * 判断是否是生产环境
 */
export var isProduction = function () {
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
export default {
    ieVersion: ieVersion,
    isProduction: isProduction,
};
