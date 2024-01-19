/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

type data = {
    value?: string;
    label?: string;
    disabled?: boolean;
    checkboxDisabled?: boolean;
    children?: Array<data>;
    [propName: string]: any;
};

type extra = {
    /**
     * 单选时选中的数据的路径
     */
    selectedPath?: Array<data>;
    /**
     * 多选时当前的操作是选中还是取消选中
     */
    checked?: boolean;
    /**
     * 多选时当前操作的数据
     */
    currentData?: any;
    /**
     * 多选时所有被选中的数据
     */
    checkedData?: Array<data>;
    /**
     * 多选时半选的数据
     */
    indeterminateData?: Array<data>;
};

export interface CascaderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 数据源，结构可参考下方说明
     */
    dataSource?: Array<data>;

    /**
     * （非受控）默认值
     */
    defaultValue?: string | Array<string>;

    /**
     * （受控）当前值
     */
    value?: string | Array<string>;

    /**
     * 选中值改变时触发的回调函数
     */
    onChange?: (value: string | Array<string>, data: data | Array<data>, extra: extra) => void;

    /**
     * （非受控）默认展开值，如果不设置，组件内部会根据 defaultValue/value 进行自动设置
     */
    defaultExpandedValue?: Array<string>;

    /**
     * （受控）当前展开值
     */
    expandedValue?: Array<string>;

    /**
     * 展开触发的方式
     */
    expandTriggerType?: 'click' | 'hover';

    /**
     * 展开时触发的回调函数
     */
    onExpand?: (expandedValue: Array<string>) => void;

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
    listStyle?: React.CSSProperties;

    /**
     * 每列列表类名
     */
    listClassName?: string;

    /**
     * 每列列表项渲染函数
     */
    itemRender?: (data: data) => React.ReactNode;

    /**
     * 异步加载数据函数，source是原始对象
     */
    loadData?: (data: data, source: data) => void;

    /**
     * 是否是不可变数据
     */
    immutable?: boolean;
}

export default class Cascader extends React.Component<CascaderProps, any> {}
