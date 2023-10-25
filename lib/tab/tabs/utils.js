'use strict';

exports.__esModule = true;
exports.triggerEvents = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.getOffsetWH = getOffsetWH;
exports.getOffsetLT = getOffsetLT;
exports.isTransformSupported = isTransformSupported;
exports.toArray = toArray;
exports.tabsArrayShallowEqual = tabsArrayShallowEqual;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var triggerEvents = exports.triggerEvents = {
    CLICK: 'click',
    HOVER: 'hover'
};

function getOffsetWH(node, tabPosition) {
    var prop = 'width';
    if (tabPosition === 'left' || tabPosition === 'right') {
        prop = 'height';
    }
    return node ? node.getBoundingClientRect()[prop] : 0;
}

function getOffsetLT(node, tabPosition) {
    var prop = 'left';
    if (tabPosition === 'left' || tabPosition === 'right') {
        prop = 'top';
    }
    return node.getBoundingClientRect()[prop];
}

function isTransformSupported(style) {
    return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function toArray(children) {
    var ret = [];
    _react2.default.Children.forEach(children, function (child, index) {
        if (_react2.default.isValidElement(child)) {
            ret.push(_react2.default.cloneElement(child, {
                key: child.key || index,
                title: child.props.title || child.props.tab
            }));
        }
    });
    return ret;
}

/**
 * tab数组浅比较
 * @param  {Array} arrA   更新后的数组
 * @param  {Array} arrB   原数组
 * @return {Boolean}      数组浅比较是否相等
 * @example
 * arr.tabsArrayShallowEqual(['2','3','4'], ['2','5','4']); // false
 */

function tabsArrayShallowEqual(arrA, arrB) {
    // 相同地址的返回true，不需要更新数据（更新数据的基础是props数据与当前获取的值不同）
    if (arrA === arrB) {
        return true;
    }

    // 判断：调用的值/是否为数组/数组的长度
    if (!arrA || !arrB || (typeof arrA === 'undefined' ? 'undefined' : (0, _typeof3.default)(arrA)) + (typeof arrB === 'undefined' ? 'undefined' : (0, _typeof3.default)(arrB)) !== 'objectobject' || arrA.length !== arrB.length) {
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