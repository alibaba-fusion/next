import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { obj, dom } from '../../util';
import { fetchDataByPath } from '../util';
var noop = function () { };
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
            var isEqual = obj.shallowEqual(this.props, nextProps);
            return !isEqual;
        }
        return true;
    };
    Row.prototype.onRowHover = function (record, index, isEnter, e) {
        var _a = this.props, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, currentRow = findDOMNode(this);
        if (isEnter) {
            onMouseEnter(record, index, e);
            currentRow && dom.addClass(currentRow, 'hovered');
        }
        else {
            onMouseLeave(record, index, e);
            currentRow && dom.removeClass(currentRow, 'hovered');
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
            var dataIndex = child.dataIndex, align = child.align, alignHeader = child.alignHeader, width = child.width, colSpan = child.colSpan, style = child.style, cellStyle = child.cellStyle, __colIndex = child.__colIndex, others = __rest(child, ["dataIndex", "align", "alignHeader", "width", "colSpan", "style", "cellStyle", "__colIndex"]);
            var colIndex = '__colIndex' in child ? __colIndex : index;
            // colSpan should show in body td by the way of <Table.Column colSpan={2} />
            // tbody's cell merge should only by the way of <Table cellProps={} />
            var value = fetchDataByPath(record, dataIndex);
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
            var className = classnames((_a = {
                    first: lockType !== 'right' && colIndex === 0,
                    last: lockType !== 'left' &&
                        (colIndex === columns.length - 1 || colIndex + attrs.colSpan === columns.length)
                },
                _a[child.className] = child.className,
                _a[cellClass] = cellClass,
                _a));
            var newStyle = __assign(__assign({}, attrs.style), cellStyle);
            return (React.createElement(Cell, __assign({ key: "".concat(__rowIndex, "-").concat(colIndex) }, others, attrs, { style: newStyle, "data-next-table-col": colIndex, "data-next-table-row": rowIndex, ref: function (cell) { return cellRef(__rowIndex, colIndex, cell); }, prefix: prefix, pure: pure, primaryKey: primaryKey, record: record, className: className, value: value, colIndex: colIndex, rowIndex: rowIndex, align: align, locale: locale, rtl: rtl, width: width })));
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
        var _b = this.props, prefix = _b.prefix, className = _b.className, onClick = _b.onClick, onMouseEnter = _b.onMouseEnter, onMouseLeave = _b.onMouseLeave, columns = _b.columns, Cell = _b.Cell, getCellProps = _b.getCellProps, rowIndex = _b.rowIndex, record = _b.record, __rowIndex = _b.__rowIndex, children = _b.children, primaryKey = _b.primaryKey, cellRef = _b.cellRef, colGroup = _b.colGroup, pure = _b.pure, locale = _b.locale, expandedIndexSimulate = _b.expandedIndexSimulate, tableEl = _b.tableEl, rtl = _b.rtl, wrapper = _b.wrapper, others = __rest(_b, ["prefix", "className", "onClick", "onMouseEnter", "onMouseLeave", "columns", "Cell", "getCellProps", "rowIndex", "record", "__rowIndex", "children", "primaryKey", "cellRef", "colGroup", "pure", "locale", "expandedIndexSimulate", "tableEl", "rtl", "wrapper"]);
        var cls = classnames((_a = {},
            _a["".concat(prefix, "table-row")] = true,
            _a[className] = className,
            _a));
        var tr = (React.createElement("tr", __assign({ className: cls, role: "row" }, others, { onClick: this.onClick, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }),
            this.renderCells(record),
            children));
        return wrapper(tr);
    };
    Row.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        primaryKey: PropTypes.oneOfType([PropTypes.symbol, PropTypes.string]),
        className: PropTypes.string,
        columns: PropTypes.array,
        record: PropTypes.any,
        Cell: PropTypes.func,
        rowIndex: PropTypes.number,
        getCellProps: PropTypes.func,
        onClick: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        children: PropTypes.any,
        cellRef: PropTypes.func,
        colGroup: PropTypes.object,
        locale: PropTypes.object,
        wrapper: PropTypes.func,
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
        notRenderCellIndex: PropTypes.array,
        lockType: PropTypes.oneOf(['left', 'right']),
    };
    return Row;
}(React.Component));
export default Row;
