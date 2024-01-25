'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _sort = require('./sort');

var _sort2 = _interopRequireDefault(_sort);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _resize = require('./resize');

var _resize2 = _interopRequireDefault(_resize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
var Header = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

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
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'children', 'component', 'colGroup', 'columns', 'locale', 'filterParams', 'onFilter', 'components', 'affixRef', 'headerCellRef', 'onSort', 'sort', 'sortIcons', 'onResizeChange', 'pure', 'rtl', 'tableWidth', 'tableEl', 'resizeProxyDomRef']);


        this.checkHasLock();

        var _components$Cell = components.Cell,
            Cell = _components$Cell === undefined ? _cell2.default : _components$Cell,
            _components$Filter = components.Filter,
            Filter = _components$Filter === undefined ? _filter2.default : _components$Filter,
            _components$Sort = components.Sort,
            Sort = _components$Sort === undefined ? _sort2.default : _components$Sort,
            _components$Resize = components.Resize,
            Resize = _components$Resize === undefined ? _resize2.default : _components$Resize;

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
                    others = (0, _objectWithoutProperties3.default)(col, ['title', 'colSpan', 'sortable', 'sortDirections', 'resizable', 'asyncResizable', 'dataIndex', 'filters', 'filterMode', 'filterMenuProps', 'filterProps', 'width', 'align', 'alignHeader', 'className', '__normalized', 'lock', 'cellStyle', 'wordBreak']);


                var order = sort ? sort[dataIndex] : '';
                className = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-header-node'] = true, _classnames[prefix + 'table-header-resizable'] = resizable || asyncResizable, _classnames[prefix + 'table-word-break-' + wordBreak] = !!wordBreak, _classnames[prefix + 'table-header-sort-' + order] = sortable && order, _classnames[className] = className, _classnames));
                var attrs = {},
                    sortElement = void 0,
                    filterElement = void 0,
                    resizeElement = void 0;

                attrs.colSpan = colSpan;

                // column.group doesn't have sort resize filter
                if (!(col.children && col.children.length)) {
                    if (sortable) {
                        sortElement = _react2.default.createElement(Sort, {
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
                        resizeElement = _react2.default.createElement(Resize, {
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
                        filterElement = filters.length ? _react2.default.createElement(Filter, {
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

                return _react2.default.createElement(
                    Cell,
                    (0, _extends3.default)({}, others, attrs, {
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
            return _react2.default.createElement(
                'tr',
                { key: index },
                col
            );
        });

        return _react2.default.createElement(
            Tag,
            (0, _extends3.default)({ className: className }, others),
            header,
            children
        );
    };

    return Header;
}(_react2.default.Component), _class.propTypes = {
    children: _propTypes2.default.any,
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    component: _propTypes2.default.string,
    columns: _propTypes2.default.array,
    colGroup: _propTypes2.default.object,
    headerCellRef: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    filterParams: _propTypes2.default.object,
    onFilter: _propTypes2.default.func,
    components: _propTypes2.default.object,
    sort: _propTypes2.default.object,
    sortIcons: _propTypes2.default.object,
    onSort: _propTypes2.default.func,
    onResizeChange: _propTypes2.default.func,
    tableWidth: _propTypes2.default.number,
    tableEl: _propTypes2.default.any
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
exports.default = Header;
module.exports = exports.default;
module.exports.default = exports.default;