/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';
import { TreeProps, Node } from '../tree';
import { item } from '../select';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

export interface TreeSelectProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 树节点
     */
    children?: React.ReactNode;

    /**
     * 选择框大小
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 选择框占位符
     */
    placeholder?: string;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否有下拉箭头
     */
    hasArrow?: boolean;

    /**
     * 是否有边框
     */
    hasBorder?: boolean;

    /**
     * 是否有清空按钮
     */
    hasClear?: boolean;

    /**
     * 自定义内联 label
     */
    label?: React.ReactNode;

    /**
     * 是否只读，只读模式下可以展开弹层但不能选择
     */
    readOnly?: boolean;

    /**
     * 下拉框是否与选择器对齐
     */
    autoWidth?: boolean;

    /**
     * 数据源，该属性优先级高于 children
     */
    dataSource?: Array<any>;

    /**
     * （受控）当前值
     */
    value?: string | object | Array<any>;

    /**
     * （非受控）默认值
     */
    defaultValue?: string | object | Array<any>;

    /**
     * value/defaultValue 在 dataSource 中不存在时，是否展示
     */
    preserveNonExistentValue?: boolean;

    /**
     * 选中值改变时触发的回调函数
     */
    onChange?: (value: any | Array<any>, data: any | Array<any>) => void;

    /**
     * onChange 返回的 value 使用 dataSource 的对象
     */
    useDetailValue?: boolean;

    /**
     * 是否一行显示，仅在 multiple 和 treeCheckable 为 true 时生效
     */
    tagInline?: boolean;

    /**
     * 隐藏多余 tag 时显示的内容，在 tagInline 生效时起作用
     * @param {Object[]} selectedValues 当前已选中的元素
     * @param {Object[]} [totalValues] 总待选元素，treeCheckedStrategy = 'parent' 时为 undefined
     */
    maxTagPlaceholder?: (
        selectedValues: any[],
        totalValues?: any[]
    ) => React.ReactNode | HTMLElement;

    /**
     * 是否自动清除 searchValue
     */
    autoClearSearch?: boolean;

    /**
     * 是否显示搜索框
     */
    showSearch?: boolean;

    /**
     * 在搜索框中输入时触发的回调函数
     */
    onSearch?: (keyword: string) => void;
    onSearchClear?: (actionType: string) => void;
    /**
     * 无数据时显示内容
     */
    notFoundContent?: React.ReactNode;

    /**
     * 是否支持多选
     */
    multiple?: boolean;

    /**
     * 下拉框中的树是否支持勾选节点的复选框
     */
    treeCheckable?: boolean;

    /**
     * 下拉框中的树勾选节点复选框是否完全受控（父子节点选中状态不再关联）
     */
    treeCheckStrictly?: boolean;

    /**
     * 定义选中时回填的方式
     */
    treeCheckedStrategy?: 'all' | 'parent' | 'child';

    /**
     * 下拉框中的树是否默认展开所有节点
     */
    treeDefaultExpandAll?: boolean;

    /**
     * 下拉框中的树默认展开节点key的数组
     */
    treeDefaultExpandedKeys?: Array<any>;

    /**
     * 下拉框中的树异步加载数据的函数，使用请参考[Tree的异步加载数据Demo](https://fusion.design/pc/component/basic/tree#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE)
     */
    treeLoadData?: (node: React.ReactElement<any>) => void;

    /**
     * 透传到 Tree 的属性对象
     */
    treeProps?: TreeProps;

    /**
     * 初始下拉框是否显示
     */
    defaultVisible?: boolean;

    /**
     * 当前下拉框是否显示
     */
    visible?: boolean;

    /**
     * 下拉框显示或关闭时触发事件的回调函数
     */
    onVisibleChange?: (visible: boolean, type: string) => void;

    /**
     * 下拉框自定义样式对象
     */
    popupStyle?: React.CSSProperties;

    /**
     * 下拉框样式自定义类名
     */
    popupClassName?: string;

    /**
     * 下拉框挂载的容器节点
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 透传到 Popup 的属性对象
     */
    popupProps?: PopupProps;
    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容
     * @param {Array<data>} value 选择值 { label: , value:}
     */
    renderPreview?: (data: string | Array<any>, props: any | Array<any>) => React.ReactNode;

    /**
     * 是否开启虚拟滚动
     */
    useVirtual?: boolean;

    /**
     * 是否关闭本地搜索
     */
    filterLocal?: boolean;

    immutable?: boolean;

    /**
     * 填充到选择框里的值的 key，默认是 value
     */
    fillProps?: string;

    /**
     * 点击文本是否可以勾选
     */
    clickToCheck?: boolean;

    /**
     * 渲染 Select 区域展现内容的方法
     * @param {Object} item 渲染项
     * @param {Object[]} itemPaths 渲染项在dataSource内的路径
     */
    valueRender?: (item: any, itemPaths: item[]) => React.ReactNode;
}

export default class TreeSelect extends React.Component<TreeSelectProps, any> {
    static Node: typeof Node;
}
