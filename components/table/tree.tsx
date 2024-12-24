import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import RowComponent from './tree/row';
import CellComponent from './tree/cell';
import { statics } from './util';
import type Base from './base';
import type { CellLike, RecordItem, RowLike, TreeTableProps, TreeTableState } from './types';

const noop = () => {};

export default function tree(BaseComponent: typeof Base) {
    class TreeTable extends React.Component<TreeTableProps, TreeTableState> {
        static TreeRow = RowComponent;
        static TreeCell = CellComponent;
        static propTypes = {
            /**
             * 默认情况下展开的树形表格，传入了此属性代表 tree 的展开为受控操作
             */
            // openRowKeys: PropTypes.array,
            /**
             * 默认情况下展开的 Expand 行 或者 Tree 行，非受控模式
             * @version 1.23.22
             */
            // defaultOpenRowKeys: PropTypes.array,
            /**
             * 点击 tree 展开或者关闭的时候触发的事件
             * @param openRowKeys - tree 模式下展开的 key
             * @param currentRowKey - 当前点击行的 key
             * @param opened - 当前点击是展开还是收起
             * @param currentRecord - 当前点击行的记录
             */
            // onRowOpen: PropTypes.func,
            /**
             * dataSource 当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
             */
            // primaryKey: PropTypes.oneOfType([PropTypes.symbol, PropTypes.string]),
            /**
             * 在 tree 模式下的缩进尺寸，仅在 isTree 为 true 时候有效
             */
            // indent: PropTypes.number,
            /**
             * 开启 Table 的 tree 模式，接收的数据格式中包含 children 则渲染成 tree table
             */
            // isTree: PropTypes.bool,
            // locale: PropTypes.object,
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
            primaryKey: 'id',
            onRowOpen: noop,
            components: {},
            indent: 12,
        };

        static childContextTypes = {
            openTreeRowKeys: PropTypes.array,
            indent: PropTypes.number,
            treeStatus: PropTypes.array,
            onTreeNodeClick: PropTypes.func,
            isTree: PropTypes.bool,
        };
        ds: RecordItem[];

        constructor(props: TreeTableProps) {
            super(props);
            this.state = {
                openRowKeys: props.openRowKeys || props.defaultOpenRowKeys || [],
            };
        }

        getChildContext() {
            return {
                openTreeRowKeys: this.state.openRowKeys,
                indent: this.props.indent,
                treeStatus: this.getTreeNodeStatus(this.ds),
                onTreeNodeClick: this.onTreeNodeClick,
                isTree: this.props.isTree,
            };
        }

        static getDerivedStateFromProps(nextProps: TreeTableProps) {
            if ('openRowKeys' in nextProps) {
                return {
                    openRowKeys: nextProps.openRowKeys || [],
                };
            }

            return null;
        }

        normalizeDataSource(dataSource: TreeTableProps['dataSource']) {
            const { openRowKeys } = this.state;
            const { primaryKey } = this.props;
            const ret: RecordItem[] = [],
                loop = function (
                    dataSource: TreeTableProps['dataSource'],
                    level: number,
                    parentId: string | number | null = null
                ) {
                    dataSource!.forEach(item => {
                        item.__level = level;

                        if (level === 0 || openRowKeys!.indexOf(parentId) > -1) {
                            item.__hidden = false;
                        } else {
                            item.__hidden = true;
                        }
                        ret.push(item);

                        if (item.children) {
                            loop(item.children, level + 1, item[primaryKey!] as string);
                        }
                    });
                };
            loop(dataSource, 0);
            this.ds = ret;
            return ret;
        }

        getTreeNodeStatus(dataSource: RecordItem[] = []) {
            const { openRowKeys } = this.state,
                { primaryKey } = this.props,
                ret: unknown[] = [];

            openRowKeys!.forEach(openKey => {
                dataSource.forEach(item => {
                    if (item[primaryKey!] === openKey) {
                        if (item.children) {
                            item.children.forEach(child => {
                                ret.push(child[primaryKey!]);
                            });
                        }
                    }
                });
            });
            return ret;
        }

        onTreeNodeClick = (record: RecordItem) => {
            const { primaryKey } = this.props,
                id = record[primaryKey!] as string | number,
                dataSource = this.ds,
                openRowKeys = [...this.state.openRowKeys!],
                index = openRowKeys.indexOf(id),
                getChildrenKeyById = function (id: string | number) {
                    const ret = [id];
                    const loop = (data: RecordItem[]) => {
                        data.forEach(item => {
                            ret.push(item[primaryKey!] as string | number);
                            if (item.children) {
                                loop(item.children);
                            }
                        });
                    };
                    dataSource.forEach(item => {
                        if (item[primaryKey!] === id) {
                            if (item.children) {
                                loop(item.children);
                            }
                        }
                    });
                    return ret;
                };

            if (index > -1) {
                // 不仅要删除当前的 openRowKey，还需要删除关联子节点的 openRowKey
                const ids = getChildrenKeyById(id);
                ids.forEach(id => {
                    const i = openRowKeys.indexOf(id);
                    if (i > -1) {
                        openRowKeys.splice(i, 1);
                    }
                });
            } else {
                openRowKeys.push(id);
            }

            if (!('openRowKeys' in this.props)) {
                this.setState({
                    openRowKeys,
                });
            }
            this.props.onRowOpen!(openRowKeys, id, index === -1, record);
        };

        render() {
            const { isTree, indent, ...others } = this.props;

            let { components, dataSource } = this.props;

            if (isTree) {
                components = { ...components };
                if (!components.Row) {
                    components.Row = RowComponent as RowLike;
                }
                if (!components.Cell) {
                    components.Cell = CellComponent as CellLike;
                }

                dataSource = this.normalizeDataSource(dataSource);
            }
            return <BaseComponent {...others} dataSource={dataSource} components={components} />;
        }
    }
    return polyfill(statics(TreeTable, BaseComponent));
}
