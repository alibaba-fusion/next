"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = require("classnames");
var dropdown_1 = require("../../dropdown");
var menu_1 = require("../../menu");
var button_1 = require("../../button");
var icon_1 = require("../../icon");
var util_1 = require("../../util");
// 共享状态的组件需要变成非受控组件
var Filter = /** @class */ (function (_super) {
    tslib_1.__extends(Filter, _super);
    function Filter(props) {
        var _this = _super.call(this, props) || this;
        _this.filterKeydown = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (e.keyCode === util_1.KEYCODE.ENTER) {
                _this.setState({
                    visible: !_this.state.visible,
                });
            }
        };
        _this.onFilterVisible = function (visible) {
            _this.setState({
                visible: visible,
            });
            if (!visible) {
                var selectedKeys = tslib_1.__spreadArray([], tslib_1.__read(_this._selectedKeys), false);
                _this.setState({
                    selectedKeysChangedByInner: true,
                    selectedKeys: selectedKeys,
                });
            }
        };
        _this.onFilterSelect = function (selectedKeys) {
            _this.setState({
                visible: true,
                selectedKeysChangedByInner: true,
                selectedKeys: selectedKeys,
            });
        };
        _this.onFilterConfirm = function () {
            var selectedKeys = _this.state.selectedKeys;
            var filterParams = {}, dataIndex = _this.props.dataIndex;
            filterParams[dataIndex] = {
                visible: false,
                selectedKeys: selectedKeys,
            };
            _this._selectedKeys = tslib_1.__spreadArray([], tslib_1.__read(selectedKeys), false);
            _this.setState({
                visible: false,
                selectedKeysChangedByInner: true,
            });
            // 兼容之前的格式
            _this.props.onFilter(filterParams);
        };
        _this.onFilterClear = function () {
            var filterParams = {}, dataIndex = _this.props.dataIndex;
            filterParams[dataIndex] = {
                visible: false,
                selectedKeys: [],
            };
            _this._selectedKeys = [];
            _this.setState({
                selectedKeys: [],
                visible: false,
                selectedKeysChangedByInner: true,
            });
            // 兼容之前的格式
            _this.props.onFilter(filterParams);
        };
        var filterParams = props.filterParams || {};
        var filterConfig = filterParams[props.dataIndex] || {};
        _this.state = {
            visible: filterConfig.visible || false,
            selectedKeys: filterConfig.selectedKeys || [],
            selectedKeysChangedByInner: true,
        };
        _this._selectedKeys = tslib_1.__spreadArray([], tslib_1.__read(_this.state.selectedKeys), false);
        return _this;
    }
    Filter.getDerivedStateFromProps = function (nextProps, prevState) {
        var state = {};
        if (nextProps.hasOwnProperty('filterParams') && typeof nextProps.filterParams !== 'undefined') {
            var dataIndex = nextProps.dataIndex || this.props.dataIndex;
            var filterParams = nextProps.filterParams || {};
            var filterConfig = filterParams[dataIndex] || {};
            var selectedKeys = void 0;
            if (prevState.selectedKeysChangedByInner) {
                selectedKeys = prevState.selectedKeys || [];
                state.selectedKeysChangedByInner = false;
            }
            else {
                selectedKeys = filterConfig.selectedKeys || [];
            }
            state.selectedKeys = selectedKeys;
        }
        return state;
    };
    Filter.prototype.componentDidUpdate = function (prevProps, prevState) {
        var selectedKeys = prevState.selectedKeys;
        this._selectedKeys = tslib_1.__spreadArray([], tslib_1.__read(selectedKeys), false);
    };
    Filter.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, filters = _d.filters, prefix = _d.prefix, locale = _d.locale, className = _d.className, filterMode = _d.filterMode, filterMenuProps = _d.filterMenuProps, filterProps = _d.filterProps, rtl = _d.rtl;
        var dropdownClassname = (0, classnames_1.default)(filterProps && filterProps.className, (_a = {},
            _a["".concat(prefix, "table-filter-menu")] = true,
            _a));
        var _e = this.state, visible = _e.visible, selectedKeys = _e.selectedKeys;
        var _f = filterMenuProps || {}, subMenuSelectable = _f.subMenuSelectable, others = tslib_1.__rest(_f, ["subMenuSelectable"]);
        function renderMenuItem(item) {
            return react_1.default.createElement(menu_1.default.Item, { key: item.value }, item.label);
        }
        function renderSubMenu(parent, children) {
            return (react_1.default.createElement(menu_1.default.SubMenu, { label: parent.label, key: parent.value, selectable: subMenuSelectable }, renderMenuContent(children)));
        }
        function renderMenuContent(list) {
            return list.map(function (item) {
                if (item.children) {
                    return renderSubMenu(item, item.children);
                }
                else {
                    return renderMenuItem(item);
                }
            });
        }
        var content = renderMenuContent(filters), footer = (react_1.default.createElement("div", { className: "".concat(prefix, "table-filter-footer") },
            react_1.default.createElement(button_1.default, { type: "primary", onClick: this.onFilterConfirm }, locale.ok),
            react_1.default.createElement(button_1.default, { onClick: this.onFilterClear }, locale.reset)));
        var cls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "table-filter")] = true,
            _b[className] = className,
            _b));
        var filterIconCls = (0, classnames_1.default)((_c = {},
            _c["".concat(prefix, "table-filter-active")] = selectedKeys && selectedKeys.length > 0,
            _c));
        return (react_1.default.createElement(dropdown_1.default, tslib_1.__assign({ trigger: react_1.default.createElement("span", { role: "button", "aria-label": locale.filter, onKeyDown: this.filterKeydown, tabIndex: "0", className: cls },
                react_1.default.createElement(icon_1.default, { type: "filter", size: "small", className: filterIconCls })), triggerType: "click", visible: visible, autoFocus: true, rtl: rtl, needAdjust: false, onVisibleChange: this.onFilterVisible, className: dropdownClassname }, filterProps),
            react_1.default.createElement(menu_1.default, tslib_1.__assign({ footer: footer, rtl: rtl, selectedKeys: selectedKeys, selectMode: filterMode, onSelect: this.onFilterSelect }, others), content)));
    };
    Filter.propTypes = {
        dataIndex: prop_types_1.default.string,
        filters: prop_types_1.default.array,
        filterMode: prop_types_1.default.string,
        filterParams: prop_types_1.default.object,
        filterMenuProps: prop_types_1.default.object,
        filterProps: prop_types_1.default.object,
        locale: prop_types_1.default.object,
        onFilter: prop_types_1.default.func,
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
    };
    Filter.defaultProps = {
        onFilter: function () { },
    };
    return Filter;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Filter);
