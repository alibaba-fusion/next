import React, { Children, ReactElement } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shallowElementEquals from 'shallow-element-equals';
import { log, obj, dom, events } from '../util';
import LockRow from './lock/row';
import LockBody from './lock/body';
import LockHeader from './lock/header';
import LockWrapper from './fixed/wrapper';
import { statics, setStickyStyle } from './util';
import type Base from './base';
import type {
    NormalizedColumnProps,
    RowLike,
    StickyLockTableProps,
    StickyLockTableState,
    WrapperLike,
} from './types';

// Fixme: 实现很简陋的 deepCopy，应用 lodash 替换
function deepCopy(arr: NormalizedColumnProps[]) {
    const copy = (arr: NormalizedColumnProps[]) => {
        return arr.map(item => {
            const newItem = { ...item };
            if (item.children) {
                item.children = copy(item.children);
            }
            return newItem;
        });
    };
    return copy(arr) as NormalizedColumnProps[];
}

export default function stickyLock(BaseComponent: typeof Base) {
    /** Table */
    class LockTable extends React.Component<StickyLockTableProps, StickyLockTableState> {
        static LockRow = LockRow;
        static LockBody = LockBody;
        static LockHeader = LockHeader;
        static propTypes = {
            scrollToCol: PropTypes.number,
            /**
             * 指定滚动到某一行，仅在`useVirtual`的时候生效
             */
            // scrollToRow: PropTypes.number,
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
        };

        static childContextTypes = {
            getTableInstance: PropTypes.func,
            getLockNode: PropTypes.func,
            onLockBodyScroll: PropTypes.func,
        };

        state = {} as StickyLockTableState;
        pingLeft?: boolean;
        pingRight?: boolean;
        splitChildren: {
            lockLeftChildren: NormalizedColumnProps[];
            lockRightChildren: NormalizedColumnProps[];
            originChildren: NormalizedColumnProps[];
        };

        constructor(props: StickyLockTableProps) {
            super(props);

            this.state = {
                hasLockLeft: true,
                hasLockRight: true,
            };

            this.pingLeft = false;
            this.pingRight = false;
        }

        getChildContext() {
            return {
                getTableInstance: this.getTableInstance,
                getLockNode: this.getNode,
                onLockBodyScroll: this.onLockBodyScroll,
            };
        }

        componentDidMount() {
            const { dataSource } = this.props;
            const isEmpty = !(dataSource && dataSource.length > 0);

            this.updateOffsetArr();
            this.onLockBodyScroll(
                isEmpty ? { currentTarget: this.headerNode } : { currentTarget: this.bodyNode }
            );
            this.forceUpdate();

            events.on(window, 'resize', this.updateOffsetArr);
        }

        shouldComponentUpdate(
            nextProps: StickyLockTableProps,
            nextState: StickyLockTableState,
            nextContext: unknown
        ) {
            if (nextProps.pure) {
                const isEqual = shallowElementEquals(nextProps, this.props);
                return !(isEqual && obj.shallowEqual(nextContext, this.context));
            }

            return true;
        }

        componentDidUpdate() {
            this.updateOffsetArr();
            this.onLockBodyScroll(
                this.bodyNode
                    ? { currentTarget: this.bodyNode }
                    : { currentTarget: this.headerNode },
                true
            );
        }

        componentWillUnmount() {
            this.pingLeft = false;
            this.pingRight = false;
            events.off(window, 'resize', this.updateOffsetArr);
        }

        [tableKey: `table${string}Inc`]: InstanceType<typeof Base> | null;
        [nodeKey: `${string}${'body' | 'header'}Node`]: HTMLElement | null;

        updateOffsetArr = () => {
            const { lockLeftChildren, lockRightChildren, originChildren } =
                this.splitChildren || {};

            const leftLen = this.getFlatenChildren(lockLeftChildren).length;
            const rightLen = this.getFlatenChildren(lockRightChildren).length;
            const totalLen = leftLen + rightLen + this.getFlatenChildren(originChildren).length;

            const hasLockLeft = leftLen > 0;
            const hasLockRight = rightLen > 0;

            const leftOffsetArr = this.getStickyWidth(lockLeftChildren, 'left', totalLen);
            const rightOffsetArr = this.getStickyWidth(lockRightChildren, 'right', totalLen);

            const state: Partial<StickyLockTableState> = {};

            if (`${leftOffsetArr}` !== `${this.state.leftOffsetArr}`) {
                state.leftOffsetArr = leftOffsetArr;
            }

            if (`${rightOffsetArr}` !== `${this.state.rightOffsetArr}`) {
                state.rightOffsetArr = rightOffsetArr;
            }

            if (hasLockLeft !== this.state.hasLockLeft) {
                state.hasLockLeft = hasLockLeft;
            }

            if (hasLockRight !== this.state.hasLockRight) {
                state.hasLockRight = hasLockRight;
            }

            if (Object.keys(state).length > 0) {
                this.setState(state);
            }
        };

        normalizeChildrenState(props: StickyLockTableProps) {
            const columns = this.normalizeChildren(props);

            this.splitChildren = this.splitFromNormalizeChildren(columns);

            return this.mergeFromSplitLockChildren(this.splitChildren, props.prefix!);
        }

        // 将 React 结构化数据提取 props 转换成数组
        normalizeChildren(props: StickyLockTableProps) {
            const { children, columns } = props;
            let isLock: boolean | NormalizedColumnProps | undefined = false,
                ret;
            const getChildren = (children: StickyLockTableProps['children']) => {
                const ret: NormalizedColumnProps[] = [];
                Children.forEach(children, (child: ReactElement) => {
                    if (child) {
                        const props = { ...child.props };
                        if ([true, 'left', 'right'].indexOf(props.lock) > -1) {
                            isLock = true;
                            if (!('width' in props)) {
                                log.warning(
                                    `Should config width for lock column named [ ${props.dataIndex} ].`
                                );
                            }
                        }
                        ret.push(props);
                        if (child.props.children) {
                            props.children = getChildren(child.props.children);
                        }
                    }
                });
                return ret;
            };

            if (columns && !children) {
                ret = columns;
                isLock = columns.find(record => [true, 'left', 'right'].indexOf(record.lock!) > -1);
            } else {
                ret = getChildren(children);
            }
            ret.forEach(child => {
                // 为自定义的列特殊处理
                if (child.__normalized && isLock) {
                    // users can set lock type for column selection now, so its origin lock type comes first
                    child.lock = child.lock || 'left';
                    delete child.__normalized;
                }
            });
            return ret;
        }

        /**
         * 从数组中分离出 lock 的列和正常的列
         * @returns 锁左列，锁左列，剩余列
         */
        splitFromNormalizeChildren(children: NormalizedColumnProps[]) {
            const originChildren = deepCopy(children);
            const lockLeftChildren = deepCopy(children);
            const lockRightChildren = deepCopy(children);
            const loop = (
                lockChildren: NormalizedColumnProps[],
                condition: (child: NormalizedColumnProps) => string | boolean | undefined
            ) => {
                const ret: NormalizedColumnProps[] = [];
                lockChildren.forEach(child => {
                    if (child.children) {
                        const res = loop(child.children, condition);
                        if (!res.length) {
                            ret.push(child);
                        }
                    } else {
                        const order = condition(child);
                        if (!order) {
                            ret.push(child);
                        }
                    }
                });
                ret.forEach(res => {
                    const index = lockChildren.indexOf(res);
                    lockChildren.splice(index, 1);
                });
                return lockChildren;
            };
            loop(lockLeftChildren, child => {
                if (child.lock === true || child.lock === 'left') {
                    return 'left';
                }
            });
            loop(lockRightChildren, child => {
                if (child.lock === 'right') {
                    return 'right';
                }
            });
            loop(originChildren, child => {
                return child.lock !== true && child.lock !== 'left' && child.lock !== 'right';
            });
            return {
                lockLeftChildren,
                lockRightChildren,
                originChildren,
            };
        }

        /**
         * 将左侧的锁列树和中间的普通树及右侧的锁列树进行合并
         * 会在原始 originChildren 上做改动
         * @param splitChildren - \{ lockLeftChildren, lockRightChildren, originChildren \}
         * @returns originChildren
         */
        mergeFromSplitLockChildren(splitChildren: typeof this.splitChildren, prefix: string) {
            const { lockLeftChildren, lockRightChildren } = splitChildren;
            const { originChildren } = splitChildren;

            const flatenLeftChildren = this.getFlatenChildren(lockLeftChildren);
            const flatenRightChildren = this.getFlatenChildren(lockRightChildren);

            setStickyStyle(
                lockLeftChildren,
                flatenLeftChildren,
                'left',
                this.state.leftOffsetArr,
                prefix
            );
            setStickyStyle(
                lockRightChildren,
                flatenRightChildren,
                'right',
                this.state.rightOffsetArr,
                prefix
            );

            return [...lockLeftChildren, ...originChildren, ...lockRightChildren];
        }

        getCellNode(index: number, i: number) {
            const table = this.tableInc;

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table!.getCellRef(index, i)) as HTMLElement;
            } catch (error) {
                return null;
            }
        }

        onLockBodyScroll = (e: { currentTarget?: HTMLElement | null }, forceSet?: boolean) => {
            const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget! || {};
            const { pingRight, pingLeft } = this;

            const pingLeftNext = scrollLeft > 0 && this.state.hasLockLeft;
            const pingRightNext = scrollLeft < scrollWidth - clientWidth && this.state.hasLockRight;

            if (forceSet || pingLeft !== pingLeftNext || pingRight !== pingRightNext) {
                const { prefix } = this.props;
                const table = this.getTableNode();

                this.pingLeft = pingLeftNext;
                this.pingRight = pingRightNext;

                const leftFunc = pingLeftNext ? 'addClass' : 'removeClass';
                dom[leftFunc](table, `${prefix}table-ping-left`);
                const rightFunc = pingRightNext ? 'addClass' : 'removeClass';
                dom[rightFunc](table, `${prefix}table-ping-right`);
            }
        };

        getStickyWidth = (
            lockChildren: NormalizedColumnProps[],
            dir: 'left' | 'right',
            totalLen: number
        ) => {
            const offsetArr: number[] = [];
            const flatenChildren = this.getFlatenChildren(lockChildren);
            const len = flatenChildren.length;

            flatenChildren.reduce((ret, col, index) => {
                const tag = dir === 'left' ? index : len - 1 - index;
                const tagNext = dir === 'left' ? tag - 1 : tag + 1;

                if (dir === 'left' && tag === 0) {
                    ret[0] = 0;
                    return ret;
                } else if (dir === 'right' && tag === len - 1) {
                    ret[tag] = 0;
                    return ret;
                }

                const { headerCellRowIndex, headerCellColIndex } = flatenChildren[tagNext];

                // 根据 tableHeader 计算，避免单元格合并出现问题
                const node = this.getHeaderCellNode(headerCellRowIndex!, headerCellColIndex!);
                let colWidth = 0;
                if (node) {
                    colWidth = parseFloat(getComputedStyle(node).width) || 0;
                }

                ret[tag] = (ret[tagNext] || 0) + colWidth;
                return ret;
            }, offsetArr);

            return offsetArr;
        };

        getTableInstance = (type: string, instance: InstanceType<typeof Base> | null) => {
            type = '';
            this[`table${type}Inc`] = instance;
        };

        getNode = (type: 'body' | 'header', node: HTMLElement) => {
            this[`${type}Node` as const] = node;
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

        getHeaderCellNode(index: number, i: number) {
            const table = this.tableInc;

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table!.getHeaderCellRef(index, i)) as HTMLElement;
            } catch (error) {
                return null;
            }
        }

        getFlatenChildren = (children: NormalizedColumnProps[] = []) => {
            const loop = (arr: NormalizedColumnProps[]) => {
                const newArray: NormalizedColumnProps[] = [];
                arr.forEach(child => {
                    if (child.children) {
                        newArray.push(...loop(child.children));
                    } else {
                        newArray.push(child);
                    }
                });
                return newArray;
            };

            return loop(children);
        };

        render() {
            /* eslint-disable no-unused-vars, prefer-const */
            let {
                children,
                columns,
                prefix,
                components,
                scrollToRow,
                className,
                dataSource,
                ...others
            } = this.props;

            const normalizedChildren = this.normalizeChildrenState(this.props);

            components = { ...components };
            components.Body = components.Body || LockBody;
            components.Header = components.Header || LockHeader;
            components.Wrapper = components.Wrapper || (LockWrapper as WrapperLike);
            components.Row = components.Row || (LockRow as RowLike);
            className = classnames({
                [`${prefix}table-lock`]: true,
                [`${prefix}table-stickylock`]: true,
                [`${prefix}table-wrap-empty`]: !dataSource!.length,
                [className!]: className,
            });

            return (
                <BaseComponent
                    {...others}
                    dataSource={dataSource}
                    columns={normalizedChildren}
                    prefix={prefix}
                    components={components}
                    className={className}
                />
            );
        }
    }
    return statics(LockTable, BaseComponent);
}
