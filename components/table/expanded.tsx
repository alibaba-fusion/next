import React, { Children, type ReactElement, type KeyboardEvent, type UIEvent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../icon';
import { KEYCODE, dom, events } from '../util';
import RowComponent from './expanded/row';
import Col from './column';
import { statics } from './util';
import type Base from './base';
import type { ExpandedTableProps, RecordItem, RowLike } from './types';

const noop = () => {};

export default function expanded(BaseComponent: typeof Base, stickyLock?: boolean) {
    /** Table */
    class ExpandedTable extends React.Component<ExpandedTableProps> {
        static ExpandedRow = RowComponent;
        static propTypes = {
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
            getExpandedColProps: noop,
            onRowOpen: noop,
            hasExpandedRowCtrl: true,
            components: {},
            expandedRowIndent: stickyLock ? [0, 0] : [1, 0],
            prefix: 'next-',
        };

        static childContextTypes = {
            openRowKeys: PropTypes.array,
            expandedRowRender: PropTypes.func,
            expandedIndexSimulate: PropTypes.bool,
            expandedRowWidthEquals2Table: PropTypes.bool,
            expandedRowIndent: PropTypes.array,
            getExpandedRowRef: PropTypes.func,
            getTableInstanceForExpand: PropTypes.func,
        };

        state = {
            openRowKeys: this.props.openRowKeys || this.props.defaultOpenRowKeys || [],
        };
        expandedRowRefs: Record<string, HTMLElement>;
        tableInc: InstanceType<typeof Base> | null;

        getChildContext() {
            return {
                openRowKeys: this.state.openRowKeys,
                expandedRowRender: this.props.expandedRowRender,
                expandedIndexSimulate: this.props.expandedIndexSimulate,
                expandedRowWidthEquals2Table: stickyLock,
                getExpandedRowRef: this.saveExpandedRowRef,
                getTableInstanceForExpand: this.getTableInstance,
                expandedRowIndent: stickyLock ? [0, 0] : this.props.expandedRowIndent,
            };
        }

        static getDerivedStateFromProps(nextProps: ExpandedTableProps) {
            if ('openRowKeys' in nextProps) {
                return {
                    openRowKeys: nextProps.openRowKeys || [],
                };
            }

            return null;
        }

        componentDidMount() {
            this.setExpandedWidth();
            events.on(window, 'resize', this.setExpandedWidth);
        }

        componentDidUpdate() {
            this.setExpandedWidth();
        }

        componentWillUnmount() {
            events.off(window, 'resize', this.setExpandedWidth);
        }

        saveExpandedRowRef = (key: string, rowRef: HTMLElement) => {
            if (!this.expandedRowRefs) {
                this.expandedRowRefs = {};
            }
            this.expandedRowRefs[key] = rowRef;
        };

        setExpandedWidth = () => {
            const { prefix } = this.props;
            const tableEl = this.getTableNode();
            const totalWidth = +(tableEl! && tableEl.clientWidth) - 1 || '100%';
            const bodyNode = tableEl && tableEl.querySelector(`.${prefix}table-body`);

            Object.keys(this.expandedRowRefs || {}).forEach(key => {
                dom.setStyle(this.expandedRowRefs[key], {
                    width: (bodyNode && bodyNode.clientWidth) || totalWidth,
                });
            });
        };

        getTableInstance = (instance: InstanceType<typeof Base> | null) => {
            this.tableInc = instance;
        };

        getTableNode() {
            const table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table!.tableEl) as HTMLElement;
            } catch (error) {
                return null;
            }
        }

        expandedKeydown = (value: unknown, record: RecordItem, index: number, e: KeyboardEvent) => {
            e.preventDefault();
            e.stopPropagation();

            if (e.keyCode === KEYCODE.ENTER) {
                this.onExpandedClick(value, record, index, e);
            }
        };

        renderExpandedCell = (value: unknown, index: number, record: RecordItem) => {
            const { getExpandedColProps, prefix, locale, rowExpandable } = this.props;

            if (typeof rowExpandable === 'function' && !rowExpandable(record, index)) {
                return '';
            }

            const { openRowKeys } = this.state,
                { primaryKey } = this.props,
                hasExpanded = openRowKeys.indexOf(record[primaryKey!] as string | number) > -1,
                switchNode = hasExpanded ? (
                    <Icon type="minus" size="xs" className={`${prefix}table-expand-unfold`} />
                ) : (
                    <Icon type="add" size="xs" className={`${prefix}table-expand-fold`} />
                ),
                attrs = getExpandedColProps!(record, index) || {};
            const cls = classnames({
                [`${prefix}table-expanded-ctrl`]: true,
                disabled: attrs.disabled,
                [attrs.className!]: attrs.className,
            });

            if (!attrs.disabled) {
                attrs.onClick = this.onExpandedClick.bind(this, value, record, index);
            }
            return (
                <span
                    {...attrs}
                    role="button"
                    tabIndex={0}
                    onKeyDown={this.expandedKeydown.bind(this, value, record, index)}
                    aria-label={hasExpanded ? locale!.expanded : locale!.folded}
                    aria-expanded={hasExpanded}
                    className={cls}
                >
                    {switchNode}
                </span>
            );
        };

        onExpandedClick(value: unknown, record: RecordItem, i: number, e: UIEvent) {
            const openRowKeys = [...this.state.openRowKeys],
                { primaryKey } = this.props,
                id = record[primaryKey!] as string | number,
                index = openRowKeys.indexOf(id);
            if (index > -1) {
                openRowKeys.splice(index, 1);
            } else {
                openRowKeys.push(id);
            }
            if (!('openRowKeys' in this.props)) {
                this.setState({
                    openRowKeys: openRowKeys,
                });
            }
            this.props.onRowOpen!(openRowKeys, id, index === -1, record);
            e.stopPropagation();
        }

        addExpandCtrl = (columns: NonNullable<ExpandedTableProps['columns']>) => {
            const { prefix, size } = this.props;

            if (!columns.find(record => record.key === 'expanded')) {
                columns.unshift({
                    key: 'expanded',
                    title: '',
                    cell: this.renderExpandedCell.bind(this),
                    width: size === 'small' ? 34 : 50,
                    className: `${prefix}table-expanded ${prefix}table-prerow`,
                    __normalized: true,
                });
            }
        };

        normalizeChildren(children: ExpandedTableProps['children']) {
            const { prefix, size } = this.props;
            const toArrayChildren = Children.map(children, (child, index) =>
                React.cloneElement(child as ReactElement, {
                    key: index,
                })
            );
            toArrayChildren!.unshift(
                <Col
                    title=""
                    key="expanded"
                    cell={this.renderExpandedCell.bind(this)}
                    width={size === 'small' ? 34 : 50}
                    className={`${prefix}table-expanded ${prefix}table-prerow`}
                    __normalized
                />
            );
            return toArrayChildren;
        }

        normalizeDataSource(ds: NonNullable<ExpandedTableProps['dataSource']>) {
            const ret: NonNullable<ExpandedTableProps['dataSource']> = [];
            ds.forEach(item => {
                const itemCopy = { ...item };
                itemCopy.__expanded = true;
                ret.push(item, itemCopy);
            });
            return ret;
        }

        render() {
            const {
                openRowKeys,
                expandedRowRender,
                rowExpandable,
                hasExpandedRowCtrl,
                columns,
                getExpandedColProps,
                expandedRowIndent,
                onRowOpen,
                onExpandedRowClick,
                ...others
            } = this.props;

            let { components, dataSource, entireDataSource, children } = this.props;

            if (expandedRowRender && !components!.Row) {
                components = { ...components };
                components.Row = RowComponent as RowLike;
                dataSource = this.normalizeDataSource(dataSource!);
                entireDataSource = this.normalizeDataSource(entireDataSource);
            }
            if (expandedRowRender && hasExpandedRowCtrl) {
                const useColumns = columns && !children;

                if (useColumns) {
                    this.addExpandCtrl(columns);
                } else {
                    children = this.normalizeChildren(children || []);
                }
            }

            return (
                <BaseComponent
                    {...others}
                    columns={columns}
                    dataSource={dataSource}
                    entireDataSource={entireDataSource}
                    components={components}
                >
                    {children}
                </BaseComponent>
            );
        }
    }
    return polyfill(statics(ExpandedTable, BaseComponent));
}
