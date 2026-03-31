"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var menu_1 = tslib_1.__importDefault(require("../menu"));
/**
 * Nav
 * @remarks 继承自 `Menu` 的能力请查看 `Menu` 文档
 */
var Nav = /** @class */ (function (_super) {
    tslib_1.__extends(Nav, _super);
    function Nav() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
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
        var _c = this.props, prefix = _c.prefix, className = _c.className, style = _c.style, children = _c.children, type = _c.type, direction = _c.direction, activeDirection = _c.activeDirection, mode = _c.mode, triggerType = _c.triggerType, inlineIndent = _c.inlineIndent, openMode = _c.openMode, popupAlign = _c.popupAlign, popupClassName = _c.popupClassName, iconOnly = _c.iconOnly, iconOnlyWidth = _c.iconOnlyWidth, iconTextOnly = _c.iconTextOnly, hasArrow = _c.hasArrow, hasTooltip = _c.hasTooltip, embeddable = _c.embeddable, popupProps = _c.popupProps, rtl = _c.rtl, others = tslib_1.__rest(_c, ["prefix", "className", "style", "children", "type", "direction", "activeDirection", "mode", "triggerType", "inlineIndent", "openMode", "popupAlign", "popupClassName", "iconOnly", "iconOnlyWidth", "iconTextOnly", "hasArrow", "hasTooltip", "embeddable", "popupProps", "rtl"]);
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
        var cls = (0, classnames_1.default)((_a = {},
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
        var newStyle = newIconOnly ? tslib_1.__assign(tslib_1.__assign({}, style), { width: iconOnlyWidth || 58 }) : style;
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
            popupClassName: (0, classnames_1.default)((_b = {},
                _b[cls.replace("".concat(prefix, "icon-only"), '').replace("".concat(prefix, "nav-embeddable"), '')] = mode === 'popup',
                _b["".concat(prefix, "icon-only")] = newIconOnly && mode === 'inline',
                _b[popupClassName] = !!popupClassName,
                _b)),
            popupProps: function () {
                return tslib_1.__assign({}, popupProps);
            },
        };
        return (react_1.default.createElement(menu_1.default, tslib_1.__assign({ className: cls, style: newStyle }, props, others, { ref: this.getMenuRef }), children));
    };
    Nav.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object,
        children: prop_types_1.default.node,
        type: prop_types_1.default.oneOf(['normal', 'primary', 'secondary', 'line']),
        direction: prop_types_1.default.oneOf(['hoz', 'ver']),
        hozAlign: prop_types_1.default.oneOf(['left', 'right']),
        activeDirection: prop_types_1.default.oneOf([null, 'top', 'bottom', 'left', 'right']),
        mode: prop_types_1.default.oneOf(['inline', 'popup']),
        triggerType: prop_types_1.default.oneOf(['click', 'hover']),
        inlineIndent: prop_types_1.default.number,
        defaultOpenAll: prop_types_1.default.bool,
        openMode: prop_types_1.default.oneOf(['single', 'multiple']),
        selectedKeys: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        defaultSelectedKeys: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        onSelect: prop_types_1.default.func,
        popupAlign: prop_types_1.default.oneOf(['follow', 'outside']),
        popupClassName: prop_types_1.default.string,
        iconOnly: prop_types_1.default.bool,
        iconOnlyWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        iconTextOnly: prop_types_1.default.bool,
        hasArrow: prop_types_1.default.bool,
        hasTooltip: prop_types_1.default.bool,
        header: prop_types_1.default.node,
        footer: prop_types_1.default.node,
        embeddable: prop_types_1.default.bool,
        popupProps: prop_types_1.default.object,
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
        prefix: prop_types_1.default.string,
        mode: prop_types_1.default.string,
        iconOnly: prop_types_1.default.bool,
        iconOnlyWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        iconTextOnly: prop_types_1.default.bool,
        hasTooltip: prop_types_1.default.bool,
        hasArrow: prop_types_1.default.bool,
    };
    Nav.contextTypes = {
        isCollapse: prop_types_1.default.bool,
    };
    Nav.displayName = 'Nav';
    return Nav;
}(react_1.Component));
exports.default = config_provider_1.default.config(Nav);
