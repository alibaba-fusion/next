/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';
import * as dayjs from 'dayjs';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onSelect?: any;
    onChange?: any;
}

export interface CalendarProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 默认选中的日期（dayjs 对象）
     */
    defaultValue?: any;

    /**
     * 选中的日期值 (dayjs 对象)
     */
    value?: any;

    /**
     * 面板默认显示的日期
     */
    defaultPanelValue?: any;

    /**
     * 展现形态
     */
    shape?: 'card' | 'fullscreen' | 'panel';

    /**
     * 选择日期单元格时的回调
     */
    onSelect?: (value: typeof dayjs, strVal: string) => void;

    /**
     * 值改变时的回调
     */
    onChange?: (value: typeof dayjs, strVal: string) => void;

    /**
     * 日期面板变化回调
     */
    onPanelChange?: (value: typeof dayjs, mode: string) => void;

    /**
     * 自定义样式类
     */
    className?: string;

    /**
     * 自定义日期渲染
     */
    dateCellRender?: (value: typeof dayjs) => React.ReactNode;

    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: (value: typeof dayjs) => React.ReactNode;

    /**
     * 自定义年份渲染函数
     */
    yearCellRender?: (value: typeof dayjs) => React.ReactNode;

    /**
     * 不可选择的日期
     */
    disabledDate?: (value: typeof dayjs, mode: string) => boolean;
}

export default class Calendar extends React.Component<CalendarProps, any> {}
