"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var input_1 = tslib_1.__importDefault(require("../input"));
var select_1 = tslib_1.__importDefault(require("../select"));
var button_1 = tslib_1.__importDefault(require("../button"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var util_1 = require("../util");
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var Group = input_1.default.Group;
var AutoComplete = select_1.default.AutoComplete;
var noop = util_1.func.noop;
/**
 * Search
 *  输入框部分继承 Select.AutoComplete 的能力，可以直接用 AutoComplete 的 api
 */
var Search = /** @class */ (function (_super) {
    tslib_1.__extends(Search, _super);
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
            (_a = _this.props).onChange.apply(_a, tslib_1.__spreadArray([value, type], tslib_1.__read(args), false));
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
        if (!(0, react_1.isValidElement)(iconsSearch) && iconsSearch) {
            iconsSearch = react_1.default.createElement("span", null, iconsSearch);
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
            searchBtn = (react_1.default.createElement(button_1.default, tslib_1.__assign({ tabIndex: 0, "aria-disabled": disabled, "aria-label": locale.buttonText, className: cls_2, disabled: disabled }, buttonProps, { onClick: this.onSearch, onKeyDown: this.onKeyDown }),
                hasIcon
                    ? iconsSearch || (react_1.default.createElement(icon_1.default, { type: "search", className: "".concat(prefix, "search-symbol-icon") }))
                    : null,
                searchText ? (react_1.default.createElement("span", { className: "".concat(prefix, "search-btn-text") }, searchText)) : null));
        }
        if (filter.length > 0) {
            filterSelect = (react_1.default.createElement(select_1.default, tslib_1.__assign({}, filterProps, { followTrigger: followTrigger, hasBorder: false, dataSource: filter, size: size, disabled: disabled, value: this.state.filterValue, onChange: this.onFilterChange })));
        }
        var _othersAttributes = util_1.obj.pickOthers(Search.propTypes, others);
        var othersAttributes = _othersAttributes;
        if (visible !== undefined) {
            // 受控属性 visible 不能直接写在组件上
            othersAttributes.visible = Boolean(visible);
        }
        var dataAttr = util_1.obj.pickAttrsWith(others, 'data-');
        var left = (react_1.default.createElement(Group, { addonBefore: filterSelect, className: "".concat(prefix, "search-left"), addonBeforeClassName: "".concat(prefix, "search-left-addon") },
            react_1.default.createElement(AutoComplete, tslib_1.__assign({ "aria-label": locale.buttonText }, othersAttributes, { followTrigger: followTrigger, role: "searchbox", "aria-expanded": undefined, hasClear: hasClear, className: "".concat(prefix, "search-input"), size: size, fillProps: fillProps, placeholder: placeholder, dataSource: dataSource, innerAfter: searchIcon, onPressEnter: this.onPressEnter, value: this.state.value, onChange: this.onChange, onToggleHighlightItem: this.onToggleHighlightItem, autoHighlightFirstItem: autoHighlightFirstItem, popupContent: popupContent, disabled: disabled, ref: this.saveInputRef, onFocus: this.handleFocus, onBlur: this.handleBlur }))));
        return (react_1.default.createElement("span", tslib_1.__assign({ className: cls, style: style }, dataAttr, { dir: rtl ? 'rtl' : undefined }), searchBtn ? react_1.default.createElement(Group, { addonAfter: searchBtn }, left) : left));
    };
    Search.propTypes = {
        prefix: prop_types_1.default.string,
        shape: prop_types_1.default.oneOf(['normal', 'simple']),
        type: prop_types_1.default.oneOf(['primary', 'secondary', 'normal', 'dark']),
        size: prop_types_1.default.oneOf(['large', 'medium']),
        defaultValue: prop_types_1.default.string,
        value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        onChange: prop_types_1.default.func,
        onSearch: prop_types_1.default.func,
        defaultFilterValue: prop_types_1.default.string,
        fillProps: prop_types_1.default.string,
        filter: prop_types_1.default.array,
        filterValue: prop_types_1.default.string,
        onFilterChange: prop_types_1.default.func,
        dataSource: prop_types_1.default.array,
        placeholder: prop_types_1.default.string,
        searchText: prop_types_1.default.node,
        style: prop_types_1.default.object,
        className: prop_types_1.default.string,
        filterProps: prop_types_1.default.object,
        buttonProps: prop_types_1.default.object,
        popupContent: prop_types_1.default.node,
        followTrigger: prop_types_1.default.bool,
        visible: prop_types_1.default.bool,
        hasClear: prop_types_1.default.bool,
        hasIcon: prop_types_1.default.bool,
        disabled: prop_types_1.default.bool,
        locale: prop_types_1.default.object,
        rtl: prop_types_1.default.bool,
        icons: prop_types_1.default.object,
        autoHighlightFirstItem: prop_types_1.default.bool,
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
    Search.displayName = 'Search';
    return Search;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Search);
