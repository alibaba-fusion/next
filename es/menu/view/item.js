import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { func, obj, KEYCODE } from '../../util';
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(props) {
        var _this = _super.call(this, props) || this;
        bindCtx(_this, ['handleClick', 'handleKeyDown']);
        return _this;
    }
    Item.prototype.componentDidMount = function () {
        this.itemNode = findDOMNode(this);
        var _a = this.props, parentMode = _a.parentMode, root = _a.root, menu = _a.menu;
        if (menu) {
            this.menuNode = findDOMNode(menu);
        }
        else if (parentMode === 'popup') {
            this.menuNode = this.itemNode.parentNode;
        }
        else {
            this.menuNode = findDOMNode(root);
            var _b = root.props, prefix = _b.prefix, header = _b.header, footer = _b.footer;
            if (header || footer) {
                this.menuNode = this.menuNode.querySelector(".".concat(prefix, "menu-content"));
            }
        }
        this.setFocus();
    };
    Item.prototype.componentDidUpdate = function () {
        var root = this.props.root;
        if (root.props.focusable && root.state.focusedKey !== this.lastFocusedKey) {
            this.setFocus();
        }
    };
    Item.prototype.focusable = function () {
        var _a = this.props, root = _a.root, type = _a.type, disabled = _a.disabled;
        var focusable = root.props.focusable;
        return focusable && (type === 'submenu' || !disabled);
    };
    Item.prototype.getFocused = function () {
        var _a = this.props, _key = _a._key, root = _a.root;
        var focusedKey = root.state.focusedKey;
        return focusedKey === _key;
    };
    Item.prototype.setFocus = function () {
        var focused = this.getFocused();
        this.lastFocusedKey = this.props.root.state.focusedKey;
        if (focused) {
            if (this.focusable()) {
                this.itemNode.focus({ preventScroll: true });
            }
            if (this.menuNode && this.menuNode.scrollHeight > this.menuNode.clientHeight) {
                var scrollBottom = this.menuNode.clientHeight + this.menuNode.scrollTop;
                var itemBottom = this.itemNode.offsetTop + this.itemNode.offsetHeight;
                if (itemBottom > scrollBottom) {
                    this.menuNode.scrollTop = itemBottom - this.menuNode.clientHeight;
                }
                else if (this.itemNode.offsetTop < this.menuNode.scrollTop) {
                    this.menuNode.scrollTop = this.itemNode.offsetTop;
                }
            }
        }
    };
    Item.prototype.handleClick = function (e) {
        e.stopPropagation();
        var _a = this.props, _key = _a._key, root = _a.root, disabled = _a.disabled;
        if (!disabled) {
            root.handleItemClick(_key, this, e);
            this.props.onClick && this.props.onClick(e);
        }
        else {
            e.preventDefault();
        }
    };
    Item.prototype.handleKeyDown = function (e) {
        var _a = this.props, _key = _a._key, root = _a.root, type = _a.type;
        if (this.focusable()) {
            root.handleItemKeyDown(_key, type, this, e);
            switch (e.keyCode) {
                case KEYCODE.ENTER: {
                    if (!(type === 'submenu')) {
                        this.handleClick(e);
                    }
                    break;
                }
            }
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    };
    Item.prototype.getTitle = function (children) {
        if (typeof children === 'string') {
            return children;
        }
        return;
    };
    Item.prototype.render = function () {
        var _a, _b;
        var _c = this.props, inlineLevel = _c.inlineLevel, root = _c.root, replaceClassName = _c.replaceClassName, groupIndent = _c.groupIndent, component = _c.component, disabled = _c.disabled, className = _c.className, children = _c.children, needIndent = _c.needIndent, parentMode = _c.parentMode, _key = _c._key;
        var others = pickOthers(Item.propTypes, this.props);
        var _d = root.props, prefix = _d.prefix, focusable = _d.focusable, inlineIndent = _d.inlineIndent, itemClassName = _d.itemClassName, rtl = _d.rtl;
        var focused = this.getFocused();
        var newClassName = replaceClassName
            ? className
            : cx((_a = {},
                _a["".concat(prefix, "menu-item")] = true,
                _a["".concat(prefix, "disabled")] = disabled,
                _a["".concat(prefix, "focused")] = !focusable && focused,
                _a), itemClassName, className);
        if (disabled) {
            others['aria-disabled'] = true;
            others['aria-hidden'] = true;
        }
        others.tabIndex = root.state.tabbableKey === _key ? 0 : -1;
        if (parentMode === 'inline' && inlineLevel > 1 && inlineIndent > 0 && needIndent) {
            var paddingProp = rtl ? 'paddingRight' : 'paddingLeft';
            others.style = __assign(__assign({}, (others.style || {})), (_b = {}, _b[paddingProp] = "".concat(inlineLevel * inlineIndent - (groupIndent || 0) * 0.4 * inlineIndent, "px"), _b));
        }
        var TagName = component;
        var role = 'menuitem';
        if ('selectMode' in root.props) {
            role = 'option';
        }
        return (React.createElement(TagName, __assign({ role: role, title: this.getTitle(children) }, others, { className: newClassName, onClick: this.handleClick, onKeyDown: this.handleKeyDown }),
            React.createElement("div", { className: "".concat(prefix, "menu-item-inner") }, children)));
    };
    Item.propTypes = {
        _key: PropTypes.string,
        level: PropTypes.number,
        inlineLevel: PropTypes.number,
        groupIndent: PropTypes.number,
        root: PropTypes.object,
        menu: PropTypes.any,
        parent: PropTypes.object,
        parentMode: PropTypes.oneOf(['inline', 'popup']),
        type: PropTypes.oneOf(['submenu', 'item']),
        component: PropTypes.string,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        onClick: PropTypes.func,
        onKeyDown: PropTypes.func,
        needIndent: PropTypes.bool,
        replaceClassName: PropTypes.bool,
    };
    Item.defaultProps = {
        component: 'li',
        groupIndent: 0,
        replaceClassName: false,
        needIndent: true,
    };
    return Item;
}(Component));
export default Item;
