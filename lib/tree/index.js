'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _tree = require('./view/tree');

var _tree2 = _interopRequireDefault(_tree);

var _treeNode = require('./view/tree-node');

var _treeNode2 = _interopRequireDefault(_treeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tree2.default.Node = _treeNode2.default;

exports.default = _configProvider2.default.config(_tree2.default, {
    exportNames: ['setFocusKey']
});
module.exports = exports['default'];