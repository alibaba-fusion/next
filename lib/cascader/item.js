"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var menu_1 = tslib_1.__importDefault(require("../menu"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var util_1 = require("../util");
var bindCtx = util_1.func.bindCtx;
var pickOthers = util_1.obj.pickOthers;
var CascaderMenuItem = /** @class */ (function (_super) {
    tslib_1.__extends(CascaderMenuItem, _super);
    function CascaderMenuItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: false,
        };
        bindCtx(_this, [
            'handleExpand',
            'handleClick',
            'handleMouseEnter',
            'handleKeyDown',
            'removeLoading',
        ]);
        return _this;
    }
    CascaderMenuItem.prototype.addLoading = function () {
        this.setState({
            loading: true,
        });
    };
    CascaderMenuItem.prototype.removeLoading = function () {
        this.setState({
            loading: false,
        });
    };
    CascaderMenuItem.prototype.setLoadingIfNeed = function (p) {
        if (p && typeof p.then === 'function') {
            this.addLoading();
            p.then(this.removeLoading).catch(this.removeLoading);
        }
    };
    CascaderMenuItem.prototype.handleExpand = function (focusedFirstChild) {
        this.setLoadingIfNeed(this.props.onExpand(focusedFirstChild));
    };
    CascaderMenuItem.prototype.handleClick = function () {
        this.handleExpand(false);
    };
    CascaderMenuItem.prototype.handleMouseEnter = function () {
        this.handleExpand(false);
    };
    CascaderMenuItem.prototype.handleKeyDown = function (e) {
        if (!this.props.disabled) {
            if (e.keyCode === util_1.KEYCODE.RIGHT || e.keyCode === util_1.KEYCODE.ENTER) {
                if (this.props.canExpand) {
                    this.handleExpand(true);
                }
            }
            else if (e.keyCode === util_1.KEYCODE.LEFT || e.keyCode === util_1.KEYCODE.ESC) {
                this.props.onFold();
            }
            else if (e.keyCode === util_1.KEYCODE.SPACE) {
                this.handleExpand(false);
            }
        }
    };
    CascaderMenuItem.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, menu = _b.menu, disabled = _b.disabled, selected = _b.selected, onSelect = _b.onSelect, expanded = _b.expanded, canExpand = _b.canExpand, expandTriggerType = _b.expandTriggerType, checkable = _b.checkable, checked = _b.checked, indeterminate = _b.indeterminate, checkboxDisabled = _b.checkboxDisabled, onCheck = _b.onCheck, children = _b.children;
        var others = pickOthers(CascaderMenuItem.propTypes, this.props);
        var loading = this.state.loading;
        var itemProps = tslib_1.__assign({ className: (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "cascader-menu-item")] = true,
                _a["".concat(prefix, "expanded")] = expanded,
                _a[className] = !!className,
                _a)), disabled: disabled, menu: menu, onKeyDown: this.handleKeyDown, role: 'option' }, others);
        if (!disabled) {
            if (expandTriggerType === 'hover') {
                itemProps.onMouseEnter = this.handleMouseEnter;
            }
            else {
                itemProps.onClick = this.handleClick;
            }
        }
        var Item, title;
        if (checkable) {
            Item = menu_1.default.CheckboxItem;
            itemProps.checked = checked;
            itemProps.indeterminate = indeterminate;
            itemProps.checkboxDisabled = checkboxDisabled;
            itemProps.onChange = onCheck;
        }
        else {
            Item = menu_1.default.Item;
            itemProps.selected = selected;
            itemProps.onSelect = onSelect;
        }
        if (typeof children === 'string') {
            title = children;
        }
        return (react_1.default.createElement(Item, tslib_1.__assign({ title: title }, itemProps),
            children,
            canExpand ? (loading ? (react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "cascader-menu-icon-right ").concat(prefix, "cascader-menu-icon-loading"), type: "loading" })) : (react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "cascader-menu-icon-right ").concat(prefix, "cascader-menu-icon-expand"), type: "arrow-right" }))) : null));
    };
    CascaderMenuItem.menuChildType = 'item';
    CascaderMenuItem.propTypes = {
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.string,
        disabled: prop_types_1.default.bool,
        selected: prop_types_1.default.bool,
        onSelect: prop_types_1.default.func,
        expanded: prop_types_1.default.bool,
        canExpand: prop_types_1.default.bool,
        menu: prop_types_1.default.any,
        expandTriggerType: prop_types_1.default.oneOf(['click', 'hover']),
        onExpand: prop_types_1.default.func,
        onFold: prop_types_1.default.func,
        checkable: prop_types_1.default.bool,
        checked: prop_types_1.default.bool,
        indeterminate: prop_types_1.default.bool,
        checkboxDisabled: prop_types_1.default.bool,
        onCheck: prop_types_1.default.func,
        children: prop_types_1.default.node,
    };
    return CascaderMenuItem;
}(react_1.Component));
exports.default = CascaderMenuItem;
