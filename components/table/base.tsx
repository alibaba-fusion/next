import React, { type MouseEvent, type ReactElement, type Ref } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import shallowElementEquals from 'shallow-element-equals';
import { polyfill } from 'react-lifecycles-compat';
import Loading from '../loading';
import ConfigProvider from '../config-provider';
import zhCN from '../locale/zh-cn';
import { log, obj, dom, type ClassPropsWithDefault } from '../util';
import BodyComponent from './base/body';
import HeaderComponent from './base/header';
import WrapperComponent from './base/wrapper';
import RowComponent from './base/row';
import CellComponent from './base/cell';
import FilterComponent from './base/filter';
import SortComponent from './base/sort';
import Column from './column';
import ColumnGroup from './column-group';
import type {
    BaseTableContext,
    BaseTableProps,
    BaseTableState,
    BodyProps,
    CellLike,
    ColumnProps,
    HeaderProps,
    NormalizedColumnProps,
    RowLike,
    TableChildProps,
    WrapperLike,
} from './types';
import type Affix from '../affix';

const Children = React.Children,
    noop = () => {};

//<Table>
//    <Table.Column/>
//    <Table.ColumnGroup>
//      <Table.Column/>
//      <Table.Column/>
//    </Table.ColumnGroup>
//</Table>

type InnerBaseTableProps = ClassPropsWithDefault<BaseTableProps, typeof Table.defaultProps>;

/** Table */
class Table extends React.Component<BaseTableProps, BaseTableState> {
    static Column = Column;
    static ColumnGroup = ColumnGroup;
    static Header = HeaderComponent;
    static Body = BodyComponent;
    static Wrapper = WrapperComponent;
    static Row = RowComponent;
    static Cell = CellComponent;
    static Filter = FilterComponent;
    static Sort = SortComponent;

