import type React from 'react';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';

interface HTMLAttributesWeak
    extends Omit<
        React.InputHTMLAttributes<HTMLElement>,
        'defaultValue' | 'onChange' | 'onKeyDown' | 'size' | 'maxLength' | 'value'
    > {}
interface CommonPropsWithoutLocale extends Omit<CommonProps, 'locale'> {}

/**
 * @api
 */
export interface OnKeyDownOpts {
    /**
     * 输入的空格被清理
     * @en Input space is cleared
     */
    beTrimed?: boolean;
    /**
     * 已超出最大长度
     * @en Exceeded maximum length
     */
    overMaxLength?: boolean;
}

/**
 * @api Input.TextArea
 * @order 2
 */
export interface TextAreaProps extends HTMLAttributesWeak, CommonPropsWithoutLocale {
    /**
     * 当前值（受控）
     * @en Current value (controlled)
     */
    value?: string | number | null;

    /**
     * 默认值（非受控）
     * @en Default value (uncontrolled)
     */
    defaultValue?: string | number | null;

    /**
     * 发生改变的时候触发的回调
     * @en Callback when value changed
     */
    onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>, type?: string) => void;

    /**
     * 键盘按下的时候触发的回调
     * @en Callback when key down
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>, opts: OnKeyDownOpts) => void;

    /**
     * 禁用状态
     * @en Disabled of Input
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 最大长度
     * @en Max length
     */
    maxLength?: number;

    /**
     * 是否展现最大长度样式
     * @en Show limit hint
     * @deprecated use hasLimitHint, will be removed in 2.x
     * @defaultValue false
     */
    hasLimitHint?: boolean;

    /**
     * 是否展现最大长度样式
     * @en Show limit hint
     * @defaultValue false
     */
    showLimitHint?: boolean;

    /**
     * 当设置了 maxLength 时，是否截断超出的字符串
     * @en Cut string when maxLength is exceeded
     * @defaultValue true
     */
    cutString?: boolean;

    /**
     * 只读
     * @en Read only
     * @defaultValue false
     */
    readOnly?: boolean;

    /**
     * onChange 返回会自动去除头尾空字符
     * @en onChange return will automatically remove head and tail empty characters
     * @defaultValue false
     */
    trim?: boolean;

    /**
     * 输入提示
     * @en Placeholder
     */
    placeholder?: string;

    /**
     * 获取焦点时候触发的回调
     * @en Callback when focus
     */
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;

    /**
     * 失去焦点时候触发的回调
     * @en Callback when blur
     */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;

    /**
     * 自定义字符串计算长度方式
     * @en Custom calculation method of string length
     */
    getValueLength?: (value: string) => number | void;

    /**
     * 自定义 class
     * @en Custom className
     */
    className?: string;

    /**
     * 自定义内联样式
     * @en Custom inline style
     */
    style?: React.CSSProperties;

    /**
     * 原生 type
     * @en Native type
     */
    htmlType?: string;

    /**
     * name
     * @en name
     */
    name?: string;

    /**
     * 状态
     * @en State
     */
    state?: 'error' | 'warning' | 'loading';

    /**
     * 是否有边框
     * @en Show border
     * @defaultValue true
     */
    hasBorder?: boolean;

    /**
     * 根据内容自动改变高度
     * @en Auto height
     * @defaultValue false
     */
    autoHeight?: boolean | { minRows?: number | string; maxRows?: number | string };

    /**
     * 多行文本框高度
     * @en Height of multi-line text box
     * @defaultValue 4
     */
    rows?: number;

    /**
     * 是否为预览态
     * @en Is preview
     * @defaultValue false
     */
    isPreview?: boolean;
    /**
     * 自定义预览态内容
     * @en Custom preview content
     */
    renderPreview?: (
        value: string | number | undefined | null,
        props: TextAreaProps
    ) => React.ReactNode;

    /**
     * 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange
     * @en Will filter the input method middle letter status, and only trigger onChange after the text input is completed
     * @version 1.23
     * @defaultValue false
     */
    composition?: boolean;
    /**
     * 是否出现 clear 按钮
     * @en Show clear button
     */
    hasClear?: boolean;
    /**
     * 多语言文案
     * @en Locale
     * @skip
     */
    locale?: Locale['TextArea'];
    /**
     * 尺寸
     * @en Size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';
}

/**
 * @api Input.Group
 * @order 3
 */
export interface GroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 输入框前附加内容
     * @en Addon Content before input
     */
    addonBefore?: React.ReactNode;

    /**
     * 输入框前附加内容的类名
     * @en Addon Content className before input
     *
     */
    addonBeforeClassName?: string;

    /**
     * 输入框后附加内容
     * @en Addon Content after input
     */
    addonAfter?: React.ReactNode;

    /**
     * 输入框后附加内容的类名
     * @en Addon Content className after input
     */
    addonAfterClassName?: string;

    /**
     * rtl
     * @en rtl
     */
    rtl?: boolean;
    /**
     * 禁用状态
     * @en Disabled
     */
    disabled?: boolean;
}

/**
 * @api Input
 * @order 1
 */
export interface InputProps extends HTMLAttributesWeak, CommonPropsWithoutLocale {
    /**
     * 当前值（受控）
     * @en Current value (controlled)
     */
    value?: string | number | null;

    /**
     * 默认值（非受控）
     * @en Default value (uncontrolled)
     */
    defaultValue?: string | number | null;

