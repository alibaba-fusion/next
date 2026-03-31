"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var checkbox_1 = tslib_1.__importDefault(require("../../checkbox"));
var search_1 = tslib_1.__importDefault(require("../../search"));
var menu_1 = tslib_1.__importDefault(require("../../menu"));
var util_1 = require("../../util");
var transfer_item_1 = tslib_1.__importDefault(require("./transfer-item"));
var virtual_list_1 = tslib_1.__importDefault(require("../../virtual-list"));
var bindCtx = util_1.func.bindCtx;
var TransferPanel = /** @class */ (function (_super) {
    tslib_1.__extends(TransferPanel, _super);
    function TransferPanel(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            searchedValue: '',
            dragValue: null,
            dragOverValue: null,
        };
        _this.footerId = props.baseId
            ? util_1.htmlId.escapeForId("".concat(props.baseId, "-panel-footer-").concat(props.position))
            : '';
        _this.headerId = props.baseId
            ? util_1.htmlId.escapeForId("".concat(props.baseId, "-panel-header-").concat(props.position))
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
            return (react_1.default.createElement(transfer_item_1.default, tslib_1.__assign({ key: item.value, prefix: prefix, mode: mode, checked: value.indexOf(item.value) > -1, disabled: disabled || item.disabled, item: item, onCheck: _this.handleCheck, onClick: onMove, needHighlight: !_this.firstRender && !_this.searched && !disableHighlight, itemRender: itemRender, draggable: sortable, onDragStart: _this.handleItemDragStart, onDragOver: _this.handleItemDragOver, onDragEnd: _this.handleItemDragEnd, onDrop: _this.handleItemDrop, dragPosition: dragPosition, dragValue: dragValue, dragOverValue: dragOverValue, panelPosition: position }, others)));
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
        var newValue = tslib_1.__spreadArray([], tslib_1.__read(value), false);
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
        (_a = this.props).onSort.apply(_a, tslib_1.__spreadArray([], tslib_1.__read(args), false));
    };
    TransferPanel.prototype.renderHeader = function () {
        var _a = this.props, title = _a.title, prefix = _a.prefix;
        return (react_1.default.createElement("div", { id: this.headerId, className: "".concat(prefix, "transfer-panel-header") }, title));
    };
    TransferPanel.prototype.renderSearch = function () {
        var _a = this.props, prefix = _a.prefix, searchPlaceholder = _a.searchPlaceholder, locale = _a.locale, _b = _a.searchProps, searchProps = _b === void 0 ? {} : _b;
        return (react_1.default.createElement(search_1.default, tslib_1.__assign({ "aria-labelledby": this.headerId, shape: "simple" }, searchProps, { className: "".concat(prefix, "transfer-panel-search"), placeholder: searchPlaceholder || locale.searchPlaceholder, onChange: this.handleSearch })));
    };
    TransferPanel.prototype.renderList = function (dataSource) {
        var _a;
        var _b = this.props, prefix = _b.prefix, listClassName = _b.listClassName, listStyle = _b.listStyle, customerList = _b.customerList, useVirtual = _b.useVirtual;
        var newClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "transfer-panel-list")] = true,
            _a[listClassName] = !!listClassName,
            _a));
        var customerPanel = customerList && customerList(this.props);
        if (customerPanel) {
            return (react_1.default.createElement("div", { className: newClassName, style: listStyle, ref: this.getListDOM }, customerPanel));
        }
        if (!dataSource.length) {
            return (react_1.default.createElement("div", { className: newClassName, style: listStyle }, this.renderNotFoundContent()));
        }
        if (useVirtual) {
            return (react_1.default.createElement("div", { className: newClassName, style: tslib_1.__assign({ position: 'relative' }, listStyle) },
                react_1.default.createElement(virtual_list_1.default, { itemsRenderer: function (items, ref) { return (react_1.default.createElement(menu_1.default, { style: { border: 'none' }, ref: ref }, items)); } }, this.getListData(dataSource, true))));
        }
        return (react_1.default.createElement(menu_1.default, { className: newClassName, style: listStyle, ref: this.getListDOM }, this.getListData(dataSource)));
    };
    TransferPanel.prototype.renderNotFoundContent = function () {
        var _a = this.props, prefix = _a.prefix, notFoundContent = _a.notFoundContent;
        return (react_1.default.createElement("div", { className: "".concat(prefix, "transfer-panel-not-found-container") },
            react_1.default.createElement("div", { className: "".concat(prefix, "transfer-panel-not-found") }, notFoundContent)));
    };
    TransferPanel.prototype.renderFooter = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, position = _b.position, mode = _b.mode, disabled = _b.disabled, locale = _b.locale, showCheckAll = _b.showCheckAll;
        if (mode === 'simple') {
            var onMoveAll = this.props.onMoveAll;
            var classNames = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "transfer-panel-move-all")] = true,
                _a["".concat(prefix, "disabled")] = disabled,
                _a));
            return (react_1.default.createElement("div", { className: "".concat(prefix, "transfer-panel-footer") },
                react_1.default.createElement("a", { className: classNames, onClick: onMoveAll.bind(this, position === 'left' ? 'right' : 'left') }, locale.moveAll)));
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
        return (react_1.default.createElement("div", { className: "".concat(prefix, "transfer-panel-footer") },
            showCheckAll && (react_1.default.createElement(checkbox_1.default, { disabled: disabled, checked: checked, indeterminate: indeterminate, onChange: this.handleAllCheck, "aria-labelledby": this.footerId })),
            react_1.default.createElement("span", { className: "".concat(prefix, "transfer-panel-count"), id: this.footerId }, countLabel)));
    };
    TransferPanel.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, title = _a.title, showSearch = _a.showSearch, filter = _a.filter, dataSource = _a.dataSource;
        var searchedValue = this.state.searchedValue;
        var _dataSource = this.props.dataSource;
        this.enabledDatasource = dataSource.filter(function (item) { return !item.disabled; });
        if (showSearch && searchedValue) {
            _dataSource = dataSource.filter(function (item) { return filter(searchedValue, item); });
        }
        return (react_1.default.createElement("div", { className: "".concat(prefix, "transfer-panel") },
            title ? this.renderHeader() : null,
            showSearch ? this.renderSearch() : null,
            this.renderList(_dataSource),
            this.renderFooter()));
    };
    TransferPanel.propTypes = {
        prefix: prop_types_1.default.string,
        position: prop_types_1.default.oneOf(['left', 'right']),
        mode: prop_types_1.default.oneOf(['normal', 'simple']),
        dataSource: prop_types_1.default.array,
        value: prop_types_1.default.array,
        onChange: prop_types_1.default.func,
        onMove: prop_types_1.default.func,
        onMoveAll: prop_types_1.default.func,
        disabled: prop_types_1.default.bool,
        locale: prop_types_1.default.object,
        title: prop_types_1.default.node,
        showSearch: prop_types_1.default.bool,
        searchProps: prop_types_1.default.object,
        filter: prop_types_1.default.func,
        onSearch: prop_types_1.default.func,
        searchPlaceholder: prop_types_1.default.string,
        notFoundContent: prop_types_1.default.node,
        listClassName: prop_types_1.default.string,
        listStyle: prop_types_1.default.object,
        itemRender: prop_types_1.default.func,
        sortable: prop_types_1.default.bool,
        onSort: prop_types_1.default.func,
        baseId: prop_types_1.default.string,
        customerList: prop_types_1.default.func,
        useVirtual: prop_types_1.default.bool,
        showCheckAll: prop_types_1.default.bool,
    };
    return TransferPanel;
}(react_1.Component));
exports.default = TransferPanel;
