/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
    /**
     * for form item
     */
    name?: string;
}

export interface RangeProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;

    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义内敛样式
     */
    style?: React.CSSProperties;

    /**
     * 滑块个数
     */
    slider?: 'single' | 'double';

    /**
     * 最小值
     */
    min?: number;

    /**
     * 最大值
     */
    max?: number;

    /**
     * 步长，取值必须大于 0，并且可被 (max - min) 整除。
     */
    step?: number;

    /**
     * 设置当前取值。当 `slider` 为 `single` 时，使用 `Number`，否则用 `[Number, Number]`
     */
    value?: number | [number, number];

    /**
     * 设置初始取值。当 `slider` 为 `single` 时，使用 `Number`，否则用 `[Number, Number]`
     */
    defaultValue?: number | [number, number];

    /**
     * 刻度数值显示逻辑（false 代表不显示，array 枚举显示的值，number 代表按 number 平分，object 表示按 key 划分，value 值显示）
     */
    marks?: boolean | number | Array<number> | {};

    /**
     * marks显示在上方('above')or下方('below')
     */
    marksPosition?: 'above' | 'below';

    /**
     * 值为 `true` 时，滑块为禁用状态
     */
    disabled?: boolean;

    /**
     * 当 Range 的值发生改变后，会触发 onChange 事件，并把改变后的值作为参数传入, 如果设置了value, 要配合此函数做受控使用
     */
    onChange?: (value: number | [number, number]) => void;

    /**
     * 滑块拖动的时候触发的事件,不建议在这里setState, 一般情况下不需要用, 滑动时有特殊需求时使用
     */
    onProcess?: (value: number | [number, number]) => void;

    /**
     * 是否显示 tip
     */
    hasTip?: boolean;

    /**
     * 自定义 tip 显示内容
     */
    tipRender?: (value: number | string) => React.ReactNode;

    /**
     * 选中态反转
     */
    reverse?: boolean;

    /**
     * 是否pure render
     */
    pure?: boolean;

    /**
     * 是否为拖动线段类型,默认slider为double, defaultValue必传且指定区间
     */
    fixedWidth?: boolean;

    /**
     * tooltip是否默认展示
     */
    tooltipVisible?: boolean;

    /**
     * 是否已rtl模式展示
     */
    rtl?: boolean;
}

export default class Range extends React.Component<RangeProps, any> {}
