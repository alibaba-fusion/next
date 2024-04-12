/// <reference types="react" />

import React from 'react';
import { PopupProps } from '../overlay';

export interface ItemProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * 面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />`
     */
    link?: string;
    onClick?: React.MouseEventHandler<HTMLLIElement>;
}

export class Item extends React.Component<ItemProps, any> {}
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;

    /**
     * 面包屑子节点，需传入 Breadcrumb.Item
     */
    children?: any;

    /**
     * 面包屑最多显示个数，超出部分会被隐藏
     */
    maxNode?: number | 'auto';

    /**
     * 分隔符，可以是文本或 Icon
     */
    separator?: string | React.ReactNode;

    /**
     * 设置标签类型
     */
    component?: string | (() => void);
    /**
     * 当超过的项被隐藏时，是否可通过点击省略号展示菜单（包含被隐藏的项）
     */
    showHiddenItems?: boolean;
    /**
     * 弹层挂载的容器节点（在showHiddenItems为true时才有意义）
     */
    popupContainer?: any;
    /**
     * 是否跟随trigger滚动（在showHiddenItems为true时才有意义）
     */
    followTrigger?: boolean;
    /**
     * 添加到弹层上的属性（在showHiddenItems为true时才有意义）
     */
    popupProps?: PopupProps;
}

export default class Breadcrumb extends React.Component<BreadcrumbProps, any> {
    static Item: typeof Item;
}
