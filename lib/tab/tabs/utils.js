"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabsArrayShallowEqual = exports.toArray = exports.isTransformSupported = exports.getOffsetLT = exports.getOffsetWH = exports.triggerEvents = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.triggerEvents = {
    CLICK: 'click',
    HOVER: 'hover',
};
function getOffsetWH(node, tabPosition) {
    var prop = 'width';
    if (tabPosition === 'left' || tabPosition === 'right') {
        prop = 'height';
    }
    return node ? node.getBoundingClientRect()[prop] : 0;
}
exports.getOffsetWH = getOffsetWH;
function getOffsetLT(node, tabPosition) {
    var prop = 'left';
    if (tabPosition === 'left' || tabPosition === 'right') {
        prop = 'top';
    }
    return node.getBoundingClientRect()[prop];
}
exports.getOffsetLT = getOffsetLT;
function isTransformSupported(style) {
    return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}
exports.isTransformSupported = isTransformSupported;
function toArray(children) {
    var ret = [];
    react_1.default.Children.forEach(children, function (child, index) {
        if (react_1.default.isValidElement(child)) {
            var props = {
                key: child.key || index,
                title: child.props.title || child.props.tab,
            };
            ret.push(react_1.default.cloneElement(child, props));
        }
    });
    return ret;
}
exports.toArray = toArray;
/**
 * tab数组浅比较
 * @param arrA - 更新后的数组
 * @param arrB - 原数组
 * @returns 数组浅比较是否相等
 * @example
 * arr.tabsArrayShallowEqual(['2','3','4'], ['2','5','4']); // false
 */
function tabsArrayShallowEqual(arrA, arrB) {
    // 相同地址的返回true，不需要更新数据（更新数据的基础是props数据与当前获取的值不同）
    if (arrA === arrB) {
        return true;
    }
    // 判断：调用的值/是否为数组/数组的长度
    if (!arrA ||
        !arrB ||
        typeof arrA + typeof arrB !== 'objectobject' ||
        arrA.length !== arrB.length) {
        return false;
    }
    // 判断tabs的key与title是否更改
    for (var i = 0; i < arrA.length; i++) {
        if (arrA[i].key !== arrB[i].key || arrA[i].props.title !== arrB[i].props.title) {
            return false;
        }
    }
    return true;
}
exports.tabsArrayShallowEqual = tabsArrayShallowEqual;
