import React from 'react';
import { CommonProps } from '../util';
type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'onClick'>;
/**
 * @api Collapse.Panel
 */
export interface PanelProps extends HTMLAttributesWeak, CommonProps {
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
     * @defaultValue false
     */
    isExpanded?: boolean;
    /**
     * 点击回调函数
     * @en Click callback function
     */
    onClick?: ((e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void) | null;
}
/**
 * @api
 */
export type KeyType = string | number;
/**
 * @api
 */
export type DataItem = {
    id?: string;
    title?: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
    key?: KeyType;
    onClick?: (key: KeyType) => void;
    [propName: string]: unknown;
};
/**
 * @api Collapse
 */
export interface CollapseProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 使用数据模型构建
     * @en Use data model to build
     */
    dataSource?: Array<DataItem>;
    /**
     * 默认展开 keys
     * @en Default expanded keys
     */
    defaultExpandedKeys?: KeyType[];
    /**
     * 受控展开 keys
     * @en Controlled expanded keys
     */
    expandedKeys?: KeyType[];
    /**
     * 展开状态发升变化时候的回调
     * @en Callback when the expanded state changes
     */
    onExpand?: (expandedKeys: KeyType | KeyType[]) => void;
    /**
     * 所有禁用
     * @en All disabled
     */
    disabled?: boolean;
    /**
     * 手风琴模式，一次只能打开一个
     * @en Accordion mode, only one can be opened at a time
     * @defaultValue false
     */
    accordion?: boolean;
}
export {};
