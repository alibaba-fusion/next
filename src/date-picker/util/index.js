import moment from 'moment';

export const PANEL = {
    TIME: 'time-panel',
    DATE: 'date-panel',
};

export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';

export function isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
}

/**
 * 将 source 的 time 替换为 target 的 time
 * @param {Object} source 输入值
 * @param {Object} target 目标值
 */
export function resetValueTime(source, target) {
    if (!moment.isMoment(source) || !moment.isMoment(target)) {
        return source;
    }
    return source.clone().hour(target.hour()).minute(target.minute()).second(target.second());
}

export function formatDateValue(value, format) {
    const val = typeof value === 'string' ? moment(value, format, false) : value;
    if (val && moment.isMoment(val) && val.isValid()) {
        return val;
    }

    return null;
}

export function checkDateValue(props, propName, componentName) {
    // 支持传入 moment 对象或字符串，字符串不检测是否为日期字符串
    if (props[propName] && (!moment.isMoment(props[propName])) && typeof props[propName] !== 'string') {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}. Required a moment object or format date string!`);
    }
}

export function getDateTimeFormat(format, showTime) {
    const timeFormat = showTime ? (showTime.format || DEFAULT_TIME_FORMAT) : '';
    const dateTimeFormat = timeFormat ? `${format} ${timeFormat}` : format;
    return {
        format,
        timeFormat,
        dateTimeFormat,
    };
}

export function extend(source, target) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
}
