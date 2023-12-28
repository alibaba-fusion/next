import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shallowElementEquals from 'shallow-element-equals';
import { dom, log, obj, events, env } from '../util';
import LockRow from './lock/row';
import LockBody from './lock/body';
import LockHeader from './lock/header';
import LockWrapper from './fixed/wrapper';
import { statics } from './util';
var ieVersion = env.ieVersion;
export default function lock(BaseComponent) {
    /** Table */
    var LockTable = /** @class */ (function (_super) {
        __extends(LockTable, _super);
        function LockTable(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {};
            _this.getTableInstance = function (type, instance) {
                type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
                _this["table".concat(type, "Inc")] = instance;
            };
            _this.getNode = function (type, node, lockType) {
                lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
                _this["".concat(type).concat(lockType, "Node")] = node;
                if (type === 'header' && !_this.innerHeaderNode && !lockType) {
                    _this.innerHeaderNode = _this.headerNode.querySelector('div');
                }
            };
            _this.onRowMouseEnter = function (record, index) {
                if (_this.isLock()) {
                    var row = _this.getRowNode(index);
                    var leftRow = _this.getRowNode(index, 'left');
                    var rightRow = _this.getRowNode(index, 'right');
                    [row, leftRow, rightRow].forEach(function (row) {
                        row && dom.addClass(row, 'hovered');
                    });
                }
            };
            _this.onRowMouseLeave = function (record, index) {
                if (_this.isLock()) {
                    var row = _this.getRowNode(index);
                    var leftRow = _this.getRowNode(index, 'left');
                    var rightRow = _this.getRowNode(index, 'right');
                    [row, leftRow, rightRow].forEach(function (row) {
                        row && dom.removeClass(row, 'hovered');
                    });
                }
            };
            _this.onLockBodyScrollTop = function (event) {
                // set scroll top for lock columns & main body
                var target = event.target;
                if (event.currentTarget !== target) {
                    return;
                }
                var distScrollTop = target.scrollTop;
                if (_this.isLock() && distScrollTop !== _this.lastScrollTop) {
                    var lockRightBody = _this.bodyRightNode, lockLeftBody = _this.bodyLeftNode, bodyNode = _this.bodyNode;
                    var arr = [lockLeftBody, lockRightBody, bodyNode];
                    arr.forEach(function (node) {
                        if (node && node.scrollTop !== distScrollTop) {
                            node.scrollTop = distScrollTop;
                        }
                    });
                    _this.lastScrollTop = distScrollTop;
                }
            };
            _this.onLockBodyScrollLeft = function () {
                // add shadow class for lock columns
                if (_this.isLock()) {
                    var rtl = _this.props.rtl;
                    var lockRightTable = rtl ? _this.getWrapperNode('left') : _this.getWrapperNode('right'), lockLeftTable = rtl ? _this.getWrapperNode('right') : _this.getWrapperNode('left'), shadowClassName = 'shadow';
                    var x = _this.bodyNode.scrollLeft;
                    if (x === 0) {
                        lockLeftTable && dom.removeClass(lockLeftTable, shadowClassName);
                        lockRightTable && dom.addClass(lockRightTable, shadowClassName);
                    }
                    else if (x === _this.bodyNode.scrollWidth - _this.bodyNode.clientWidth) {
                        lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
                        lockRightTable && dom.removeClass(lockRightTable, shadowClassName);
                    }
                    else {
                        lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
                        lockRightTable && dom.addClass(lockRightTable, shadowClassName);
                    }
                }
            };
            _this.onLockBodyScroll = function (event) {
                _this.onLockBodyScrollTop(event);
                _this.onLockBodyScrollLeft();
            };
            _this.adjustSize = function () {
                if (!_this.adjustIfTableNotNeedLock()) {
                    _this.adjustHeaderSize();
                    _this.adjustBodySize();
                    _this.adjustRowHeight();
                    _this.onLockBodyScrollLeft();
                }
            };
            _this.getFlatenChildrenLength = function (children) {
                if (children === void 0) { children = []; }
                var loop = function (arr) {
                    var newArray = [];
                    arr.forEach(function (child) {
                        if (child && child.children) {
                            newArray.push.apply(newArray, __spreadArray([], __read(loop(child.children)), false));
                        }
                        else {
                            newArray.push(child);
                        }
                    });
                    return newArray;
                };
                return loop(children).length;
            };
            _this.saveLockLeftRef = function (ref) {
                _this.lockLeftEl = ref;
            };
            _this.saveLockRightRef = function (ref) {
                _this.lockRightEl = ref;
            };
            _this.lockLeftChildren = [];
            _this.lockRightChildren = [];
            return _this;
        }
        LockTable.prototype.getChildContext = function () {
            return {
                getTableInstance: this.getTableInstance,
                getLockNode: this.getNode,
                onLockBodyScroll: this.onLockBodyScroll,
                onRowMouseEnter: this.onRowMouseEnter,
                onRowMouseLeave: this.onRowMouseLeave,
            };
        };
        LockTable.prototype.componentDidMount = function () {
            events.on(window, 'resize', this.adjustSize);
            this.scroll();
            this.adjustSize();
            this.forceUpdate();
        };
        LockTable.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
            if (nextProps.pure) {
                var isEqual = shallowElementEquals(nextProps, this.props);
                return !(isEqual && obj.shallowEqual(nextContext, this.context));
            }
            return true;
        };
        LockTable.prototype.componentDidUpdate = function () {
            this.adjustSize();
            this._isLock = false;
        };
        LockTable.prototype.componentWillUnmount = function () {
            events.off(window, 'resize', this.adjustSize);
        };
        LockTable.prototype.normalizeChildrenState = function (props) {
            var columns = this.normalizeChildren(props);
            var splitChildren = this.splitFromNormalizeChildren(columns);
            var lockLeftChildren = splitChildren.lockLeftChildren, lockRightChildren = splitChildren.lockRightChildren;
            return {
                lockLeftChildren: lockLeftChildren,
                lockRightChildren: lockRightChildren,
                children: this.mergeFromSplitLockChildren(splitChildren),
            };
        };
        // 将React结构化数据提取props转换成数组
        LockTable.prototype.normalizeChildren = function (props) {
            var children = props.children, columns = props.columns;
            var isLock = false, ret;
            var checkLock = function (col) {
                if ([true, 'left', 'right'].indexOf(col.lock) > -1) {
                    if (!('width' in col)) {
                        log.warning("Should config width for lock column named [ ".concat(col.dataIndex, " ]."));
                    }
                    isLock = true;
                }
            };
            if (columns && !children) {
                ret = columns;
                var getColumns_1 = function (cols) {
                    cols.forEach(function (col) {
                        if (col === void 0) { col = {}; }
                        checkLock(col);
                        if (col.children) {
                            getColumns_1(col.children);
                        }
                    });
                };
                getColumns_1(columns);
            }
            else {
                var getChildren_1 = function (children) {
                    var ret = [];
                    Children.forEach(children, function (child) {
                        if (child) {
                            var props_1 = __assign({}, child.props);
                            checkLock(props_1);
                            ret.push(props_1);
                            if (child.props.children) {
                                props_1.children = getChildren_1(child.props.children);
                            }
                        }
                    });
                    return ret;
                };
                ret = getChildren_1(children);
            }
            ret.forEach(function (child) {
                // 为自定义的列特殊处理
                if (child.__normalized && isLock) {
                    // users can set lock type for column selection now, so its origin lock type comes first
                    child.lock = child.lock || 'left';
                    delete child.__normalized;
                }
            });
            this._isLock = isLock;
            return ret;
        };
        //从数组中分离出lock的列和正常的列
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
        //将左侧的锁列树和中间的普通树及右侧的锁列树进行合并
        LockTable.prototype.mergeFromSplitLockChildren = function (splitChildren) {
            var lockLeftChildren = splitChildren.lockLeftChildren, lockRightChildren = splitChildren.lockRightChildren;
            var originChildren = splitChildren.originChildren;
            Array.prototype.unshift.apply(originChildren, lockLeftChildren);
            originChildren = originChildren.concat(lockRightChildren);
            return originChildren;
        };
        LockTable.prototype.scroll = function () {
            var _a = this.props, _b = _a.scrollToCol, scrollToCol = _b === void 0 ? 0 : _b, _c = _a.scrollToRow, scrollToRow = _c === void 0 ? 0 : _c;
            if ((!scrollToCol && !scrollToRow) || !this.bodyNode) {
                return;
            }
            var colCellNode = this.getCellNode(0, scrollToCol);
            var rowCellNode = this.getCellNode(scrollToRow, 0);
            var bodyNodeOffset = this.bodyNode.getBoundingClientRect() || {};
            if (colCellNode) {
                var cellNodeoffset = colCellNode.getBoundingClientRect();
                var scrollLeft = cellNodeoffset.left - bodyNodeOffset.left;
                this.bodyNode.scrollLeft = scrollLeft;
            }
            if (rowCellNode) {
                var cellNodeoffset = rowCellNode.getBoundingClientRect();
                var scrollTop = cellNodeoffset.top - bodyNodeOffset.top;
                this.bodyNode.scrollTop = scrollTop;
            }
        };
        // Table处理过后真实的lock状态
        LockTable.prototype.isLock = function () {
            return this.lockLeftChildren.length || this.lockRightChildren.length;
        };
        // 用户设置的lock状态
        LockTable.prototype.isOriginLock = function () {
            return this._isLock;
        };
        LockTable.prototype.removeLockTable = function () {
            var lockLeftLen = this.lockLeftChildren.length;
            var lockRightLen = this.lockRightChildren.length;
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
        };
        LockTable.prototype.adjustIfTableNotNeedLock = function () {
            var _this = this;
            if (this.isOriginLock()) {
                var widthObj = this.tableInc.flatChildren
                    .map(function (item, index) {
                    var cell = _this.getCellNode(0, index) || {};
                    var headerCell = _this.getHeaderCellNode(0, index) || {};
                    // fix https://codesandbox.io/s/fusion-next-template-d9bu8
                    // close #1832
                    try {
                        return {
                            cellWidths: parseFloat(getComputedStyle(cell).width) || 0,
                            headerWidths: parseFloat(getComputedStyle(headerCell).width) || 0,
                        };
                    }
                    catch (error) {
                        return {
                            cellWidths: cell.clientWidth || 0,
                            headerWidths: headerCell.clientWidth || 0,
                        };
                    }
                })
                    .reduce(function (a, b) {
                    return {
                        cellWidths: a.cellWidths + b.cellWidths,
                        headerWidths: a.headerWidths + b.headerWidths,
                    };
                }, {
                    cellWidths: 0,
                    headerWidths: 0,
                });
                var node = void 0, width = void 0;
                try {
                    node = findDOMNode(this);
                    width = node.clientWidth;
                }
                catch (err) {
                    node = null;
                    width = 0;
                }
                // if the table doesn't exist, there is no need to adjust
                if (width === 0) {
                    return true;
                }
                var configWidths = parseInt(widthObj.cellWidths) || parseInt(widthObj.headerWidths);
                if (configWidths <= width && configWidths > 0) {
                    this.removeLockTable();
                }
                else if (this._notNeedAdjustLockLeft || this._notNeedAdjustLockRight) {
                    this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
                    this.forceUpdate();
                }
                else {
                    this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
                    return false;
                }
            }
            return false;
        };
        LockTable.prototype.adjustBodySize = function () {
            var _a;
            var _b = this.props, rtl = _b.rtl, hasHeader = _b.hasHeader;
            var header = this.headerNode;
            var paddingName = rtl ? 'paddingLeft' : 'paddingRight';
            var marginName = rtl ? 'marginLeft' : 'marginRight';
            var scrollBarSize = +dom.scrollbar().width || 0;
            var style = (_a = {},
                _a[paddingName] = scrollBarSize,
                _a[marginName] = scrollBarSize,
                _a);
            var body = this.bodyNode, hasVerScroll = body && body.scrollHeight > body.clientHeight;
            if (this.isLock()) {
                var lockLeftBody = this.bodyLeftNode, lockRightBody = this.bodyRightNode, lockRightBodyWrapper = this.getWrapperNode('right'), bodyHeight = body.offsetHeight, width = hasVerScroll ? scrollBarSize : 0, lockBodyHeight = bodyHeight - scrollBarSize;
                if (!hasVerScroll) {
                    style[paddingName] = 0;
                    style[marginName] = 0;
                }
                if (+scrollBarSize) {
                    style.marginBottom = -scrollBarSize;
                    style.paddingBottom = scrollBarSize;
                }
                else {
                    style.marginBottom = -20;
                    style.paddingBottom = 20;
                }
                var lockStyle = {
                    'max-height': lockBodyHeight,
                };
                if (!hasHeader && !+scrollBarSize) {
                    lockStyle[marginName] = 0;
                }
                if (+scrollBarSize) {
                    lockStyle[marginName] = -scrollBarSize;
                }
                lockLeftBody && dom.setStyle(lockLeftBody, lockStyle);
                lockRightBody && dom.setStyle(lockRightBody, lockStyle);
                lockRightBodyWrapper &&
                    +scrollBarSize &&
                    dom.setStyle(lockRightBodyWrapper, rtl ? 'left' : 'right', "".concat(width, "px"));
            }
            else {
                style.marginBottom = -scrollBarSize;
                style.paddingBottom = scrollBarSize;
                style[marginName] = 0;
                if (!hasVerScroll) {
                    style[paddingName] = 0;
                }
            }
            header && dom.setStyle(header, style);
        };
        LockTable.prototype.adjustHeaderSize = function () {
            var _this = this;
            if (this.isLock()) {
                this.tableInc.groupChildren.forEach(function (child, index) {
                    var lastIndex = _this.tableInc.groupChildren[index].length - 1;
                    var headerRightRow = _this.getHeaderCellNode(index, lastIndex), headerLeftRow = _this.getHeaderCellNode(index, 0), headerRightLockRow = _this.getHeaderCellNode(index, 0, 'right'), headerLeftLockRow = _this.getHeaderCellNode(index, 0, 'left');
                    if (headerRightRow && headerRightLockRow) {
                        var maxRightRowHeight = headerRightRow.offsetHeight;
                        dom.setStyle(headerRightLockRow, 'height', maxRightRowHeight);
                        setTimeout(function () {
                            var affixRef = _this.tableRightInc.affixRef;
                            // if rendered then update postion of affix
                            return affixRef && affixRef.getInstance() && affixRef.getInstance().updatePosition();
                        });
                    }
                    if (headerLeftRow && headerLeftLockRow) {
                        var maxLeftRowHeight = headerLeftRow.offsetHeight;
                        dom.setStyle(headerLeftLockRow, 'height', maxLeftRowHeight);
                        setTimeout(function () {
                            var affixRef = _this.tableLeftInc.affixRef;
                            // if rendered then update postion of affix
                            return affixRef && affixRef.getInstance() && affixRef.getInstance().updatePosition();
                        });
                    }
                });
            }
        };
        LockTable.prototype.adjustRowHeight = function () {
            var _this = this;
            if (this.isLock()) {
                this.tableInc.props.dataSource.forEach(function (item, index) {
                    // record may be a string
                    var rowIndex = "".concat(typeof item === 'object' && '__rowIndex' in item ? item.__rowIndex : index).concat(item.__expanded ? '_expanded' : '');
                    // 同步左侧的锁列
                    _this.setRowHeight(rowIndex, 'left');
                    // 同步右侧的锁列
                    _this.setRowHeight(rowIndex, 'right');
                });
            }
        };
        LockTable.prototype.setRowHeight = function (rowIndex, dir) {
            var lockRow = this.getRowNode(rowIndex, dir), row = this.getRowNode(rowIndex), rowHeight = (ieVersion ? row && row.offsetHeight : row && parseFloat(getComputedStyle(row).height)) || 'auto', lockHeight = (ieVersion
                ? lockRow && lockRow.offsetHeight
                : lockRow && parseFloat(getComputedStyle(lockRow).height)) || 'auto';
            if (lockRow && rowHeight !== lockHeight) {
                dom.setStyle(lockRow, 'height', rowHeight);
            }
        };
        LockTable.prototype.getWrapperNode = function (type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(this["lock".concat(type, "El")]);
            }
            catch (error) {
                return null;
            }
        };
        // remove this in next major version, keep this for temperary incase of using it
        // getFirstNormalCellNode(index) {
        //     let i = 0;
        //     let row;
        //     do {
        //         row = this.getCellNode(index, i);
        //         i++;
        //     } while (
        //         (!row || (row && row.rowSpan && row.rowSpan > 1)) &&
        //         this.tableInc.flatChildren.length > i
        //     );
        //     return row;
        // }
        LockTable.prototype.getRowNode = function (index, type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            var table = this["table".concat(type, "Inc")];
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.getRowRef(index));
            }
            catch (error) {
                return null;
            }
        };
        LockTable.prototype.getHeaderCellNode = function (index, i, type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            var table = this["table".concat(type, "Inc")];
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
        LockTable.prototype.getCellNode = function (index, i, type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            var table = this["table".concat(type, "Inc")];
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
        LockTable.prototype.render = function () {
            var _a;
            /* eslint-disable no-unused-vars, prefer-const */
            var _b = this.props, children = _b.children, columns = _b.columns, prefix = _b.prefix, components = _b.components, className = _b.className, dataSource = _b.dataSource, tableWidth = _b.tableWidth, others = __rest(_b, ["children", "columns", "prefix", "components", "className", "dataSource", "tableWidth"]);
            var _c = this.normalizeChildrenState(this.props), lockLeftChildren = _c.lockLeftChildren, lockRightChildren = _c.lockRightChildren, normalizedChildren = _c.children;
            var leftLen = this.getFlatenChildrenLength(lockLeftChildren);
            var rightLen = this.getFlatenChildrenLength(lockRightChildren);
            var originLen = this.getFlatenChildrenLength(normalizedChildren);
            var lengths = {
                left: leftLen,
                right: rightLen,
                origin: originLen,
            };
            if (this._notNeedAdjustLockLeft) {
                lockLeftChildren = [];
            }
            if (this._notNeedAdjustLockRight) {
                lockRightChildren = [];
            }
            this.lockLeftChildren = lockLeftChildren;
            this.lockRightChildren = lockRightChildren;
            if (this.isOriginLock()) {
                components = __assign({}, components);
                components.Body = components.Body || LockBody;
                components.Header = components.Header || LockHeader;
                components.Wrapper = components.Wrapper || LockWrapper;
                components.Row = components.Row || LockRow;
                className = classnames((_a = {},
                    _a["".concat(prefix, "table-lock")] = true,
                    _a["".concat(prefix, "table-wrap-empty")] = !dataSource.length,
                    _a[className] = className,
                    _a));
                var content = [
                    React.createElement(BaseComponent, __assign({}, others, { dataSource: dataSource, key: "lock-left", columns: lockLeftChildren, className: "".concat(prefix, "table-lock-left"), lengths: lengths, prefix: prefix, lockType: "left", components: components, ref: this.saveLockLeftRef, loading: false, "aria-hidden": true })),
                    React.createElement(BaseComponent, __assign({}, others, { dataSource: dataSource, key: "lock-right", columns: lockRightChildren, className: "".concat(prefix, "table-lock-right"), lengths: lengths, prefix: prefix, lockType: "right", components: components, ref: this.saveLockRightRef, loading: false, "aria-hidden": true })),
                ];
                return (React.createElement(BaseComponent, __assign({}, others, { tableWidth: tableWidth, dataSource: dataSource, columns: normalizedChildren, prefix: prefix, lengths: lengths, wrapperContent: content, components: components, className: className })));
            }
            return React.createElement(BaseComponent, __assign({}, this.props));
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
            onRowMouseEnter: PropTypes.func,
            onRowMouseLeave: PropTypes.func,
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
