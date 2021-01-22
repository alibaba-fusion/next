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
    value?: Array<number> | Array<string> | Array<Dayjs>;
    defaultValue?: Array<number> | Array<string> | Array<Dayjs>;
    format?: string | ((value: Dayjs) => string) | Array<string> | Array<(value: Dayjs) => string>;
    onOk?: (value: Array<Dayjs>, strVal: Array<string>) => void;
    onChange?: (value: Array<Dayjs>, strVal: Array<string>) => void;
    placeholder: string | Array<string>;
    dateInputAriaLabel: Array<string> | string;
}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}
export interface PickerProps extends HTMLAttributesWeak, CommonProps {
    type: 'date';
    mode: 'date' | 'month' | 'week' | 'quarter' | 'year';
    value?: string | number | Dayjs;
    defaultValue?: string | number | Dayjs;
    defaultPanelValue?: Dayjs;
    disabledDate?: (value: Dayjs, mode: 'date' | 'month' | 'week' | 'quarter' | 'year') => boolean;
    extraFooterRender?: () => React.ReactNode;
    preset: object | Array<object>;
    showTime?: boolean;
    resetTime?: boolean;
    timePanelProps: object;
    disabledTime: (value: Dayjs) => boolean;

    onOk?: (value: Dayjs, strVal: string) => void;
    onChange?: (value: Dayjs, strVal: string) => void;
    onVisibleChange?: (visible: boolean) => void;
    onPanelChange?: (panelValue: Dayjs, mode: 'date' | 'month' | 'week' | 'quarter' | 'year') => void;

    format?: string | ((value: Dayjs) => string);
    disabled?: boolean;
    state?: 'success' | 'loading' | 'error';
    size?: 'small' | 'medium' | 'large';
    hasBorder: boolean;
    inputProps?: InputProps;
    inputReadOnly?: boolean;
    hasClear?: boolean;
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
    isPreview: boolean;
    renderPreview: (value: Dayjs) => React.ReactNode;
}

export interface RangePickerProps extends HTMLAttributesWeak, CommonProps {}
