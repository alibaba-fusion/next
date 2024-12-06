import { __assign } from "tslib";
import React from 'react';
import { assignSubComponent } from '../util/component';
import ConfigProvider from '../config-provider';
import TimePicker from './time-picker';
var ConfigTimePicker = ConfigProvider.config(TimePicker);
var TimePickerWithSub = assignSubComponent(TimePicker, {
    RangePicker: React.forwardRef(function (props, ref) { return (React.createElement(ConfigTimePicker, __assign({ ref: ref }, props, { type: "range" }))); }),
});
TimePickerWithSub.RangePicker.displayName = 'RangePicker';
export default TimePickerWithSub;
