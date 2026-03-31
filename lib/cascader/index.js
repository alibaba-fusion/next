"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var cascader_1 = tslib_1.__importDefault(require("./cascader"));
exports.default = config_provider_1.default.config(cascader_1.default, {
    transform: function (props, deprecated) {
        if ('expandTrigger' in props) {
            deprecated('expandTrigger', 'expandTriggerType', 'Cascader');
            var expandTrigger = props.expandTrigger, others = tslib_1.__rest(props, ["expandTrigger"]);
            props = tslib_1.__assign({ expandTriggerType: expandTrigger }, others);
        }
        if ('showItemCount' in props) {
            deprecated('showItemCount', 'listStyle | listClassName', 'Cascader');
        }
        if ('labelWidth' in props) {
            deprecated('labelWidth', 'listStyle | listClassName', 'Cascader');
        }
        return props;
    },
    exportNames: ['setFocusValue'],
});
