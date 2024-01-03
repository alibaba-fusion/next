/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { VirtualListProps } from '../virtual-list';

export interface NodeProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 树节点
     */
    children?: React.ReactNode;

    /**
     * 节点文本内容
     */
    label?: React.ReactNode;

    /**
     * 单独设置是否支持选中，覆盖 Tree 的 selectable
     */
    selectable?: boolean;

    /**
     * 单独设置是否出现复选框，覆盖 Tree 的 checkable
     */
    checkable?: boolean;

    /**
     * 单独设置是否支持编辑，覆盖 Tree 的 editable
     */
    editable?: boolean;

    /**
     * 单独设置是否支持拖拽，覆盖 Tree 的 draggable
     */
    draggable?: boolean;

    /**
     * 是否禁止节点响应
     */
    disabled?: boolean;

    /**
     * 是否禁止勾选节点复选框
     */
    checkboxDisabled?: boolean;

    /**
     * 是否是叶子节点，设置loadData时生效
     */
    isLeaf?: boolean;

    /**
     * 点击文本是否可以勾选
     */
    clickToCheck?: boolean;
}

export class Node extends React.Component<NodeProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onSelect?: any;
}

export interface TreeProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 树节点
     */
    children?: React.ReactNode;

    /**
     * 数据源，该属性优先级高于 children
     */
    dataSource?: Array<any>;

    /**
     * 是否显示树的线
     */
    showLine?: boolean;

    /**
     * 是否支持选中节点
     */
    selectable?: boolean;

    /**
     * （用于受控）当前选中节点 key 的数组
     */
    selectedKeys?: Array<any>;

    /**
     * （用于非受控）默认选中节点 key 的数组
     */
    defaultSelectedKeys?: Array<any>;

    /**
     * 选中或取消选中节点时触发的回调函数
     */
    onSelect?: (selectedKeys: Array<any>, extra: {}) => void;

    /**
     * 是否支持多选
     */
    multiple?: boolean;

    /**
     * 是否支持勾选节点的复选框
     */
    checkable?: boolean;

    /**
     * （用于受控）当前勾选复选框节点 key 的数组或 `{checked: Array, indeterminate: Array}` 的对象
     */
    checkedKeys?: Array<any> | {};

    /**
     * （用于非受控）默认勾选复选框节点 key 的数组
     */
    defaultCheckedKeys?: Array<any>;

    /**
     * 勾选节点复选框是否完全受控（父子节点选中状态不再关联）
     */
    checkStrictly?: boolean;

    /**
     * 定义选中时回填的方式
     */
    checkedStrategy?: 'all' | 'parent' | 'child';

    /**
     * 勾选或取消勾选复选框时触发的回调函数
     */
    onCheck?: (checkedKeys: Array<any>, extra: {}) => void;

    /**
     * （用于受控）当前展开的节点 key 的数组
     */
    expandedKeys?: Array<any>;

    /**
     * （用于非受控）默认展开的节点 key 的数组
     */
    defaultExpandedKeys?: Array<any>;

    /**
     * 是否默认展开所有节点
     */
    defaultExpandAll?: boolean;

    /**
     * 是否自动展开父节点
     */
    autoExpandParent?: boolean;

    /**
     * 展开或收起节点时触发的回调函数
     */
    onExpand?: (expandedKeys: Array<any>, extra: {}) => void;

    /**
     * 是否支持编辑节点内容
     */
    editable?: boolean;

    /**
     * 编辑节点内容完成时触发的回调函数
     */
    onEditFinish?: (key: string, label: string, node: {}) => void;

    /**
     * 是否支持拖拽节点
     */
    draggable?: boolean;

    /**
     * 开始拖拽节点时触发的回调函数
     */
    onDragStart?: (info: {}) => void;

    /**
     * 拖拽节点进入目标节点时触发的回调函数
     */
    onDragEnter?: (info: {}) => void;

    /**
     * 拖拽节点在目标节点上移动的时候触发的回调函数
     */
    onDragOver?: (info: {}) => void;

    /**
     * 拖拽节点离开目标节点时触发的回调函数
     */
    onDragLeave?: (info: {}) => void;

    /**
     * 拖拽节点拖拽结束时触发的回调函数
     */
    onDragEnd?: (info: {}) => void;

    /**
     * 拖拽节点放入目标节点内或前后触发的回调函数
     */
    onDrop?: (info: {}) => void;

    /**
     * 节点是否可被作为拖拽的目标节点
     */
    canDrop?: (info: {}) => boolean;

    /**
     * 异步加载数据的函数
     */
    loadData?: (node: {}) => void;

    /**
     * 按需筛选高亮节点
     */
    filterTreeNode?: (node: {}) => boolean;

    /**
     * 右键点击节点时触发的回调函数
     */
    onRightClick?: (info: {}) => void;

    /**
     * 设置节点是否占满剩余空间，一般用于统一在各节点右侧添加元素(借助 flex 实现，暂时只支持 ie10+)
     */
    isLabelBlock?: boolean;

    /**
     * 设置节点是否占满一行
     */
    isNodeBlock?: boolean | {};

    /**
     * 是否开启展开收起动画
     */
    animation?: boolean;

    /**
     * 当前获得焦点的子菜单或菜单项 key 值
     */
    focusedKey?: string;
    /**
     * 渲染子节点
     */
    renderChildNodes?: (nodes: React.ReactNode) => React.ReactNode;
    /**
     * 渲染单个子节点
     */
    labelRender?: (node: {}) => React.ReactNode;
    /**
     * 是否是不可变数据
     */
    immutable?: boolean;

    /**
     * 是否开启虚拟滚动
     */
    useVirtual?: boolean;

    /**
     * VirtualList透传参数
     */
    virtualListProps?: VirtualListProps;
    /**
     * 点击文本是否可以勾选
     */
    clickToCheck?: boolean;
}

export default class Tree extends React.Component<TreeProps, any> {
    static Node: typeof Node;
}
