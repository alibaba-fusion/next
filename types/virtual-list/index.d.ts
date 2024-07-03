/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

export interface VirtualListProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 渲染的子节点
     */
    children?: any;

    /**
     * 最小加载数量
     */
    minSize?: number;

    /**
     * 一屏数量
     */
    pageSize?: number;

    /**
     * 父渲染函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul>
     */
    itemsRenderer?: (items: any, ref: any) => React.ReactNode;

    /**
     * 缓冲区高度
     */
    threshold?: number;

    /**
     * 获取item高度的函数
     */
    itemSizeGetter?: () => void;

    /**
     * 设置跳转位置，需要设置 itemSizeGetter 才能生效, 不设置认为元素等高并取第一个元素高度作为默认高
     */
    jumpIndex?: number;
}

export default class VirtualList extends React.Component<VirtualListProps, any> {}
