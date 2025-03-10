import moment, { type MomentFormatSpecification, type Moment } from 'moment';
import { type KeyboardEvent } from 'react';
import { type RangePickerProps } from '../types';
export declare const PANEL: {
    readonly TIME: "time-panel";
    readonly DATE: "date-panel";
};
export declare const DEFAULT_TIME_FORMAT = "HH:mm:ss";
export declare function isFunction(obj: unknown): boolean;
type ResetValueTimeReturn<T, S> = T extends Moment ? (S extends Moment ? Moment : T) : T;
/**
 * 将 source 的 time 替换为 target 的 time
 * @param source - 输入值
 * @param target - 目标值
 */
export declare function resetValueTime<T, S>(source: T, target: S): ResetValueTimeReturn<T, S>;
export declare function formatDateValue(value: string | Moment | undefined | null, format?: MomentFormatSpecification): moment.Moment | null;
export declare function checkDateValue(props: Record<string, unknown>, propName: string, componentName: string): Error | undefined;
export declare function getDateTimeFormat(format: string | undefined, showTime: RangePickerProps['showTime'], type?: 'date' | 'month' | 'year' | 'time'): {
    format: string | undefined;
    timeFormat: string;
    dateTimeFormat: string | undefined;
};
export declare function extend<S extends Record<string, unknown>, T extends Record<string, unknown>>(source: S, target: T): S & T;
/**
 * 监听键盘事件，操作日期字符串
 * @param e - 事件对象
 * @param param1 - 参数
 * @param type - 类型 year month day
 */
export declare function onDateKeydown(e: KeyboardEvent, { format, dateInputStr, value, }: {
    format?: string;
    dateInputStr: string;
    value?: Moment | null;
}, type: 'year' | 'month' | 'day'): string | undefined;
/**
 * 监听键盘事件，操作时间
 * @param e - 事件对象
 * @param param1 - 参数
 * @param type - second hour minute
 */
export declare function onTimeKeydown(e: KeyboardEvent, { format, timeInputStr, steps, value, }: {
    format: string;
    timeInputStr: string;
    steps: Record<string, number>;
    value?: Moment | null;
}, type: 'second' | 'minute' | 'hour'): string | undefined;
export {};
