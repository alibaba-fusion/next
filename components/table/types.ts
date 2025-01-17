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
/**
 * @api
 */
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

/**
 * @api
 */
export type SortOrder = 'desc' | 'asc' | 'default';

export interface SortProps
    extends Pick<ColumnProps, 'locale' | 'rtl' | 'sortDirections' | 'prefix'> {
    sort?: TableProps['sort'];
    sortIcons?: TableProps['sortIcons'];
    className?: string;
    dataIndex: ColumnProps['dataIndex'];
    onSort: NonNullable<TableProps['onSort']>;
}

/**
 * @api CellProps
 */
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

/**
 * @api RowProps
 */
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

/**
 * @api Table.Column
 * @order 1
 */
export interface ColumnProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 指定列对应的字段，支持`a.b`形式的快速取值
     * @en Specifies the field corresponding to the column, supporting `a.b` quick retrieval
     */
    dataIndex?: string;

    /**
     * 行渲染的逻辑
     * @en Row rendering logic
     */
    cell?:
        | React.ReactNode
        | ((value: unknown, rowIndex: number, record: RecordItem) => React.ReactNode);

    /**
     * 表头显示的内容
     * @en The content displayed in the header
     */
    title?: React.ReactNode | (() => React.ReactNode);

    /**
     * 写到 header 单元格上的 title 属性
     * @en The title attribute written to the header cell
     */
    htmlTitle?: string;

    /**
     * 是否支持排序
     * @en Whether to support sorting
     */
    sortable?: boolean;

    /**
     * 列宽，注意在锁列的情况下一定需要配置宽度
     * @en Column width, note that the width must be configured in the lock column
     */
    width?: number | string;

    /**
     * 单元格的对齐方式
     * @en The alignment of the cell
     */
    align?: 'left' | 'center' | 'right';

    /**
     * 排序的方向。设置 ['desc', 'asc']，表示降序、升序。设置 ['desc', 'asc', 'default']，表示表示降序、升序、不排序
     * @en The direction of sorting. Set ['desc', 'asc'] to indicate descending and ascending. Set ['desc', 'asc', 'default'] to indicate descending, ascending, and not sorting
     * @version 1.23
     */
    sortDirections?: Array<SortOrder>;

    /**
     * 标题单元格的对齐方式，如果不配置，默认读取 align 值
     * @en The alignment of the title cell, if not configured, the default value is read from align
     */
    alignHeader?: 'left' | 'center' | 'right';

    /**
     * 生成标题过滤的菜单，格式为`[{label:'xxx', value:'xxx'}]`
     * @en Generate the menu for title filtering, the format is `[{label: 'xxx', value: 'xxx'}]`
     */
    filters?: FilterItem[];

    /**
     * 过滤的模式是单选还是多选
     * @en The mode of filtering is single or multiple
     * @defaultValue 'multiple'
     */
    filterMode?: 'single' | 'multiple';

    /**
     * 是否支持锁列，可选值为`left`,`right`, `true`
     * @en Whether to support locking, the value can be `left`, `right`, `true`
     */
    lock?: boolean | 'left' | 'right';

    /**
     * 是否支持列宽调整，当该值设为 true，table 的布局方式会修改为 fixed.
     * @en Whether to support column width adjustment, when this value is set to true, the layout of table will be modified to fixed.
     * @defaultValue false
     */
    resizable?: boolean;
    /**
     * （推荐使用）是否支持异步列宽调整，当该值设为 true，table 的布局方式会修改为 fixed.
     * @en (Recommended) Whether to support asynchronous column width adjustment, when this value is set to true, the layout of table will be modified to fixed.
     * @defaultValue false
     * @version 1.24
     */
    asyncResizable?: boolean;

    /**
     * header cell 横跨的格数，设置为 0 表示不出现此 th
     * @en The number of cells that the header cell spans, set to 0 to not appear this th
     */
    colSpan?: number;

    /**
     * 设置该列单元格的 word-break 样式，对于 id 类、中文类适合用 all，对于英文句子适合用 word
     * @en Set the word-break style of the column cell, for id class and Chinese class, it is recommended to use all, for English sentences, it is recommended to use word
     * @version 1.23
     */
    wordBreak?: 'all' | 'word';
    /**
     * filter 模式下传递给 Menu 菜单的属性，默认继承 `Menu` 组件的 API
     * @en The properties passed to the Menu menu in the filter mode, the default inherits the API of the Menu component
     * @defaultValue \{ subMenuSelectable: false \}
     */
    filterMenuProps?: MenuProps & { subMenuSelectable?: boolean };
    /**
     * 传递给 Filter 的下拉组件的属性
     * @en The properties passed to the Filter Dropdown component
     */
    filterProps?: DropdownProps;
    /**
     * @skip
     */
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

