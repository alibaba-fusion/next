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

var Scale = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Scale, _React$Component);

    function Scale() {
        (0, _classCallCheck3.default)(this, Scale);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Scale.prototype._renderItems = function _renderItems() {
        var _props = this.props,
            min = _props.min,
            max = _props.max,
            value = _props.value,
            prefix = _props.prefix,
            scales = _props.scales,
            rtl = _props.rtl;

        var items = [];

        scales.forEach(function (scale, i) {
            var _classNames;

            var classes = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'range-scale-item'] = true, _classNames.activated = (0, _utils.inRange)(scale, value, min), _classNames));
            var style = void 0;
            if (rtl) {
                style = {
                    right: (0, _utils.getPercent)(min, max, scale) + '%',
                    left: 'auto'
                };
            } else {
                style = {
                    left: (0, _utils.getPercent)(min, max, scale) + '%',
                    right: 'auto'
                };
            }

            items.push(
            // "key" is for https://fb.me/react-warning-keys
            _react2.default.createElement('span', { className: classes, style: style, key: i }));
        });

        return items;
    };

    Scale.prototype.render = function render() {
        var _classNames2;

        var prefix = this.props.prefix;

        var classes = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'range-scale'] = true, _classNames2));
        var items = this._renderItems();

        return _react2.default.createElement(
            'div',
            { className: classes },
            items
        );
    };

    return Scale;
}(_react2.default.Component), _class.propTypes = {
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    prefix: _propTypes2.default.string,
    scales: _propTypes2.default.arrayOf(_propTypes2.default.number),
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    min: 0,
    max: 100,
    value: 0,
    rtl: false
}, _temp);
Scale.displayName = 'Scale';
exports.default = Scale;
module.exports = exports['default'];