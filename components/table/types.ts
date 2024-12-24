import type React from 'react';
import type { CommonProps } from '../util';
import type { AffixProps } from '../affix';
import type { Locale } from '../locale/types';
import type { MenuProps } from '../menu';
import type { DropdownProps } from '../dropdown';
import type { CheckboxProps } from '../checkbox';
import type { RadioProps } from '../radio';

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'children'> {}

export type FilterItem = { value: React.Key; label: React.ReactNode; children?: FilterItem[] };
export type RecordItem = Record<string, unknown> & { children?: RecordItem[] };

export interface FilterProps
    extends Pick<
        ColumnProps,
        'filters' | 'filterMode' | 'filterMenuProps' | 'filterProps' | 'rtl' | 'locale' | 'prefix'
    > {
    filterParams?: TableProps['filterParams'];
    dataIndex: ColumnProps['dataIndex'];
    onFilter?: TableProps['onFilter'];
    className?: string;
}

export interface FilterState {
    visible: boolean;
    selectedKeys: string[];
    selectedKeysChangedByInner: boolean;
}

export type SortOrder = 'desc' | 'asc' | 'default';

export interface SortProps
    extends Pick<ColumnProps, 'locale' | 'rtl' | 'sortDirections' | 'prefix'> {
    sort?: TableProps['sort'];
    sortIcons?: TableProps['sortIcons'];
    className?: string;
    dataIndex: ColumnProps['dataIndex'];
    onSort: NonNullable<TableProps['onSort']>;
}

export interface CellProps
    extends Pick<
        ColumnProps,
        | 'cell'
        | 'resizable'
        | 'asyncResizable'
        | 'align'
        | 'title'
        | 'width'
        | 'filterMode'
        | 'filters'
        | 'sortable'
        | 'sortDirections'
        | 'lock'
        | 'locale'
        | 'rtl'
        | 'htmlTitle'
        | 'wordBreak'
        | 'filterMenuProps'
        | 'filterProps'
        | 'colSpan'
    > {
    pure?: boolean;
    prefix: TableProps['prefix'];
    className?: string;
    value?: unknown;
    record?: RecordItem;
    context?: unknown;
    colIndex?: number;
    rowIndex?: number;
    __colIndex?: number | string;
    style?: React.CSSProperties;
    component?: React.ElementType;
    children?: React.ReactNode;
    innerStyle?: React.CSSProperties;
    __normalized?: boolean;
    expandedIndexSimulate?: TableProps['expandedIndexSimulate'];
    getCellDomRef?: React.LegacyRef<HTMLDivElement>;
    primaryKey?: TableProps['primaryKey'];
    rowSpan?: number;
}

export interface ResizeProps extends Pick<ColumnProps, 'asyncResizable' | 'rtl' | 'prefix'> {
    dataIndex: NonNullable<ColumnProps['dataIndex']>;
    tableEl: HTMLElement | null;
    resizeProxyDomRef: HTMLElement | null;
    onChange: (dataIndex: ResizeProps['dataIndex'], changedPageX: number) => void;
    col: ColumnProps;
    cellDomRef: { current?: HTMLElement };
    hasLock: boolean;
}

export interface HeaderProps extends CommonProps {
    columns: (ColumnProps &
        InnerColumnProps & {
            ref?: React.Ref<unknown>;
        })[][];
    headerCellRef: (i: number, j: number, cell: InstanceType<CellLike> | null) => void;
    components?: TableProps['components'];
    onSort: NonNullable<SortProps['onSort']>;
    className?: string;
    children?: React.ReactNode;
    colGroup?: React.ReactElement<HTMLTableColElement>;
    filterParams?: FilterProps['filterParams'];
    // 这个属性未实现
    affixRef?: unknown;
    sort?: SortProps['sort'];
    sortIcons?: SortProps['sortIcons'];
    tableWidth?: TableProps['tableWidth'];
    tableEl?: ResizeProps['tableEl'];
    resizeProxyDomRef?: ResizeProps['resizeProxyDomRef'];
    component?: React.ElementType;
    onFilter?: FilterProps['onFilter'];
    onResizeChange?: TableProps['onResizeChange'];
}

export interface FixedHeaderProps extends HeaderProps {}

