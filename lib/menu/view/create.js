"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var overlay_1 = require("../../overlay");
var util_1 = require("../../util");
var config_provider_1 = require("../../config-provider");
var menu_1 = require("./menu");
var bindCtx = util_1.func.bindCtx;
var getContextProps = config_provider_1.default.getContextProps;
var Menu = config_provider_1.default.config(menu_1.default);
var menuInstance;
var ContextMenu = /** @class */ (function (_super) {
    tslib_1.__extends(ContextMenu, _super);
    function ContextMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: true,
        };
        bindCtx(_this, ['handleOverlayClose', 'handleOverlayOpen', 'handleItemClick', 'getOverlay']);
        return _this;
    }
    ContextMenu.prototype.getOverlay = function (ref) {
        this.overlay = ref;
    };
    ContextMenu.prototype.close = function () {
        this.setState({
            visible: false,
        });
        menuInstance = null;
    };
    ContextMenu.prototype.handleOverlayClose = function (triggerType, e) {
        var others = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            others[_i - 2] = arguments[_i];
        }
        var clickedPopupMenu = triggerType === 'docClick' && this.popupNodes.some(function (node) { return node.contains(e.target); });
        if (!clickedPopupMenu) {
            this.close();
            var overlayProps = this.props.overlayProps;
            if (overlayProps && overlayProps.onRequestClose) {
                overlayProps.onRequestClose.apply(overlayProps, tslib_1.__spreadArray([triggerType, e], tslib_1.__read(others), false));
            }
        }
    };
    ContextMenu.prototype.handleOverlayOpen = function () {
        this.popupNodes = this.overlay
            .getInstance()
            .getContent()
            .getInstance().popupNodes;
        var overlayProps = this.props.overlayProps;
        if (overlayProps && overlayProps.onOpen) {
            overlayProps.onOpen();
        }
    };
    ContextMenu.prototype.handleItemClick = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.close();
        this.props.onItemClick && (_a = this.props).onItemClick.apply(_a, tslib_1.__spreadArray([], tslib_1.__read(args), false));
    };
    ContextMenu.prototype.render = function () {
        var _a, _b;
        var _c = this.props, className = _c.className, popupClassName = _c.popupClassName, target = _c.target, align = _c.align, offset = _c.offset, afterClose = _c.afterClose, _d = _c.overlayProps, overlayProps = _d === void 0 ? {} : _d, others = tslib_1.__rest(_c, ["className", "popupClassName", "target", "align", "offset", "afterClose", "overlayProps"]);
        var contextProps = getContextProps(this.props);
        var prefix = contextProps.prefix;
        var visible = this.state.visible;
        var newOverlayProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, contextProps), overlayProps), { target: target, align: align, offset: offset, afterClose: afterClose, visible: visible, onRequestClose: this.handleOverlayClose, onOpen: this.handleOverlayOpen, ref: this.getOverlay });
        var menuProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, contextProps), { triggerType: 'hover' }), others), { className: (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "context")] = true,
                _a[className] = !!className,
                _a)), popupClassName: (0, classnames_1.default)((_b = {},
                _b["".concat(prefix, "context")] = true,
                _b[popupClassName] = !!popupClassName,
                _b)), onItemClick: this.handleItemClick });
        newOverlayProps.rtl = false;
        return (react_1.default.createElement(overlay_1.default, tslib_1.__assign({}, newOverlayProps),
            react_1.default.createElement(Menu, tslib_1.__assign({}, menuProps))));
    };
    ContextMenu.propTypes = {
        className: prop_types_1.default.string,
        popupClassName: prop_types_1.default.string,
        target: prop_types_1.default.any,
        align: prop_types_1.default.string,
        offset: prop_types_1.default.array,
        overlayProps: prop_types_1.default.object,
        afterClose: prop_types_1.default.func,
        mode: prop_types_1.default.oneOf(['inline', 'popup']),
        onOpen: prop_types_1.default.func,
        onItemClick: prop_types_1.default.func,
    };
    ContextMenu.defaultProps = {
        prefix: 'next-',
        align: 'tl tl',
        mode: 'popup',
    };
    return ContextMenu;
}(react_1.Component));
/**
 * 创建上下文菜单
 * @exportName create
 * @param {Object} props 属性对象
 */
function create(props) {
    if (menuInstance) {
        menuInstance.destroy();
    }
    /* eslint-disable no-unused-vars */
    var afterClose = props.afterClose, others = tslib_1.__rest(props, ["afterClose"]);
    /* eslint-enable no-unused-vars */
    var div = document.createElement('div');
    document.body.appendChild(div);
    var closeChain = function () {
        (0, react_dom_1.unmountComponentAtNode)(div);
        document.body.removeChild(div);
        afterClose && afterClose();
    };
    var newContext = config_provider_1.default.getContext();
    var menu;
    (0, react_dom_1.render)(react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, newContext),
        react_1.default.createElement(ContextMenu, tslib_1.__assign({ ref: function (ref) {
                menu = ref;
            }, afterClose: closeChain }, others))), div);
    menuInstance = {
        destroy: function () {
            if (menu) {
                menu.close();
            }
        },
    };
    return menuInstance;
}
exports.default = create;
