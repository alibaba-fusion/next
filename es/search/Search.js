import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import Icon from '../icon';
import { obj, func, KEYCODE } from '../util';
import zhCN from '../locale/zh-cn';
var Group = Input.Group;
var AutoComplete = Select.AutoComplete;
var noop = func.noop;
/**
 * Search
 *  输入框部分继承 Select.AutoComplete 的能力，可以直接用 AutoComplete 的 api
 */
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.inputRef = null;
        _this.onChange = function (value, type) {
            var _a;
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (_this.props.disabled) {
                return;
            }
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            (_a = _this.props).onChange.apply(_a, __spreadArray([value, type], __read(args), false));
            if (type === 'enter') {
                // 先记录，保留原先的执行顺序
                var highlightKey = _this.highlightKey;
                // 重置
                _this.highlightKey = '';
                // 若有匹配项，执行 onSearch
                if (highlightKey) {
                    _this.props.onSearch(value, _this.state.filterValue);
                }
            }
        };
        _this.onPressEnter = function () {
            // 有匹配项情况，enter 会触发 onChange，由那里执行 onSearch
            if (_this.highlightKey) {
                return;
            }
            _this.onSearch();
        };
        _this.onSearch = function () {
            if (_this.props.disabled) {
                return;
            }
            _this.props.onSearch(_this.state.value, _this.state.filterValue);
        };
        _this.onFilterChange = function (filterValue) {
            if (!('filterValue' in _this.props)) {
                _this.setState({ filterValue: filterValue });
            }
            _this.props.onFilterChange(filterValue);
        };
        _this.onToggleHighlightItem = function (highlightKey) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            _this.highlightKey = highlightKey;
            (_a = _this.props).onToggleHighlightItem.apply(_a, __spreadArray([highlightKey], __read(args), false));
        };
        _this.onKeyDown = function (e) {
            if (_this.props.disabled) {
                return;
            }
            if (e.keyCode !== KEYCODE.ENTER) {
                return;
            }
            _this.onSearch();
        };
        _this.saveInputRef = function (ref) {
            if (ref && ref.getInstance()) {
                _this.inputRef = ref.getInstance();
            }
        };
        _this.focus = function (start, end, preventScroll) {
            if (preventScroll === void 0) { preventScroll = false; }
            _this.inputRef.focus(start, end, preventScroll);
        };
        var value = 'value' in props ? props.value : props.defaultValue;
        var filterValue = 'filterValue' in props ? props.filterValue : props.defaultFilterValue;
        _this.state = {
            value: typeof value === 'undefined' ? '' : value,
            filterValue: filterValue,
            ifFocus: false,
        };
        _this.highlightKey = null;
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        return _this;
    }
    Search.getDerivedStateFromProps = function (nextProps, prevState) {
        var nextState = {};
        if ('value' in nextProps && nextProps.value !== prevState.value) {
            var value = nextProps.value;
            nextState.value = value === undefined || value === null ? '' : nextProps.value;
        }
        if ('filterValue' in nextProps && nextProps.filterValue !== prevState.filterValue) {
            var filterValue = nextProps.filterValue;
            nextState.filterValue = filterValue === undefined ? '' : filterValue;
        }
        if (Object.keys(nextState).length > 0) {
            return nextState;
        }
        return null;
    };
    Search.prototype.handleFocus = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.setState({
            ifFocus: true,
        });
        this.props.onFocus && (_a = this.props).onFocus.apply(_a, __spreadArray([], __read(args), false));
    };
    Search.prototype.handleBlur = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.setState({
            ifFocus: false,
        });
        this.props.onBlur && (_a = this.props).onBlur.apply(_a, __spreadArray([], __read(args), false));
    };
    Search.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, shape = _d.shape, filter = _d.filter, hasIcon = _d.hasIcon, disabled = _d.disabled, placeholder = _d.placeholder, type = _d.type, className = _d.className, style = _d.style, size = _d.size, prefix = _d.prefix, searchText = _d.searchText, dataSource = _d.dataSource, filterProps = _d.filterProps, buttonProps = _d.buttonProps, fillProps = _d.fillProps, popupContent = _d.popupContent, followTrigger = _d.followTrigger, hasClear = _d.hasClear, visible = _d.visible, locale = _d.locale, rtl = _d.rtl, icons = _d.icons, autoHighlightFirstItem = _d.autoHighlightFirstItem, others = __rest(_d, ["shape", "filter", "hasIcon", "disabled", "placeholder", "type", "className", "style", "size", "prefix", "searchText", "dataSource", "filterProps", "buttonProps", "fillProps", "popupContent", "followTrigger", "hasClear", "visible", "locale", "rtl", "icons", "autoHighlightFirstItem"]);
        var ifFocus = this.state.ifFocus;
        var cls = classNames((_a = {},
            _a["".concat(prefix, "search")] = true,
            _a["".concat(prefix, "search-").concat(shape)] = true,
            _a["".concat(prefix).concat(type)] = type,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "disabled")] = !!disabled,
            _a["".concat(prefix, "search-focus")] = ifFocus,
            _a[className] = !!className,
            _a));
        var searchIcon = null, filterSelect = null, searchBtn = null, iconsSearch = icons.search;
        if (!isValidElement(iconsSearch) && iconsSearch) {
            iconsSearch = React.createElement("span", null, iconsSearch);
        }
        if (shape === 'simple') {
            var cls_1 = classNames((_b = {},
                _b["".concat(prefix, "search-icon")] = true,
                _b[buttonProps.className] = !!buttonProps.className,
                _b["".concat(prefix, "search-symbol-icon")] = !iconsSearch,
                _b));
            hasIcon &&
                (searchIcon = React.cloneElement(iconsSearch || React.createElement(Icon, { type: "search" }), __assign(__assign({ role: 'button', 'aria-disabled': disabled, 'aria-label': locale.buttonText }, buttonProps), { className: cls_1, onClick: this.onSearch, onKeyDown: this.onKeyDown })));
        }
        else {
            var cls_2 = classNames((_c = {},
                _c["".concat(prefix, "search-btn")] = true,
                _c[buttonProps.className] = !!buttonProps.className,
                _c));
            searchBtn = (React.createElement(Button, __assign({ tabIndex: 0, "aria-disabled": disabled, "aria-label": locale.buttonText, className: cls_2, disabled: disabled }, buttonProps, { onClick: this.onSearch, onKeyDown: this.onKeyDown }),
                hasIcon
                    ? iconsSearch || (React.createElement(Icon, { type: "search", className: "".concat(prefix, "search-symbol-icon") }))
                    : null,
                searchText ? (React.createElement("span", { className: "".concat(prefix, "search-btn-text") }, searchText)) : null));
        }
        if (filter.length > 0) {
            filterSelect = (React.createElement(Select, __assign({}, filterProps, { followTrigger: followTrigger, hasBorder: false, dataSource: filter, size: size, disabled: disabled, value: this.state.filterValue, onChange: this.onFilterChange })));
        }
        var _othersAttributes = obj.pickOthers(Search.propTypes, others);
        var othersAttributes = _othersAttributes;
        if (visible !== undefined) {
            // 受控属性 visible 不能直接写在组件上
            othersAttributes.visible = Boolean(visible);
        }
        var dataAttr = obj.pickAttrsWith(others, 'data-');
        var left = (React.createElement(Group, { addonBefore: filterSelect, className: "".concat(prefix, "search-left"), addonBeforeClassName: "".concat(prefix, "search-left-addon") },
            React.createElement(AutoComplete, __assign({ "aria-label": locale.buttonText }, othersAttributes, { followTrigger: followTrigger, role: "searchbox", "aria-expanded": undefined, hasClear: hasClear, className: "".concat(prefix, "search-input"), size: size, fillProps: fillProps, placeholder: placeholder, dataSource: dataSource, innerAfter: searchIcon, onPressEnter: this.onPressEnter, value: this.state.value, onChange: this.onChange, onToggleHighlightItem: this.onToggleHighlightItem, autoHighlightFirstItem: autoHighlightFirstItem, popupContent: popupContent, disabled: disabled, ref: this.saveInputRef, onFocus: this.handleFocus, onBlur: this.handleBlur }))));
        return (React.createElement("span", __assign({ className: cls, style: style }, dataAttr, { dir: rtl ? 'rtl' : undefined }), searchBtn ? React.createElement(Group, { addonAfter: searchBtn }, left) : left));
    };
    Search.propTypes = {
        prefix: PropTypes.string,
        shape: PropTypes.oneOf(['normal', 'simple']),
        type: PropTypes.oneOf(['primary', 'secondary', 'normal', 'dark']),
        size: PropTypes.oneOf(['large', 'medium']),
        defaultValue: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onChange: PropTypes.func,
        onSearch: PropTypes.func,
        defaultFilterValue: PropTypes.string,
        fillProps: PropTypes.string,
        filter: PropTypes.array,
        filterValue: PropTypes.string,
        onFilterChange: PropTypes.func,
        dataSource: PropTypes.array,
        placeholder: PropTypes.string,
        searchText: PropTypes.node,
        style: PropTypes.object,
        className: PropTypes.string,
        filterProps: PropTypes.object,
        buttonProps: PropTypes.object,
        popupContent: PropTypes.node,
        followTrigger: PropTypes.bool,
        visible: PropTypes.bool,
        hasClear: PropTypes.bool,
        hasIcon: PropTypes.bool,
        disabled: PropTypes.bool,
        locale: PropTypes.object,
        rtl: PropTypes.bool,
        icons: PropTypes.object,
        autoHighlightFirstItem: PropTypes.bool,
        onToggleHighlightItem: PropTypes.func,
    };
    Search.defaultProps = {
        prefix: 'next-',
        shape: 'normal',
        type: 'normal',
        size: 'medium',
        hasIcon: true,
        filter: [],
        locale: zhCN.Search,
        buttonProps: {},
        onChange: noop,
        onSearch: noop,
        onFilterChange: noop,
        onToggleHighlightItem: noop,
        hasClear: false,
        disabled: false,
        icons: {},
        autoHighlightFirstItem: true,
    };
    Search.displayName = 'Search';
    return Search;
}(React.Component));
export default polyfill(Search);
