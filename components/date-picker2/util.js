import { datejs } from '../util';
import { DATE_INPUT_TYPE } from './constant';

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

/**
 * 获取输入框值
 * @param {*} value 日期值
 * @param {string | funtion} format 日期格式
 * @returns {string | string[]}
 */
export function fmtValue(value, fmt) {
    const formater = (v, idx) => {
        let _fmt = fmt;

        if (Array.isArray(fmt)) {
            _fmt = fmt[idx];
        }

        return v ? (typeof _fmt === 'function' ? _fmt(v) : v.format(_fmt)) : '';
    };

    return Array.isArray(value) ? value.map((v, idx) => formater(v, idx)) : formater(value);
}

/**
 * 判断值是否改变
 * @param {dayjs.ConfigType}} newValue
 * @param {dayjs.ConfigType} oldValue
 * @returns {boolean}
 */
export function isValueChanged(newValue, oldValue) {
    return Array.isArray(newValue)
        ? isValueChanged(newValue[0], oldValue && oldValue[0]) ||
              isValueChanged(newValue[1], oldValue && oldValue[1])
        : newValue !== oldValue && !datejs(newValue).isSame(oldValue);
}

export function isDisableDateTime(
    value,
    {
        mode,
        inputType,
        disabledDate,
        disabledHours,
        disabledMinutes,
        disabledSeconds,
        disabledTime = {},
    }
) {
    if(!value) return 

    value = datejs.isDayjs(value) ? value : datejs(value);
    const _disabledTime =
        typeof disabledTime === 'function' ? disabledTime(value, inputType) : disabledTime;

    return (
        (typeof disabledDate === 'function' && disabledDate(value, mode)) ||
        (typeof disabledHours === 'function' && disabledHours(value.get('hour'))) ||
        (typeof disabledMinutes === 'function' && disabledMinutes(value.get('minute'))) ||
        (typeof disabledSeconds === 'function' && disabledSeconds(value.get('second'))) ||
        (_disabledTime &&
            typeof _disabledTime.disabledHours === 'function' &&
            _disabledTime.disabledHours(value.get('hour'))) ||
        (_disabledTime &&
            typeof _disabledTime.disabledMinutes === 'function' &&
            _disabledTime.disabledMinutes(value.get('minute'))) ||
        (_disabledTime &&
            typeof _disabledTime.disabledSeconds === 'function' &&
            _disabledTime.disabledSeconds(value.get('second')))
    );
}
