import type React from 'react';
import type { CommonProps } from '../util';
import type { SearchProps } from '../search';
import type { Locale } from '../locale/types';

export type TransferLocale = Locale['Transfer'];

/**
 * @api TransferDataItem
 */
export type TransferDataItem = {
    label: string | React.ReactNode;
    value: string;
    title?: string;
    disabled?: boolean;
    children?: TransferDataItem[];
    [key: string]: unknown;
};
/**
 * @api PositionType
 */
export type PositionType = 'left' | 'right';
/**
 * @api DragGapType
 */
export type DragGapType = 'before' | 'after';
/**
 * @api ExtraOptions
 */
export type ExtraOptions = {
    /**
     * 移动的方向，值为'left'或'right'
     * @en Move direction, 'left' or 'right'
     */
    direction: PositionType;
    /**
     * 左面板值
     * @en Data of left panel
     */
    leftValue: string[];
    /**
     * 左面板数据
     * @en Data of left panel
     */
    leftData: TransferDataItem[];
    /**
     * 发生移动的数据
     * @en Moved data
     */
    movedData: TransferDataItem[];
    /**
     * 发生移动的值
     * @en Moved value
     */
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
    locale?: TransferLocale;
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
    locale?: TransferLocale;
    value: string[];
    dataSource: TransferDataItem[];
    baseId: TransferProps['id'];
    position: PositionType;
    showSearch?: boolean;
    searchProps?: SearchProps;
    title?: React.ReactNode;
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

/**
 * @api Transfer
 */
export interface TransferProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 国际化文案对象
     * @skip
     */
    locale?: TransferLocale;
    /**
     * 移动选项模式
     * @en Move mode
     * @defaultValue 'normal'
     */
    mode?: 'normal' | 'simple';

    /**
     * 数据源
     * @en Data source
     * @defaultValue []
     */
    dataSource?: Array<TransferDataItem>;

    /**
     * （用于受控）当前值
     * @en (under control) current value
     */
    value?: Array<string>;

    /**
     * （用于非受控）初始值
     * @en (under uncontrolled) default value
     * @defaultValue []
     */
    defaultValue?: Array<string>;

    /**
     * 值发生改变的时候触发的回调函数
     * @en Callback function triggered when value change
     * @param value - 右面板值 - Value of right panel
     * @param data - 右面板数据 - Data of right panel
     * @param extra - 额外参数 - Extra parameters
     */
    onChange?: (value: Array<string>, data: Array<TransferDataItem>, extra: ExtraOptions) => void;

    /**
     * Item 被选中的时候触发的回调函数
     * @en Callback function triggered when item selected
     * @param sourceSelectedValue - 源面板选中的 Item 列表 - Value of checked items in source panel
     * @param targetSelectedValue - 目标面板选中的 Item 列表 - Value of checked items in target panel
     * @param target - 触发面板 'source' | 'target' - trigger panel `source | target`
     */
    onSelect?: (
        sourceSelectedValue: Array<string>,
        targetSelectedValue: Array<string>,
        target: 'source' | 'target'
    ) => void;

    /**
     * 是否禁用
     * @en Disable operations on transfer
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 是否禁用左侧面板
     * @en Disable left panel
     * @defaultValue false
     */
    leftDisabled?: boolean;

    /**
     * 是否禁用右侧面板
     * @en Disable right panel
     * @defaultValue false
     */
    rightDisabled?: boolean;

    /**
     * 列表项渲染函数
     * @en Item render function
     * @param data - 数据 - Data
     * @returns 列表项内容 - content of item
     */
    itemRender?: (data: TransferDataItem) => React.ReactNode;

    /**
     * 左右面板是否显示搜索框
     * @en Whether to show the search box
     * @defaultValue false
     */
    showSearch?: boolean | [leftPanel: boolean, rightPanel: boolean];

    /**
     * 左右面板搜索框配置
     * @en Props passed to Search when showSearch is true
     */
    searchProps?: SearchProps | [leftPanel: SearchProps, rightPanel: SearchProps];

    /**
     * 自定义搜索函数
     * @en Custom search function
     * @param searchedValue - 搜索框输入的值 - Search keyword
     * @param data - 数据 - Data
     * @returns 是否匹配到 - Whether is matched
     */
    filter?: (searchedValue: string, data: TransferDataItem) => boolean;

    /**
     * 搜索框输入时触发的回调函数
     * @en Callback function triggered when search
     * @param searchedValue - 搜索框输入的值 - Search keyword
     * @param position - 搜索面板的位置 - Position of the search box
     */
    onSearch?: (searchedValue: string, position: string) => void;

    /**
     * 是否开启虚拟滚动
     * @en Whether use virtual
     */
    useVirtual?: boolean;

    /**
     * 搜索框占位符
     * @en Placeholder of the search box
     */
    searchPlaceholder?: string;

    /**
     * 列表为空显示内容
     * @en Content when list is empty
     * @defaultValue 'Not Found'
     */
    notFoundContent?: React.ReactNode | [leftPanel: React.ReactNode, rightPanel: React.ReactNode];

    /**
     * 左右面板标题
     * @en Title of the left and right panel
     * @defaultValue []
     */
    titles?: [leftPanel: React.ReactNode, rightPanel: React.ReactNode];

    /**
     * 向右向左移动按钮显示内容
     * @en Text of move buttons
     * @defaultValue []
     */
    operations?: [leftPanel: React.ReactNode, rightPanel: React.ReactNode];

    /**
     * 左面板默认选中值
     * @en Default checked value of left panel
     * @defaultValue []
     */
    defaultLeftChecked?: Array<string>;

    /**
     * 右面板默认选中值
     * @en Default checked value of right panel
     * @defaultValue []
     */
    defaultRightChecked?: Array<string>;

    /**
     * 左右面板列表自定义样式类名
     * @en Custom list class name
     */
    listClassName?: string;

    /**
     * 左右面板列表自定义样式对象
     * @en Custom list style
     */
    listStyle?: React.CSSProperties;

    /**
     * 是否允许拖拽排序
     * @en Whether to allow drag and drop sort
     * @defaultValue false
     */
    sortable?: boolean;

    /**
     * 拖拽排序时触发的回调函数
     * @en Callback function triggered when dragging sort
     * @param value - 右面板值 - Sorted value
     * @param position - 拖拽的面板位置，值为：left 或 right - Position of the sorted panel, 'left' or 'right'
     */
    onSort?: (value: Array<string>, position: PositionType) => void;

    /**
     * 请设置 id 以保证transfer的可访问性
     * @en Unique id to make component accessible
     */
    id?: string;

    /**
     * 是否显示底部全选 checkbox
     * @en Whether show footer's check-all checkbox
     * @defaultValue true
     */
    showCheckAll?: boolean;

    /**
     * 接收 children 自定义渲染列表
     * @en Customer panel
     */
    children?: (props: TransferPanelProps) => React.ReactNode;
}
