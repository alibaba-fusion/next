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

exports.default = expanded;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

var _row = require('./expanded/row');

var _row2 = _interopRequireDefault(_row);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

function expanded(BaseComponent) {
    var _class, _temp2;

    /** Table */
    var ExpandedTable = (_temp2 = _class = function (_React$Component) {
        (0, _inherits3.default)(ExpandedTable, _React$Component);

        function ExpandedTable() {
            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, ExpandedTable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
                openRowKeys: _this.props.openRowKeys || []
            }, _this.expandedKeydown = function (value, record, index, e) {
                e.preventDefault();
                e.stopPropagation();

                if (e.keyCode === _util.KEYCODE.ENTER) {
                    _this.onExpandedClick(value, record, index, e);
                }
            }, _this.renderExpandedCell = function (value, index, record) {
                var _classnames;

                var _this$props = _this.props,
                    getExpandedColProps = _this$props.getExpandedColProps,
                    prefix = _this$props.prefix,
                    locale = _this$props.locale;
                var openRowKeys = _this.state.openRowKeys,
                    primaryKey = _this.props.primaryKey,
                    hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1,
                    switchNode = hasExpanded ? _react2.default.createElement(_icon2.default, {
                    type: 'minus',
                    size: 'xs',
                    className: prefix + 'table-expand-unfold'
                }) : _react2.default.createElement(_icon2.default, {
                    type: 'add',
                    size: 'xs',
                    className: prefix + 'table-expand-fold'
                }),
                    attrs = getExpandedColProps(record, index) || {};

                var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-expanded-ctrl'] = true, _classnames.disabled = attrs.disabled, _classnames[attrs.className] = attrs.className, _classnames));

                if (!attrs.disabled) {
                    attrs.onClick = _this.onExpandedClick.bind(_this, value, record, index);
                }
                return _react2.default.createElement(
                    'span',
                    (0, _extends3.default)({}, attrs, {
                        role: 'button',
                        tabIndex: '0',
                        onKeyDown: _this.expandedKeydown.bind(_this, value, record, index),
                        'aria-label': hasExpanded ? locale.expanded : locale.folded,
                        'aria-expanded': hasExpanded,
                        className: cls
                    }),
                    switchNode
                );
            }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        ExpandedTable.prototype.getChildContext = function getChildContext() {
            return {
                openRowKeys: this.state.openRowKeys,
                expandedRowRender: this.props.expandedRowRender,
                expandedIndexSimulate: this.props.expandedIndexSimulate,
                expandedRowIndent: this.props.expandedRowIndent
            };
        };

        ExpandedTable.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
            if ('openRowKeys' in nextProps) {
                return {
                    openRowKeys: nextProps.openRowKeys || []
                };
            }

            return null;
        };

        ExpandedTable.prototype.onExpandedClick = function onExpandedClick(value, record, i, e) {
            var openRowKeys = [].concat(this.state.openRowKeys),
                primaryKey = this.props.primaryKey,
                id = record[primaryKey],
                index = openRowKeys.indexOf(id);

            if (index > -1) {
                openRowKeys.splice(index, 1);
            } else {
                openRowKeys.push(id);
            }
            if (!('openRowKeys' in this.props)) {
                this.setState({
                    openRowKeys: openRowKeys
                });
            }
            this.props.onRowOpen(openRowKeys, id, index === -1, record);
            e.stopPropagation();
        };

        ExpandedTable.prototype.normalizeChildren = function normalizeChildren(children) {
            var _props = this.props,
                prefix = _props.prefix,
                size = _props.size;

            var toArrayChildren = _react.Children.map(children, function (child, index) {
                return _react2.default.cloneElement(child, {
                    key: index
                });
            });
            toArrayChildren.unshift(_react2.default.createElement(_column2.default, {
                title: '',
                key: 'expanded',
                cell: this.renderExpandedCell.bind(this),
                width: size === 'small' ? 34 : 50,
                className: prefix + 'table-expanded ' + prefix + 'table-prerow',
                __normalized: true
            }));
            return toArrayChildren;
        };

        ExpandedTable.prototype.normalizeDataSource = function normalizeDataSource(ds) {
            var ret = [];
            ds.forEach(function (item) {
                var itemCopy = (0, _extends3.default)({}, item);
                itemCopy.__expanded = true;
                ret.push(item, itemCopy);
            });
            return ret;
        };

        ExpandedTable.prototype.render = function render() {
            /* eslint-disable no-unused-vars, prefer-const */
            var _props2 = this.props,
                components = _props2.components,
                openRowKeys = _props2.openRowKeys,
                expandedRowRender = _props2.expandedRowRender,
                hasExpandedRowCtrl = _props2.hasExpandedRowCtrl,
                children = _props2.children,
                dataSource = _props2.dataSource,
                entireDataSource = _props2.entireDataSource,
                getExpandedColProps = _props2.getExpandedColProps,
                expandedRowIndent = _props2.expandedRowIndent,
                onRowOpen = _props2.onRowOpen,
                onExpandedRowClick = _props2.onExpandedRowClick,
                others = (0, _objectWithoutProperties3.default)(_props2, ['components', 'openRowKeys', 'expandedRowRender', 'hasExpandedRowCtrl', 'children', 'dataSource', 'entireDataSource', 'getExpandedColProps', 'expandedRowIndent', 'onRowOpen', 'onExpandedRowClick']);

            if (expandedRowRender && !components.Row) {
                components = (0, _extends3.default)({}, components);
                components.Row = _row2.default;
                dataSource = this.normalizeDataSource(dataSource);
                entireDataSource = this.normalizeDataSource(entireDataSource);
            }
            if (expandedRowRender && hasExpandedRowCtrl) {
                children = this.normalizeChildren(children);
            }

            return _react2.default.createElement(
                BaseComponent,
                (0, _extends3.default)({}, others, {
                    dataSource: dataSource,
                    entireDataSource: entireDataSource,
                    components: components
                }),
                children
            );
        };

        return ExpandedTable;
    }(_react2.default.Component), _class.ExpandedRow = _row2.default, _class.propTypes = (0, _extends3.default)({
        /**
         * 额外渲染行的渲染函数
         * @param {Object} record 该行所对应的数据
         * @param {Number} index 该行所对应的序列
         * @returns {Element}
         */
        expandedRowRender: _propTypes2.default.func,
        /**
         * 额外渲染行的缩进
         */
        expandedRowIndent: _propTypes2.default.array,
        /**
         * 默认情况下展开的渲染行或者Tree, 传入此属性为受控状态
         */
        openRowKeys: _propTypes2.default.array,
        /**
         * 是否显示点击展开额外渲染行的+号按钮
         */
        hasExpandedRowCtrl: _propTypes2.default.bool,
        /**
         * 设置额外渲染行的属性
         */
        getExpandedColProps: _propTypes2.default.func,
        /**
         * 在额外渲染行或者Tree展开或者收起的时候触发的事件
         * @param {Array} openRowKeys 展开的渲染行的key
         * @param {String} currentRowKey 当前点击的渲染行的key
         * @param {Boolean} expanded 当前点击是展开还是收起
         * @param {Object} currentRecord 当前点击额外渲染行的记录
         */
        onRowOpen: _propTypes2.default.func,
        onExpandedRowClick: _propTypes2.default.func,
        locale: _propTypes2.default.object
    }, BaseComponent.propTypes), _class.defaultProps = (0, _extends3.default)({}, BaseComponent.defaultProps, {
        getExpandedColProps: noop,
        onRowOpen: noop,
        hasExpandedRowCtrl: true,
        components: {},
        expandedRowIndent: [1, 0],
        prefix: 'next-'
    }), _class.childContextTypes = {
        openRowKeys: _propTypes2.default.array,
        expandedRowRender: _propTypes2.default.func,
        expandedIndexSimulate: _propTypes2.default.bool,
        expandedRowIndent: _propTypes2.default.array
    }, _temp2);
    ExpandedTable.displayName = 'ExpandedTable';

    (0, _util2.statics)(ExpandedTable, BaseComponent);
    return (0, _reactLifecyclesCompat.polyfill)(ExpandedTable);
}
module.exports = exports['default'];