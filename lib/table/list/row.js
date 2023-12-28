"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var util_1 = require("../../util");
var row_1 = require("../base/row");
var GroupListRow = /** @class */ (function (_super) {
    tslib_1.__extends(GroupListRow, _super);
    function GroupListRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupListRow.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars*/
        var _b = this.props, prefix = _b.prefix, className = _b.className, onClick = _b.onClick, onMouseEnter = _b.onMouseEnter, onMouseLeave = _b.onMouseLeave, columns = _b.columns, Cell = _b.Cell, rowIndex = _b.rowIndex, __rowIndex = _b.__rowIndex, record = _b.record, children = _b.children, primaryKey = _b.primaryKey, colGroup = _b.colGroup, cellRef = _b.cellRef, getCellProps = _b.getCellProps, locale = _b.locale, wrapper = _b.wrapper, rtl = _b.rtl, tableEl = _b.tableEl, others = tslib_1.__rest(_b, ["prefix", "className", "onClick", "onMouseEnter", "onMouseLeave", "columns", "Cell", "rowIndex", "__rowIndex", "record", "children", "primaryKey", "colGroup", "cellRef", "getCellProps", "locale", "wrapper", "rtl", "tableEl"]);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "table-row")] = true,
            _a[className] = className,
            _a));
        // clear notRenderCellIndex, incase of cached data
        this.context.notRenderCellIndex = [];
        return (react_1.default.createElement("table", tslib_1.__assign({ className: cls, role: "row" }, others, { onClick: this.onClick, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }),
            colGroup,
            react_1.default.createElement("tbody", null,
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
            util_1.log.warning("useFirstLevelDataWhenNoChildren is deprecated, change your dataSource structure, make sure there is 'children' in your dataSource.");
            toRenderList = children || [record];
        }
        if (toRenderList) {
            return toRenderList.map(function (child, index) {
                var cells = _this.renderCells(child, index);
                if (_this.isChildrenSelection()) {
                    if (!child[primaryKey]) {
                        util_1.log.warning('record.children/recored should contains primaryKey when childrenSelection is true.');
                    }
                    return react_1.default.createElement("tr", { key: child[primaryKey] }, cells);
                }
                if (_this.context.rowSelection) {
                    cells.shift();
                    cells[0] =
                        cells[0] &&
                            react_1.default.cloneElement(cells[0], tslib_1.__assign({ colSpan: 2 }, cells[0].props));
                }
                return react_1.default.createElement("tr", { key: index }, cells);
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
            if (react_1.default.isValidElement(list.cell)) {
                listNode = react_1.default.cloneElement(list.cell, {
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
                    cells.push(react_1.default.createElement("td", { colSpan: columns.length - 1, key: "listNode" },
                        react_1.default.createElement("div", { className: "".concat(prefix, "table-cell-wrapper") }, listNode)));
                    listNode = react_1.default.createElement("tr", { className: "".concat(prefix, "table-group-").concat(type) }, cells);
                }
                else {
                    listNode = (react_1.default.createElement("tr", { className: "".concat(prefix, "table-group-").concat(type) },
                        react_1.default.createElement("td", { colSpan: columns.length },
                            react_1.default.createElement("div", { className: "".concat(prefix, "table-cell-wrapper") }, listNode))));
                }
            }
        }
        return listNode;
    };
    GroupListRow.contextTypes = {
        listHeader: prop_types_1.default.any,
        listFooter: prop_types_1.default.any,
        rowSelection: prop_types_1.default.object,
        notRenderCellIndex: prop_types_1.default.array,
        lockType: prop_types_1.default.oneOf(['left', 'right']),
    };
    return GroupListRow;
}(row_1.default));
exports.default = GroupListRow;
