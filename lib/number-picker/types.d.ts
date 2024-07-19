import type React from 'react';
import type { CommonProps } from '../util';
import type { ButtonProps } from '../button';
import type { InputProps } from '../input';
type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue' | 'onKeyDown'>;
/**
 * @api NumberPicker
 */
export interface NumberPickerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 大小
     * @en size
     * @remarks
     * 可选值：
     * **large** 大，
     * **medium** 中，
     * **small** 小。
     * -
     * options:
     * **large** large,
     * **medium** medium,
     * **small** small.
     * @defaultValue 'medium'
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * 设置类型(当 device 为 phone 时，NumberPicker 的类型强制为 normal，不可通过 type 修改)
     * @en display type
     * @defaultValue 'normal'
     * @remarks
     * 可选值：
     * **normal** 普通，
     * **inline** 内联。
     * -
     * options:
     * **normal** normal,
     * **inline** inline.
     */
    type?: 'normal' | 'inline';
    /**
     * 当前值
     * @en current value
     */
    value?: number | string;
    /**
     * 默认值
     * @en default value
     */
    defaultValue?: number | string;
    /**
     * 是否禁用
     * @en disabled or not
     */
    disabled?: boolean;
    /**
     * 步长
     * @en number changes per click
     * @defaultValue 1
     */
    step?: number | string;
    /**
     * 保留小数点后位数
     * @en precision for decimals number
     * @defaultValue 0
     */
    precision?: number;
    /**
     * 用户是否可以输入
     * @en editable or not
     * @defaultValue true
     */
    editable?: boolean;
    /**
     * 自动焦点
     * @en auto get focused or not
     */
    autoFocus?: boolean;
    /**
     * 数值被改变的事件
     * @en callback when value changes
     * @param value - 新的数值。
     * @param e - DOM 事件对象。
     * @defaultValue func.noop
     */
    onChange?: (value: number | string | undefined, e: (React.ChangeEvent<HTMLInputElement> | React.CompositionEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) & {
        triggerType: 'up' | 'down' | undefined;
    }) => void;
    /**
     * 键盘按下
     * @en callback when key press
     * @param e - DOM 事件对象。
     * @defaultValue func.noop
     */
    onKeyDown?: InputProps['onKeyDown'];
    /**
     * 焦点获得
     * @en callback when get focus
     * @param e - DOM 事件对象。
     */
    onFocus?: InputProps['onFocus'];
    /**
     * 焦点失去
     * @en callback when lose focus
     * @param e - DOM 事件对象。
     * @defaultValue func.noop
     */
    onBlur?: InputProps['onBlur'];
    /**
     * 数值订正后的回调
     * @en callback when data are corrected
     * @param obj - 包含 currentValue 和 oldValue 的对象。
     * @defaultValue func.noop
     */
    onCorrect?: (obj: {
        currentValue: number | string;
        oldValue: number | string;
    }) => void;
    /**
     * 最大值
     * @en maximum value
     */
    max?: number | string;
    /**
     * 最小值
     * @en minimum value
     */
    min?: number | string;
    /**
     * 格式化当前值
     * @en format value for display
     * @param value - 当前的数值。
     * @returns 格式化后的值，可以是字符串或数字。
     */
    format?: (value: string | number) => string | number;
    /**
     * 是否展示点击按钮
     * @en display btn trigger
     * @defaultValue true
     */
    hasTrigger?: boolean;
    /**
     * 是否一直显示点击按钮(无须hover)
     * @en always show btn trigger without hover
     * @defaultValue false
     */
    alwaysShowTrigger?: boolean;
    /**
     * 内联 左侧label
     * @en inline left label
     */
    label?: React.ReactNode;
    /**
     * 内联 右侧附加内容
     * @en inline right additional content
     */
    innerAfter?: React.ReactNode;
    /**
     * 增加按钮的props
     * @en increase button props
     */
    upBtnProps?: ButtonProps;
    /**
     * 减少按钮的props
     * @en decrease button props
     */
    downBtnProps?: ButtonProps;
    /**
     * 是否为预览态
     * @en is preview
     */
    isPreview?: boolean;
    /**
     * 预览态模式下渲染的内容
     * @en render content in preview mode
     * @param value - 当前值。
     * @param props - 传入的组件参数。
     * @returns Element 渲染内容。
     */
    renderPreview?: (value: number | string, props: NumberPickerProps) => React.ReactNode;
    /**
     * 开启大数支持，输入输出均为string类型
     * @en enable big number support, input and output are all string types
     * @defaultValue false
     * @version 1.24
     */
    stringMode?: boolean;
    /**
     * 兼容0.x onDisabled
     * @en compatible with 0.x onDisabled
     * @deprecated The event handling function has been deprecated and will be removed in future versions.
     * @skip
     */
    onDisabled?: (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent) => void;
    /**
     * 状态
     * @en state
     */
    state?: 'error' | 'success';
}
export interface NumberPickerState {
    value: number | string;
    hasFocused: boolean;
    displayValue: number | string;
    onlyDisplay: boolean;
    min: number | string;
    max: number | string;
}
export {};
