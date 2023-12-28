"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValueChanged = exports.fmtValue = exports.mode2unit = exports.switchInputType = exports.setTime = void 0;
var util_1 = require("../util");
var constant_1 = require("./constant");
function setTime(targetVal, sourceVal) {
    if (sourceVal && targetVal) {
        return targetVal
            .hour(sourceVal.hour())
            .minute(sourceVal.minute())
            .second(sourceVal.second())
            .millisecond(sourceVal.millisecond());
    }
    return targetVal;
}
exports.setTime = setTime;
function switchInputType(inputType) {
    var BEGIN = constant_1.DATE_INPUT_TYPE.BEGIN, END = constant_1.DATE_INPUT_TYPE.END;
    return inputType === BEGIN ? END : BEGIN;
}
exports.switchInputType = switchInputType;
function mode2unit(mode) {
    return mode === 'date' ? 'day' : mode;
}
exports.mode2unit = mode2unit;
/**
 * 获取输入框值
 * @param {*} value 日期值
 * @param {string | funtion} format 日期格式
 * @returns {string | string[]}
 */
function fmtValue(value, fmt) {
    var formater = function (v, idx) {
        var _fmt = fmt;
        if (Array.isArray(fmt)) {
            _fmt = fmt[idx];
        }
        return v ? (typeof _fmt === 'function' ? _fmt(v) : v.format(_fmt)) : '';
    };
    return Array.isArray(value) ? value.map(function (v, idx) { return formater(v, idx); }) : formater(value);
}
exports.fmtValue = fmtValue;
/**
 * 判断值是否改变
 * @param {dayjs.ConfigType}} newValue
 * @param {dayjs.ConfigType} oldValue
 * @returns {boolean}
 */
function isValueChanged(newValue, oldValue) {
    return Array.isArray(newValue)
        ? isValueChanged(newValue[0], oldValue && oldValue[0]) || isValueChanged(newValue[1], oldValue && oldValue[1])
        : newValue !== oldValue && !(0, util_1.datejs)(newValue).isSame(oldValue);
}
exports.isValueChanged = isValueChanged;
