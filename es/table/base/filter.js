import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import Dropdown from '../../dropdown';
import Menu from '../../menu';
import Button from '../../button';
import Icon from '../../icon';
import { KEYCODE } from '../../util';
// 共享状态的组件需要变成非受控组件
var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    function Filter(props) {
        var _this = _super.call(this, props) || this;
        _this.filterKeydown = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (e.keyCode === KEYCODE.ENTER) {
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
                var selectedKeys = __spreadArray([], __read(_this._selectedKeys), false);
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
            _this._selectedKeys = __spreadArray([], __read(selectedKeys), false);
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
        _this._selectedKeys = __spreadArray([], __read(_this.state.selectedKeys), false);
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
        this._selectedKeys = __spreadArray([], __read(selectedKeys), false);
    };
    Filter.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, filters = _d.filters, prefix = _d.prefix, locale = _d.locale, className = _d.className, filterMode = _d.filterMode, filterMenuProps = _d.filterMenuProps, filterProps = _d.filterProps, rtl = _d.rtl;
        var dropdownClassname = classnames(filterProps && filterProps.className, (_a = {},
            _a["".concat(prefix, "table-filter-menu")] = true,
            _a));
        var _e = this.state, visible = _e.visible, selectedKeys = _e.selectedKeys;
        var _f = filterMenuProps || {}, subMenuSelectable = _f.subMenuSelectable, others = __rest(_f, ["subMenuSelectable"]);
        function renderMenuItem(item) {
            return React.createElement(Menu.Item, { key: item.value }, item.label);
        }
        function renderSubMenu(parent, children) {
            return (React.createElement(Menu.SubMenu, { label: parent.label, key: parent.value, selectable: subMenuSelectable }, renderMenuContent(children)));
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
        var content = renderMenuContent(filters), footer = (React.createElement("div", { className: "".concat(prefix, "table-filter-footer") },
            React.createElement(Button, { type: "primary", onClick: this.onFilterConfirm }, locale.ok),
            React.createElement(Button, { onClick: this.onFilterClear }, locale.reset)));
        var cls = classnames((_b = {},
            _b["".concat(prefix, "table-filter")] = true,
            _b[className] = className,
            _b));
        var filterIconCls = classnames((_c = {},
            _c["".concat(prefix, "table-filter-active")] = selectedKeys && selectedKeys.length > 0,
            _c));
        return (React.createElement(Dropdown, __assign({ trigger: React.createElement("span", { role: "button", "aria-label": locale.filter, onKeyDown: this.filterKeydown, tabIndex: "0", className: cls },
                React.createElement(Icon, { type: "filter", size: "small", className: filterIconCls })), triggerType: "click", visible: visible, autoFocus: true, rtl: rtl, needAdjust: false, onVisibleChange: this.onFilterVisible, className: dropdownClassname }, filterProps),
            React.createElement(Menu, __assign({ footer: footer, rtl: rtl, selectedKeys: selectedKeys, selectMode: filterMode, onSelect: this.onFilterSelect }, others), content)));
    };
    Filter.propTypes = {
        dataIndex: PropTypes.string,
        filters: PropTypes.array,
        filterMode: PropTypes.string,
        filterParams: PropTypes.object,
        filterMenuProps: PropTypes.object,
        filterProps: PropTypes.object,
        locale: PropTypes.object,
        onFilter: PropTypes.func,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
    };
    Filter.defaultProps = {
        onFilter: function () { },
    };
    return Filter;
}(React.Component));
export default polyfill(Filter);
