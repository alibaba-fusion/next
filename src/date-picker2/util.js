import { DATE_INPUT_TYPE } from './constant';

/**
 * @param {String | Array} key
 * @param {Object} obj
 * @param {Object} defaultObj
 */
export function getValue(key, obj, defaultObj) {
    const getSingle = n => (n in obj ? obj[n] : defaultObj[n]);

    return Array.isArray(key) ? key.map(k => getSingle(k)) : getSingle(key);
}

export function getFromPropOrState(key) {
    return getValue(key, this.props, this.state);
}

export function setTime(targetVal, sourceVal) {
    if (sourceVal && targetVal) {
        return targetVal
            .hour(sourceVal.hour())
            .minute(sourceVal.minute())
            .second(sourceVal.second())
            .millisecond(sourceVal.millisecond());
    }
    return targetVal;
}

export function switchInputType(inputType) {
    const { BEGIN, END } = DATE_INPUT_TYPE;
    return inputType === BEGIN ? END : BEGIN;
}

export function mode2unit(mode) {
    return mode === 'date' ? 'day' : mode;
}
