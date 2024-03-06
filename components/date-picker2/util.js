import { datejs, func } from '../util';
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

export function getDisabledTime(props) {
    const { timePanelProps, value, disabledDate, panelMode } = props;
    const { disabledHours, disabledMinutes, disabledSeconds } = timePanelProps;

    const disabledItems = list => index => {
        return list.indexOf(index) >= 0;
    };

    if (disabledHours || disabledMinutes || disabledSeconds) {
        return {
            disabledHours,
            disabledMinutes,
            disabledSeconds,
        };
    }

    if (value && typeof disabledDate === 'function') {
        let newDate = value.clone();
        const hours = 24;
        const minutesAndSeconds = 60;
        const _disabledHours = [];
        const _disabledMinutes = [];
        const _disabledSeconds = [];
        let currentHour = value.get('hour');
        let currentMinute = value.get('minute');

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
            // 边界处理
            while (_disabledHours.indexOf(currentHour) > -1) {
                currentHour = (currentHour + 1) % hours;
            }
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
            // 边界处理
            while (_disabledMinutes.indexOf(currentMinute) > -1) {
                currentMinute = (currentMinute + 1) % minutesAndSeconds;
            }
            for (let i = 0; i < minutesAndSeconds; i++) {
                // 从当前时分开始遍历
                newDate = newDate.hour(currentHour).minute(currentMinute).second(i);
                if (disabledDate(newDate, panelMode)) {
                    _disabledSeconds.push(i);
                }
            }
        }

        // 当前选中时间落在禁用区
        if (disabledDate(value, panelMode)) {
            // 边界处理
            let currentSecond = value.get('second');
            while (_disabledSeconds.indexOf(currentSecond) > -1) {
                currentSecond = (currentSecond + 1) % minutesAndSeconds;
            }
            newDate = newDate.hour(currentHour).minute(currentMinute).second(currentSecond);
            func.invoke(props, 'onSelect', [newDate]);
        }

        return {
            disabledHours: disabledItems(_disabledHours),
            disabledMinutes: disabledItems(_disabledMinutes),
            disabledSeconds: disabledItems(_disabledSeconds),
        };
    }

    return null;
}
