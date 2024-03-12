import React from 'react';
import { CommonProps } from '../util';
import { SearchProps } from '../search';

export type TransferDataItem = {
    label: string | React.ReactElement;
    value: string;
    title?: string;
    disabled?: boolean;
    children?: TransferDataItem[];
    [key: string]: unknown;
};
export type PositionType = 'left' | 'right';
export type DragGapType = 'before' | 'after';
export type ExtraOptions = {
    direction: PositionType;
    leftData: TransferDataItem[];
    leftValue: string[];
    movedData: TransferDataItem[];
    movedValue: string[];
};

type HTMLAttributesWeak = Omit<
    React.HTMLAttributes<HTMLElement>,
    'onChange' | 'onSelect' | 'defaultValue'
>;

export interface TransferItemState {
    highlight: boolean;
}

export interface TransferItemProps
    extends Pick<TransferPanelProps, 'mode' | 'disabled' | 'itemRender'>,
        Omit<
            HTMLAttributesWeak,
            'title' | 'onClick' | 'onDragOver' | 'onDragStart' | 'onDragEnd' | 'onDrop'
        >,
        CommonProps {
    item: TransferDataItem;
    checked: boolean;
    needHighlight: boolean;
    draggable: TransferPanelProps['sortable'];
    panelPosition: TransferPanelProps['position'];
    dragPosition?: PositionType;
    dragOverValue?: string | null;
    dragValue: string | null;
    title?: TransferDataItem['title'];
    onCheck: (value: string, checked: boolean) => void;
    onClick: TransferPanelProps['onMove'];
    onDragStart: (position: PositionType, value: string) => void;
    onDragOver: (value: string) => void;
    onDragEnd: () => void;
    onDrop: (...args: Parameters<Required<TransferPanelProps>['onSort']>) => void;
}

export interface TransferPanelState {
    searchedValue: string;
    dragValue: string | null;
    dragOverValue: string | null;
    dragPosition?: PositionType;
}

export interface TransferPanelProps
    extends Pick<
            TransferProps,
            | 'mode'
            | 'disabled'
            | 'filter'
            | 'onSearch'
            | 'searchPlaceholder'
            | 'notFoundContent'
            | 'listClassName'
            | 'itemRender'
            | 'sortable'
            | 'listStyle'
            | 'useVirtual'
            | 'showCheckAll'
        >,
        Omit<HTMLAttributesWeak, 'title'>,
        CommonProps {
    value: string[];
    dataSource: TransferDataItem[];
    baseId: TransferProps['id'];
    position: PositionType;
    showSearch?: boolean;
    searchProps?: SearchProps;
    title?: string | React.ReactElement;
    onMove: (direction: PositionType, v: string) => void;
    onMoveAll: (direction: PositionType) => void;
    onChange: (position: PositionType, value: string[]) => void;
    onSort: (
        position: PositionType,
        dragValue: string | null,
        referenceValue: string,
        dragGap: DragGapType
    ) => void;
    customerList?: TransferProps['children'];
}

export interface TransferState {
    value: Array<string>;
    leftCheckedValue: Array<string>;
    rightCheckedValue: Array<string>;
    leftValue: Array<string>;
    innerUpdate?: boolean;
}
export interface TransferProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 移动选项模式
     */
    mode?: 'normal' | 'simple';

    /**
     * 数据源
     */
    dataSource?: Array<TransferDataItem>;

    /**
     * （用于受控）当前值
     */
    value?: Array<string>;

    /**
     * （用于非受控）初始值
     */
    defaultValue?: Array<string>;

    /**
     * 值发生改变的时候触发的回调函数
     */
    onChange?: (value: Array<string>, data: Array<TransferDataItem>, extra: ExtraOptions) => void;

    /**
     * Item 被选中的时候触发的回调函数
     *
     * @param sourceSelectedValue 源面板选中的 Item 列表
     * @param targetSelectedValue 目标面板选中的 Item 列表
     * @param target 触发面板
     */
    onSelect?: (
        sourceSelectedValue: Array<string>,
        targetSelectedValue: Array<string>,
        target: 'source' | 'target'
    ) => void;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否禁用左侧面板
     */
    leftDisabled?: boolean;

    /**
     * 是否禁用右侧面板
     */
    rightDisabled?: boolean;

    /**
     * 列表项渲染函数
     */
    itemRender?: (data: TransferDataItem) => React.ReactNode;

    /**
     * 左右面板是否显示搜索框
     */
    showSearch?: boolean | boolean[];

    /**
     * 左右面板搜索框配置
     */
    searchProps?: SearchProps | SearchProps[];

    /**
     * 自定义搜索函数
     */
    filter?: (searchedValue: string, data: TransferDataItem) => boolean;

    /**
     * 搜索框输入时触发的回调函数
     */
    onSearch?: (searchedValue: string, position: string) => void;

    /**
     * 是否开启虚拟滚动
     */
    useVirtual?: boolean;

    /**
     * 搜索框占位符
     */
    searchPlaceholder?: string;

    /**
     * 列表为空显示内容
     */
    notFoundContent?: React.ReactNode | React.ReactNode[];

    /**
     * 左右面板标题
     */
    titles?: Array<string | React.ReactElement>;

    /**
     * 向右向左移动按钮显示内容
     * @default []
     */
    operations?: Array<React.ReactElement | string>;

    /**
     * 左面板默认选中值
     */
    defaultLeftChecked?: Array<string>;

    /**
     * 右面板默认选中值
     */
    defaultRightChecked?: Array<string>;

    /**
     * 左右面板列表自定义样式类名
     */
    listClassName?: string;

    /**
     * 左右面板列表自定义样式对象
     */
    listStyle?: React.CSSProperties;

    /**
     * 是否允许拖拽排序
     */
    sortable?: boolean;

    /**
     * 拖拽排序时触发的回调函数
     */
    onSort?: (value: Array<string>, position: PositionType) => void;

    /**
     * 请设置 id 以保证transfer的可访问性
     */
    id?: string;

    /**
     * 是否显示底部全选 checkbox
     */
    showCheckAll?: boolean;
    /**
     * 接收 children 自定义渲染列表
     */
    children?: (props: TransferPanelProps) => React.ReactNode;
}

export default class Transfer extends React.Component<TransferProps> {}
