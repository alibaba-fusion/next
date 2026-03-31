/**
 * IE 浏览器的渲染引擎版本号
 * 注意：此属性与浏览器版本号不同，IE 的渲染引擎版本号是可以通过 HTML header 或手动设置去更改的
 * 6 ~ 11
 */
export declare const ieVersion: number | undefined;
/**
 * 判断是否是生产环境
 */
export declare const isProduction: () => boolean;
declare const _default: {
    ieVersion: number | undefined;
    isProduction: () => boolean;
};
export default _default;
