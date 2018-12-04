'use strict';

exports.__esModule = true;

var _tree = require('./view/tree');

var _tree2 = _interopRequireDefault(_tree);

var _treeNode = require('./view/tree-node');

var _treeNode2 = _interopRequireDefault(_treeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tree2.default.Node = _treeNode2.default;

exports.default = _tree2.default;
module.exports = exports['default'];