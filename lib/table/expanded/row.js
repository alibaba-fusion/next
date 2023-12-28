"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var util_1 = require("../../util");
var row_1 = require("../lock/row");
var ExpandedRow = /** @class */ (function (_super) {
    tslib_1.__extends(ExpandedRow, _super);
    function ExpandedRow() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.getExpandedRow = function (parentKey, ref) {
            var getExpandedRowRef = _this.context.getExpandedRowRef;
            getExpandedRowRef && getExpandedRowRef(parentKey, ref);
        };
        return _this;
    }
    ExpandedRow.prototype.renderExpandedRow = function (record, rowIndex) {
        var _a = this.context, expandedRowRender = _a.expandedRowRender, expandedRowIndent = _a.expandedRowIndent, openRowKeys = _a.openRowKeys, lockType = _a.lockType, expandedIndexSimulate = _a.expandedIndexSimulate, expandedRowWidthEquals2Table = _a.expandedRowWidthEquals2Table;
        var expandedIndex = expandedIndexSimulate ? (rowIndex - 1) / 2 : rowIndex;
        var _b = this.props, columns = _b.columns, cellRef = _b.cellRef;
        var colSpan = columns.length;
        var expandedCols = (columns[0] && columns[0].__colIndex) || 0;
        if (expandedRowRender) {
            var _c = this.props, primaryKey = _c.primaryKey, prefix = _c.prefix, leftIndent = expandedRowIndent[0], rightIndent = expandedRowIndent[1], totalIndent = leftIndent + rightIndent, renderCols = function (number, start) {
                if (start === void 0) { start = 0; }
                var ret = [];
                var _loop_1 = function (i) {
                    ret.push(react_1.default.createElement("td", { key: i, ref: function (cell) { return cellRef(rowIndex, i + start, cell); } }, "\u00A0"));
                };
                for (var i = 0; i < number; i++) {
                    _loop_1(i);
                }
                return ret;
            };
            var content = void 0;
            if (totalIndent > colSpan && !lockType) {
                util_1.log.warning("It's not allowed expandedRowIndent is more than the number of columns.");
            }
            if (leftIndent < columns.length && lockType === 'left') {
                util_1.log.warning('expandedRowIndent left is less than the number of left lock columns.');
            }
            if (rightIndent < columns.length && lockType === 'right') {
                util_1.log.warning('expandedRowIndent right is less than the number of right lock columns.');
            }
            if (lockType) {
                return openRowKeys.indexOf(record[primaryKey]) > -1 ? (react_1.default.createElement("tr", { className: "".concat(prefix, "table-expanded-row"), key: "expanded-".concat(expandedIndex) },
                    react_1.default.createElement("td", { colSpan: colSpan, ref: function (cell) { return cellRef(rowIndex, expandedCols, cell); } }, "\u00A0"))) : null;
            }
            var expandedRowStyle = {
                position: 'sticky',
                left: 0,
            };
            // 暴露给用户的index
            content = expandedRowRender(record, expandedIndex);
            if (!react_1.default.isValidElement(content)) {
                content = (react_1.default.createElement("div", { className: "".concat(prefix, "table-cell-wrapper"), ref: this.getExpandedRow.bind(this, record[primaryKey]), style: expandedRowWidthEquals2Table && expandedRowStyle }, content));
            }
            else {
                content = expandedRowWidthEquals2Table ? (react_1.default.createElement("div", { className: "".concat(prefix, "table-expanded-area"), ref: this.getExpandedRow.bind(this, record[primaryKey]), style: expandedRowStyle }, content)) : (content);
            }
            var rightStart_1 = columns.length;
            columns.forEach(function (col) {
                col.lock === 'right' && rightStart_1--;
            });
            return openRowKeys.indexOf(record[primaryKey]) > -1 ? (react_1.default.createElement("tr", { className: "".concat(prefix, "table-expanded-row"), key: "expanded-".concat(record[primaryKey] || expandedIndex) },
                renderCols(leftIndent),
                react_1.default.createElement("td", { colSpan: colSpan - totalIndent }, content),
                renderCols(rightIndent, rightStart_1))) : null;
        }
        else {
            return null;
        }
    };
    ExpandedRow.prototype.render = function () {
        /* eslint-disable no-unused-vars*/
        var _a = this.props, record = _a.record, rowIndex = _a.rowIndex, columns = _a.columns, others = tslib_1.__rest(_a, ["record", "rowIndex", "columns"]);
        var expandedIndexSimulate = this.context.expandedIndexSimulate;
        if (record.__expanded) {
            return this.renderExpandedRow(record, rowIndex, columns);
        }
        var newRowIndex = expandedIndexSimulate ? rowIndex / 2 : rowIndex;
        return react_1.default.createElement(row_1.default, tslib_1.__assign({}, others, { record: record, columns: columns, __rowIndex: rowIndex, rowIndex: newRowIndex }));
    };
    ExpandedRow.propTypes = tslib_1.__assign({}, row_1.default.propTypes);
    ExpandedRow.defaultProps = tslib_1.__assign({}, row_1.default.defaultProps);
    ExpandedRow.contextTypes = {
        openRowKeys: prop_types_1.default.array,
        expandedRowRender: prop_types_1.default.func,
        expandedRowIndent: prop_types_1.default.array,
        expandedIndexSimulate: prop_types_1.default.bool,
        expandedRowWidthEquals2Table: prop_types_1.default.bool,
        lockType: prop_types_1.default.oneOf(['left', 'right']),
        getExpandedRowRef: prop_types_1.default.func,
    };
    return ExpandedRow;
}(react_1.default.Component));
exports.default = ExpandedRow;
