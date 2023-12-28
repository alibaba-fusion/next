import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../icon';
import { KEYCODE } from '../../util';
import CellComponent from '../base/cell';
var TreeCell = /** @class */ (function (_super) {
    __extends(TreeCell, _super);
    function TreeCell() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onTreeNodeClick = function (record, e) {
            e.stopPropagation();
            _this.context.onTreeNodeClick(record);
        };
        _this.expandedKeydown = function (record, e) {
            e.preventDefault();
            e.stopPropagation();
            if (e.keyCode === KEYCODE.ENTER) {
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
                treeArrowNode = (React.createElement(Icon, { size: "xs", rtl: rtl, className: "".concat(prefix, "table-tree-placeholder"), type: "arrow-right" }));
                if (record.children && record.children.length) {
                    var hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1;
                    treeArrowType = hasExpanded ? 'arrow-down' : 'arrow-right';
                    treeArrowNode = (React.createElement(Icon, { className: "".concat(prefix, "table-tree-arrow"), type: treeArrowType, size: "xs", rtl: rtl, onClick: function (e) { return _this.onTreeNodeClick(record, e); }, onKeyDown: function (e) { return _this.expandedKeydown(record, e); }, role: "button", tabIndex: "0", "aria-expanded": hasExpanded, "aria-label": hasExpanded ? locale.expanded : locale.folded }));
                }
            }
        }
        return (React.createElement(CellComponent, __assign({}, this.props, { innerStyle: firstCellStyle, isIconLeft: !!treeArrowNode }),
            children,
            treeArrowNode));
    };
    TreeCell.propTypes = __assign({ indent: PropTypes.number, locale: PropTypes.object }, CellComponent.propTypes);
    TreeCell.defaultProps = __assign(__assign({}, CellComponent.defaultProps), { component: 'td', indent: 20 });
    TreeCell.contextTypes = {
        openTreeRowKeys: PropTypes.array,
        indent: PropTypes.number,
        onTreeNodeClick: PropTypes.func,
        isTree: PropTypes.bool,
        rowSelection: PropTypes.object,
    };
    return TreeCell;
}(React.Component));
export default TreeCell;