    /**
     * 发生改变的时候触发的回调
     * @en Callback when value changed
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
     * @en Callback when key down
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, opts: OnKeyDownOpts) => void;

    /**
     * 禁用状态
     * @en Disabled of Input
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 最大长度
     * @en Max length
     */
    maxLength?: number;

    /**
     * 是否展现最大长度样式
     * @en Show limit hint
     * @deprecated use hasLimitHint, will be removed in 2.x
     * @defaultValue false
     */
    hasLimitHint?: boolean;

    /**
     * 是否展现最大长度样式
     * @en Show limit hint
     * @defaultValue false
     */
    showLimitHint?: boolean;

    /**
     * 当设置了 maxLength 时，是否截断超出的字符串
     * @en Cut string when maxLength is exceeded
     * @defaultValue true
     */
    cutString?: boolean;

    /**
     * 只读
     * @en Read only
     * @defaultValue false
     */
    readOnly?: boolean;

    /**
     * onChange 返回会自动去除头尾空字符
     * @en onChange return will automatically remove head and tail empty characters
     * @defaultValue false
     */
    trim?: boolean;

    /**
     * 输入提示
     * @en Placeholder
     */
    placeholder?: string;

    /**
     * 获取焦点时候触发的回调
     * @en Callback when focus
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * 失去焦点时候触发的回调
     * @en Callback when blur
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * 自定义字符串计算长度方式
     * @en Custom calculation method of string length
     */
    getValueLength?: (value: string) => number | void;

    /**
     * 自定义 class
     * @en Custom className
     */
    className?: string;

    /**
     * 自定义内联样式
     * @en Custom inline style
     */
    style?: React.CSSProperties;

    /**
     * 原生 type
     * @en Native type
     */
    htmlType?: string;

    /**
     * name
     * @en name
     */
    name?: string;

    /**
     * 状态
     * @en State
     */
    state?: 'error' | 'loading' | 'success' | 'warning';

    /**
     * label
     * @en label
     */
    label?: React.ReactNode;

    /**
     * 是否出现 clear 按钮
     * @en Show clear button
     */
    hasClear?: boolean;

    /**
     * 是否有边框
     * @en Show border
     * @defaultValue true
     */
    hasBorder?: boolean;

    /**
     * 尺寸
     * @en Size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 按下回车的回调
     * @en Callback when press enter
     */
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

    /**
     * 水印 (Icon 的 type 类型，和清除按钮占用同一个地方)
     * @en Hint (Icon type, occupy the same place as clear button)
     */
    hint?: string | React.ReactNode;

    /**
     * 文字前附加内容
     * @en Content before text
     */
    innerBefore?: React.ReactNode;

    /**
     * 文字后附加内容
     * @en Content after text
     */
    innerAfter?: React.ReactNode;

    /**
     * 输入框前附加内容
     * @en Addon Content before input
     */
    addonBefore?: React.ReactNode;

    /**
     * 输入框后附加内容
     * @en Addon Content after input
     */
    addonAfter?: React.ReactNode;

    /**
     * 输入框前附加文字
     * @en Addon Text before input
     */
    addonTextBefore?: React.ReactNode;

    /**
     * 输入框后附加文字
     * @en Addon Text after input
     */
    addonTextAfter?: React.ReactNode;

    /**
     * 自动补全 (原生 input 支持)
     * @en Auto complete
     * @defaultValue 'off'
     */
    autoComplete?: string;

    /**
     * 自动聚焦 (原生 input 支持)
     * @en Auto focus
     */
    autoFocus?: boolean;

    /**
     * 是否为预览态
     * @en Is preview
     * @defaultValue false
     */
    isPreview?: boolean;

    /**
     * 自定义预览态内容
     * @en Custom preview content
     */
    renderPreview?: (
        value: string | number | undefined | null,
        props: InputProps
    ) => React.ReactNode;

    /**
     * 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange
     * @en Will filter the input method middle letter status, and only trigger onChange after the text input is completed
     * @version 1.23
     * @defaultValue false
     */
    composition?: boolean;

    /**
     * hover 展示 clear (配合 hasClear=true 使用)
     * @en Hover to show clear
     * @version 1.24
     * @defaultValue false
     */
    hoverShowClear?: boolean;
    /**
     * 额外内容
     * @en Extra content
     */
    extra?: React.ReactNode;
    /**
     * 原生 input 的 size 属性
     * @en Native input size
     */
    htmlSize?: string;
    /**
     * 自定义 input 样式
     * @en Custom input style
     */
    inputRender?: (input: React.ReactElement) => React.ReactNode;
    /**
     * 自定义 input 样式
     * @en Custom input style
     */
    inputStyle?: React.CSSProperties;
    /**
     * 自定义 input 类名
     * @en Custom input className
     */
    inputClassName?: string;
    /**
     * 多语言文案
     * @en Locale
     * @skip
     */
    locale?: Locale['Input'];
    /**
     * 文字前附加内容类名
     * @en Content className before text
     */
    innerBeforeClassName?: string;
    /**
     * 文字后附加内容类名
     * @en Content className after text
     */
    innerAfterClassName?: string;
}
/**
 * @api Input.Password
 * @remarks 继承 Input 的属性 - Inherit Input's properties
 * @order 4
 */
export interface PasswordProps extends InputProps {
    /**
     * 是否展示切换按钮
     * @en Show toggle button
     * @defaultValue true
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
    value?: Exclude<BaseProps['value'], undefined> | string;
    composition?: boolean;
    focus?: boolean;
    hint?: string;
    htmlType?: string;
    height?: number;
    overflowY?: 'hidden';
    minHeight?: number;
    maxHeight?: number;
}
