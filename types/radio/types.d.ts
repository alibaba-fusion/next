import React, { type RefAttributes } from 'react';
import type { CommonProps } from '../util';
import type { Radio } from './radio';
export type { Radio };
export type HTMLAttributesWeak = Omit<
    React.HTMLAttributes<HTMLElement>,
    'defaultValue' | 'onChange' | 'onMouseEnter' | 'onMouseLeave'
>;
/**
 * @api
 */
export type RadioValue = string | number | boolean;
/**
 * @api
 */
export interface RadioValueItem {
    label?: React.ReactNode;
    value: RadioValue;
    disabled?: boolean;
}
export interface GroupChildProps extends RefAttributes<unknown> {
    checked: boolean;
    rtl?: boolean;
    tabIndex?: number;
    children?: React.ReactNode;
    value?: RadioValue;
}
export type RadioContext = {
    __group__: boolean;
    isButton: boolean;
    onChange: (value: RadioValue, event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedValue?: RadioValue;
    disabled?: boolean;
};
/**
 * @api Radio.Group
 * @order 2
 */
export interface GroupProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 表单 name
     * @en form name
     */
    name?: string;
    /**
     * radio group 的选中项的值（受控）
     * @en The value of the Item witch is selected in radio group (controlled)
     */
    value?: RadioValue;
    /**
     * radio group 的默认值（非受控）
     * @en The value of the Item witch is default selected in radio group (uncontrolled)
     */
    defaultValue?: RadioValue;
    /**
     * 设置标签类型
     * @en Specify jsx tag name
     * @defaultValue 'div'
     */
    component?: React.ElementType;
    /**
     * 选中值改变时的事件
     * @en Callback on value change
     * @param value - 选中的值 - The selected value
     * @param event - Dom 事件对象 - Dom Event
     */
    onChange?: (value: RadioValue, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 表示 radio 被禁用
     * @en All the radios in group are disable to be used
     */
    disabled?: boolean;
    /**
     * 展示类型
     * @en Shape type
     */
    shape?: 'normal' | 'button';
    /**
     * 与 `shape` 属性配套使用，shape 设为 button 时有效
     * @en Used with `shape` prop, valid when shape is set to button
     * @defaultValue 'medium'
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * 可选项列表
     * @en List of options
     */
    dataSource?: Array<RadioValue> | Array<RadioValueItem>;
    /**
     * 通过子元素方式设置内部 radio
     * @en To set radio button by setting children components
     */
    children?: React.ReactNode;
    /**
     * 子项目的排列方式
     * @en How items are arranged
     * @example
     * - hoz: 水平排列 (default)
     * - ver: 垂直排列
     */
    direction?: 'hoz' | 'ver';
    /**
     * 是否开启预览态
     */
    isPreview?: boolean;
    /**
     * 自定义预览态模式下渲染的内容
     * @en Customized rendering content function in preview mode
     * @param previewed - 预览的数据项 - Previewed item data，
     * @param props - 预览项的参数 - The props of the previewed item
     * @returns 渲染内容 - The content of item
     * @remarks previewed 为空对象时代表没有选中的项 - When `previewed` is an empty object, it means there is no selected item.
     */
    renderPreview?: (
        previewed: RadioValueItem | Partial<RadioValueItem>,
        props: GroupProps
    ) => React.ReactNode;
    /**
     * @deprecated Use direction instead
     * @skip
     */
    itemDirection?: 'hoz' | 'ver';
}
/**
 * @api
 * @order 1
 */
export interface RadioProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 组件 input 的 id
     * @en Id of the input
     */
    id?: string;
    /**
     * 设置 radio 是否选中
     * @en To set radio button is checked
     */
    checked?: boolean;
    /**
     * 设置 radio 是否默认选中
     * @en To set radio button default to be checked
     */
    defaultChecked?: boolean;
    /**
     * 通过属性配置 label
     * @en To set the radio label
     */
    label?: React.ReactNode;
    /**
     * 选中状态变化时触发的事件
     * @en Callback on check state change
     * @param checked - 是否选中 - Is checked
     * @param event - DOM 事件 - DOM event
     */
    onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 鼠标进入 enter 事件
     * @en Callback on mouse enter
     */
    onMouseEnter?: (e: React.MouseEvent<HTMLInputElement>) => void;
    /**
     * 鼠标离开事件
     * @en Callback on mouse leave
     */
    onMouseLeave?: (e: React.MouseEvent<HTMLInputElement>) => void;
    /**
     * radio 是否被禁用
     * @en Set radio button disable to be used
     */
    disabled?: boolean;
    /**
     * radio 的 value
     * @en Value of radio
     */
    value?: RadioValue;
    /**
     * 表单项 name
     * @en Form item name
     */
    name?: string;
    /**
     * 是否开启预览态
     * @en Set radio to preview state
     */
    isPreview?: boolean;
    /**
     * 自定义预览态模式下渲染的内容
     * @en Customized rendering content function in preview mode
     * @param checked - 是否选中 - Is checked
     * @param props - 所有传入的参数 - The props of the radio
     * @returns 渲染内容 - The content of item
     */
    renderPreview?: (checked: boolean, props: RadioProps) => React.ReactNode;
    /**
     * Radio.Group 传递给 Radio 的私有属性
     * @skip
     */
    context?: RadioContext;
}
export interface RadioWithContextProps extends RadioProps {
    context: RadioContext;
}
export declare class WrappedRadio extends React.Component<RadioProps> {
    static displayName: 'Radio';
    radioRef: Radio | null;
    focus(): void;
}
