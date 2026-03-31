import type * as React from 'react';
import { type CommonProps } from '../util';
interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> {}
/**
 * @api
 */
export type ValueItem = string | number | boolean;
/**
 * @api
 */
export type CheckboxData = {
    value: ValueItem;
    label?: React.ReactNode;
    disabled?: boolean;
    [propName: string]: unknown;
};
/**
 * @api Checkbox.Group
 */
export interface GroupProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 自定义类名
     * @en Custom className
     */
    className?: string;
    /**
     * 自定义内联样式
     * @en Custom inline style
     */
    style?: React.CSSProperties;
    /**
     * 整体禁用
     * @en Entirely disabled
     */
    disabled?: boolean;
    /**
     * 可选项列表
     * @en Option list
     * @remarks
     * 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`
     * -
     * Data item can be String or Object, such as `['apple', 'pear', 'orange']` or `[{value: 'apple', label: 'Apple',}, {value: 'pear', label: 'Pear'}, {value: 'orange', label: 'Orange'}]`
     */
    dataSource?: Array<ValueItem> | Array<CheckboxData>;
    /**
     * 被选中的值列表
     * @en Selected value list
     */
    value?: ValueItem[] | ValueItem;
    /**
     * 默认被选中的值列表
     * @en Default selected value list
     */
    defaultValue?: ValueItem[] | ValueItem;
    /**
     * name
     * @en name
     */
    name?: string;
    /**
     * 通过子元素方式设置内部 checkbox
     * @en Set internal checkbox through child elements
     */
    children?: React.ReactNode;
    /**
     * 选中值改变时的事件
     * @en Selected value change event
     */
    onChange?: (value: ValueItem[], e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 子项目的排列方式
     * @en Arrangement of subitems
     * @remarks
     * hoz: 水平排列 (default),
     * ver: 垂直排列
     * -
     * hoz: Horizontal arrangement (default),
     * ver: Vertical arrangement
     */
    direction?: 'hoz' | 'ver';
    /**
     * [废弃] 子项目的排列方式
     * @en [Deprecated] Arrangement of subitems
     * @deprecated Use `direction` instead
     */
    itemDirection?: 'hoz' | 'ver';
    /**
     * 是否为预览态
     * @en Is preview
     * @version 1.19
     */
    isPreview?: boolean;
    /**
     * 预览态模式下渲染的内容
     * @en Custom rendering content
     * @version 1.19
     * @param previewed - 预览值 [\{label: '', value:''\},...] - Previewed value [\{label: '', value:''\},...]
     * @param props - 所有传入的参数 - All props
     * @returns 定制渲染内容 - Custom rendering content
     */
    renderPreview?: (
        previewed: {
            label: string | React.ReactNode;
            value: string | React.ReactNode;
        }[],
        props: object
    ) => React.ReactNode;
}
export interface GroupState {
    value: ValueItem[];
}
/**
 * @api Checkbox
 */
export interface CheckboxProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 自定义类名
     * @en className
     */
    className?: string;
    /**
     * checkbox id, 挂载在 input 上
     * @en Checkbox id, mounted on the input
     */
    id?: string;
    /**
     * 自定义内联样式
     * @en Custom inline style
     */
    style?: React.CSSProperties;
    /**
     * 选中状态
     * @en Checked status
     */
    checked?: boolean;
    /**
     * checkbox 的 value
     * @en Checkbox value
     */
    value?: ValueItem;
    /**
     * name
     * @en name
     */
    name?: string;
    /**
     * 默认选中状态
     * @en Default checked status
     * @defaultValue false
     */
    defaultChecked?: boolean;
    /**
     * 禁用
     * @en Disabled
     */
    disabled?: boolean;
    /**
     * 通过属性配置 label，
     * @en Label
     */
    label?: React.ReactNode;
    /**
     * Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     * @en Checkbox middle status, only affects the style of Checkbox, and does not affect its checked property
     */
    indeterminate?: boolean;
    /**
     * Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     * @en Checkbox default middle status, only affects the style of Checkbox, and does not affect its checked property
     * @defaultValue false
     */
    defaultIndeterminate?: boolean;
    /**
     * 状态变化时触发的事件
     * @en Status change event
     */
    onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 鼠标进入 enter 事件
     * @en Mouse enter event
     */
    onMouseEnter?: (e: React.MouseEvent<HTMLInputElement | HTMLLabelElement>) => void;
    /**
     * 鼠标离开 Leave 事件
     * @en Mouse leave event
     */
    onMouseLeave?: (e: React.MouseEvent<HTMLInputElement | HTMLLabelElement>) => void;
    /**
     * 是否为预览态
     * @en Is preview
     * @defaultValue false
     * @version 1.19
     */
    isPreview?: boolean;
    /**
     * 预览态模式下渲染的内容
     * @en Custom rendering content
     * @version 1.19
     * @param checked - 是否选中 - Is checked
     * @param props - 所有传入的参数 - All props
     * @returns 定制渲染内容 - Custom rendering content
     */
    renderPreview?: (checked: boolean, props: CheckboxProps) => React.ReactNode;
}
export {};
