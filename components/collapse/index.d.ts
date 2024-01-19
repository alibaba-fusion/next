/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface PanelProps extends HTMLAttributesWeak, CommonProps {
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

type data = {
    title?: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
    key?: string;
    [propName: string]: any;
};

export interface CollapseProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
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
    dataSource?: Array<data>;

    /**
     * 默认展开keys
     */
    defaultExpandedKeys?: Array<string>;

    /**
     * 受控展开keys
     */
    expandedKeys?: Array<string>;

    /**
     * 展开状态发升变化时候的回调
     */
    onExpand?: (expandedKeys: Array<string>) => void;

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
