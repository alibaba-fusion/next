"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var overlay_1 = tslib_1.__importDefault(require("../../overlay"));
var util_1 = require("../../util");
var item_1 = tslib_1.__importDefault(require("./item"));
var selectable_item_1 = tslib_1.__importDefault(require("./selectable-item"));
var util_2 = require("./util");
var bindCtx = util_1.func.bindCtx;
var setStyle = util_1.dom.setStyle;
var Popup = overlay_1.default.Popup;
var PopupItem = /** @class */ (function (_super) {
    tslib_1.__extends(PopupItem, _super);
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
            var itemNode = (0, react_dom_1.findDOMNode)(this);
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
        var NewItem = (selectable ? selectable_item_1.default : item_1.default);
        var open = this.getOpen();
        var _d = root.state, selectedKeys = _d.selectedKeys, _k2n = _d._k2n;
        var isChildSelected = (0, util_2.getChildSelected)({
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
        itemProps.className = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "opened")] = open,
            _a["".concat(prefix, "child-selected")] = isChildSelected,
            _a), className);
        return (react_1.default.createElement(NewItem, tslib_1.__assign({}, itemProps, others),
            react_1.default.createElement("span", { className: "".concat(prefix, "menu-item-text") }, label),
            children));
    };
    PopupItem.prototype.renderPopup = function (trigger, triggerType, positionProps, children) {
        var _this = this;
        var _a = this.props, root = _a.root, level = _a.level, selectable = _a.selectable, propCls = _a.className;
        var direction = root.props.direction;
        this.popupProps = this.getPopupProps();
        var open = this.getOpen();
        if (direction === 'hoz' && level === 1 && selectable) {
            positionProps.target = function () { return (0, react_dom_1.findDOMNode)(_this); };
        }
        var posCls = positionProps.className, otherPostion = tslib_1.__rest(positionProps, ["className"]);
        var className = (0, classnames_1.default)(propCls, posCls);
        return (react_1.default.createElement(Popup, tslib_1.__assign({ ref: this.getPopup }, otherPostion, this.popupProps, { canCloseByEsc: false, trigger: trigger, triggerType: triggerType, visible: open, pinFollowBaseElementWhenFixed: true, onVisibleChange: this.handleOpen, onOpen: this.handlePopupOpen, onClose: this.handlePopupClose }),
            react_1.default.createElement("div", { className: className }, children)));
    };
    PopupItem.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, root = _b.root, level = _b.level, hasSubMenu = _b.hasSubMenu, selectableFromProps = _b.selectable, children = _b.children, triggerType = _b.triggerType, align = _b.align, noIcon = _b.noIcon;
        var others = util_1.obj.pickOthers(PopupItem.propTypes, this.props);
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
                className: (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "menu-hoz-icon-arrow")] = true,
                    _a["".concat(prefix, "open")] = open,
                    _a)),
            };
        }
        else {
            if (popupAlign === 'outside') {
                positionProps.target = function () {
                    return (0, react_dom_1.findDOMNode)(root);
                };
                positionProps.align = 'tl tr';
                positionProps.className = "".concat(prefix, "menu-spacing-lr ").concat(prefix, "menu-outside");
            }
            else {
                if (triggerIsIcon) {
                    positionProps.target = function () {
                        return (0, react_dom_1.findDOMNode)(_this);
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
        var arrow = react_1.default.createElement(icon_1.default, tslib_1.__assign({}, arrowProps));
        var trigger = triggerIsIcon
            ? arrow
            : this.renderItem(selectable, noIcon ? null : arrow, others);
        var popup = this.renderPopup(trigger, newTriggerType, positionProps, newChildren);
        return triggerIsIcon ? this.renderItem(selectable, popup, others) : popup;
    };
    PopupItem.menuChildType = 'submenu';
    PopupItem.propTypes = {
        _key: prop_types_1.default.string,
        root: prop_types_1.default.object,
        level: prop_types_1.default.number,
        hasSubMenu: prop_types_1.default.bool,
        noIcon: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        selectable: prop_types_1.default.bool,
        /**
         * 标签内容
         */
        label: prop_types_1.default.node,
        /**
         * 自定义弹层内容
         */
        children: prop_types_1.default.node,
        className: prop_types_1.default.string,
        /**
         * 子菜单打开的触发行为
         */
        triggerType: prop_types_1.default.oneOf(['click', 'hover']),
        align: prop_types_1.default.oneOf(['outside', 'follow']),
        autoWidth: prop_types_1.default.bool,
    };
    PopupItem.defaultProps = {
        selectable: false,
        noIcon: false,
    };
    return PopupItem;
}(react_1.Component));
exports.default = PopupItem;
