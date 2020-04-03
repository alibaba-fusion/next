'use strict';

exports.__esModule = true;
exports.DEFAULT_TIME_FORMAT = exports.PANEL = undefined;
exports.isFunction = isFunction;
exports.resetValueTime = resetValueTime;
exports.formatDateValue = formatDateValue;
exports.checkDateValue = checkDateValue;
exports.getDateTimeFormat = getDateTimeFormat;
exports.extend = extend;
exports.onDateKeydown = onDateKeydown;
exports.onTimeKeydown = onTimeKeydown;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PANEL = exports.PANEL = {
    TIME: 'time-panel',
    DATE: 'date-panel'
};

var DEFAULT_TIME_FORMAT = exports.DEFAULT_TIME_FORMAT = 'HH:mm:ss';

function isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
}

/**
 * 将 source 的 time 替换为 target 的 time
 * @param {Object} source 输入值
 * @param {Object} target 目标值
 */
function resetValueTime(source, target) {
    if (!_moment2.default.isMoment(source) || !_moment2.default.isMoment(target)) {
        return source;
    }
    return source.clone().hour(target.hour()).minute(target.minute()).second(target.second());
}

function formatDateValue(value, format) {
    var val = typeof value === 'string' ? (0, _moment2.default)(value, format, false) : value;
    if (val && _moment2.default.isMoment(val) && val.isValid()) {
        return val;
    }

    return null;
}

function checkDateValue(props, propName, componentName) {
    // 支持传入 moment 对象或字符串，字符串不检测是否为日期字符串
    if (props[propName] && !_moment2.default.isMoment(props[propName]) && typeof props[propName] !== 'string') {
        return new Error('Invalid prop ' + propName + ' supplied to ' + componentName + '. Required a moment object or format date string!');
    }
}

function getDateTimeFormat(format, showTime, type) {
    if (!format && type) {
        format = {
            date: 'YYYY-MM-DD',
            month: 'YYYY-MM',
            year: 'YYYY',
            time: ''
        }[type];
    }
    var timeFormat = showTime ? showTime.format || DEFAULT_TIME_FORMAT : '';
    var dateTimeFormat = timeFormat ? format + ' ' + timeFormat : format;
    return {
        format: format,
        timeFormat: timeFormat,
        dateTimeFormat: dateTimeFormat
    };
}

function extend(source, target) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
}

/**
 * 监听键盘事件，操作日期字符串
 * @param {KeyboardEvent} e 事件对象
 * @param {Object} param1
 * @param {String} type 类型 year month day
 */
function onDateKeydown(e, _ref, type) {
    var format = _ref.format,
        dateInputStr = _ref.dateInputStr,
        value = _ref.value;

    if ([_util.KEYCODE.UP, _util.KEYCODE.DOWN, _util.KEYCODE.PAGE_UP, _util.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) {
        return;
    }

    if (e.altKey && [_util.KEYCODE.PAGE_UP, _util.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1 || e.controlKey || e.shiftKey) {
        return;
    }

    var date = (0, _moment2.default)(dateInputStr, format, true);

    if (date.isValid()) {
        var stepUnit = e.altKey ? 'year' : 'month';
        switch (e.keyCode) {
            case _util.KEYCODE.UP:
                date.subtract(1, type);
                break;
            case _util.KEYCODE.DOWN:
                date.add(1, type);
                break;
            case _util.KEYCODE.PAGE_UP:
                date.subtract(1, stepUnit);
                break;
            case _util.KEYCODE.PAGE_DOWN:
                date.add(1, stepUnit);
                break;
        }
    } else if (value) {
        date = value.clone();
    } else {
        date = (0, _moment2.default)();
    }

    e.preventDefault();
    return date.format(format);
}

/**
 * 监听键盘事件，操作时间
 * @param {KeyboardEvent} e
 * @param {Object} param1
 * @param {String} type second hour minute
 */
function onTimeKeydown(e, _ref2, type) {
    var format = _ref2.format,
        timeInputStr = _ref2.timeInputStr,
        steps = _ref2.steps,
        value = _ref2.value;

    if ([_util.KEYCODE.UP, _util.KEYCODE.DOWN, _util.KEYCODE.PAGE_UP, _util.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) return;
    if (e.altKey && [_util.KEYCODE.PAGE_UP, _util.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1 || e.controlKey || e.shiftKey) return;

    var time = (0, _moment2.default)(timeInputStr, format, true);

    if (time.isValid()) {
        var stepUnit = e.altKey ? 'hour' : 'minute';
        switch (e.keyCode) {
            case _util.KEYCODE.UP:
                time.subtract(steps[type], type);
                break;
            case _util.KEYCODE.DOWN:
                time.add(steps[type], type);
                break;
            case _util.KEYCODE.PAGE_UP:
                time.subtract(steps[stepUnit], stepUnit);
                break;
            case _util.KEYCODE.PAGE_DOWN:
                time.add(steps[stepUnit], stepUnit);
                break;
        }
    } else if (value) {
        time = value.clone();
    } else {
        time = (0, _moment2.default)().hours(0).minutes(0).seconds(0);
    }

    e.preventDefault();
    return time.format(format);
}