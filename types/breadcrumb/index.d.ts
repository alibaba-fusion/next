/// <reference types="react" />

import * as React from 'react';

export interface ItemProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * 面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />`
     */
    link?: string;
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
    separator?: React.ReactNode;

    /**
     * 设置标签类型
     */
    component?: string | (() => void);
}

export default class Breadcrumb extends React.Component<BreadcrumbProps, any> {
    static Item: typeof Item;
}