/**
 * @api Table.ColumnGroup
 * @order 2
 */
export interface ColumnGroupProps {
    /**
     * 表头显示的内容
     * @en The content displayed in the header
     */
    title?: React.ReactNode | (() => React.ReactNode);
    /**
     * @skip
     */
    children?:
        | React.ReactElement<ColumnProps | ColumnGroupProps>
        | Array<React.ReactElement<ColumnProps | ColumnGroupProps>>;
}

/**
 * @api Table.GroupHeader
 * @order 3
 */
export interface GroupHeaderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 行渲染的逻辑
     * @en Row rendering logic
     */
    cell?: React.ReactNode | ((value: RecordItem, index: number) => React.ReactNode);

    /**
     * 是否在 Children 上面渲染 selection
     * @en Whether to render selection on Children
     * @defaultValue false
     */
    hasChildrenSelection?: boolean;

    /**
     * 是否在 GroupHeader 上面渲染 selection
     * @en Whether to render selection on GroupHeader
     * @defaultValue true
     */
    hasSelection?: boolean;

    /**
     * 当 dataSource 里没有 children 时，是否使用内容作为数据
     * @en When there is no children in dataSource, whether to use content as data
     * @defaultValue false
     */
    useFirstLevelDataWhenNoChildren?: boolean;
}

/**
 * @api Table.GroupFooter
 * @order 4
 */
export interface GroupFooterProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 行渲染的逻辑
     * @en Row rendering logic
     */
    cell?: React.ReactNode | ((value: RecordItem, index: number) => React.ReactNode);
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

/**
 * @api
 */
export interface RowSelection {
    /**
     * 获取 selection 的默认属性
     * @en Get the default properties of the selection
     */
    getProps?: (record: RecordItem, index: number) => CheckboxProps | RadioProps;
    /**
     * 选择改变的时候触发的事件，**注意:** 其中 records 只会包含当前 dataSource 的数据，很可能会小于 selectedRowKeys 的长度。
     * @en The event triggered when the selection changes. **Note:** records will only contain the data in the dataSource, and it may be less than the length of selectedRowKeys.
     */
    onChange?: (selectedRowKeys: Array<string | number>, records: Array<RecordItem>) => void;
    /**
     * 用户手动选择/取消选择某行的回调
     * @en The callback when the selection changes
     */
    onSelect?: (selected: boolean, record: RecordItem, records: RecordItem[]) => void;
    /**
     * 用户手动选择/取消选择所有行的回调
     * @en The callback when the select all button is clicked
     */
    onSelectAll?: (selected: boolean, records: RecordItem[]) => void;
    /**
     * 设置了此属性，将 rowSelection 变为受控状态，接收值为该行数据的 primaryKey 的值
     * @en Set the rowSelection to be controlled, the value is the primaryKey value of the row
     */
    selectedRowKeys?: Array<string | number>;
    /**
     * 选择 selection 的模式
     * @en The mode of the selection
     * @defaultValue 'multiple'
     */
    mode?: 'single' | 'multiple';
    /**
     * 选择列表头的 props，仅在 `multiple` 模式下生效
     * @en The props of the selection header, only effective in `multiple` mode
     */
    titleProps?: () => CheckboxProps;
    /**
     * 选择列的 props，例如锁列、对齐等，可使用 `Table.Column` 的所有参数
     * @en The props of the selection column, such as lock, alignment, etc., you can use all parameters of Table.Column
     */
    columnProps?: () => Partial<ColumnProps>;
    /**
     * 选择列表头添加的元素，在`single` `multiple` 下都生效
     * @en The elements added to the selection header, effective in `single` and `multiple`
     */
    titleAddons?: () => React.ReactNode;
}

