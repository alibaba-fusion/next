/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { LoadingProps } from '../loading';
import { AffixProps } from '../affix';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface ColumnProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 指定列对应的字段，支持`a.b`形式的快速取值
     */
    dataIndex?: string;

    /**
     * 行渲染的逻辑
     * value, rowIndex, record, context四个属性只可读不可被更改
     * Function(value, index, record) => Element
     */
    cell?:
        | React.ReactElement<any>
        | React.ReactNode
        | ((value: any, index: number, record: any) => any);

    /**
     * 表头显示的内容
     * value, rowIndex, record, context四个属性只可读不可被更改
     */
    title?: React.ReactElement<any> | React.ReactNode | (() => any);

    htmlTitle?: string;
    /**
     * 是否支持排序
     */
    sortable?: boolean;

    /**
     * 列宽，注意在锁列的情况下一定需要配置宽度
     */
    width?: number | string;

    /**
     * 单元格的对齐方式
     */
    align?: 'left' | 'center' | 'right';
    sortDirections?: Array<'desc' | 'asc' | 'default'>;
    /**
     * 单元格标题的对齐方式, 不配置默认读取align值
     */
    alignHeader?: 'left' | 'center' | 'right';

    /**
     * 生成标题过滤的菜单, 格式为`[{label:'xxx', value:'xxx'}]`
     */
    filters?: Array<any>;

    /**
     * 过滤的模式是单选还是多选
     */
    filterMode?: 'single' | 'multiple';

    /**
     * 是否支持锁列,可选值为`left`,`right`, `true`
     */
    lock?: boolean | string;

    /**
     * 是否支持列宽调整, 当该值设为true，table的布局方式会修改为fixed.
     */
    resizable?: boolean;
    /**
     * 是否支持异步列宽调整, 当该值设为true，table的布局方式会修改为fixed.
     */
    asyncResizable?: boolean;

    /**
     * header cell 横跨的格数，设置为0表示不出现此 th
     */
    colSpan?: number;

    /**
     * 设置该列单元格的word-break样式，对于id类、中文类适合用all，对于英文句子适合用word
     */
    wordBreak?: 'all' | 'word';
}

export class Column extends React.Component<ColumnProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface ColumnGroupProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 表头显示的内容
     */
    title?: React.ReactElement<any> | React.ReactNode | (() => any);
}

export class ColumnGroup extends React.Component<ColumnGroupProps, any> {}

export interface GroupHeaderProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 行渲染的逻辑
     */
    cell?:
        | React.ReactElement<any>
        | React.ReactNode
        | ((value: any, index: number, record: any) => any);

    /**
     * 是否在Children上面渲染selection
     */
    hasChildrenSelection?: boolean;

    /**
     * 是否在GroupHeader上面渲染selection
     */
    hasSelection?: boolean;

    /**
     * 当 dataSouce 里没有 children 时，是否使用内容作为数据
     */
    useFirstLevelDataWhenNoChildren?: boolean;
}

export class GroupHeader extends React.Component<GroupHeaderProps, any> {}

export interface GroupFooterProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 行渲染的逻辑
     */
    cell?:
        | React.ReactElement<any>
        | React.ReactNode
        | ((value: any, index: number, record: any) => any);
}

export class GroupFooter extends React.Component<GroupFooterProps, any> {}

export interface BaseTableProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;

    /**
     * 尺寸 small为紧凑模式
     */
    size?: 'small' | 'medium';

    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: React.CSSProperties;
    columns?: Array<any>;
    /**
     * 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局
     */
    tableLayout?: 'fixed' | 'auto';
    /**
     * 表格的总长度，可以这么用：设置表格总长度 、设置部分列的宽度，这样表格会按照剩余空间大小，自动其他列分配宽度
     */
    tableWidth?: number;
    /**
     * 表格展示的数据源
     */
    dataSource?: Array<any>;

    /**
     * 表格是否具有边框
     */
    hasBorder?: boolean;

    /**
     * 表格是否具有头部
     */
    hasHeader?: boolean;

    /**
     * 表格是否是斑马线
     */
    isZebra?: boolean;

    /**
     * 表格是否在加载中
     */
    loading?: boolean;

    /**
     * 自定义国际化文案对象
     */
    locale?: {
        ok: string;
        reset: string;
        empty: string;
        asc: string;
        desc: string;
        expanded: string;
        folded: string;
        filter: string;
        selectAll: string;
    };

    /**
     * 设置数据为空的时候的表格内容展现
     */
    emptyContent?: React.ReactNode;

    /**
     * dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
     */
    primaryKey?: string;
}
export interface TableProps extends React.HTMLAttributes<HTMLElement>, BaseTableProps {
    /**
     * 点击表格每一行触发的事件
     */
    onRowClick?: (record: any, index: number, e: React.MouseEvent) => void;

    /**
     * 悬浮在表格每一行的时候触发的事件
     */
    onRowMouseEnter?: (record: any, index: number, e: React.MouseEvent) => void;

    /**
     * 离开表格每一行的时候触发的事件
     */
    onRowMouseLeave?: (record: any, index: number, e: React.MouseEvent) => void;

