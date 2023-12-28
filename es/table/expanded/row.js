import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import { log } from '../../util';
import Row from '../lock/row';
var ExpandedRow = /** @class */ (function (_super) {
    __extends(ExpandedRow, _super);
    function ExpandedRow() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
                    ret.push(React.createElement("td", { key: i, ref: function (cell) { return cellRef(rowIndex, i + start, cell); } }, "\u00A0"));
                };
                for (var i = 0; i < number; i++) {
                    _loop_1(i);
                }
                return ret;
            };
            var content = void 0;
            if (totalIndent > colSpan && !lockType) {
                log.warning("It's not allowed expandedRowIndent is more than the number of columns.");
            }
            if (leftIndent < columns.length && lockType === 'left') {
                log.warning('expandedRowIndent left is less than the number of left lock columns.');
            }
            if (rightIndent < columns.length && lockType === 'right') {
                log.warning('expandedRowIndent right is less than the number of right lock columns.');
            }
            if (lockType) {
                return openRowKeys.indexOf(record[primaryKey]) > -1 ? (React.createElement("tr", { className: "".concat(prefix, "table-expanded-row"), key: "expanded-".concat(expandedIndex) },
                    React.createElement("td", { colSpan: colSpan, ref: function (cell) { return cellRef(rowIndex, expandedCols, cell); } }, "\u00A0"))) : null;
            }
            var expandedRowStyle = {
                position: 'sticky',
                left: 0,
            };
            // 暴露给用户的index
            content = expandedRowRender(record, expandedIndex);
            if (!React.isValidElement(content)) {
                content = (React.createElement("div", { className: "".concat(prefix, "table-cell-wrapper"), ref: this.getExpandedRow.bind(this, record[primaryKey]), style: expandedRowWidthEquals2Table && expandedRowStyle }, content));
            }
            else {
                content = expandedRowWidthEquals2Table ? (React.createElement("div", { className: "".concat(prefix, "table-expanded-area"), ref: this.getExpandedRow.bind(this, record[primaryKey]), style: expandedRowStyle }, content)) : (content);
            }
            var rightStart_1 = columns.length;
            columns.forEach(function (col) {
                col.lock === 'right' && rightStart_1--;
            });
            return openRowKeys.indexOf(record[primaryKey]) > -1 ? (React.createElement("tr", { className: "".concat(prefix, "table-expanded-row"), key: "expanded-".concat(record[primaryKey] || expandedIndex) },
                renderCols(leftIndent),
                React.createElement("td", { colSpan: colSpan - totalIndent }, content),
                renderCols(rightIndent, rightStart_1))) : null;
        }
        else {
            return null;
        }
    };
    ExpandedRow.prototype.render = function () {
        /* eslint-disable no-unused-vars*/
        var _a = this.props, record = _a.record, rowIndex = _a.rowIndex, columns = _a.columns, others = __rest(_a, ["record", "rowIndex", "columns"]);
        var expandedIndexSimulate = this.context.expandedIndexSimulate;
        if (record.__expanded) {
            return this.renderExpandedRow(record, rowIndex, columns);
        }
        var newRowIndex = expandedIndexSimulate ? rowIndex / 2 : rowIndex;
        return React.createElement(Row, __assign({}, others, { record: record, columns: columns, __rowIndex: rowIndex, rowIndex: newRowIndex }));
    };
    ExpandedRow.propTypes = __assign({}, Row.propTypes);
    ExpandedRow.defaultProps = __assign({}, Row.defaultProps);
    ExpandedRow.contextTypes = {
        openRowKeys: PropTypes.array,
        expandedRowRender: PropTypes.func,
        expandedRowIndent: PropTypes.array,
        expandedIndexSimulate: PropTypes.bool,
        expandedRowWidthEquals2Table: PropTypes.bool,
        lockType: PropTypes.oneOf(['left', 'right']),
        getExpandedRowRef: PropTypes.func,
    };
    return ExpandedRow;
}(React.Component));
export default ExpandedRow;
