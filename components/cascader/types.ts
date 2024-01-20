import React from 'react';
import { CommonProps } from '../util';
import type { CheckboxItemProps, MenuProps, ItemProps as MenuItemProps } from '../menu';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {}

export type CascaderDataItem = {
    value: string;
    label?: string;
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
    pos: string;
    _source: CascaderDataItem;
};

export type V2n = Record<string, CascaderDataItemWithPosInfo>;
export type P2n = V2n;

export type NormalizeValueReturns<T> = T extends undefined | null
    ? []
    : T extends unknown[]
      ? T
      : [T];

type extra = {
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
    extends Omit<HTMLAttributesWeak, 'onSelect'>,
        CommonProps,
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
}

/**
 * @api Cascader
 */
export interface CascaderProps
    extends Omit<HTMLAttributesWeak, 'onChange' | 'onSelect' | 'defaultValue'>,
        CommonProps {
    /**
     * 数据源，结构可参考下方说明
     */
    dataSource: Array<CascaderDataItem>;

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
     * @param value - 选中的值，单选时返回单个值，多选时返回数组
     * @param data - 选中的数据，包括 value 和 label，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点
     * @param extra - 额外参数
     */
    onChange?: (
        value: string | Array<string>,
        data: CascaderDataItem | Array<CascaderDataItem>,
        extra: extra
    ) => void;

    /**
     * 选中时触发的回调函数
     * @remarks 无论选中与否
     */
    onSelect?: (v: string, data: CascaderDataItemWithPosInfo, extra: extra) => void;

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
     * @deprecated use expandTriggerType instead
     * @skip
     */
    expandTrigger?: 'click' | 'hover';

    /**
     * 展开时触发的回调函数
     * @param expandedValue - 各列展开值的数组
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
     * @param data - 数据
     * @returns 列表项内容
     */
    itemRender?: (data: CascaderDataItem, props: ItemProps) => React.ReactNode;

    /**
     * 异步加载数据函数，source 是原始对象
     * @param data - 当前点击异步加载的数据
     * @param source - 当前点击数据，source 是原始对象
     */
    loadData?: (data: CascaderDataItem, source: CascaderDataItem) => Promise<unknown>;

    /**
     * 是否是不可变数据
     */
    immutable?: boolean;

    searchValue?: string;

    filteredPaths?: CascaderDataItemWithPosInfo[][];

    resultRender?: (searchValue: string, path: CascaderDataItemWithPosInfo[]) => React.ReactNode;

    filteredListStyle?: React.CSSProperties;

    focusable?: boolean;
}
