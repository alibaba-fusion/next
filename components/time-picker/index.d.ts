/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';
import { Moment } from 'moment';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

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
     * 时间值（moment 对象或时间字符串，受控状态使用）
     */
    value?: any;

    /**
     * 时间初值（moment 对象或时间字符串，非受控状态使用）
     */
    defaultValue?: any;

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
     * https://momentjs.com/docs/#/parsing/string-format/
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
     * 是否为预览态
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容
     * @param value 时间
     */
    renderPreview?: (value: Moment | null) => React.ReactNode;

    /**
     * 时间值改变时的回调
     */
    onChange?: (value: any | string) => void;
}

export default class TimePicker extends React.Component<TimePickerProps, any> {}
