'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Selected = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Selected, _React$Component);

    function Selected() {
        (0, _classCallCheck3.default)(this, Selected);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Selected.prototype._getStyle = function _getStyle() {
        var _props = this.props,
            min = _props.min,
            max = _props.max,
            reverse = _props.reverse;
        var value = this.props.value;


        if (!Array.isArray(value)) {
            value = [min, value];
        }
        var width = (value[1] - value[0]) * 100 / (max - min);

        var style = {
            width: width + '%',
            left: (0, _utils.getPercent)(min, max, value[0]) + '%'
        };
        if (reverse) {
            style = {
                width: 100 - width + '%',
                left: (0, _utils.getPercent)(min, max, value[0]) + width + '%'
            };
        }
        return style;
    };

    Selected.prototype._getStyleLeft = function _getStyleLeft() {
        var _props2 = this.props,
            min = _props2.min,
            max = _props2.max;
        var value = this.props.value;


        if (!Array.isArray(value)) {
            value = [min, value];
        }

        var style = {
            width: (0, _utils.getPercent)(min, max, value[0]) + '%',
            left: 0
        };
        return style;
    };

    Selected.prototype._getStyleRight = function _getStyleRight() {
        var _props3 = this.props,
            min = _props3.min,
            max = _props3.max;
        var value = this.props.value;


        if (!Array.isArray(value)) {
            value = [min, value];
        }
        var width = (value[1] - value[0]) * 100 / (max - min);

        var style = {
            width: 100 - (0, _utils.getPercent)(min, max, value[0]) - width + '%',
            left: (0, _utils.getPercent)(min, max, value[0]) + width + '%'
        };
        return style;
    };

    Selected.prototype.render = function render() {
        var _classNames;

        var _props4 = this.props,
            prefix = _props4.prefix,
            slider = _props4.slider,
            reverse = _props4.reverse;

        var classes = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'range-selected'] = true, _classNames));
        var SeletedComps = _react2.default.createElement('div', { className: classes, style: this._getStyle() });

        if (slider === 'double' && reverse) {
            SeletedComps = _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { className: classes, style: this._getStyleLeft() }),
                _react2.default.createElement('div', { className: classes, style: this._getStyleRight() })
            );
        }

        return SeletedComps;
    };

    return Selected;
}(_react2.default.Component), _class.propTypes = {
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    slider: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    prefix: _propTypes2.default.string,
    reverse: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    slider: 'single',
    min: 0,
    max: 100,
    value: 0,
    reverse: false
}, _temp);
Selected.displayName = 'Selected';
exports.default = Selected;
module.exports = exports['default'];