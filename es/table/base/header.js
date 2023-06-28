import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FilterComponent from './filter';
import SortComponent from './sort';
import CellComponent from './cell';
import ResizeComponent from './resize';

var noop = function noop() {};
var Header = (_temp = _class = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

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
            return 'header_cell_' + i + '_' + j;
        };

        _this.onSort = function (dataIndex, order, sort) {
            _this.props.onSort(dataIndex, order, sort);
        };

        _this.hasLock = false;
        return _this;
    }

    Header.prototype.render = function render() {
        var _this2 = this;

        /*eslint-disable no-unused-vars */
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            Tag = _props.component,
            colGroup = _props.colGroup,
            columns = _props.columns,
            locale = _props.locale,
            filterParams = _props.filterParams,
            onFilter = _props.onFilter,
            components = _props.components,
            affixRef = _props.affixRef,
            headerCellRef = _props.headerCellRef,
            onSort = _props.onSort,
            sort = _props.sort,
            sortIcons = _props.sortIcons,
            onResizeChange = _props.onResizeChange,
            pure = _props.pure,
            rtl = _props.rtl,
            tableWidth = _props.tableWidth,
            tableEl = _props.tableEl,
            resizeProxyDomRef = _props.resizeProxyDomRef,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'children', 'component', 'colGroup', 'columns', 'locale', 'filterParams', 'onFilter', 'components', 'affixRef', 'headerCellRef', 'onSort', 'sort', 'sortIcons', 'onResizeChange', 'pure', 'rtl', 'tableWidth', 'tableEl', 'resizeProxyDomRef']);

        this.checkHasLock();

        var _components$Cell = components.Cell,
            Cell = _components$Cell === undefined ? CellComponent : _components$Cell,
            _components$Filter = components.Filter,
            Filter = _components$Filter === undefined ? FilterComponent : _components$Filter,
            _components$Sort = components.Sort,
            Sort = _components$Sort === undefined ? SortComponent : _components$Sort,
            _components$Resize = components.Resize,
            Resize = _components$Resize === undefined ? ResizeComponent : _components$Resize;

        var rowSpan = columns.length;

        var header = columns.map(function (cols, index) {
            var col = cols.map(function (col, j) {
                var _classnames;

                var cellRef = _this2.createCellDomRef(index, j);
                /* eslint-disable no-unused-vars, prefer-const */

                var title = col.title,
                    colSpan = col.colSpan,
                    sortable = col.sortable,
                    sortDirections = col.sortDirections,
                    resizable = col.resizable,
                    asyncResizable = col.asyncResizable,
                    dataIndex = col.dataIndex,
                    filters = col.filters,
                    filterMode = col.filterMode,
                    filterMenuProps = col.filterMenuProps,
                    filterProps = col.filterProps,
                    width = col.width,
                    align = col.align,
                    alignHeader = col.alignHeader,
                    className = col.className,
                    __normalized = col.__normalized,
                    lock = col.lock,
                    cellStyle = col.cellStyle,
                    wordBreak = col.wordBreak,
                    others = _objectWithoutProperties(col, ['title', 'colSpan', 'sortable', 'sortDirections', 'resizable', 'asyncResizable', 'dataIndex', 'filters', 'filterMode', 'filterMenuProps', 'filterProps', 'width', 'align', 'alignHeader', 'className', '__normalized', 'lock', 'cellStyle', 'wordBreak']);

                var order = sort ? sort[dataIndex] : '';
                className = classnames((_classnames = {}, _classnames[prefix + 'table-header-node'] = true, _classnames[prefix + 'table-header-resizable'] = resizable || asyncResizable, _classnames[prefix + 'table-word-break-' + wordBreak] = !!wordBreak, _classnames[prefix + 'table-header-sort-' + order] = sortable && order, _classnames[className] = className, _classnames));
                var attrs = {},
                    sortElement = void 0,
                    filterElement = void 0,
                    resizeElement = void 0;

                attrs.colSpan = colSpan;

                // column.group doesn't have sort resize filter
                if (!(col.children && col.children.length)) {
                    if (sortable) {
                        sortElement = React.createElement(Sort, {
                            prefix: prefix,
                            className: prefix + 'table-header-icon',
                            dataIndex: dataIndex,
                            onSort: _this2.onSort,
                            sortDirections: sortDirections,
                            sortIcons: sortIcons,
                            sort: sort,
                            rtl: rtl,
                            locale: locale
                        });
                    }
                    if (asyncResizable || resizable) {
                        resizeElement = React.createElement(Resize, {
                            asyncResizable: asyncResizable,
                            hasLock: _this2.hasLock,
                            col: col,
                            tableEl: tableEl,
                            prefix: prefix,
                            rtl: rtl,
                            dataIndex: dataIndex,
                            resizeProxyDomRef: resizeProxyDomRef,
                            cellDomRef: cellRef,
                            onChange: onResizeChange
                        });
                    }

                    if (filters) {
                        filterElement = filters.length ? React.createElement(Filter, {
                            dataIndex: dataIndex,
                            className: prefix + 'table-header-icon',
                            filters: filters,
                            prefix: prefix,
                            locale: locale,
                            rtl: rtl,
                            filterParams: filterParams,
                            filterMode: filterMode,
                            filterMenuProps: filterMenuProps,
                            filterProps: filterProps,
                            onFilter: onFilter
                        }) : null;
                    }
                    attrs.rowSpan = rowSpan - index;
                }

                if (+attrs.colSpan === 0) {
                    return null;
                }

                return React.createElement(
                    Cell,
                    _extends({}, others, attrs, {
                        key: j,
                        prefix: prefix,
                        pure: pure,
                        rtl: rtl,
                        cell: title,
                        component: 'th',
                        align: alignHeader ? alignHeader : align,
                        className: className,
                        ref: _this2.getCellRef.bind(_this2, index, j),
                        getCellDomRef: _this2.getCellDomRef.bind(_this2, cellRef),
                        type: 'header'
                    }),
                    sortElement,
                    filterElement,
                    resizeElement
                );
            });
            return React.createElement(
                'tr',
                { key: index },
                col
            );
        });

        return React.createElement(
            Tag,
            _extends({ className: className }, others),
            header,
            children
        );
    };

    return Header;
}(React.Component), _class.propTypes = {
    children: PropTypes.any,
    prefix: PropTypes.string,
    pure: PropTypes.bool,
    className: PropTypes.string,
    component: PropTypes.string,
    columns: PropTypes.array,
    colGroup: PropTypes.object,
    headerCellRef: PropTypes.func,
    locale: PropTypes.object,
    filterParams: PropTypes.object,
    onFilter: PropTypes.func,
    components: PropTypes.object,
    sort: PropTypes.object,
    sortIcons: PropTypes.object,
    onSort: PropTypes.func,
    onResizeChange: PropTypes.func,
    tableWidth: PropTypes.number,
    tableEl: PropTypes.any
}, _class.defaultProps = {
    component: 'thead',
    columns: [],
    headerCellRef: noop,
    onFilter: noop,
    components: {},
    onSort: noop,
    onResizeChange: noop
}, _temp);
Header.displayName = 'Header';
export { Header as default };