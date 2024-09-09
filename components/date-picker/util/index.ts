import moment, { type MomentFormatSpecification, type Moment } from 'moment';
import { type KeyboardEvent } from 'react';
import { KEYCODE } from '../../util';
import { type TimePickerProps } from '../../time-picker';
import { type RangePickerProps } from '../types';

export const PANEL = {
    TIME: 'time-panel',
    DATE: 'date-panel',
} as const;

export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';

export function isFunction(obj: unknown) {
    // @ts-expect-error 目前的写法 ts 不友好，其实可以写成更简洁的 typeof 判断
    return !!(obj && obj.constructor && obj.call && obj.apply);
}

type ResetValueTimeReturn<T, S> = T extends Moment ? (S extends Moment ? Moment : T) : T;

/**
 * 将 source 的 time 替换为 target 的 time
 * @param source - 输入值
 * @param target - 目标值
 */
export function resetValueTime<T, S>(source: T, target: S): ResetValueTimeReturn<T, S> {
    if (!moment.isMoment(source) || !moment.isMoment(target)) {
        return source as ResetValueTimeReturn<T, S>;
    }
    return source
        .clone()
        .hour(target.hour())
        .minute(target.minute())
        .second(target.second()) as ResetValueTimeReturn<T, S>;
}

export function formatDateValue(
    value: string | Moment | undefined | null,
    format?: MomentFormatSpecification
) {
    const val = typeof value === 'string' ? moment(value, format, false) : value;
    if (val && moment.isMoment(val) && val.isValid()) {
        return val;
    }

    return null;
}

export function checkDateValue(
    props: Record<string, unknown>,
    propName: string,
    componentName: string
) {
    // 支持传入 moment 对象或字符串，字符串不检测是否为日期字符串
    if (
        props[propName] &&
        !moment.isMoment(props[propName]) &&
        typeof props[propName] !== 'string'
    ) {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a moment object or format date string!`
        );
    }
}

export function getDateTimeFormat(
    format: string | undefined,
    showTime: RangePickerProps['showTime'],
    type?: 'date' | 'month' | 'year' | 'time'
) {
    if (!format && type) {
        format = {
            date: 'YYYY-MM-DD',
            month: 'YYYY-MM',
            year: 'YYYY',
            time: '',
        }[type];
    }
    const timeFormat = showTime ? (showTime as TimePickerProps).format || DEFAULT_TIME_FORMAT : '';
    const dateTimeFormat = timeFormat ? `${format} ${timeFormat}` : format;
    return {
        format,
        timeFormat,
        dateTimeFormat,
    };
}

export function extend<S extends Record<string, unknown>, T extends Record<string, unknown>>(
    source: S,
    target: T
): S & T {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            (target as Record<string, unknown>)[key] = source[key];
        }
    }
    return target as S & T;
}

/**
 * 监听键盘事件，操作日期字符串
 * @param e - 事件对象
 * @param param1 - 参数
 * @param type - 类型 year month day
 */
export function onDateKeydown(
    e: KeyboardEvent,
    {
        format,
        dateInputStr,
        value,
    }: { format?: string; dateInputStr: string; value?: Moment | null },
    type: 'year' | 'month' | 'day'
) {
    if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) {
        return;
    }

    if (
        (e.altKey && [KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) ||
        // @ts-expect-error 没有 controlKey，应该是 ctrlKey
        e.controlKey ||
        e.shiftKey
    ) {
        return;
    }

    let date = moment(dateInputStr, format, true);

    if (date.isValid()) {
        const stepUnit = e.altKey ? 'year' : 'month';
        switch (e.keyCode) {
            case KEYCODE.UP:
                date.subtract(1, type);
                break;
            case KEYCODE.DOWN:
                date.add(1, type);
                break;
            case KEYCODE.PAGE_UP:
                date.subtract(1, stepUnit);
                break;
            case KEYCODE.PAGE_DOWN:
                date.add(1, stepUnit);
                break;
        }
    } else if (value) {
        date = value.clone();
    } else {
        date = moment();
    }

    e.preventDefault();
    return date.format(format);
}

/**
 * 监听键盘事件，操作时间
 * @param e - 事件对象
 * @param param1 - 参数
 * @param type - second hour minute
 */
export function onTimeKeydown(
    e: KeyboardEvent,
    {
        format,
        timeInputStr,
        steps,
        value,
    }: {
        format: string;
        timeInputStr: string;
        steps: Record<string, number>;
        value?: Moment | null;
    },
    type: 'second' | 'minute' | 'hour'
) {
    if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1)
        return;
    if (
        (e.altKey && [KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) ||
        e.ctrlKey ||
        e.shiftKey
    )
        return;

    let time = moment(timeInputStr, format, true);

    if (time.isValid()) {
        const stepUnit = e.altKey ? 'hour' : 'minute';
        switch (e.keyCode) {
            case KEYCODE.UP:
                time.subtract(steps[type], type);
                break;
            case KEYCODE.DOWN:
                time.add(steps[type], type);
                break;
            case KEYCODE.PAGE_UP:
                time.subtract(steps[stepUnit], stepUnit);
                break;
            case KEYCODE.PAGE_DOWN:
                time.add(steps[stepUnit], stepUnit);
                break;
        }
    } else if (value) {
        time = value.clone();
    } else {
        time = moment().hours(0).minutes(0).seconds(0);
    }

    e.preventDefault();
    return time.format(format);
}
