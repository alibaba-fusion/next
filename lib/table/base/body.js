"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var row_1 = require("./row");
var cell_1 = require("./cell");
var util_1 = require("../../util");
var noop = function () { };
var Body = /** @class */ (function (_super) {
    tslib_1.__extends(Body, _super);
    function Body() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.getRowRef = function (i, row) {
            _this.props.rowRef(i, row);
        };
        _this.onRowClick = function (record, index, e) {
            _this.props.onRowClick(record, index, e);
        };
        _this.onRowMouseEnter = function (record, index, e) {
            _this.props.onRowMouseEnter(record, index, e);
        };
        _this.onRowMouseLeave = function (record, index, e) {
            _this.props.onRowMouseLeave(record, index, e);
        };
        _this.onBodyMouseOver = function (e) {
            _this.props.onBodyMouseOver(e);
        };
        _this.onBodyMouseOut = function (e) {
            _this.props.onBodyMouseOut(e);
        };
        _this.getEmptyNode = function (ref) {
            _this.emptyNode = ref;
        };
        _this.setEmptyDomStyle = function () {
            var tableEl = _this.props.tableEl;
            // getboundingclientRect 获取的是除 margin 之外的内容区，可能带小数点，不四舍五入
            var borderLeftWidth = util_1.dom.getStyle(tableEl, 'borderLeftWidth');
            var tableWidth = tableEl && tableEl.getBoundingClientRect().width;
            var totalWidth = tableWidth - borderLeftWidth - 1 || '100%';
            util_1.dom.setStyle(_this.emptyNode, { width: totalWidth });
        };
        return _this;
    }
    Body.prototype.componentDidMount = function () {
        util_1.events.on(window, 'resize', this.setEmptyDomStyle);
    };
    Body.prototype.componentDidUpdate = function () {
        this.setEmptyDomStyle();
    };
    Body.prototype.componentWillUnmount = function () {
        util_1.events.off(window, 'resize', this.setEmptyDomStyle);
    };
    Body.prototype.render = function () {
        var _this = this;
        /*eslint-disable no-unused-vars */
        var _a = this.props, prefix = _a.prefix, className = _a.className, children = _a.children, Tag = _a.component, colGroup = _a.colGroup, loading = _a.loading, emptyContent = _a.emptyContent, components = _a.components, getCellProps = _a.getCellProps, primaryKey = _a.primaryKey, getRowProps = _a.getRowProps, dataSource = _a.dataSource, cellRef = _a.cellRef, columns = _a.columns, rowRef = _a.rowRef, onRowClick = _a.onRowClick, onRowMouseEnter = _a.onRowMouseEnter, onRowMouseLeave = _a.onRowMouseLeave, onBodyMouseOver = _a.onBodyMouseOver, onBodyMouseOut = _a.onBodyMouseOut, locale = _a.locale, pure = _a.pure, expandedIndexSimulate = _a.expandedIndexSimulate, tableEl = _a.tableEl, rtl = _a.rtl, crossline = _a.crossline, tableWidth = _a.tableWidth, others = tslib_1.__rest(_a, ["prefix", "className", "children", "component", "colGroup", "loading", "emptyContent", "components", "getCellProps", "primaryKey", "getRowProps", "dataSource", "cellRef", "columns", "rowRef", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "onBodyMouseOver", "onBodyMouseOut", "locale", "pure", "expandedIndexSimulate", "tableEl", "rtl", "crossline", "tableWidth"]);
        var totalWidth = +(tableEl && tableEl.clientWidth) - 1 || '100%';
        var _b = components.Row, Row = _b === void 0 ? row_1.default : _b, _c = components.Cell, Cell = _c === void 0 ? cell_1.default : _c;
        var empty = loading ? react_1.default.createElement("span", null, "\u00A0") : emptyContent || locale.empty;
        var rows = (react_1.default.createElement("tr", null,
            react_1.default.createElement("td", { colSpan: columns.length },
                react_1.default.createElement("div", { ref: this.getEmptyNode, className: "".concat(prefix, "table-empty"), style: { position: 'sticky', left: 0, overflow: 'hidden', width: totalWidth } }, empty))));
        if (Tag === 'div') {
            rows = (react_1.default.createElement("table", { role: "table" },
                react_1.default.createElement("tbody", null, rows)));
        }
        if (dataSource.length) {
            rows = dataSource.map(function (record, index) {
                var _a;
                var rowProps = {};
                // record may be a string
                var rowIndex = typeof record === 'object' && '__rowIndex' in record ? record.__rowIndex : index;
                if (expandedIndexSimulate) {
                    rowProps = record.__expanded ? {} : getRowProps(record, index / 2);
                }
                else {
                    rowProps = getRowProps(record, rowIndex);
                }
                rowProps = rowProps || {};
                var rowClass = rowProps.className;
                var className = (0, classnames_1.default)((_a = {
                        first: index === 0,
                        last: index === dataSource.length - 1
                    },
                    _a[rowClass] = rowClass,
                    _a));
                var expanded = record.__expanded ? 'expanded' : '';
                return (react_1.default.createElement(Row, tslib_1.__assign({ key: "".concat(record[primaryKey] || (record[primaryKey] === 0 ? 0 : rowIndex)).concat(expanded) }, rowProps, { ref: _this.getRowRef.bind(_this, expanded ? "".concat(rowIndex, "_expanded") : rowIndex), colGroup: colGroup, rtl: rtl, columns: columns, primaryKey: primaryKey, record: record, rowIndex: rowIndex, __rowIndex: rowIndex, prefix: prefix, pure: pure, cellRef: cellRef, getCellProps: getCellProps, className: className, Cell: Cell, tableEl: tableEl, onClick: _this.onRowClick, locale: locale, onMouseEnter: _this.onRowMouseEnter, onMouseLeave: _this.onRowMouseLeave })));
            });
        }
        else {
            // 异步设置空数据时的宽度
            this.setEmptyDomStyle();
        }
        var event = crossline
            ? {
                onMouseOver: this.onBodyMouseOver,
                onMouseOut: this.onBodyMouseOut,
            }
            : {};
        return (react_1.default.createElement(Tag, tslib_1.__assign({ className: className }, others, event),
            rows,
            children));
    };
    Body.propTypes = {
        loading: prop_types_1.default.bool,
        emptyContent: prop_types_1.default.any,
        tableEl: prop_types_1.default.any,
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        components: prop_types_1.default.object,
        getCellProps: prop_types_1.default.func,
        cellRef: prop_types_1.default.func,
        primaryKey: prop_types_1.default.oneOfType([prop_types_1.default.symbol, prop_types_1.default.string]),
        getRowProps: prop_types_1.default.func,
        rowRef: prop_types_1.default.func,
        dataSource: prop_types_1.default.array,
        children: prop_types_1.default.any,
        className: prop_types_1.default.string,
        component: prop_types_1.default.string,
        colGroup: prop_types_1.default.object,
        columns: prop_types_1.default.array,
        onRowClick: prop_types_1.default.func,
        onRowMouseEnter: prop_types_1.default.func,
        onRowMouseLeave: prop_types_1.default.func,
        onBodyMouseOver: prop_types_1.default.func,
        onBodyMouseOut: prop_types_1.default.func,
        locale: prop_types_1.default.object,
        crossline: prop_types_1.default.bool,
        tableWidth: prop_types_1.default.number,
    };
    Body.defaultProps = {
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
        columns: [],
    };
    return Body;
}(react_1.default.Component));
exports.default = Body;