export interface FixedHeaderContext {
    getNode: (type: string, node: HTMLElement, lockType?: 'left' | 'right') => void;
    onFixedScrollSync: (e: React.UIEvent) => void;
    lockType: 'left' | 'right';
}

export interface LockHeaderContext extends FixedHeaderContext {
    getLockNode: (type: string, node: HTMLElement, lockType: LockHeaderContext['lockType']) => void;
}

export interface StickyHeaderProps extends HeaderProps {
    affixRef: (ref: InstanceType<React.ComponentClass<AffixProps>> | null) => void;
}
export type ComponentClassLike<T extends object> = React.ComponentClass<Partial<T>>;
export type ComponentTypeLike<T extends object> = React.ComponentType<Partial<T>>;
export type CellLike = ComponentClassLike<CellProps>;
export type FilterLike = ComponentTypeLike<FilterProps>;
export type SortLike = ComponentTypeLike<SortProps>;
export type ResizeLike = ComponentTypeLike<ResizeProps>;
export type RowLike = ComponentClassLike<RowProps>;
export type HeaderLike = ComponentTypeLike<HeaderProps>;
export type BodyLike = ComponentTypeLike<BodyProps>;
export type WrapperLike = ComponentClassLike<WrapperProps>;

export interface RowProps
    extends Pick<
            BodyProps,
            | 'prefix'
            | 'primaryKey'
            | 'columns'
            | 'pure'
            | 'locale'
            | 'rtl'
            | 'getCellProps'
            | 'cellRef'
            | 'expandedIndexSimulate'
            | 'tableEl'
            | 'colGroup'
        >,
        Omit<HTMLAttributesWeak, 'onClick' | 'onMouseEnter' | 'onMouseLeave'> {
    className?: string;
    rowIndex: number;
    __rowIndex: number;
    onClick: (record: RecordItem, rowIndex: number, e: React.MouseEvent) => void;
    onMouseEnter: (record: RecordItem, rowIndex: number, e: React.MouseEvent) => void;
    onMouseLeave: (record: RecordItem, rowIndex: number, e: React.MouseEvent) => void;
    Cell: CellLike;
    children: React.ReactNode;
    record: RecordItem;
    wrapper: (wrapper: React.ReactElement) => React.ReactNode;
}

export interface BodyProps
    extends Pick<
        TableProps,
        | 'loading'
        | 'emptyContent'
        | 'components'
        | 'prefix'
        | 'getCellProps'
        | 'primaryKey'
        | 'getRowProps'
        | 'dataSource'
        | 'onRowClick'
        | 'onRowMouseEnter'
        | 'onRowMouseLeave'
        | 'locale'
        | 'pure'
        | 'expandedIndexSimulate'
        | 'rtl'
        | 'crossline'
        | 'tableWidth'
    > {
    onBodyMouseOver: (e: React.MouseEvent) => void;
    onBodyMouseOut: (e: React.MouseEvent) => void;
    tableEl: HTMLElement | null;
    className?: string;
    component?: React.ElementType;
    colGroup?: React.ReactElement<HTMLTableColElement>;
    rowRef: (
        i: number | string,
        row?: InstanceType<RowLike> | null
    ) => InstanceType<RowLike> | undefined | null;
    cellRef: (
        __rowIndex: number,
        colIndex: number,
        cell: InstanceType<CellLike> | HTMLTableCellElement | null
    ) => void;
    children?: React.ReactNode;
    columns: (ColumnProps & InnerColumnProps)[];
}

export interface FixedBodyProps extends BodyProps {
    onLockScroll: (e: React.UIEvent) => void;
}

export interface FixedBodyContext {
    getNode: (type: string, node: HTMLElement) => void;
    onFixedScrollSync: (e: React.UIEvent) => void;
    maxBodyHeight: number | string;
    fixedHeader: boolean;
}

export interface LockBodyProps extends FixedBodyProps {}

export interface LockBodyContext extends FixedBodyContext {
    onLockScroll: (e: React.UIEvent) => void;
    getLockNode: (type: string, node: HTMLElement, lockType: LockBodyContext['lockType']) => void;
    lockType: 'left' | 'right';
    onLockBodyScroll: (e: React.UIEvent) => void;
}

