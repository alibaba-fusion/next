"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var component_1 = require("../util/component");
var tree_1 = tslib_1.__importDefault(require("./view/tree"));
var tree_node_1 = tslib_1.__importDefault(require("./view/tree-node"));
var WithSubTree = (0, component_1.assignSubComponent)(tree_1.default, { Node: tree_node_1.default });
exports.default = config_provider_1.default.config(WithSubTree, {
    exportNames: ['setFocusKey'],
});
