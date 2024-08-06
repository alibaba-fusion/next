"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusRef = exports.limitTabRange = exports.backLastFocusNode = exports.clearLastFocusNode = exports.saveLastFocusNode = exports.getFocusNodeList = void 0;
var tslib_1 = require("tslib");
var keycode_1 = tslib_1.__importDefault(require("./keycode"));
var object_1 = require("./object");
/**
 * 用于切换页面元素的焦点
 */
/**
 * 元素是否可见
 */
function _isVisible(node) {
    while (node) {
        var nodeName = node.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
            break;
        }
        var style = node.style;
        if (style.display === 'none' || style.visibility === 'hidden') {
            return false;
        }
        node = node.parentNode;
    }
    return true;
}
/**
 * 元素是否可以获取焦点
 */
function _isFocusable(node) {
    var nodeName = node.nodeName.toLowerCase();
    var tabIndex = parseInt(node.getAttribute('tabindex'), 10);
    var hasTabIndex = !isNaN(tabIndex) && tabIndex > -1;
    if (_isVisible(node)) {
        if (nodeName === 'input') {
            return (!node.disabled && node.type !== 'hidden');
        }
        else if (['select', 'textarea', 'button'].indexOf(nodeName) > -1) {
            return !node.disabled;
        }
        else if (nodeName === 'a') {
            return !!node.getAttribute('href') || hasTabIndex;
        }
        else {
            return hasTabIndex;
        }
    }
    return false;
}
/**
 * 列出能获取焦点的子节点
 * @param node - 容器节点
 */
function getFocusNodeList(node) {
    var res = [];
    var nodeList = node.querySelectorAll('*');
    (0, object_1.each)(nodeList, function (item) {
        if (_isFocusable(item)) {
            var method = item.getAttribute('data-auto-focus') ? 'unshift' : 'push';
            res[method](item);
        }
    });
    if (_isFocusable(node)) {
        res.unshift(node);
    }
    return res;
}
exports.getFocusNodeList = getFocusNodeList;
// 用于记录上一次获得焦点的无素
var lastFocusElement = null;
/**
 * 保存最近一次获得焦点的无素
 */
function saveLastFocusNode() {
    lastFocusElement = document.activeElement;
}
exports.saveLastFocusNode = saveLastFocusNode;
/**
 * 清除焦点记录
 */
function clearLastFocusNode() {
    lastFocusElement = null;
}
exports.clearLastFocusNode = clearLastFocusNode;
/**
 * 尝试将焦点切换到上一个元素
 */
function backLastFocusNode() {
    if (lastFocusElement) {
        try {
            // 元素可能已经被移动了
            lastFocusElement.focus();
        }
        catch (e) {
            // ignore ...
        }
    }
}
exports.backLastFocusNode = backLastFocusNode;
/**
 * 在限制的范围内切换焦点
 * @param node - 容器节点
 * @param e - 键盘事件
 */
function limitTabRange(node, e) {
    if (e.keyCode === keycode_1.default.TAB) {
        var tabNodeList = getFocusNodeList(node);
        var maxIndex = tabNodeList.length - 1;
        var index = tabNodeList.indexOf(document.activeElement);
        if (index > -1) {
            var targetIndex = index + (e.shiftKey ? -1 : 1);
            targetIndex < 0 && (targetIndex = maxIndex);
            targetIndex > maxIndex && (targetIndex = 0);
            tabNodeList[targetIndex].focus();
            e.preventDefault();
        }
    }
}
exports.limitTabRange = limitTabRange;
/**
 * 检查一个 ref 是否有 focus 方法，如果有方法，则调用 focus 函数
 */
function focusRef(ref) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (ref && ref.focus && typeof ref.focus === 'function') {
        ref.focus.apply(ref, tslib_1.__spreadArray([], tslib_1.__read(args), false));
    }
}
exports.focusRef = focusRef;
