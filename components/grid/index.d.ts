/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    hidden?: any;
}

export interface RowProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 行内容
     */
    children?: React.ReactNode;

    /**
     * 列间隔
     */
    gutter?: string | number;

    /**
     * 列在行中宽度溢出后是否换行
     */
    wrap?: boolean;

    /**
     * 行在某一断点下宽度是否保持不变（默认行宽度随视口变化而变化）
     */
    fixed?: boolean;

    /**
     * 固定行的宽度为某一断点的宽度，不受视口影响而变动
     */
    fixedWidth?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

    /**
     * （不支持IE9浏览器）多列垂直方向对齐方式
     */
    align?: 'top' | 'center' | 'bottom' | 'baseline' | 'stretch';

    /**
     * （不支持IE9浏览器）行内具有多余空间时的布局方式
     */
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';

    /**
     * 行在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
     */
    hidden?: boolean | string | Array<any>;

    /**
     * 指定以何种元素渲染该节点
     * - 默认为 'div'
     */
    component?: string | (() => void);
}

export class Row extends React.Component<RowProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    hidden?: any;
}

export interface ColProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 列内容
     */
    children?: React.ReactNode;

    /**
     * 列宽度<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
     */
    span?: string | number;

    /**
     * 固定列宽度，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
     */
    fixedSpan?: string | number;

    /**
     * （不支持IE9浏览器）列偏移<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
     */
    offset?: string | number;

    /**
     * （不支持IE9浏览器）固定列偏移，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
     */
    fixedOffset?: string | number;

    /**
     * （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性
     */
    align?: 'top' | 'center' | 'bottom' | 'baseline' | 'stretch';

    /**
     * 列在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
     */
    hidden?: boolean | string | Array<any>;

    /**
     * >=320px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    xxs?: string | number | {};

    /**
     * >=480px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    xs?: string | number | {};

    /**
     * >=720px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    s?: string | number | {};

    /**
     * >=990px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    m?: string | number | {};

    /**
     * >=1200px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    l?: string | number | {};

    /**
     * >=1500px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    xl?: string | number | {};

    /**
     * 指定以何种元素渲染该节点，默认为 'div'
     */
    component?: string | (() => void);
}

export class Col extends React.Component<ColProps, any> {}
export interface GridProps extends React.HTMLAttributes<HTMLElement>, CommonProps {}

export default class Grid extends React.Component<GridProps, any> {
    static Row: typeof Row;
    static Col: typeof Col;
}
