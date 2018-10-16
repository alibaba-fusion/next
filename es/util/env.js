/**
 * IE浏览器的渲染引擎版本号
 * 注意：此属性与浏览器版本号不同，IE的渲染引擎版本号是可以通过HTML header或手动设置去更改的
 * @type {Number} 6 ~ 10
 */
export var ieVersion = typeof document !== 'undefined' ? document.documentMode : undefined;

/**
 * 判断是否是生产环境
 * @type {Boolean}
 */
export var isProduction = function () {
    var PRODUCTION_ENV = 'production';
    var determination = false;
    try {
        if (
        // Compat with using `webpack.DefinePlugin`
        process.env.NODE_ENV === PRODUCTION_ENV || window.process.env.NODE_ENV === PRODUCTION_ENV) {
            determination = true;
        }
    } catch (err) {}

    return determination;
}();

export default {
    ieVersion: ieVersion
};