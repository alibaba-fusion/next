import type * as React from 'react';
import { type CommonProps } from '../util';

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> {}

export type IValue = string | number | boolean;

export type CheckboxData = {
    value: IValue;
    label?: React.ReactNode;
    disabled?: boolean;
    [propName: string]: unknown;
};

export interface GroupProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义内敛样式
     */
    style?: React.CSSProperties;

    /**
     * 整体禁用
     */
    disabled?: boolean;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    renderPreview?: (
        checked: {
            label: string | React.ReactNode;
            value: string | React.ReactNode;
        }[],
        props: object
    ) => React.ReactNode;

    /**
     * 可选项列表，数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`
     */
    dataSource?: Array<IValue> | Array<CheckboxData>;

    /**
     * 被选中的值列表
     */
    value?: IValue[] | IValue;

    /**
     * 默认被选中的值列表
     */
    defaultValue?: IValue[] | IValue;

    /**
     * name
     */
    name?: string;

    /**
     * 通过子元素方式设置内部 checkbox
     */
    children?: React.ReactNode;

    /**
     * 选中值改变时的事件
     */
    onChange?: (value: IValue[], e: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * 子项目的排列方式
     * - hoz: 水平排列 (default)
     * - ver: 垂直排列
     */
    direction?: 'hoz' | 'ver';
    itemDirection?: 'hoz' | 'ver';
}

export interface GroupState {
    value: IValue[];
}

export interface CheckboxProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 自定义类名
     */
    className?: string;

    renderPreview?: (checked: boolean, props: CheckboxProps) => React.ReactNode;

    /**
     * checkbox id, 挂载在 input 上
     */
    id?: string;

    /**
     * 自定义内敛样式
     */
    style?: React.CSSProperties;

    /**
     * 选中状态
     */
    checked?: boolean;

    /**
     * checkbox 的 value
     */
    value?: string | number | boolean;

    /**
     * name
     */
    name?: string;

    /**
     * 默认选中状态
     */
    defaultChecked?: boolean;

    /**
     * 禁用
     */
    disabled?: boolean;

    /**
     * 通过属性配置 label，
     */
    label?: React.ReactNode;

    /**
     * Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    indeterminate?: boolean;

    /**
     * Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    defaultIndeterminate?: boolean;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    /**
     * 状态变化时触发的事件
     */
    onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * 鼠标进入 enter 事件
     */
    onMouseEnter?: (e: React.MouseEvent<HTMLInputElement | HTMLLabelElement>) => void;

    /**
     * 鼠标离开 Leave 事件
     */
    onMouseLeave?: (e: React.MouseEvent<HTMLInputElement | HTMLLabelElement>) => void;
}