export interface ListBodyProps extends BodyProps {}

export interface ListBodyContext {
    getNode: (type: string, node: HTMLElement) => void;
    onFixedScrollSync: (e: React.UIEvent) => void;
}

export interface VirtualBodyProps extends BodyProps {}

export interface WrapperProps extends Pick<TableProps, 'tableWidth' | 'prefix'> {
    colGroup: React.ReactElement<HTMLTableColElement>;
    component?: React.ElementType;
    children?: React.ReactNode;
}

export interface FixedWrapperProps extends Pick<TableProps, 'prefix'> {
    wrapperContent?: React.ReactNode;
}

export interface InnerColumnProps {
    __normalized?: CellProps['__normalized'];
    __colIndex?: number;
    cellStyle?: React.CSSProperties;
}

export interface ColumnProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 指定列对应的字段，支持`a.b`形式的快速取值
     */
    dataIndex?: string;

    /**
     * 行渲染的逻辑
     * value, rowIndex, record, context 四个属性只可读不可被更改
     * Function(value, index, record) =\> Element
     */
    cell?:
        | React.ReactNode
        | ((value: unknown, rowIndex: number, record: RecordItem) => React.ReactNode);

    /**
     * 表头显示的内容
     * value, rowIndex, record, context 四个属性只可读不可被更改
     */
    title?: React.ReactNode | (() => React.ReactNode);

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
    sortDirections?: Array<SortOrder>;
    /**
     * 单元格标题的对齐方式，不配置默认读取 align 值
     */
    alignHeader?: 'left' | 'center' | 'right';

    /**
     * 生成标题过滤的菜单，格式为`[{label:'xxx', value:'xxx'}]`
     */
    filters?: FilterItem[];

    /**
     * 过滤的模式是单选还是多选
     */
    filterMode?: 'single' | 'multiple';

    /**
     * 是否支持锁列，可选值为`left`,`right`, `true`
     */
    lock?: boolean | string;

    /**
     * 是否支持列宽调整，当该值设为 true，table 的布局方式会修改为 fixed.
     */
    resizable?: boolean;
    /**
     * 是否支持异步列宽调整，当该值设为 true，table 的布局方式会修改为 fixed.
     */
    asyncResizable?: boolean;

    /**
     * header cell 横跨的格数，设置为 0 表示不出现此 th
     */
    colSpan?: number;

    /**
     * 设置该列单元格的 word-break 样式，对于 id 类、中文类适合用 all，对于英文句子适合用 word
     */
    wordBreak?: 'all' | 'word';
    filterMenuProps?: MenuProps & { subMenuSelectable?: boolean };
    filterProps?: DropdownProps;
    locale?: TableProps['locale'];
    /**
     * @skip
     */
    headerCellRowIndex?: number;
    /**
     * @skip
     */
    headerCellColIndex?: number;
}

export type TableChildProps = ColumnProps | ColumnGroupProps | GroupHeaderProps | GroupFooterProps;

export type NormalizedColumnProps = Omit<
    ColumnProps & InnerColumnProps & ColumnGroupProps & GroupHeaderProps & GroupFooterProps,
    'title' | 'children'
> & {
    ref?: React.Ref<unknown>;
    children?: NormalizedColumnProps[];
    title?: ColumnProps['title'];
    key?: string;
};

export interface LockRowProps extends RowProps {}
export interface ExpandedRowProps extends LockRowProps {}

export interface SelectionRowProps extends ExpandedRowProps {}

export interface TreeRowProps extends SelectionRowProps {}

export interface ListRowContext {
    notRenderCellIndex: number[];
    lockType: 'left' | 'right';
    listHeader: GroupHeaderProps;
    listFooter: GroupFooterProps;
    rowSelection: TableProps['rowSelection'];
}

export interface TreeCellProps extends CellProps {
    locale?: TableProps['locale'];
}

export interface ColumnGroupProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 表头显示的内容
     */
    title?: React.ReactElement | (() => React.ReactNode);
    children?: React.ReactElement<ColumnProps> | Array<React.ReactElement<ColumnProps>>;
}

