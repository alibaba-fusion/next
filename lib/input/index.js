'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _password = require('./password');

var _password2 = _interopRequireDefault(_password);

var _textarea = require('./textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_input2.default.Password = _configProvider2.default.config(_password2.default, {
    exportNames: ['getInputNode', 'focus']
});

_input2.default.TextArea = _configProvider2.default.config(_textarea2.default, {
    exportNames: ['getInputNode', 'focus']
});
_input2.default.Group = _group2.default;

// 用来自动生成文档的工具底层依赖的 react-docgen，无法解析生成 HOC 的方法中存在第二个参数的情况
// 所以不能在 input.jsx／textarea.jsx 中生成 HOC
exports.default = _configProvider2.default.config(_input2.default, {
    exportNames: ['getInputNode', 'focus']
});
module.exports = exports['default'];