    static propTypes = {
        ...ConfigProvider.propTypes,
        /**
         * 样式类名的品牌前缀
         */
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        /**
         * 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局
         */
        tableLayout: PropTypes.oneOf(['fixed', 'auto']),
        /**
         * 表格的总长度，可以这么用：设置表格总长度、设置部分列的宽度，这样表格会按照剩余空间大小，自动其他列分配宽度
         */
        tableWidth: PropTypes.number,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 自定义内联样式
         */
        style: PropTypes.object,
        /**
         * 尺寸 small 为紧凑模式
         */
        size: PropTypes.oneOf(['small', 'medium']),
        /**
         * 表格展示的数据源
         */
        dataSource: PropTypes.array,
        entireDataSource: PropTypes.array,
        /**
         * 点击表格每一行触发的事件
         * @param record - 该行所对应的数据
         * @param index - 该行所对应的序列
         * @param e - DOM 事件对象
         */
        onRowClick: PropTypes.func,
        /**
         * 悬浮在表格每一行的时候触发的事件
         * @param record - 该行所对应的数据
         * @param index - 该行所对应的序列
         * @param e - DOM 事件对象
         */
        onRowMouseEnter: PropTypes.func,
        /**
         * 离开表格每一行的时候触发的事件
         * @param record - 该行所对应的数据
         * @param index - 该行所对应的序列
         * @param e - DOM 事件对象
         */
        onRowMouseLeave: PropTypes.func,
        /**
         * 点击列排序触发的事件
         * @param dataIndex - 指定的排序的字段
         * @param order - 排序对应的顺序，有`desc`和`asc`两种
         */
        onSort: PropTypes.func,
        /**
         * 点击过滤确认按钮触发的事件
         * @param filterParams - 过滤的字段信息
         */
        onFilter: PropTypes.func,
        /**
         * 重设列尺寸的时候触发的事件
         * @param dataIndex - 指定重设的字段
         * @param value - 列宽变动的数值
         */
        onResizeChange: PropTypes.func,
        /**
         * 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。
         * @param record - 该行所对应的数据
         * @param index - 该行所对应的序列
         * @returns 需要设置的行属性
         */
        rowProps: PropTypes.func,
        /**
         * 设置单元格的属性，通过该属性可以进行合并单元格
         * @param rowIndex - 该行所对应的序列
         * @param colIndex - 该列所对应的序列
         * @param dataIndex - 该列所对应的字段名称
         * @param record - 该行对应的记录
         * @returns 返回 td 元素的所支持的属性对象
         */
        cellProps: PropTypes.func,
        /**
         * 虚拟滚动时向前保留渲染的行数
         */
        keepForwardRenderRows: PropTypes.number,
        /**
         * 表格是否具有边框
         */
        hasBorder: PropTypes.bool,
        /**
         * 表格是否具有头部
         */
        hasHeader: PropTypes.bool,
        /**
         * 表格是否是斑马线
         */
        isZebra: PropTypes.bool,
        /**
         * 表格是否在加载中
         */
        loading: PropTypes.bool,
        /**
         * 自定义 Loading 组件
         * 请务必传递 props, 使用方式：loadingComponent=\{props =\> \<Loading \{...props\}/\>\}
         * @param props - 需要透传给组件的参数
         * @returns 展示的组件
         */
        loadingComponent: PropTypes.func,
        /**
         * 当前过滤的的 keys，使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中，格式为 \{dataIndex: \{selectedKeys:[]\}\}
         * 示例：
         * 假设要控制 dataIndex 为 id 的列的过滤菜单中 key 为 one 的菜单项选中
         * `<Table filterParams={{id: {selectedKeys: ['one']}}}/>`
         */
        filterParams: PropTypes.object,
        /**
         * 当前排序的字段，使用此属性可以控制表格的字段的排序，格式为\{[dataIndex]: 'asc' | 'desc' \} , 例如  \{id: 'desc'\}
         */
        sort: PropTypes.object,
        /**
         * 自定义排序按钮，例如上下排布的：`{desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />, asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />}`
         */
        sortIcons: PropTypes.object,
        /**
         * 自定义国际化文案对象
         * ok 过滤器中确认按钮文案
         * reset 过滤器中重置按钮文案
         * empty 没有数据情况下 table 内的文案
         * asc 排序升序状态下的文案
         * desc 排序将序状态下的文案
         * expanded 可折叠行，展开状态下的文案
         * folded 可折叠行，折叠状态下的文案
         * filter 过滤器文案
         * selectAll header 里全选的按钮文案
         */
        locale: PropTypes.object,
        components: PropTypes.object,
        /**
         * 等同于写子组件 Table.Column，子组件优先级更高
         */
        columns: PropTypes.array,
        /**
         * 设置数据为空的时候的表格内容展现
         */
        emptyContent: PropTypes.node,
        /**
         * dataSource 当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
         */
        primaryKey: PropTypes.oneOfType([PropTypes.symbol, PropTypes.string]),
        lockType: PropTypes.oneOf(['left', 'right']),
        wrapperContent: PropTypes.any,
        refs: PropTypes.object,
        /**
         * 额外渲染行的渲染函数
         * @param record - 该行所对应的数据
         * @param index - 该行所对应的序列
         * @returns 渲染内容
         */
        expandedRowRender: PropTypes.func,
        /**
         * 设置行是否可展开，设置 false 为不可展开
         * @param record - 该行所对应的数据
         * @param index - 该行所对应的序列
         * @returns 是否可展开
         */
        rowExpandable: PropTypes.func,
        /**
         * 额外渲染行的缩进，是个二维数组 (eg:[1,1]) 分别表示左右两边的缩进
         */
        expandedRowIndent: PropTypes.array,
        /**
         * 是否显示点击展开额外渲染行的 + 号按钮
         */
        hasExpandedRowCtrl: PropTypes.bool,
        /**
         * 设置额外渲染行的属性
         * @param record - 该行所对应的数据
         * @param index - 该行所对应的序列
         * @returns 额外渲染行的属性
         */
        getExpandedColProps: PropTypes.func,
        /**
         * 当前展开的 Expand 行 或者 Tree 行 , 传入此属性为受控状态，一般配合 onRowOpen 使用
         */
        openRowKeys: PropTypes.array,
        /**
         * 默认情况下展开的 Expand 行 或者 Tree 行，非受控模式
         * @version 1.23.22
         */
        defaultOpenRowKeys: PropTypes.array,
        /**
         * 在 Expand 行 或者 Tree 行 展开或者收起的时候触发的事件
         * @param openRowKeys - 展开的渲染行的 key
         * @param currentRowKey - 当前点击的渲染行的 key
         * @param expanded - 当前点击是展开还是收起
         * @param currentRecord - 当前点击额外渲染行的记录
         */
        onRowOpen: PropTypes.func,
        onExpandedRowClick: PropTypes.func,
        /**
         * 表头是否固定，该属性配合 maxBodyHeight 使用，当内容区域的高度超过 maxBodyHeight 的时候，在内容区域会出现滚动条
         */
        fixedHeader: PropTypes.bool,
        /**
         * 最大内容区域的高度，在`fixedHeader`为`true`的时候，超过这个高度会出现滚动条
         */
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 是否启用选择模式
         * getProps `Function(record, index)=>Object` 获取 selection 的默认属性
         * onChange `Function(selectedRowKeys:Array, records:Array)` 选择改变的时候触发的事件，**注意:** 其中 records 只会包含当前 dataSource 的数据，很可能会小于 selectedRowKeys 的长度。
         * onSelect `Function(selected:Boolean, record:Object, records:Array)` 用户手动选择/取消选择某行的回调
         * onSelectAll `Function(selected:Boolean, records:Array)` 用户手动选择/取消选择所有行的回调
         * selectedRowKeys 设置了此属性，将 rowSelection 变为受控状态，接收值为该行数据的 primaryKey 的值
         * mode 选择 selection 的模式，可选值为`single`, `multiple`，默认为`multiple`
         * columnProps `Function()=>Object` 选择列 的 props，例如锁列、对齐等，可使用`Table.Column` 的所有参数
         * titleProps `Function()=>Object` 选择列 表头的 props，仅在 `multiple` 模式下生效
         * titleAddons `Function()=>Node` 选择列 表头添加的元素，在`single` `multiple` 下都生效
         */
        rowSelection: PropTypes.object,
        /**
         * 表头是否是 sticky
         */
        stickyHeader: PropTypes.bool,
        /**
         * 距离窗口顶部达到指定偏移量后触发
         */
        offsetTop: PropTypes.number,
        /**
         * affix 组件的的属性
         */
        affixProps: PropTypes.object,
        /**
         * 在 tree 模式下的缩进尺寸，仅在 isTree 为 true 时候有效
         */
        indent: PropTypes.number,
        /**
         * 开启 Table 的 tree 模式，接收的数据格式中包含 children 则渲染成 tree table
         */
        isTree: PropTypes.bool,
        /**
         * 是否开启虚拟滚动
         */
        useVirtual: PropTypes.bool,
        rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
        /**
         * 滚动到第几行，需要保证行高相同。1.22.15 版本之前仅在虚拟滚动场景下生效，之后在所有情况下生效
         * @version 1.22.15
         */
        scrollToRow: PropTypes.number,
        /**
         * 在内容区域滚动的时候触发的函数
         */
        onBodyScroll: PropTypes.func,
        /**
         * 开启时，getExpandedColProps() / rowProps() / expandedRowRender() 的第二个参数 index (该行所对应的序列) 将按照 01,2,3,4...的顺序返回，否则返回真实 index(0,2,4,6... / 1,3,5,7...)
         */
        expandedIndexSimulate: PropTypes.bool,
        /**
         * 在 hover 时出现十字参考轴，适用于表头比较复杂，需要做表头分类的场景。
         */
        crossline: PropTypes.bool,
        lengths: PropTypes.object,
    };

