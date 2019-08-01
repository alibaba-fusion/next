'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = lock;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _shallowElementEquals = require('shallow-element-equals');

var _shallowElementEquals2 = _interopRequireDefault(_shallowElementEquals);

var _util = require('../util');

var _row = require('./lock/row');

var _row2 = _interopRequireDefault(_row);

var _body = require('./lock/body');

var _body2 = _interopRequireDefault(_body);

var _header = require('./lock/header');

var _header2 = _interopRequireDefault(_header);

var _wrapper = require('./fixed/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lock(BaseComponent) {
    var _class, _temp;

    /** Table */
    var LockTable = (_temp = _class = function (_React$Component) {
        (0, _inherits3.default)(LockTable, _React$Component);

        function LockTable(props, context) {
            (0, _classCallCheck3.default)(this, LockTable);

            var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

            _this.getTableInstance = function (type, instance) {
                type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
                _this['table' + type + 'Inc'] = instance;
            };

            _this.getNode = function (type, node, lockType) {
                lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
                _this['' + type + lockType + 'Node'] = node;
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
                        row && _util.dom.addClass(row, 'hovered');
                    });
                }
            };

            _this.onRowMouseLeave = function (record, index) {
                if (_this.isLock()) {
                    var row = _this.getRowNode(index);
                    var leftRow = _this.getRowNode(index, 'left');
                    var rightRow = _this.getRowNode(index, 'right');
                    [row, leftRow, rightRow].forEach(function (row) {
                        row && _util.dom.removeClass(row, 'hovered');
                    });
                }
            };

            _this.onLockBodyWheel = function (e) {
                var y = e.deltaY;
                var x = e.deltaX;
                var thresholdX = 15;
                var safeScrollX = x > -thresholdX && x < thresholdX;
                if (_this.isLock()) {
                    var lockRightBody = _this.bodyRightNode,
                        lockLeftBody = _this.bodyLeftNode,
                        scrollNode = _this.bodyNode,
                        scrollTop = scrollNode.scrollTop,
                        clientHeight = scrollNode.clientHeight,
                        scrollHeight = scrollNode.scrollHeight;


                    if (lockLeftBody) {
                        lockLeftBody.scrollTop = y;
                    }
                    if (lockRightBody) {
                        lockRightBody.scrollTop = y;
                    }
                    scrollNode.scrollTop = scrollTop + y;
                    var newScrollTop = scrollNode.scrollTop;

                    if (newScrollTop + clientHeight < scrollHeight && newScrollTop && safeScrollX) {
                        e.preventDefault();
                    }
                }
            };

            _this.onLockBodyScroll = function () {
                if (_this.isLock()) {
                    var rtl = _this.props.rtl;

                    var lockRightBody = _this.bodyRightNode,
                        lockLeftBody = _this.bodyLeftNode,
                        lockRightTable = rtl ? _this.getWrapperNode('left') : _this.getWrapperNode('right'),
                        lockLeftTable = rtl ? _this.getWrapperNode('right') : _this.getWrapperNode('left'),
                        shadowClassName = 'shadow';

                    var x = _this.bodyNode.scrollLeft,
                        y = _this.bodyNode.scrollTop;

                    if (lockLeftBody) {
                        lockLeftBody.scrollTop = y;
                    }
                    if (lockRightBody) {
                        lockRightBody.scrollTop = y;
                    }
                    if (x === 0) {
                        lockLeftTable && _util.dom.removeClass(lockLeftTable, shadowClassName);
                        lockRightTable && _util.dom.addClass(lockRightTable, shadowClassName);
                    } else if (x === _this.bodyNode.scrollWidth - _this.bodyNode.clientWidth) {
                        lockLeftTable && _util.dom.addClass(lockLeftTable, shadowClassName);
                        lockRightTable && _util.dom.removeClass(lockRightTable, shadowClassName);
                    } else {
                        lockLeftTable && _util.dom.addClass(lockLeftTable, shadowClassName);
                        lockRightTable && _util.dom.addClass(lockRightTable, shadowClassName);
                    }
                }
            };

            _this.lockLeftChildren = [];
            _this.lockRightChildren = [];
            return _this;
        }

        LockTable.prototype.getChildContext = function getChildContext() {
            return {
                getTableInstance: this.getTableInstance,
                getLockNode: this.getNode,
                onLockBodyWheel: this.onLockBodyWheel,
                onLockBodyScroll: this.onLockBodyScroll,
                onRowMouseEnter: this.onRowMouseEnter,
                onRowMouseLeave: this.onRowMouseLeave
            };
        };

        LockTable.prototype.componentDidMount = function componentDidMount() {
            this.adjustSize = this.adjustSize.bind(this);

            this.adjustSize();
            this.scroll();

            _util.events.on(window, 'resize', this.adjustSize);
        };

        LockTable.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
            if (nextProps.pure) {
                var isEqual = (0, _shallowElementEquals2.default)(nextProps, this.props);
                return !(isEqual && _util.obj.shallowEqual(nextContext, this.context));
            }

            return true;
        };

        LockTable.prototype.componentWillUpdate = function componentWillUpdate() {
            this._isLock = false;
        };

        LockTable.prototype.componentDidUpdate = function componentDidUpdate() {
            this.adjustSize();
        };

        LockTable.prototype.componentWillUnmount = function componentWillUnmount() {
            _util.events.off(window, 'resize', this.adjustSize);
        };

        LockTable.prototype.normalizeChildrenState = function normalizeChildrenState(props) {
            var children = props.children;

            children = this.normalizeChildren(children);
            var splitChildren = this.splitFromNormalizeChildren(children);
            var lockLeftChildren = splitChildren.lockLeftChildren,
                lockRightChildren = splitChildren.lockRightChildren;

            return {
                lockLeftChildren: lockLeftChildren,
                lockRightChildren: lockRightChildren,
                children: this.mergeFromSplitLockChildren(splitChildren)
            };
        };

        // 将React结构化数据提取props转换成数组


        LockTable.prototype.normalizeChildren = function normalizeChildren(children) {
            var isLock = false;
            var getChildren = function getChildren(children) {
                var ret = [];
                _react.Children.forEach(children, function (child) {
                    if (child) {
                        var props = (0, _extends3.default)({}, child.props);
                        if ([true, 'left', 'right'].indexOf(props.lock) > -1) {
                            isLock = true;
                            if (!('width' in props)) {
                                _util.log.warning('Should config width for lock column named [ ' + props.dataIndex + ' ].');
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
            var ret = getChildren(children);
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


        LockTable.prototype.splitFromNormalizeChildren = function splitFromNormalizeChildren(children) {
            var originChildren = deepCopy(children);
            var lockLeftChildren = deepCopy(children);
            var lockRightChildren = deepCopy(children);
            var loop = function loop(lockChildren, condition) {
                var ret = [];
                lockChildren.forEach(function (child) {
                    if (child.children) {
                        var res = loop(child.children, condition);
                        if (!res.length) {
                            ret.push(child);
                        }
                    } else {
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
                originChildren: originChildren
            };
        };

        //将左侧的锁列树和中间的普通树及右侧的锁列树进行合并


        LockTable.prototype.mergeFromSplitLockChildren = function mergeFromSplitLockChildren(splitChildren) {
            var lockLeftChildren = splitChildren.lockLeftChildren,
                lockRightChildren = splitChildren.lockRightChildren;
            var originChildren = splitChildren.originChildren;

            Array.prototype.unshift.apply(originChildren, lockLeftChildren);
            originChildren = originChildren.concat(lockRightChildren);
            return originChildren;
        };

        LockTable.prototype.scroll = function scroll() {
            var _props = this.props,
                _props$scrollToCol = _props.scrollToCol,
                scrollToCol = _props$scrollToCol === undefined ? 0 : _props$scrollToCol,
                _props$scrollToRow = _props.scrollToRow,
                scrollToRow = _props$scrollToRow === undefined ? 0 : _props$scrollToRow;

            if (!scrollToCol && !scrollToRow) {
                return;
            }
            var colCellNode = this.getCellNode(0, scrollToCol);
            var rowCellNode = this.getCellNode(scrollToRow, 0);
            var bodyNodeOffset = this.bodyNode.getBoundingClientRect();
            if (colCellNode) {
                var cellNodeoffset = colCellNode.getBoundingClientRect();
                var scrollLeft = cellNodeoffset.left - bodyNodeOffset.left;
                this.bodyNode.scrollLeft = scrollLeft;
            }
            if (rowCellNode) {
                var _cellNodeoffset = rowCellNode.getBoundingClientRect();
                var scrollTop = _cellNodeoffset.top - bodyNodeOffset.top;
                this.bodyNode.scrollTop = scrollTop;
            }
        };

        // Table处理过后真实的lock状态
        LockTable.prototype.isLock = function isLock() {
            return this.lockLeftChildren.length || this.lockRightChildren.length;
        };

        // 用户设置的lock状态


        LockTable.prototype.isOriginLock = function isOriginLock() {
            return this._isLock;
        };

        LockTable.prototype.adjustSize = function adjustSize() {
            if (!this.adjustIfTableNotNeedLock()) {
                this.adjustHeaderSize();
                this.adjustBodySize();
                this.adjustCellSize();
                this.onLockBodyScroll();
            }
        };

        LockTable.prototype.removeLockTable = function removeLockTable() {
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

        LockTable.prototype.adjustIfTableNotNeedLock = function adjustIfTableNotNeedLock() {
            var _this2 = this;

            if (this.isOriginLock()) {
                var widthObj = this.tableInc.flatChildren.map(function (item, index) {
                    var cell = _this2.getCellNode(0, index) || {};
                    var headerCell = _this2.getHeaderCellNode(0, index) || {};

                    return {
                        cellWidths: cell.clientWidth || 0,
                        headerWidths: headerCell.clientWidth || 0
                    };
                }).reduce(function (a, b) {
                    return {
                        cellWidths: a.cellWidths + b.cellWidths,
                        headerWidths: a.headerWidths + b.headerWidths
                    };
                }, {
                    cellWidths: 0,
                    headerWidths: 0
                });

                var node = (0, _reactDom.findDOMNode)(this);
                var width = node.clientWidth;

                // if the table doesn't exist, there is no need to adjust
                if (width === 0) {
                    return true;
                }

                var configWidths = widthObj.cellWidths || widthObj.headerWidths;

                if (configWidths <= width && configWidths > 0) {
                    this.removeLockTable();
                } else if (this._notNeedAdjustLockLeft || this._notNeedAdjustLockRight) {
                    this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
                    this.forceUpdate();
                } else {
                    this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
                    return false;
                }
            }

            return false;
        };

        LockTable.prototype.adjustBodySize = function adjustBodySize() {
            if (this.isLock()) {
                var rtl = this.props.rtl;

                var body = this.bodyNode,
                    lockLeftBody = this.bodyLeftNode,
                    lockRightBody = this.bodyRightNode,
                    lockRightBodyWrapper = this.getWrapperNode('right'),
                    scrollbar = _util.dom.scrollbar(),
                    bodyHeight = body.offsetHeight,
                    hasHozScroll = body.scrollWidth > body.clientWidth,
                    hasVerScroll = body.scrollHeight > body.clientHeight,
                    width = hasVerScroll ? scrollbar.width : 0,
                    lockBodyHeight = bodyHeight - (hasHozScroll ? scrollbar.height : 0);

                lockLeftBody && _util.dom.setStyle(lockLeftBody, 'max-height', lockBodyHeight);
                lockRightBody && _util.dom.setStyle(lockRightBody, 'max-height', lockBodyHeight);

                lockRightBodyWrapper && _util.dom.setStyle(lockRightBodyWrapper, rtl ? 'left' : 'right', width + 'px');
            }
        };

        LockTable.prototype.adjustHeaderSize = function adjustHeaderSize() {
            var _this3 = this;

            if (this.isLock()) {
                this.tableInc.groupChildren.forEach(function (child, index) {
                    var lastIndex = _this3.tableInc.groupChildren[index].length - 1;
                    var headerRightRow = _this3.getHeaderCellNode(index, lastIndex),
                        headerLeftRow = _this3.getHeaderCellNode(index, 0),
                        headerRightLockRow = _this3.getHeaderCellNode(index, 0, 'right'),
                        headerLeftLockRow = _this3.getHeaderCellNode(index, 0, 'left');

                    if (headerRightRow && headerRightLockRow) {
                        var maxRightRowHeight = headerRightRow.offsetHeight;

                        _util.dom.setStyle(headerRightLockRow, 'height', maxRightRowHeight);

                        setTimeout(function () {
                            var affixRef = _this3.tableRightInc.affixRef;
                            // if rendered then update postion of affix
                            return affixRef && affixRef.getInstance() && affixRef.getInstance().updatePosition();
                        });
                    }

                    if (headerLeftRow && headerLeftLockRow) {
                        var maxLeftRowHeight = headerLeftRow.offsetHeight;

                        _util.dom.setStyle(headerLeftLockRow, 'height', maxLeftRowHeight);

                        setTimeout(function () {
                            var affixRef = _this3.tableLeftInc.affixRef;
                            // if rendered then update postion of affix
                            return affixRef && affixRef.getInstance() && affixRef.getInstance().updatePosition();
                        });
                    }
                });
            }
        };

        LockTable.prototype.adjustCellSize = function adjustCellSize() {
            var _this4 = this;

            if (this.isLock()) {
                this.tableInc.props.dataSource.forEach(function (item, index) {
                    var lockLeftRow = _this4.getCellNode(index, 0, 'left'),
                        lockRightRow = _this4.getCellNode(index, 0, 'right'),
                        row = _this4.getFirstNormalCellNode(index),
                        rowHeight = row && parseFloat(getComputedStyle(row).height) || 0;
                    var lockLeftHeight = 0,
                        lockRightHeight = 0;

                    if (lockLeftRow) {
                        lockLeftHeight = lockLeftRow.offsetHeight;
                    }
                    if (lockRightRow) {
                        lockRightHeight = lockRightRow.offsetHeight;
                    }
                    if (lockLeftRow && rowHeight !== lockLeftHeight) {
                        _util.dom.setStyle(lockLeftRow, 'height', rowHeight);
                    }
                    if (lockRightRow && rowHeight !== lockRightHeight) {
                        _util.dom.setStyle(lockRightRow, 'height', rowHeight);
                    }
                });
            }
        };

        LockTable.prototype.getWrapperNode = function getWrapperNode(type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return (0, _reactDom.findDOMNode)(this.refs['lock' + type]);
            } catch (error) {
                return null;
            }
        };

        LockTable.prototype.getFirstNormalCellNode = function getFirstNormalCellNode(index) {
            var i = 0;
            var row = void 0;
            do {
                row = this.getCellNode(index, i);
                i++;
            } while ((!row || row && row.rowSpan && row.rowSpan > 1) && this.tableInc.flatChildren.length > i);

            return row;
        };

        LockTable.prototype.getRowNode = function getRowNode(index, type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            var table = this['table' + type + 'Inc'];

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return (0, _reactDom.findDOMNode)(table.getRowRef(index));
            } catch (error) {
                return null;
            }
        };

        LockTable.prototype.getHeaderCellNode = function getHeaderCellNode(index, i, type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            var table = this['table' + type + 'Inc'];

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return (0, _reactDom.findDOMNode)(table.getHeaderCellRef(index, i));
            } catch (error) {
                return null;
            }
        };

        LockTable.prototype.getCellNode = function getCellNode(index, i, type) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            var table = this['table' + type + 'Inc'];

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return (0, _reactDom.findDOMNode)(table.getCellRef(index, i));
            } catch (error) {
                return null;
            }
        };

        LockTable.prototype.render = function render() {
            /* eslint-disable no-unused-vars, prefer-const */
            var _props2 = this.props,
                children = _props2.children,
                prefix = _props2.prefix,
                components = _props2.components,
                className = _props2.className,
                others = (0, _objectWithoutProperties3.default)(_props2, ['children', 'prefix', 'components', 'className']);

            var _normalizeChildrenSta = this.normalizeChildrenState(this.props),
                lockLeftChildren = _normalizeChildrenSta.lockLeftChildren,
                lockRightChildren = _normalizeChildrenSta.lockRightChildren,
                normalizedChildren = _normalizeChildrenSta.children;

            if (this._notNeedAdjustLockLeft) {
                lockLeftChildren = [];
            }
            if (this._notNeedAdjustLockRight) {
                lockRightChildren = [];
            }
            this.lockLeftChildren = lockLeftChildren;
            this.lockRightChildren = lockRightChildren;

            if (this.isOriginLock()) {
                var _classnames;

                components = (0, _extends3.default)({}, components);
                components.Body = components.Body || _body2.default;
                components.Header = components.Header || _header2.default;
                components.Wrapper = components.Wrapper || _wrapper2.default;
                components.Row = components.Row || _row2.default;
                className = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-lock'] = true, _classnames[className] = className, _classnames));
                var content = [_react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, {
                    key: 'lock-left',
                    columns: lockLeftChildren,
                    className: prefix + 'table-lock-left',
                    prefix: prefix,
                    lockType: 'left',
                    components: components,
                    ref: 'lockLeft',
                    loading: false,
                    'aria-hidden': true
                })), _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, {
                    key: 'lock-right',
                    columns: lockRightChildren,
                    className: prefix + 'table-lock-right',
                    prefix: prefix,
                    lockType: 'right',
                    components: components,
                    ref: 'lockRight',
                    loading: false,
                    'aria-hidden': true
                }))];
                return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, {
                    columns: normalizedChildren,
                    prefix: prefix,
                    wrapperContent: content,
                    components: components,
                    className: className
                }));
            }
            return _react2.default.createElement(BaseComponent, this.props);
        };

        return LockTable;
    }(_react2.default.Component), _class.LockRow = _row2.default, _class.LockBody = _body2.default, _class.LockHeader = _header2.default, _class.propTypes = (0, _extends3.default)({
        scrollToCol: _propTypes2.default.number,
        /**
         * 指定滚动到某一行，仅在`useVirtual`的时候生效
         */
        scrollToRow: _propTypes2.default.number
    }, BaseComponent.propTypes), _class.defaultProps = (0, _extends3.default)({}, BaseComponent.defaultProps), _class.childContextTypes = {
        getTableInstance: _propTypes2.default.func,
        getLockNode: _propTypes2.default.func,
        onLockBodyScroll: _propTypes2.default.func,
        onLockBodyWheel: _propTypes2.default.func,
        onRowMouseEnter: _propTypes2.default.func,
        onRowMouseLeave: _propTypes2.default.func
    }, _temp);
    LockTable.displayName = 'LockTable';

    (0, _util2.statics)(LockTable, BaseComponent);
    return LockTable;
}

function deepCopy(arr) {
    var copy = function copy(arr) {
        return arr.map(function (item) {
            var newItem = (0, _extends3.default)({}, item);
            if (item.children) {
                item.children = copy(item.children);
            }
            return newItem;
        });
    };
    return copy(arr);
}
module.exports = exports['default'];