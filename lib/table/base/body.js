'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var Body = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Body, _React$Component);

    function Body() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Body);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getRowRef = function (i, row) {
            _this.props.rowRef(i, row);
        }, _this.onRowClick = function (record, index, e) {
            _this.props.onRowClick(record, index, e);
        }, _this.onRowMouseEnter = function (record, index, e) {
            _this.props.onRowMouseEnter(record, index, e);
        }, _this.onRowMouseLeave = function (record, index, e) {
            _this.props.onRowMouseLeave(record, index, e);
        }, _this.onBodyMouseOver = function (e) {
            _this.props.onBodyMouseOver(e);
        }, _this.onBodyMouseOut = function (e) {
            _this.props.onBodyMouseOut(e);
        }, _this.getEmptyNode = function (ref) {
            _this.emptyNode = ref;
        }, _this.setEmptyDomStyle = function () {
            var tableEl = _this.props.tableEl;
            // getboundingclientRect 获取的是除 margin 之外的内容区，可能带小数点，不四舍五入

            var borderLeftWidth = _util.dom.getStyle(tableEl, 'borderLeftWidth');
            var tableWidth = tableEl && tableEl.getBoundingClientRect().width;
            var totalWidth = tableWidth - borderLeftWidth - 1 || '100%';

            _util.dom.setStyle(_this.emptyNode, { width: totalWidth });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Body.prototype.componentDidMount = function componentDidMount() {
        _util.events.on(window, 'resize', this.setEmptyDomStyle);
    };

    Body.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setEmptyDomStyle();
    };

    Body.prototype.componentWillUnmount = function componentWillUnmount() {
        _util.events.off(window, 'resize', this.setEmptyDomStyle);
    };

    Body.prototype.render = function render() {
        var _this2 = this;

        /*eslint-disable no-unused-vars */
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            Tag = _props.component,
            colGroup = _props.colGroup,
            loading = _props.loading,
            emptyContent = _props.emptyContent,
            components = _props.components,
            getCellProps = _props.getCellProps,
            primaryKey = _props.primaryKey,
            getRowProps = _props.getRowProps,
            dataSource = _props.dataSource,
            cellRef = _props.cellRef,
            columns = _props.columns,
            rowRef = _props.rowRef,
            onRowClick = _props.onRowClick,
            onRowMouseEnter = _props.onRowMouseEnter,
            onRowMouseLeave = _props.onRowMouseLeave,
            onBodyMouseOver = _props.onBodyMouseOver,
            onBodyMouseOut = _props.onBodyMouseOut,
            locale = _props.locale,
            pure = _props.pure,
            expandedIndexSimulate = _props.expandedIndexSimulate,
            tableEl = _props.tableEl,
            rtl = _props.rtl,
            crossline = _props.crossline,
            tableWidth = _props.tableWidth,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'children', 'component', 'colGroup', 'loading', 'emptyContent', 'components', 'getCellProps', 'primaryKey', 'getRowProps', 'dataSource', 'cellRef', 'columns', 'rowRef', 'onRowClick', 'onRowMouseEnter', 'onRowMouseLeave', 'onBodyMouseOver', 'onBodyMouseOut', 'locale', 'pure', 'expandedIndexSimulate', 'tableEl', 'rtl', 'crossline', 'tableWidth']);


        var totalWidth = +(tableEl && tableEl.clientWidth) - 1 || '100%';

        var _components$Row = components.Row,
            Row = _components$Row === undefined ? _row2.default : _components$Row,
            _components$Cell = components.Cell,
            Cell = _components$Cell === undefined ? _cell2.default : _components$Cell;

        var empty = loading ? _react2.default.createElement(
            'span',
            null,
            '\xA0'
        ) : emptyContent || locale.empty;
        var rows = _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
                'td',
                { colSpan: columns.length },
                _react2.default.createElement(
                    'div',
                    {
                        ref: this.getEmptyNode,
                        className: prefix + 'table-empty',
                        style: { position: 'sticky', left: 0, overflow: 'hidden', width: totalWidth }
                    },
                    empty
                )
            )
        );
        if (Tag === 'div') {
            rows = _react2.default.createElement(
                'table',
                { role: 'table' },
                _react2.default.createElement(
                    'tbody',
                    null,
                    rows
                )
            );
        }
        if (dataSource.length) {
            rows = dataSource.map(function (record, index) {
                var _classnames;

                var rowProps = {};
                // record may be a string
                var rowIndex = (typeof record === 'undefined' ? 'undefined' : (0, _typeof3.default)(record)) === 'object' && '__rowIndex' in record ? record.__rowIndex : index;

                if (expandedIndexSimulate) {
                    rowProps = record.__expanded ? {} : getRowProps(record, index / 2);
                } else {
                    rowProps = getRowProps(record, rowIndex);
                }

                rowProps = rowProps || {};

                var rowClass = rowProps.className;
                var className = (0, _classnames3.default)((_classnames = {
                    first: index === 0,
                    last: index === dataSource.length - 1
                }, _classnames[rowClass] = rowClass, _classnames));
                var expanded = record.__expanded ? 'expanded' : '';
                return _react2.default.createElement(Row, (0, _extends3.default)({
                    key: '' + (record[primaryKey] || (record[primaryKey] === 0 ? 0 : rowIndex)) + expanded
                }, rowProps, {
                    ref: _this2.getRowRef.bind(_this2, expanded ? rowIndex + '_expanded' : rowIndex),
                    colGroup: colGroup,
                    rtl: rtl,
                    columns: columns,
                    primaryKey: primaryKey,
                    record: record,
                    rowIndex: rowIndex,
                    __rowIndex: rowIndex,
                    prefix: prefix,
                    pure: pure,
                    cellRef: cellRef,
                    getCellProps: getCellProps,
                    className: className,
                    Cell: Cell,
                    tableEl: tableEl,
                    onClick: _this2.onRowClick,
                    locale: locale,
                    onMouseEnter: _this2.onRowMouseEnter,
                    onMouseLeave: _this2.onRowMouseLeave
                }));
            });
        } else {
            // 异步设置空数据时的宽度
            this.setEmptyDomStyle();
        }
        var event = crossline ? {
            onMouseOver: this.onBodyMouseOver,
            onMouseOut: this.onBodyMouseOut
        } : {};
        return _react2.default.createElement(
            Tag,
            (0, _extends3.default)({ className: className }, others, event),
            rows,
            children
        );
    };

    return Body;
}(_react2.default.Component), _class.propTypes = {
    loading: _propTypes2.default.bool,
    emptyContent: _propTypes2.default.any,
    tableEl: _propTypes2.default.any,
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    components: _propTypes2.default.object,
    getCellProps: _propTypes2.default.func,
    cellRef: _propTypes2.default.func,
    primaryKey: _propTypes2.default.oneOfType([_propTypes2.default.symbol, _propTypes2.default.string]),
    getRowProps: _propTypes2.default.func,
    rowRef: _propTypes2.default.func,
    dataSource: _propTypes2.default.array,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    component: _propTypes2.default.string,
    colGroup: _propTypes2.default.object,
    columns: _propTypes2.default.array,
    onRowClick: _propTypes2.default.func,
    onRowMouseEnter: _propTypes2.default.func,
    onRowMouseLeave: _propTypes2.default.func,
    onBodyMouseOver: _propTypes2.default.func,
    onBodyMouseOut: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    crossline: _propTypes2.default.bool,
    tableWidth: _propTypes2.default.number
}, _class.defaultProps = {
    loading: false,
    prefix: 'next-',
    components: {},
    getCellProps: noop,
    cellRef: noop,
    primaryKey: 'id',
    getRowProps: noop,
    rowRef: noop,
    dataSource: [],
    component: 'tbody',
    columns: []
}, _temp2);
Body.displayName = 'Body';
exports.default = Body;
module.exports = exports.default;
module.exports.default = exports.default;