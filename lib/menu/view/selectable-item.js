"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var util_1 = require("../../util");
var item_1 = tslib_1.__importDefault(require("./item"));
var bindCtx = util_1.func.bindCtx;
var pickOthers = util_1.obj.pickOthers;
var SelectableItem = /** @class */ (function (_super) {
    tslib_1.__extends(SelectableItem, _super);
    function SelectableItem(props) {
        var _this = _super.call(this, props) || this;
        bindCtx(_this, ['handleKeyDown', 'handleClick']);
        return _this;
    }
    SelectableItem.prototype.getSelected = function () {
        var _a = this.props, _key = _a._key, root = _a.root, selected = _a.selected;
        var selectMode = root.props.selectMode;
        var selectedKeys = root.state.selectedKeys;
        return selected || (!!selectMode && selectedKeys.indexOf(_key) > -1);
    };
    SelectableItem.prototype.handleSelect = function (e) {
        var _a = this.props, _key = _a._key, root = _a.root, onSelect = _a.onSelect;
        if (onSelect) {
            onSelect(!this.getSelected(), this, e);
        }
        else {
            root.handleSelect(_key, !this.getSelected(), this);
        }
    };
    SelectableItem.prototype.handleKeyDown = function (e) {
        if (e.keyCode === util_1.KEYCODE.SPACE && !this.props.disabled) {
            this.handleSelect(e);
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    };
    SelectableItem.prototype.handleClick = function (e) {
        this.handleSelect(e);
        this.props.onClick && this.props.onClick(e);
    };
    SelectableItem.prototype.renderSelectedIcon = function (selected) {
        var _a;
        var _b = this
            .props, root = _b.root, inlineIndent = _b.inlineIndent, needIndent = _b.needIndent, hasSelectedIcon = _b.hasSelectedIcon, isSelectIconRight = _b.isSelectIconRight, type = _b.type;
        var _c = root.props, prefix = _c.prefix, rootSelectedIcon = _c.hasSelectedIcon, rootSelectIconRight = _c.isSelectIconRight, icons = _c.icons;
        var iconsSelect = icons.select;
        if (!(0, react_1.isValidElement)(icons.select) && icons.select) {
            iconsSelect = react_1.default.createElement("span", null, icons.select);
        }
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "menu-icon-selected")] = true,
            _a["".concat(prefix, "menu-symbol-icon-selected")] = !iconsSelect,
            _a["".concat(prefix, "menu-icon-right")] = ('isSelectIconRight' in this.props ? isSelectIconRight : rootSelectIconRight) &&
                type !== 'submenu',
            _a));
        return ('hasSelectedIcon' in this.props ? hasSelectedIcon : rootSelectedIcon) && selected
            ? react_1.default.cloneElement(iconsSelect || react_1.default.createElement(icon_1.default, { type: "select" }), {
                // @ts-expect-error FIXME: inlineIndent 可能为 undefined，此时表达式恒为 false，这里需要明确这个逻辑
                style: needIndent && inlineIndent > 0 ? { left: "".concat(inlineIndent, "px") } : null,
                className: cls,
            })
            : null;
    };
    SelectableItem.prototype.render = function () {
        var _a;
        var _b = this
            .props, _key = _b._key, root = _b.root, className = _b.className, disabled = _b.disabled, helper = _b.helper, children = _b.children, needIndent = _b.needIndent;
        var prefix = root.props.prefix;
        var others = pickOthers(SelectableItem.propTypes, this.props);
        var selected = this.getSelected();
        var newProps = tslib_1.__assign({ _key: _key, root: root, disabled: disabled, type: 'item', className: (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "selected")] = selected,
                _a), className), onKeyDown: this.handleKeyDown, onClick: !disabled ? this.handleClick : this.props.onClick, needIndent: needIndent }, others);
        if (!('title' in newProps) && typeof children === 'string') {
            newProps.title = children;
        }
        var textProps = {};
        if ('selectMode' in root.props) {
            textProps['aria-selected'] = selected;
        }
        return (react_1.default.createElement(item_1.default, tslib_1.__assign({}, newProps),
            this.renderSelectedIcon(selected),
            react_1.default.createElement("span", tslib_1.__assign({ className: "".concat(prefix, "menu-item-text") }, textProps), children),
            helper ? react_1.default.createElement("div", { className: "".concat(prefix, "menu-item-helper") }, helper) : null));
    };
    SelectableItem.menuChildType = 'item';
    SelectableItem.propTypes = {
        _key: prop_types_1.default.string,
        root: prop_types_1.default.object,
        selected: prop_types_1.default.bool,
        onSelect: prop_types_1.default.func,
        inlineIndent: prop_types_1.default.number,
        disabled: prop_types_1.default.bool,
        helper: prop_types_1.default.node,
        children: prop_types_1.default.node,
        className: prop_types_1.default.string,
        onKeyDown: prop_types_1.default.func,
        onClick: prop_types_1.default.func,
        needIndent: prop_types_1.default.bool,
        hasSelectedIcon: prop_types_1.default.bool,
        isSelectIconRight: prop_types_1.default.bool,
        icons: prop_types_1.default.object,
    };
    SelectableItem.defaultProps = {
        disabled: false,
        needIndent: true,
        icons: {},
    };
    return SelectableItem;
}(react_1.Component));
exports.default = SelectableItem;
