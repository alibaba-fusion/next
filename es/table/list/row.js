import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { log } from '../../util';
import Row from '../base/row';
var GroupListRow = /** @class */ (function (_super) {
    __extends(GroupListRow, _super);
    function GroupListRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupListRow.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars*/
        var _b = this.props, prefix = _b.prefix, className = _b.className, onClick = _b.onClick, onMouseEnter = _b.onMouseEnter, onMouseLeave = _b.onMouseLeave, columns = _b.columns, Cell = _b.Cell, rowIndex = _b.rowIndex, __rowIndex = _b.__rowIndex, record = _b.record, children = _b.children, primaryKey = _b.primaryKey, colGroup = _b.colGroup, cellRef = _b.cellRef, getCellProps = _b.getCellProps, locale = _b.locale, wrapper = _b.wrapper, rtl = _b.rtl, tableEl = _b.tableEl, others = __rest(_b, ["prefix", "className", "onClick", "onMouseEnter", "onMouseLeave", "columns", "Cell", "rowIndex", "__rowIndex", "record", "children", "primaryKey", "colGroup", "cellRef", "getCellProps", "locale", "wrapper", "rtl", "tableEl"]);
        var cls = classnames((_a = {},
            _a["".concat(prefix, "table-row")] = true,
            _a[className] = className,
            _a));
        // clear notRenderCellIndex, incase of cached data
        this.context.notRenderCellIndex = [];
        return (React.createElement("table", __assign({ className: cls, role: "row" }, others, { onClick: this.onClick, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }),
            colGroup,
            React.createElement("tbody", null,
                this.renderContent('header'),
                this.renderChildren(),
                this.renderContent('footer'))));
    };
    GroupListRow.prototype.isChildrenSelection = function () {
        return this.context.listHeader && this.context.listHeader.hasChildrenSelection;
    };
    GroupListRow.prototype.isFirstLevelDataWhenNoChildren = function () {
        return this.context.listHeader && this.context.listHeader.useFirstLevelDataWhenNoChildren;
    };
    GroupListRow.prototype.isSelection = function () {
        return this.context.listHeader && this.context.listHeader.hasSelection;
    };
    GroupListRow.prototype.renderChildren = function () {
        var _this = this;
        var _a = this.props, record = _a.record, primaryKey = _a.primaryKey;
        var children = record.children;
        var toRenderList = children;
        if (this.isFirstLevelDataWhenNoChildren()) {
            log.warning("useFirstLevelDataWhenNoChildren is deprecated, change your dataSource structure, make sure there is 'children' in your dataSource.");
            toRenderList = children || [record];
        }
        if (toRenderList) {
            return toRenderList.map(function (child, index) {
                var cells = _this.renderCells(child, index);
                if (_this.isChildrenSelection()) {
                    if (!child[primaryKey]) {
                        log.warning('record.children/recored should contains primaryKey when childrenSelection is true.');
                    }
                    return React.createElement("tr", { key: child[primaryKey] }, cells);
                }
                if (_this.context.rowSelection) {
                    cells.shift();
                    cells[0] =
                        cells[0] &&
                            React.cloneElement(cells[0], __assign({ colSpan: 2 }, cells[0].props));
                }
                return React.createElement("tr", { key: index }, cells);
            });
        }
        return null;
    };
    GroupListRow.prototype.renderContent = function (type) {
        var _a = this.props, columns = _a.columns, prefix = _a.prefix, record = _a.record, rowIndex = _a.rowIndex;
        var cameType = type.charAt(0).toUpperCase() + type.substr(1);
        var list = this.context["list".concat(cameType)];
        var listNode;
        if (list) {
            if (React.isValidElement(list.cell)) {
                listNode = React.cloneElement(list.cell, {
                    record: record,
                    index: rowIndex,
                });
            }
            else if (typeof list.cell === 'function') {
                listNode = list.cell(record, rowIndex);
            }
            if (listNode) {
                var cells = this.renderCells(record);
                if (type === 'header' && this.context.rowSelection && this.isSelection()) {
                    cells = cells.slice(0, 1);
                    cells.push(React.createElement("td", { colSpan: columns.length - 1, key: "listNode" },
                        React.createElement("div", { className: "".concat(prefix, "table-cell-wrapper") }, listNode)));
                    listNode = React.createElement("tr", { className: "".concat(prefix, "table-group-").concat(type) }, cells);
                }
                else {
                    listNode = (React.createElement("tr", { className: "".concat(prefix, "table-group-").concat(type) },
                        React.createElement("td", { colSpan: columns.length },
                            React.createElement("div", { className: "".concat(prefix, "table-cell-wrapper") }, listNode))));
                }
            }
        }
        return listNode;
    };
    GroupListRow.contextTypes = {
        listHeader: PropTypes.any,
        listFooter: PropTypes.any,
        rowSelection: PropTypes.object,
        notRenderCellIndex: PropTypes.array,
        lockType: PropTypes.oneOf(['left', 'right']),
    };
    return GroupListRow;
}(Row));
export default GroupListRow;
