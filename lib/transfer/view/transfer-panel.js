'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _checkbox = require('../../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _search = require('../../search');

var _search2 = _interopRequireDefault(_search);

var _menu = require('../../menu');

var _menu2 = _interopRequireDefault(_menu);

var _util = require('../../util');

var _transferItem = require('./transfer-item');

var _transferItem2 = _interopRequireDefault(_transferItem);

var _virtualList = require('../../virtual-list');

var _virtualList2 = _interopRequireDefault(_virtualList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx;
var TransferPanel = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(TransferPanel, _Component);

    function TransferPanel(props, context) {
        (0, _classCallCheck3.default)(this, TransferPanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _this.state = {
            searchedValue: '',
            dragValue: null,
            dragOverValue: null
        };
        _this.footerId = props.baseId ? _util.htmlId.escapeForId(props.baseId + '-panel-footer-' + props.position) : '';
        _this.headerId = props.baseId ? _util.htmlId.escapeForId(props.baseId + '-panel-header-' + props.position) : '';

        bindCtx(_this, ['handleCheck', 'handleAllCheck', 'handleSearch', 'handleItemDragStart', 'handleItemDragOver', 'handleItemDragEnd', 'handleItemDrop', 'getListDOM']);
        _this.firstRender = true;
        return _this;
    }

    TransferPanel.prototype.componentDidMount = function componentDidMount() {
        this.firstRender = false;
    };

    TransferPanel.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (prevProps.dataSource.length !== this.props.dataSource.length && this.list) {
            if (this.list.scrollTop > 0) {
                this.list.scrollTop = 0;
            }
        }

        this.searched = false;
    };

    TransferPanel.prototype.getListDOM = function getListDOM(ref) {
        this.list = ref;
    };

    TransferPanel.prototype.getListData = function getListData(dataSource, disableHighlight) {
        var _this2 = this;

        var _props = this.props,
            prefix = _props.prefix,
            position = _props.position,
            mode = _props.mode,
            value = _props.value,
            onMove = _props.onMove,
            disabled = _props.disabled,
            itemRender = _props.itemRender,
            sortable = _props.sortable;
        var _state = this.state,
            dragPosition = _state.dragPosition,
            dragValue = _state.dragValue,
            dragOverValue = _state.dragOverValue;

        return dataSource.map(function (item) {
            var others = 'title' in item ? {
                title: item.title
            } : {};

            return _react2.default.createElement(_transferItem2.default, (0, _extends3.default)({
                key: item.value,
                prefix: prefix,
                mode: mode,
                checked: value.indexOf(item.value) > -1,
                disabled: disabled || item.disabled,
                item: item,
                onCheck: _this2.handleCheck,
                onClick: onMove,
                needHighlight: !_this2.firstRender && !_this2.searched && !disableHighlight,
                itemRender: itemRender,
                draggable: sortable,
                onDragStart: _this2.handleItemDragStart,
                onDragOver: _this2.handleItemDragOver,
                onDragEnd: _this2.handleItemDragEnd,
                onDrop: _this2.handleItemDrop,
                dragPosition: dragPosition,
                dragValue: dragValue,
                dragOverValue: dragOverValue,
                panelPosition: position
            }, others));
        });
    };

    TransferPanel.prototype.handleAllCheck = function handleAllCheck(allChecked) {
        var _props2 = this.props,
            position = _props2.position,
            onChange = _props2.onChange;


        var newValue = void 0;
        if (allChecked) {
            newValue = this.enabledDatasource.map(function (item) {
                return item.value;
            });
        } else {
            newValue = [];
        }

        onChange && onChange(position, newValue);
    };

    TransferPanel.prototype.handleCheck = function handleCheck(itemValue, checked) {
        var _props3 = this.props,
            position = _props3.position,
            value = _props3.value,
            onChange = _props3.onChange;


        var newValue = [].concat(value);
        var index = value.indexOf(itemValue);
        if (checked && index === -1) {
            newValue.push(itemValue);
        } else if (!checked && index > -1) {
            newValue.splice(index, 1);
        }

        onChange && onChange(position, newValue);
    };

    TransferPanel.prototype.handleSearch = function handleSearch(searchedValue) {
        this.setState({
            searchedValue: searchedValue
        });
        this.searched = true;

        var _props4 = this.props,
            onSearch = _props4.onSearch,
            position = _props4.position;

        onSearch(searchedValue, position);
    };

    TransferPanel.prototype.handleItemDragStart = function handleItemDragStart(position, value) {
        this.setState({
            dragPosition: position,
            dragValue: value
        });
    };

    TransferPanel.prototype.handleItemDragOver = function handleItemDragOver(value) {
        this.setState({
            dragOverValue: value
        });
    };

    TransferPanel.prototype.handleItemDragEnd = function handleItemDragEnd() {
        this.setState({
            dragOverValue: null
        });
    };

    TransferPanel.prototype.handleItemDrop = function handleItemDrop() {
        var _props5;

        this.setState({
            dragOverValue: null
        });

        (_props5 = this.props).onSort.apply(_props5, arguments);
    };

    TransferPanel.prototype.renderHeader = function renderHeader() {
        var _props6 = this.props,
            title = _props6.title,
            prefix = _props6.prefix;


        return _react2.default.createElement(
            'div',
            {
                id: this.headerId,
                className: prefix + 'transfer-panel-header'
            },
            title
        );
    };

    TransferPanel.prototype.renderSearch = function renderSearch() {
        var _props7 = this.props,
            prefix = _props7.prefix,
            searchPlaceholder = _props7.searchPlaceholder,
            locale = _props7.locale;

        return _react2.default.createElement(_search2.default, {
            'aria-labelledby': this.headerId,
            shape: 'simple',
            className: prefix + 'transfer-panel-search',
            placeholder: searchPlaceholder || locale.searchPlaceholder,
            onChange: this.handleSearch
        });
    };

    TransferPanel.prototype.renderList = function renderList(dataSource) {
        var _cx;

        var _props8 = this.props,
            prefix = _props8.prefix,
            listClassName = _props8.listClassName,
            listStyle = _props8.listStyle,
            customerList = _props8.customerList,
            useVirtual = _props8.useVirtual;

        var newClassName = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'transfer-panel-list'] = true, _cx[listClassName] = !!listClassName, _cx));

        var customerPanel = customerList && customerList(this.props);
        if (customerPanel) {
            return _react2.default.createElement(
                'div',
                {
                    className: newClassName,
                    style: listStyle,
                    ref: this.getListDOM
                },
                customerPanel
            );
        }

        if (!dataSource.length) {
            return _react2.default.createElement(
                'div',
                { className: newClassName, style: listStyle },
                this.renderNotFoundContent()
            );
        }

        if (useVirtual) {
            return _react2.default.createElement(
                'div',
                {
                    className: newClassName,
                    style: (0, _extends3.default)({ position: 'relative' }, listStyle)
                },
                _react2.default.createElement(
                    _virtualList2.default,
                    {
                        itemsRenderer: function itemsRenderer(items, ref) {
                            return _react2.default.createElement(
                                _menu2.default,
                                { style: { border: 'none' }, ref: ref },
                                items
                            );
                        }
                    },
                    this.getListData(dataSource, true)
                )
            );
        }

        return _react2.default.createElement(
            _menu2.default,
            {
                className: newClassName,
                style: listStyle,
                ref: this.getListDOM
            },
            this.getListData(dataSource)
        );
    };

    TransferPanel.prototype.renderNotFoundContent = function renderNotFoundContent() {
        var _props9 = this.props,
            prefix = _props9.prefix,
            notFoundContent = _props9.notFoundContent;


        return _react2.default.createElement(
            'div',
            { className: prefix + 'transfer-panel-not-found-container' },
            _react2.default.createElement(
                'div',
                { className: prefix + 'transfer-panel-not-found' },
                notFoundContent
            )
        );
    };

    TransferPanel.prototype.renderFooter = function renderFooter() {
        var _props10 = this.props,
            prefix = _props10.prefix,
            position = _props10.position,
            mode = _props10.mode,
            disabled = _props10.disabled,
            locale = _props10.locale,
            showCheckAll = _props10.showCheckAll;

        if (mode === 'simple') {
            var _cx2;

            var onMoveAll = this.props.onMoveAll;

            var classNames = (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'transfer-panel-move-all'] = true, _cx2[prefix + 'disabled'] = disabled, _cx2));
            return _react2.default.createElement(
                'div',
                { className: prefix + 'transfer-panel-footer' },
                _react2.default.createElement(
                    'a',
                    {
                        className: classNames,
                        onClick: onMoveAll.bind(this, position === 'left' ? 'right' : 'left')
                    },
                    locale.moveAll
                )
            );
        }

        var _props11 = this.props,
            value = _props11.value,
            dataSource = _props11.dataSource;

        var checkedCount = value.length;
        var totalCount = dataSource.length;
        var totalEnabledCount = this.enabledDatasource.length;
        var checked = checkedCount > 0 && checkedCount >= totalEnabledCount;
        var indeterminate = checkedCount > 0 && checkedCount < totalEnabledCount;
        var items = totalCount > 1 ? locale.items : locale.item;
        var countLabel = checkedCount === 0 ? totalCount + ' ' + items : checkedCount + '/' + totalCount + ' ' + items;

        return _react2.default.createElement(
            'div',
            { className: prefix + 'transfer-panel-footer' },
            showCheckAll && _react2.default.createElement(_checkbox2.default, {
                disabled: disabled,
                checked: checked,
                indeterminate: indeterminate,
                onChange: this.handleAllCheck,
                'aria-labelledby': this.footerId
            }),
            _react2.default.createElement(
                'span',
                {
                    className: prefix + 'transfer-panel-count',
                    id: this.footerId
                },
                countLabel
            )
        );
    };

    TransferPanel.prototype.render = function render() {
        var _props12 = this.props,
            prefix = _props12.prefix,
            title = _props12.title,
            showSearch = _props12.showSearch,
            filter = _props12.filter;
        var searchedValue = this.state.searchedValue;

        var dataSource = this.props.dataSource;
        this.enabledDatasource = dataSource.filter(function (item) {
            return !item.disabled;
        });
        if (showSearch && searchedValue) {
            dataSource = dataSource.filter(function (item) {
                return filter(searchedValue, item);
            });
        }

        return _react2.default.createElement(
            'div',
            { className: prefix + 'transfer-panel' },
            title ? this.renderHeader() : null,
            showSearch ? this.renderSearch() : null,
            this.renderList(dataSource),
            this.renderFooter()
        );
    };

    return TransferPanel;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    position: _propTypes2.default.oneOf(['left', 'right']),
    mode: _propTypes2.default.oneOf(['normal', 'simple']),
    dataSource: _propTypes2.default.array,
    value: _propTypes2.default.array,
    onChange: _propTypes2.default.func,
    onMove: _propTypes2.default.func,
    onMoveAll: _propTypes2.default.func,
    disabled: _propTypes2.default.bool,
    locale: _propTypes2.default.object,
    title: _propTypes2.default.node,
    showSearch: _propTypes2.default.bool,
    filter: _propTypes2.default.func,
    onSearch: _propTypes2.default.func,
    searchPlaceholder: _propTypes2.default.string,
    notFoundContent: _propTypes2.default.node,
    listClassName: _propTypes2.default.string,
    listStyle: _propTypes2.default.object,
    itemRender: _propTypes2.default.func,
    sortable: _propTypes2.default.bool,
    onSort: _propTypes2.default.func,
    baseId: _propTypes2.default.string,
    customerList: _propTypes2.default.func,
    useVirtual: _propTypes2.default.bool,
    showCheckAll: _propTypes2.default.bool
}, _temp);
TransferPanel.displayName = 'TransferPanel';
exports.default = TransferPanel;
module.exports = exports['default'];