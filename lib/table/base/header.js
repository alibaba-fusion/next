"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var filter_1 = require("./filter");
var sort_1 = require("./sort");
var cell_1 = require("./cell");
var resize_1 = require("./resize");
var noop = function () { };
var Header = /** @class */ (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header() {
        var _this = _super.call(this) || this;
        _this.checkHasLock = function () {
            var columns = _this.props.columns;
            var hasLock = false;
            for (var i = 0; i < columns.length; i++) {
                var cols = columns[i];
                for (var j = 0; j < cols.length; j++) {
                    var col = cols[j];
                    if (col.lock) {
                        hasLock = true;
                        break;
                    }
                }
                if (hasLock) {
                    break;
                }
            }
            _this.hasLock = hasLock;
        };
        _this.getCellRef = function (i, j, cell) {
            _this.props.headerCellRef(i, j, cell);
            var columns = _this.props.columns;
            var columnProps = columns[i] && columns[i][j];
            if (columnProps && columnProps.ref && typeof columnProps.ref === 'function') {
                columnProps.ref(cell);
            }
        };
        _this.createCellDomRef = function (i, j) {
            var cellRefKey = _this.getCellDomRefKey(i, j);
            if (!_this[cellRefKey]) {
                _this[cellRefKey] = {};
            }
            return _this[cellRefKey];
        };
        _this.getCellDomRef = function (cellRef, cellDom) {
            if (!cellRef) {
                return;
            }
            cellRef.current = cellDom;
        };
        _this.getCellDomRefKey = function (i, j) {
            return "header_cell_".concat(i, "_").concat(j);
        };
        _this.onSort = function (dataIndex, order, sort) {
            _this.props.onSort(dataIndex, order, sort);
        };
        _this.hasLock = false;
        return _this;
    }
    Header.prototype.render = function () {
        var _this = this;
        /*eslint-disable no-unused-vars */
        var _a = this.props, prefix = _a.prefix, className = _a.className, children = _a.children, Tag = _a.component, colGroup = _a.colGroup, columns = _a.columns, locale = _a.locale, filterParams = _a.filterParams, onFilter = _a.onFilter, components = _a.components, affixRef = _a.affixRef, headerCellRef = _a.headerCellRef, onSort = _a.onSort, sort = _a.sort, sortIcons = _a.sortIcons, onResizeChange = _a.onResizeChange, pure = _a.pure, rtl = _a.rtl, tableWidth = _a.tableWidth, tableEl = _a.tableEl, resizeProxyDomRef = _a.resizeProxyDomRef, others = tslib_1.__rest(_a, ["prefix", "className", "children", "component", "colGroup", "columns", "locale", "filterParams", "onFilter", "components", "affixRef", "headerCellRef", "onSort", "sort", "sortIcons", "onResizeChange", "pure", "rtl", "tableWidth", "tableEl", "resizeProxyDomRef"]);
        this.checkHasLock();
        var _b = components.Cell, Cell = _b === void 0 ? cell_1.default : _b, _c = components.Filter, Filter = _c === void 0 ? filter_1.default : _c, _d = components.Sort, Sort = _d === void 0 ? sort_1.default : _d, _e = components.Resize, Resize = _e === void 0 ? resize_1.default : _e;
        var rowSpan = columns.length;
        var header = columns.map(function (cols, index) {
            var col = cols.map(function (col, j) {
                var _a;
                var cellRef = _this.createCellDomRef(index, j);
                /* eslint-disable no-unused-vars, prefer-const */
                var title = col.title, colSpan = col.colSpan, sortable = col.sortable, sortDirections = col.sortDirections, resizable = col.resizable, asyncResizable = col.asyncResizable, dataIndex = col.dataIndex, filters = col.filters, filterMode = col.filterMode, filterMenuProps = col.filterMenuProps, filterProps = col.filterProps, width = col.width, align = col.align, alignHeader = col.alignHeader, className = col.className, __normalized = col.__normalized, lock = col.lock, cellStyle = col.cellStyle, wordBreak = col.wordBreak, others = tslib_1.__rest(col, ["title", "colSpan", "sortable", "sortDirections", "resizable", "asyncResizable", "dataIndex", "filters", "filterMode", "filterMenuProps", "filterProps", "width", "align", "alignHeader", "className", "__normalized", "lock", "cellStyle", "wordBreak"]);
                var order = sort ? sort[dataIndex] : '';
                className = (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "table-header-node")] = true,
                    _a["".concat(prefix, "table-header-resizable")] = resizable || asyncResizable,
                    _a["".concat(prefix, "table-word-break-").concat(wordBreak)] = !!wordBreak,
                    _a["".concat(prefix, "table-header-sort-").concat(order)] = sortable && order,
                    _a[className] = className,
                    _a));
                var attrs = {}, sortElement, filterElement, resizeElement;
                attrs.colSpan = colSpan;
                // column.group doesn't have sort resize filter
                if (!(col.children && col.children.length)) {
                    if (sortable) {
                        sortElement = (react_1.default.createElement(Sort, { prefix: prefix, className: "".concat(prefix, "table-header-icon"), dataIndex: dataIndex, onSort: _this.onSort, sortDirections: sortDirections, sortIcons: sortIcons, sort: sort, rtl: rtl, locale: locale }));
                    }
                    if (asyncResizable || resizable) {
                        resizeElement = (react_1.default.createElement(Resize, { asyncResizable: asyncResizable, hasLock: _this.hasLock, col: col, tableEl: tableEl, prefix: prefix, rtl: rtl, dataIndex: dataIndex, resizeProxyDomRef: resizeProxyDomRef, cellDomRef: cellRef, onChange: onResizeChange }));
                    }
                    if (filters) {
                        filterElement = filters.length ? (react_1.default.createElement(Filter, { dataIndex: dataIndex, className: "".concat(prefix, "table-header-icon"), filters: filters, prefix: prefix, locale: locale, rtl: rtl, filterParams: filterParams, filterMode: filterMode, filterMenuProps: filterMenuProps, filterProps: filterProps, onFilter: onFilter })) : null;
                    }
                    attrs.rowSpan = rowSpan - index;
                }
                if (+attrs.colSpan === 0) {
                    return null;
                }
                return (react_1.default.createElement(Cell, tslib_1.__assign({}, others, attrs, { key: j, prefix: prefix, pure: pure, rtl: rtl, cell: title, component: "th", align: alignHeader ? alignHeader : align, className: className, ref: _this.getCellRef.bind(_this, index, j), getCellDomRef: _this.getCellDomRef.bind(_this, cellRef), type: "header" }),
                    sortElement,
                    filterElement,
                    resizeElement));
            });
            return react_1.default.createElement("tr", { key: index }, col);
        });
        return (react_1.default.createElement(Tag, tslib_1.__assign({ className: className }, others),
            header,
            children));
    };
    Header.propTypes = {
        children: prop_types_1.default.any,
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        component: prop_types_1.default.string,
        columns: prop_types_1.default.array,
        colGroup: prop_types_1.default.object,
        headerCellRef: prop_types_1.default.func,
        locale: prop_types_1.default.object,
        filterParams: prop_types_1.default.object,
        onFilter: prop_types_1.default.func,
        components: prop_types_1.default.object,
        sort: prop_types_1.default.object,
        sortIcons: prop_types_1.default.object,
        onSort: prop_types_1.default.func,
        onResizeChange: prop_types_1.default.func,
        tableWidth: prop_types_1.default.number,
        tableEl: prop_types_1.default.any,
    };
    Header.defaultProps = {
        component: 'thead',
        columns: [],
        headerCellRef: noop,
        onFilter: noop,
        components: {},
        onSort: noop,
        onResizeChange: noop,
    };
    return Header;
}(react_1.default.Component));
exports.default = Header;
