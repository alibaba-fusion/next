/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.InputHTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
    onKeyDown?: any;
    size?: any;
}

export interface TextAreaProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 当前值
     */
    value?: string | number;

    /**
     * 初始化值
     */
    defaultValue?: string | number;

    /**
     * 发生改变的时候触发的回调
     */
    onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>, type?: string) => void;

    /**
     * 键盘按下的时候触发的回调
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>, opts: {}) => void;

    /**
     * 禁用状态
     */
    disabled?: boolean;

    /**
     * 最大长度
     */
    maxLength?: number;

    /**
     * 是否展现最大长度样式
     */
    hasLimitHint?: boolean;
    showLimitHint?: boolean;

    /**
     * 当设置了maxLength时，是否截断超出字符串
     */
    cutString?: boolean;

    /**
     * 只读
     */
    readOnly?: boolean;

    /**
     * onChange返回会自动去除头尾空字符
     */
    trim?: boolean;

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 获取焦点时候触发的回调
     */
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;

    /**
     * 失去焦点时候触发的回调
     */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;

    /**
     * 自定义字符串计算长度方式
     */
    getValueLength?: (value: string) => number;

    /**
     * 自定义class
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: React.CSSProperties;

    /**
     * 原生type
     */
    htmlType?: string;

    /**
     * name
     */
    name?: string;

    /**
     * 状态
     */
    state?: 'error' | 'warning';

    /**
     * 是否有边框
     */
    hasBorder?: boolean;

    /**
     * 自动高度 true / {minRows: 2, maxRows: 4}
     */
    autoHeight?: boolean | {};

    /**
     * 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
     */
    rows?: number;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    renderPreview?: (value: string | number) => React.ReactNode;

    /**
     * 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange
     */
    composition?: boolean;
    /**
     * 是否出现clear按钮
     */
    hasClear?: boolean;
}

export class TextArea extends React.Component<TextAreaProps, any> {}

export interface GroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 样式前缀
     */
    prefix?: string;

    /**
     * 输入框前附加内容
     */
    addonBefore?: React.ReactNode;

    /**
     * 输入框前附加内容css
     */
    addonBeforeClassName?: string;

    /**
     * 输入框后附加内容
     */
    addonAfter?: React.ReactNode;

    /**
     * 输入框后额外css
     */
    addonAfterClassName?: string;

    /**
     * rtl
     */
    rtl?: boolean;
}

export class Group extends React.Component<GroupProps, any> {}

export interface InputProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 当前值
     */
    value?: string | number;

    /**
     * 初始化值
     */
    defaultValue?: string | number;

    /**
     * 发生改变的时候触发的回调
     */
    onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>, type?: string) => void;

    /**
     * 键盘按下的时候触发的回调
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, opts: {}) => void;

    /**
     * 禁用状态
     */
    disabled?: boolean;

    /**
     * 最大长度
     */
    maxLength?: number;

    /**
     * 是否展现最大长度样式
     */
    hasLimitHint?: boolean;
    showLimitHint?: boolean;

    /**
     * 当设置了maxLength时，是否截断超出字符串
     */
    cutString?: boolean;

    /**
     * 只读
     */
    readOnly?: boolean;

    /**
     * onChange返回会自动去除头尾空字符
     */
    trim?: boolean;

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 获取焦点时候触发的回调
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * 失去焦点时候触发的回调
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * 自定义字符串计算长度方式
     */
    getValueLength?: (value: string) => number;

    /**
     * 自定义class
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: React.CSSProperties;

    /**
     * 原生type
     */
    htmlType?: string;

    /**
     * name
     */
    name?: string;

    /**
     * 状态
     */
    state?: 'error' | 'loading' | 'success' | 'warning';

    /**
     * label
     */
    label?: React.ReactNode;

    /**
     * 是否出现clear按钮
     */
    hasClear?: boolean;

    /**
     * 是否有边框
     */
    hasBorder?: boolean;

    /**
     * 尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 按下回车的回调
     */
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

    /**
     * 水印 (Icon的type类型，和hasClear占用一个地方)
     */
    hint?: string | React.ReactNode;

    /**
     * 文字前附加内容
     */
    innerBefore?: React.ReactNode;

    /**
     * 文字后附加内容
     */
    innerAfter?: React.ReactNode;

    /**
     * 输入框前附加内容
     */
    addonBefore?: React.ReactNode;

    /**
     * 输入框后附加内容
     */
    addonAfter?: React.ReactNode;

    /**
     * 输入框前附加文字
     */
    addonTextBefore?: React.ReactNode;

    /**
     * 输入框后附加文字
     */
    addonTextAfter?: React.ReactNode;

    /**
     * (原生input支持)
     */
    autoComplete?: string;

    /**
     * 自动聚焦(原生input支持)
     */
    autoFocus?: boolean;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    renderPreview?: (value: string | number) => React.ReactNode;

    /**
     * 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange
     * @version 1.23
     */
    composition?: boolean;

    /**
     * hover展示clear (配合 hasClear=true使用)
     * @version 1.24
     */
    hoverShowClear?: boolean;
}
export interface PasswordProps extends InputProps {
    /**
     * 是否展示切换按钮
     */
    showToggle?: boolean;
}
export class Password extends React.Component<PasswordProps, any> {}

export default class Input extends React.Component<InputProps, any> {
    static TextArea: typeof TextArea;
    static Group: typeof Group;
    static Password: typeof Password;
    getInputNode: () => HTMLInputElement;
}
