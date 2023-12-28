"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var util_1 = require("../../util");
var Cell = /** @class */ (function (_super) {
    tslib_1.__extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.shouldComponentUpdate = function (nextProps) {
        if (nextProps.pure) {
            var isEqual = util_1.obj.shallowEqual(this.props, nextProps);
            return !isEqual;
        }
        return true;
    };
    Cell.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars */
        var _b = this.props, prefix = _b.prefix, className = _b.className, cell = _b.cell, value = _b.value, resizable = _b.resizable, asyncResizable = _b.asyncResizable, colIndex = _b.colIndex, rowIndex = _b.rowIndex, __colIndex = _b.__colIndex, record = _b.record, context = _b.context, align = _b.align, _c = _b.style, style = _c === void 0 ? {} : _c, Tag = _b.component, children = _b.children, title = _b.title, width = _b.width, innerStyle = _b.innerStyle, primaryKey = _b.primaryKey, __normalized = _b.__normalized, filterMode = _b.filterMode, filterMenuProps = _b.filterMenuProps, filterProps = _b.filterProps, filters = _b.filters, sortable = _b.sortable, sortDirections = _b.sortDirections, lock = _b.lock, pure = _b.pure, locale = _b.locale, expandedIndexSimulate = _b.expandedIndexSimulate, rtl = _b.rtl, isIconLeft = _b.isIconLeft, type = _b.type, htmlTitle = _b.htmlTitle, wordBreak = _b.wordBreak, others = tslib_1.__rest(_b, ["prefix", "className", "cell", "value", "resizable", "asyncResizable", "colIndex", "rowIndex", "__colIndex", "record", "context", "align", "style", "component", "children", "title", "width", "innerStyle", "primaryKey", "__normalized", "filterMode", "filterMenuProps", "filterProps", "filters", "sortable", "sortDirections", "lock", "pure", "locale", "expandedIndexSimulate", "rtl", "isIconLeft", "type", "htmlTitle", "wordBreak"]);
        var tagStyle = tslib_1.__assign({}, style);
        var cellProps = { value: value, index: rowIndex, record: record, context: context };
        var content = cell;
        if (react_1.default.isValidElement(content)) {
            // header情况下， props.cell为 column.title，不需要传递这些props
            content = react_1.default.cloneElement(content, type === 'header' ? undefined : cellProps);
        }
        else if (typeof content === 'function') {
            content = content(value, rowIndex, record, context);
        }
        if (align) {
            tagStyle.textAlign = align;
            if (rtl) {
                tagStyle.textAlign = align === 'left' ? 'right' : align === 'right' ? 'left' : align;
            }
        }
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "table-cell")] = true,
            _a["".concat(prefix, "table-word-break-").concat(wordBreak)] = !!wordBreak,
            _a[className] = className,
            _a));
        return (react_1.default.createElement(Tag, tslib_1.__assign({}, (0, util_1.pickAttrs)(others), { className: cls, style: tagStyle, role: "gridcell" }),
            react_1.default.createElement("div", { className: "".concat(prefix, "table-cell-wrapper"), ref: this.props.getCellDomRef, style: innerStyle, title: htmlTitle, "data-next-table-col": __colIndex, "data-next-table-row": rowIndex },
                isIconLeft ? children : content,
                isIconLeft ? content : children)));
    };
    Cell.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        primaryKey: prop_types_1.default.oneOfType([prop_types_1.default.symbol, prop_types_1.default.string]),
        className: prop_types_1.default.string,
        record: prop_types_1.default.any,
        value: prop_types_1.default.any,
        isIconLeft: prop_types_1.default.bool,
        colIndex: prop_types_1.default.number,
        rowIndex: prop_types_1.default.number,
        // 经过锁列调整后的列索引，lock right的列会从非0开始
        __colIndex: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        title: prop_types_1.default.any,
        width: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        context: prop_types_1.default.any,
        cell: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.node, prop_types_1.default.func]),
        align: prop_types_1.default.oneOf(['left', 'center', 'right']),
        component: prop_types_1.default.oneOf(['td', 'th', 'div']),
        children: prop_types_1.default.any,
        style: prop_types_1.default.object,
        innerStyle: prop_types_1.default.object,
        filterMode: prop_types_1.default.oneOf(['single', 'multiple']),
        filterMenuProps: prop_types_1.default.object,
        filterProps: prop_types_1.default.object,
        filters: prop_types_1.default.array,
        sortable: prop_types_1.default.bool,
        sortDirections: prop_types_1.default.arrayOf(prop_types_1.default.oneOf(['desc', 'asc', 'default'])),
        lock: prop_types_1.default.any,
        type: prop_types_1.default.oneOf(['header', 'body']),
        resizable: prop_types_1.default.bool,
        asyncResizable: prop_types_1.default.bool,
        __normalized: prop_types_1.default.bool,
    };
    Cell.defaultProps = {
        component: 'td',
        type: 'body',
        isIconLeft: false,
        cell: function (value) { return value; },
        prefix: 'next-',
    };
    return Cell;
}(react_1.default.Component));
exports.default = Cell;
