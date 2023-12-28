"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var config_provider_1 = require("../config-provider");
var picker_1 = require("./picker");
var constant_1 = require("./constant");
var DATE = constant_1.DATE_PICKER_MODE.DATE, WEEK = constant_1.DATE_PICKER_MODE.WEEK, MONTH = constant_1.DATE_PICKER_MODE.MONTH, QUARTER = constant_1.DATE_PICKER_MODE.QUARTER, YEAR = constant_1.DATE_PICKER_MODE.YEAR;
var MODE2FORMAT = (_a = {},
    _a[DATE] = 'YYYY-MM-DD',
    _a[WEEK] = 'YYYY-wo',
    _a[MONTH] = 'YYYY-MM',
    _a[QUARTER] = 'YYYY-[Q]Q',
    _a[YEAR] = 'YYYY',
    _a);
/* istanbul ignore next */
var transform = function (props, deprecated) {
    var footerRender = props.footerRender, onVisibleMonthChange = props.onVisibleMonthChange, defaultVisibleMonth = props.defaultVisibleMonth, ranges = props.ranges, newProps = tslib_1.__rest(props, ["footerRender", "onVisibleMonthChange", "defaultVisibleMonth", "ranges"]);
    var mode = props.mode || DATE;
    if ('footerRender' in props) {
        deprecated('footerRender', 'extraFooterRender', 'DatePicker');
        newProps.extraFooterRender = footerRender;
    }
    if (onVisibleMonthChange) {
        deprecated('onVisibleMonthChange', 'onPanelChange', 'DatePicker');
        newProps.onPanelChange = onVisibleMonthChange;
    }
    if (defaultVisibleMonth) {
        deprecated('defaultVisibleMonth', 'defaultPanelValue', 'DatePicker');
        newProps.defaultPanelValue = onVisibleMonthChange;
    }
    if ('ranges' in props) {
        deprecated('ranges', 'preset: PT.oneOfType([PT.array, PT.object])', 'DatePicker');
        newProps.preset = ranges;
    }
    if ([WEEK, MONTH, QUARTER, YEAR].includes(mode)) {
        delete newProps.showTime;
    }
    else if (typeof props.showTime === 'object') {
        deprecated('showTime: object', 'showTime && timePanelProps', 'DatePicker');
        newProps.timePanelProps = props.showTime;
        newProps.showTime = true;
    }
    if (!newProps.format) {
        newProps.format = MODE2FORMAT[mode] + (newProps.showTime ? ' HH:mm:ss' : '');
    }
    return newProps;
};
var ConfigPicker = config_provider_1.default.config(picker_1.default, {
    componentName: 'DatePicker2',
    transform: transform,
});
var generatePicker = function (mode) { return react_1.default.forwardRef(function (props, ref) { return react_1.default.createElement(ConfigPicker, tslib_1.__assign({ ref: ref }, props, { mode: mode })); }); };
var DatePicker2 = generatePicker();
DatePicker2.displayName = 'DatePicker2';
DatePicker2.MonthPicker = generatePicker(MONTH);
DatePicker2.MonthPicker.displayName = 'MonthPicker2';
DatePicker2.YearPicker = generatePicker(YEAR);
DatePicker2.YearPicker.displayName = 'YearPicker2';
DatePicker2.WeekPicker = generatePicker(WEEK);
DatePicker2.WeekPicker.displayName = 'WeekPicker2';
DatePicker2.QuarterPicker = generatePicker(QUARTER);
DatePicker2.QuarterPicker.displayName = 'QuarterPicker2';
DatePicker2.RangePicker = react_1.default.forwardRef(function (props, ref) { return react_1.default.createElement(ConfigPicker, tslib_1.__assign({ ref: ref }, props, { type: "range" })); });
DatePicker2.RangePicker.displayName = 'RangePicker2';
exports.default = DatePicker2;
