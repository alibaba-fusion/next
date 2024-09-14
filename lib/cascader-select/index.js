"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var cascader_select_1 = tslib_1.__importDefault(require("./cascader-select"));
exports.default = config_provider_1.default.config(cascader_select_1.default, {
    exportNames: ['focus'],
    transform: function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'CascaderSelect');
            var shape = props.shape, hasBorder = props.hasBorder, others = tslib_1.__rest(props, ["shape", "hasBorder"]);
            props = tslib_1.__assign({ hasBorder: hasBorder !== null && hasBorder !== void 0 ? hasBorder : shape !== 'arrow-only' }, others);
        }
        if ('container' in props) {
            deprecated('container', 'popupContainer', 'CascaderSelect');
            var container = props.container, others = tslib_1.__rest(props, ["container"]);
            props = tslib_1.__assign({ popupContainer: container }, others);
        }
        if ('expandTrigger' in props) {
            deprecated('expandTrigger', 'expandTriggerType', 'CascaderSelect');
            var expandTrigger = props.expandTrigger, expandTriggerType = props.expandTriggerType, others = tslib_1.__rest(props, ["expandTrigger", "expandTriggerType"]);
            props = tslib_1.__assign({ expandTriggerType: expandTriggerType !== null && expandTriggerType !== void 0 ? expandTriggerType : expandTrigger }, others);
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
