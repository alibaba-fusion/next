"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var tree_select_1 = require("./tree-select");
exports.default = config_provider_1.default.config(tree_select_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'TreeSelect');
            var shape = props.shape, others = tslib_1.__rest(props, ["shape"]);
            props = tslib_1.__assign({ hasBorder: shape !== 'arrow-only' }, others);
        }
        if ('container' in props) {
            deprecated('container', 'popupContainer', 'TreeSelect');
            var container = props.container, others = tslib_1.__rest(props, ["container"]);
            props = tslib_1.__assign({ popupContainer: container }, others);
        }
        return props;
    },
});
