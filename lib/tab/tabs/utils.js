'use strict';

exports.__esModule = true;
exports.triggerEvents = undefined;
exports.getOffsetWH = getOffsetWH;
exports.getOffsetLT = getOffsetLT;
exports.isTransformSupported = isTransformSupported;
exports.toArray = toArray;

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