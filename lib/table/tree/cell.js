"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var icon_1 = require("../../icon");
var util_1 = require("../../util");
var cell_1 = require("../base/cell");
var TreeCell = /** @class */ (function (_super) {
    tslib_1.__extends(TreeCell, _super);
    function TreeCell() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.onTreeNodeClick = function (record, e) {
            e.stopPropagation();
            _this.context.onTreeNodeClick(record);
        };
        _this.expandedKeydown = function (record, e) {
            e.preventDefault();
            e.stopPropagation();
            if (e.keyCode === util_1.KEYCODE.ENTER) {
                _this.onTreeNodeClick(record, e);
            }
        };
        return _this;
    }
    TreeCell.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, colIndex = _b.colIndex, record = _b.record, prefix = _b.prefix, primaryKey = _b.primaryKey, locale = _b.locale, rtl = _b.rtl, children = _b.children;
        var _c = this.context, openRowKeys = _c.openTreeRowKeys, indent = _c.indent, isTree = _c.isTree, rowSelection = _c.rowSelection;
        var treeArrowNodeIndex = rowSelection ? 1 : 0;
        var firstCellStyle, treeArrowNode;
        if (colIndex === treeArrowNodeIndex) {
            var treeArrowType = void 0;
            if (isTree) {
                var paddingType = rtl ? 'paddingRight' : 'paddingLeft';
                firstCellStyle = (_a = {},
                    _a[paddingType] = indent * (record.__level + 1),
                    _a);
                treeArrowNode = (react_1.default.createElement(icon_1.default, { size: "xs", rtl: rtl, className: "".concat(prefix, "table-tree-placeholder"), type: "arrow-right" }));
                if (record.children && record.children.length) {
                    var hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1;
                    treeArrowType = hasExpanded ? 'arrow-down' : 'arrow-right';
                    treeArrowNode = (react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "table-tree-arrow"), type: treeArrowType, size: "xs", rtl: rtl, onClick: function (e) { return _this.onTreeNodeClick(record, e); }, onKeyDown: function (e) { return _this.expandedKeydown(record, e); }, role: "button", tabIndex: "0", "aria-expanded": hasExpanded, "aria-label": hasExpanded ? locale.expanded : locale.folded }));
                }
            }
        }
        return (react_1.default.createElement(cell_1.default, tslib_1.__assign({}, this.props, { innerStyle: firstCellStyle, isIconLeft: !!treeArrowNode }),
            children,
            treeArrowNode));
    };
    TreeCell.propTypes = tslib_1.__assign({ indent: prop_types_1.default.number, locale: prop_types_1.default.object }, cell_1.default.propTypes);
    TreeCell.defaultProps = tslib_1.__assign(tslib_1.__assign({}, cell_1.default.defaultProps), { component: 'td', indent: 20 });
    TreeCell.contextTypes = {
        openTreeRowKeys: prop_types_1.default.array,
        indent: prop_types_1.default.number,
        onTreeNodeClick: prop_types_1.default.func,
        isTree: prop_types_1.default.bool,
        rowSelection: prop_types_1.default.object,
    };
    return TreeCell;
}(react_1.default.Component));
exports.default = TreeCell;
