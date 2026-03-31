import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Menu from '../menu';
/**
 * Nav
 * @remarks 继承自 `Menu` 的能力请查看 `Menu` 文档
 */
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.getMenuRef = function (ref) {
            _this.menu = ref;
        };
        return _this;
    }
    Nav.prototype.getChildContext = function () {
        var _a = this.props, prefix = _a.prefix, direction = _a.direction, mode = _a.mode, iconOnly = _a.iconOnly, iconOnlyWidth = _a.iconOnlyWidth, iconTextOnly = _a.iconTextOnly, hasTooltip = _a.hasTooltip, hasArrow = _a.hasArrow;
        var isCollapse = this.context.isCollapse;
        return {
            prefix: prefix,
            mode: direction === 'hoz' ? 'popup' : mode,
            iconOnly: 'iconOnly' in this.props ? iconOnly : isCollapse,
            iconOnlyWidth: 'iconOnlyWidth' in this.props ? iconOnlyWidth : undefined,
            iconTextOnly: iconTextOnly,
            hasTooltip: hasTooltip,
            hasArrow: hasArrow,
        };
    };
    Nav.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, className = _c.className, style = _c.style, children = _c.children, type = _c.type, direction = _c.direction, activeDirection = _c.activeDirection, mode = _c.mode, triggerType = _c.triggerType, inlineIndent = _c.inlineIndent, openMode = _c.openMode, popupAlign = _c.popupAlign, popupClassName = _c.popupClassName, iconOnly = _c.iconOnly, iconOnlyWidth = _c.iconOnlyWidth, iconTextOnly = _c.iconTextOnly, hasArrow = _c.hasArrow, hasTooltip = _c.hasTooltip, embeddable = _c.embeddable, popupProps = _c.popupProps, rtl = _c.rtl, others = __rest(_c, ["prefix", "className", "style", "children", "type", "direction", "activeDirection", "mode", "triggerType", "inlineIndent", "openMode", "popupAlign", "popupClassName", "iconOnly", "iconOnlyWidth", "iconTextOnly", "hasArrow", "hasTooltip", "embeddable", "popupProps", "rtl"]);
        var isCollapse = this.context.isCollapse;
        var newIconOnly = 'iconOnly' in this.props ? iconOnly : isCollapse;
        var realActiveDirection = activeDirection;
        if (realActiveDirection &&
            ((direction === 'hoz' &&
                (realActiveDirection === 'left' || realActiveDirection === 'right')) ||
                (direction === 'ver' &&
                    (realActiveDirection === 'top' || realActiveDirection === 'bottom')))) {
            realActiveDirection = null;
        }
        if (!newIconOnly && realActiveDirection === undefined) {
            realActiveDirection =
                direction === 'hoz' ? 'bottom' : type === 'line' ? 'right' : 'left';
        }
        var cls = classNames((_a = {},
            _a["".concat(prefix, "nav")] = true,
            _a["".concat(prefix).concat(type)] = type,
            _a["".concat(prefix, "active")] = realActiveDirection,
            _a["".concat(prefix).concat(realActiveDirection)] = realActiveDirection,
            _a["".concat(prefix, "icon-only")] = newIconOnly,
            _a["".concat(prefix, "icon-only-text")] = newIconOnly && iconTextOnly,
            _a["".concat(prefix, "custom-icon-only-width")] = newIconOnly && 'iconOnlyWidth' in this.props,
            _a["".concat(prefix, "no-arrow")] = !hasArrow,
            _a["".concat(prefix, "nav-embeddable")] = embeddable,
            _a[className] = !!className,
            _a));
        var newStyle = newIconOnly ? __assign(__assign({}, style), { width: iconOnlyWidth || 58 }) : style;
        var props = {
            prefix: prefix,
            direction: direction,
            openMode: openMode,
            triggerType: triggerType,
            mode: direction === 'hoz' ? 'popup' : mode,
            popupAlign: direction === 'hoz' ? 'follow' : popupAlign,
            inlineIndent: newIconOnly ? 0 : inlineIndent,
            hasSelectedIcon: false,
            popupAutoWidth: true,
            selectMode: 'single',
            itemClassName: "".concat(prefix, "nav-item"),
            popupClassName: classNames((_b = {},
                _b[cls.replace("".concat(prefix, "icon-only"), '').replace("".concat(prefix, "nav-embeddable"), '')] = mode === 'popup',
                _b["".concat(prefix, "icon-only")] = newIconOnly && mode === 'inline',
                _b[popupClassName] = !!popupClassName,
                _b)),
            popupProps: function () {
                return __assign({}, popupProps);
            },
        };
        return (React.createElement(Menu, __assign({ className: cls, style: newStyle }, props, others, { ref: this.getMenuRef }), children));
    };
    Nav.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.node,
        type: PropTypes.oneOf(['normal', 'primary', 'secondary', 'line']),
        direction: PropTypes.oneOf(['hoz', 'ver']),
        hozAlign: PropTypes.oneOf(['left', 'right']),
        activeDirection: PropTypes.oneOf([null, 'top', 'bottom', 'left', 'right']),
        mode: PropTypes.oneOf(['inline', 'popup']),
        triggerType: PropTypes.oneOf(['click', 'hover']),
        inlineIndent: PropTypes.number,
        defaultOpenAll: PropTypes.bool,
        openMode: PropTypes.oneOf(['single', 'multiple']),
        selectedKeys: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultSelectedKeys: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        onSelect: PropTypes.func,
        popupAlign: PropTypes.oneOf(['follow', 'outside']),
        popupClassName: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        iconTextOnly: PropTypes.bool,
        hasArrow: PropTypes.bool,
        hasTooltip: PropTypes.bool,
        header: PropTypes.node,
        footer: PropTypes.node,
        embeddable: PropTypes.bool,
        popupProps: PropTypes.object,
    };
    Nav.defaultProps = {
        prefix: 'next-',
        pure: false,
        type: 'normal',
        direction: 'ver',
        hozAlign: 'left',
        mode: 'inline',
        triggerType: 'click',
        inlineIndent: 20,
        defaultOpenAll: false,
        openMode: 'multiple',
        defaultSelectedKeys: [],
        popupAlign: 'follow',
        hasTooltip: false,
        embeddable: false,
        hasArrow: true,
        popupProps: {},
    };
    Nav.childContextTypes = {
        prefix: PropTypes.string,
        mode: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        iconTextOnly: PropTypes.bool,
        hasTooltip: PropTypes.bool,
        hasArrow: PropTypes.bool,
    };
    Nav.contextTypes = {
        isCollapse: PropTypes.bool,
    };
    Nav.displayName = 'Nav';
    return Nav;
}(Component));
export default ConfigProvider.config(Nav);
