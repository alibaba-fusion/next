/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';
import { ButtonProps } from '../button';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

type item = {
    value?: string | number;
    label?: React.ReactNode;
    [propName: string]: any;
};

export interface SearchProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 大小
     */
    size?: 'large' | 'medium';

    /**
     * 搜索框数值
     */
    value?: string | number;

    /**
     * 搜索框默认值
     */
    defaultValue?: string;

    /**
     * 默认提示
     */
    placeholder?: string;

    /**
     * 下拉菜单是否与选择器对齐
     */
    autoWidth?: boolean;

    /**
     * 自定义内联 label
     */
    label?: React.ReactNode;

    /**
     * 是否显示清除按钮
     */
    hasClear?: boolean;

    /**
     * 校验状态
     */
    state?: 'error' | 'loading';

    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     */
    readOnly?: boolean;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 自定义渲染的的下拉框
     */
    visible?: boolean;

    /**
     * 弹层初始化是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层显示或隐藏时触发的回调
     */
    onVisibleChange?: (visible: boolean) => void;

    /**
     * 弹层挂载的容器节点
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层的 className
     */
    popupClassName?: string;

    /**
     * 弹层的内联样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 添加到弹层上的属性
     */
    popupProps?: PopupProps;

    /**
     * 自定义渲染的的下拉框
     */
    popupContent?: React.ReactNode;

    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     */
    filterLocal?: boolean;

    /**
     * 选择器
     */
    filter?: Array<any>;

    /**
     * 键盘上下键切换菜单高亮选项的回调
     */
    onToggleHighlightItem?: () => void;

    /**
     * 是否开启虚拟滚动模式
     */
    useVirtual?: boolean;

    /**
     * 搜索框下拉联想列表
     */
    dataSource?: Array<any>;

    /**
     * 渲染 MenuItem 内容的方法
     */
    itemRender?: (item: item) => React.ReactNode;

    /**
     * 输入关键字时的回掉
     */
    onChange?: (value: any, actionType: string, item: any) => void;

    /**
     * 填充到选择框里的值的 key，默认是 value
     */
    fillProps?: string;

    /**
     * 样式前缀
     */
    prefix?: string;

    /**
     * 形状
     */
    shape?: 'normal' | 'simple';

    /**
     * 类型 shape=normal: primary/secondary; shape=simple: normal/dark;
     */
    type?: 'primary' | 'secondary' | 'normal' | 'dark';

    /**
     * 点击搜索按钮触发的回调
     */
    onSearch?: (value: string, filterValue?: any) => void;

    /**
     * 选择器默认值
     */
    defaultFilterValue?: string;

    /**
     * 选择器值
     */
    filterValue?: string;

    /**
     * 选择器发生变化时回调
     */
    onFilterChange?: (filter: {}) => void;

    /**
     * button 的内容
     */
    searchText?: React.ReactNode;

    /**
     * 自定义样式
     */
    style?: React.CSSProperties;

    /**
     * 样式名称
     */
    className?: string;

    /**
     * 选择器的props
     */
    filterProps?: any;

    /**
     * 按钮的额外属性
     */
    buttonProps?: ButtonProps;

    /**
     * 是否显示搜索按钮
     */
    hasIcon?: boolean;
    icons?: {
        search?: React.ReactNode;
    };
}

export default class Search extends React.Component<SearchProps, any> {}
