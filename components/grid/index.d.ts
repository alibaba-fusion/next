import React, { ReactElement } from 'react';
import { CommonProps } from '../util';

type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'hidden'>;

export type TypeRecord<T> = Record<string, T>;

export type BreakPoints = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

type Ele = React.JSX.IntrinsicElements | React.JSXElementConstructor<unknown>;
export interface PointProps {
    offset: string | number | undefined;
    span: string | number | undefined;
}
/**
 * @api Row
 */
export interface RowProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 行内容
     * @en Row content
     */
    children?: React.ReactNode;

    /**
     * 列间隔
     * @en Column spacing
     */
    gutter?: string | number;

    /**
     * 列在行中宽度溢出后是否换行
     * @en Whether to wrap when the column width overflows in the row
     */
    wrap?: boolean;

    /**
     * 行在某一断点下宽度是否保持不变（默认行宽度随视口变化而变化）
     * @en Whether the row width remains unchanged at a breakpoint (the default row width changes with the viewport)
     */
    fixed?: boolean;

    /**
     * 固定行的宽度为某一断点的宽度，不受视口影响而变动
     * @en The width of the fixed row is the width of a breakpoint, which is not affected by the viewport
     */
    fixedWidth?: BreakPoints;

    /**
     * （不支持IE9浏览器）多列垂直方向对齐方式
     * @en (IE9 browser is not supported) Multi-column vertical alignment
     */
    align?: 'top' | 'center' | 'bottom' | 'baseline' | 'stretch';

    /**
     * （不支持IE9浏览器）行内具有多余空间时的布局方式
     * @en (IE9 browser is not supported) Layout method when there is extra space in the row
     */
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';

    /**
     * 行在不同断点下的显示与隐藏
     * @en Display and hide the row at different breakpoints
     * @remarks \<br\>\<br\>**可选值**:\<br\>true(在所有断点下隐藏)\<br\>false(在所有断点下显示)\<br\>'xs'(在 xs 断点下隐藏）\<br\>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
     */
    hidden?: boolean | string | Array<unknown>;

    /**
     * 指定以何种元素渲染该节点
     * @en Specifies the element with which to render the node
     * @defaultValue 'div'
     */
    component?: Ele | (() => Ele) | string;
}

/**
 * @api Row.Col
 */
export interface ColProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 列内容
     * @en Column content
     */
    children?: React.ReactNode;

    /**
     * 列宽度\<br\>\<br\>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
     * @en Column width\<br\>\<br\>**Optional values**:<br>1, 2, 3, ..., 22, 23, 24
     */
    span?: string | number;

    /**
     * 固定列宽度，宽度值为20 * 栅格数\<br\>\<br\>**可选值**:\<br\>1, 2, 3, ..., 28, 29, 30
     * @en Fixed column width, width value is 20 * grid number\<br\>\<br\>**Optional values**:<br>1, 2, 3, ..., 28, 29, 30
     */
    fixedSpan?: string | number;

    /**
     * （不支持IE9浏览器）列偏移\<br\>\<br\>**可选值**:\<br\>1, 2, 3, ..., 22, 23, 24
     * @en (IE9 browser is not supported) Column offset\<br\>\<br\>**Optional values**:<br>1, 2, 3, ..., 22, 23, 24
     */
    offset?: string | number;

    /**
     * （不支持IE9浏览器）固定列偏移，宽度值为20 * 栅格数\<br\>\<br\>**可选值**:\<br\>1, 2, 3, ..., 28, 29, 30
     * @en (IE9 browser is not supported) Fixed column offset, width value is 20 * grid number\<br\>\<br\>**Optional values**:<br>1, 2, 3, ..., 28, 29, 30
     */
    fixedOffset?: string | number;

    /**
     * （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性
     * @en (IE9 browser is not supported) Multi-column vertical alignment, which can override the align property of Row
     */
    align?: 'top' | 'center' | 'bottom' | 'baseline' | 'stretch';

    /**
     * 列在不同断点下的显示与隐藏\<br\>\<br\>**可选值**:\<br\>true(在所有断点下隐藏)\<br\>false(在所有断点下显示)\<br\>'xs'(在 xs 断点下隐藏）\<br\>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
     * @en Display and hide the column at different breakpoints\<br\>\<br\>**Optional values**:\<br\>true (hidden at all breakpoints)\<br\>false (displayed at all breakpoints)\<br\>'xs' (hidden at xs breakpoint)\<br\>['xxs', 'xs', 's', 'm', 'l', 'xl'] (hidden at xxs, xs, s, m, l, xl breakpoints)
     */
    hidden?: boolean | string | Array<unknown>;

    /**
     * \>=320px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     * @en \>=320px, responsive grid, can be grid number (span) or an object containing grid number (span) and offset grid number (offset)
     */
    xxs?: string | number | PointProps;

    /**
     * \>=480px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     * @en \>=480px, responsive grid, can be grid number (span) or an object containing grid number (span) and offset grid number (offset)
     */
    xs?: string | number | PointProps;

    /**
     * \>=720px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     * @en \>=720px, responsive grid, can be grid number (span) or an object containing grid number (span) and offset grid number (offset)
     */
    s?: string | number | PointProps;

    /**
     * \>=990px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     * @en \>=990px, responsive grid, can be grid number (span) or an object containing grid number (span) and offset grid number (offset)
     */
    m?: string | number | PointProps;

    /**
     * \>=1200px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     * @en \>=1200px, responsive grid, can be grid number (span) or an object containing grid number (span) and offset grid number (offset)
     */
    l?: string | number | PointProps;

    /**
     * \>=1500px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     * @en \>=1500px, responsive grid, can be grid number (span) or an object containing grid number (span) and offset grid number (offset)
     */
    xl?: string | number | PointProps;

    /**
     * 指定以何种元素渲染该节点，默认为 'div'
     * @en Specifies the element with which to render the node, default is 'div'
     */
    component?: Ele | (() => Ele) | string;
}

/**
 * @api Grid
 */
export interface GridProps extends React.HTMLAttributes<HTMLElement>, CommonProps {}
