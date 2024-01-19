/// <reference types="react" />

import React from 'react';
import { CascaderProps, data, extra } from '../cascader';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

export interface CascaderSelectProps extends CascaderProps, HTMLAttributesWeak, CommonProps {
    /**
     * 选择框大小
     */
    size?: 'small' | 'medium' | 'large';
    name?: string;

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
     * 是否有清除按钮
     */
    hasClear?: boolean;

    /**
     * 自定义内联 label
     */
    label?: React.ReactNode;

    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     */
    readOnly?: boolean;

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

    valueRender?: (item: any) => React.ReactNode;

    /**
     * 选中值改变时触发的回调函数
     */
    onChange?: (value: string | Array<string>, data: data | Array<data>, extra: extra) => void;

    /**
     * 默认展开值，如果不设置，组件内部会根据 defaultValue/value 进行自动设置
     */
    defaultExpandedValue?: Array<string>;

    /**
     * 展开触发的方式
     */
    expandTriggerType?: 'click' | 'hover';

    /**
     * 是否开启虚拟滚动
     */
    useVirtual?: boolean;

    /**
     * 是否多选
     */
    multiple?: boolean;

    /**
     * 是否选中即发生改变, 该属性仅在单选模式下有效
     */
    changeOnSelect?: boolean;

    /**
     * 是否只能勾选叶子项的checkbox，该属性仅在多选模式下有效
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
     * 选择框单选时展示结果的自定义渲染函数
     */
    displayRender?: (label: Array<any>) => React.ReactNode;

    /**
     * 渲染 item 内容的方法
     */
    itemRender?: (item: data) => React.ReactNode;

    /**
     * 是否显示搜索框
     */
    showSearch?: boolean;

    /**
     * 自定义搜索函数
     */
    filter?: (searchValue: string, path: Array<any>) => boolean;

    /**
     * 当搜索框值变化时回调
     */
    onSearch?: (value: string) => void;

    /**
     * 搜索结果自定义渲染函数
     */
    resultRender?: (searchValue: string, path: Array<any>) => React.ReactNode;

    /**
     * 搜索结果列表是否和选择框等宽
     */
    resultAutoWidth?: boolean;

    /**
     * 无数据时显示内容
     */
    notFoundContent?: React.ReactNode;

    /**
     * 异步加载数据函数
     */
    loadData?: (data: {}) => void;

    /**
     * 自定义下拉框头部
     */
    header?: React.ReactNode;

    /**
     * 自定义下拉框底部
     */
    footer?: React.ReactNode;

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
     * 是否跟随滚动
     */
    followTrigger?: boolean;

    /**
     * 透传到 Popup 的属性对象
     */
    popupProps?: PopupProps;

    /**
     * 是否是不可变数据
     */
    immutable?: boolean;

    /**
     * 	是否为预览态
     */
    isPreview?: boolean;

    renderPreview?: (value: string | Array<string>) => React.ReactNode;
}

export default class CascaderSelect extends React.Component<CascaderSelectProps, any> {}
