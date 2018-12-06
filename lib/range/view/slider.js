'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getStyle(min, max, value) {
    return {
        left: (0, _utils.getPercent)(min, max, value) + '%',
        zIndex: 100
    };
}

function Slider(_ref) {
    var _classNames;

    var prefix = _ref.prefix,
        hasMovingClass = _ref.hasMovingClass,
        min = _ref.min,
        max = _ref.max,
        value = _ref.value;


    var classes = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'range-slider'] = true, _classNames[prefix + 'range-slider-moving'] = hasMovingClass, _classNames));
    return _react2.default.createElement(
        'div',
        { className: classes, style: _getStyle(min, max, value) },
        _react2.default.createElement('div', { className: prefix + 'range-slider-inner' })
    );
}

Slider.propTypes = {
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    value: _propTypes2.default.number,
    prefix: _propTypes2.default.string,
    hasMovingClass: _propTypes2.default.bool
};

Slider.defaultProps = {
    prefix: 'next-',
    min: 0,
    max: 100,
    value: 0,
    hasMovingClass: false
};

exports.default = Slider;
module.exports = exports['default'];