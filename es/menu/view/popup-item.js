import { __assign, __extends, __rest } from "tslib";
import React, { Component, } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../icon';
import Overlay from '../../overlay';
import { func, obj, dom } from '../../util';
import Item from './item';
import SelectableItem from './selectable-item';
import { getChildSelected } from './util';
var bindCtx = func.bindCtx;
var setStyle = dom.setStyle;
var Popup = Overlay.Popup;
var PopupItem = /** @class */ (function (_super) {
    __extends(PopupItem, _super);
    function PopupItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpen = function (open, triggerType, e) {
            var _a = _this.props, _key = _a._key, root = _a.root;
            // @ts-expect-error FIXME: PopupProps 里 triggerType 不正确，待其修复后可删除该行
            root.handleOpen(_key, open, triggerType, e);
            var popupProps = _this.popupProps;
            popupProps.onVisibleChange && popupProps.onVisibleChange(open, triggerType, e);
        };
        bindCtx(_this, ['handleOpen', 'handlePopupOpen', 'handlePopupClose', 'getPopup']);
        return _this;
    }
    PopupItem.prototype.getPopup = function (ref) {
        this.popup = ref;
    };
    PopupItem.prototype.getOpen = function () {
        var _a = this.props, _key = _a._key, root = _a.root;
        var openKeys = root.state.openKeys;
        return openKeys.indexOf(_key) > -1;
    };
    PopupItem.prototype.getPopupProps = function () {
        var popupProps = this.props.root.props.popupProps;
        if (typeof popupProps === 'function') {
            popupProps = popupProps(this.props);
        }
        return popupProps;
    };
    PopupItem.prototype.handlePopupOpen = function () {
        var _a = this.props, root = _a.root, level = _a.level, align = _a.align, autoWidth = _a.autoWidth;
        var _b = root.props, rootPopupAutoWidth = _b.popupAutoWidth, rootPopupAlign = _b.popupAlign, direction = _b.direction;
        var popupAlign = align || rootPopupAlign;
        var popupAutoWidth = 'autoWidth' in this.props ? autoWidth : rootPopupAutoWidth;
        try {
            // avoid errors while dom removed and js executing
            var itemNode = findDOMNode(this);
            var menuNode = itemNode.parentNode;
            // @ts-expect-error FIXME: popup 类型改造完成后可删除该行
            this.popupNode = this.popup.getInstance().overlay.getInstance().getContentNode();
            root.popupNodes.push(this.popupNode);
            if (popupAutoWidth) {
                var targetNode = direction === 'hoz' && level === 1 ? itemNode : menuNode;
                if (targetNode.offsetWidth > this.popupNode.offsetWidth) {
                    setStyle(this.popupNode, 'width', "".concat(targetNode.offsetWidth, "px"));
                }
            }
            if (popupAlign === 'outside' && !(direction === 'hoz' && level === 1)) {
                setStyle(this.popupNode, 'height', "".concat(menuNode.offsetHeight, "px"));
                this.popupNode.firstElementChild &&
                    setStyle(this.popupNode.firstElementChild, 'overflow-y', 'auto');
            }
            // removeClass(this.popupNode, `${prefix}hide`);
            var popupProps = this.popupProps;
            popupProps.onOpen && popupProps.onOpen();
        }
        catch (error) {
            return null;
        }
    };
    PopupItem.prototype.handlePopupClose = function () {
        var root = this.props.root;
        var popupNodes = root.popupNodes;
        var index = popupNodes.indexOf(this.popupNode);
        index > -1 && popupNodes.splice(index, 1);
        var popupProps = this.popupProps;
        popupProps.onClose && popupProps.onClose();
    };
    PopupItem.prototype.renderItem = function (selectable, children, others) {
        var _a;
        var _b = this
            .props, _key = _b._key, root = _b.root, level = _b.level, inlineLevel = _b.inlineLevel, label = _b.label, className = _b.className;
        var _c = root.props, prefix = _c.prefix, selectMode = _c.selectMode;
        var NewItem = (selectable ? SelectableItem : Item);
        var open = this.getOpen();
        var _d = root.state, selectedKeys = _d.selectedKeys, _k2n = _d._k2n;
        var isChildSelected = getChildSelected({
            _key: _key,
            _k2n: _k2n,
            selectMode: selectMode,
            selectedKeys: selectedKeys,
        });
        var itemProps = {
            'aria-haspopup': true,
            'aria-expanded': open,
            _key: _key,
            root: root,
            level: level,
            inlineLevel: inlineLevel,
            type: 'submenu',
        };
        itemProps.className = cx((_a = {},
            _a["".concat(prefix, "opened")] = open,
            _a["".concat(prefix, "child-selected")] = isChildSelected,
            _a), className);
        return (React.createElement(NewItem, __assign({}, itemProps, others),
            React.createElement("span", { className: "".concat(prefix, "menu-item-text") }, label),
            children));
    };
    PopupItem.prototype.renderPopup = function (trigger, triggerType, positionProps, children) {
        var _this = this;
        var _a = this.props, root = _a.root, level = _a.level, selectable = _a.selectable, propCls = _a.className;
        var direction = root.props.direction;
        this.popupProps = this.getPopupProps();
        var open = this.getOpen();
        if (direction === 'hoz' && level === 1 && selectable) {
            positionProps.target = function () { return findDOMNode(_this); };
        }
        var posCls = positionProps.className, otherPostion = __rest(positionProps, ["className"]);
        var className = cx(propCls, posCls);
        return (React.createElement(Popup, __assign({ ref: this.getPopup }, otherPostion, this.popupProps, { canCloseByEsc: false, trigger: trigger, triggerType: triggerType, visible: open, pinFollowBaseElementWhenFixed: true, onVisibleChange: this.handleOpen, onOpen: this.handlePopupOpen, onClose: this.handlePopupClose }),
            React.createElement("div", { className: className }, children)));
    };
    PopupItem.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, root = _b.root, level = _b.level, hasSubMenu = _b.hasSubMenu, selectableFromProps = _b.selectable, children = _b.children, triggerType = _b.triggerType, align = _b.align, noIcon = _b.noIcon;
        var others = obj.pickOthers(PopupItem.propTypes, this.props);
        var _c = root.props, prefix = _c.prefix, selectMode = _c.selectMode, direction = _c.direction, rootPopupAlign = _c.popupAlign, rootTriggerType = _c.triggerType;
        var popupAlign = align || rootPopupAlign;
        var newTriggerType = triggerType || (hasSubMenu ? rootTriggerType : 'hover');
        var newChildren = Array.isArray(children) ? children[0] : children;
        // let newChildren = Array.isArray(children) ? children[0] : children;
        // newChildren = cloneElement(newChildren, {
        //     className: cx({
        //         [`${prefix}menu-popup-content`]: true,
        //         [newChildren.props.className]: !!newChildren.props.className,
        //         [`${prefix}hide`]: popupAutoWidth || popupAlign === 'outside'
        //     })
        // });
        var selectable = selectMode && selectableFromProps;
        var triggerIsIcon = selectable && newTriggerType === 'click';
        var open = this.getOpen();
        var positionProps = {};
        var arrowProps;
        if (direction === 'hoz' && level === 1) {
            positionProps.align = 'tl bl';
            positionProps.className = "".concat(prefix, "menu-spacing-tb");
            arrowProps = {
                type: 'arrow-down',
                className: cx((_a = {},
                    _a["".concat(prefix, "menu-hoz-icon-arrow")] = true,
                    _a["".concat(prefix, "open")] = open,
                    _a)),
            };
        }
        else {
            if (popupAlign === 'outside') {
                positionProps.target = function () {
                    return findDOMNode(root);
                };
                positionProps.align = 'tl tr';
                positionProps.className = "".concat(prefix, "menu-spacing-lr ").concat(prefix, "menu-outside");
            }
            else {
                if (triggerIsIcon) {
                    positionProps.target = function () {
                        return findDOMNode(_this);
                    };
                }
                positionProps.align = 'tl tr';
                positionProps.className = "".concat(prefix, "menu-spacing-lr");
            }
            arrowProps = {
                type: 'arrow-right',
                className: "".concat(prefix, "menu-icon-arrow ").concat(prefix, "menu-symbol-popupfold"),
            };
        }
        var arrow = React.createElement(Icon, __assign({}, arrowProps));
        var trigger = triggerIsIcon
            ? arrow
            : this.renderItem(selectable, noIcon ? null : arrow, others);
        var popup = this.renderPopup(trigger, newTriggerType, positionProps, newChildren);
        return triggerIsIcon ? this.renderItem(selectable, popup, others) : popup;
    };
    PopupItem.menuChildType = 'submenu';
    PopupItem.propTypes = {
        _key: PropTypes.string,
        root: PropTypes.object,
        level: PropTypes.number,
        hasSubMenu: PropTypes.bool,
        noIcon: PropTypes.bool,
        rtl: PropTypes.bool,
        selectable: PropTypes.bool,
        /**
         * 标签内容
         */
        label: PropTypes.node,
        /**
         * 自定义弹层内容
         */
        children: PropTypes.node,
        className: PropTypes.string,
        /**
         * 子菜单打开的触发行为
         */
        triggerType: PropTypes.oneOf(['click', 'hover']),
        align: PropTypes.oneOf(['outside', 'follow']),
        autoWidth: PropTypes.bool,
    };
    PopupItem.defaultProps = {
        selectable: false,
        noIcon: false,
    };
    return PopupItem;
}(Component));
export default PopupItem;