    static defaultProps = {
        dataSource: [],
        onRowClick: noop,
        onRowMouseEnter: noop,
        onRowMouseLeave: noop,
        onSort: noop,
        onFilter: noop,
        onResizeChange: noop,
        size: 'medium',
        rowProps: noop,
        cellProps: noop,
        prefix: 'next-',
        hasBorder: true,
        keepForwardRenderRows: 10,
        hasHeader: true,
        isZebra: false,
        loading: false,
        expandedIndexSimulate: false,
        primaryKey: 'id',
        components: {},
        locale: zhCN.Table,
        crossline: false,
    };

    static childContextTypes = {
        notRenderCellIndex: PropTypes.array,
        lockType: PropTypes.oneOf(['left', 'right']),
    };

    static contextTypes = {
        getTableInstance: PropTypes.func,
        getTableInstanceForFixed: PropTypes.func,
        getTableInstanceForVirtual: PropTypes.func,
        getTableInstanceForExpand: PropTypes.func,
    };

    readonly props: InnerBaseTableProps;
    notRenderCellIndex: number[];
    groupChildren: ColumnProps[][];
    flatChildren: ColumnProps[];
    wrapper: InstanceType<WrapperLike> | null;
    resizeProxyDomRef: HTMLDivElement | null;
    tableEl: HTMLElement | null;
    affixRef: InstanceType<typeof Affix> | null;
    colIndex: number;
    rowIndex: number;

