import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
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
    var _class, _temp;

    /** Table */
    var LockTable = (_temp = _class = function (_React$Component) {
        _inherits(LockTable, _React$Component);

        function LockTable(props, context) {
            _classCallCheck(this, LockTable);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

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
                    dom[leftFunc](table, prefix + 'table-ping-left');
                    var rightFunc = pingRightNext ? 'addClass' : 'removeClass';
                    dom[rightFunc](table, prefix + 'table-ping-right');
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

            events.on(window, 'resize', this.updateOffsetArr);
        };

        LockTable.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
            if (nextProps.pure) {
                var isEqual = shallowElementEquals(nextProps, this.props);
                return !(isEqual && obj.shallowEqual(nextContext, this.context));
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
            events.off(window, 'resize', this.updateOffsetArr);
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
                Children.forEach(children, function (child) {
                    if (child) {
                        var _props = _extends({}, child.props);
                        if ([true, 'left', 'right'].indexOf(_props.lock) > -1) {
                            isLock = true;
                            if (!('width' in _props)) {
                                log.warning('Should config width for lock column named [ ' + _props.dataIndex + ' ].');
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

            setStickyStyle(lockLeftChildren, flatenLeftChildren, 'left', this.state.leftOffsetArr, prefix);
            setStickyStyle(lockRightChildren, flatenRightChildren, 'right', this.state.rightOffsetArr, prefix);

            return [].concat(lockLeftChildren, originChildren, lockRightChildren);
        };

        LockTable.prototype.getCellNode = function getCellNode(index, i) {
            var table = this.tableInc;

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.getCellRef(index, i));
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
                return findDOMNode(table.tableEl);
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
                return findDOMNode(table.getHeaderCellRef(index, i));
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
                others = _objectWithoutProperties(_props2, ['children', 'columns', 'prefix', 'components', 'scrollToRow', 'className', 'dataSource']);

            var normalizedChildren = this.normalizeChildrenState(this.props);

            components = _extends({}, components);
            components.Body = components.Body || LockBody;
            components.Header = components.Header || LockHeader;
            components.Wrapper = components.Wrapper || LockWrapper;
            components.Row = components.Row || LockRow;
            className = classnames((_classnames = {}, _classnames[prefix + 'table-lock'] = true, _classnames[prefix + 'table-stickylock'] = true, _classnames[prefix + 'table-wrap-empty'] = !dataSource.length, _classnames[className] = className, _classnames));

            return React.createElement(BaseComponent, _extends({}, others, {
                dataSource: dataSource,
                columns: normalizedChildren,
                prefix: prefix,
                components: components,
                className: className
            }));
        };

        return LockTable;
    }(React.Component), _class.LockRow = LockRow, _class.LockBody = LockBody, _class.LockHeader = LockHeader, _class.propTypes = _extends({
        scrollToCol: PropTypes.number,
        /**
         * 指定滚动到某一行，仅在`useVirtual`的时候生效
         */
        scrollToRow: PropTypes.number
    }, BaseComponent.propTypes), _class.defaultProps = _extends({}, BaseComponent.defaultProps), _class.childContextTypes = {
        getTableInstance: PropTypes.func,
        getLockNode: PropTypes.func,
        onLockBodyScroll: PropTypes.func
    }, _temp);
    LockTable.displayName = 'LockTable';

    statics(LockTable, BaseComponent);
    return LockTable;
}

function deepCopy(arr) {
    var copy = function copy(arr) {
        return arr.map(function (item) {
            var newItem = _extends({}, item);
            if (item.children) {
                item.children = copy(item.children);
            }
            return newItem;
        });
    };
    return copy(arr);
}