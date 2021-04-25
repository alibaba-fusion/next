/// <reference types="react" />
import * as React from 'react';
import CommonProps from '../util';
import { Dayjs } from 'dayjs';
import { PopupProps } from '../overlay';
import { InputProps } from '../input';

export default class DatePicker extends React.Component<PickerProps, any> {
    static RangePicker: typeof RangePicker;
    static MonthPicker: typeof MonthPicker;
    static YearPicker: typeof YearPicker;
    static WeekPicker: typeof WeekPicker;
    static QuarterPicker: typeof QuarterPicker;
}

export class YearPicker extends React.Component<PickerProps, any> {
    mode: 'year';
}
export class MonthPicker extends React.Component<PickerProps, any> {
    mode: 'month';
}
export class WeekPicker extends React.Component<PickerProps, any> {
    mode: 'week';
}
export class QuarterPicker extends React.Component<PickerProps, any> {
    mode: 'quarter';
}
export class RangePicker extends React.Component<RangePickerProps, any> {
    type: 'range';
}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}
export interface PickerProps extends HTMLAttributesWeak, CommonProps {
    type?: 'date' | 'range';
    name?: string;
    mode?: 'date' | 'month' | 'week' | 'quarter' | 'year';
    value?: string | number | typeof Dayjs;
    defaultValue?: string | number | typeof Dayjs;
    defaultPanelValue?: typeof Dayjs;
    disabledDate?: (value: typeof Dayjs, mode: 'date' | 'month' | 'week' | 'quarter' | 'year') => boolean;
    extraFooterRender?: () => React.ReactNode;
    preset?: object | Array<object>;
    showTime?: boolean;
    resetTime?: boolean;
    timePanelProps?: object;
    disabledTime?: (value: typeof Dayjs) => boolean;

    onOk?: (value: typeof Dayjs, strVal: string) => void;
    onChange?: (value: typeof Dayjs, strVal: string) => void;
    onVisibleChange?: (visible: boolean) => void;
    onPanelChange?: (panelValue: typeof Dayjs, mode: 'date' | 'month' | 'week' | 'quarter' | 'year') => void;

    format?: string | ((value: typeof Dayjs) => string);
    disabled?: boolean;
    state?: 'success' | 'loading' | 'error';
    size?: 'small' | 'medium' | 'large';
    hasBorder?: boolean;
    inputProps?: InputProps;
    inputReadOnly?: boolean;
    hasClear?: boolean;
    label?: React.ReactNode;
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
    dateCellRender?: (value: typeof Dayjs) => React.ReactNode;
    monthCellRender?: (value: typeof Dayjs) => React.ReactNode;
    dateInputAriaLabel?: string;
    isPreview?: boolean;
    renderPreview?: (value: typeof Dayjs) => React.ReactNode;
}

export interface RangePickerProps extends CommonProps {
    name?: string;
    value?: Array<number> | Array<string> | Array<typeof Dayjs>;
    defaultValue?: Array<number> | Array<string> | Array<typeof Dayjs>;
    format?: string | ((value: typeof Dayjs) => string) | Array<string> | Array<(value: typeof Dayjs) => string>;
    onOk?: (value: Array<typeof Dayjs>, strVal: Array<string>) => void;
    onChange?: (value: Array<typeof Dayjs>, strVal: Array<string>) => void;
    placeholder?: string | Array<string>;
    dateInputAriaLabel?: Array<string> | string;
    mode?: 'date' | 'month' | 'week' | 'quarter' | 'year';
    defaultPanelValue?: typeof Dayjs;
    disabledDate?: (value: typeof Dayjs, mode: 'date' | 'month' | 'week' | 'quarter' | 'year') => boolean;
    extraFooterRender?: () => React.ReactNode;
    preset?: object | Array<object>;
    showTime?: boolean;
    resetTime?: boolean;
    timePanelProps?: object;
    disabledTime?: (value: typeof Dayjs) => boolean;
    onVisibleChange?: (visible: boolean) => void;
    onPanelChange?: (panelValue: typeof Dayjs, mode: 'date' | 'month' | 'week' | 'quarter' | 'year') => void;
    disabled?: boolean;
    state?: 'success' | 'loading' | 'error';
    size?: 'small' | 'medium' | 'large';
    hasBorder?: boolean;
    inputProps?: InputProps;
    inputReadOnly?: boolean;
    hasClear?: boolean;
    label?: React.ReactNode;
    separator?: React.ReactNode;
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
    dateCellRender?: (value: typeof Dayjs) => React.ReactNode;
    monthCellRender?: (value: typeof Dayjs) => React.ReactNode;
    isPreview?: boolean;
    renderPreview?: (value: typeof Dayjs) => React.ReactNode;
}
