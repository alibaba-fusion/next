"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.once = exports.on = exports.off = void 0;
/**
 * 取消事件绑定
 * @param node - DOM 节点或任何可以绑定事件的对象
 * @param eventName - 事件名
 * @param callback - 回调方法
 * @param useCapture - [useCapture=false] 是否开启事件捕获优先
 */
function off(node, eventName, callback, useCapture) {
    /* istanbul ignore else */
    if (node.removeEventListener) {
        node.removeEventListener(eventName, callback, useCapture || false);
    }
}
exports.off = off;
/**
 * 绑定事件
 * @param node - DOM 节点或任何可以绑定事件的对象
 * @param eventName - 事件名
 * @param callback - 回调方法
 * @param useCapture - 是否开启事件捕获优先
 * @returns 返回的 object 中包含一个 off 方法，用于取消事件监听
 *
 * @example
 * const handler = events.on(document.body, 'click', e =\> \{
 *     // handle click ...
 * \});
 * // 取消事件绑定
 * handler.off();
 */
function on(node, eventName, callback, useCapture) {
    /* istanbul ignore else */
    if (node.addEventListener) {
        node.addEventListener(eventName, callback, useCapture || false);
    }
    return {
        off: function () { return off(node, eventName, callback, useCapture); },
    };
}
exports.on = on;
/**
 * 绑定事件，只执行一次后销毁
 * @param node - DOM 节点或任何可以绑定事件的对象
 * @param eventName - 事件名
 * @param callback - 回调方法
 * @param useCapture - 是否开启事件捕获优先
 * @returns 返回的 object 中包含一个 off 方法，用于取消事件监听
 */
function once(node, eventName, callback, useCapture) {
    return on(node, eventName, function __fn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        callback.apply(this, args);
        // 由于 addEventListener 中的参数 options 只在 Chrome 55、Firefox(Gecko) 以上版本支持，故还是用传统的方法实现 once
        off(node, eventName, __fn, useCapture);
    }, useCapture);
}
exports.once = once;
