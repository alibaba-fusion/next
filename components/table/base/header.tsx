import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FilterComponent from './filter';
import SortComponent from './sort';
import CellComponent from './cell';
import ResizeComponent from './resize';
import type { CellLike, CellProps, HeaderProps, SortProps } from '../types';
import { type ClassPropsWithDefault } from '../../util';

const noop = () => {};

type InnerHeaderProps = ClassPropsWithDefault<HeaderProps, typeof Header.defaultProps>;

export default class Header extends React.Component<HeaderProps> {
    static propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        className: PropTypes.string,
        component: PropTypes.string,
        columns: PropTypes.array,
        colGroup: PropTypes.object,
        headerCellRef: PropTypes.func,
        locale: PropTypes.object,
        filterParams: PropTypes.object,
        onFilter: PropTypes.func,
        components: PropTypes.object,
        sort: PropTypes.object,
        sortIcons: PropTypes.object,
        onSort: PropTypes.func,
        onResizeChange: PropTypes.func,
        tableWidth: PropTypes.number,
        tableEl: PropTypes.any,
    };
    static defaultProps = {
        component: 'thead',
        columns: [],
        headerCellRef: noop,
        onFilter: noop,
        components: {},
        onSort: noop,
        onResizeChange: noop,
    };
    hasLock: boolean;
    readonly props: InnerHeaderProps;

    constructor(props: HeaderProps) {
        super(props);

        this.hasLock = false;
    }

    [cellKey: `header_cell_${number}_${number}`]: { current?: HTMLElement };

    checkHasLock = () => {
        const { columns } = this.props;
        let hasLock = false;
        for (let i = 0; i < columns.length; i++) {
            const cols = columns[i];
            for (let j = 0; j < cols.length; j++) {
                const col = cols[j];
                if (col.lock) {
                    hasLock = true;
                    break;
                }
            }
            if (hasLock) {
                break;
            }
        }
        this.hasLock = hasLock;
    };

    getCellRef = (i: number, j: number, cell: InstanceType<CellLike>) => {
        this.props.headerCellRef(i, j, cell);

        const { columns } = this.props;
        const columnProps = columns[i] && columns[i][j];
        if (columnProps && columnProps.ref && typeof columnProps.ref === 'function') {
            columnProps.ref(cell);
        }
    };

    createCellDomRef = (i: number, j: number) => {
        const cellRefKey = this.getCellDomRefKey(i, j);
        if (!this[cellRefKey]) {
            this[cellRefKey] = {};
        }

        return this[cellRefKey];
    };

    getCellDomRef = (cellRef: { current?: CellLike }, cellDom: CellLike) => {
        if (!cellRef) {
            return;
        }

        cellRef.current = cellDom;
    };

    getCellDomRefKey = (i: number, j: number) => {
        return `header_cell_${i}_${j}` as const;
    };

    onSort: SortProps['onSort'] = (dataIndex, order, sort) => {
        this.props.onSort(dataIndex, order, sort);
    };

    render() {
        const {
            prefix,
            className,
            children,
            component: Tag,
            colGroup,
            columns,
            locale,
            filterParams,
            onFilter,
            components,
            affixRef,
            headerCellRef,
            onSort,
            sort,
            sortIcons,
            onResizeChange,
            pure,
            rtl,
            tableWidth,
            tableEl,
            resizeProxyDomRef,
            ...others
        } = this.props;

        this.checkHasLock();

        const {
            Cell = CellComponent,
            Filter = FilterComponent,
            Sort = SortComponent,
            Resize = ResizeComponent,
        } = components;
        const rowSpan = columns.length;

        const header = columns.map((cols, index) => {
            const col = cols.map((col, j) => {
                const cellRef = this.createCellDomRef(index, j);
                const {
                    title,
                    colSpan,
                    sortable,
                    sortDirections,
                    resizable,
                    asyncResizable,
                    dataIndex,
                    filters,
                    filterMode,
                    filterMenuProps,
                    filterProps,
                    width,
                    align,
                    alignHeader,
                    __normalized,
                    lock,
                    cellStyle,
                    wordBreak,
                    ...others
                } = col;

                let { className } = col;

                const order = sort ? sort[dataIndex!] : '';
                className = classnames({
                    [`${prefix}table-header-node`]: true,
                    [`${prefix}table-header-resizable`]: resizable || asyncResizable,
                    [`${prefix}table-word-break-${wordBreak}`]: !!wordBreak,
                    [`${prefix}table-header-sort-${order}`]: sortable && order,
                    [className!]: className,
                });
                let sortElement, filterElement, resizeElement;
                const attrs: Partial<CellProps> = {};

                attrs.colSpan = colSpan;

                // column.group doesn't have sort resize filter
                // @ts-expect-error children 不一定有 length 属性
                if (!(col.children && col.children.length)) {
                    if (sortable) {
                        sortElement = (
                            <Sort
                                prefix={prefix}
                                className={`${prefix}table-header-icon`}
                                dataIndex={dataIndex}
                                onSort={this.onSort}
                                sortDirections={sortDirections}
                                sortIcons={sortIcons}
                                sort={sort}
                                rtl={rtl}
                                locale={locale}
                            />
                        );
                    }
                    if (asyncResizable || resizable) {
                        resizeElement = (
                            <Resize
                                asyncResizable={asyncResizable}
                                hasLock={this.hasLock}
                                col={col}
                                tableEl={tableEl!}
                                prefix={prefix}
                                rtl={rtl}
                                dataIndex={dataIndex!}
                                resizeProxyDomRef={resizeProxyDomRef!}
                                cellDomRef={cellRef}
                                onChange={onResizeChange}
                            />
                        );
                    }

                    if (filters) {
                        filterElement = filters.length ? (
                            <Filter
                                dataIndex={dataIndex!}
                                className={`${prefix}table-header-icon`}
                                filters={filters}
                                prefix={prefix}
                                locale={locale}
                                rtl={rtl}
                                filterParams={filterParams}
                                filterMode={filterMode}
                                filterMenuProps={filterMenuProps}
                                filterProps={filterProps}
                                onFilter={onFilter}
                            />
                        ) : null;
                    }
                    attrs.rowSpan = rowSpan - index;
                }

                if (+attrs.colSpan! === 0) {
                    return null;
                }

                return (
                    <Cell
                        {...others}
                        {...attrs}
                        key={j}
                        prefix={prefix}
                        pure={pure}
                        rtl={rtl}
                        cell={title}
                        component="th"
                        align={alignHeader ? alignHeader : align}
                        className={className}
                        ref={this.getCellRef.bind(this, index, j)}
                        getCellDomRef={this.getCellDomRef.bind(this, cellRef)}
                        type="header"
                    >
                        {sortElement}
                        {filterElement}
                        {resizeElement}
                    </Cell>
                );
            });
            return <tr key={index}>{col}</tr>;
        });

        return (
            <Tag className={className} {...others}>
                {header}
                {children}
            </Tag>
        );
    }
}
