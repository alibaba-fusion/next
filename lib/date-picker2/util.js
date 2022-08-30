'use strict';

exports.__esModule = true;
exports.setTime = setTime;
exports.switchInputType = switchInputType;
exports.mode2unit = mode2unit;
exports.fmtValue = fmtValue;
exports.isValueChanged = isValueChanged;

var _util = require('../util');

var _constant = require('./constant');

function setTime(targetVal, sourceVal) {
    if (sourceVal && targetVal) {
        return targetVal.hour(sourceVal.hour()).minute(sourceVal.minute()).second(sourceVal.second()).millisecond(sourceVal.millisecond());
    }
    return targetVal;
}

function switchInputType(inputType) {
    var BEGIN = _constant.DATE_INPUT_TYPE.BEGIN,
        END = _constant.DATE_INPUT_TYPE.END;

    return inputType === BEGIN ? END : BEGIN;
}

function mode2unit(mode) {
    return mode === 'date' ? 'day' : mode;
}

/**
 * 获取输入框值
 * @param {*} value 日期值
 * @param {string | funtion} format 日期格式
 * @returns {string | string[]}
 */
function fmtValue(value, fmt) {
    var formater = function formater(v, idx) {
        var _fmt = fmt;

        if (Array.isArray(fmt)) {
            _fmt = fmt[idx];
        }

        return v ? typeof _fmt === 'function' ? _fmt(v) : v.format(_fmt) : '';
    };

    return Array.isArray(value) ? value.map(function (v, idx) {
        return formater(v, idx);
    }) : formater(value);
}

/**
 * 判断值是否改变
 * @param {dayjs.ConfigType}} newValue
 * @param {dayjs.ConfigType} oldValue
 * @returns {boolean}
 */
function isValueChanged(newValue, oldValue) {
    return Array.isArray(newValue) ? isValueChanged(newValue[0], oldValue && oldValue[0]) || isValueChanged(newValue[1], oldValue && oldValue[1]) : newValue !== oldValue && !(0, _util.datejs)(newValue).isSame(oldValue);
}