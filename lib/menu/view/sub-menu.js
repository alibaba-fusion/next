"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var animate_1 = tslib_1.__importDefault(require("../../animate"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var util_1 = require("../../util");
var item_1 = tslib_1.__importDefault(require("./item"));
var selectable_item_1 = tslib_1.__importDefault(require("./selectable-item"));
var popup_item_1 = tslib_1.__importDefault(require("./popup-item"));
var util_2 = require("./util");
var Expand = animate_1.default.Expand;
var bindCtx = util_1.func.bindCtx;
var SubMenu = /** @class */ (function (_super) {
    tslib_1.__extends(SubMenu, _super);
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
        this.itemNode = (0, react_dom_1.findDOMNode)(this);
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
        return react_1.Children.map(children, function (child) {
            // to fix https://github.com/alibaba-fusion/next/issues/952
            if (typeof child !== 'function' && typeof child !== 'object') {
                return child;
            }
            // @ts-expect-error FIXME: 上面的类型判断不正确，应该使用 React.isValidElement，这里先注释暴露问题
            return (0, react_1.cloneElement)(child, {
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
        var isChildSelected = (0, util_2.getChildSelected)({
            _key: _key,
            _k2n: _k2n,
            selectMode: selectMode,
            selectedKeys: selectedKeys,
        });
        var others = util_1.obj.pickOthers(SubMenu.propTypes, this.props);
        var liProps = {
            className: (0, classnames_1.default)((_a = {},
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
            className: (0, classnames_1.default)((_b = {},
                _b["".concat(prefix, "opened")] = open,
                _b["".concat(prefix, "child-selected")] = isChildSelected,
                _b)),
        };
        if (typeof label === 'string') {
            itemProps.title = label;
        }
        var arrorProps = {
            type: inlineArrowDirection === 'right' ? 'arrow-right' : 'arrow-down',
            className: (0, classnames_1.default)((_c = {},
                _c["".concat(prefix, "menu-icon-arrow")] = true,
                _c["".concat(prefix, "menu-icon-arrow-down")] = inlineArrowDirection === 'down',
                _c["".concat(prefix, "menu-icon-arrow-right")] = inlineArrowDirection === 'right',
                _c["".concat(prefix, "open")] = open,
                _c)),
        };
        var selectable = !!selectMode && selectableFromProps;
        var NewItem = (selectable ? selectable_item_1.default : item_1.default);
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
        var newSubMenuContentClassName = (0, classnames_1.default)((_d = {},
            _d["".concat(prefix, "menu-sub-menu")] = true,
            _d), subMenuContentClassName);
        var roleMenu = 'menu', roleItem = 'menuitem';
        if ('selectMode' in root.props) {
            roleMenu = 'listbox';
            roleItem = 'option';
        }
        var subMenu = open ? (react_1.default.createElement("ul", { role: roleMenu, dir: rtl ? 'rtl' : undefined, className: newSubMenuContentClassName }, this.passParentToChildren(children))) : null;
        return (
        // @ts-expect-error others.onSelect 签名不匹配
        react_1.default.createElement("li", tslib_1.__assign({ role: roleItem }, others, liProps),
            react_1.default.createElement(NewItem, tslib_1.__assign({}, itemProps),
                react_1.default.createElement("span", { className: "".concat(prefix, "menu-item-text") }, label),
                noIcon ? null : react_1.default.createElement(icon_1.default, tslib_1.__assign({}, arrorProps))),
            expandAnimation ? (react_1.default.createElement(Expand, { animationAppear: false, afterLeave: this.afterLeave }, subMenu)) : (subMenu)));
    };
    SubMenu.prototype.renderPopup = function () {
        var _a;
        var _b = this
            .props, children = _b.children, subMenuContentClassName = _b.subMenuContentClassName, noIcon = _b.noIcon, others = tslib_1.__rest(_b, ["children", "subMenuContentClassName", "noIcon"]);
        var root = this.props.root;
        var _c = root.props, prefix = _c.prefix, popupClassName = _c.popupClassName, popupStyle = _c.popupStyle, rtl = _c.rtl;
        var newClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "menu")] = true,
            _a["".concat(prefix, "ver")] = true,
            _a), popupClassName, subMenuContentClassName);
        // @ts-expect-error FIXME: PopupItem 并没有使用 rtl 参数，这里可以移除
        others.rtl = rtl;
        return (react_1.default.createElement(popup_item_1.default, tslib_1.__assign({}, others, { noIcon: noIcon, hasSubMenu: true }),
            react_1.default.createElement("ul", { role: "menu", dir: rtl ? 'rtl' : undefined, className: newClassName, style: popupStyle }, this.passParentToChildren(children))));
    };
    SubMenu.prototype.render = function () {
        var _a = this.props, mode = _a.mode, root = _a.root;
        var newMode = mode || root.props.mode;
        return newMode === 'popup' ? this.renderPopup() : this.renderInline();
    };
    SubMenu.menuChildType = 'submenu';
    SubMenu.propTypes = {
        _key: prop_types_1.default.string,
        root: prop_types_1.default.object,
        level: prop_types_1.default.number,
        inlineLevel: prop_types_1.default.number,
        groupIndent: prop_types_1.default.number,
        label: prop_types_1.default.node,
        selectable: prop_types_1.default.bool,
        mode: prop_types_1.default.oneOf(['inline', 'popup']),
        noIcon: prop_types_1.default.bool,
        children: prop_types_1.default.node,
        onMouseEnter: prop_types_1.default.func,
        onMouseLeave: prop_types_1.default.func,
        subMenuContentClassName: prop_types_1.default.string,
        triggerType: prop_types_1.default.oneOf(['click', 'hover']),
        align: prop_types_1.default.oneOf(['outside', 'follow']),
        parentMode: prop_types_1.default.oneOf(['inline', 'popup']),
        parent: prop_types_1.default.any,
    };
    SubMenu.defaultProps = {
        groupIndent: 0,
        noIcon: false,
        selectable: false,
    };
    return SubMenu;
}(react_1.Component));
exports.default = SubMenu;
