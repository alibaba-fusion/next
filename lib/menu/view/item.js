"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var util_1 = require("../../util");
var bindCtx = util_1.func.bindCtx;
var pickOthers = util_1.obj.pickOthers;
var Item = /** @class */ (function (_super) {
    tslib_1.__extends(Item, _super);
    function Item(props) {
        var _this = _super.call(this, props) || this;
        bindCtx(_this, ['handleClick', 'handleKeyDown']);
        return _this;
    }
    Item.prototype.componentDidMount = function () {
        this.itemNode = (0, react_dom_1.findDOMNode)(this);
        var _a = this.props, parentMode = _a.parentMode, root = _a.root, menu = _a.menu;
        if (menu) {
            this.menuNode = (0, react_dom_1.findDOMNode)(menu);
        }
        else if (parentMode === 'popup') {
            this.menuNode = this.itemNode.parentNode;
        }
        else {
            this.menuNode = (0, react_dom_1.findDOMNode)(root);
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
                case util_1.KEYCODE.ENTER: {
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
            : (0, classnames_1.default)((_a = {},
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
            others.style = tslib_1.__assign(tslib_1.__assign({}, (others.style || {})), (_b = {}, _b[paddingProp] = "".concat(inlineLevel * inlineIndent - (groupIndent || 0) * 0.4 * inlineIndent, "px"), _b));
        }
        var TagName = component;
        var role = 'menuitem';
        if ('selectMode' in root.props) {
            role = 'option';
        }
        return (react_1.default.createElement(TagName, tslib_1.__assign({ role: role, title: this.getTitle(children) }, others, { className: newClassName, onClick: this.handleClick, onKeyDown: this.handleKeyDown }),
            react_1.default.createElement("div", { className: "".concat(prefix, "menu-item-inner") }, children)));
    };
    Item.propTypes = {
        _key: prop_types_1.default.string,
        level: prop_types_1.default.number,
        inlineLevel: prop_types_1.default.number,
        groupIndent: prop_types_1.default.number,
        root: prop_types_1.default.object,
        menu: prop_types_1.default.any,
        parent: prop_types_1.default.object,
        parentMode: prop_types_1.default.oneOf(['inline', 'popup']),
        type: prop_types_1.default.oneOf(['submenu', 'item']),
        component: prop_types_1.default.string,
        disabled: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        onClick: prop_types_1.default.func,
        onKeyDown: prop_types_1.default.func,
        needIndent: prop_types_1.default.bool,
        replaceClassName: prop_types_1.default.bool,
    };
    Item.defaultProps = {
        component: 'li',
        groupIndent: 0,
        replaceClassName: false,
        needIndent: true,
    };
    return Item;
}(react_1.Component));
exports.default = Item;