    constructor(props: BaseTableProps, context: BaseTableContext) {
        super(props, context);
        const {
            getTableInstance,
            getTableInstanceForVirtual,
            getTableInstanceForFixed,
            getTableInstanceForExpand,
        } = this.context;
        getTableInstance && getTableInstance(props.lockType, this);
        getTableInstanceForFixed && getTableInstanceForFixed(props.lockType, this);
        getTableInstanceForVirtual && getTableInstanceForVirtual(props.lockType, this);
        getTableInstanceForExpand && getTableInstanceForExpand(this);
        this.notRenderCellIndex = [];
    }

    state: BaseTableState = {
        sort: this.props.sort || {},
    };

    getChildContext() {
        return {
            notRenderCellIndex: this.notRenderCellIndex || [],
            lockType: this.props.lockType,
        };
    }

    static getDerivedStateFromProps(nextProps: InnerBaseTableProps) {
        const state: Partial<BaseTableState> = {};

        if (typeof nextProps.sort !== 'undefined') {
            state.sort = nextProps.sort;
        }

        return state;
    }

    componentDidMount() {
        this.notRenderCellIndex = [];
    }

    shouldComponentUpdate(
        nextProps: BaseTableProps,
        nextState: BaseTableState,
        nextContext: BaseTableContext
    ) {
        if (nextProps.pure) {
            const isEqual =
                shallowElementEquals(nextProps, this.props) &&
                obj.shallowEqual(nextState, this.state) &&
                obj.shallowEqual(nextContext, this.context);
            return !isEqual;
        }

        return true;
    }

    componentDidUpdate() {
        this.notRenderCellIndex = [];
    }

    [headerCellKey: `header_cell_${number}_${number}`]: InstanceType<CellLike> | null;
    [rowKey: `row_${number | string}`]: InstanceType<RowLike> | null;
    [cellKey: `cell_${number}_${number}`]: InstanceType<CellLike> | null;

    normalizeChildrenState(props: InnerBaseTableProps) {
        let columns = props.columns;
        if (props.children) {
            columns = this.normalizeChildren(props);
        }
        return this.fetchInfoFromBinaryChildren(columns);
    }

    // 将 React 结构化数据提取 props 转换成数组
    normalizeChildren(props: InnerBaseTableProps) {
        let { columns } = props;
        const getChildren = (children: InnerBaseTableProps['children']) => {
            const ret: NormalizedColumnProps[] = [];
            Children.forEach(
                children,
                (
                    child: ReactElement<TableChildProps> & {
                        ref: Ref<unknown>;
                        type: { _typeMark: string };
                    }
                ) => {
                    if (child) {
                        const props = { ...child.props } as NormalizedColumnProps;

                        if (child.ref) {
                            props.ref = child.ref;
                        }

                        if (
                            !(
                                child &&
                                ['function', 'object'].indexOf(typeof child.type) > -1 &&
                                (child.type._typeMark === 'column' ||
                                    child.type._typeMark === 'columnGroup')
                            )
                        ) {
                            log.warning('Use <Table.Column/>, <Table.ColumnGroup/> as child.');
                        }
                        ret.push(props);
                        if ('children' in child.props && child.props.children) {
                            props.children = getChildren(child.props.children);
                        }
                    }
                }
            );
            return ret;
        };
        if (props.children) {
            columns = getChildren(props.children);
        }
        return columns;
    }

