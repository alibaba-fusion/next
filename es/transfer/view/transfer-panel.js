import { __assign, __extends, __read, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Checkbox from '../../checkbox';
import Search from '../../search';
import Menu from '../../menu';
import { func, htmlId } from '../../util';
import TransferItem from './transfer-item';
import VirtualList from '../../virtual-list';
var bindCtx = func.bindCtx;
var TransferPanel = /** @class */ (function (_super) {
    __extends(TransferPanel, _super);
    function TransferPanel(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            searchedValue: '',
            dragValue: null,
            dragOverValue: null,
        };
        _this.footerId = props.baseId
            ? htmlId.escapeForId("".concat(props.baseId, "-panel-footer-").concat(props.position))
            : '';
        _this.headerId = props.baseId
            ? htmlId.escapeForId("".concat(props.baseId, "-panel-header-").concat(props.position))
            : '';
        bindCtx(_this, [
            'handleCheck',
            'handleAllCheck',
            'handleSearch',
            'handleItemDragStart',
            'handleItemDragOver',
            'handleItemDragEnd',
            'handleItemDrop',
            'getListDOM',
        ]);
        _this.firstRender = true;
        return _this;
    }
    TransferPanel.prototype.componentDidMount = function () {
        this.firstRender = false;
    };
    TransferPanel.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.dataSource.length !== this.props.dataSource.length && this.list) {
            // @ts-expect-error("Property 'scrollTop' does not exist on type 'Menu'.")
            if (this.list.scrollTop > 0) {
                // @ts-expect-error("Property 'scrollTop' does not exist on type 'Menu'.")
                this.list.scrollTop = 0;
            }
        }
        this.searched = false;
    };
    TransferPanel.prototype.getListDOM = function (ref) {
        this.list = ref;
    };
    TransferPanel.prototype.getListData = function (dataSource, disableHighlight) {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, position = _a.position, mode = _a.mode, value = _a.value, onMove = _a.onMove, disabled = _a.disabled, itemRender = _a.itemRender, sortable = _a.sortable;
        var _b = this.state, dragPosition = _b.dragPosition, dragValue = _b.dragValue, dragOverValue = _b.dragOverValue;
        return dataSource.map(function (item) {
            var others = 'title' in item
                ? {
                    title: item.title,
                }
                : {};
            return (React.createElement(TransferItem, __assign({ key: item.value, prefix: prefix, mode: mode, checked: value.indexOf(item.value) > -1, disabled: disabled || item.disabled, item: item, onCheck: _this.handleCheck, onClick: onMove, needHighlight: !_this.firstRender && !_this.searched && !disableHighlight, itemRender: itemRender, draggable: sortable, onDragStart: _this.handleItemDragStart, onDragOver: _this.handleItemDragOver, onDragEnd: _this.handleItemDragEnd, onDrop: _this.handleItemDrop, dragPosition: dragPosition, dragValue: dragValue, dragOverValue: dragOverValue, panelPosition: position }, others)));
        });
    };
    TransferPanel.prototype.handleAllCheck = function (allChecked) {
        var _a = this.props, position = _a.position, onChange = _a.onChange, filter = _a.filter;
        var searchedValue = this.state.searchedValue;
        var newValue;
        if (allChecked) {
            if (searchedValue) {
                newValue = this.enabledDatasource
                    .filter(function (item) { return filter(searchedValue, item); })
                    .map(function (item) { return item.value; });
            }
            else {
                newValue = this.enabledDatasource.map(function (item) { return item.value; });
            }
        }
        else {
            newValue = [];
        }
        onChange && onChange(position, newValue);
    };
    TransferPanel.prototype.handleCheck = function (itemValue, checked) {
        var _a = this.props, position = _a.position, value = _a.value, onChange = _a.onChange;
        var newValue = __spreadArray([], __read(value), false);
        var index = value.indexOf(itemValue);
        if (checked && index === -1) {
            newValue.push(itemValue);
        }
        else if (!checked && index > -1) {
            newValue.splice(index, 1);
        }
        onChange && onChange(position, newValue);
    };
    TransferPanel.prototype.handleSearch = function (searchedValue) {
        this.setState({
            searchedValue: searchedValue,
        });
        this.searched = true;
        var _a = this.props, onSearch = _a.onSearch, position = _a.position;
        onSearch(searchedValue, position);
    };
    TransferPanel.prototype.handleItemDragStart = function (position, value) {
        this.setState({
            dragPosition: position,
            dragValue: value,
        });
    };
    TransferPanel.prototype.handleItemDragOver = function (value) {
        this.setState({
            dragOverValue: value,
        });
    };
    TransferPanel.prototype.handleItemDragEnd = function () {
        this.setState({
            dragOverValue: null,
        });
    };
    TransferPanel.prototype.handleItemDrop = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.setState({
            dragOverValue: null,
        });
        (_a = this.props).onSort.apply(_a, __spreadArray([], __read(args), false));
    };
    TransferPanel.prototype.renderHeader = function () {
        var _a = this.props, title = _a.title, prefix = _a.prefix;
        return (React.createElement("div", { id: this.headerId, className: "".concat(prefix, "transfer-panel-header") }, title));
    };
    TransferPanel.prototype.renderSearch = function () {
        var _a = this.props, prefix = _a.prefix, searchPlaceholder = _a.searchPlaceholder, locale = _a.locale, _b = _a.searchProps, searchProps = _b === void 0 ? {} : _b;
        return (React.createElement(Search, __assign({ "aria-labelledby": this.headerId, shape: "simple" }, searchProps, { className: "".concat(prefix, "transfer-panel-search"), placeholder: searchPlaceholder || locale.searchPlaceholder, onChange: this.handleSearch })));
    };
    TransferPanel.prototype.renderList = function (dataSource) {
        var _a;
        var _b = this.props, prefix = _b.prefix, listClassName = _b.listClassName, listStyle = _b.listStyle, customerList = _b.customerList, useVirtual = _b.useVirtual;
        var newClassName = cx((_a = {},
            _a["".concat(prefix, "transfer-panel-list")] = true,
            _a[listClassName] = !!listClassName,
            _a));
        var customerPanel = customerList && customerList(this.props);
        if (customerPanel) {
            return (React.createElement("div", { className: newClassName, style: listStyle, ref: this.getListDOM }, customerPanel));
        }
        if (!dataSource.length) {
            return (React.createElement("div", { className: newClassName, style: listStyle }, this.renderNotFoundContent()));
        }
        if (useVirtual) {
            return (React.createElement("div", { className: newClassName, style: __assign({ position: 'relative' }, listStyle) },
                React.createElement(VirtualList, { itemsRenderer: function (items, ref) { return (React.createElement(Menu, { style: { border: 'none' }, ref: ref }, items)); } }, this.getListData(dataSource, true))));
        }
        return (React.createElement(Menu, { className: newClassName, style: listStyle, ref: this.getListDOM }, this.getListData(dataSource)));
    };
    TransferPanel.prototype.renderNotFoundContent = function () {
        var _a = this.props, prefix = _a.prefix, notFoundContent = _a.notFoundContent;
        return (React.createElement("div", { className: "".concat(prefix, "transfer-panel-not-found-container") },
            React.createElement("div", { className: "".concat(prefix, "transfer-panel-not-found") }, notFoundContent)));
    };
    TransferPanel.prototype.renderFooter = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, position = _b.position, mode = _b.mode, disabled = _b.disabled, locale = _b.locale, showCheckAll = _b.showCheckAll;
        if (mode === 'simple') {
            var onMoveAll = this.props.onMoveAll;
            var classNames = cx((_a = {},
                _a["".concat(prefix, "transfer-panel-move-all")] = true,
                _a["".concat(prefix, "disabled")] = disabled,
                _a));
            return (React.createElement("div", { className: "".concat(prefix, "transfer-panel-footer") },
                React.createElement("a", { className: classNames, onClick: onMoveAll.bind(this, position === 'left' ? 'right' : 'left') }, locale.moveAll)));
        }
        var _c = this.props, value = _c.value, showSearch = _c.showSearch, filter = _c.filter, dataSource = _c.dataSource;
        var searchedValue = this.state.searchedValue;
        var totalCount = dataSource.length;
        var _dataSource = dataSource;
        var checkedCount = value.length;
        var _checkedCount = checkedCount;
        if (showSearch && searchedValue) {
            _dataSource = dataSource.filter(function (item) { return filter(searchedValue, item); });
            totalCount = _dataSource.length;
            _checkedCount = _dataSource.filter(function (item) { return value.includes(item.value); }).length;
        }
        var totalEnabledCount = Math.min(totalCount, this.enabledDatasource.length);
        var checked = checkedCount > 0 && checkedCount >= totalEnabledCount;
        var indeterminate = checkedCount > 0 && _checkedCount >= 0 && _checkedCount < totalEnabledCount;
        var items = totalCount > 1 ? locale.items : locale.item;
        var countLabel = checkedCount === 0
            ? "".concat(totalCount, " ").concat(items)
            : "".concat(checkedCount, "/").concat(totalCount, " ").concat(items);
        return (React.createElement("div", { className: "".concat(prefix, "transfer-panel-footer") },
            showCheckAll && (React.createElement(Checkbox, { disabled: disabled, checked: checked, indeterminate: indeterminate, onChange: this.handleAllCheck, "aria-labelledby": this.footerId })),
            React.createElement("span", { className: "".concat(prefix, "transfer-panel-count"), id: this.footerId }, countLabel)));
    };
    TransferPanel.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, title = _a.title, showSearch = _a.showSearch, filter = _a.filter, dataSource = _a.dataSource;
        var searchedValue = this.state.searchedValue;
        var _dataSource = this.props.dataSource;
        this.enabledDatasource = dataSource.filter(function (item) { return !item.disabled; });
        if (showSearch && searchedValue) {
            _dataSource = dataSource.filter(function (item) { return filter(searchedValue, item); });
        }
        return (React.createElement("div", { className: "".concat(prefix, "transfer-panel") },
            title ? this.renderHeader() : null,
            showSearch ? this.renderSearch() : null,
            this.renderList(_dataSource),
            this.renderFooter()));
    };
    TransferPanel.propTypes = {
        prefix: PropTypes.string,
        position: PropTypes.oneOf(['left', 'right']),
        mode: PropTypes.oneOf(['normal', 'simple']),
        dataSource: PropTypes.array,
        value: PropTypes.array,
        onChange: PropTypes.func,
        onMove: PropTypes.func,
        onMoveAll: PropTypes.func,
        disabled: PropTypes.bool,
        locale: PropTypes.object,
        title: PropTypes.node,
        showSearch: PropTypes.bool,
        searchProps: PropTypes.object,
        filter: PropTypes.func,
        onSearch: PropTypes.func,
        searchPlaceholder: PropTypes.string,
        notFoundContent: PropTypes.node,
        listClassName: PropTypes.string,
        listStyle: PropTypes.object,
        itemRender: PropTypes.func,
        sortable: PropTypes.bool,
        onSort: PropTypes.func,
        baseId: PropTypes.string,
        customerList: PropTypes.func,
        useVirtual: PropTypes.bool,
        showCheckAll: PropTypes.bool,
    };
    return TransferPanel;
}(Component));
export default TransferPanel;
