/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { ButtonProps } from '../button';
import Input from '../input';

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
    size?: 'large' | 'medium' | 'small';

    /**
     * 当前值
     */
    value?: number | string;

    /**
     * 默认值
     */
    defaultValue?: number | string;
    /**
     * 内联 左侧label
     */
    label?: React.ReactNode;

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
    onCorrect?: (obj: object) => void;

    /**
     * 最大值
     */
    max?: number | string;

    /**
     * 最小值
     */
    min?: number | string;

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
    upBtnProps?: ButtonProps;

    /**
     * 减少按钮的props
     */
    downBtnProps?: ButtonProps;
    /**
     * 控制按钮一直显示、隐藏
     */
    alwaysShowTrigger?: boolean;
    /**
     * 是否为预览态
     */
    isPreview?: boolean;
    /**
     * 预览态模式下渲染的内容
     */
    renderPreview?: (value: number | string, props: object) => React.ReactNode;
    /**
     * 预设屏幕宽度
     */
    device?: 'phone' | 'tablet' | 'desktop';
    /**
     * 是否展示点击按钮
     */
    hasTrigger?: boolean;
    /**
     * 开启大数支持，输入输出均为string类型
     */
    stringMode?: boolean;
}

export default class NumberPicker extends React.Component<NumberPickerProps, any> {
    getInputNode: () => Input;
}