    /**
     * 点击列排序触发的事件
     */
    onSort?: (dataIndex: string, order: string) => void;

    /**
     * 点击过滤确认按钮触发的事件
     */
    onFilter?: (filterParams: any) => void;

    /**
     * 重设列尺寸的时候触发的事件
     */
    onResizeChange?: (dataIndex: string, value: number) => void;

    /**
     * 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。
     */
    getRowProps?: (record: any, index: number) => any;
    rowProps?: (record: any, index: number) => any;

    /**
     * 设置单元格的属性，通过该属性可以进行合并单元格
     */
    getCellProps?: (rowIndex: number, colIndex: number, dataIndex: string, record: any) => any;
    cellProps?: (rowIndex: number, colIndex: number, dataIndex: string, record: any) => any;

    /**
     * 自定义 Loading 组件
     * 请务必传递 props, 使用方式： loadingComponent={props => <Loading {...props}/>}
     */
    loadingComponent?: (props: LoadingProps) => React.ReactNode;

    /**
     * 当前过滤的的keys,使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中,格式为 {dataIndex: {selectedKeys:[]}}
     * 示例:
     * 假设要控制dataIndex为id的列的过滤菜单中key为one的菜单项选中
     * `<Table filterParams={{id: {selectedKeys: ['one']}}}/>`
     */
    filterParams?: { [propName: string]: any };

    /**
     * 当前排序的字段,使用此属性可以控制表格的字段的排序,格式为{dataIndex: 'asc'}
     */
    sort?: { [propName: string]: any };

    /**
     * 自定义排序按钮，例如上下排布的: `{desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />, asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />}`
     */
    sortIcons?: { desc?: React.ReactNode; asc?: React.ReactNode };

    /**
     * 额外渲染行的渲染函数
     */
    expandedRowRender?: (record: any, index: number) => React.ReactElement<any>;
    rowExpandable?: (record: any) => boolean;

    /**
     * 额外渲染行的缩进，包含两个数字，第一个数字为左侧缩进，第二个数字为右侧缩进
     */
    expandedRowIndent?: [number, number];

    /**
     * 默认情况下展开的渲染行或者Tree, 传入此属性为受控状态
     */
    openRowKeys?: Array<any>;

    /**
     * 是否显示点击展开额外渲染行的+号按钮
     */
    hasExpandedRowCtrl?: boolean;

    /**
     * 设置额外渲染行的属性
     */
    getExpandedColProps?: <IRecord extends any = any>(
        record: IRecord,
        index: number
    ) => object | Record<string | number, any>;

    /**
     * 在额外渲染行或者Tree展开或者收起的时候触发的事件
     */
    onRowOpen?: (
        openRowKeys: Array<any>,
        currentRowKey: string,
        expanded: boolean,
        currentRecord: any
    ) => void;

    /**
     * 点击额外渲染行触发的事件
     */
    onExpandedRowClick?: (record: any, index: number, e: React.MouseEvent) => void;

    /**
     * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
     */
    fixedHeader?: boolean;

    /**
     * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
     */
    maxBodyHeight?: number | string;

    /**
     * 是否启用选择模式
     */
    rowSelection?: {
        getProps?: (record: any, index: number) => void;
        onChange?: (selectedRowKeys: Array<any>, records: Array<any>) => void;
        onSelect?: (selected: boolean, record: any, records: Array<any>) => void;
        onSelectAll?: (selected: boolean, records: Array<any>) => void;
        selectedRowKeys?: Array<any>;
        mode?: 'single' | 'multiple';
        titleProps?: () => any;
        columnProps?: () => any;
        titleAddons?: () => any;
    };

    /**
     * 表头是否是sticky
     */
    stickyHeader?: boolean;

    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop?: number;

    /**
     * affix组件的的属性
     */
    affixProps?: AffixProps;

    /**
     * 在tree模式下的缩进尺寸， 仅在isTree为true时候有效
     */
    indent?: number;

    /**
     * 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table
     */
    isTree?: boolean;

    /**
     * 是否开启虚拟滚动
     */
    useVirtual?: boolean;

    /**
     * 滚动到指定行
     */
    scrollToRow?: number;

    /**
     * 设置行高
     */
    rowHeight?: number | (() => any);

    /**
     * 在内容区域滚动的时候触发的函数
     */
    onBodyScroll?: (start: number) => void;

    /**
     * 开启时，getExpandedColProps() / getRowProps() / expandedRowRender() 的第二个参数 index (该行所对应的序列) 将按照01,2,3,4...的顺序返回，否则返回真实index(0,2,4,6... / 1,3,5,7...)
     */
    expandedIndexSimulate?: boolean;
    /**
     * 在 hover 时出现十字参考轴，适用于表头比较复杂，需要做表头分类的场景。
     */
    crossline?: boolean;

    /**
     * 虚拟滚动时向前保留渲染的行数
     * @defaultValue 10
     */
    keepForwardRenderRows?: number;
}

export default class Table extends React.Component<TableProps, any> {
    static Column: typeof Column;
    static ColumnGroup: typeof ColumnGroup;
    static GroupHeader: typeof GroupHeader;
    static GroupFooter: typeof GroupFooter;
    static StickyLock: typeof Table;
    static Base: typeof Table;
}
