"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var component_1 = require("../util/component");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var time_picker_1 = tslib_1.__importDefault(require("./time-picker"));
var ConfigTimePicker = config_provider_1.default.config(time_picker_1.default);
var TimePickerWithSub = (0, component_1.assignSubComponent)(time_picker_1.default, {
    RangePicker: react_1.default.forwardRef(function (props, ref) { return (react_1.default.createElement(ConfigTimePicker, tslib_1.__assign({ ref: ref }, props, { type: "range" }))); }),
});
TimePickerWithSub.RangePicker.displayName = 'RangePicker';
exports.default = TimePickerWithSub;
