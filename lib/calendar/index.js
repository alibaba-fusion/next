"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var utils_1 = require("./utils");
var calendar_1 = require("./calendar");
var range_calendar_1 = require("./range-calendar");
/* istanbul ignore next */
var transform = function (props, deprecated) {
    var type = props.type, onChange = props.onChange, base = props.base, disabledMonth = props.disabledMonth, disabledYear = props.disabledYear, others = tslib_1.__rest(props, ["type", "onChange", "base", "disabledMonth", "disabledYear"]);
    var newProps = others;
    if ('type' in props) {
        deprecated('type', 'shape', 'Calendar');
        newProps.shape = type;
        if ('shape' in props) {
            newProps.shape = props.shape;
        }
    }
    if ('base' in props) {
        deprecated('base', 'defaultVisibleMonth', 'Calendar');
        var newDefaultVisibleMonth = function () {
            (0, utils_1.preFormatDateValue)(base, 'YYYY-MM-DD');
        };
        if ('defaultVisibleMonth' in props) {
            newDefaultVisibleMonth = props.defaultVisibleMonth;
        }
        newProps.defaultVisibleMonth = newDefaultVisibleMonth;
    }
    if ('onChange' in props && typeof onChange === 'function') {
        deprecated('onChange', 'onSelect', 'Calendar');
        var newOnSelect = function (date) {
            onChange({ mode: others.mode, value: date });
            if ('onSelect' in props) {
                props.onSelect(date);
            }
        };
        newProps.onSelect = newOnSelect;
    }
    if ('disabledMonth' in props && typeof disabledMonth === 'function') {
        deprecated('disabledMonth', 'disabledDate', 'Calendar');
    }
    if ('disabledYear' in props && typeof disabledYear === 'function') {
        deprecated('disabledYear', 'disabledDate', 'Calendar');
    }
    if ('yearCellRender' in props && typeof yearCellRender === 'function') {
        deprecated('yearCellRender', 'monthCellRender/dateCellRender', 'Calendar');
    }
    if ('language' in props) {
        deprecated('language', 'moment.locale', 'Calendar');
    }
    return newProps;
};
calendar_1.default.RangeCalendar = range_calendar_1.default;
exports.default = config_provider_1.default.config(calendar_1.default, {
    transform: transform,
});
