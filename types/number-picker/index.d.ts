/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
    onKeyDown?: any;
}

export interface NumberPickerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 样式前缀
     */
    prefix?: string;
    name?: string;
    /**
     * 设置类型
     */
    type?: 'normal' | 'inline';

    /**
     * 大小
     */
    size?: 'large' | 'medium';

    /**
     * 当前值
     */
    value?: number;

    /**
     * 默认值
     */
    defaultValue?: number;

    /**
     * 文字后附加内容
     */
    innerAfter?: React.ReactNode;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 步长
     */
    step?: number | string;

    /**
     * 保留小数点后位数
     */
    precision?: number;

    /**
     * 用户是否可以输入
     */
    editable?: boolean;

    /**
     * 自动焦点
     */
    autoFocus?: boolean;

    /**
     * 数值被改变的事件
     */
    onChange?: (value: number, e: any) => void;

    /**
     * 键盘按下
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

    /**
     * 焦点获得
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * 焦点失去
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * 数值订正后的回调
     */
    onCorrect?: (obj: {}) => void;

    /**
     * 最大值
     */
    max?: number;

    /**
     * 最小值
     */
    min?: number;

    /**
     * 自定义class
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: React.CSSProperties;

    /**
     * 格式化当前值
     */
    format?: (value: number) => string | number;

    /**
     * 增加按钮的props
     */
    upBtnProps?: {};

    /**
     * 减少按钮的props
     */
    downBtnProps?: {};
}

export default class NumberPicker extends React.Component<
    NumberPickerProps,
    any
> {}
