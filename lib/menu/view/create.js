"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
// eslint-disable-next-line react/no-deprecated
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var overlay_1 = tslib_1.__importDefault(require("../../overlay"));
var util_1 = require("../../util");
var config_provider_1 = tslib_1.__importDefault(require("../../config-provider"));
var menu_1 = tslib_1.__importDefault(require("./menu"));
var bindCtx = util_1.func.bindCtx;
var getContextProps = config_provider_1.default.getContextProps;
var Menu = config_provider_1.default.config(menu_1.default);
var menuInstance;
var ContextMenu = /** @class */ (function (_super) {
    tslib_1.__extends(ContextMenu, _super);
    function ContextMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOverlayClose = function (triggerType, e) {
            var others = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                others[_i - 2] = arguments[_i];
            }
            var clickedPopupMenu = triggerType === 'docClick' &&
                _this.popupNodes.some(function (node) { return node.contains(e.target); });
            if (!clickedPopupMenu) {
                _this.close();
                var overlayProps = _this.props.overlayProps;
                if (overlayProps && overlayProps.onRequestClose) {
                    overlayProps.onRequestClose.apply(overlayProps, tslib_1.__spreadArray([triggerType, e], tslib_1.__read(others), false));
                }
            }
        };
        _this.handleItemClick = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.close();
            _this.props.onItemClick && (_a = _this.props).onItemClick.apply(_a, tslib_1.__spreadArray([], tslib_1.__read(args), false));
        };
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
    ContextMenu.prototype.handleOverlayOpen = function () {
        // @ts-expect-error 此处 overlay 类型不对，Overlay 完成改造后可去除该注释
        this.popupNodes = this.overlay.getInstance().getContent().getInstance().popupNodes;
        var overlayProps = this.props.overlayProps;
        if (overlayProps && overlayProps.onOpen) {
            overlayProps.onOpen();
        }
    };
    ContextMenu.prototype.render = function () {
        var _a = this.props, className = _a.className, popupClassName = _a.popupClassName, target = _a.target, align = _a.align, offset = _a.offset, afterClose = _a.afterClose, _b = _a.overlayProps, overlayProps = _b === void 0 ? {} : _b, others = tslib_1.__rest(_a, ["className", "popupClassName", "target", "align", "offset", "afterClose", "overlayProps"]);
        var contextProps = getContextProps(this.props);
        var prefix = contextProps.prefix;
        var visible = this.state.visible;
        var newOverlayProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, contextProps), overlayProps), { target: target, align: align, offset: offset, afterClose: afterClose, visible: visible, onRequestClose: this.handleOverlayClose, onOpen: this.handleOverlayOpen, ref: this.getOverlay });
        var menuProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, contextProps), { triggerType: 'hover' }), others), { className: (0, classnames_1.default)("".concat(prefix, "context"), className), popupClassName: (0, classnames_1.default)("".concat(prefix, "context"), popupClassName), onItemClick: this.handleItemClick });
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
