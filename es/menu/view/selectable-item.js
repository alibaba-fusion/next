import { __assign, __extends } from "tslib";
import React, { Component, isValidElement, } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../icon';
import { func, obj, KEYCODE } from '../../util';
import Item from './item';
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var SelectableItem = /** @class */ (function (_super) {
    __extends(SelectableItem, _super);
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
        if (e.keyCode === KEYCODE.SPACE && !this.props.disabled) {
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
        if (!isValidElement(icons.select) && icons.select) {
            iconsSelect = React.createElement("span", null, icons.select);
        }
        var cls = cx((_a = {},
            _a["".concat(prefix, "menu-icon-selected")] = true,
            _a["".concat(prefix, "menu-symbol-icon-selected")] = !iconsSelect,
            _a["".concat(prefix, "menu-icon-right")] = ('isSelectIconRight' in this.props ? isSelectIconRight : rootSelectIconRight) &&
                type !== 'submenu',
            _a));
        return ('hasSelectedIcon' in this.props ? hasSelectedIcon : rootSelectedIcon) && selected
            ? React.cloneElement(iconsSelect || React.createElement(Icon, { type: "select" }), {
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
        var newProps = __assign({ _key: _key, root: root, disabled: disabled, type: 'item', className: cx((_a = {},
                _a["".concat(prefix, "selected")] = selected,
                _a), className), onKeyDown: this.handleKeyDown, onClick: !disabled ? this.handleClick : this.props.onClick, needIndent: needIndent }, others);
        if (!('title' in newProps) && typeof children === 'string') {
            newProps.title = children;
        }
        var textProps = {};
        if ('selectMode' in root.props) {
            textProps['aria-selected'] = selected;
        }
        return (React.createElement(Item, __assign({}, newProps),
            this.renderSelectedIcon(selected),
            React.createElement("span", __assign({ className: "".concat(prefix, "menu-item-text") }, textProps), children),
            helper ? React.createElement("div", { className: "".concat(prefix, "menu-item-helper") }, helper) : null));
    };
    SelectableItem.menuChildType = 'item';
    SelectableItem.propTypes = {
        _key: PropTypes.string,
        root: PropTypes.object,
        selected: PropTypes.bool,
        onSelect: PropTypes.func,
        inlineIndent: PropTypes.number,
        disabled: PropTypes.bool,
        helper: PropTypes.node,
        children: PropTypes.node,
        className: PropTypes.string,
        onKeyDown: PropTypes.func,
        onClick: PropTypes.func,
        needIndent: PropTypes.bool,
        hasSelectedIcon: PropTypes.bool,
        isSelectIconRight: PropTypes.bool,
        icons: PropTypes.object,
    };
    SelectableItem.defaultProps = {
        disabled: false,
        needIndent: true,
        icons: {},
    };
    return SelectableItem;
}(Component));
export default SelectableItem;
