/// <reference types="react" />
import { Moment } from 'moment';
import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';
import { InputProps } from '../input';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

export interface MonthPickerProps extends HTMLAttributesWeak, CommonProps {
    name?: string;
    /**
     * 输入框内置标签
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 默认展现的年
     */
    defaultVisibleYear?: () => void;

    /**
     * 日期值（受控）moment 对象
     */
    value?: any;

    /**
     * 初始日期值，moment 对象
     */
    defaultValue?: any;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format?: string;

    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期值改变时的回调
     */
    onChange?: (value: any | string) => void;

    /**
     * 输入框尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式, 具体含义见 OverLay文档
     */
    popupAlign?: string;

    /**
     * 弹层容器
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     */
    popupProps?: PopupProps;

    /**
     * 输入框其他属性
     */
    inputProps?: InputProps;

    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: (calendarDate: any) => React.ReactNode;

    /**
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel?: string;
}

export class MonthPicker extends React.Component<MonthPickerProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
    placeholder?: any;
}

export interface RangePickerProps extends HTMLAttributesWeak, CommonProps {
    name?: string;
    type?: 'date' | 'month' | 'year';

    /**
     * 默认展示的起始月份
     */
    defaultVisibleMonth?: () => void;

    /**
     * 输入提示
     */
    placeholder?: Array<string> | string;

    /**
     * 日期范围值数组 [moment, moment]
     */
    value?: Array<any>;

    /**
     * 初始的日期范围值数组 [moment, moment]
     */
    defaultValue?: Array<any>;

    /**
     * 日期格式
     */
    format?: string;

    /**
     * 是否使用时间控件，支持传入 TimePicker 的属性
     */
    showTime?: any | boolean;

    /**
     * 每次选择是否重置时间（仅在 showTime 开启时有效）
     */
    resetTime?: boolean;

    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期范围值改变时的回调 [ MomentObject|String, MomentObject|String ]
     */
    onChange?: (value: Array<any>) => void;

    /**
     * 点击确认按钮时的回调 返回开始时间和结束时间`[ MomentObject|String, MomentObject|String ]`
     */
    onOk?: (value: Array<any>) => void;

    /**
     * 输入框内置标签
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     */
    state?: 'error' | 'loading' | 'success';

    /**
     * 输入框尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式, 具体含义见 OverLay文档
     */
    popupAlign?: string;

    /**
     * 弹层容器
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     */
    popupProps?: PopupProps;

    /**
     * 输入框其他属性
     */
    inputProps?: InputProps;

    /**
     * 自定义日期单元格渲染
     */
    dateCellRender?: () => void;

    /**
     * 开始日期输入框的 aria-label 属性
     */
    startDateInputAriaLabel?: string;

    /**
     * 开始时间输入框的 aria-label 属性
     */
    startTimeInputAriaLabel?: string;

    /**
     * 结束日期输入框的 aria-label 属性
     */
    endDateInputAriaLabel?: string;

    /**
     * 结束时间输入框的 aria-label 属性
     */
    endTimeInputAriaLabel?: string;
}

export class RangePicker extends React.Component<RangePickerProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

export interface YearPickerProps extends HTMLAttributesWeak, CommonProps {
    name?: string;
    /**
     * 输入框内置标签
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 日期值（受控）moment 对象
     */
    value?: any;

    /**
     * 初始日期值，moment 对象
     */
    defaultValue?: any;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format?: string;

    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期值改变时的回调
     */
    onChange?: (value: {} | string) => void;

    /**
     * 输入框尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式, 具体含义见 OverLay文档
     */
    popupAlign?: string;

    /**
     * 弹层容器
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     */
    popupProps?: PopupProps;

    /**
     * 输入框其他属性
     */
    inputProps?: InputProps;

    /**
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel?: string;
}

export class YearPicker extends React.Component<YearPickerProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

export interface DatePickerProps extends HTMLAttributesWeak, CommonProps {
    name?: string;
    /**
     * 输入框内置标签
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 默认展现的月
     */
    defaultVisibleMonth?: () => Moment;

    /**
     * 默认展现的年
     */
    defaultVisibleYear?: () => Moment;

    /**
     * 日期值（受控）moment 对象
     */
    value?: any;

    /**
     * 初始日期值，moment 对象
     */
    defaultValue?: any;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format?: string;

    /**
     * 是否使用时间控件，传入 TimePicker 的属性 { defaultValue, format, ... }
     */
    showTime?: any | boolean;

    /**
     * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
     */
    resetTime?: boolean;

    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期值改变时的回调
     */
    onChange?: (value: {} | string) => void;

    /**
     * 点击确认按钮时的回调
     */
    onOk?: (value: {} | string) => void;

    /**
     * 输入框尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层展示月份变化时的回调
     */
    onVisibleMonthChange?: (value: Moment, reason: string) => void;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式,具体含义见 OverLay文档
     */
    popupAlign?: string;

    /**
     * 弹层容器
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     */
    popupProps?: PopupProps;

    /**
     * 输入框其他属性
     */
    inputProps?: InputProps;

    /**
     * 自定义日期渲染函数
     */
    dateCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 自定义年份渲染函数
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel?: string;

    /**
     * 时间输入框的 aria-label 属性
     */
    timeInputAriaLabel?: string;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    renderPreview?: (value: any) => React.ReactNode;

    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;

    /**
     * 自定义弹层
     */
    popupComponent?: React.ComponentType<any>;

    /**
     * 自定义弹层内容
     */
    popupContent?: React.ReactNode;

    /**
     * 禁用日期选择器的日期模式切换
     */
    disableChangeMode?: boolean;
}

export default class DatePicker extends React.Component<DatePickerProps, any> {
    static MonthPicker: typeof MonthPicker;
    static RangePicker: typeof RangePicker;
    static YearPicker: typeof YearPicker;
    static WeekPicker: React.ComponentType<DatePickerProps>;
}
