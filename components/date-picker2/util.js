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

/**
 * 判读时间是否被禁用
 * @param {dayjs.ConfigType} value 
 * @param {object} param
 * @returns {boolean}
 */
export function disableDateTime(value, {
    mode,
    inputType,
    disabledDate,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    disabledTime = {}
}) {
    value = datejs.isDayjs(value) ? value : datejs(value);

    const _disabledTime = typeof disabledTime === 'function' ? disabledTime(value, inputType) : disabledTime;

    return (
        (typeof disabledDate === 'function' && disabledDate(value, mode)) ||
        (typeof disabledHours === 'function' && disabledHours(value.get('hour'))) ||
        (typeof disabledMinutes === 'function' && disabledMinutes(value.get('minute'))) ||
        (typeof disabledSeconds === 'function' && disabledSeconds(value.get('second'))) ||
        (typeof _disabledTime.disabledHours === 'function' && _disabledTime.disabledHours(value.get('hour'))) ||
        (typeof _disabledTime.disabledMinutes === 'function' && _disabledTime.disabledMinutes(value.get('minute'))) ||
        (typeof _disabledTime.disabledSeconds === 'function' && _disabledTime.disabledSeconds(value.get('second')))
    );
}

export function getDisabledTime(props) {
    const { timePanelProps, value, disabledDate, panelMode, disabledTime = {}, inputType } = props;
    const { disabledHours, disabledMinutes, disabledSeconds } = timePanelProps || {};

    const _disabledTime = typeof disabledTime === 'function' ? disabledTime(value, inputType) : disabledTime;
    
    const disabledItems = (list) => index => list.indexOf(index) >= 0;
    const executedFunc = (...args) => {
        return (index) => {
            return args.some(func => typeof func === 'function' ? func(index) : false)
        }
    }

    if (value && typeof disabledDate === 'function') {
        let newDate = value.clone();
        const hours = 24;
        const minutesAndSeconds = 60;
        const _disabledHours = [];
        const _disabledMinutes = [];
        const _disabledSeconds = [];
        const currentHour = value.get('hour');
        const currentMinute = value.get('minute');

        for (let i = 0; i < hours; i++) {
            // 禁用小时
            if (
                disabledDate(newDate.hour(i).minute(0).second(0), panelMode) &&
                disabledDate(newDate.hour(i).minute(59).second(59), panelMode)
            ) {
                _disabledHours.push(i);
            }
        }

        if (_disabledHours.length && _disabledHours.length < hours) {
            for (let i = 0; i < minutesAndSeconds; i++) {
                // 从当前小时开始遍历
                if (
                    disabledDate(newDate.hour(currentHour).minute(i).second(0), panelMode) &&
                    disabledDate(newDate.hour(currentHour).minute(i).second(59), panelMode)
                ) {
                    _disabledMinutes.push(i);
                }
            }
        }

        if (_disabledMinutes.length && _disabledMinutes.length < minutesAndSeconds) {
            for (let i = 0; i < minutesAndSeconds; i++) {
                // 从当前时分开始遍历
                newDate = newDate.hour(currentHour).minute(currentMinute).second(i);
                if (disabledDate(newDate, panelMode)) {
                    _disabledSeconds.push(i);
                }
            }
        }
        return {
            disabledHours: executedFunc(disabledItems(_disabledHours), disabledHours, _disabledTime.disabledHours),
            disabledMinutes: executedFunc(disabledItems(_disabledMinutes), disabledMinutes, _disabledTime.disabledMinutes),
            disabledSeconds: executedFunc(disabledItems(_disabledSeconds), disabledSeconds, _disabledTime.disabledSeconds),
        };
    }

    return {
        ..._disabledTime,
        disabledHours,
        disabledMinutes,
        disabledSeconds,
    };
}
