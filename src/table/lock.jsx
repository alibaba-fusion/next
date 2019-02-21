import React, { Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shallowElementEquals from 'shallow-element-equals';
import { dom, log, obj, events } from '../util';
import LockRow from './lock/row';
import LockBody from './lock/body';
import LockHeader from './lock/header';
import LockWrapper from './fixed/wrapper';
import { statics } from './util';

export default function lock(BaseComponent) {
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
            ...BaseComponent.propTypes
        }

        static defaultProps = {
            ...BaseComponent.defaultProps
        }

        static childContextTypes = {
            getTableInstance: PropTypes.func,
            getLockNode: PropTypes.func,
            onLockBodyScroll: PropTypes.func,
            onLockBodyWheel: PropTypes.func,
            onRowMouseEnter: PropTypes.func,
            onRowMouseLeave: PropTypes.func
        }

        constructor(props, context) {
            super(props, context);
            this.lockLeftChildren = [];
            this.lockRightChildren = [];
        }

        getChildContext() {
            return {
                getTableInstance: this.getTableInstance,
                getLockNode: this.getNode,
                onLockBodyWheel: this.onLockBodyWheel,
                onLockBodyScroll: this.onLockBodyScroll,
                onRowMouseEnter: this.onRowMouseEnter,
                onRowMouseLeave: this.onRowMouseLeave
            };
        }

        componentDidMount() {
            this.adjustSize = this.adjustSize.bind(this);

            this.adjustSize();
            this.scroll();

            events.on(window, 'resize', this.adjustSize);
        }

        shouldComponentUpdate(nextProps, nextState, nextContext) {
            if (nextProps.pure) {
                const isEqual = shallowElementEquals(nextProps, this.props);
                return !(isEqual && obj.shallowEqual(nextContext, this.context));
            }

            return true;
        }

        componentWillUpdate() {
            this._isLock = false;
        }

        componentDidUpdate() {
            this.adjustSize();
        }

        componentWillUnmount() {
            events.off(window, 'resize', this.adjustSize);
        }

        normalizeChildrenState(props) {
            let { children } = props;
            children = this.normalizeChildren(children);
            const splitChildren = this.splitFromNormalizeChildren(children);
            const { lockLeftChildren, lockRightChildren } = splitChildren;
            return {
                lockLeftChildren,
                lockRightChildren,
                children: this.mergeFromSplitLockChildren(splitChildren)
            };
        }

        // 将React结构化数据提取props转换成数组
        normalizeChildren(children) {
            let isLock = false;
            const getChildren = (children) => {
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
            const ret = getChildren(children);
            ret.forEach(child => {
                // 为自定义的列特殊处理
                if (child.__normalized && isLock) {
                    child.lock = 'left';
                    delete child.__normalized;
                }
            });
            this._isLock = isLock;
            return ret;
        }

        //从数组中分离出lock的列和正常的列
        splitFromNormalizeChildren(children) {
            const originChildren = deepCopy(children);
            const lockLeftChildren = deepCopy(children);
            const lockRightChildren = deepCopy(children);
            const loop = (lockChildren, condition) => {
                const ret = [];
                lockChildren.forEach((child) => {
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
            loop(lockLeftChildren, (child) => {
                if (child.lock === true || child.lock === 'left') {
                    return 'left';
                }
            });
            loop(lockRightChildren, (child) => {
                if (child.lock === 'right') {
                    return 'right';
                }
            });
            loop(originChildren, (child) => {
                return child.lock !== true && child.lock !== 'left' && child.lock !== 'right';
            });
            return {
                lockLeftChildren,
                lockRightChildren,
                originChildren
            };
        }

        //将左侧的锁列树和中间的普通树及右侧的锁列树进行合并
        mergeFromSplitLockChildren(splitChildren) {
            const { lockLeftChildren, lockRightChildren } = splitChildren;
            let { originChildren } = splitChildren;
            Array.prototype.unshift.apply(originChildren, lockLeftChildren);
            originChildren = originChildren.concat(lockRightChildren);
            return originChildren;
        }

        getTableInstance = (type, instance) => {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            this[`table${type}Inc`] = instance;
        }

        getNode = (type, node, lockType) => {
            lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
            this[`${type}${lockType}Node`] = node;
            if (type === 'header' && !this.innerHeaderNode && !lockType) {
                this.innerHeaderNode = this.headerNode.querySelector('div');
            }
        }

        onRowMouseEnter = (record, index) => {
            if (this.isLock()) {
                const row = this.getRowNode(index);
                const leftRow = this.getRowNode(index, 'left');
                const rightRow = this.getRowNode(index, 'right');
                [row, leftRow, rightRow].forEach(row => {
                    row && dom.addClass(row, 'hovered');
                });
            }
        }

        onRowMouseLeave = (record, index) => {
            if (this.isLock()) {
                const row = this.getRowNode(index);
                const leftRow = this.getRowNode(index, 'left');
                const rightRow = this.getRowNode(index, 'right');
                [row, leftRow, rightRow].forEach(row => {
                    row && dom.removeClass(row, 'hovered');
                });
            }
        }

        scroll() {
            const { scrollToCol = 0, scrollToRow = 0 } = this.props;
            if (!scrollToCol && !scrollToRow) {
                return;
            }
            const colCellNode = this.getCellNode(0, scrollToCol);
            const rowCellNode = this.getCellNode(scrollToRow, 0);
            const bodyNodeOffset = this.bodyNode.getBoundingClientRect();
            if (colCellNode) {
                const cellNodeoffset = colCellNode.getBoundingClientRect();
                const scrollLeft = cellNodeoffset.left - bodyNodeOffset.left;
                this.bodyNode.scrollLeft = scrollLeft;
            }
            if (rowCellNode) {
                const cellNodeoffset = rowCellNode.getBoundingClientRect();
                const scrollTop = cellNodeoffset.top - bodyNodeOffset.top;
                this.bodyNode.scrollTop = scrollTop;
            }
        }

        onLockBodyWheel = (e) => {
            const y = e.deltaY;
            const x = e.deltaX;
            const thresholdX = 15;
            const safeScrollX = x > -thresholdX && x < thresholdX;
            if (this.isLock()) {
                const lockRightBody = this.bodyRightNode,
                    lockLeftBody = this.bodyLeftNode,
                    scrollNode = this.bodyNode,
                    { scrollTop, clientHeight, scrollHeight } = scrollNode;

                if (lockLeftBody) {
                    lockLeftBody.scrollTop = y;
                }
                if (lockRightBody) {
                    lockRightBody.scrollTop = y;
                }
                scrollNode.scrollTop = scrollTop + y;
                const { scrollTop: newScrollTop } = scrollNode;
                if (newScrollTop + clientHeight < scrollHeight && newScrollTop && safeScrollX) {
                    e.preventDefault();
                }
            }
        }

        onLockBodyScroll = () => {
            if (this.isLock()) {
                const { rtl } = this.props;
                const lockRightBody = this.bodyRightNode,
                    lockLeftBody = this.bodyLeftNode,
                    lockRightTable = rtl ? this.getWrapperNode('left') : this.getWrapperNode('right'),
                    lockLeftTable = rtl ? this.getWrapperNode('right') : this.getWrapperNode('left'),
                    shadowClassName = 'shadow';

                const x = this.bodyNode.scrollLeft, y = this.bodyNode.scrollTop;

                if (lockLeftBody) {
                    lockLeftBody.scrollTop = y;
                }
                if (lockRightBody) {
                    lockRightBody.scrollTop = y;
                }
                if (x === 0) {
                    lockLeftTable && dom.removeClass(lockLeftTable, shadowClassName);
                    lockRightTable && dom.addClass(lockRightTable, shadowClassName);
                } else if (x === (this.bodyNode.scrollWidth - this.bodyNode.clientWidth)) {
                    lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
                    lockRightTable && dom.removeClass(lockRightTable, shadowClassName);
                } else {
                    lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
                    lockRightTable && dom.addClass(lockRightTable, shadowClassName);
                }
            }
        }

        // Table处理过后真实的lock状态
        isLock() {
            return this.lockLeftChildren.length || this.lockRightChildren.length;
        }

        // 用户设置的lock状态
        isOriginLock() {
            return this._isLock;
        }

        adjustSize() {
            if (!this.adjustIfTableNotNeedLock()) {
                this.adjustHeaderSize();
                this.adjustBodySize();
                this.adjustCellSize();
                this.onLockBodyScroll();
            }
        }

        adjustIfTableNotNeedLock() {
            if (this.isOriginLock() && this.tableInc.props.dataSource.length) {
                const configWidths = this.tableInc.flatChildren.map((item, index) => {
                    const row = this.getCellNode(0, index);
                    return (row && row.clientWidth) || 0;
                }).reduce((a, b) => a + b, 0);

                const node = findDOMNode(this);
                const width = node.clientWidth;
                const lockLeftLen = this.lockLeftChildren.length;
                const lockRightLen = this.lockRightChildren.length;

                if (configWidths <= width && configWidths > 0) {
                    if (lockLeftLen) {
                        this._notNeedAdjustLockLeft = true;
                    }
                    if (lockRightLen) {
                        this._notNeedAdjustLockRight = true;
                    }
                    if (lockRightLen || lockLeftLen) {
                        this.forceUpdate();
                        return true;
                    }
                } else if (this._notNeedAdjustLockLeft || this._notNeedAdjustLockRight) {
                    this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
                    this.forceUpdate();
                } else {
                    this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
                    return false;
                }
            }

            return false;
        }

        adjustBodySize() {
            if (this.isLock()) {
                const { rtl } = this.props;
                const body = this.bodyNode,
                    lockLeftBody = this.bodyLeftNode,
                    lockRightBody = this.bodyRightNode,
                    lockRightBodyWrapper = this.getWrapperNode('right'),
                    scrollbar = dom.scrollbar(),
                    bodyHeight = body.offsetHeight,
                    hasHozScroll = body.scrollWidth > body.clientWidth,
                    hasVerScroll = body.scrollHeight > body.clientHeight,
                    width = hasVerScroll ? scrollbar.width : 0,
                    lockBodyHeight = bodyHeight - (hasHozScroll ? scrollbar.height : 0);

                lockLeftBody && dom.setStyle(lockLeftBody, 'max-height', lockBodyHeight);
                lockRightBody && dom.setStyle(lockRightBody, 'max-height', lockBodyHeight);

                lockRightBodyWrapper && dom.setStyle(lockRightBodyWrapper, rtl ? 'left' : 'right', width);
            }
        }

        adjustHeaderSize() {
            if (this.isLock()) {
                this.tableInc.groupChildren.forEach((child, index) => {
                    const lastIndex = this.tableInc.groupChildren[index].length - 1;
                    const
                        headerRightRow = this.getHeaderCellNode(index, lastIndex),
                        headerLeftRow = this.getHeaderCellNode(index, 0),
                        headerRightLockRow = this.getHeaderCellNode(index, 0, 'right'),
                        headerLeftLockRow = this.getHeaderCellNode(index, 0, 'left');

                    if (headerRightRow && headerRightLockRow) {
                        const maxRightRowHeight = headerRightRow.offsetHeight;

                        dom.setStyle(headerRightLockRow, 'height', maxRightRowHeight);

                        setTimeout(() => {
                            this.tableRightInc.affixRef && this.tableRightInc.affixRef.getInstance().updatePosition();
                        });
                    }

                    if (headerLeftRow && headerLeftLockRow) {
                        const maxLeftRowHeight = headerLeftRow.offsetHeight;

                        dom.setStyle(headerLeftLockRow, 'height', maxLeftRowHeight);

                        setTimeout(() => {
                            this.tableLeftInc.affixRef && this.tableLeftInc.affixRef.getInstance().updatePosition();
                        });
                    }

                });
            }
        }

        adjustCellSize() {
            if (this.isLock()) {
                this.tableInc.props.dataSource.forEach((item, index) => {
                    const lockLeftRow = this.getCellNode(index, 0, 'left'),
                        lockRightRow = this.getCellNode(index, 0, 'right'),
                        row = this.getFirstNormalCellNode(index),
                        rowHeight = row && parseFloat(getComputedStyle(row).height) || 0;
                    let lockLeftHeight = 0, lockRightHeight = 0;

                    if (lockLeftRow) {
                        lockLeftHeight = lockLeftRow.offsetHeight;
                    }
                    if (lockRightRow) {
                        lockRightHeight = lockRightRow.offsetHeight;
                    }
                    if (lockLeftRow && rowHeight !== lockLeftHeight) {
                        dom.setStyle(lockLeftRow, 'height', rowHeight);
                    }
                    if (lockRightRow && rowHeight !== lockRightHeight) {
                        dom.setStyle(lockRightRow, 'height', rowHeight);
                    }
                });
            }
        }

        getWrapperNode(type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(this.refs[`lock${type}`]);
            } catch (error) {
                return null;
            }
        }

        getFirstNormalCellNode(index) {
            let i = 0;
            let row;
            do {
                row = this.getCellNode(index, i);
                i++;
            } while ((!row || row && row.rowSpan && row.rowSpan > 1) && this.tableInc.flatChildren.length > i);

            return row;
        }

        getRowNode(index, type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            const table = this[`table${type}Inc`];

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.getRowRef(index));
            } catch (error) {
                return null;
            }
        }

        getHeaderCellNode(index, i, type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            const table = this[`table${type}Inc`];

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.getHeaderCellRef(index, i));
            } catch (error) {
                return null;
            }
        }

        getCellNode(index, i, type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            const table = this[`table${type}Inc`];

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.getCellRef(index, i));
            } catch (error) {
                return null;
            }
        }

        render() {
            /* eslint-disable no-unused-vars, prefer-const */
            let { children, prefix, components, className, ...others } = this.props;
            let { lockLeftChildren, lockRightChildren, children: normalizedChildren } = this.normalizeChildrenState(this.props);
            if (this._notNeedAdjustLockLeft) {
                lockLeftChildren = [];
            }
            if (this._notNeedAdjustLockRight) {
                lockRightChildren = [];
            }
            this.lockLeftChildren = lockLeftChildren;
            this.lockRightChildren = lockRightChildren;

            if (this.isOriginLock()) {
                components = { ...components };
                components.Body = components.Body || LockBody;
                components.Header = components.Header || LockHeader;
                components.Wrapper = components.Wrapper || LockWrapper;
                components.Row = components.Row || LockRow;
                className = classnames({
                    [`${prefix}table-lock`]: true,
                    [className]: className
                });
                const content = [
                    <BaseComponent {...others} key="lock-left" columns={lockLeftChildren} className={`${prefix}table-lock-left`} prefix={prefix} lockType="left" components={components} ref="lockLeft" loading={false} />,
                    <BaseComponent {...others} key="lock-right" columns={lockRightChildren} className={`${prefix}table-lock-right`} prefix={prefix} lockType="right" components={components} ref="lockRight" loading={false} />
                ];
                return <BaseComponent {...others} columns={normalizedChildren} prefix={prefix} wrapperContent={content} components={components} className={className} />;
            }
            return (<BaseComponent {...this.props} />);
        }
    }
    statics(LockTable, BaseComponent);
    return LockTable;
}


function deepCopy(arr) {
    let copy = (arr) => {
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
