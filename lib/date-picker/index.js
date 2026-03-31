"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var date_picker_1 = tslib_1.__importDefault(require("./date-picker"));
var range_picker_1 = tslib_1.__importDefault(require("./range-picker"));
var month_picker_1 = tslib_1.__importDefault(require("./month-picker"));
var year_picker_1 = tslib_1.__importDefault(require("./year-picker"));
var week_picker_1 = tslib_1.__importDefault(require("./week-picker"));
var component_1 = require("../util/component");
var transform = function (props, deprecated) {
    var open = props.open, defaultOpen = props.defaultOpen, onOpenChange = props.onOpenChange, others = tslib_1.__rest(props, ["open", "defaultOpen", "onOpenChange"]);
    var newProps = others;
    delete newProps.formater;
    if ('open' in props) {
        deprecated('open', 'visible', 'DatePicker');
        newProps.visible = open;
        if ('visible' in props) {
            newProps.visible = props.visible;
        }
    }
    if ('defaultOpen' in props) {
        deprecated('defaultOpen', 'defaultVisible', 'DatePicker');
        newProps.defaultVisible = defaultOpen;
        if ('defaultVisible' in props) {
            newProps.defaultVisible = props.defaultVisible;
        }
    }
    if ('onOpenChange' in props && typeof onOpenChange === 'function') {
        deprecated('onOpenChange', 'onVisibleChange', 'DatePicker');
        newProps.onVisibleChange = onOpenChange;
        if ('onVisibleChange' in props) {
            newProps.onVisibleChange = props.onVisibleChange;
        }
    }
    if ('formater' in props) {
        deprecated('formater', 'format showTime.format', 'DatePicker');
    }
    if ('format' in props && typeof props.format !== 'string') {
        deprecated('format', 'format: PropTypes.string,', 'DatePicker');
    }
    if ('ranges' in props) {
        deprecated('ranges', 'footerRender: PropTypes.func', 'RangePicker');
    }
    return newProps;
};
var DatePickerWithSub = (0, component_1.assignSubComponent)(date_picker_1.default, {
    RangePicker: config_provider_1.default.config(range_picker_1.default, {
        componentName: 'DatePicker',
        transform: transform,
    }),
    MonthPicker: config_provider_1.default.config(month_picker_1.default, {
        componentName: 'DatePicker',
        transform: transform,
    }),
    YearPicker: config_provider_1.default.config(year_picker_1.default, {
        componentName: 'DatePicker',
        transform: transform,
    }),
    WeekPicker: config_provider_1.default.config(week_picker_1.default, {
        componentName: 'DatePicker',
    }),
});
exports.default = config_provider_1.default.config(DatePickerWithSub, {
    transform: transform,
});
