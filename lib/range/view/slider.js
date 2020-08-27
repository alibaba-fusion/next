'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getProps(min, max, value, rtl) {
    return {
        style: {
            left: rtl ? 100 - (0, _utils.getPercent)(min, max, value) + '%' : (0, _utils.getPercent)(min, max, value) + '%',
            zIndex: 100
        },
        'aria-valuenow': value,
        'aria-valuetext': value,
        'aria-valuemin': min,
        'aria-valuemax': max
    };
}

function Slider(_ref) {
    var _classNames;

    var prefix = _ref.prefix,
        hasMovingClass = _ref.hasMovingClass,
        min = _ref.min,
        max = _ref.max,
        value = _ref.value,
        onKeyDown = _ref.onKeyDown,
        rtl = _ref.rtl;

    var classes = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'range-slider'] = true, _classNames[prefix + 'range-slider-moving'] = hasMovingClass, _classNames));
    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
            className: classes,
            onKeyDown: onKeyDown,
            role: 'slider',
            tabIndex: 0
        }, _getProps(min, max, value, rtl)),
        _react2.default.createElement('div', { className: prefix + 'range-slider-inner' })
    );
}

Slider.propTypes = {
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    value: _propTypes2.default.number,
    prefix: _propTypes2.default.string,
    hasMovingClass: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool
};

Slider.defaultProps = {
    prefix: 'next-',
    min: 0,
    max: 100,
    value: 0,
    hasMovingClass: false,
    rtl: false
};

exports.default = Slider;
module.exports = exports['default'];