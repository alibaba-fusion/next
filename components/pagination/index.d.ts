/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';
import { SelectProps } from '../select';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onChange?: any;
}

export interface PaginationProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 分页组件类型
     */
    type?: 'normal' | 'simple' | 'mini';

    /**
     * 前进后退按钮样式
     */
    shape?: 'normal' | 'arrow-only' | 'arrow-prev-only' | 'no-border';

    /**
     * 分页组件大小
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * （受控）当前页码
     */
    current?: number;

    /**
     * （非受控）初始页码
     */
    defaultCurrent?: number;

    /**
     * 页码发生改变时的回调函数
     */
    onChange?: (current: number, e: {}) => void;

    /**
     * 总记录数
     */
    total?: number;

    /**
     * 总数的渲染函数
     */
    totalRender?: (total: number, range: Array<any>) => void;

    /**
     * 页码显示的数量，更多的使用...代替
     */
    pageShowCount?: number;

    /**
     * 一页中的记录数
     */
    pageSize?: number;

    /**
     * 每页显示选择器类型
     */
    pageSizeSelector?: false | 'filter' | 'dropdown';

    /**
     * 每页显示选择器可选值
     */
    pageSizeList?: Array<any> | Array<any>;

    /**
     * 自定义页码渲染函数，函数作用于页码button以及当前页/总页数的数字渲染
     */
    pageNumberRender?: (index: number) => React.ReactNode;

    /**
     * 每页显示选择器在组件中的位置
     */
    pageSizePosition?: 'start' | 'end';

    /**
     * 存在每页显示选择器时是否使用浮动布局
     */
    useFloatLayout?: boolean;

    /**
     * 每页显示记录数量改变时的回调函数
     */
    onPageSizeChange?: (pageSize: number) => void;

    /**
     * 当分页数为1时，是否隐藏分页器
     */
    hideOnlyOnePage?: boolean;

    /**
     * type 设置为 normal 时，在页码数超过5页后，会显示跳转输入框与按钮，当设置 showJump 为 false 时，不再显示该跳转区域
     */
    showJump?: boolean;

    /**
     * 设置页码按钮的跳转链接，它的值为一个包含 {page} 的模版字符串，如：http://www.taobao.com/{page}
     */
    link?: string;

    /**
     * 弹层组件属性，透传给Popup
     */
    popupProps?: PopupProps;
    selectProps?: SelectProps;
}

export default class Pagination extends React.Component<PaginationProps, any> {}
