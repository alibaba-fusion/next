import React from 'react';
import { CommonProps } from '../util';
import { ButtonProps } from '../button';
import Input from '../input';

interface HTMLAttributesWeak extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
    defaultValue?: number | string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, ...args: any[]) => void;
}

/**
 * @api NumberPicker
 */
export interface NumberPickerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 样式前缀
     * @en prefix
     * @defaultValue 'next\-'
     */
    prefix?: string;
    /**
     * 设置类型(当 device 为 phone 时，NumberPicker 的类型强制为 normal，不可通过 type 修改)
     * @en Set type (when device is phone, the type of NumberPicker is forced to normal and cannot be modified through type)
     * @defaultValue 'normal'
     * @remarks
     * **normal** 普通，
     * **inline** 内联。
     */
    type?: 'normal' | 'inline';
    /**
     * 大小
     * @en size
     * @defaultValue 'medium'
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * 当前值
     * @en Current value
     */
    value?: number | string;
    /**
     * 默认值
     * @en Default value
     */
    defaultValue?: number | string;
    /**
     * 内联 左侧label
     * @en Inline left label
     */
    label?: React.ReactNode;
    /**
     * 内联 右侧附加内容
     * @en Inline right additional content
     */
    innerAfter?: React.ReactNode;
    /**
     * 是否禁用
     * @en Is disabled
     */
    disabled?: boolean;
    /**
     * 步长
     * @en Step
     * @defaultValue 1
     */
    step?: number | string;
    /**
     * 保留小数点后位数
     * @en Decimal places
     * @defaultValue 0
     */
    precision?: number;
    /**
     * 用户是否可以输入
     * @en Whether the user can enter
     * @defaultValue true
     */
    editable?: boolean;
    /**
     * 自动焦点
     * @en Auto focus
     */
    autoFocus?: boolean;
    /**
     * 数值被改变的事件
     * @en Callback when the value changes
     * @param value - 新的数值。
     * @param e - DOM 事件对象。
     * @defaultValue func.noop
     */
    onChange?: (value: number | string | undefined, e: object) => void;
    /**
     * 键盘按下
     * @en Key down
     * @param e - DOM 事件对象。
     * @defaultValue func.noop
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, ...args: any[]) => void;
    /**
     * 焦点获得
     * @en Focus
     * @param e - DOM 事件对象。
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>, ...args: any[]) => void;
    /**
     * 焦点失去
     * @en Blur
     * @param e - DOM 事件对象。
     * @defaultValue func.noop
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>, ...args: any[]) => void;
    /**
     * 数值订正后的回调
     * @en Callback after the value is corrected
     * @param obj - 包含 currentValue 和 oldValue 的对象。
     * @defaultValue func.noop
     */
    onCorrect?: (obj: object) => void;
    /**
     * 最大值
     * @en Maximum
     */
    max?: number | string;
    /**
     * 最小值
     * @en Minimum
     */
    min?: number | string;
    /**
     * 自定义class
     * @en Custom class
     */
    className?: string;
    /**
     * 自定义内联样式
     * @en Custom inline style
     */
    style?: React.CSSProperties;
    /**
     * 格式化当前值
     * @en Format current value
     * @param value - 当前的数值。
     * @returns 格式化后的值，可以是字符串或数字。
     */
    format?: (value: string | number) => string | number;
    /**
     * 增加按钮的props
     * @en Increase button props
     */
    upBtnProps?: ButtonProps;
    /**
     * 减少按钮的props
     * @en Decrease button props
     */
    downBtnProps?: ButtonProps;
    /**
     * 是否一直显示点击按钮(无须hover)
     * @en Control button always show or hide
     * @defaultValue false
     */
    alwaysShowTrigger?: boolean;
    /**
     * 是否为预览态
     * @en Is preview
     */
    isPreview?: boolean;
    /**
     * 预览态模式下渲染的内容
     * @en Render content in preview mode
     * @param value - 当前值。
     * @param props - 传入的组件参数。
     * @returns Element 渲染内容。
     */
    renderPreview?: (value: number | string, props: object) => React.ReactNode;
    /**
     * 预设屏幕宽度
     * @en Screen width
     */
    device?: 'phone' | 'tablet' | 'desktop';
    /**
     * 是否展示点击按钮
     * @en Show click button
     * @defaultValue true
     */
    hasTrigger?: boolean;
    /**
     * 开启大数支持，输入输出均为string类型
     * @en Enable big number support, input and output are all string types
     * @defaultValue false
     * @version 1.24
     */
    stringMode?: boolean;
    /**
     * 兼容0.x onDisabled
     * @en Compatible with 0.x onDisabled
     * @skip
     */
    onDisabled?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * 状态
     * @en State
     */
    state?: 'error' | 'success' | undefined;
}

export interface NumberPickerState {
    value: number | string;
    hasFocused: boolean;
    displayValue: number | string;
    onlyDisplay?: boolean;
    min: number | string;
    max: number | string;
}

export interface DerivedStateFromProps {
    value?: number | string | null | undefined;
    displayValue?: string | number | null | undefined;
    min?: string | number | null | undefined;
    max?: string | number | null | undefined;
}

export default class NumberPicker extends React.Component<NumberPickerProps> {
    getInputNode: () => Input;
}
