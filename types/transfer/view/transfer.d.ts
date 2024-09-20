import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type {
    DragGapType,
    PositionType,
    TransferDataItem,
    TransferProps,
    TransferState,
} from '../types';
/**
 * Transfer
 */
declare class Transfer extends Component<TransferProps, TransferState> {
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
    };
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        /**
         * 移动选项模式
         */
        mode: PropTypes.Requireable<string>;
        /**
         * 数据源
         */
        dataSource: PropTypes.Requireable<(object | null | undefined)[]>;
        /**
         * （用于受控）当前值
         */
        value: PropTypes.Requireable<(string | null | undefined)[]>;
        /**
         * （用于非受控）初始值
         */
        defaultValue: PropTypes.Requireable<(string | null | undefined)[]>;
        /**
         * 值发生改变的时候触发的回调函数
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Item 被选中的时候触发的回调函数
         */
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 是否禁用
         */
        disabled: PropTypes.Requireable<boolean>;
        /**
         * 是否禁用左侧面板
         */
        leftDisabled: PropTypes.Requireable<boolean>;
        /**
         * 是否禁用右侧面板
         */
        rightDisabled: PropTypes.Requireable<boolean>;
        /**
         * 列表项渲染函数
         */
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 自定义搜索函数
         */
        filter: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 搜索框输入时触发的回调函数
         */
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 搜索框占位符
         */
        searchPlaceholder: PropTypes.Requireable<string>;
        /**
         * 左右面板是否显示搜索框
         */
        showSearch: PropTypes.Requireable<
            NonNullable<boolean | (boolean | null | undefined)[] | null | undefined>
        >;
        /**
         * 左右面板搜索框配置项，同 Search 组件 props
         */
        searchProps: PropTypes.Requireable<object>;
        /**
         * 列表为空显示内容
         */
        notFoundContent: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        /**
         * 左右面板标题
         */
        titles: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        /**
         * 向右向左移动按钮显示内容
         */
        operations: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        /**
         * 左面板默认选中值
         */
        defaultLeftChecked: PropTypes.Requireable<(string | null | undefined)[]>;
        /**
         * 右面板默认选中值
         */
        defaultRightChecked: PropTypes.Requireable<(string | null | undefined)[]>;
        /**
         * 左右面板列表自定义样式类名
         */
        listClassName: PropTypes.Requireable<string>;
        /**
         * 左右面板列表自定义样式对象
         */
        listStyle: PropTypes.Requireable<object>;
        /**
         * 是否允许拖拽排序
         */
        sortable: PropTypes.Requireable<boolean>;
        /**
         * 拖拽排序时触发的回调函数
         */
        onSort: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 自定义国际化文案对象
         */
        locale: PropTypes.Requireable<object>;
        /**
         * 请设置 id 以保证transfer的可访问性
         */
        id: PropTypes.Requireable<string>;
        /**
         * 接收 children 自定义渲染列表
         */
        children: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 是否开启虚拟滚动
         */
        useVirtual: PropTypes.Requireable<boolean>;
        /**
         * 是否显示底部全选 checkbox
         */
        showCheckAll: PropTypes.Requireable<boolean>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        mode: string;
        dataSource: never[];
        defaultValue: never[];
        disabled: boolean;
        leftDisabled: boolean;
        rightDisabled: boolean;
        showCheckAll: boolean;
        itemRender: (data: TransferDataItem) => React.ReactNode;
        showSearch: boolean;
        filter: (searchedValue: string, data: TransferDataItem) => boolean;
        onSearch: () => void;
        notFoundContent: string;
        titles: never[];
        operations: never[];
        defaultLeftChecked: never[];
        defaultRightChecked: never[];
        sortable: boolean;
        onSort: () => void;
        locale: Partial<{
            items: string;
            item: string;
            moveAll: string;
            searchPlaceholder: string;
            /**
             * 列表为空显示内容
             */
            moveToLeft: string;
            moveToRight: string;
        }> & {
            momentLocale?: string | undefined;
        };
    };
    static displayName: string;
    static normalizeValue(value?: string | Array<string>): string[];
    static getDerivedStateFromProps(
        nextProps: TransferProps,
        prevState: TransferState
    ): Partial<TransferState>;
    constructor(props: TransferProps, context?: unknown);
    groupDatasource(
        value: Array<string>,
        itemValues: Array<string>,
        dataSource: Array<TransferDataItem>
    ): TransferDataItem[];
    handlePanelChange(position: PositionType, value: string[]): void;
    handlePanelSort(
        position: PositionType,
        dragValue: string,
        referenceValue: string,
        dragGap: DragGapType
    ): void;
    handleMoveItem(direction: PositionType): void;
    handleSimpleMove(direction: PositionType, v: string): void;
    handleSimpleMoveAll(direction: PositionType): void;
    setValueState(
        st: Partial<TransferState>,
        rightValue: string[],
        leftValue: string[],
        movedValue: string[],
        direction: PositionType
    ): void;
    renderCenter(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: import('../../config-provider/types').ConfiguredComponentClass<
    TransferProps & import('../../config-provider/types').ComponentCommonProps,
    Transfer,
    {}
> & {
    normalizeValue: typeof Transfer.normalizeValue;
};
export default _default;
