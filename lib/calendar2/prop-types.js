"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var constant_1 = require("./constant");
var util_1 = require("../util");
var error = function (propName, ComponentName) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(ComponentName, ". Validation failed."));
};
var SharedPT = {
    shape: prop_types_1.default.oneOf(Object.values(constant_1.CALENDAR_SHAPE)),
    mode: prop_types_1.default.oneOf(Object.values(constant_1.CALENDAR_MODE)),
    panelMode: prop_types_1.default.oneOf(Object.values(constant_1.DATE_PANEL_MODE)),
    // 日期类型：
    //  @string: 2020-11-11
    //  @date: 日期对象
    //  @moment: moment 对象
    //  @dayjs: dayjs 对象
    date: function (props, propName, componentName) {
        if (propName in props && !(0, util_1.datejs)(props[propName]).isValid()) {
            return error(propName, componentName);
        }
        return null;
    },
};
exports.default = SharedPT;
