import type React from 'react';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';

interface HTMLAttributesWeak
    extends Omit<
        React.InputHTMLAttributes<HTMLElement>,
        'defaultValue' | 'onChange' | 'onKeyDown' | 'size' | 'maxLength'
    > {}
interface CommonPropsWithoutLocale extends Omit<CommonProps, 'locale'> {}

export interface TextAreaProps extends HTMLAttributesWeak, CommonPropsWithoutLocale {
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
    onKeyDown?: (
        e: React.KeyboardEvent<HTMLTextAreaElement>,
        opts: { beTrimed?: boolean; overMaxLength?: boolean }
    ) => void;

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
     * 当设置了 maxLength 时，是否截断超出字符串
     */
    cutString?: boolean;

    /**
     * 只读
     */
    readOnly?: boolean;

    /**
     * onChange 返回会自动去除头尾空字符
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
    getValueLength?: (value: string) => number | void;

    /**
     * 自定义 class
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: React.CSSProperties;

    /**
     * 原生 type
     */
    htmlType?: string;

    /**
     * name
     */
    name?: string;

    /**
     * 状态
     */
    state?: 'error' | 'warning' | 'loading';

    /**
     * 是否有边框
     */
    hasBorder?: boolean;

    /**
     * 自动高度 true / \{minRows: 2, maxRows: 4\}
     */
    autoHeight?: boolean | { minRows?: number | string; maxRows?: number | string };

    /**
     * 多行文本框高度 <br />(不要直接用 height 设置多行文本框的高度，ie9 10 会有兼容性问题)
     */
    rows?: number;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    renderPreview?: (value: string | number | undefined, props: TextAreaProps) => React.ReactNode;

    /**
     * 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange
     */
    composition?: boolean;
    /**
     * 是否出现 clear 按钮
     */
    hasClear?: boolean;
    locale?: Locale['TextArea'];
    size?: 'small' | 'medium' | 'large';
}

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
     * 输入框前附加内容 css
     */
    addonBeforeClassName?: string;

    /**
     * 输入框后附加内容
     */
    addonAfter?: React.ReactNode;

    /**
     * 输入框后额外 css
     */
    addonAfterClassName?: string;

    /**
     * rtl
     */
    rtl?: boolean;
    disabled?: boolean;
}

export interface InputProps extends HTMLAttributesWeak, CommonPropsWithoutLocale {
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
    onChange?: (
        value: string | number,
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.CompositionEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLInputElement>,
        reason?: string
    ) => void;

    /**
     * 键盘按下的时候触发的回调
     */
    onKeyDown?: (
        e: React.KeyboardEvent<HTMLInputElement>,
        opts: { beTrimed?: boolean; overMaxLength?: boolean }
    ) => void;

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
     * 当设置了 maxLength 时，是否截断超出字符串
     */
    cutString?: boolean;

    /**
     * 只读
     */
    readOnly?: boolean;

    /**
     * onChange 返回会自动去除头尾空字符
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
    getValueLength?: (value: string) => number | void;

    /**
     * 自定义 class
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: React.CSSProperties;

    /**
     * 原生 type
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
     * 是否出现 clear 按钮
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
     * 水印 (Icon 的 type 类型，和 hasClear 占用一个地方)
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
     * (原生 input 支持)
     */
    autoComplete?: string;

    /**
     * 自动聚焦 (原生 input 支持)
     */
    autoFocus?: boolean;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    renderPreview?: (value: string | number | undefined, props: InputProps) => React.ReactNode;

    /**
     * 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange
     * @version 1.23
     */
    composition?: boolean;

    /**
     * hover 展示 clear (配合 hasClear=true 使用)
     * @version 1.24
     */
    hoverShowClear?: boolean;
    extra?: unknown;
    htmlSize?: string;
    inputRender?: (input: React.ReactElement) => React.ReactNode;
    inputStyle?: React.CSSProperties;
    locale?: Locale['Input'];
    innerBeforeClassName?: string;
    innerAfterClassName?: string;
}
export interface PasswordProps extends InputProps {
    /**
     * 是否展示切换按钮
     */
    showToggle?: boolean;
}

export type GeneralHTMLInputElement = HTMLInputElement | HTMLTextAreaElement;

export interface BaseProps
    extends Omit<InputProps, 'onChange' | 'onKeyDown' | 'onFocus' | 'state' | 'renderPreview'> {
    onChange?: (
        value: string | number,
        e:
            | React.ChangeEvent<GeneralHTMLInputElement>
            | React.CompositionEvent<GeneralHTMLInputElement>
            | React.KeyboardEvent<GeneralHTMLInputElement>,
        reason?: string
    ) => void;
    onKeyDown?: (
        e: React.KeyboardEvent<GeneralHTMLInputElement>,
        opts: { beTrimed?: boolean; overMaxLength?: boolean }
    ) => void;
    onFocus?: (e: React.FocusEvent<GeneralHTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<GeneralHTMLInputElement>) => void;
    state?: string;
    renderPreview?: (
        value: string | number | undefined,
        props: InputProps | TextAreaProps
    ) => React.ReactNode;
}

export interface BaseState {
    value?: BaseProps['value'] | string;
    composition?: boolean;
    focus?: boolean;
    hint?: string;
    htmlType?: string;
    height?: number;
    overflowY?: 'hidden';
    minHeight?: number;
    maxHeight?: number;
}
