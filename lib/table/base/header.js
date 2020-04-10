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

var _class, _temp2;

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
var Header = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getCellRef = function (i, j, cell) {
            _this.props.headerCellRef(i, j, cell);
        }, _this.onSort = function (dataIndex, order, sort) {
            _this.props.onSort(dataIndex, order, sort);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'children', 'component', 'colGroup', 'columns', 'locale', 'filterParams', 'onFilter', 'components', 'affixRef', 'headerCellRef', 'onSort', 'sort', 'sortIcons', 'onResizeChange', 'pure', 'rtl']);
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

                /* eslint-disable no-unused-vars, prefer-const */
                var title = col.title,
                    colSpan = col.colSpan,
                    sortable = col.sortable,
                    resizable = col.resizable,
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
                    others = (0, _objectWithoutProperties3.default)(col, ['title', 'colSpan', 'sortable', 'resizable', 'dataIndex', 'filters', 'filterMode', 'filterMenuProps', 'filterProps', 'width', 'align', 'alignHeader', 'className', '__normalized', 'lock']);


                className = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-header-node'] = true, _classnames[prefix + 'table-header-resizable'] = resizable, _classnames[className] = className, _classnames));
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
                            sortIcons: sortIcons,
                            sort: sort,
                            rtl: rtl,
                            locale: locale
                        });
                    }
                    if (resizable) {
                        resizeElement = _react2.default.createElement(Resize, {
                            prefix: prefix,
                            rtl: rtl,
                            dataIndex: dataIndex,
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
    onResizeChange: _propTypes2.default.func
}, _class.defaultProps = {
    component: 'thead',
    columns: [],
    headerCellRef: noop,
    onFilter: noop,
    components: {},
    onSort: noop,
    onResizeChange: noop
}, _temp2);
Header.displayName = 'Header';
exports.default = Header;
module.exports = exports['default'];