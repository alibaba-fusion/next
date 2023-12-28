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
 * @description 输入框部分继承 Select.AutoComplete 的能力，可以直接用AutoComplete 的 api
 */
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (value, type) {
            var _a;
            var argv = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                argv[_i - 2] = arguments[_i];
            }
            if (_this.props.disabled) {
                return;
            }
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            (_a = _this.props).onChange.apply(_a, __spreadArray([value, type], __read(argv), false));
            if (type === 'enter') {
                // 先记录，保留原先的执行顺序
                var highlightKey = _this.highlightKey;
                // 重置
                _this.highlightKey = '';
                // 若有匹配项，执行onSearch
                if (highlightKey) {
                    _this.props.onSearch(value, _this.state.filterValue);
                }
            }
        };
        _this.onPressEnter = function () {
            // 有匹配项情况，enter会触发 onChange，由那里执行onSearch
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
    Search.prototype.focus = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.inputRef).focus.apply(_a, __spreadArray([], __read(args), false));
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
        if (!isValidElement(icons.search) && icons.search) {
            iconsSearch = React.createElement("span", null, icons.search);
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
            searchBtn = (React.createElement(Button, __assign({ tabIndex: "0", "aria-disabled": disabled, "aria-label": locale.buttonText, className: cls_2, disabled: disabled }, buttonProps, { onClick: this.onSearch, onKeyDown: this.onKeyDown }),
                hasIcon ? iconsSearch || React.createElement(Icon, { type: "search", className: "".concat(prefix, "search-symbol-icon") }) : null,
                searchText ? React.createElement("span", { className: "".concat(prefix, "search-btn-text") }, searchText) : null));
        }
        if (filter.length > 0) {
            filterSelect = (React.createElement(Select, __assign({}, filterProps, { followTrigger: followTrigger, hasBorder: false, dataSource: filter, size: size, disabled: disabled, value: this.state.filterValue, onChange: this.onFilterChange })));
        }
        var othersAttributes = obj.pickOthers(Search.propTypes, others);
        if (visible !== undefined) {
            // 受控属性 visible 不能直接写在组件上
            othersAttributes.visible = Boolean(visible);
        }
        var dataAttr = obj.pickAttrsWith(others, 'data-');
        var left = (React.createElement(Group, { addonBefore: filterSelect, className: "".concat(prefix, "search-left"), addonBeforeClassName: "".concat(prefix, "search-left-addon") },
            React.createElement(AutoComplete, __assign({ "aria-label": locale.buttonText }, othersAttributes, { followTrigger: followTrigger, role: "searchbox", hasClear: hasClear, className: "".concat(prefix, "search-input"), size: size, fillProps: fillProps, placeholder: placeholder, dataSource: dataSource, innerAfter: searchIcon, onPressEnter: this.onPressEnter, value: this.state.value, onChange: this.onChange, onToggleHighlightItem: this.onToggleHighlightItem, autoHighlightFirstItem: autoHighlightFirstItem, popupContent: popupContent, disabled: disabled, ref: this.saveInputRef, onFocus: this.handleFocus, onBlur: this.handleBlur }))));
        return (React.createElement("span", __assign({ className: cls, style: style }, dataAttr, { dir: rtl ? 'rtl' : undefined }), searchBtn ? React.createElement(Group, { addonAfter: searchBtn }, left) : left));
    };
    Search.propTypes = {
        /**
         * 样式前缀
         */
        prefix: PropTypes.string,
        /**
         * 形状
         */
        shape: PropTypes.oneOf(['normal', 'simple']),
        /**
         * 类型 shape=normal: primary/secondary; shape=simple: normal/dark;
         */
        type: PropTypes.oneOf(['primary', 'secondary', 'normal', 'dark']),
        /**
         * 大小
         * @enumdesc '大', '小'
         */
        size: PropTypes.oneOf(['large', 'medium']),
        /**
         * 搜索框默认值
         */
        defaultValue: PropTypes.string,
        /**
         * 搜索框数值
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 输入关键字时的回掉
         * @param {Object} value 输入值
         */
        onChange: PropTypes.func,
        /**
         * 点击搜索按钮触发的回调
         * @param {String} value 输入值
         * @param {String} filterValue 选项值
         */
        onSearch: PropTypes.func,
        /**
         * 选择器默认值
         */
        defaultFilterValue: PropTypes.string,
        /**
         * 填充到输入框里的值的 key ，默认是value
         */
        fillProps: PropTypes.string,
        /**
         * 选择器
         */
        filter: PropTypes.array,
        /**
         * 选择器值
         */
        filterValue: PropTypes.string,
        /**
         * 选择器发生变化时回调
         * @param {Object} filter value
         */
        onFilterChange: PropTypes.func,
        /**
         * 搜索框下拉联想列表
         */
        dataSource: PropTypes.array,
        /**
         * 默认提示
         */
        placeholder: PropTypes.string,
        /**
         * button 的内容
         */
        searchText: PropTypes.node,
        /**
         * 自定义样式
         */
        style: PropTypes.object,
        /**
         * 样式名称
         */
        className: PropTypes.string,
        /**
         * 选择器的props
         */
        filterProps: PropTypes.object,
        /**
         * 按钮的额外属性
         */
        buttonProps: PropTypes.object,
        /**
         * 自定义渲染的的下拉框
         */
        popupContent: PropTypes.node,
        /**
         * 是否跟随滚动
         */
        followTrigger: PropTypes.bool,
        /**
         * 自定义渲染的的下拉框
         */
        visible: PropTypes.bool,
        /**
         * 是否显示清除按钮
         */
        hasClear: PropTypes.bool,
        /**
         * 是否显示搜索按钮
         */
        hasIcon: PropTypes.bool,
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        locale: PropTypes.object,
        rtl: PropTypes.bool,
        /**
         * 可配置的icons，包括 search 等
         */
        icons: PropTypes.object,
        /**
         * 是否自动高亮第一个元素
         */
        autoHighlightFirstItem: PropTypes.bool,
        /**
         * 上下箭头切换选项的回调
         */
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
    return Search;
}(React.Component));
export default polyfill(Search);
