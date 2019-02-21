'use strict';

exports.__esModule = true;
exports.DEFAULT_TIME_FORMAT = exports.PANEL = undefined;
exports.isFunction = isFunction;
exports.resetValueTime = resetValueTime;
exports.formatDateValue = formatDateValue;
exports.checkDateValue = checkDateValue;
exports.getDateTimeFormat = getDateTimeFormat;
exports.extend = extend;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

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

function getDateTimeFormat(format, showTime) {
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