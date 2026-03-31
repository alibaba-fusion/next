import { __assign, __extends, __rest } from "tslib";
import React, { Component, Children, cloneElement, } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Animate from '../../animate';
import Icon from '../../icon';
import { func, obj } from '../../util';
import Item from './item';
import SelectabelItem from './selectable-item';
import PopupItem from './popup-item';
import { getChildSelected } from './util';
var Expand = Animate.Expand;
var bindCtx = func.bindCtx;
var SubMenu = /** @class */ (function (_super) {
    __extends(SubMenu, _super);
    function SubMenu(props) {
        var _this = _super.call(this, props) || this;
        bindCtx(_this, [
            'handleMouseEnter',
            'handleMouseLeave',
            'handleClick',
            'handleOpen',
            'afterLeave',
        ]);
        return _this;
    }
    SubMenu.prototype.componentDidMount = function () {
        this.itemNode = findDOMNode(this);
    };
    SubMenu.prototype.afterLeave = function () {
        var _a = this.props, focused = _a.focused, root = _a.root;
        var focusable = root.props.focusable;
        if (focusable && focused) {
            this.itemNode.focus();
        }
    };
    SubMenu.prototype.getOpen = function () {
        var _a = this.props, _key = _a._key, root = _a.root;
        var openKeys = root.state.openKeys;
        return openKeys.indexOf(_key) > -1;
    };
    SubMenu.prototype.handleMouseEnter = function (e) {
        this.handleOpen(true);
        this.props.onMouseEnter && this.props.onMouseEnter(e);
    };
    SubMenu.prototype.handleMouseLeave = function (e) {
        this.handleOpen(false);
        this.props.onMouseLeave && this.props.onMouseLeave(e);
    };
    SubMenu.prototype.handleClick = function (e) {
        var _a = this.props, root = _a.root, selectable = _a.selectable;
        var selectMode = root.props.selectMode;
        if (selectMode && selectable) {
            e.stopPropagation();
        }
        var open = this.getOpen();
        this.handleOpen(!open);
    };
    SubMenu.prototype.handleOpen = function (open, triggerType, e) {
        var _a = this.props, _key = _a._key, root = _a.root;
        root.handleOpen(_key, open, triggerType, e);
    };
    SubMenu.prototype.passParentToChildren = function (children) {
        var _this = this;
        var _a = this.props, mode = _a.mode, root = _a.root;
        return Children.map(children, function (child) {
            // to fix https://github.com/alibaba-fusion/next/issues/952
            if (typeof child !== 'function' && typeof child !== 'object') {
                return child;
            }
            // @ts-expect-error FIXME: 上面的类型判断不正确，应该使用 React.isValidElement，这里先注释暴露问题
            return cloneElement(child, {
                parent: _this,
                parentMode: mode || root.props.mode,
            });
        });
    };
    SubMenu.prototype.renderInline = function () {
        var _a, _b, _c, _d;
        var _e = this.props, _key = _e._key, level = _e.level, inlineLevel = _e.inlineLevel, root = _e.root, className = _e.className, selectableFromProps = _e.selectable, label = _e.label, children = _e.children, noIcon = _e.noIcon, subMenuContentClassName = _e.subMenuContentClassName, propsTriggerType = _e.triggerType, parentMode = _e.parentMode;
        var _f = root.props, prefix = _f.prefix, selectMode = _f.selectMode, rootTriggerType = _f.triggerType, inlineArrowDirection = _f.inlineArrowDirection, expandAnimation = _f.expandAnimation, rtl = _f.rtl;
        var triggerType = propsTriggerType || rootTriggerType;
        var open = this.getOpen();
        var _g = root.state, selectedKeys = _g.selectedKeys, _k2n = _g._k2n;
        var isChildSelected = getChildSelected({
            _key: _key,
            _k2n: _k2n,
            selectMode: selectMode,
            selectedKeys: selectedKeys,
        });
        var others = obj.pickOthers(SubMenu.propTypes, this.props);
        var liProps = {
            className: cx((_a = {},
                _a["".concat(prefix, "menu-sub-menu-wrapper")] = true,
                _a), className),
        };
        var itemProps = {
            'aria-expanded': open,
            _key: _key,
            level: level,
            role: 'listitem',
            inlineLevel: inlineLevel,
            root: root,
            type: 'submenu',
            component: 'div',
            parentMode: parentMode,
            className: cx((_b = {},
                _b["".concat(prefix, "opened")] = open,
                _b["".concat(prefix, "child-selected")] = isChildSelected,
                _b)),
        };
        if (typeof label === 'string') {
            itemProps.title = label;
        }
        var arrorProps = {
            type: inlineArrowDirection === 'right' ? 'arrow-right' : 'arrow-down',
            className: cx((_c = {},
                _c["".concat(prefix, "menu-icon-arrow")] = true,
                _c["".concat(prefix, "menu-icon-arrow-down")] = inlineArrowDirection === 'down',
                _c["".concat(prefix, "menu-icon-arrow-right")] = inlineArrowDirection === 'right',
                _c["".concat(prefix, "open")] = open,
                _c)),
        };
        var selectable = !!selectMode && selectableFromProps;
        var NewItem = (selectable ? SelectabelItem : Item);
        if (triggerType === 'hover') {
            liProps.onMouseEnter = this.handleMouseEnter;
            liProps.onMouseLeave = this.handleMouseLeave;
        }
        else if (selectable) {
            arrorProps.onClick = this.handleClick;
        }
        else {
            itemProps.onClick = this.handleClick;
        }
        var newSubMenuContentClassName = cx((_d = {},
            _d["".concat(prefix, "menu-sub-menu")] = true,
            _d), subMenuContentClassName);
        var roleMenu = 'menu', roleItem = 'menuitem';
        if ('selectMode' in root.props) {
            roleMenu = 'listbox';
            roleItem = 'option';
        }
        var subMenu = open ? (React.createElement("ul", { role: roleMenu, dir: rtl ? 'rtl' : undefined, className: newSubMenuContentClassName }, this.passParentToChildren(children))) : null;
        return (
        // @ts-expect-error others.onSelect 签名不匹配
        React.createElement("li", __assign({ role: roleItem }, others, liProps),
            React.createElement(NewItem, __assign({}, itemProps),
                React.createElement("span", { className: "".concat(prefix, "menu-item-text") }, label),
                noIcon ? null : React.createElement(Icon, __assign({}, arrorProps))),
            expandAnimation ? (React.createElement(Expand, { animationAppear: false, afterLeave: this.afterLeave }, subMenu)) : (subMenu)));
    };
    SubMenu.prototype.renderPopup = function () {
        var _a;
        var _b = this
            .props, children = _b.children, subMenuContentClassName = _b.subMenuContentClassName, noIcon = _b.noIcon, others = __rest(_b, ["children", "subMenuContentClassName", "noIcon"]);
        var root = this.props.root;
        var _c = root.props, prefix = _c.prefix, popupClassName = _c.popupClassName, popupStyle = _c.popupStyle, rtl = _c.rtl;
        var newClassName = cx((_a = {},
            _a["".concat(prefix, "menu")] = true,
            _a["".concat(prefix, "ver")] = true,
            _a), popupClassName, subMenuContentClassName);
        // @ts-expect-error FIXME: PopupItem 并没有使用 rtl 参数，这里可以移除
        others.rtl = rtl;
        return (React.createElement(PopupItem, __assign({}, others, { noIcon: noIcon, hasSubMenu: true }),
            React.createElement("ul", { role: "menu", dir: rtl ? 'rtl' : undefined, className: newClassName, style: popupStyle }, this.passParentToChildren(children))));
    };
    SubMenu.prototype.render = function () {
        var _a = this.props, mode = _a.mode, root = _a.root;
        var newMode = mode || root.props.mode;
        return newMode === 'popup' ? this.renderPopup() : this.renderInline();
    };
    SubMenu.menuChildType = 'submenu';
    SubMenu.propTypes = {
        _key: PropTypes.string,
        root: PropTypes.object,
        level: PropTypes.number,
        inlineLevel: PropTypes.number,
        groupIndent: PropTypes.number,
        label: PropTypes.node,
        selectable: PropTypes.bool,
        mode: PropTypes.oneOf(['inline', 'popup']),
        noIcon: PropTypes.bool,
        children: PropTypes.node,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        subMenuContentClassName: PropTypes.string,
        triggerType: PropTypes.oneOf(['click', 'hover']),
        align: PropTypes.oneOf(['outside', 'follow']),
        parentMode: PropTypes.oneOf(['inline', 'popup']),
        parent: PropTypes.any,
    };
    SubMenu.defaultProps = {
        groupIndent: 0,
        noIcon: false,
        selectable: false,
    };
    return SubMenu;
}(Component));
export default SubMenu;
