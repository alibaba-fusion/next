import { DATE_INPUT_TYPE } from './constant';

export function setTime(targetVal, sourceVal) {
    if (sourceVal && targetVal) {
        return targetVal.hour(sourceVal.hour()).minute(sourceVal.minute()).second(sourceVal.second()).millisecond(sourceVal.millisecond());
    }
    return targetVal;
}

export function switchInputType(inputType) {
    var BEGIN = DATE_INPUT_TYPE.BEGIN,
        END = DATE_INPUT_TYPE.END;

    return inputType === BEGIN ? END : BEGIN;
}

export function mode2unit(mode) {
    return mode === 'date' ? 'day' : mode;
}