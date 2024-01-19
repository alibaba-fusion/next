/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

type data = {
    value?: string | number | boolean;
    label?: React.ReactNode;
    disabled?: boolean;
    [propName: string]: any;
};

export type CheckboxData = data;

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

    renderPreview?: (checked: boolean, props: object) => React.ReactNode;

    /**
     * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`
     */
    dataSource?: Array<string> | Array<data> | Array<number>;

    /**
     * 被选中的值列表
     */
    value?: Array<string> | Array<number> | Array<boolean> | string | number | boolean;

    /**
     * 默认被选中的值列表
     */
    defaultValue?: Array<string> | Array<number> | Array<boolean> | string | number | boolean;

    /**
     * name
     */
    name?: string;

    /**
     * 通过子元素方式设置内部 checkbox
     */
    children?: Array<any>;

    /**
     * 选中值改变时的事件
     */
    onChange?: (value: Array<string> | Array<number> | Array<boolean>, e: any) => void;

    /**
     * 子项目的排列方式
     * - hoz: 水平排列 (default)
     * - ver: 垂直排列
     */
    direction?: 'hoz' | 'ver';
    itemDirection?: 'hoz' | 'ver';
}

export class Group extends React.Component<GroupProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onChange?: any;
    onMouseEnter?: any;
    onMouseLeave?: any;
}

export interface CheckboxProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 自定义类名
     */
    className?: string;

    /**
     * checkbox id, 挂载在input上
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
     * checkbox 的value
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
     * 通过属性配置label，
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
    onChange?: (checked: boolean, e: any) => void;

    /**
     * 鼠标进入enter事件
     */
    onMouseEnter?: (e: React.MouseEvent<HTMLInputElement>) => void;

    /**
     * 鼠标离开Leave事件
     */
    onMouseLeave?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
    static Group: typeof Group;
}
