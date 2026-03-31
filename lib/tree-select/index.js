"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var tree_node_1 = tslib_1.__importDefault(require("../tree/view/tree-node"));
var component_1 = require("../util/component");
var tree_select_1 = tslib_1.__importDefault(require("./tree-select"));
var WithTreeSelectNode = (0, component_1.assignSubComponent)(tree_select_1.default, { Node: tree_node_1.default });
exports.default = config_provider_1.default.config(WithTreeSelectNode, {
    transform: function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'TreeSelect');
            var shape = props.shape, others = tslib_1.__rest(props, ["shape"]);
            props = tslib_1.__assign({ hasBorder: shape !== 'arrow-only' }, others);
        }
        if ('container' in props) {
            deprecated('container', 'popupContainer', 'TreeSelect');
            var _a = props, container = _a.container, others = tslib_1.__rest(_a, ["container"]);
            props = tslib_1.__assign({ popupContainer: container }, others);
        }
        return props;
    },
});
