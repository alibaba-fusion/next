import type React from 'react';
import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { TreeProps } from '../tree';
import type { ObjectItem } from '../select';
import type { DataSourceItem, BaseProps as SelectProps } from '../select/types';
import type { BasicDataNode } from '../tree/types';
export type Key = string;
export interface DataNode extends ObjectItem, BasicDataNode {
    key: Key;
    pos: string;
    children?: DataNode[];
}
export interface TreeSelectDataItem extends ObjectItem, BasicDataNode {
    children?: TreeSelectDataItem[];
}
export type KeyEntities = Record<string, DataNode>;
type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'onChange'>;
/**
 * @api TreeSelect
 */
export interface TreeSelectProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 树节点
     * @en Tree node
     */
    children?: React.ReactNode;
    /**
     * 选择框大小
     * @en Select size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 选择框占位符
     * @en Select placeholder
     */
    placeholder?: string;
    /**
     * 是否禁用
     * @en Whether to be disabled
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * 是否有下拉箭头
     * @en Whether to show the arrow
     * @defaultValue true
     */
    hasArrow?: boolean;
    /**
     * 是否有边框
     * @en Whether to show the border
     * @defaultValue true
     */
    hasBorder?: boolean;
    /**
     * 是否有清空按钮
     * @en Whether to show the clear button
     * @defaultValue true
     */
    hasClear?: boolean;
    /**
     * 自定义内联 label
     * @en Custom inline label
     */
    label?: React.ReactNode;
    /**
     * 是否只读，只读模式下可以展开弹层但不能选择
     * @en Whether to be read-only (read-only mode can expand the popup but cannot select)
     */
    readOnly?: boolean;
    /**
     * 下拉框是否与选择器对齐
     * @en Whether the drop-down box is aligned with the selector
     * @defaultValue true
     */
    autoWidth?: boolean;
    /**
     * 数据源，该属性优先级高于 children
     * @en Data source (higher priority than children)
     */
    dataSource?: TreeSelectDataItem[];
    /**
     * （受控）当前值
     * @en Current value (Controlled)
     */
    value?: DataSourceItem[] | DataSourceItem;
    /**
     * （非受控）默认值
     * @en Default value (Uncontrolled)
     * @defaultValue null
     */
    defaultValue?: SelectProps['defaultValue'];
    /**
     * value/defaultValue 在 dataSource 中不存在时，是否展示
     * @en Whether to display when value/defaultValue does not exist in dataSource
     * @defaultValue false
     * @version 1.25
     */
    preserveNonExistentValue?: boolean;
    /**
     * 选中值改变时触发的回调函数
     * @en Callback when the selected value changes
     * @defaultValue () =\> \{\}
     */
    onChange?: (value: DataSourceItem[] | DataSourceItem, data: ObjectItem[] | ObjectItem | null) => void;
    /**
     * onChange 返回的 value 使用 dataSource 的对象
     * @en onChange returns the value using the object in dataSource
     * @skip
     */
    useDetailValue?: boolean;
    /**
     * 是否一行显示，仅在 multiple 和 treeCheckable 为 true 时生效
     * @en Whether to display on one line (only effective when multiple and treeCheckable are true)
     * @defaultValue false
     * @version 1.25
     */
    tagInline?: boolean;
    /**
     * 隐藏多余 tag 时显示的内容，在 tagInline 生效时起作用
     * @en Content to display when hiding excess tags (effective when tagInline is true)
     * @param selectedValues - 当前已选中的元素 - Selected element
     * @param totalValues - 总待选元素，treeCheckedStrategy = 'parent' 时为 undefined - Total pending element, treeCheckedStrategy = 'parent' is undefined
     * @returns ReactNode | HTMLElement - ReactNode or HTMLElement
     * @version 1.25
     */
    maxTagPlaceholder?: (selectedValues: ObjectItem[], totalValues?: ObjectItem[]) => React.ReactNode | HTMLElement;
    /**
     * 是否自动清除 searchValue
     * @en Whether to automatically clear searchValue
     * @defaultValue true
     * @version 1.26
     */
    autoClearSearch?: boolean;
    /**
     * 是否显示搜索框
     * @en Whether to show the search box
     * @defaultValue false
     */
    showSearch?: boolean;
    /**
     * 在搜索框中输入时触发的回调函数
     * @en Callback when input in search box changes
     * @defaultValue () =\> \{\}
     */
    onSearch?: (keyword: string) => void;
    /**
     * onSearchClear
     * @skip
     */
    onSearchClear?: (actionType: string) => void;
    /**
     * 无数据时显示内容
     * @en Content to display when there is no data
     * @defaultValue 'Not Found'
     */
    notFoundContent?: React.ReactNode;
    /**
     * 是否支持多选
     * @en Whether to support multiple selection
     * @defaultValue false
     */
    multiple?: boolean;
    /**
     * 下拉框中的树是否支持勾选节点的复选框
     * @en Whether the check box of the tree in the drop-down box supports the selection of the child node checkbox
     * @defaultValue false
     */
    treeCheckable?: boolean;
    /**
     * 下拉框中的树勾选节点复选框是否完全受控（父子节点选中状态不再关联）
     * @en Whether the check box of the tree in the drop-down box is completely controlled (the parent-child node selected status is no longer associated)
     * @defaultValue false
     */
    treeCheckStrictly?: boolean;
    /**
     * 定义选中时回填的方式
     * @en Definition of how to fill in when selected
     * @defaultValue 'parent'
     */
    treeCheckedStrategy?: 'all' | 'parent' | 'child';
    /**
     * 下拉框中的树是否默认展开所有节点
     * @en Whether the tree in the drop-down box is expanded by default all nodes
     * @defaultValue false
     */
    treeDefaultExpandAll?: boolean;
    /**
     * 下拉框中的树默认展开节点key的数组
     * @en The array of keys of the nodes expanded by default in the tree in the drop-down box
     * @defaultValue []
     */
    treeDefaultExpandedKeys?: Array<Key>;
    /**
     * 下拉框中的树异步加载数据的函数，使用请参考[Tree的异步加载数据Demo](https://fusion.design/pc/component/basic/tree#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE)
     * @en The function of asynchronous loading data in the tree in the drop-down box, please refer to [Tree asynchronous loading data Demo](https://fusion.design/pc/component/basic/tree#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE)
     */
    treeLoadData?: TreeProps['loadData'];
    /**
     * 透传到 Tree 的属性对象
     * @en Pass-through to the property object of Tree
     * @defaultValue \{\}
     */
    treeProps?: TreeProps;
    /**
     * 初始下拉框是否显示
     * @en Initial display state of the drop-down box
     * @defaultValue false
     */
    defaultVisible?: boolean;
    /**
     * 当前下拉框是否显示
     * @en Current display state of the drop-down box (Controlled)
     */
    visible?: boolean;
    /**
     * 下拉框显示或关闭时触发事件的回调函数
     * @en Callback when the drop-down box is displayed or closed
     * @defaultValue () =\> \{\}
     */
    onVisibleChange?: (visible: boolean, type: string) => void;
    /**
     * 下拉框自定义样式对象
     * @en Custom style object for the drop-down box
     */
    popupStyle?: React.CSSProperties;
    /**
     * 下拉框样式自定义类名
     * @en Custom class name for the drop-down box
     */
    popupClassName?: string;
    /**
     * 下拉框挂载的容器节点
     * @en Mounting container node for the drop-down box
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);
    /**
     * 透传到 Popup 的属性对象
     * @en Pass-through to the property object of Popup
     */
    popupProps?: PopupProps;
    /**
     * 是否跟随滚动
     * @en Whether to follow scrolling
     */
    followTrigger?: boolean;
    /**
     * 是否为预览态
     * @en Whether it is in preview mode
     */
    isPreview?: boolean;
    /**
     * 预览态模式下渲染的内容
     * @en Content rendered in preview mode
     */
    renderPreview?: (data: ObjectItem[], props: TreeSelectProps) => React.ReactNode;
    /**
     * 是否开启虚拟滚动
     * @en Whether to open virtual scrolling
     * @defaultValue false
     */
    useVirtual?: boolean;
    /**
     * 是否关闭本地搜索
     * @en Whether to close local search
     * @defaultValue true
     */
    filterLocal?: boolean;
    /**
     * 是否是不可变数据
     * @en Whether it is immutable data
     * @version 1.23
     */
    immutable?: boolean;
    /**
     * 填充到选择框里的值的 key，默认是 value
     * @en The key of the value filled in to the Select box, the default is value
     * @skip
     */
    fillProps?: string;
    /**
     * 点击文本是否可以勾选
     * @en Whether clicking on the text can be selected
     * @defaultValue false
     */
    clickToCheck?: boolean;
    /**
     * 渲染 Select 区域展现内容的方法
     * @en Method for rendering Select area display content
     * @defaultValue (item) =\> item.label || item.value
     * @param item - 渲染项 - Extra item
     * @param itemPaths - 渲染项在dataSource内的路径 - Extra item path
     * @returns ReactNode - 展现内容 - Display content
     */
    valueRender?: (item: TreeSelectState['_k2n'][Key], itemPaths: ObjectItem[]) => React.ReactNode;
}
export interface TreeSelectState {
    visible: TreeSelectProps['visible'];
    value: ObjectItem['value'][];
    searchedValue: string;
    expandedKeys: Key[];
    searchedKeys: Key[];
    retainedKeys: Key[];
    autoExpandParent: boolean;
    mapValueDS: Record<string, ObjectItem>;
    _k2n: KeyEntities;
    _p2n: KeyEntities;
    _v2n: KeyEntities;
}
export interface DeprecatedTreeSelectProps extends TreeSelectProps {
    /**
     * Use popupContainer instead
     * @deprecated Use popupContainer instead
     */
    container?: TreeSelectProps['popupContainer'];
}
export {};
