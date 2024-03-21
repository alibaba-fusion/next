import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Overlay from '../overlay';
import Inner from './inner';
import zhCN from '../locale/zh-cn';
import { obj } from '../util';
var noop = function () { };
var Popup = Overlay.Popup;
var pickOthers = obj.pickOthers;
/**
 * Drawer
 * 继承 Overlay.Popup 的 API，除非特别说明
 * */
var Drawer = /** @class */ (function (_super) {
    __extends(Drawer, _super);
    function Drawer() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        return (React.createElement(Inner, __assign({ prefix: prefix, title: title, className: className, locale: locale, closeable: closeable, rtl: rtl, headerStyle: headerStyle, bodyStyle: bodyStyle, placement: placement, onClose: onClose.bind(this, 'closeClick') }, others), children));
    };
    Drawer.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, style = _a.style, width = _a.width, height = _a.height, trigger = _a.trigger, triggerType = _a.triggerType, animation = _a.animation, hasMask = _a.hasMask, visible = _a.visible, placement = _a.placement, onClose = _a.onClose, onVisibleChange = _a.onVisibleChange, closeable = _a.closeable, closeMode = _a.closeMode, rtl = _a.rtl, popupContainer = _a.popupContainer, content = _a.content, title = _a.title, others = __rest(_a, ["prefix", "style", "width", "height", "trigger", "triggerType", "animation", "hasMask", "visible", "placement", "onClose", "onVisibleChange", "closeable", "closeMode", "rtl", "popupContainer", "content", "title"]);
        var newStyle = __assign({ width: width, height: height }, style);
        var newCloseable = 'closeMode' in this.props
            ? Array.isArray(closeMode)
                ? closeMode.join(',')
                : closeMode
            : closeable;
        var _b = this.mapcloseableToConfig(newCloseable), canCloseByCloseClick = _b.canCloseByCloseClick, closeConfig = __rest(_b, ["canCloseByCloseClick"]);
        var newPopupProps = __assign(__assign({ prefix: prefix, visible: visible, trigger: trigger, triggerType: triggerType, onVisibleChange: this.handleVisibleChange, animation: this.getAnimation(placement), hasMask: hasMask, align: this.getAlign(placement) }, closeConfig), { canCloseByOutSideClick: false, disableScroll: true, ref: this.getOverlayRef, rtl: rtl, target: 'viewport', style: newStyle, needAdjust: false, container: popupContainer });
        var inner = this.renderInner(canCloseByCloseClick);
        return (React.createElement(Popup, __assign({}, newPopupProps, others), inner));
    };
    Drawer.displayName = 'Drawer';
    Drawer.propTypes = __assign(__assign({}, (Popup.propTypes || {})), { prefix: PropTypes.string, pure: PropTypes.bool, rtl: PropTypes.bool, trigger: PropTypes.element, triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]), width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), closeable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]), cache: PropTypes.bool, closeMode: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.oneOf(['close', 'mask', 'esc'])),
            PropTypes.oneOf(['close', 'mask', 'esc']),
        ]), onClose: PropTypes.func, afterOpen: PropTypes.func, placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']), title: PropTypes.node, headerStyle: PropTypes.object, bodyStyle: PropTypes.object, visible: PropTypes.bool, hasMask: PropTypes.bool, onVisibleChange: PropTypes.func, animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]), locale: PropTypes.object, popupContainer: PropTypes.any, v2: PropTypes.bool, afterClose: PropTypes.func });
    Drawer.defaultProps = {
        prefix: 'next-',
        triggerType: 'click',
        trigger: null,
        closeable: true,
        onClose: noop,
        hasMask: true,
        placement: 'right',
        locale: zhCN.Drawer,
    };
    return Drawer;
}(Component));
export default Drawer;
