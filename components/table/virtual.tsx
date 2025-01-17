import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { dom } from '../util';
import VirtualBody from './virtual/body';
import { statics } from './util';
import type Base from './base';
import type { VirtualTableProps, VirtualTableState } from './types';

const noop = () => {};
export default function virtual(BaseComponent: typeof Base) {
    class VirtualTable extends React.Component<VirtualTableProps, VirtualTableState> {
        static VirtualBody = VirtualBody;
        static propTypes = {
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
            primaryKey: 'id',
            rowHeight: noop,
            maxBodyHeight: 200,
            components: {},
            prefix: 'next-',
            onBodyScroll: noop,
            keepForwardRenderRows: 10,
        };

        static childContextTypes = {
            onVirtualScroll: PropTypes.func,
            bodyHeight: PropTypes.number,
            innerTop: PropTypes.number,
            getBodyNode: PropTypes.func,
            getTableInstanceForVirtual: PropTypes.func,
            rowSelection: PropTypes.object,
        };
        lastScrollTop: number;
        bodyNode: HTMLElement;
        rowSelection: VirtualTableProps['rowSelection'];
        start: number;
        end: number;
        visibleCount: number;

        constructor(props: VirtualTableProps) {
            super(props);
            const { useVirtual, dataSource } = props;

            const hasVirtualData = useVirtual && dataSource && dataSource.length > 0;

            this.state = {
                rowHeight: this.props.rowHeight,
                scrollToRow: this.props.scrollToRow,
                height: this.props.maxBodyHeight,
                hasVirtualData,
            };
        }

        getChildContext() {
            return {
                onVirtualScroll: this.onScroll,
                bodyHeight: this.computeBodyHeight(),
                innerTop: this.computeInnerTop(),
                getBodyNode: this.getBodyNode,
                getTableInstanceForVirtual: this.getTableInstance,
                rowSelection: this.rowSelection,
            };
        }

        static getDerivedStateFromProps(
            nextProps: VirtualTableProps,
            prevState: VirtualTableState
        ) {
            const state: Partial<VirtualTableState> = {};

            if ('maxBodyHeight' in nextProps) {
                if (prevState.height !== nextProps.maxBodyHeight) {
                    state.height = nextProps.maxBodyHeight;
                }
            }

            if ('scrollToRow' in nextProps) {
                state.scrollToRow = nextProps.scrollToRow;
            }

            if (
                prevState.useVirtual !== nextProps.useVirtual ||
                prevState.dataSource !== nextProps.dataSource
            ) {
                state.hasVirtualData =
                    nextProps.useVirtual && nextProps.dataSource && nextProps.dataSource.length > 0;
            }

            return state;
        }

        componentDidMount() {
            if (this.state.hasVirtualData && this.bodyNode) {
                this.lastScrollTop = this.bodyNode.scrollTop;
            } else {
                this.lastScrollTop = 0;
            }

            this.adjustScrollTop();
            this.adjustSize();
            this.reComputeSize();
        }

        componentDidUpdate() {
            this.adjustScrollTop();
            this.adjustSize();
            this.reComputeSize();
        }

        [bodyNodeKey: `body${string}Node`]: HTMLElement | null;
        [tableKey: `table${string}Inc`]: InstanceType<typeof Base> | null;

        reComputeSize() {
            const { rowHeight, hasVirtualData } = this.state;
            if (typeof rowHeight === 'function' && hasVirtualData) {
                const row = this.getRowNode();
                const rowClientHeight = row && row.clientHeight;
                if (rowClientHeight !== this.state.rowHeight) {
                    this.setState({
                        rowHeight: rowClientHeight,
                    });
                }
            }
        }

        computeBodyHeight() {
            const { rowHeight } = this.state;
            const { dataSource } = this.props;
            if (typeof rowHeight === 'function') {
                return 0;
            }
            let count = 0;
            dataSource!.forEach(item => {
                if (!item.__hidden) {
                    count += 1;
                }
            });
            return count * rowHeight!;
        }

        computeInnerTop() {
            const { keepForwardRenderRows } = this.props;
            const { rowHeight } = this.state;
            if (typeof rowHeight === 'function') {
                return 0;
            }

            const start = Math.max(this.start - keepForwardRenderRows!, 0);

            return start * rowHeight!;
        }

        getVisibleRange(ExpectStart: number) {
            const { height, rowHeight } = this.state;
            const len = this.props.dataSource!.length;

            let end,
                visibleCount = 0;
            let start = 0;
            if (typeof rowHeight === 'function') {
                // try get cell height;
                end = 1;
            } else {
                // @ts-expect-error parseInt 第一个参数是 string，这里是 number，在已经是 number 的情况下，这里其实只是想要取整
                visibleCount = parseInt(dom.getPixels(height) / rowHeight!, 10);

                if ('number' === typeof ExpectStart) {
                    start = ExpectStart < len ? ExpectStart : 0;
                }

                end = Math.min(+start + 1 + visibleCount + 10, len);
            }
            this.end = end;
            this.visibleCount = visibleCount;
            return {
                start,
                end,
            };
        }

        adjustScrollTop() {
            const { rowHeight, hasVirtualData, scrollToRow } = this.state;
            // @ts-expect-error 只有 rowHeight 是数字时才可以这样做，没有考虑 rowHeight 是函数的情况
            const oldScrollToRow = Math.floor(this.lastScrollTop / rowHeight);
            if (hasVirtualData && this.bodyNode) {
                //根据上次lastScrollTop记录的位置计算而来的scrollToRow位置不准 则以最新的scrollToRow为准重新校准位置（可能是由非用户滚动事件导致的props.scrollToRow发生了变化）
                if (oldScrollToRow !== scrollToRow) {
                    // @ts-expect-error 只有 rowHeight 是数字时才可以这样做，没有考虑 rowHeight 是函数的情况
                    this.bodyNode.scrollTop = rowHeight * scrollToRow!;
                } else {
                    this.bodyNode.scrollTop =
                        // @ts-expect-error 只有 rowHeight 是数字时才可以这样做，没有考虑 rowHeight 是函数的情况
                        (this.lastScrollTop % rowHeight) + rowHeight * scrollToRow;
                }
            }
        }

        adjustSize() {
            if (this.state.hasVirtualData && this.bodyNode) {
                const body = this.bodyNode;
                const virtualScrollNode = body.querySelector('div');
                const { clientHeight, clientWidth } = body;

                const tableInc = this.tableInc;
                const tableNode = findDOMNode(tableInc) as HTMLElement;
                const { prefix } = this.props;
                const headerNode = tableNode.querySelector(`.${prefix}table-header table`);
                const headerClientWidth = headerNode! && headerNode.clientWidth;
                // todo 2.0 设置宽度这个可以去掉
                if (clientWidth < headerClientWidth) {
                    dom.setStyle(virtualScrollNode, 'min-width', headerClientWidth);
                    const leftNode = this.bodyLeftNode;
                    const rightNode = this.bodyRightNode;
                    leftNode && dom.setStyle(leftNode, 'max-height', clientHeight);
                    rightNode && dom.setStyle(rightNode, 'max-height', clientHeight);
                } else {
                    dom.setStyle(virtualScrollNode, 'min-width', 'auto');
                }
            }
        }

        onScroll = () => {
            // 避免横向滚动带来的性能问题
            const scrollTop = this.bodyNode.scrollTop;
            if (scrollTop === this.lastScrollTop) {
                return;
            }
            const start = this.computeScrollToRow(scrollTop);
            if (!('scrollToRow' in this.props)) {
                this.setState({
                    scrollToRow: start,
                });
            }
            this.props.onBodyScroll!(start);
            this.lastScrollTop = scrollTop;
        };

        computeScrollToRow(offset: number) {
            const { rowHeight } = this.state;
            // @ts-expect-error rowHeight 只有是数字时才可以这样做，另 parseInt 接受的是 string，这里只是想取整
            const start = parseInt(offset / rowHeight);
            this.start = start;
            return start;
        }

        getBodyNode = (node: HTMLElement, lockType: string) => {
            lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
            this[`body${lockType}Node` as const] = node;
        };

        getTableInstance = (type: string, instance: InstanceType<typeof Base> | null) => {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            this[`table${type}Inc`] = instance;
        };

        getRowNode() {
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of this.tableInc when dataSource Changed
                // use try catch for temporary
                return findDOMNode(this.tableInc!.getRowRef(0)) as HTMLElement;
            } catch (error) {
                return null;
            }
        }

        render() {
            const {
                useVirtual,
                dataSource,
                rowHeight,
                scrollToRow,
                onBodyScroll,
                keepForwardRenderRows,
                ...others
            } = this.props;

            let { components, fixedHeader } = this.props;

            const entireDataSource = dataSource;
            let newDataSource = dataSource;

            this.rowSelection = this.props.rowSelection;
            if (this.state.hasVirtualData) {
                newDataSource = [];
                components = { ...components };
                const { start, end } = this.getVisibleRange(this.state.scrollToRow!);
                let count = -1;
                dataSource!.forEach((current, index, record) => {
                    if (!current.__hidden) {
                        count += 1;
                        if (count >= Math.max(start - keepForwardRenderRows!, 0) && count < end) {
                            newDataSource!.push(current);
                        }
                    }
                    current.__rowIndex = index;
                });

                if (!components.Body) {
                    components.Body = VirtualBody;
                }
                fixedHeader = true;
            }

            return (
                <BaseComponent
                    {...others}
                    scrollToRow={scrollToRow}
                    dataSource={newDataSource}
                    entireDataSource={entireDataSource!}
                    components={components}
                    fixedHeader={fixedHeader}
                />
            );
        }
    }
    return polyfill(statics(VirtualTable, BaseComponent));
}
