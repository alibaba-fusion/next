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
    CellLike,
    RowLike,
    BaseTableContext,
    BaseTableProps,
    BaseTableState,
    BodyProps,
    ColumnProps,
    HeaderProps,
    NormalizedColumnProps,
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
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        tableLayout: PropTypes.oneOf(['fixed', 'auto']),
        tableWidth: PropTypes.number,
        className: PropTypes.string,
        style: PropTypes.object,
        size: PropTypes.oneOf(['small', 'medium']),
        dataSource: PropTypes.array,
        entireDataSource: PropTypes.array,
        onRowClick: PropTypes.func,
        onRowMouseEnter: PropTypes.func,
        onRowMouseLeave: PropTypes.func,
        onSort: PropTypes.func,
        onFilter: PropTypes.func,
        onResizeChange: PropTypes.func,
        rowProps: PropTypes.func,
        cellProps: PropTypes.func,
        keepForwardRenderRows: PropTypes.number,
        hasBorder: PropTypes.bool,
        hasHeader: PropTypes.bool,
        isZebra: PropTypes.bool,
        loading: PropTypes.bool,
        loadingComponent: PropTypes.func,
        filterParams: PropTypes.object,
        sort: PropTypes.object,
        sortIcons: PropTypes.object,
        locale: PropTypes.object,
        components: PropTypes.object,
        columns: PropTypes.array,
        emptyContent: PropTypes.node,
        primaryKey: PropTypes.oneOfType([PropTypes.symbol, PropTypes.string]),
        lockType: PropTypes.oneOf(['left', 'right']),
        wrapperContent: PropTypes.any,
        refs: PropTypes.object,
        expandedRowRender: PropTypes.func,
        rowExpandable: PropTypes.func,
        expandedRowIndent: PropTypes.array,
        hasExpandedRowCtrl: PropTypes.bool,
        getExpandedColProps: PropTypes.func,
        openRowKeys: PropTypes.array,
        defaultOpenRowKeys: PropTypes.array,
        onRowOpen: PropTypes.func,
        onExpandedRowClick: PropTypes.func,
        fixedHeader: PropTypes.bool,
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        rowSelection: PropTypes.object,
        stickyHeader: PropTypes.bool,
        offsetTop: PropTypes.number,
        affixProps: PropTypes.object,
        indent: PropTypes.number,
        isTree: PropTypes.bool,
        useVirtual: PropTypes.bool,
        rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
        scrollToRow: PropTypes.number,
        onBodyScroll: PropTypes.func,
        expandedIndexSimulate: PropTypes.bool,
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