    fetchInfoFromBinaryChildren(children: BaseTableProps['columns']) {
        let hasGroupHeader = false;
        const flatChildren: NormalizedColumnProps[] = [],
            groupChildren: NormalizedColumnProps[][] = [],
            getChildren = (propsChildren: BaseTableProps['columns'] = [], level: number) => {
                groupChildren[level] = groupChildren[level] || [];
                propsChildren.forEach(child => {
                    child.headerCellRowIndex = level;
                    child.headerCellColIndex = groupChildren[level].length;
                    if (child.children) {
                        hasGroupHeader = true;
                        getChildren(child.children, level + 1);
                    } else {
                        flatChildren.push(child);
                    }
                    groupChildren[level].push(child);
                });
            },
            getColSpan = (children: NormalizedColumnProps[], colSpan?: number) => {
                colSpan = colSpan || 0;
                children.forEach(child => {
                    if (child.children) {
                        colSpan = getColSpan(child.children, colSpan);
                    } else {
                        colSpan! += 1;
                    }
                });
                return colSpan;
            };

        getChildren(children, 0);

        groupChildren.forEach((groupChild, i) => {
            groupChild.forEach((child, j) => {
                let colSpan;
                const children = child.children;

                if (children) {
                    colSpan = getColSpan(children);
                    child.colSpan = colSpan;
                    groupChildren[i][j] = child;
                }
            });
        });

        const { lockType, lengths } = this.props;
        const start = lockType === 'right' ? lengths.origin - lengths.right : 0;
        this.addColIndex(flatChildren, start);

        return {
            flatChildren,
            groupChildren,
            hasGroupHeader,
        };
    }

    renderColGroup(flatChildren: NormalizedColumnProps[]) {
        const cols = flatChildren.map((col, index) => {
            const width = col.width;
            let style = {};
            if (width) {
                style = {
                    width: width,
                };
            }

            return <col style={style} key={index} />;
        });
        return <colgroup key="table-colgroup">{cols}</colgroup>;
    }

    onSort: HeaderProps['onSort'] = (dataIndex, order, sort) => {
        if (typeof this.props.sort === 'undefined') {
            this.setState(
                {
                    sort: sort,
                },
                () => {
                    this.props.onSort(dataIndex, order, sort);
                }
            );
        } else {
            this.props.onSort(dataIndex, order, sort);
        }
    };

    onFilter: HeaderProps['onFilter'] = filterParams => {
        this.props.onFilter(filterParams);
    };

    onResizeChange: HeaderProps['onResizeChange'] = (dataIndex, value) => {
        this.props.onResizeChange(dataIndex, value);
    };

