import React, { Children } from 'react';
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

export default function stickyLock(BaseComponent) {
    /** Table */
    class LockTable extends React.Component {
        static LockRow = LockRow;
        static LockBody = LockBody;
        static LockHeader = LockHeader;
        static propTypes = {
            scrollToCol: PropTypes.number,
            /**
             * 指定滚动到某一行，仅在`useVirtual`的时候生效
             */
            scrollToRow: PropTypes.number,
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

        state = {};

        constructor(props, context) {
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
            this.onLockBodyScroll(isEmpty ? { currentTarget: this.headerNode } : { currentTarget: this.bodyNode });
            this.forceUpdate();

            events.on(window, 'resize', this.updateOffsetArr);
        }

        shouldComponentUpdate(nextProps, nextState, nextContext) {
            if (nextProps.pure) {
                const isEqual = shallowElementEquals(nextProps, this.props);
                return !(isEqual && obj.shallowEqual(nextContext, this.context));
            }

            return true;
        }

        componentDidUpdate() {
            this.updateOffsetArr();
            this.onLockBodyScroll(
                this.bodyNode ? { currentTarget: this.bodyNode } : { currentTarget: this.headerNode },
                true
            );
        }

        componentWillUnmount() {
            this.pingLeft = false;
            this.pingRight = false;
            events.off(window, 'resize', this.updateOffsetArr);
        }

        updateOffsetArr = () => {
            const { lockLeftChildren, lockRightChildren, originChildren } = this.splitChildren || {};

            const leftLen = this.getFlatenChildren(lockLeftChildren).length;
            const rightLen = this.getFlatenChildren(lockRightChildren).length;
            const totalLen = leftLen + rightLen + this.getFlatenChildren(originChildren).length;

            const hasLockLeft = leftLen > 0;
            const hasLockRight = rightLen > 0;

            const leftOffsetArr = this.getStickyWidth(lockLeftChildren, 'left', totalLen);
            const rightOffsetArr = this.getStickyWidth(lockRightChildren, 'right', totalLen);

            const state = {};

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

        normalizeChildrenState(props) {
            const columns = this.normalizeChildren(props);

            this.splitChildren = this.splitFromNormalizeChildren(columns);

            return this.mergeFromSplitLockChildren(this.splitChildren, props.prefix);
        }

        // 将React结构化数据提取props转换成数组
        normalizeChildren(props) {
            const { children, columns } = props;
            let isLock = false,
                ret;
            const getChildren = children => {
                const ret = [];
                Children.forEach(children, child => {
                    if (child) {
                        const props = { ...child.props };
                        if ([true, 'left', 'right'].indexOf(props.lock) > -1) {
                            isLock = true;
                            if (!('width' in props)) {
                                log.warning(`Should config width for lock column named [ ${props.dataIndex} ].`);
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
                isLock = columns.find(record => [true, 'left', 'right'].indexOf(record.lock) > -1);
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
         * 从数组中分离出lock的列和正常的列
         * @param {Array} children
         * @return {Object} { lockLeftChildren, lockRightChildren, originChildren } 锁左列, 锁左列, 剩余列
         */
        splitFromNormalizeChildren(children) {
            const originChildren = deepCopy(children);
            const lockLeftChildren = deepCopy(children);
            const lockRightChildren = deepCopy(children);
            const loop = (lockChildren, condition) => {
                const ret = [];
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
         * @param {Object} splitChildren { lockLeftChildren, lockRightChildren, originChildren }
         * @return {Array} originChildren
         */
        mergeFromSplitLockChildren(splitChildren, prefix) {
            const { lockLeftChildren, lockRightChildren } = splitChildren;
            const { originChildren } = splitChildren;

            const flatenLeftChildren = this.getFlatenChildren(lockLeftChildren);
            const flatenRightChildren = this.getFlatenChildren(lockRightChildren);

            setStickyStyle(lockLeftChildren, flatenLeftChildren, 'left', this.state.leftOffsetArr, prefix);
            setStickyStyle(lockRightChildren, flatenRightChildren, 'right', this.state.rightOffsetArr, prefix);

            return [...lockLeftChildren, ...originChildren, ...lockRightChildren];
        }

        getCellNode(index, i) {
            const table = this.tableInc;

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.getCellRef(index, i));
            } catch (error) {
                return null;
            }
        }

        onLockBodyScroll = (e, forceSet) => {
            const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget || {};
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

        getStickyWidth = (lockChildren, dir, totalLen) => {
            const { dataSource, scrollToRow } = this.props;
            const offsetArr = [];
            const flatenChildren = this.getFlatenChildren(lockChildren);
            const len = flatenChildren.length;

            flatenChildren.reduce((ret, col, index) => {
                const tag = dir === 'left' ? index : len - 1 - index;
                const tagNext = dir === 'left' ? tag - 1 : tag + 1;
                const nodeToGetWidth = dir === 'left' ? tag - 1 : totalLen - index;

                if (dir === 'left' && tag === 0) {
                    ret[0] = 0;
                    return ret;
                } else if (dir === 'right' && tag === len - 1) {
                    ret[tag] = 0;
                    return ret;
                }

                const { headerCellRowIndex, headerCellColIndex } = flatenChildren[tagNext];

                // header with no dataSource
                const isEmpty = !(dataSource && dataSource.length > 0);
                // no header
                const node = isEmpty
                    ? this.getHeaderCellNode(headerCellRowIndex, headerCellColIndex)
                    : this.getCellNode(scrollToRow || (dataSource[0] && dataSource[0].__rowIndex) || 0, nodeToGetWidth);
                let colWidth = 0;
                if (node) {
                    colWidth = parseFloat(getComputedStyle(node).width) / node.colSpan || 0;
                }

                ret[tag] = (ret[tagNext] || 0) + colWidth;
                return ret;
            }, offsetArr);

            return offsetArr;
        };

        getTableInstance = (type, instance) => {
            type = '';
            this[`table${type}Inc`] = instance;
        };

        getNode = (type, node) => {
            this[`${type}Node`] = node;
        };

        getTableNode() {
            const table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.tableEl);
            } catch (error) {
                return null;
            }
        }

        getHeaderCellNode(index, i) {
            const table = this.tableInc;

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.getHeaderCellRef(index, i));
            } catch (error) {
                return null;
            }
        }

        getFlatenChildren = (children = []) => {
            const loop = arr => {
                const newArray = [];
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
            let { children, columns, prefix, components, scrollToRow, className, dataSource, ...others } = this.props;

            const normalizedChildren = this.normalizeChildrenState(this.props);

            components = { ...components };
            components.Body = components.Body || LockBody;
            components.Header = components.Header || LockHeader;
            components.Wrapper = components.Wrapper || LockWrapper;
            components.Row = components.Row || LockRow;
            className = classnames({
                [`${prefix}table-lock`]: true,
                [`${prefix}table-stickylock`]: true,
                [`${prefix}table-wrap-empty`]: !dataSource.length,
                [className]: className,
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
    statics(LockTable, BaseComponent);
    return LockTable;
}

function deepCopy(arr) {
    let copy = arr => {
        return arr.map(item => {
            const newItem = { ...item };
            if (item.children) {
                item.children = copy(item.children);
            }
            return newItem;
        });
    };
    return copy(arr);
}
