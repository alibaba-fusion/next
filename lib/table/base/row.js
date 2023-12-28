"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var util_1 = require("../../util");
var util_2 = require("../util");
var noop = function () { };
var Row = /** @class */ (function (_super) {
    tslib_1.__extends(Row, _super);
    function Row() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.onClick = function (e) {
            var _a = _this.props, record = _a.record, rowIndex = _a.rowIndex;
            _this.props.onClick(record, rowIndex, e);
        };
        _this.onMouseEnter = function (e) {
            var _a = _this.props, record = _a.record, rowIndex = _a.rowIndex, __rowIndex = _a.__rowIndex;
            var row = __rowIndex || rowIndex;
            _this.onRowHover(record, row, true, e);
        };
        _this.onMouseLeave = function (e) {
            var _a = _this.props, record = _a.record, rowIndex = _a.rowIndex, __rowIndex = _a.__rowIndex;
            var row = __rowIndex || rowIndex;
            _this.onRowHover(record, row, false, e);
        };
        return _this;
    }
    Row.prototype.shouldComponentUpdate = function (nextProps) {
        if (nextProps.pure) {
            var isEqual = util_1.obj.shallowEqual(this.props, nextProps);
            return !isEqual;
        }
        return true;
    };
    Row.prototype.onRowHover = function (record, index, isEnter, e) {
        var _a = this.props, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, currentRow = (0, react_dom_1.findDOMNode)(this);
        if (isEnter) {
            onMouseEnter(record, index, e);
            currentRow && util_1.dom.addClass(currentRow, 'hovered');
        }
        else {
            onMouseLeave(record, index, e);
            currentRow && util_1.dom.removeClass(currentRow, 'hovered');
        }
    };
    Row.prototype.renderCells = function (record, rowIndex) {
        var _this = this;
        var _a = this.props, Cell = _a.Cell, columns = _a.columns, getCellProps = _a.getCellProps, cellRef = _a.cellRef, prefix = _a.prefix, primaryKey = _a.primaryKey, 
        // __rowIndex 是连贯的table行的索引，只有在开启expandedIndexSimulate的ExpandedTable模式下__rowIndex可能会不等于rowIndex
        __rowIndex = _a.__rowIndex, pure = _a.pure, locale = _a.locale, rtl = _a.rtl;
        // use params first, it's for list
        rowIndex = rowIndex !== undefined ? rowIndex : this.props.rowIndex;
        var lockType = this.context.lockType;
        return columns.map(function (child, index) {
            var _a;
            /* eslint-disable no-unused-vars, prefer-const */
            var dataIndex = child.dataIndex, align = child.align, alignHeader = child.alignHeader, width = child.width, colSpan = child.colSpan, style = child.style, cellStyle = child.cellStyle, __colIndex = child.__colIndex, others = tslib_1.__rest(child, ["dataIndex", "align", "alignHeader", "width", "colSpan", "style", "cellStyle", "__colIndex"]);
            var colIndex = '__colIndex' in child ? __colIndex : index;
            // colSpan should show in body td by the way of <Table.Column colSpan={2} />
            // tbody's cell merge should only by the way of <Table cellProps={} />
            var value = (0, util_2.fetchDataByPath)(record, dataIndex);
            var attrs = getCellProps(rowIndex, colIndex, dataIndex, record) || {};
            if (_this.context.notRenderCellIndex) {
                var matchCellIndex = _this.context.notRenderCellIndex
                    .map(function (cellIndex) { return cellIndex.toString(); })
                    .indexOf([rowIndex, colIndex].toString());
                if (matchCellIndex > -1) {
                    _this.context.notRenderCellIndex.splice(matchCellIndex, 1);
                    return null;
                }
            }
            if ((attrs.colSpan && attrs.colSpan > 1) || (attrs.rowSpan && attrs.rowSpan > 1)) {
                _this._getNotRenderCellIndex(colIndex, rowIndex, attrs.colSpan || 1, attrs.rowSpan || 1);
            }
            var cellClass = attrs.className;
            var className = (0, classnames_1.default)((_a = {
                    first: lockType !== 'right' && colIndex === 0,
                    last: lockType !== 'left' &&
                        (colIndex === columns.length - 1 || colIndex + attrs.colSpan === columns.length)
                },
                _a[child.className] = child.className,
                _a[cellClass] = cellClass,
                _a));
            var newStyle = tslib_1.__assign(tslib_1.__assign({}, attrs.style), cellStyle);
            return (react_1.default.createElement(Cell, tslib_1.__assign({ key: "".concat(__rowIndex, "-").concat(colIndex) }, others, attrs, { style: newStyle, "data-next-table-col": colIndex, "data-next-table-row": rowIndex, ref: function (cell) { return cellRef(__rowIndex, colIndex, cell); }, prefix: prefix, pure: pure, primaryKey: primaryKey, record: record, className: className, value: value, colIndex: colIndex, rowIndex: rowIndex, align: align, locale: locale, rtl: rtl, width: width })));
        });
    };
    Row.prototype._getNotRenderCellIndex = function (colIndex, rowIndex, colSpan, rowSpan) {
        var maxColIndex = colSpan;
        var maxRowIndex = rowSpan;
        var notRenderCellIndex = [];
        for (var i = 0; i < maxColIndex; i++) {
            for (var j = 0; j < maxRowIndex; j++) {
                notRenderCellIndex.push([rowIndex + j, colIndex + i]);
            }
        }
        [].push.apply(this.context.notRenderCellIndex, notRenderCellIndex);
    };
    Row.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars*/
        var _b = this.props, prefix = _b.prefix, className = _b.className, onClick = _b.onClick, onMouseEnter = _b.onMouseEnter, onMouseLeave = _b.onMouseLeave, columns = _b.columns, Cell = _b.Cell, getCellProps = _b.getCellProps, rowIndex = _b.rowIndex, record = _b.record, __rowIndex = _b.__rowIndex, children = _b.children, primaryKey = _b.primaryKey, cellRef = _b.cellRef, colGroup = _b.colGroup, pure = _b.pure, locale = _b.locale, expandedIndexSimulate = _b.expandedIndexSimulate, tableEl = _b.tableEl, rtl = _b.rtl, wrapper = _b.wrapper, others = tslib_1.__rest(_b, ["prefix", "className", "onClick", "onMouseEnter", "onMouseLeave", "columns", "Cell", "getCellProps", "rowIndex", "record", "__rowIndex", "children", "primaryKey", "cellRef", "colGroup", "pure", "locale", "expandedIndexSimulate", "tableEl", "rtl", "wrapper"]);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "table-row")] = true,
            _a[className] = className,
            _a));
        var tr = (react_1.default.createElement("tr", tslib_1.__assign({ className: cls, role: "row" }, others, { onClick: this.onClick, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }),
            this.renderCells(record),
            children));
        return wrapper(tr);
    };
    Row.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        primaryKey: prop_types_1.default.oneOfType([prop_types_1.default.symbol, prop_types_1.default.string]),
        className: prop_types_1.default.string,
        columns: prop_types_1.default.array,
        record: prop_types_1.default.any,
        Cell: prop_types_1.default.func,
        rowIndex: prop_types_1.default.number,
        getCellProps: prop_types_1.default.func,
        onClick: prop_types_1.default.func,
        onMouseEnter: prop_types_1.default.func,
        onMouseLeave: prop_types_1.default.func,
        children: prop_types_1.default.any,
        cellRef: prop_types_1.default.func,
        colGroup: prop_types_1.default.object,
        locale: prop_types_1.default.object,
        wrapper: prop_types_1.default.func,
    };
    Row.defaultProps = {
        prefix: 'next-',
        primaryKey: 'id',
        columns: [],
        record: {},
        getCellProps: noop,
        onClick: noop,
        onMouseEnter: noop,
        onMouseLeave: noop,
        cellRef: noop,
        colGroup: {},
        wrapper: function (row) { return row; },
    };
    Row.contextTypes = {
        notRenderCellIndex: prop_types_1.default.array,
        lockType: prop_types_1.default.oneOf(['left', 'right']),
    };
    return Row;
}(react_1.default.Component));
exports.default = Row;
