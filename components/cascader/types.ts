import type React from 'react';
import type { CommonProps } from '../util';
import type { CheckboxItemProps, MenuProps, ItemProps as MenuItemProps } from '../menu';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {}

/**
 * @api CascaderDataItem
 */
export type CascaderDataItem = {
    value: string;
    label?: React.ReactNode;
    disabled?: boolean;
    checkboxDisabled?: boolean;
    children?: Array<CascaderDataItem>;
    title?: string;
    [propName: string]: unknown;
};

/**
 * @api CascaderDataItemWithPosInfo
 */
export type CascaderDataItemWithPosInfo = CascaderDataItem & {
    /**
     * 位置信息
     */
    pos: string;
    _source?: CascaderDataItem;
};

export type V2n = Record<string, CascaderDataItemWithPosInfo>;
export type P2n = V2n;

export type NormalizeValueReturns<T> = T extends undefined | null
    ? []
    : T extends unknown[]
      ? T
      : [T];

/**
 * @api Extra
 */
export type Extra = {
    /**
     * 单选时选中的数据的路径
     */
    selectedPath?: Array<CascaderDataItem>;
    /**
     * 多选时当前的操作是选中还是取消选中
     */
    checked?: boolean;
    /**
     * 多选时当前操作的数据
     */
    currentData?: CascaderDataItem;
    /**
     * 多选时所有被选中的数据
     */
    checkedData?: Array<CascaderDataItem>;
    /**
     * 多选时半选的数据
     */
    indeterminateData?: Array<CascaderDataItem>;
};

export interface CascaderState {
    value: string[];
    isExpandedValueSetByAction: boolean;
    _v2n: V2n;
    _p2n: P2n;
    expandedValue: string[];
    focusedValue?: string;
}

export interface ItemProps
    extends CommonProps,
        Omit<CheckboxItemProps, 'onSelect' | 'onChange'>,
        MenuItemProps {
    onExpand?: (focusedFirstChild: boolean) => void | undefined | Promise<unknown>;
    disabled?: boolean;
    canExpand?: boolean;
    className?: string;
    onFold?: () => void;
    selected?: boolean;
    expanded?: boolean;
    expandTriggerType?: 'click' | 'hover';
    checkable?: boolean;
    onCheck?: CheckboxItemProps['onChange'];
}

export interface ItemState {
    loading: boolean;
}

export interface CascaderMenuProps extends CommonProps, MenuProps {
    useVirtual?: boolean;
    children: Array<React.ReactElement>;
}

/**
 * @api Cascader
 */
export interface CascaderProps
    extends Omit<HTMLAttributesWeak, 'onChange' | 'onSelect' | 'defaultValue'>,
        CommonProps {
    /**
     * 数据源
     * @en data source
     * @defaultValue []
     */
    dataSource?: Array<CascaderDataItem>;

    /**
     * （非受控）默认值
     * @en default value
     */
    defaultValue?: string | Array<string>;

    /**
     * （受控）当前值
     * @en current value
     */
    value?: string | Array<string>;

    /**
     * 选中值改变时触发的回调函数
     * @en callback when value changed
     * @param value - 选中的值，单选时返回单个值，多选时返回数组 - selected value, single value when single select, array when multiple select
     * @param data - 选中的数据，包括 value 和 label，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点 - selected data, including value and label, single value when single select, array when multiple select
     * @param extra - 额外参数 - extra parameters
     */
    onChange?: (
        value: string | Array<string>,
        data: CascaderDataItem | Array<CascaderDataItem>,
        extra: Extra
    ) => void;

    /**
     * 选中时触发的回调函数
     * @en callback when selected
     * @remarks 无论值是否发生变化 - no matter value changed
     * @param v - 选中的值 - selected value
     * @param data - 选中的数据，包括 value 和 label - selected data, including value and label
     * @param extra - 额外参数 - extra parameters
     */
    onSelect?: (v: string, data: CascaderDataItemWithPosInfo, extra: Extra) => void;

    /**
     * （非受控）默认展开值
     * @en default expanded value
     * @remarks 如果不设置，组件内部会根据 defaultValue/value 进行自动设置 - if not set, component will set automatically based on defaultValue/value
     */
    defaultExpandedValue?: Array<string>;

    /**
     * （受控）当前展开值
     * @en current expanded value
     */
    expandedValue?: Array<string>;

    /**
     * 展开触发的方式
     * @en expand trigger type
     * @defaultValue 'click'
     */
    expandTriggerType?: 'click' | 'hover';

    /**
     * @deprecated use expandTriggerType instead
     * @skip
     */
    expandTrigger?: 'click' | 'hover';

    /**
     * 展开时触发的回调函数
     * @en callback when expanded
     * @param expandedValue - 各列展开值的数组 - expanded value
     */
    onExpand?: (expandedValue: Array<string>) => void;

    /**
     * 是否开启虚拟滚动
     * @en use virtual scroll
     * @defaultValue false
     */
    useVirtual?: boolean;

    /**
     * 是否多选
     * @en multiple
     * @defaultValue false
     */
    multiple?: boolean;

    /**
     * 单选时是否只能选中叶子节点
     * @en can only select leaf when single select
     * @defaultValue false
     */
    canOnlySelectLeaf?: boolean;

    /**
     * 多选时是否只能选中叶子节点
     * @en can only check leaf when multiple select
     * @defaultValue false
     */
    canOnlyCheckLeaf?: boolean;

    /**
     * 父子节点是否选中不关联
     * @en check parent and child not associated
     * @defaultValue false
     */
    checkStrictly?: boolean;

    /**
     * 每列列表样式对象
     * @en list style
     */
    listStyle?: React.CSSProperties;

    /**
     * 每列列表类名
     * @en list class
     */
    listClassName?: string;

    /**
     * 每列列表项渲染函数
     * @en list item render
     * @param data - 数据 - data
     * @param props - 列表项属性 - list item props
     * @returns 列表项内容 - list item content
     * @defaultValue (item: CascaderDataItem) =\> item.label
     */
    itemRender?: (data: CascaderDataItem, props: ItemProps) => React.ReactNode;

    /**
     * 异步加载数据函数，source 是原始对象
     * @en async load data function
     * @param data - 当前点击异步加载的数据 - current click data
     * @param source - 当前点击数据，source 是原始对象 - current click data, source is original object
     */
    loadData?: (data: CascaderDataItem, source: CascaderDataItem) => Promise<unknown>;

    /**
     * 是否是不可变数据
     * @en immutable
     * @defaultValue false
     * @version 1.23.0
     */
    immutable?: boolean;
    /**
     * 搜索值
     * @en search value
     * @skip
     */
    searchValue?: string;

    /**
     * 过滤后的路径
     * @en filtered paths
     * @skip
     */
    filteredPaths?: CascaderDataItemWithPosInfo[][];

    /**
     * 结果渲染函数
     * @en result render
     * @param searchValue - 搜索值 - search value
     * @param path - 路径 - path
     * @returns 结果内容 - result content
     * @skip
     */
    resultRender?: (searchValue: string, path: CascaderDataItemWithPosInfo[]) => React.ReactNode;

    /**
     * 过滤后的列表样式对象
     * @en filter list style
     * @skip
     */
    filteredListStyle?: React.CSSProperties;

    /**
     * 是否可聚焦
     * @en focusable
     * @defaultValue false
     * @skip
     */
    focusable?: boolean;
}
