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

exports.default = stickyLock;

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

function stickyLock(BaseComponent) {
    var _class, _temp;

    /** Table */
    var LockTable = (_temp = _class = function (_React$Component) {
        (0, _inherits3.default)(LockTable, _React$Component);

        function LockTable(props, context) {
            (0, _classCallCheck3.default)(this, LockTable);

            var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

            _this.state = {};

            _this.updateOffsetArr = function () {
                var _ref = _this.splitChildren || {},
                    lockLeftChildren = _ref.lockLeftChildren,
                    lockRightChildren = _ref.lockRightChildren,
                    originChildren = _ref.originChildren;

                var leftLen = _this.getFlatenChildren(lockLeftChildren).length;
                var rightLen = _this.getFlatenChildren(lockRightChildren).length;
                var totalLen = leftLen + rightLen + _this.getFlatenChildren(originChildren).length;

                var hasLockLeft = leftLen > 0;
                var hasLockRight = rightLen > 0;

                var leftOffsetArr = _this.getStickyWidth(lockLeftChildren, 'left', totalLen);
                var rightOffsetArr = _this.getStickyWidth(lockRightChildren, 'right', totalLen);

                var state = {};

                if ('' + leftOffsetArr !== '' + _this.state.leftOffsetArr) {
                    state.leftOffsetArr = leftOffsetArr;
                }

                if ('' + rightOffsetArr !== '' + _this.state.rightOffsetArr) {
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
                var _ref2 = e.currentTarget || {},
                    scrollLeft = _ref2.scrollLeft,
                    scrollWidth = _ref2.scrollWidth,
                    clientWidth = _ref2.clientWidth;

                var pingRight = _this.pingRight,
                    pingLeft = _this.pingLeft;


                var pingLeftNext = scrollLeft > 0 && _this.state.hasLockLeft;
                var pingRightNext = scrollLeft < scrollWidth - clientWidth && _this.state.hasLockRight;

                if (forceSet || pingLeft !== pingLeftNext || pingRight !== pingRightNext) {
                    var prefix = _this.props.prefix;

                    var table = _this.getTableNode();

                    _this.pingLeft = pingLeftNext;
                    _this.pingRight = pingRightNext;

                    var leftFunc = pingLeftNext ? 'addClass' : 'removeClass';
                    _util.dom[leftFunc](table, prefix + 'table-ping-left');
                    var rightFunc = pingRightNext ? 'addClass' : 'removeClass';
                    _util.dom[rightFunc](table, prefix + 'table-ping-right');
                }
            };

            _this.getStickyWidth = function (lockChildren, dir, totalLen) {
                var _this$props = _this.props,
                    dataSource = _this$props.dataSource,
                    scrollToRow = _this$props.scrollToRow;

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
                    } else if (dir === 'right' && tag === len - 1) {
                        ret[tag] = 0;
                        return ret;
                    }

                    var _flatenChildren$tagNe = flatenChildren[tagNext],
                        headerCellRowIndex = _flatenChildren$tagNe.headerCellRowIndex,
                        headerCellColIndex = _flatenChildren$tagNe.headerCellColIndex;

                    // 根据tableHeader计算，避免单元格合并出现问题

                    var node = _this.getHeaderCellNode(headerCellRowIndex, headerCellColIndex);
                    var colWidth = 0;
                    if (node) {
                        colWidth = parseFloat(getComputedStyle(node).width) || 0;
                    }

                    ret[tag] = (ret[tagNext] || 0) + colWidth;
                    return ret;
                }, offsetArr);

                return offsetArr;
            };

            _this.getTableInstance = function (type, instance) {
                type = '';
                _this['table' + type + 'Inc'] = instance;
            };

            _this.getNode = function (type, node) {
                _this[type + 'Node'] = node;
            };

            _this.getFlatenChildren = function () {
                var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                var loop = function loop(arr) {
                    var newArray = [];
                    arr.forEach(function (child) {
                        if (child.children) {
                            newArray.push.apply(newArray, loop(child.children));
                        } else {
                            newArray.push(child);
                        }
                    });
                    return newArray;
                };

                return loop(children);
            };

            _this.state = {
                hasLockLeft: true,
                hasLockRight: true
            };

            _this.pingLeft = false;
            _this.pingRight = false;
            return _this;
        }

        LockTable.prototype.getChildContext = function getChildContext() {
            return {
                getTableInstance: this.getTableInstance,
                getLockNode: this.getNode,
                onLockBodyScroll: this.onLockBodyScroll
            };
        };

        LockTable.prototype.componentDidMount = function componentDidMount() {
            var dataSource = this.props.dataSource;

            var isEmpty = !(dataSource && dataSource.length > 0);

            this.updateOffsetArr();
            this.onLockBodyScroll(isEmpty ? { currentTarget: this.headerNode } : { currentTarget: this.bodyNode });
            this.forceUpdate();

            _util.events.on(window, 'resize', this.updateOffsetArr);
        };

        LockTable.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
            if (nextProps.pure) {
                var isEqual = (0, _shallowElementEquals2.default)(nextProps, this.props);
                return !(isEqual && _util.obj.shallowEqual(nextContext, this.context));
            }

            return true;
        };

        LockTable.prototype.componentDidUpdate = function componentDidUpdate() {
            this.updateOffsetArr();
            this.onLockBodyScroll(this.bodyNode ? { currentTarget: this.bodyNode } : { currentTarget: this.headerNode }, true);
        };

        LockTable.prototype.componentWillUnmount = function componentWillUnmount() {
            this.pingLeft = false;
            this.pingRight = false;
            _util.events.off(window, 'resize', this.updateOffsetArr);
        };

        LockTable.prototype.normalizeChildrenState = function normalizeChildrenState(props) {
            var columns = this.normalizeChildren(props);

            this.splitChildren = this.splitFromNormalizeChildren(columns);

            return this.mergeFromSplitLockChildren(this.splitChildren, props.prefix);
        };

        // 将React结构化数据提取props转换成数组


        LockTable.prototype.normalizeChildren = function normalizeChildren(props) {
            var children = props.children,
                columns = props.columns;

            var isLock = false,
                ret = void 0;
            var getChildren = function getChildren(children) {
                var ret = [];
                _react.Children.forEach(children, function (child) {
                    if (child) {
                        var _props = (0, _extends3.default)({}, child.props);
                        if ([true, 'left', 'right'].indexOf(_props.lock) > -1) {
                            isLock = true;
                            if (!('width' in _props)) {
                                _util.log.warning('Should config width for lock column named [ ' + _props.dataIndex + ' ].');
                            }
                        }
                        ret.push(_props);
                        if (child.props.children) {
                            _props.children = getChildren(child.props.children);
                        }
                    }
                });
                return ret;
            };

            if (columns && !children) {
                ret = columns;
                isLock = columns.find(function (record) {
                    return [true, 'left', 'right'].indexOf(record.lock) > -1;
                });
            } else {
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

        /**
         * 将左侧的锁列树和中间的普通树及右侧的锁列树进行合并
         * 会在原始 originChildren 上做改动
         * @param {Object} splitChildren { lockLeftChildren, lockRightChildren, originChildren }
         * @return {Array} originChildren
         */


        LockTable.prototype.mergeFromSplitLockChildren = function mergeFromSplitLockChildren(splitChildren, prefix) {
            var lockLeftChildren = splitChildren.lockLeftChildren,
                lockRightChildren = splitChildren.lockRightChildren;
            var originChildren = splitChildren.originChildren;


            var flatenLeftChildren = this.getFlatenChildren(lockLeftChildren);
            var flatenRightChildren = this.getFlatenChildren(lockRightChildren);

            (0, _util2.setStickyStyle)(lockLeftChildren, flatenLeftChildren, 'left', this.state.leftOffsetArr, prefix);
            (0, _util2.setStickyStyle)(lockRightChildren, flatenRightChildren, 'right', this.state.rightOffsetArr, prefix);

            return [].concat(lockLeftChildren, originChildren, lockRightChildren);
        };

        LockTable.prototype.getCellNode = function getCellNode(index, i) {
            var table = this.tableInc;

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return (0, _reactDom.findDOMNode)(table.getCellRef(index, i));
            } catch (error) {
                return null;
            }
        };

        LockTable.prototype.getTableNode = function getTableNode() {
            var table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return (0, _reactDom.findDOMNode)(table.tableEl);
            } catch (error) {
                return null;
            }
        };

        LockTable.prototype.getHeaderCellNode = function getHeaderCellNode(index, i) {
            var table = this.tableInc;

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return (0, _reactDom.findDOMNode)(table.getHeaderCellRef(index, i));
            } catch (error) {
                return null;
            }
        };

        LockTable.prototype.render = function render() {
            var _classnames;

            /* eslint-disable no-unused-vars, prefer-const */
            var _props2 = this.props,
                children = _props2.children,
                columns = _props2.columns,
                prefix = _props2.prefix,
                components = _props2.components,
                scrollToRow = _props2.scrollToRow,
                className = _props2.className,
                dataSource = _props2.dataSource,
                others = (0, _objectWithoutProperties3.default)(_props2, ['children', 'columns', 'prefix', 'components', 'scrollToRow', 'className', 'dataSource']);


            var normalizedChildren = this.normalizeChildrenState(this.props);

            components = (0, _extends3.default)({}, components);
            components.Body = components.Body || _body2.default;
            components.Header = components.Header || _header2.default;
            components.Wrapper = components.Wrapper || _wrapper2.default;
            components.Row = components.Row || _row2.default;
            className = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-lock'] = true, _classnames[prefix + 'table-stickylock'] = true, _classnames[prefix + 'table-wrap-empty'] = !dataSource.length, _classnames[className] = className, _classnames));

            return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, {
                dataSource: dataSource,
                columns: normalizedChildren,
                prefix: prefix,
                components: components,
                className: className
            }));
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
        onLockBodyScroll: _propTypes2.default.func
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
module.exports = exports.default;
module.exports.default = exports.default;