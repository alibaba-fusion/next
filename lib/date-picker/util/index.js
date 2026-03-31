"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onTimeKeydown = exports.onDateKeydown = exports.extend = exports.getDateTimeFormat = exports.checkDateValue = exports.formatDateValue = exports.resetValueTime = exports.isFunction = exports.DEFAULT_TIME_FORMAT = exports.PANEL = void 0;
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("moment"));
var util_1 = require("../../util");
exports.PANEL = {
    TIME: 'time-panel',
    DATE: 'date-panel',
};
exports.DEFAULT_TIME_FORMAT = 'HH:mm:ss';
function isFunction(obj) {
    // @ts-expect-error 目前的写法 ts 不友好，其实可以写成更简洁的 typeof 判断
    return !!(obj && obj.constructor && obj.call && obj.apply);
}
exports.isFunction = isFunction;
/**
 * 将 source 的 time 替换为 target 的 time
 * @param source - 输入值
 * @param target - 目标值
 */
function resetValueTime(source, target) {
    if (!moment_1.default.isMoment(source) || !moment_1.default.isMoment(target)) {
        return source;
    }
    return source
        .clone()
        .hour(target.hour())
        .minute(target.minute())
        .second(target.second());
}
exports.resetValueTime = resetValueTime;
function formatDateValue(value, format) {
    var val = typeof value === 'string' ? (0, moment_1.default)(value, format, false) : value;
    if (val && moment_1.default.isMoment(val) && val.isValid()) {
        return val;
    }
    return null;
}
exports.formatDateValue = formatDateValue;
function checkDateValue(props, propName, componentName) {
    // 支持传入 moment 对象或字符串，字符串不检测是否为日期字符串
    if (props[propName] &&
        !moment_1.default.isMoment(props[propName]) &&
        typeof props[propName] !== 'string') {
        return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Required a moment object or format date string!"));
    }
}
exports.checkDateValue = checkDateValue;
function getDateTimeFormat(format, showTime, type) {
    if (!format && type) {
        format = {
            date: 'YYYY-MM-DD',
            month: 'YYYY-MM',
            year: 'YYYY',
            time: '',
        }[type];
    }
    var timeFormat = showTime ? showTime.format || exports.DEFAULT_TIME_FORMAT : '';
    var dateTimeFormat = timeFormat ? "".concat(format, " ").concat(timeFormat) : format;
    return {
        format: format,
        timeFormat: timeFormat,
        dateTimeFormat: dateTimeFormat,
    };
}
exports.getDateTimeFormat = getDateTimeFormat;
function extend(source, target) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
}
exports.extend = extend;
/**
 * 监听键盘事件，操作日期字符串
 * @param e - 事件对象
 * @param param1 - 参数
 * @param type - 类型 year month day
 */
function onDateKeydown(e, _a, type) {
    var format = _a.format, dateInputStr = _a.dateInputStr, value = _a.value;
    if ([util_1.KEYCODE.UP, util_1.KEYCODE.DOWN, util_1.KEYCODE.PAGE_UP, util_1.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) {
        return;
    }
    if ((e.altKey && [util_1.KEYCODE.PAGE_UP, util_1.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) ||
        e.ctrlKey ||
        e.shiftKey) {
        return;
    }
    var date = (0, moment_1.default)(dateInputStr, format, true);
    if (date.isValid()) {
        var stepUnit = e.altKey ? 'year' : 'month';
        switch (e.keyCode) {
            case util_1.KEYCODE.UP:
                date.subtract(1, type);
                break;
            case util_1.KEYCODE.DOWN:
                date.add(1, type);
                break;
            case util_1.KEYCODE.PAGE_UP:
                date.subtract(1, stepUnit);
                break;
            case util_1.KEYCODE.PAGE_DOWN:
                date.add(1, stepUnit);
                break;
        }
    }
    else if (value) {
        date = value.clone();
    }
    else {
        date = (0, moment_1.default)();
    }
    e.preventDefault();
    return date.format(format);
}
exports.onDateKeydown = onDateKeydown;
/**
 * 监听键盘事件，操作时间
 * @param e - 事件对象
 * @param param1 - 参数
 * @param type - second hour minute
 */
function onTimeKeydown(e, _a, type) {
    var format = _a.format, timeInputStr = _a.timeInputStr, steps = _a.steps, value = _a.value;
    if ([util_1.KEYCODE.UP, util_1.KEYCODE.DOWN, util_1.KEYCODE.PAGE_UP, util_1.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1)
        return;
    if ((e.altKey && [util_1.KEYCODE.PAGE_UP, util_1.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) ||
        e.ctrlKey ||
        e.shiftKey)
        return;
    var time = (0, moment_1.default)(timeInputStr, format, true);
    if (time.isValid()) {
        var stepUnit = e.altKey ? 'hour' : 'minute';
        switch (e.keyCode) {
            case util_1.KEYCODE.UP:
                time.subtract(steps[type], type);
                break;
            case util_1.KEYCODE.DOWN:
                time.add(steps[type], type);
                break;
            case util_1.KEYCODE.PAGE_UP:
                time.subtract(steps[stepUnit], stepUnit);
                break;
            case util_1.KEYCODE.PAGE_DOWN:
                time.add(steps[stepUnit], stepUnit);
                break;
        }
    }
    else if (value) {
        time = value.clone();
    }
    else {
        time = (0, moment_1.default)().hours(0).minutes(0).seconds(0);
    }
    e.preventDefault();
    return time.format(format);
}
exports.onTimeKeydown = onTimeKeydown;
