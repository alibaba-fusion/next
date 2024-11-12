export function setTime(targetVal: any, sourceVal: any): any;
export function switchInputType(inputType: any): number;
export function mode2unit(mode: any): any;
/**
 * 获取输入框值
 * @param {*} value 日期值
 * @param {string | funtion} format 日期格式
 * @returns {string | string[]}
 */
export function fmtValue(value: any, fmt: any): string | string[];
/**
 * 判断值是否改变
 * @param {dayjs.ConfigType}} newValue
 * @param {dayjs.ConfigType} oldValue
 * @returns {boolean}
 */
export function isValueChanged(newValue: any, oldValue: dayjs.ConfigType): boolean;
