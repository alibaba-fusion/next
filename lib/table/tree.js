'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = tree;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _row = require('./tree/row');

var _row2 = _interopRequireDefault(_row);

var _cell = require('./tree/cell');

var _cell2 = _interopRequireDefault(_cell);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

function tree(BaseComponent) {
    var _class, _temp;

    var TreeTable = (_temp = _class = function (_React$Component) {
        (0, _inherits3.default)(TreeTable, _React$Component);

        function TreeTable(props, context) {
            (0, _classCallCheck3.default)(this, TreeTable);

            var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

            _this.onTreeNodeClick = function (record) {
                var primaryKey = _this.props.primaryKey,
                    id = record[primaryKey],
                    dataSource = _this.ds,
                    openRowKeys = [].concat(_this.state.openRowKeys),
                    index = openRowKeys.indexOf(id),
                    getChildrenKeyById = function getChildrenKeyById(id) {
                    var ret = [id];
                    var loop = function loop(data) {
                        data.forEach(function (item) {
                            ret.push(item[primaryKey]);
                            if (item.children) {
                                loop(item.children);
                            }
                        });
                    };
                    dataSource.forEach(function (item) {
                        if (item[primaryKey] === id) {
                            if (item.children) {
                                loop(item.children);
                            }
                        }
                    });
                    return ret;
                };


                if (index > -1) {
                    // 不仅要删除当前的openRowKey，还需要删除关联子节点的openRowKey
                    var ids = getChildrenKeyById(id);
                    ids.forEach(function (id) {
                        var i = openRowKeys.indexOf(id);
                        if (i > -1) {
                            openRowKeys.splice(i, 1);
                        }
                    });
                } else {
                    openRowKeys.push(id);
                }

                if (!('openRowKeys' in _this.props)) {
                    _this.setState({
                        openRowKeys: openRowKeys
                    });
                }
                _this.props.onRowOpen(openRowKeys, id, index === -1, record);
            };

            _this.state = {
                openRowKeys: props.openRowKeys || []
            };
            return _this;
        }

        TreeTable.prototype.getChildContext = function getChildContext() {
            return {
                openTreeRowKeys: this.state.openRowKeys,
                indent: this.props.indent,
                treeStatus: this.getTreeNodeStatus(this.ds),
                onTreeNodeClick: this.onTreeNodeClick,
                isTree: this.props.isTree
            };
        };

        TreeTable.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
            if ('openRowKeys' in nextProps) {
                return {
                    openRowKeys: nextProps.openRowKeys || []
                };
            }

            return null;
        };

        TreeTable.prototype.normalizeDataSource = function normalizeDataSource(dataSource) {
            var ret = [],
                loop = function loop(dataSource, level) {
                dataSource.forEach(function (item) {
                    item.__level = level;
                    ret.push(item);
                    if (item.children) {
                        loop(item.children, level + 1);
                    }
                });
            };
            loop(dataSource, 0);
            this.ds = ret;
            return ret;
        };

        TreeTable.prototype.getTreeNodeStatus = function getTreeNodeStatus() {
            var dataSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var openRowKeys = this.state.openRowKeys,
                primaryKey = this.props.primaryKey,
                ret = [];


            openRowKeys.forEach(function (openKey) {
                dataSource.forEach(function (item) {
                    if (item[primaryKey] === openKey) {
                        if (item.children) {
                            item.children.forEach(function (child) {
                                ret.push(child[primaryKey]);
                            });
                        }
                    }
                });
            });
            return ret;
        };

        TreeTable.prototype.render = function render() {
            /* eslint-disable no-unused-vars, prefer-const */
            var _props = this.props,
                components = _props.components,
                isTree = _props.isTree,
                dataSource = _props.dataSource,
                indent = _props.indent,
                others = (0, _objectWithoutProperties3.default)(_props, ['components', 'isTree', 'dataSource', 'indent']);


            if (isTree) {
                components = (0, _extends3.default)({}, components);
                if (!components.Row) {
                    components.Row = _row2.default;
                }
                if (!components.Cell) {
                    components.Cell = _cell2.default;
                }

                dataSource = this.normalizeDataSource(dataSource);
            }
            return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, {
                dataSource: dataSource,
                components: components
            }));
        };

        return TreeTable;
    }(_react2.default.Component), _class.TreeRow = _row2.default, _class.TreeCell = _cell2.default, _class.propTypes = (0, _extends3.default)({
        /**
         * 默认情况下展开的树形表格，传入了此属性代表tree的展开为受控操作
         */
        openRowKeys: _propTypes2.default.array,
        /**
         * 点击tree展开或者关闭的时候触发的事件
         * @param {Array} openRowKeys tree模式下展开的key
         * @param {String} currentRowKey 当前点击行的key
         * @param {Boolean} opened 当前点击是展开还是收起
         * @param {Object} currentRecord 当前点击行的记录
         */
        onRowOpen: _propTypes2.default.func,
        /**
         * dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
         */
        primaryKey: _propTypes2.default.string,
        /**
         * 在tree模式下的缩进尺寸， 仅在isTree为true时候有效
         */
        indent: _propTypes2.default.number,
        /**
         * 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table
         */
        isTree: _propTypes2.default.bool,
        locale: _propTypes2.default.object
    }, BaseComponent.propTypes), _class.defaultProps = (0, _extends3.default)({}, BaseComponent.defaultProps, {
        primaryKey: 'id',
        onRowOpen: noop,
        components: {},
        indent: 12
    }), _class.childContextTypes = {
        openTreeRowKeys: _propTypes2.default.array,
        indent: _propTypes2.default.number,
        treeStatus: _propTypes2.default.array,
        onTreeNodeClick: _propTypes2.default.func,
        isTree: _propTypes2.default.bool
    }, _temp);
    TreeTable.displayName = 'TreeTable';

    (0, _util.statics)(TreeTable, BaseComponent);
    return (0, _reactLifecyclesCompat.polyfill)(TreeTable);
}
module.exports = exports['default'];