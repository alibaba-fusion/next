/// <reference types="react" />

import * as React from 'react';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
    onKeyDown?: any;
}

export interface NumberPickerProps extends HTMLAttributesWeak {
    /**
     * 样式前缀
     */
    prefix?: string;

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
    onKeyDown?: () => void;

    /**
     * 焦点获得
     */
    onFocus?: () => void;

    /**
     * 焦点失去
     */
    onBlur?: () => void;

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
