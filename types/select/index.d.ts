/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

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
    state?: 'error' | 'loading';

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
    popupClassName?: any;

    /**
     * 弹层的内联样式
     */
    popupStyle?: {};

    /**
     * 添加到弹层上的属性
     */
    popupProps?: {};

    /**
     * 自定义弹层的内容
     */
    popupContent?: React.ReactNode;

    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     */
    filterLocal?: boolean;

    /**
     * 本地过滤方法，返回一个 Boolean 值确定是否保留
     */
    filter?: (key:string, item: any) => boolean;

    /**
     * 键盘上下键切换菜单高亮选项的回调
     */
    onToggleHighlightItem?: () => void;

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
    itemRender?: (item: {}) => React.ReactNode;

    /**
     * Select发生改变时触发的回调
     */
    onChange?: (value: any, actionType: string, item: any) => void;

    /**
     * 填充到选择框里的值的 key，默认是 value
     */
    fillProps?: string;
}

export class AutoComplete extends React.Component<AutoCompleteProps, any> {}

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

export interface SelectProps extends HTMLAttributesWeak, CommonProps {
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
    state?: 'error' | 'loading';

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
    popupClassName?: any;

    /**
     * 弹层的内联样式
     */
    popupStyle?: {};

    /**
     * 添加到弹层上的属性
     */
    popupProps?: {};

    /**
     * 是否跟随滚动
    */
    followTrigger?: boolean;

    /**
     * 自定义弹层的内容
     */
    popupContent?: React.ReactNode;

    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     */
    filterLocal?: boolean;

    /**
     * 本地过滤方法，返回一个 Boolean 值确定是否保留
     */
    filter?: () => void;

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
    itemRender?: (item: {}, searchValue: string) => React.ReactNode;

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
    valueRender?: (item: {}) => React.ReactNode;

    /**
     * 受控搜索值，一般不需要设置
     */
    searchValue?: string;

    /**
     * 选择后是否立即隐藏菜单 (mode=multiple/tag 模式生效)
     */
    hiddenSelected?: boolean;

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
}

export default class Select extends React.Component<SelectProps, any> {
    static AutoComplete: typeof AutoComplete;
    static OptionGroup: typeof OptionGroup;
    static Option: typeof Option;
}
