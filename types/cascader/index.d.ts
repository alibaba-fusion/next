/// <reference types="react" />

import * as React from 'react';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

export interface CascaderProps extends HTMLAttributesWeak {
    /**
     * 数据源，结构可参考下方说明
     */
    dataSource?: Array<any>;

    /**
     * （非受控）默认值
     */
    defaultValue?: string | Array<any>;

    /**
     * （受控）当前值
     */
    value?: string | Array<any>;

    /**
     * 选中值改变时触发的回调函数
     */
    onChange?: (
        value: string | Array<any>,
        data: {} | Array<any>,
        extra: {}
    ) => void;

    /**
     * （非受控）默认展开值，如果不设置，组件内部会根据 defaultValue/value 进行自动设置
     */
    defaultExpandedValue?: Array<any>;

    /**
     * （受控）当前展开值
     */
    expandedValue?: Array<any>;

    /**
     * 展开触发的方式
     */
    expandTriggerType?: 'click' | 'hover';

    /**
     * 展开时触发的回调函数
     */
    onExpand?: (expandedValue: Array<any>) => void;

    /**
     * 是否开启虚拟滚动
     */
    useVirtual?: boolean;

    /**
     * 是否多选
     */
    multiple?: boolean;

    /**
     * 单选时是否只能选中叶子节点
     */
    canOnlySelectLeaf?: boolean;

    /**
     * 多选时是否只能选中叶子节点
     */
    canOnlyCheckLeaf?: boolean;

    /**
     * 父子节点是否选中不关联
     */
    checkStrictly?: boolean;

    /**
     * 每列列表样式对象
     */
    listStyle?: {};

    /**
     * 每列列表类名
     */
    listClassName?: string;

    /**
     * 每列列表项渲染函数
     */
    itemRender?: (data: {}) => React.ReactNode;

    /**
     * 异步加载数据函数
     */
    loadData?: (data: {}, source: {}) => void;
}

export default class Cascader extends React.Component<CascaderProps, any> {}