export interface GroupHeaderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 行渲染的逻辑
     */
    cell?: React.ReactNode | ((value: RecordItem, index: number) => React.ReactNode);

    /**
     * 是否在 Children 上面渲染 selection
     */
    hasChildrenSelection?: boolean;

    /**
     * 是否在 GroupHeader 上面渲染 selection
     */
    hasSelection?: boolean;

    /**
     * 当 dataSource 里没有 children 时，是否使用内容作为数据
     */
    useFirstLevelDataWhenNoChildren?: boolean;
}

export interface GroupFooterProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 行渲染的逻辑
     */
    cell?:
        | React.ReactElement
        | React.ReactNode
        | ((value: RecordItem, index: number) => React.ReactNode);
}

export interface BaseTableProps
    extends Pick<
        TableProps,
        | 'sort'
        | 'pure'
        | 'columns'
        | 'children'
        | 'filterParams'
        | 'emptyContent'
        | 'rtl'
        | 'sortIcons'
        | 'tableWidth'
        | 'components'
        | 'className'
        | 'style'
        | 'onSort'
        | 'onFilter'
        | 'onResizeChange'
        | 'scrollToRow'
        | 'loadingComponent'
        | 'tableLayout'
        | 'dataSource'
        | 'primaryKey'
        | 'prefix'
        | 'locale'
        | 'getRowProps'
    > {
    lockType?: 'left' | 'right';
    lengths: {
        left: number;
        right: number;
        origin: number;
    };
    wrapperContent?: WrapperProps['children'];
    entireDataSource: NonNullable<TableProps['dataSource']>;
}

export interface BaseTableState {
    sort: BaseTableProps['sort'];
}

export interface BaseTableContext {}

export interface TreeTableProps
    extends BaseTableProps,
        Pick<
            TableProps,
            'openRowKeys' | 'defaultOpenRowKeys' | 'indent' | 'isTree' | 'onRowOpen'
        > {}

export interface TreeTableState {
    openRowKeys?: TreeTableProps['openRowKeys'];
}

export interface FixedTableProps
    extends BaseTableProps,
        Pick<TableProps, 'fixedHeader' | 'maxBodyHeight' | 'loading' | 'hasHeader'> {}

export interface SelectionTableProps
    extends BaseTableProps,
        Pick<TableProps, 'rowSelection' | 'size'> {}

export interface SelectionTableState {
    selectedRowKeys: (string | number)[];
}

export interface ExpandedTableProps
    extends BaseTableProps,
        Pick<
            TableProps,
            | 'openRowKeys'
            | 'defaultOpenRowKeys'
            | 'expandedRowRender'
            | 'expandedIndexSimulate'
            | 'expandedRowIndent'
            | 'getExpandedColProps'
            | 'rowExpandable'
            | 'onRowOpen'
            | 'size'
            | 'hasExpandedRowCtrl'
            | 'onExpandedRowClick'
        > {}

export interface VirtualTableProps
    extends BaseTableProps,
        Pick<
            TableProps,
            | 'rowHeight'
            | 'useVirtual'
            | 'maxBodyHeight'
            | 'rowSelection'
            | 'keepForwardRenderRows'
            | 'onBodyScroll'
            | 'fixedHeader'
        > {}

export interface VirtualTableState {
    height: string | number | undefined;
    scrollToRow: number | undefined;
    hasVirtualData: boolean | undefined;
    useVirtual?: boolean;
    dataSource?: RecordItem[];
    rowHeight: VirtualTableProps['rowHeight'] | null;
}

export interface LockTableProps
    extends BaseTableProps,
        Pick<TableProps, 'scrollToCol' | 'hasHeader'> {}

export interface StickyLockTableProps extends BaseTableProps, Pick<TableProps, 'scrollToCol'> {}

export interface StickyLockTableState {
    leftOffsetArr?: number[];
    rightOffsetArr?: number[];
    hasLockLeft?: boolean;
    hasLockRight?: boolean;
}

export interface ListTableProps extends BaseTableProps, Pick<TableProps, 'rowSelection'> {}

export interface StickyTableProps
    extends BaseTableProps,
        Pick<
            TableProps,
            'offsetTop' | 'affixProps' | 'stickyHeader' | 'maxBodyHeight' | 'fixedHeader'
        > {}

