import React, { Children, type ReactElement, type UIEvent } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Checkbox, { type CheckboxProps } from '../checkbox';
import Radio from '../radio';
import { func, log } from '../util';
import zhCN from '../locale/zh-cn';
import SelectionRow from './selection/row';
import Col from './column';
import { statics } from './util';
import type Base from './base';
import type { RecordItem, RowLike, SelectionTableProps, SelectionTableState } from './types';

const { makeChain } = func;

const unique = <T,>(arr: T[], key = 'this'): T[] => {
    const temp: Record<string | number | symbol, unknown> = {},
        ret: T[] = [];
    arr.forEach(item => {
        let value;
        if (key === 'this') {
            value = item;
        } else {
            value = (item as Record<string, unknown>)[key];
        }
        if (!temp[value as string]) {
            ret.push(item);
            temp[value as string] = true;
        }
    });
    return ret;
};

export default function selection(BaseComponent: typeof Base) {
    /** Table */
    class SelectionTable extends React.Component<SelectionTableProps, SelectionTableState> {
        static SelectionRow = SelectionRow;
        static propTypes = {
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
            locale: zhCN.Table,
            primaryKey: 'id',
            prefix: 'next-',
        };

        static contextTypes = {
            listHeader: PropTypes.any,
        };

        static childContextTypes = {
            rowSelection: PropTypes.object,
            selectedRowKeys: PropTypes.array,
        };

        constructor(props: SelectionTableProps) {
            super(props);
            this.state = {
                selectedRowKeys:
                    props.rowSelection && 'selectedRowKeys' in props.rowSelection
                        ? props.rowSelection.selectedRowKeys || []
                        : [],
            };
        }

        getChildContext() {
            return {
                rowSelection: this.props.rowSelection,
                selectedRowKeys: this.state.selectedRowKeys,
            };
        }

        static getDerivedStateFromProps(nextProps: SelectionTableProps) {
            if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
                const selectedRowKeys = nextProps.rowSelection.selectedRowKeys || [];
                return {
                    selectedRowKeys,
                };
            }

            return null;
        }

        normalizeChildren(children: SelectionTableProps['children']) {
            const { prefix, rowSelection, size } = this.props;
            if (rowSelection) {
                children = Children.map(children, (child: ReactElement, index) =>
                    React.cloneElement(child, {
                        key: index,
                    })
                );

                const attrs = (rowSelection.columnProps && rowSelection.columnProps()) || {};

                (children as ReactElement[]).unshift(
                    <Col
                        key="selection"
                        title={this.renderSelectionHeader.bind(this)}
                        cell={this.renderSelectionBody.bind(this)}
                        width={size === 'small' ? 34 : 50}
                        className={`${prefix}table-selection ${prefix}table-prerow`}
                        __normalized
                        {...attrs}
                    />
                );
                return children;
            }
            return children;
        }

        addSelection = (columns: SelectionTableProps['columns']) => {
            const { prefix, rowSelection, size } = this.props;
            const attrs = (rowSelection!.columnProps && rowSelection!.columnProps()) || {};

            if (!columns!.find(record => record.key === 'selection')) {
                columns!.unshift({
                    key: 'selection',
                    title: this.renderSelectionHeader.bind(this),
                    cell: this.renderSelectionBody.bind(this),
                    width: size === 'small' ? 34 : 50,
                    className: `${prefix}table-selection ${prefix}table-prerow`,
                    __normalized: true,
                    ...attrs,
                });
            }
        };

        renderSelectionHeader = () => {
            const onChange = this.selectAllRow,
                attrs: CheckboxProps = {},
                { rowSelection, primaryKey, dataSource, entireDataSource, locale } = this.props,
                { selectedRowKeys } = this.state,
                mode = rowSelection!.mode ? rowSelection!.mode : 'multiple';

            let checked = !!selectedRowKeys.length;
            let indeterminate = false;

            const source = entireDataSource || dataSource;

            this.flatDataSource(source)
                .filter((record, index) => {
                    if (!rowSelection!.getProps) {
                        return true;
                    } else {
                        return !(rowSelection!.getProps(record, index) || {}).disabled;
                    }
                })
                .map(record => record[primaryKey!])
                .forEach((id: string | number) => {
                    if (selectedRowKeys.indexOf(id) === -1) {
                        checked = false;
                    } else {
                        indeterminate = true;
                    }
                });
            attrs.onClick = makeChain((e: UIEvent) => {
                e.stopPropagation();
            }, attrs.onClick);

            const userAttrs = (rowSelection!.titleProps && rowSelection!.titleProps()) || {};

            if (checked) {
                indeterminate = false;
            }
            return [
                mode === 'multiple' ? (
                    <Checkbox
                        key="_total"
                        indeterminate={indeterminate}
                        aria-label={locale!.selectAll}
                        checked={checked}
                        onChange={onChange}
                        {...attrs}
                        {...userAttrs}
                    />
                ) : null,
                rowSelection!.titleAddons && rowSelection!.titleAddons(),
            ];
        };

        renderSelectionBody = (value: unknown, index: number, record: RecordItem) => {
            const { rowSelection, primaryKey } = this.props;
            const { selectedRowKeys } = this.state;
            const mode = rowSelection!.mode ? rowSelection!.mode : 'multiple';
            const checked = selectedRowKeys.indexOf(record[primaryKey!] as string | number) > -1;
            const onChange = this.selectOneRow.bind(this, index, record);
            const attrs = rowSelection!.getProps ? rowSelection!.getProps(record, index) || {} : {};

            attrs.onClick = makeChain((e: UIEvent) => {
                e.stopPropagation();
            }, attrs.onClick);
            return mode === 'multiple' ? (
                <Checkbox checked={checked} onChange={onChange} {...attrs} />
            ) : (
                <Radio checked={checked} onChange={onChange} {...attrs} />
            );
        };

        selectAllRow: NonNullable<CheckboxProps['onChange']> = (checked, e) => {
            const ret = [...this.state.selectedRowKeys],
                { rowSelection, primaryKey, dataSource, entireDataSource } = this.props,
                { selectedRowKeys } = this.state,
                getProps = rowSelection!.getProps;
            let attrs: ReturnType<NonNullable<typeof getProps>> = {},
                records: RecordItem[] = [];

            const source = entireDataSource ? entireDataSource : dataSource;

            this.flatDataSource(source).forEach((record, index) => {
                const id = record[primaryKey!] as string | number;
                if (getProps) {
                    attrs = getProps(record, index) || {};
                }
                // 反选和全选的时候不要丢弃禁用项的选中状态
                if (checked && (!attrs.disabled || selectedRowKeys.indexOf(id) > -1)) {
                    ret.push(id);
                    records.push(record);
                } else if (attrs.disabled && selectedRowKeys.indexOf(id) > -1) {
                    ret.push(id);
                    records.push(record);
                } else {
                    const i = ret.indexOf(id);
                    i > -1 && ret.splice(i, 1);
                }
            });

            records = unique(records, primaryKey);
            if (typeof rowSelection!.onSelectAll === 'function') {
                rowSelection!.onSelectAll(checked, records);
            }
            this.triggerSelection(rowSelection!, unique(ret), records);
            e.stopPropagation();
        };

        selectOneRow(index: number, record: RecordItem, checked: boolean, e: UIEvent) {
            let selectedRowKeys = [...this.state.selectedRowKeys],
                i;
            const { primaryKey, rowSelection, dataSource, entireDataSource } = this.props,
                mode = rowSelection!.mode ? rowSelection!.mode : 'multiple',
                id = record[primaryKey!] as string | number;
            if (id === null || id === undefined) {
                log.warning(`Can't get value from record using given ${primaryKey} as primaryKey.`);
            }
            if (mode === 'multiple') {
                if (checked) {
                    selectedRowKeys.push(id);
                } else {
                    i = selectedRowKeys.indexOf(id);
                    selectedRowKeys.splice(i, 1);
                }
            } else if (checked) {
                selectedRowKeys = [id];
            }
            let totalDS = dataSource;
            if (Array.isArray(entireDataSource) && entireDataSource.length > dataSource!.length) {
                totalDS = entireDataSource;
            }
            const records = unique(
                totalDS!.filter(
                    item => selectedRowKeys.indexOf(item[primaryKey!] as string | number) > -1
                ),
                primaryKey
            );
            if (typeof rowSelection!.onSelect === 'function') {
                rowSelection!.onSelect(checked, record, records);
            }

            this.triggerSelection(rowSelection!, selectedRowKeys, records);

            e.stopPropagation();
        }
        triggerSelection(
            rowSelection: NonNullable<SelectionTableProps['rowSelection']>,
            selectedRowKeys: SelectionTableState['selectedRowKeys'],
            records: RecordItem[]
        ) {
            if (!('selectedRowKeys' in rowSelection)) {
                this.setState({
                    selectedRowKeys,
                });
            }
            if (typeof rowSelection.onChange === 'function') {
                rowSelection.onChange(selectedRowKeys, records);
            }
        }

        flatDataSource(dataSource: SelectionTableProps['dataSource']) {
            let ret: RecordItem[] = dataSource!;
            const { listHeader } = this.context;

            if (listHeader) {
                ret = [];
                const { hasChildrenSelection, hasSelection } = listHeader;
                dataSource!.forEach(item => {
                    const children = item.children;
                    // 如果需要渲染 selection 才将这条记录插入到 dataSource
                    // 或者没有孩子节点
                    if (hasSelection) {
                        ret.push(item);
                    }
                    if (children && hasChildrenSelection) {
                        ret = ret.concat(children);
                    }
                });
            }
            return ret;
        }

        render() {
            const { rowSelection, columns, ...others } = this.props;
            let { components, children } = this.props;
            const useColumns = columns && !children;

            if (rowSelection) {
                if (useColumns) {
                    this.addSelection(columns);
                } else {
                    children = this.normalizeChildren(children || []);
                }
                components = { ...components };
                components.Row = components.Row || (SelectionRow as RowLike);
            }
            return (
                <BaseComponent
                    {...others}
                    columns={columns}
                    components={components}
                    children={children}
                />
            );
        }
    }
    return polyfill(statics(SelectionTable, BaseComponent));
}
