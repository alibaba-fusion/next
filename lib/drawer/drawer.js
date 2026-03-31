"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_1 = tslib_1.__importStar(require("react"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var inner_1 = tslib_1.__importDefault(require("./inner"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var noop = function () { };
var Popup = overlay_1.default.Popup;
var pickOthers = util_1.obj.pickOthers;
/**
 * Drawer
 * 继承 Overlay.Popup 的 API，除非特别说明
 * */
var Drawer = /** @class */ (function (_super) {
    tslib_1.__extends(Drawer, _super);
    function Drawer() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.overlay = null;
        _this.getAlign = function (placement) {
            var align;
            switch (placement) {
                case 'top':
                    align = 'tl tl';
                    break;
                case 'bottom':
                    align = 'bl bl';
                    break;
                case 'left':
                    align = 'tl tl';
                    break;
                case 'right':
                default:
                    align = 'tr tr';
                    break;
            }
            return align;
        };
        _this.getAnimation = function (placement) {
            if ('animation' in _this.props) {
                return _this.props.animation;
            }
            var animation;
            switch (placement) {
                case 'top':
                    animation = {
                        in: 'slideInDown',
                        out: 'slideOutUp',
                    };
                    break;
                case 'bottom':
                    animation = {
                        in: 'slideInUp',
                        out: 'slideOutDown',
                    };
                    break;
                case 'left':
                    animation = {
                        in: 'slideInLeft',
                        out: 'slideOutLeft',
                    };
                    break;
                case 'right':
                default:
                    animation = {
                        in: 'slideInRight',
                        out: 'slideOutRight',
                    };
                    break;
            }
            return animation;
        };
        _this.getOverlayRef = function (ref) {
            _this.overlay = ref;
        };
        _this.mapcloseableToConfig = function (closeable) {
            return ['esc', 'close', 'mask'].reduce(function (ret, option) {
                var key = option.charAt(0).toUpperCase() + option.substr(1);
                var value = typeof closeable === 'boolean'
                    ? closeable
                    : closeable.split(',').indexOf(option) > -1;
                if (option === 'esc' || option === 'mask') {
                    ret["canCloseBy".concat(key)] = value;
                }
                else {
                    ret["canCloseBy".concat(key, "Click")] = value;
                }
                return ret;
            }, {});
        };
        _this.handleVisibleChange = function (visible, reason, e) {
            var _a = _this.props, onClose = _a.onClose, onVisibleChange = _a.onVisibleChange;
            if (visible === false) {
                onClose && onClose(reason, e);
            }
            onVisibleChange && onVisibleChange(visible, reason, e);
        };
        return _this;
    }
    Drawer.prototype.renderInner = function (closeable) {
        var _a = this.props, prefix = _a.prefix, className = _a.className, children = _a.children, title = _a.title, onClose = _a.onClose, locale = _a.locale, headerStyle = _a.headerStyle, bodyStyle = _a.bodyStyle, placement = _a.placement, rtl = _a.rtl;
        var others = pickOthers(Drawer.propTypes, this.props);
        return (react_1.default.createElement(inner_1.default, tslib_1.__assign({ prefix: prefix, title: title, className: className, locale: locale, closeable: closeable, rtl: rtl, headerStyle: headerStyle, bodyStyle: bodyStyle, placement: placement, onClose: onClose.bind(this, 'closeClick') }, others), children));
    };
    Drawer.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, style = _a.style, width = _a.width, height = _a.height, trigger = _a.trigger, triggerType = _a.triggerType, animation = _a.animation, hasMask = _a.hasMask, visible = _a.visible, placement = _a.placement, onClose = _a.onClose, onVisibleChange = _a.onVisibleChange, closeable = _a.closeable, closeMode = _a.closeMode, rtl = _a.rtl, popupContainer = _a.popupContainer, content = _a.content, title = _a.title, others = tslib_1.__rest(_a, ["prefix", "style", "width", "height", "trigger", "triggerType", "animation", "hasMask", "visible", "placement", "onClose", "onVisibleChange", "closeable", "closeMode", "rtl", "popupContainer", "content", "title"]);
        var newStyle = tslib_1.__assign({ width: width, height: height }, style);
        var newCloseable = 'closeMode' in this.props
            ? Array.isArray(closeMode)
                ? closeMode.join(',')
                : closeMode
            : closeable;
        var _b = this.mapcloseableToConfig(newCloseable), canCloseByCloseClick = _b.canCloseByCloseClick, closeConfig = tslib_1.__rest(_b, ["canCloseByCloseClick"]);
        var newPopupProps = tslib_1.__assign(tslib_1.__assign({ prefix: prefix, visible: visible, trigger: trigger, triggerType: triggerType, onVisibleChange: this.handleVisibleChange, animation: this.getAnimation(placement), hasMask: hasMask, align: this.getAlign(placement) }, closeConfig), { canCloseByOutSideClick: false, disableScroll: true, ref: this.getOverlayRef, rtl: rtl, target: 'viewport', style: newStyle, needAdjust: false, container: popupContainer });
        var inner = this.renderInner(canCloseByCloseClick);
        return (react_1.default.createElement(Popup, tslib_1.__assign({}, newPopupProps, others), inner));
    };
    Drawer.displayName = 'Drawer';
    Drawer.propTypes = tslib_1.__assign(tslib_1.__assign({}, (Popup.propTypes || {})), { prefix: prop_types_1.default.string, pure: prop_types_1.default.bool, rtl: prop_types_1.default.bool, trigger: prop_types_1.default.element, triggerType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]), width: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]), height: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]), closeable: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]), cache: prop_types_1.default.bool, closeMode: prop_types_1.default.oneOfType([
            prop_types_1.default.arrayOf(prop_types_1.default.oneOf(['close', 'mask', 'esc'])),
            prop_types_1.default.oneOf(['close', 'mask', 'esc']),
        ]), onClose: prop_types_1.default.func, afterOpen: prop_types_1.default.func, placement: prop_types_1.default.oneOf(['top', 'right', 'bottom', 'left']), title: prop_types_1.default.node, headerStyle: prop_types_1.default.object, bodyStyle: prop_types_1.default.object, visible: prop_types_1.default.bool, hasMask: prop_types_1.default.bool, onVisibleChange: prop_types_1.default.func, animation: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]), locale: prop_types_1.default.object, popupContainer: prop_types_1.default.any, v2: prop_types_1.default.bool, afterClose: prop_types_1.default.func });
    Drawer.defaultProps = {
        prefix: 'next-',
        triggerType: 'click',
        trigger: null,
        closeable: true,
        onClose: noop,
        hasMask: true,
        placement: 'right',
        locale: zh_cn_1.default.Drawer,
    };
    return Drawer;
}(react_1.Component));
exports.default = Drawer;
