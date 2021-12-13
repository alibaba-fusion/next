'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _timePicker = require('./time-picker');

var _timePicker2 = _interopRequireDefault(_timePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigTimePicker = _configProvider2.default.config(_timePicker2.default);

ConfigTimePicker.RangePicker = _react2.default.forwardRef(function (props, ref) {
  return _react2.default.createElement(ConfigTimePicker, (0, _extends3.default)({ ref: ref }, props, { type: 'range' }));
});
ConfigTimePicker.RangePicker.displayName = 'RangePicker';

exports.default = ConfigTimePicker;
module.exports = exports['default'];