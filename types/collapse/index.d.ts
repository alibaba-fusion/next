/// <reference types="react" />

import * as React from 'react';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface PanelProps extends HTMLAttributesWeak {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;

    /**
     * 子组件接受行内样式
     */
    style?: React.CSSProperties;

    /**
     * 是否禁止用户操作
     */
    disabled?: boolean;

    /**
     * 标题
     */
    title?: React.ReactNode;

    /**
     * 扩展class
     */
    className?: string;
}

export class Panel extends React.Component<PanelProps, any> {}
export interface CollapseProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * 样式前缀
     */
    prefix?: string;

    /**
     * 组件接受行内样式
     */
    style?: React.CSSProperties;

    /**
     * 使用数据模型构建
     */
    dataSource?: Array<any>;

    /**
     * 默认展开keys
     */
    defaultExpandedKeys?: Array<any>;

    /**
     * 受控展开keys
     */
    expandedKeys?: Array<any>;

    /**
     * 展开状态发升变化时候的回调
     */
    onExpand?: () => void;

    /**
     * 所有禁用
     */
    disabled?: boolean;

    /**
     * 扩展class
     */
    className?: string;

    /**
     * 手风琴模式，一次只能打开一个
     */
    accordion?: boolean;
}

export default class Collapse extends React.Component<CollapseProps, any> {
    static Panel: typeof Panel;
}
