/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';
import { MenuProps } from '../menu';
import { InputProps } from '../input';
import { data } from '../checkbox';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement>, InputProps {
    defaultValue?: any;
    onChange?: any;
    onBlur?: any;
    onFocus?: any;
    onKeyDown?: any;
}

export type item = {
    value?: string | number;
    label?: React.ReactNode;
    [propName: string]: any;
};

export interface AutoCompleteProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 选择器尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 当前值，用于受控模式
     */
    value?: string | number;

    /**
     * 初始化的默认值
     */
    defaultValue?: string | number;

    /**
     * 没有值的时候的占位符
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
     * 是否有清除按钮（单选模式有效）
     */
    hasClear?: boolean;

    /**
     * 校验状态
     */
    state?: 'error' | 'loading' | 'success' | 'warning';

    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     */
    readOnly?: boolean;

    /**
     * 是否禁用选择器
     */
    disabled?: boolean;

    /**
     * 当前弹层是否显示
     */
    visible?: boolean;

    /**
     * 弹层初始化是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层显示或隐藏时触发的回调
     */
    onVisibleChange?: (visible: boolean, type: string) => void;

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
     * 自定义弹层的内容
     */
    popupContent?: React.ReactNode;

    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;

    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     */
    filterLocal?: boolean;

    /**
     * 本地过滤方法，返回一个 Boolean 值确定是否保留
     */
    filter?: (key: string, item: any) => boolean;

    /**
     * 键盘上下键切换菜单高亮选项的回调
     */
    onToggleHighlightItem?: (highlightKey: unknown, ...args: unknown[]) => void;

    /**
     * 是否开启虚拟滚动模式
     */
    useVirtual?: boolean;

    /**
     * 传入的数据源，可以动态渲染子项
     */
    dataSource?: Array<any>;

    /**
     * 渲染 MenuItem 内容的方法
     */
    itemRender?: (item: item) => React.ReactNode;

    /**
     * Select发生改变时触发的回调
     */
    onChange?: (value: any, actionType: string, item: any) => void;

    /**
     * 填充到选择框里的值的 key，默认是 value
     */
    fillProps?: string;

    /**
     * 自动高亮第一个选项
     */
    autoHighlightFirstItem?: boolean;

    /**
     * 高亮key
     */
    highlightKey?: string;

    /**
     *  默认高亮key
     */
    defaultHighlightKey?: string;
    onFocus?: InputProps['onFocus'];
}

export class AutoComplete extends React.Component<AutoCompleteProps, any> {
    focus(...args: unknown[]): unknown;
}

export interface OptionGroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 设置分组的文案
     */
    label?: React.ReactNode;
}

export class OptionGroup extends React.Component<OptionGroupProps, any> {}

export interface OptionProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 选项值
     */
    value: any;

    /**
     * 是否禁用
     */
    disabled?: boolean;
}

export class Option extends React.Component<OptionProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

export interface SelectProps extends Omit<HTMLAttributesWeak, 'renderPreview'>, CommonProps {
    /**
     * 选择器尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * name
     */
    name?: string;

    /**
     * 当前值，用于受控模式
     */
    value?: any;

    /**
     * 初始的默认值
     */
    defaultValue?: any;

    /**
     * 没有值的时候的占位符
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
     * 是否有清除按钮（单选模式有效）
     */
    hasClear?: boolean;

    /**
     * 校验状态
     */
    state?: 'error' | 'loading' | 'success' | 'warning';

    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     */
    readOnly?: boolean;

    /**
     * 是否禁用选择器
     */
    disabled?: boolean;

    /**
     * 当前弹层是否显示
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
     * 是否跟随滚动
     */
    followTrigger?: boolean;

    /**
     * 自定义弹层的内容
     */
    popupContent?: React.ReactNode;
    menuProps?: MenuProps;

    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     */
    filterLocal?: boolean;

    /**
     * 本地过滤方法，返回一个 Boolean 值确定是否保留
     */
    filter?: (key: string, item: any) => boolean;

    /**
     * 键盘上下键切换菜单高亮选项的回调
     */
    onToggleHighlightItem?: () => void;

    /**
     * 是否开启虚拟滚动模式
     */
    useVirtual?: boolean;

    /**
     * 传入的数据源，可以动态渲染子项，详见 [dataSource的使用](#dataSource的使用)
     */
    dataSource?: Array<any>;

    /**
     * 渲染 MenuItem 内容的方法
     */
    itemRender?: (item: item, searchValue: string) => React.ReactNode;

    /**
     * 选择器模式
     */
    mode?: 'single' | 'multiple' | 'tag';

    /**
     * 弹层内容为空的文案
     */
    notFoundContent?: React.ReactNode;

    /**
     * Select发生改变时触发的回调
     */
    onChange?: (value: any, actionType: string, item: any) => void;

    /**
     * 是否有边框
     */
    hasBorder?: boolean;

    /**
     * 是否有下拉箭头
     */
    hasArrow?: boolean;

    /**
     * 展开后是否能搜索（tag 模式下固定为true）
     */
    showSearch?: boolean;

    /**
     * 当搜索框值变化时回调
     */
    onSearch?: (value: string) => void;

    /**
     * 当搜索框值被清空时候的回调
     */
    onSearchClear?: (actionType: string) => void;

    /**
     * 多选模式下是否有全选功能
     */
    hasSelectAll?: boolean | string;

    /**
     * 填充到选择框里的值的 key
     */
    fillProps?: string;

    /**
     * onChange 返回的 value 使用 dataSource 的对象
     */
    useDetailValue?: boolean;

    /**
     * dataSource 变化的时是否保留已选的内容
     */
    cacheValue?: boolean;

    /**
     * 渲染 Select 展现内容的方法
     */
    valueRender?: (item: any) => React.ReactNode;

    /**
     * 受控搜索值，一般不需要设置
     */
    searchValue?: string;
    /**
     * 是否一行显示，仅在 mode 为 multiple 的时候生效
     */
    tagInline?: boolean;
    /**
     * 最多显示多少个 tag
     */
    maxTagCount?: number;
    /**
     * tag 尺寸是否和 select 尺寸保持一致，仅在 multiple/tag 模式下有用
     */
    adjustTagSize?: boolean;
    /**
     * 隐藏多余 tag 时显示的内容，在 maxTagCount 生效时起作用
     * @param {object} selectedValues 当前已选中的元素
     * @param {object} totalValues 总待选元素
     */
    maxTagPlaceholder?: (
        selectedValues?: any[],
        totalValues?: any[]
    ) => React.ReactNode | HTMLElement;

    /**
     * 选择后是否立即隐藏菜单 (mode=multiple/tag 模式生效)
     */
    hiddenSelected?: boolean;
    /**
     * 是否展示 dataSource 中 children
     */
    showDataSourceChildren?: boolean;
    /**
     * tag 删除回调
     */
    onRemove?: (item: {}) => void;

    /**
     * 焦点事件
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * 失去焦点事件
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    isPreview?: boolean;
    renderPreview?: (
        values: number | string | data | Array<number | string | data>,
        props: any
    ) => any;
    /**
     * 自动高亮第一个选项
     */
    autoHighlightFirstItem?: boolean;

    /**
     * 高亮key
     */
    highlightKey?: string;

    /**
     *  默认高亮key
     */
    defaultHighlightKey?: string;

    /**
     * 展开下拉菜单时是否自动焦点到弹层
     */
    popupAutoFocus?: boolean;
}

export default class Select extends React.Component<SelectProps, any> {
    static AutoComplete: typeof AutoComplete;
    static OptionGroup: typeof OptionGroup;
    static Option: typeof Option;
}