/**
 * @api Table
 * @order 0
 */
export interface TableProps
    extends React.HTMLAttributes<HTMLElement>,
        CommonProps,
        DeprecatedProps {
    /**
     * 尺寸，small 为紧凑模式
     * @en size of table, small is compact mode
     */
    size?: 'small' | 'medium';

    /**
     * 自定义类名
     * @en custom class name
     */
    className?: string;

    /**
     * 自定义内联样式
     * @en custom inline style
     */
    style?: React.CSSProperties;
    /**
     * 等同于写子组件 Table.Column，子组件优先级更高
     * @en equivalent to writing child components Table.Column, child components have higher priority
     */
    columns?: Array<NormalizedColumnProps>;
    /**
     * 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局
     * @en the table-layout attribute of the table element, set to fixed means that the content does not affect the layout of the column
     */
    tableLayout?: 'fixed' | 'auto';
    /**
     * 表格的总长度，可以这么用：设置表格总长度、设置部分列的宽度，这样表格会按照剩余空间大小，自动其他列分配宽度
     * @en the total length of the table, you can use it like this: set the total length of the table, set the width of some columns, and then the table will automatically allocate the width of the remaining space
     */
    tableWidth?: number;
    /**
     * 表格展示的数据源
     * @en the data source of the table
     */
    dataSource?: Array<RecordItem>;

    /**
     * 表格是否具有边框
     * @en whether the table has borders
     * @defaultValue true
     */
    hasBorder?: boolean;

    /**
     * 表格是否具有头部
     * @en whether the table has a header
     * @defaultValue true
     */
    hasHeader?: boolean;

    /**
     * 表格是否是斑马线
     * @en whether the table is zebra
     * @defaultValue false
     */
    isZebra?: boolean;

    /**
     * 表格是否在加载中
     * @en whether the table is loading
     * @defaultValue false
     */
    loading?: boolean;

    /**
     * 设置数据为空的时候的表格内容展现
     * @en the content to be displayed when the data is empty
     */
    emptyContent?: React.ReactNode;

    /**
     * dataSource 中的主键，如果给定的数据源中的属性不包含该主键，会造成所有行全部选中等一系列问题
     * @en the primary key in the data source, if the property in the given data source does not contain the primary key, it will cause all rows to be selected, etc.
     * @defaultValue 'id'
     */
    primaryKey?: string;
    /**
     * 点击表格每一行触发的事件
     * @en the event on clicking on a table row
     */
    onRowClick?: (record: RecordItem, index: number, e: React.MouseEvent) => void;

    /**
     * 悬浮在表格每一行的时候触发的事件
     * @en the event on hovering on a table row
     */
    onRowMouseEnter?: (record: RecordItem, index: number, e: React.MouseEvent) => void;

    /**
     * 离开表格每一行的时候触发的事件
     * @en the event on leaving a table row
     */
    onRowMouseLeave?: (record: RecordItem, index: number, e: React.MouseEvent) => void;

    /**
     * 点击列排序触发的事件
     * @en the event on clicking on a column sort
     */
    onSort?: (dataIndex: string, order: SortOrder, sort: { [key: string]: SortOrder }) => void;

    /**
     * 点击过滤确认按钮触发的事件
     * @en the event on clicking on the filter confirm button
     */
    onFilter?: (filterParams: {
        [propName: string]: { selectedKeys: string[]; visible: boolean };
    }) => void;

    /**
     * 重设列尺寸的时候触发的事件
     * @en the event on resizing the column
     */
    onResizeChange?: (dataIndex: string, value: number) => void;

    /**
     * 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。
     * @en set the props of each row, if the return value conflicts with other attributes for row operations, it will be invalid.
     */
    rowProps?: (
        record: RecordItem,
        index: number
    ) => (Record<string, unknown> & Partial<RowProps>) | undefined | void;

    /**
     * 设置单元格的属性，通过该属性可以进行合并单元格
     * @en set the props of each cell, you can use this property to merge cells
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
     * @en custom loading component
     * @remarks 请务必传递 props, 使用方式：loadingComponent=\{props =\> \<Loading \{...props\}/\>\}
     * -
     * please pass props, usage: loadingComponent=\{props =\> \<Loading \{...props\} /\>\}
     */
    loadingComponent?: React.ElementType<{ [prop: string]: unknown; className?: string }>;

    /**
     * 当前过滤的 keys，使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中，格式为 \{dataIndex: \{selectedKeys:[]\}\}
     * @en the current filtered keys, using this property can control which menu in the filter menu of the table's header is selected, the format is \{dataIndex: \{selectedKeys: []\}\}
     * @remarks
     * 示例：
     * 假设要控制 dataIndex 为 id 的列的过滤菜单中 key 为 one 的菜单项选中
     * `<Table filterParams={{id: {selectedKeys: ['one']}}}/>`
     * -
     * Example:
     * Assume you want to control the menu item with key 'one' in the filter menu of the dataIndex column
     * `<Table filterParams={{id: {selectedKeys: ['one']}}}/>`
     */
    filterParams?: { [propName: string]: { selectedKeys?: string[]; visible?: boolean } };

    /**
     * 当前排序的字段，使用此属性可以控制表格的字段的排序，格式为\{dataIndex: 'asc'\}
     * @en the current sorted field, using this property can control the sorting of the table's fields, the format is \{dataIndex: 'asc'\}
     */
    sort?: { [key: string]: SortOrder };

    /**
     * 自定义排序按钮，例如上下排布的：`{desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />, asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />}`
     * @en custom sort button, for example: `{desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />, asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />}`
     */
    sortIcons?: { desc?: React.ReactNode; asc?: React.ReactNode };

    /**
     * 额外渲染行的渲染函数
     * @en render function for extra rows
     */
    expandedRowRender?: (record: RecordItem, index: number) => React.ReactNode;

    /**
     * 设置行是否可展开，设置 false 为不可展开
     * @en set whether the row is expandable, set false to disable expansion
     */
    rowExpandable?: (record: RecordItem, index: number) => boolean;

    /**
     * 额外渲染行的缩进，包含两个数字，第一个数字为左侧缩进，第二个数字为右侧缩进
     * @en the indent of extra rows, contains two numbers, the first number is the left indent, the second number is the right indent
     * @defaultValue stickyLock ? [0, 0] : [1, 0]
     */
    expandedRowIndent?: [number, number];

    /**
     * 展开的行，传入后展开状态只受此属性控制
     * @en expanded row, after passing, the expanded state is only controlled by this property.
     */
    openRowKeys?: Array<string | number | null>;
    /**
     * 默认展开的行
     * @en the default expanded row
     * @version 1.23.22
     */
    defaultOpenRowKeys?: Array<string | number | null>;

    /**
     * 是否显示点击展开额外渲染行的 + 号按钮
     * @en whether to show the + button to expand the extra row
     * @defaultValue true
     */
    hasExpandedRowCtrl?: boolean;

    /**
     * 设置额外的列属性
     * @en set the props of extra rows
     */
    getExpandedColProps?: (
        record: RecordItem,
        index: number
    ) => React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
        disabled?: boolean;
    };

    /**
     * 在额外渲染行或者树展开或者收起的时候触发的事件
     * @en the event on expanding or collapsing the extra row or tree
     */
    onRowOpen?: (
        openRowKeys: Array<string | number | null>,
        currentRowKey: string | number,
        expanded: boolean,
        currentRecord: RecordItem
    ) => void;

    /**
     * 点击额外渲染行触发的事件
     * @en the event on clicking on the extra row
     */
    onExpandedRowClick?: (record: RecordItem, index: number, e: React.MouseEvent) => void;

    /**
     * 表头是否固定，该属性配合 maxBodyHeight 使用，当内容区域的高度超过 maxBodyHeight 的时候，在内容区域会出现滚动条
     * @en whether the header is fixed, this property is combined with maxBodyHeight, when the content area's height exceeds maxBodyHeight, a scroll bar will appear in the content area
     * @defaultValue false
     */
    fixedHeader?: boolean;

    /**
     * 最大内容区域的高度，在`fixedHeader`为`true`的时候，超过这个高度会出现滚动条
     * @en the maximum height of the content area, when `fixedHeader` is `true`, a scroll bar will appear when the height of the content area exceeds this height
     * @defaultValue 200
     */
    maxBodyHeight?: number | string;

    /**
     * 是否启用选择模式
     * @en whether to enable selection mode
     */
    rowSelection?: RowSelection | null;

    /**
     * 表头是否是 sticky
     * @en whether the header is sticky
     */
    stickyHeader?: boolean;

    /**
     * 表头在距离窗口顶部达到此属性指定的偏移量后触发 sticky，仅在 stickyHeader 为 true 的时候有效
     * @en the header triggers sticky after the distance from the top of the window reaches this property, only valid when stickyHeader is true
     */
    offsetTop?: number;

    /**
     * Affix 组件的的属性，stickyHeader 基于 Affix 组件实现。
     * @en the props of affix component, stickyHeader is based on Affix component.
     */
    affixProps?: AffixProps;

    /**
     * 在 tree 模式下的缩进尺寸，仅在 isTree 为 true 时候有效
     * @en the indent size of tree mode, only valid when isTree is true
     * @defaultValue 12
     */
    indent?: number;

    /**
     * 开启 Table 的 tree 模式，接收的数据格式中包含 children 则渲染成 tree table
     * @en enable tree mode of table, the data format received contains children and is rendered as tree table
     */
    isTree?: boolean;

    /**
     * 是否开启虚拟滚动
     * @en enable virtual scroll
     */
    useVirtual?: boolean;

    /**
     * 滚动到指定行
     * @en scroll to specified row
     * @version 1.22.15
     */
    scrollToRow?: number;

    /**
     *滚动到指定列
     @en scroll to specified column
     */
    scrollToCol?: number;

    /**
     * 设置行高
     * @en set the row height
     */
    rowHeight?: number | (() => number);

    /**
     * 在内容区域滚动的时候触发的函数
     * @en the function triggered when the content area is scrolled
     */
    onBodyScroll?: (start: number) => void;

    /**
     * 开启时，getExpandedColProps() / getRowProps() / expandedRowRender() 的第二个参数 index (该行所对应的序列) 将按照 0,1,2,3,4...的顺序返回，否则返回真实 index(0,2,4,6... / 1,3,5,7...)
     * @en when enabled, the second parameter of getExpandedColProps() / getRowProps() / expandedRowRender() will return 0,1,2,3,4... in order, otherwise return the real index (0,2,4,6... / 1,3,5,7...)
     * @defaultValue false
     */
    expandedIndexSimulate?: boolean;
    /**
     * 在 hover 时出现十字参考轴，适用于表头比较复杂，需要做表头分类的场景。
     * @en when hover, a cross reference axis appears, suitable for complex table headers that need to do header classification.
     * @defaultValue false
     */
    crossline?: boolean;

    /**
     * 虚拟滚动时向前保留渲染的行数
     * @en the number of rows to be preserved when virtual scrolling
     * @defaultValue 10
     */
    keepForwardRenderRows?: number;
    /**
     * 自定义国际化文案对象
     * @skip
     */
    locale?: Locale['Table'];
    /**
     * 自定义组件，高级用法，用于替换 Table 内部的组件
     * @en custom components, advanced usage, used to replace components inside the table
     */
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
    /**
     * @skip
     */
    children?: React.ReactNode;
}
