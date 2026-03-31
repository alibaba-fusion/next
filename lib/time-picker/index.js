"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var time_picker_1 = tslib_1.__importDefault(require("./time-picker"));
exports.default = config_provider_1.default.config(time_picker_1.default, {
    transform: function (props, deprecated) {
        if ('defaultOpen' in props) {
            deprecated('defaultOpen', 'defaultVisible', 'TimePicker');
            var defaultOpen = props.defaultOpen, others = tslib_1.__rest(props, ["defaultOpen"]);
            props = tslib_1.__assign({ defaultVisible: defaultOpen }, others);
        }
        if ('open' in props) {
            deprecated('open', 'visible', 'TimePicker');
            var open_1 = props.open, others = tslib_1.__rest(props, ["open"]);
            props = tslib_1.__assign({ visible: open_1 }, others);
        }
        if ('onOpenChange' in props) {
            deprecated('onOpenChange', 'onVisibleChange', 'TimePicker');
            var onOpenChange = props.onOpenChange, others = tslib_1.__rest(props, ["onOpenChange"]);
            props = tslib_1.__assign({ onVisibleChange: onOpenChange }, others);
        }
        return props;
    },
});
