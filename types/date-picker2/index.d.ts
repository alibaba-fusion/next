/// <reference types="react" />
import React from 'react';
import { CommonProps } from '../util';
import { Dayjs, ConfigType } from 'dayjs';
import { PopupProps } from '../overlay';
import { InputProps } from '../input';

export default class DatePicker extends React.Component<DatePickerProps, any> {
    static RangePicker: typeof RangePicker;
    static MonthPicker: typeof MonthPicker;
    static YearPicker: typeof YearPicker;
    static WeekPicker: typeof WeekPicker;
    static QuarterPicker: typeof QuarterPicker;
}

export class YearPicker extends React.Component<DatePickerProps, any> {
    mode: 'year';
}
export class MonthPicker extends React.Component<DatePickerProps, any> {
    mode: 'month';
}
export class WeekPicker extends React.Component<DatePickerProps, any> {
    mode: 'week';
}
export class QuarterPicker extends React.Component<DatePickerProps, any> {
    mode: 'quarter';
}
export class RangePicker extends React.Component<RangePickerProps, any> {
    type: 'range';
}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}
export interface DatePickerProps extends HTMLAttributesWeak, CommonProps {
    type?: 'date' | 'range';
    name?: string;
    mode?: 'date' | 'month' | 'week' | 'quarter' | 'year';
    value?: ConfigType;
    defaultValue?: ConfigType;
    defaultPanelValue?: Dayjs;
    disabledDate?: (value: Dayjs, mode: 'date' | 'month' | 'week' | 'quarter' | 'year') => boolean;
    extraFooterRender?: React.ReactNode | (() => React.ReactNode);
    preset?: object | Array<object>;
    showTime?: boolean;
    showOk?: boolean;
    resetTime?: boolean;
    timePanelProps?: object;
    disabledTime?: object;

    onOk?: (value: Dayjs, strVal: string) => void;
    onChange?: (value: Dayjs, strVal: string) => void;
    onVisibleChange?: (visible: boolean) => void;
    onPanelChange?: (
        panelValue: Dayjs,
        mode: 'date' | 'month' | 'week' | 'quarter' | 'year'
    ) => void;

    format?: string | ((value: Dayjs) => string);
    /**
     * 输出格式：控制 onChange、onOk 事件的输出值格式
     *  - string 类型：根据时间格式进行转换
     *  - function 类型：((value: Dayjs, strVal: string) => any)
     *
     * @version 1.23
     */
    outputFormat?: string | ((value: Dayjs, strVal: string) => any);
    disabled?: boolean;
    state?: 'success' | 'loading' | 'error';
    size?: 'small' | 'medium' | 'large';
    hasBorder?: boolean;
    inputProps?: InputProps;
    inputReadOnly?: boolean;
    hasClear?: boolean;
    label?: React.ReactNode;
    separator?: React.ReactNode;
    placeholder?: string;

    visible?: boolean;
    defaultVisible?: boolean;
    popupTriggerType?: 'click' | 'hover';
    popupAlign?: string;
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);
    popupStyle?: React.CSSProperties;
    popupClassName?: string;
    popupProps?: PopupProps;
    followTrigger?: boolean;
    popupComponent?: React.Component;
    dateCellRender?: (value: Dayjs) => React.ReactNode;
    monthCellRender?: (value: Dayjs) => React.ReactNode;
    dateInputAriaLabel?: string;
    isPreview?: boolean;
    renderPreview?: (value: Dayjs) => React.ReactNode;
}

export interface RangePickerProps
    extends Omit<
        DatePickerProps,
        | 'value'
        | 'placeholder'
        | 'defaultValue'
        | 'format'
        | 'onOk'
        | 'onChange'
        | 'dateInputAriaLabel'
        | 'disabled'
        | 'outputFormat'
    > {
    value?: Array<ConfigType>;
    defaultValue?: Array<ConfigType>;
    format?: string | ((value: Dayjs) => string) | Array<string> | Array<(value: Dayjs) => string>;
    onOk?: (value: Array<Dayjs>, strVal: Array<string>) => void;
    onChange?: (value: Array<Dayjs>, strVal: Array<string>) => void;
    /**
     * 输出格式：控制 onChange、onOk 事件的输出值格式
     *  - string 类型：根据时间格式进行转换
     *  - function 类型：((value: Dayjs, strVal: string) => any)
     *
     * @version 1.23
     */
    outputFormat?:
        | string
        | ((value: Dayjs) => string)
        | Array<string>
        | Array<(value: Dayjs) => string>;
    placeholder?: string | Array<string>;
    dateInputAriaLabel?: Array<string> | string;
    disabled?: boolean | boolean[];
    onCalendarChange?: (values: [Dayjs, Dayjs], formatString: [string, string]) => void;
}
