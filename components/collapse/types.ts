import React from 'react';
import { CommonProps } from '../util';

type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'title'>;

export interface PanelProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 样式类名的品牌前缀
     * @en The prefix of the component's className
     */
    prefix?: string;

    /**
     * 子组件接受行内样式
     * @en The style of the component
     */
    style?: React.CSSProperties;

    /**
     * 是否禁止用户操作
     * @en Whether to disable user actions
     */
    disabled?: boolean;

    /**
     * 标题
     * @en Title
     */
    title?: React.ReactNode;
    /**
     * 是否展开
     * @en Whether to expand
     */

    isExpanded?: boolean;

    /**
     * 扩展 className
     * @en Extra className
     */
    className?: string;

    // onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void
}

export type DataItem = {
    id?: string | number;
    title?: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
    key?: string | number;
    onClick?: (key: string) => void;
    [propName: string]: unknown;
};

export interface CollapseProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 样式前缀
     * @en The prefix of the component's className
     */
    prefix?: string;

    /**
     * 组件接受行内样式
     * @en The style of the component
     */
    style?: React.CSSProperties;

    /**
     * 使用数据模型构建
     * @en Use data model to build
     */
    dataSource?: Array<DataItem>;

    /**
     * 默认展开keys
     * @en Default expanded keys
     */
    defaultExpandedKeys?: Array<string | number>;

    /**
     * 受控展开keys
     * @en Controlled expanded keys
     */
    expandedKeys?: Array<string>;

    /**
     * 展开状态发升变化时候的回调
     * @en Callback when the expanded state changes
     */
    onExpand?: (expandedKeys: Array<string | number> | string | number) => void;

    /**
     * 所有禁用
     * @en All disabled
     */
    disabled?: boolean;

    /**
     * 扩展class
     * @en Extra className
     */
    className?: string;

    /**
     * 手风琴模式，一次只能打开一个
     * @en Accordion mode, only one can be opened at a time
     */
    accordion?: boolean;
}
