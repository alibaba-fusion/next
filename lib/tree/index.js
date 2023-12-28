"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_provider_1 = require("../config-provider");
var tree_1 = require("./view/tree");
var tree_node_1 = require("./view/tree-node");
tree_1.default.Node = tree_node_1.default;
exports.default = config_provider_1.default.config(tree_1.default, {
    exportNames: ['setFocusKey'],
});
