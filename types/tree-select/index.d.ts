/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

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
    value?: string | Array<any>;

    /**
     * （非受控）默认值
     */
    defaultValue?: string | Array<any>;

    /**
     * 选中值改变时触发的回调函数
     */
    onChange?: (value: string | Array<any>, data: {} | Array<any>) => void;

    /**
     * 是否显示搜索框
     */
    showSearch?: boolean;

    /**
     * 在搜索框中输入时触发的回调函数
     */
    onSearch?: (keyword: string) => void;

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
    treeProps?: {};

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
    popupStyle?: {};

    /**
     * 下拉框样式自定义类名
     */
    popupClassName?: string;

    /**
     * 下拉框挂载的容器节点
     */
    popupContainer?:
        | string
        | HTMLElement
        | ((target: HTMLElement) => HTMLElement);

    /**
     * 透传到 Popup 的属性对象
     */
    popupProps?: {};
}

export default class TreeSelect extends React.Component<TreeSelectProps, any> {}
