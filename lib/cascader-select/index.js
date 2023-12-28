"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var cascader_select_1 = require("./cascader-select");
exports.default = config_provider_1.default.config(cascader_select_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'CascaderSelect');
            var shape = props.shape, others = tslib_1.__rest(props, ["shape"]);
            props = tslib_1.__assign({ hasBorder: shape !== 'arrow-only' }, others);
        }
        if ('container' in props) {
            deprecated('container', 'popupContainer', 'CascaderSelect');
            var container = props.container, others = tslib_1.__rest(props, ["container"]);
            props = tslib_1.__assign({ popupContainer: container }, others);
        }
        if ('expandTrigger' in props) {
            deprecated('expandTrigger', 'expandTriggerType', 'CascaderSelect');
            var expandTrigger = props.expandTrigger, others = tslib_1.__rest(props, ["expandTrigger"]);
            props = tslib_1.__assign({ expandTriggerType: expandTrigger }, others);
        }
        if ('showItemCount' in props) {
            deprecated('showItemCount', 'listStyle | listClassName', 'CascaderSelect');
        }
        if ('labelWidth' in props) {
            deprecated('labelWidth', 'listStyle | listClassName', 'CascaderSelect');
        }
        return props;
    },
});
