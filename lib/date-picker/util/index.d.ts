export function isFunction(obj: any): boolean;
/**
 * 将 source 的 time 替换为 target 的 time
 * @param {Object} source 输入值
 * @param {Object} target 目标值
 */
export function resetValueTime(source: Object, target: Object): Object | moment.Moment;
export function formatDateValue(value: any, format: any): moment.Moment | null;
export function checkDateValue(props: any, propName: any, componentName: any): Error | undefined;
export function getDateTimeFormat(format: any, showTime: any, type: any): {
    format: any;
    timeFormat: any;
    dateTimeFormat: any;
};
export function extend(source: any, target: any): any;
/**
 * 监听键盘事件，操作日期字符串
 * @param {KeyboardEvent} e 事件对象
 * @param {Object} param1
 * @param {String} type 类型 year month day
 */
export function onDateKeydown(e: KeyboardEvent, { format, dateInputStr, value }: Object, type: string): string | undefined;
/**
 * 监听键盘事件，操作时间
 * @param {KeyboardEvent<HTMLInputElement>} e
 * @param {Object} param1
 * @param {String} type second hour minute
 */
export function onTimeKeydown(e: any, { format, timeInputStr, steps, value }: Object, type: string): string | undefined;
export namespace PANEL {
    let TIME: string;
    let DATE: string;
}
export const DEFAULT_TIME_FORMAT: "HH:mm:ss";
import moment from 'moment';
