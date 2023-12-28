"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var input_1 = require("../input");
var select_1 = require("../select");
var button_1 = require("../button");
var icon_1 = require("../icon");
var util_1 = require("../util");
var zh_cn_1 = require("../locale/zh-cn");
var Group = input_1.default.Group;
var AutoComplete = select_1.default.AutoComplete;
var noop = util_1.func.noop;
/**
 * Search
 * @description 输入框部分继承 Select.AutoComplete 的能力，可以直接用AutoComplete 的 api
 */
var Search = /** @class */ (function (_super) {
    tslib_1.__extends(Search, _super);
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
            (_a = _this.props).onChange.apply(_a, tslib_1.__spreadArray([value, type], tslib_1.__read(argv), false));
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
            (_a = _this.props).onToggleHighlightItem.apply(_a, tslib_1.__spreadArray([highlightKey], tslib_1.__read(args), false));
        };
        _this.onKeyDown = function (e) {
            if (_this.props.disabled) {
                return;
            }
            if (e.keyCode !== util_1.KEYCODE.ENTER) {
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
        (_a = this.inputRef).focus.apply(_a, tslib_1.__spreadArray([], tslib_1.__read(args), false));
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
        this.props.onFocus && (_a = this.props).onFocus.apply(_a, tslib_1.__spreadArray([], tslib_1.__read(args), false));
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
        this.props.onBlur && (_a = this.props).onBlur.apply(_a, tslib_1.__spreadArray([], tslib_1.__read(args), false));
    };
    Search.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, shape = _d.shape, filter = _d.filter, hasIcon = _d.hasIcon, disabled = _d.disabled, placeholder = _d.placeholder, type = _d.type, className = _d.className, style = _d.style, size = _d.size, prefix = _d.prefix, searchText = _d.searchText, dataSource = _d.dataSource, filterProps = _d.filterProps, buttonProps = _d.buttonProps, fillProps = _d.fillProps, popupContent = _d.popupContent, followTrigger = _d.followTrigger, hasClear = _d.hasClear, visible = _d.visible, locale = _d.locale, rtl = _d.rtl, icons = _d.icons, autoHighlightFirstItem = _d.autoHighlightFirstItem, others = tslib_1.__rest(_d, ["shape", "filter", "hasIcon", "disabled", "placeholder", "type", "className", "style", "size", "prefix", "searchText", "dataSource", "filterProps", "buttonProps", "fillProps", "popupContent", "followTrigger", "hasClear", "visible", "locale", "rtl", "icons", "autoHighlightFirstItem"]);
        var ifFocus = this.state.ifFocus;
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "search")] = true,
            _a["".concat(prefix, "search-").concat(shape)] = true,
            _a["".concat(prefix).concat(type)] = type,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "disabled")] = !!disabled,
            _a["".concat(prefix, "search-focus")] = ifFocus,
            _a[className] = !!className,
            _a));
        var searchIcon = null, filterSelect = null, searchBtn = null, iconsSearch = icons.search;
        if (!(0, react_1.isValidElement)(icons.search) && icons.search) {
            iconsSearch = react_1.default.createElement("span", null, icons.search);
        }
        if (shape === 'simple') {
            var cls_1 = (0, classnames_1.default)((_b = {},
                _b["".concat(prefix, "search-icon")] = true,
                _b[buttonProps.className] = !!buttonProps.className,
                _b["".concat(prefix, "search-symbol-icon")] = !iconsSearch,
                _b));
            hasIcon &&
                (searchIcon = react_1.default.cloneElement(iconsSearch || react_1.default.createElement(icon_1.default, { type: "search" }), tslib_1.__assign(tslib_1.__assign({ role: 'button', 'aria-disabled': disabled, 'aria-label': locale.buttonText }, buttonProps), { className: cls_1, onClick: this.onSearch, onKeyDown: this.onKeyDown })));
        }
        else {
            var cls_2 = (0, classnames_1.default)((_c = {},
                _c["".concat(prefix, "search-btn")] = true,
                _c[buttonProps.className] = !!buttonProps.className,
                _c));
            searchBtn = (react_1.default.createElement(button_1.default, tslib_1.__assign({ tabIndex: "0", "aria-disabled": disabled, "aria-label": locale.buttonText, className: cls_2, disabled: disabled }, buttonProps, { onClick: this.onSearch, onKeyDown: this.onKeyDown }),
                hasIcon ? iconsSearch || react_1.default.createElement(icon_1.default, { type: "search", className: "".concat(prefix, "search-symbol-icon") }) : null,
                searchText ? react_1.default.createElement("span", { className: "".concat(prefix, "search-btn-text") }, searchText) : null));
        }
        if (filter.length > 0) {
            filterSelect = (react_1.default.createElement(select_1.default, tslib_1.__assign({}, filterProps, { followTrigger: followTrigger, hasBorder: false, dataSource: filter, size: size, disabled: disabled, value: this.state.filterValue, onChange: this.onFilterChange })));
        }
        var othersAttributes = util_1.obj.pickOthers(Search.propTypes, others);
        if (visible !== undefined) {
            // 受控属性 visible 不能直接写在组件上
            othersAttributes.visible = Boolean(visible);
        }
        var dataAttr = util_1.obj.pickAttrsWith(others, 'data-');
        var left = (react_1.default.createElement(Group, { addonBefore: filterSelect, className: "".concat(prefix, "search-left"), addonBeforeClassName: "".concat(prefix, "search-left-addon") },
            react_1.default.createElement(AutoComplete, tslib_1.__assign({ "aria-label": locale.buttonText }, othersAttributes, { followTrigger: followTrigger, role: "searchbox", hasClear: hasClear, className: "".concat(prefix, "search-input"), size: size, fillProps: fillProps, placeholder: placeholder, dataSource: dataSource, innerAfter: searchIcon, onPressEnter: this.onPressEnter, value: this.state.value, onChange: this.onChange, onToggleHighlightItem: this.onToggleHighlightItem, autoHighlightFirstItem: autoHighlightFirstItem, popupContent: popupContent, disabled: disabled, ref: this.saveInputRef, onFocus: this.handleFocus, onBlur: this.handleBlur }))));
        return (react_1.default.createElement("span", tslib_1.__assign({ className: cls, style: style }, dataAttr, { dir: rtl ? 'rtl' : undefined }), searchBtn ? react_1.default.createElement(Group, { addonAfter: searchBtn }, left) : left));
    };
    Search.propTypes = {
        /**
         * 样式前缀
         */
        prefix: prop_types_1.default.string,
        /**
         * 形状
         */
        shape: prop_types_1.default.oneOf(['normal', 'simple']),
        /**
         * 类型 shape=normal: primary/secondary; shape=simple: normal/dark;
         */
        type: prop_types_1.default.oneOf(['primary', 'secondary', 'normal', 'dark']),
        /**
         * 大小
         * @enumdesc '大', '小'
         */
        size: prop_types_1.default.oneOf(['large', 'medium']),
        /**
         * 搜索框默认值
         */
        defaultValue: prop_types_1.default.string,
        /**
         * 搜索框数值
         */
        value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        /**
         * 输入关键字时的回掉
         * @param {Object} value 输入值
         */
        onChange: prop_types_1.default.func,
        /**
         * 点击搜索按钮触发的回调
         * @param {String} value 输入值
         * @param {String} filterValue 选项值
         */
        onSearch: prop_types_1.default.func,
        /**
         * 选择器默认值
         */
        defaultFilterValue: prop_types_1.default.string,
        /**
         * 填充到输入框里的值的 key ，默认是value
         */
        fillProps: prop_types_1.default.string,
        /**
         * 选择器
         */
        filter: prop_types_1.default.array,
        /**
         * 选择器值
         */
        filterValue: prop_types_1.default.string,
        /**
         * 选择器发生变化时回调
         * @param {Object} filter value
         */
        onFilterChange: prop_types_1.default.func,
        /**
         * 搜索框下拉联想列表
         */
        dataSource: prop_types_1.default.array,
        /**
         * 默认提示
         */
        placeholder: prop_types_1.default.string,
        /**
         * button 的内容
         */
        searchText: prop_types_1.default.node,
        /**
         * 自定义样式
         */
        style: prop_types_1.default.object,
        /**
         * 样式名称
         */
        className: prop_types_1.default.string,
        /**
         * 选择器的props
         */
        filterProps: prop_types_1.default.object,
        /**
         * 按钮的额外属性
         */
        buttonProps: prop_types_1.default.object,
        /**
         * 自定义渲染的的下拉框
         */
        popupContent: prop_types_1.default.node,
        /**
         * 是否跟随滚动
         */
        followTrigger: prop_types_1.default.bool,
        /**
         * 自定义渲染的的下拉框
         */
        visible: prop_types_1.default.bool,
        /**
         * 是否显示清除按钮
         */
        hasClear: prop_types_1.default.bool,
        /**
         * 是否显示搜索按钮
         */
        hasIcon: prop_types_1.default.bool,
        /**
         * 是否禁用
         */
        disabled: prop_types_1.default.bool,
        locale: prop_types_1.default.object,
        rtl: prop_types_1.default.bool,
        /**
         * 可配置的icons，包括 search 等
         */
        icons: prop_types_1.default.object,
        /**
         * 是否自动高亮第一个元素
         */
        autoHighlightFirstItem: prop_types_1.default.bool,
        /**
         * 上下箭头切换选项的回调
         */
        onToggleHighlightItem: prop_types_1.default.func,
    };
    Search.defaultProps = {
        prefix: 'next-',
        shape: 'normal',
        type: 'normal',
        size: 'medium',
        hasIcon: true,
        filter: [],
        locale: zh_cn_1.default.Search,
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
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Search);
