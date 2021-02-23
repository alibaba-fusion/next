'use strict';

exports.__esModule = true;

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _radioGroup = require('./radio-group');

var _radioGroup2 = _interopRequireDefault(_radioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_radio2.default.Group = _radioGroup2.default;

exports.default = _radio2.default;
module.exports = exports['default'];