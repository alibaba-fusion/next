/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onSelect?: any;
}

export interface CalendarProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 默认选中的日期（moment 对象）
     */
    defaultValue?: any;

    /**
     * 选中的日期值 (moment 对象)
     */
    value?: any;

    /**
     * 是否展示非本月的日期
     */
    showOtherMonth?: boolean;

    /**
     * 默认展示的月份
     */
    defaultVisibleMonth?: () => void;

    /**
     * 展现形态
     */
    shape?: 'card' | 'fullscreen' | 'panel';

    /**
     * 选择日期单元格时的回调
     */
    onSelect?: (value: {}) => void;

    /**
     * 展现的月份变化时的回调
     */
    onVisibleMonthChange?: (value: {}, reason: string) => void;

    /**
     * 自定义样式类
     */
    className?: string;

    /**
     * 自定义日期渲染函数
     */
    dateCellRender?: (value: {}) => React.ReactNode;

    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: (calendarDate: {}) => React.ReactNode;

    /**
     * 不可选择的日期
     */
    disabledDate?: (calendarDate: {}, view: string) => boolean;
}

export default class Calendar extends React.Component<CalendarProps, any> {}
