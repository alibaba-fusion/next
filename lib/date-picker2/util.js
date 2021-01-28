'use strict';

exports.__esModule = true;
exports.setTime = setTime;
exports.switchInputType = switchInputType;
exports.mode2unit = mode2unit;

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