export interface DeprecatedProps {
    /**
     * @deprecated use `openRowKeys` instead
     */
    expandedRowKeys?: TableProps['openRowKeys'];
    /**
     * @deprecated use `onRowOpen` instead
     */
    onExpandedChange?: TableProps['onRowOpen'];
    /**
     * @deprecated use `loading` instead
     */
    isLoading?: TableProps['loading'];
    /**
     * @deprecated use `indent` instead
     */
    indentSize?: TableProps['indent'];
    /**
     * @deprecated use `pure` instead
     */
    optimization?: TableProps['pure'];
    /**
     * @deprecated use `rowProps` instead
     */
    getRowClassName?: (...args: Parameters<NonNullable<TableProps['rowProps']>>) => string;
    /**
     * @deprecated use `rowProps` instead
     */
    getRowProps?: TableProps['rowProps'];
    /**
     * @deprecated use `cellProps` instead
     */
    getCellProps?: TableProps['cellProps'];
}

export interface TableProps
    extends React.HTMLAttributes<HTMLElement>,
        CommonProps,
        DeprecatedProps {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;

    /**
     * 尺寸 small 为紧凑模式
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
    columns?: Array<NormalizedColumnProps>;
    /**
     * 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局
     */
    tableLayout?: 'fixed' | 'auto';
    /**
     * 表格的总长度，可以这么用：设置表格总长度、设置部分列的宽度，这样表格会按照剩余空间大小，自动其他列分配宽度
     */
    tableWidth?: number;
    /**
     * 表格展示的数据源
     */
    dataSource?: Array<RecordItem>;

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
     * 设置数据为空的时候的表格内容展现
     */
    emptyContent?: React.ReactNode;

    /**
     * dataSource 当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
     */
    primaryKey?: string;
    /**
     * 点击表格每一行触发的事件
     */
    onRowClick?: (record: RecordItem, index: number, e: React.MouseEvent) => void;

    /**
     * 悬浮在表格每一行的时候触发的事件
     */
    onRowMouseEnter?: (record: RecordItem, index: number, e: React.MouseEvent) => void;

    /**
     * 离开表格每一行的时候触发的事件
     */
    onRowMouseLeave?: (record: RecordItem, index: number, e: React.MouseEvent) => void;

    /**
     * 点击列排序触发的事件
     */
    onSort?: (dataIndex: string, order: SortOrder, sort: { [key: string]: SortOrder }) => void;

    /**
     * 点击过滤确认按钮触发的事件
     */
    onFilter?: (filterParams: {
        [propName: string]: { selectedKeys: string[]; visible: boolean };
    }) => void;

    /**
     * 重设列尺寸的时候触发的事件
     */
    onResizeChange?: (dataIndex: string, value: number) => void;

    /**
     * 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。
     */
    rowProps?: (
        record: RecordItem,
        index: number
    ) => (Record<string, unknown> & Partial<RowProps>) | undefined | void;

    /**
     * 设置单元格的属性，通过该属性可以进行合并单元格
     */
    cellProps?: (
        rowIndex: number | string,
        colIndex: number | string,
        dataIndex: string,
        record: RecordItem
    ) =>
        | Partial<
              Omit<
                  CellProps,
                  | 'prefix'
                  | 'pure'
                  | 'primaryKey'
                  | 'record'
                  | 'value'
                  | 'colIndex'
                  | 'rowIndex'
                  | 'align'
                  | 'locale'
                  | 'rtl'
                  | 'width'
              >
          >
        | undefined
        | void;

    /**
     * 自定义 Loading 组件
     * 请务必传递 props, 使用方式：loadingComponent=\{props =\> \<Loading \{...props\}/\>\}
     */
    loadingComponent?: React.ElementType<{ [prop: string]: unknown; className?: string }>;

    /**
     * 当前过滤的的 keys，使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中，格式为 \{dataIndex: \{selectedKeys:[]\}\}
     * 示例：
     * 假设要控制 dataIndex 为 id 的列的过滤菜单中 key 为 one 的菜单项选中
     * `<Table filterParams={{id: {selectedKeys: ['one']}}}/>`
     */
    filterParams?: { [propName: string]: { selectedKeys?: string[]; visible?: boolean } };

    /**
     * 当前排序的字段，使用此属性可以控制表格的字段的排序，格式为\{dataIndex: 'asc'\}
     */
    sort?: { [key: string]: SortOrder };

    /**
     * 自定义排序按钮，例如上下排布的：`{desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />, asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />}`
     */
    sortIcons?: { desc?: React.ReactNode; asc?: React.ReactNode };

    /**
     * 额外渲染行的渲染函数
     */
    expandedRowRender?: (record: RecordItem, index: number) => React.ReactNode;
    rowExpandable?: (record: RecordItem, index: number) => boolean;

    /**
     * 额外渲染行的缩进，包含两个数字，第一个数字为左侧缩进，第二个数字为右侧缩进
     */
    expandedRowIndent?: [number, number];

    /**
     * 默认情况下展开的渲染行或者 Tree, 传入此属性为受控状态
     */
    openRowKeys?: Array<string | number | null>;
    defaultOpenRowKeys?: Array<string | number | null>;

    /**
     * 是否显示点击展开额外渲染行的 + 号按钮
     */
    hasExpandedRowCtrl?: boolean;

    /**
     * 设置额外渲染行的属性
     */
    getExpandedColProps?: (
        record: RecordItem,
        index: number
    ) => React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
        disabled?: boolean;
    };

    /**
     * 在额外渲染行或者 Tree 展开或者收起的时候触发的事件
     */
    onRowOpen?: (
        openRowKeys: Array<string | number | null>,
        currentRowKey: string | number,
        expanded: boolean,
        currentRecord: RecordItem
    ) => void;

    /**
     * 点击额外渲染行触发的事件
     */
    onExpandedRowClick?: (record: RecordItem, index: number, e: React.MouseEvent) => void;

    /**
     * 表头是否固定，该属性配合 maxBodyHeight 使用，当内容区域的高度超过 maxBodyHeight 的时候，在内容区域会出现滚动条
     */
    fixedHeader?: boolean;

    /**
     * 最大内容区域的高度，在`fixedHeader`为`true`的时候，超过这个高度会出现滚动条
     */
    maxBodyHeight?: number | string;

    /**
     * 是否启用选择模式
     */
    rowSelection?: {
        getProps?: (record: RecordItem, index: number) => CheckboxProps | RadioProps;
        onChange?: (selectedRowKeys: Array<string | number>, records: Array<RecordItem>) => void;
        onSelect?: (selected: boolean, record: RecordItem, records: RecordItem[]) => void;
        onSelectAll?: (selected: boolean, records: RecordItem[]) => void;
        selectedRowKeys?: Array<string | number>;
        mode?: 'single' | 'multiple';
        titleProps?: () => CheckboxProps;
        columnProps?: () => Partial<ColumnProps>;
        titleAddons?: () => React.ReactNode;
    } | null;

    /**
     * 表头是否是 sticky
     */
    stickyHeader?: boolean;

    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop?: number;

    /**
     * affix 组件的的属性
     */
    affixProps?: AffixProps;

    /**
     * 在 tree 模式下的缩进尺寸，仅在 isTree 为 true 时候有效
     */
    indent?: number;

    /**
     * 开启 Table 的 tree 模式，接收的数据格式中包含 children 则渲染成 tree table
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
     *滚动到指定列
     */
    scrollToCol?: number;

    /**
     * 设置行高
     */
    rowHeight?: number | (() => number);

    /**
     * 在内容区域滚动的时候触发的函数
     */
    onBodyScroll?: (start: number) => void;

    /**
     * 开启时，getExpandedColProps() / getRowProps() / expandedRowRender() 的第二个参数 index (该行所对应的序列) 将按照 01,2,3,4...的顺序返回，否则返回真实 index(0,2,4,6... / 1,3,5,7...)
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
    /**
     * 自定义国际化文案对象
     * @skip
     */
    locale?: Locale['Table'];
    components?: {
        Cell?: CellLike;
        Filter?: FilterLike;
        Sort?: SortLike;
        Resize?: ResizeLike;
        Row?: RowLike;
        Header?: HeaderLike;
        Wrapper?: WrapperLike;
        Body?: BodyLike;
    };
    pure?: boolean;
    children?: React.ReactNode;
}
