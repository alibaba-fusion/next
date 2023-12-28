import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { obj, pickAttrs } from '../../util';
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.shouldComponentUpdate = function (nextProps) {
        if (nextProps.pure) {
            var isEqual = obj.shallowEqual(this.props, nextProps);
            return !isEqual;
        }
        return true;
    };
    Cell.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars */
        var _b = this.props, prefix = _b.prefix, className = _b.className, cell = _b.cell, value = _b.value, resizable = _b.resizable, asyncResizable = _b.asyncResizable, colIndex = _b.colIndex, rowIndex = _b.rowIndex, __colIndex = _b.__colIndex, record = _b.record, context = _b.context, align = _b.align, _c = _b.style, style = _c === void 0 ? {} : _c, Tag = _b.component, children = _b.children, title = _b.title, width = _b.width, innerStyle = _b.innerStyle, primaryKey = _b.primaryKey, __normalized = _b.__normalized, filterMode = _b.filterMode, filterMenuProps = _b.filterMenuProps, filterProps = _b.filterProps, filters = _b.filters, sortable = _b.sortable, sortDirections = _b.sortDirections, lock = _b.lock, pure = _b.pure, locale = _b.locale, expandedIndexSimulate = _b.expandedIndexSimulate, rtl = _b.rtl, isIconLeft = _b.isIconLeft, type = _b.type, htmlTitle = _b.htmlTitle, wordBreak = _b.wordBreak, others = __rest(_b, ["prefix", "className", "cell", "value", "resizable", "asyncResizable", "colIndex", "rowIndex", "__colIndex", "record", "context", "align", "style", "component", "children", "title", "width", "innerStyle", "primaryKey", "__normalized", "filterMode", "filterMenuProps", "filterProps", "filters", "sortable", "sortDirections", "lock", "pure", "locale", "expandedIndexSimulate", "rtl", "isIconLeft", "type", "htmlTitle", "wordBreak"]);
        var tagStyle = __assign({}, style);
        var cellProps = { value: value, index: rowIndex, record: record, context: context };
        var content = cell;
        if (React.isValidElement(content)) {
            // header情况下， props.cell为 column.title，不需要传递这些props
            content = React.cloneElement(content, type === 'header' ? undefined : cellProps);
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
        var cls = classnames((_a = {},
            _a["".concat(prefix, "table-cell")] = true,
            _a["".concat(prefix, "table-word-break-").concat(wordBreak)] = !!wordBreak,
            _a[className] = className,
            _a));
        return (React.createElement(Tag, __assign({}, pickAttrs(others), { className: cls, style: tagStyle, role: "gridcell" }),
            React.createElement("div", { className: "".concat(prefix, "table-cell-wrapper"), ref: this.props.getCellDomRef, style: innerStyle, title: htmlTitle, "data-next-table-col": __colIndex, "data-next-table-row": rowIndex },
                isIconLeft ? children : content,
                isIconLeft ? content : children)));
    };
    Cell.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        primaryKey: PropTypes.oneOfType([PropTypes.symbol, PropTypes.string]),
        className: PropTypes.string,
        record: PropTypes.any,
        value: PropTypes.any,
        isIconLeft: PropTypes.bool,
        colIndex: PropTypes.number,
        rowIndex: PropTypes.number,
        // 经过锁列调整后的列索引，lock right的列会从非0开始
        __colIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        title: PropTypes.any,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        context: PropTypes.any,
        cell: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
        align: PropTypes.oneOf(['left', 'center', 'right']),
        component: PropTypes.oneOf(['td', 'th', 'div']),
        children: PropTypes.any,
        style: PropTypes.object,
        innerStyle: PropTypes.object,
        filterMode: PropTypes.oneOf(['single', 'multiple']),
        filterMenuProps: PropTypes.object,
        filterProps: PropTypes.object,
        filters: PropTypes.array,
        sortable: PropTypes.bool,
        sortDirections: PropTypes.arrayOf(PropTypes.oneOf(['desc', 'asc', 'default'])),
        lock: PropTypes.any,
        type: PropTypes.oneOf(['header', 'body']),
        resizable: PropTypes.bool,
        asyncResizable: PropTypes.bool,
        __normalized: PropTypes.bool,
    };
    Cell.defaultProps = {
        component: 'td',
        type: 'body',
        isIconLeft: false,
        cell: function (value) { return value; },
        prefix: 'next-',
    };
    return Cell;
}(React.Component));
export default Cell;
