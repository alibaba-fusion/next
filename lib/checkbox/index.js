'use strict';

exports.__esModule = true;

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxGroup = require('./checkbox-group');

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_checkbox2.default.Group = _checkboxGroup2.default;

exports.default = _checkbox2.default;
module.exports = exports['default'];