    // 通过头部和扁平的结构渲染表格
    renderTable(groupChildren: NormalizedColumnProps[][], flatChildren: NormalizedColumnProps[]) {
        if (flatChildren.length || (!flatChildren.length && !this.props.lockType)) {
            const {
                hasHeader,
                components,
                prefix,
                wrapperContent,
                filterParams,
                locale,
                dataSource,
                emptyContent,
                loading,
                primaryKey,
                cellProps,
                rowProps,
                onRowClick,
                onRowMouseEnter,
                onRowMouseLeave,
                expandedIndexSimulate,
                pure,
                rtl,
                crossline,
                sortIcons,
                tableWidth,
            } = this.props;
            const { sort } = this.state;
            const {
                Header = HeaderComponent,
                Wrapper = WrapperComponent as WrapperLike,
                Body = BodyComponent,
            } = components;
            const colGroup = this.renderColGroup(flatChildren);

            return [
                <div
                    key={`${prefix}table-column-resize-proxy`}
                    ref={this.getResizeProxyDomRef}
                    className={`${prefix}table-column-resize-proxy`}
                />,
                <Wrapper
                    key={`${prefix}table-wrapper`}
                    colGroup={colGroup}
                    ref={this.getWrapperRef}
                    prefix={prefix}
                    tableWidth={tableWidth}
                >
                    {hasHeader ? (
                        <Header
                            prefix={prefix}
                            rtl={rtl}
                            pure={pure}
                            affixRef={this.getAffixRef}
                            colGroup={colGroup}
                            className={`${prefix}table-header`}
                            filterParams={filterParams}
                            tableEl={this.tableEl}
                            columns={groupChildren}
                            locale={locale}
                            headerCellRef={this.getHeaderCellRef}
                            components={components}
                            onFilter={this.onFilter}
                            sort={sort}
                            onResizeChange={this.onResizeChange}
                            onSort={this.onSort}
                            sortIcons={sortIcons}
                            tableWidth={tableWidth}
                            resizeProxyDomRef={this.resizeProxyDomRef}
                        />
                    ) : null}
                    <Body
                        prefix={prefix}
                        rtl={rtl}
                        pure={pure}
                        crossline={crossline}
                        colGroup={colGroup}
                        className={`${prefix}table-body`}
                        components={components}
                        loading={loading}
                        emptyContent={emptyContent}
                        getCellProps={cellProps}
                        primaryKey={primaryKey}
                        getRowProps={rowProps}
                        columns={flatChildren}
                        rowRef={this.getRowRef}
                        cellRef={this.getCellRef}
                        onRowClick={onRowClick}
                        expandedIndexSimulate={expandedIndexSimulate}
                        tableEl={this.tableEl}
                        onRowMouseEnter={onRowMouseEnter}
                        onRowMouseLeave={onRowMouseLeave}
                        dataSource={dataSource}
                        locale={locale}
                        onBodyMouseOver={this.onBodyMouseOver}
                        onBodyMouseOut={this.onBodyMouseOut}
                        tableWidth={tableWidth}
                    />
                    {wrapperContent}
                </Wrapper>,
            ];
        } else {
            return null;
        }
    }

    getResizeProxyDomRef = (resizeProxyDom: HTMLDivElement | null) => {
        if (!resizeProxyDom) {
            return this.resizeProxyDomRef;
        }
        this.resizeProxyDomRef = resizeProxyDom;
    };

    getWrapperRef = (wrapper: InstanceType<WrapperLike> | null) => {
        if (!wrapper) {
            return this.wrapper;
        }
        this.wrapper = wrapper;
    };

    getAffixRef = (affixRef: InstanceType<typeof Affix> | null) => {
        if (!affixRef) {
            return this.affixRef;
        }
        this.affixRef = affixRef;
    };

    getHeaderCellRef = (i: number, j: number, cell?: InstanceType<CellLike> | null) => {
        const cellRef = `header_cell_${i}_${j}` as const;
        if (!cell) {
            return this[cellRef];
        }
        this[cellRef] = cell;
    };

    getRowRef: NonNullable<BodyProps['rowRef']> = (i, row) => {
        const rowRef = `row_${i}` as const;
        if (!row) {
            return this[rowRef];
        }
        this[rowRef] = row;
    };

    getCellRef = (
        i: number,
        j: number,
        cell?: InstanceType<CellLike> | HTMLTableCellElement | null
    ) => {
        const cellRef = `cell_${i}_${j}` as const;
        if (!cell) {
            return this[cellRef];
        }
        this[cellRef] = cell as InstanceType<CellLike>;
    };

    handleColHoverClass = (rowIndex: number, colIndex: number, isAdd: boolean) => {
        const { crossline } = this.props;
        const funcName = isAdd ? 'addClass' : 'removeClass';
        if (crossline) {
            this.props.entireDataSource.forEach((val, index) => {
                try {
                    // in case of finding an unmounted component due to cached data
                    // need to clear refs of this.tableInc when dataSource Changed
                    // in virtual table
                    const currentCol = findDOMNode(this.getCellRef(index, colIndex)) as Element;
                    currentCol && dom[funcName](currentCol, 'hovered');
                } catch (error) {
                    return null;
                }
            });
        }
    };

