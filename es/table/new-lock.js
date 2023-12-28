import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
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
    var LockTable = /** @class */ (function (_super) {
        __extends(LockTable, _super);
        function LockTable(props, context) {
            var _this = _super.call(this, props) || this;
            _this.state = {};
            _this.updateOffsetArr = function () {
                var _a = _this.splitChildren || {}, lockLeftChildren = _a.lockLeftChildren, lockRightChildren = _a.lockRightChildren, originChildren = _a.originChildren;
                var leftLen = _this.getFlatenChildren(lockLeftChildren).length;
                var rightLen = _this.getFlatenChildren(lockRightChildren).length;
                var totalLen = leftLen + rightLen + _this.getFlatenChildren(originChildren).length;
                var hasLockLeft = leftLen > 0;
                var hasLockRight = rightLen > 0;
                var leftOffsetArr = _this.getStickyWidth(lockLeftChildren, 'left', totalLen);
                var rightOffsetArr = _this.getStickyWidth(lockRightChildren, 'right', totalLen);
                var state = {};
                if ("".concat(leftOffsetArr) !== "".concat(_this.state.leftOffsetArr)) {
                    state.leftOffsetArr = leftOffsetArr;
                }
                if ("".concat(rightOffsetArr) !== "".concat(_this.state.rightOffsetArr)) {
                    state.rightOffsetArr = rightOffsetArr;
                }
                if (hasLockLeft !== _this.state.hasLockLeft) {
                    state.hasLockLeft = hasLockLeft;
                }
                if (hasLockRight !== _this.state.hasLockRight) {
                    state.hasLockRight = hasLockRight;
                }
                if (Object.keys(state).length > 0) {
                    _this.setState(state);
                }
            };
            _this.onLockBodyScroll = function (e, forceSet) {
                var _a = e.currentTarget || {}, scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
                var _b = _this, pingRight = _b.pingRight, pingLeft = _b.pingLeft;
                var pingLeftNext = scrollLeft > 0 && _this.state.hasLockLeft;
                var pingRightNext = scrollLeft < scrollWidth - clientWidth && _this.state.hasLockRight;
                if (forceSet || pingLeft !== pingLeftNext || pingRight !== pingRightNext) {
                    var prefix = _this.props.prefix;
                    var table = _this.getTableNode();
                    _this.pingLeft = pingLeftNext;
                    _this.pingRight = pingRightNext;
                    var leftFunc = pingLeftNext ? 'addClass' : 'removeClass';
                    dom[leftFunc](table, "".concat(prefix, "table-ping-left"));
                    var rightFunc = pingRightNext ? 'addClass' : 'removeClass';
                    dom[rightFunc](table, "".concat(prefix, "table-ping-right"));
                }
            };
            _this.getStickyWidth = function (lockChildren, dir, totalLen) {
                var _a = _this.props, dataSource = _a.dataSource, scrollToRow = _a.scrollToRow;
                var offsetArr = [];
                var flatenChildren = _this.getFlatenChildren(lockChildren);
                var len = flatenChildren.length;
                flatenChildren.reduce(function (ret, col, index) {
                    var tag = dir === 'left' ? index : len - 1 - index;
                    var tagNext = dir === 'left' ? tag - 1 : tag + 1;
                    var nodeToGetWidth = dir === 'left' ? tag - 1 : totalLen - index;
                    if (dir === 'left' && tag === 0) {
                        ret[0] = 0;
                        return ret;
                    }
                    else if (dir === 'right' && tag === len - 1) {
                        ret[tag] = 0;
                        return ret;
                    }
                    var _a = flatenChildren[tagNext], headerCellRowIndex = _a.headerCellRowIndex, headerCellColIndex = _a.headerCellColIndex;
                    // header with no dataSource
                    var isEmpty = !(dataSource && dataSource.length > 0);
                    // no header
                    var node = isEmpty
                        ? _this.getHeaderCellNode(headerCellRowIndex, headerCellColIndex)
                        : _this.getCellNode(scrollToRow || (dataSource[0] && dataSource[0].__rowIndex) || 0, nodeToGetWidth);
                    var colWidth = (node && parseFloat(getComputedStyle(node).width)) || 0;
                    ret[tag] = (ret[tagNext] || 0) + colWidth;
                    return ret;
                }, offsetArr);
                return offsetArr;
            };
            _this.getTableInstance = function (type, instance) {
                type = '';
                _this["table".concat(type, "Inc")] = instance;
            };
            _this.getNode = function (type, node) {
                _this["".concat(type, "Node")] = node;
            };
            _this.getFlatenChildren = function (children) {
                if (children === void 0) { children = []; }
                var loop = function (arr) {
                    var newArray = [];
                    arr.forEach(function (child) {
                        if (child.children) {
                            newArray.push.apply(newArray, __spreadArray([], __read(loop(child.children)), false));
                        }
                        else {
                            newArray.push(child);
                        }
                    });
                    return newArray;
                };
                return loop(children);
            };
            _this.state = {
                hasLockLeft: true,
                hasLockRight: true,
            };
            _this.pingLeft = false;
            _this.pingRight = false;
            return _this;
        }
        LockTable.prototype.getChildContext = function () {
            return {
                getTableInstance: this.getTableInstance,
                getLockNode: this.getNode,
                onLockBodyScroll: this.onLockBodyScroll,
            };
        };
        LockTable.prototype.componentDidMount = function () {
            var dataSource = this.props.dataSource;
            var isEmpty = !(dataSource && dataSource.length > 0);
            this.updateOffsetArr();
            this.onLockBodyScroll(isEmpty ? { currentTarget: this.headerNode } : { currentTarget: this.bodyNode });
            this.forceUpdate();
            events.on(window, 'resize', this.updateOffsetArr);
        };
        LockTable.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
            if (nextProps.pure) {
                var isEqual = shallowElementEquals(nextProps, this.props);
                return !(isEqual && obj.shallowEqual(nextContext, this.context));
            }
            return true;
        };
        LockTable.prototype.componentDidUpdate = function () {
            this.updateOffsetArr();
            this.onLockBodyScroll(this.bodyNode ? { currentTarget: this.bodyNode } : { currentTarget: this.headerNode }, true);
        };
        LockTable.prototype.componentWillUnmount = function () {
            this.pingLeft = false;
            this.pingRight = false;
            events.off(window, 'resize', this.updateOffsetArr);
        };
        LockTable.prototype.normalizeChildrenState = function (props) {
            var columns = this.normalizeChildren(props);
            this.splitChildren = this.splitFromNormalizeChildren(columns);
            return this.mergeFromSplitLockChildren(this.splitChildren, props.prefix);
        };
        // 将React结构化数据提取props转换成数组
        LockTable.prototype.normalizeChildren = function (props) {
            var children = props.children, columns = props.columns;
            var isLock = false, ret;
            var getChildren = function (children) {
                var ret = [];
                Children.forEach(children, function (child) {
                    if (child) {
                        var props_1 = __assign({}, child.props);
                        if ([true, 'left', 'right'].indexOf(props_1.lock) > -1) {
                            isLock = true;
                            if (!('width' in props_1)) {
                                log.warning("Should config width for lock column named [ ".concat(props_1.dataIndex, " ]."));
                            }
                        }
                        ret.push(props_1);
                        if (child.props.children) {
                            props_1.children = getChildren(child.props.children);
                        }
                    }
                });
                return ret;
            };
            if (columns && !children) {
                ret = columns;
                isLock = columns.find(function (record) { return [true, 'left', 'right'].indexOf(record.lock) > -1; });
            }
            else {
                ret = getChildren(children);
            }
            ret.forEach(function (child) {
                // 为自定义的列特殊处理
                if (child.__normalized && isLock) {
                    // users can set lock type for column selection now, so its origin lock type comes first
                    child.lock = child.lock || 'left';
                    delete child.__normalized;
                }
            });
            return ret;
        };
        /**
         * 从数组中分离出lock的列和正常的列
         * @param {Array} children
         * @return {Object} { lockLeftChildren, lockRightChildren, originChildren } 锁左列, 锁左列, 剩余列
         */
        LockTable.prototype.splitFromNormalizeChildren = function (children) {
            var originChildren = deepCopy(children);
            var lockLeftChildren = deepCopy(children);
            var lockRightChildren = deepCopy(children);
            var loop = function (lockChildren, condition) {
                var ret = [];
                lockChildren.forEach(function (child) {
                    if (child.children) {
                        var res = loop(child.children, condition);
                        if (!res.length) {
                            ret.push(child);
                        }
                    }
                    else {
                        var order = condition(child);
                        if (!order) {
                            ret.push(child);
                        }
                    }
                });
                ret.forEach(function (res) {
                    var index = lockChildren.indexOf(res);
                    lockChildren.splice(index, 1);
                });
                return lockChildren;
            };
            loop(lockLeftChildren, function (child) {
                if (child.lock === true || child.lock === 'left') {
                    return 'left';
                }
            });
            loop(lockRightChildren, function (child) {
                if (child.lock === 'right') {
                    return 'right';
                }
            });
            loop(originChildren, function (child) {
                return child.lock !== true && child.lock !== 'left' && child.lock !== 'right';
            });
            return {
                lockLeftChildren: lockLeftChildren,
                lockRightChildren: lockRightChildren,
                originChildren: originChildren,
            };
        };
        /**
         * 将左侧的锁列树和中间的普通树及右侧的锁列树进行合并
         * 会在原始 originChildren 上做改动
         * @param {Object} splitChildren { lockLeftChildren, lockRightChildren, originChildren }
         * @return {Array} originChildren
         */
        LockTable.prototype.mergeFromSplitLockChildren = function (splitChildren, prefix) {
            var lockLeftChildren = splitChildren.lockLeftChildren, lockRightChildren = splitChildren.lockRightChildren;
            var originChildren = splitChildren.originChildren;
            var flatenLeftChildren = this.getFlatenChildren(lockLeftChildren);
            var flatenRightChildren = this.getFlatenChildren(lockRightChildren);
            setStickyStyle(lockLeftChildren, flatenLeftChildren, 'left', this.state.leftOffsetArr, prefix);
            setStickyStyle(lockRightChildren, flatenRightChildren, 'right', this.state.rightOffsetArr, prefix);
            return __spreadArray(__spreadArray(__spreadArray([], __read(lockLeftChildren), false), __read(originChildren), false), __read(lockRightChildren), false);
        };
        LockTable.prototype.getCellNode = function (index, i) {
            var table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.getCellRef(index, i));
            }
            catch (error) {
                return null;
            }
        };
        LockTable.prototype.getTableNode = function () {
            var table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.tableEl);
            }
            catch (error) {
                return null;
            }
        };
        LockTable.prototype.getHeaderCellNode = function (index, i) {
            var table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.getHeaderCellRef(index, i));
            }
            catch (error) {
                return null;
            }
        };
        LockTable.prototype.render = function () {
            var _a;
            /* eslint-disable no-unused-vars, prefer-const */
            var _b = this.props, children = _b.children, columns = _b.columns, prefix = _b.prefix, components = _b.components, scrollToRow = _b.scrollToRow, className = _b.className, dataSource = _b.dataSource, others = __rest(_b, ["children", "columns", "prefix", "components", "scrollToRow", "className", "dataSource"]);
            var normalizedChildren = this.normalizeChildrenState(this.props);
            components = __assign({}, components);
            components.Body = components.Body || LockBody;
            components.Header = components.Header || LockHeader;
            components.Wrapper = components.Wrapper || LockWrapper;
            components.Row = components.Row || LockRow;
            className = classnames((_a = {},
                _a["".concat(prefix, "table-lock")] = true,
                _a["".concat(prefix, "table-stickylock")] = true,
                _a["".concat(prefix, "table-wrap-empty")] = !dataSource.length,
                _a[className] = className,
                _a));
            return (React.createElement(BaseComponent, __assign({}, others, { dataSource: dataSource, columns: normalizedChildren, prefix: prefix, components: components, className: className })));
        };
        LockTable.LockRow = LockRow;
        LockTable.LockBody = LockBody;
        LockTable.LockHeader = LockHeader;
        LockTable.propTypes = __assign({ scrollToCol: PropTypes.number, 
            /**
             * 指定滚动到某一行，仅在`useVirtual`的时候生效
             */
            scrollToRow: PropTypes.number }, BaseComponent.propTypes);
        LockTable.defaultProps = __assign({}, BaseComponent.defaultProps);
        LockTable.childContextTypes = {
            getTableInstance: PropTypes.func,
            getLockNode: PropTypes.func,
            onLockBodyScroll: PropTypes.func,
        };
        return LockTable;
    }(React.Component));
    statics(LockTable, BaseComponent);
    return LockTable;
}
function deepCopy(arr) {
    var copy = function (arr) {
        return arr.map(function (item) {
            var newItem = __assign({}, item);
            if (item.children) {
                item.children = copy(item.children);
            }
            return newItem;
        });
    };
    return copy(arr);
}
