"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flex = exports.transition = exports.animation = void 0;
var dom_1 = require("./dom");
var object_1 = require("./object");
var animationEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd',
    animation: 'animationend',
};
var transitionEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    OTransition: 'oTransitionEnd',
    transition: 'transitionend',
};
/**
 * 是否支持某些动效事件，如果支持，返回相应的 end 事件名
 */
function _supportEnd(names) {
    /* istanbul ignore if */
    if (!dom_1.hasDOM) {
        return false;
    }
    var el = document.createElement('div');
    var ret = false;
    (0, object_1.each)(names, function (val, key) {
        /* istanbul ignore else */
        if (el.style[key] !== undefined) {
            ret = { end: val };
            return false;
        }
    });
    return ret;
}
/**
 * 是否支持某些 CSS 属性
 */
function _supportCSS(names) {
    /* istanbul ignore if */
    if (!dom_1.hasDOM) {
        return false;
    }
    var el = document.createElement('div');
    var ret = false;
    (0, object_1.each)(names, function (val, key) {
        (0, object_1.each)(val, function (item) {
            try {
                el.style[key] = item;
                ret = ret || el.style[key] === item;
            }
            catch (e) {
                // It will be throw error when set unknown property under IE8
            }
            return !ret; // 如果有一个支持就返回 false，后面不需要再判断
        });
        return !ret;
    });
    return ret;
}
/**
 * 是否支持 animation 以及动画结束事件名
 */
exports.animation = _supportEnd(animationEndEventNames);
/**
 * 是否支持 transition 以及过滤效果结束事件名
 */
exports.transition = _supportEnd(transitionEventNames);
/**
 * 是否支持 flex 属性
 */
exports.flex = _supportCSS({
    display: ['flex', '-webkit-flex', '-moz-flex', '-ms-flexbox'],
});