    findEventTarget = (e: MouseEvent): { colIndex?: number; rowIndex?: number } => {
        const { prefix } = this.props;
        const target = dom.getClosest(e.target as HTMLElement, `td.${prefix}table-cell`);
        const colIndex = target && target.getAttribute('data-next-table-col');
        const rowIndex = target && target.getAttribute('data-next-table-row');

        try {
            // in case of finding an unmounted component due to cached data
            // need to clear refs of this.tableInc when dataSource Changed
            // in virtual table
            // @ts-expect-error rowIndex, colIndex 应该转为 number
            const currentCol = findDOMNode(this.getCellRef(rowIndex, colIndex));
            if (currentCol === target) {
                return {
                    // @ts-expect-error rowIndex, colIndex 应该转为 number
                    colIndex,
                    // @ts-expect-error rowIndex, colIndex 应该转为 number
                    rowIndex,
                };
            }
        } catch (error) {
            return {};
        }

        return {};
    };

    onBodyMouseOver = (e: MouseEvent) => {
        const { crossline } = this.props;
        if (!crossline) {
            return;
        }

        const { colIndex, rowIndex } = this.findEventTarget(e);
        // colIndex, rowIndex are string
        if (!colIndex || !rowIndex) {
            return;
        }
        this.handleColHoverClass(rowIndex, colIndex, true);
        this.colIndex = colIndex;
        this.rowIndex = rowIndex;
    };

    onBodyMouseOut = (e: MouseEvent) => {
        const { crossline } = this.props;
        if (!crossline) {
            return;
        }

        const { colIndex, rowIndex } = this.findEventTarget(e);
        // colIndex, rowIndex are string
        if (!colIndex || !rowIndex) {
            return;
        }
        this.handleColHoverClass(this.rowIndex, this.colIndex, false);
        this.colIndex = -1;
        this.rowIndex = -1;
    };

    addColIndex = (children: NormalizedColumnProps[], start = 0) => {
        children.forEach((child, i) => {
            child.__colIndex = start + i;
        });
    };

    getTableEl = (ref: HTMLElement | null) => {
        this.tableEl = ref;
    };

    render() {
        const ret = this.normalizeChildrenState(this.props);
        this.groupChildren = ret.groupChildren;
        this.flatChildren = ret.flatChildren;
        const table = this.renderTable(ret.groupChildren, ret.flatChildren),
            {
                className,
                style,
                hasBorder,
                isZebra,
                loading,
                size,
                hasHeader,
                prefix,
                dataSource,
                entireDataSource,
                onSort,
                onResizeChange,
                onRowClick,
                onRowMouseEnter,
                onRowMouseLeave,
                onFilter,
                rowProps,
                cellProps,
                scrollToRow,
                primaryKey,
                components,
                wrapperContent,
                lockType,
                locale,
                expandedIndexSimulate,
                // @ts-expect-error refs 没有实际作用，应该可以去掉
                refs,
                pure,
                rtl,
                emptyContent,
                filterParams,
                columns,
                sortIcons,
                loadingComponent: LoadingComponent = Loading,
                tableLayout,
                tableWidth,
                // @ts-expect-error props 并不能拿到 ref，这里的实现应该是无效的
                ref,
                ...others
            } = this.props,
            cls = classnames({
                [`${prefix}table`]: true,
                [`${prefix}table-${size}`]: size,
                [`${prefix}table-layout-${tableLayout}`]: tableLayout,
                [`${prefix}table-loading`]: loading,
                'only-bottom-border': !hasBorder,
                'no-header': !hasHeader,
                zebra: isZebra,
                [className!]: className,
            });

        if (rtl) {
            // @ts-expect-error others 无法附其他值，这里应该重新做一个变量
            others.dir = 'rtl';
        }

        const loadingcls = classnames({
            [`${prefix}table-loading-content`]: true,
        });

        return (
            <div
                className={cls}
                style={style}
                ref={ref || this.getTableEl}
                {...obj.pickOthers(Object.keys(Table.propTypes), others)}
            >
                {table}
                {loading ? <LoadingComponent className={loadingcls} /> : null}
            </div>
        );
    }
}

export default polyfill(Table);
