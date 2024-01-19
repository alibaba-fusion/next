/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';
import { InputProps } from '../input';
import { ButtonProps } from '../button';
import { Dayjs, ConfigType } from 'dayjs';

interface IPresetType {
    label?: string;
    value?: ConfigType | (() => ConfigType);
}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

export interface DatePreset extends ButtonProps {
    label: string;
    // 时间值（dayjs 对象或时间字符串）或者返回时间值的函数
    value: any;
}

export interface RangePreset {
    [propName: string]: Dayjs[];
}

export type StateValue = Dayjs | null;

export interface TimePickerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 按钮的文案
     */
    label?: React.ReactNode;
    name?: string;

    /**
     * 输入框状态
     */
    state?: 'error' | 'success';

    /**
     * 输入框提示
     */
    placeholder?: string;

    /**
     * 时间值（dayjs 对象或时间字符串，受控状态使用）
     */
    value?: ConfigType;

    /**
     * 时间初值（dayjs 对象或时间字符串，非受控状态使用）
     */
    defaultValue?: ConfigType;

    /**
     * 时间选择框的尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否允许清空时间
     */
    hasClear?: boolean;

    /**
     * 时间的格式
     * https://dayjs.gitee.io/docs/zh-CN/display/format
     */
    format?: string;

    /**
     * 小时选项步长
     */
    hourStep?: number;

    /**
     * 分钟选项步长
     */
    minuteStep?: number;

    /**
     * 秒钟选项步长
     */
    secondStep?: number;

    /**
     * 禁用小时函数
     */
    disabledHours?: (index: number) => boolean;

    /**
     * 禁用分钟函数
     */
    disabledMinutes?: (index: number) => boolean;

    /**
     * 禁用秒钟函数
     */
    disabledSeconds?: (index: number) => boolean;

    /**
     * 弹层是否显示（受控）
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示（非受控）
     */
    defaultVisible?: boolean;

    /**
     * 弹层容器
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层对齐方式, 详情见Overlay 文档
     */
    popupAlign?: string;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层属性
     */
    popupProps?: PopupProps;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 输入框是否有边框
     */
    hasBorder?: boolean;

    /**
     * 透传给 Input 的属性
     */
    inputProps?: InputProps;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容
     * @param value 时间
     */
    renderPreview?: (value: StateValue | [StateValue, StateValue]) => React.ReactNode;

    /**
     * 预设值，会显示在时间面板下面
     */
    ranges?: RangePreset | DatePreset[];

    /**
     * 时间值改变时的回调
     */
    onChange?: (date: Dayjs, dateString: string) => void;
}

export interface RangePickerProps
    extends Omit<
        TimePickerProps,
        'value' | 'placeholder' | 'defaultValue' | 'onOk' | 'disabled' | 'onChange' | 'preset'
    > {
    value?: Array<ConfigType>;
    defaultValue?: Array<ConfigType>;
    onOk?: (value: Array<Dayjs>, strVal: Array<string>) => void;
    onChange?: (value: Array<Dayjs>, strVal: Array<string>) => void;
    placeholder?: string | Array<string>;
    disabled?: boolean | boolean[];
    preset?: IPresetType | IPresetType[];
}

export class RangePicker extends React.Component<RangePickerProps, any> {
    type: 'range';
}

export default class TimePicker extends React.Component<TimePickerProps, any> {
    static RangePicker: typeof RangePicker;
}
