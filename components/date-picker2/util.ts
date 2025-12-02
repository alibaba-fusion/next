import type { Dayjs, QUnitType } from 'dayjs';
import { datejs } from '../util';
import { DATE_INPUT_TYPE } from './constant';

export function setTime(targetVal: Dayjs, sourceVal: Dayjs) {
    if (sourceVal && targetVal) {
        return targetVal
            .hour(sourceVal.hour())
            .minute(sourceVal.minute())
            .second(sourceVal.second())
            .millisecond(sourceVal.millisecond());
    }
    return targetVal;
}

export function switchInputType(inputType: number | undefined) {
    const { BEGIN, END } = DATE_INPUT_TYPE;
    return inputType === BEGIN ? END : BEGIN;
}

export function mode2unit(mode: string): QUnitType {
    return (mode === 'date' ? 'day' : mode) as QUnitType;
}

/**
 * 获取输入框值
 * @param value - 日期值
 * @param format - 日期格式 string | funtion
 * @returns 返回格式化后的日期字符串或字符串数组 string | string[]
 */
export function fmtValue(
    value: Dayjs | (Dayjs | null)[] | null | undefined,
    fmt: string | ((value: Dayjs) => string) | undefined
) {
    const formater = (v: Dayjs, idx?: number) => {
        let _fmt = fmt;

        if (Array.isArray(fmt)) {
            _fmt = fmt[idx!];
        }

        return v ? (typeof _fmt === 'function' ? _fmt(v) : v.format(_fmt)) : '';
    };

    return Array.isArray(value) ? value.map((v, idx) => formater(v!, idx)) : formater(value!);
}

/**
 * 判断值是否改变
 * @param newValue - dayjs.ConfigType
 * @param oldValue - dayjs.ConfigType
 * @returns 返回值 boolean
 */
export function isValueChanged(
    newValue: string | string[] | Dayjs | (Dayjs | null)[] | null,
    oldValue: Dayjs | (Dayjs | null)[] | null | undefined
): boolean {
    return Array.isArray(newValue)
        ? isValueChanged(newValue[0], oldValue && (oldValue as (Dayjs | null)[])[0]) ||
              isValueChanged(newValue[1], oldValue && (oldValue as (Dayjs | null)[])[1])
        : newValue !== oldValue && !datejs(newValue as Dayjs).isSame(oldValue as Dayjs);
}
