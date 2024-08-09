"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var inner_1 = tslib_1.__importDefault(require("./inner"));
var noop = function () { };
var limitTabRange = util_1.focus.limitTabRange;
var bindCtx = util_1.func.bindCtx;
var pickOthers = util_1.obj.pickOthers;
var getStyle = util_1.dom.getStyle, setStyle = util_1.dom.setStyle;
function isWidthOrHeight(name) {
    return ['width', 'height'].indexOf(name) !== -1;
}
// [fix issue #1609](https://github.com/alibaba-fusion/next/issues/1609)
// https://stackoverflow.com/questions/19717907/getcomputedstyle-reporting-different-heights-between-chrome-safari-firefox-and-i
function _getSize(dom, name) {
    var boxSizing = getStyle(dom, 'boxSizing');
    if (util_1.env.ieVersion && isWidthOrHeight(name) && boxSizing === 'border-box') {
        return parseFloat(dom.getBoundingClientRect()[name].toFixed(1));
    }
    else {
        return getStyle(dom, name);
    }
}
/**
 * Dialog
 */
var Dialog = /** @class */ (function (_super) {
    tslib_1.__extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, props) || this;
        bindCtx(_this, ['onKeyDown', 'beforePosition', 'adjustPosition', 'getOverlayRef']);
        return _this;
    }
    Dialog.prototype.componentDidMount = function () {
        util_1.events.on(document, 'keydown', this.onKeyDown);
        if (!this.useCSSToPosition()) {
            this.adjustPosition();
        }
    };
    Dialog.prototype.componentWillUnmount = function () {
        util_1.events.off(document, 'keydown', this.onKeyDown);
    };
    Dialog.prototype.useCSSToPosition = function () {
        var _a = this.props, align = _a.align, isFullScreen = _a.isFullScreen;
        return align === 'cc cc' && isFullScreen;
    };
    Dialog.prototype.onKeyDown = function (e) {
        if (this.overlay) {
            var node = this.getInnerNode();
            if (node) {
                limitTabRange(node, e);
            }
        }
    };
    Dialog.prototype.beforePosition = function () {
        if (this.props.visible && this.overlay) {
            var inner = this.getInner();
            if (inner) {
                var node = this.getInnerNode();
                if (this._lastDialogHeight !== _getSize(node, 'height')) {
                    this.revertSize(inner.bodyNode);
                }
            }
        }
    };
    Dialog.prototype.adjustPosition = function () {
        if (this.props.visible && this.overlay) {
            var inner = this.getInner();
            if (inner) {
                var node = this.getInnerNode();
                var top_1 = getStyle(node, 'top');
                var minMargin = this.props.minMargin;
                if (top_1 < minMargin) {
                    top_1 = minMargin;
                    setStyle(node, 'top', "".concat(minMargin, "px"));
                }
                var height = _getSize(node, 'height');
                var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                if (viewportHeight < height + top_1 * 2 - 1 || // 分辨率和精确度的原因 高度计算的时候 可能会有1px内的偏差
                    this.props.height) {
                    this.adjustSize(inner, node, Math.min(height, viewportHeight - top_1 * 2));
                }
                else {
                    this.revertSize(inner.bodyNode);
                }
                this._lastDialogHeight = height;
            }
        }
    };
    Dialog.prototype.adjustSize = function (inner, node, expectHeight) {
        var headerNode = inner.headerNode, bodyNode = inner.bodyNode, footerNode = inner.footerNode;
        var _a = tslib_1.__read([headerNode, footerNode].map(function (node) {
            return node ? _getSize(node, 'height') : 0;
        }), 2), headerHeight = _a[0], footerHeight = _a[1];
        var padding = ['padding-top', 'padding-bottom'].reduce(function (sum, attr) { return sum + getStyle(node, attr); }, 0);
        var maxBodyHeight = expectHeight - headerHeight - footerHeight - padding;
        if (maxBodyHeight < 0) {
            maxBodyHeight = 1;
        }
        if (bodyNode) {
            this.dialogBodyStyleMaxHeight = bodyNode.style.maxHeight;
            this.dialogBodyStyleOverflowY = bodyNode.style.overflowY;
            setStyle(bodyNode, {
                'max-height': "".concat(maxBodyHeight, "px"),
                'overflow-y': 'auto',
            });
        }
    };
    Dialog.prototype.revertSize = function (bodyNode) {
        setStyle(bodyNode, {
            'max-height': this.dialogBodyStyleMaxHeight,
            'overflow-y': this.dialogBodyStyleOverflowY,
        });
    };
    Dialog.prototype.mapcloseableToConfig = function (closeable) {
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
    Dialog.prototype.getOverlayRef = function (ref) {
        this.overlay = ref;
    };
    Dialog.prototype.getInner = function () {
        return this.overlay.getInstance().getContent();
    };
    Dialog.prototype.getInnerNode = function () {
        return this.overlay.getInstance().getContentNode();
    };
    Dialog.prototype.renderInner = function (closeable) {
        var _a = this.props, prefix = _a.prefix, className = _a.className, title = _a.title, children = _a.children, footer = _a.footer, footerAlign = _a.footerAlign, footerActions = _a.footerActions, onOk = _a.onOk, onCancel = _a.onCancel, okProps = _a.okProps, cancelProps = _a.cancelProps, onClose = _a.onClose, locale = _a.locale, visible = _a.visible, rtl = _a.rtl, height = _a.height, noPadding = _a.noPadding;
        var others = pickOthers(Object.keys(Dialog.propTypes), this.props);
        return (react_1.default.createElement(inner_1.default, tslib_1.__assign({ prefix: prefix, className: className, title: title, footer: footer, footerAlign: footerAlign, footerActions: footerActions, onOk: visible ? onOk : noop, onCancel: visible ? onCancel : noop, okProps: okProps, cancelProps: cancelProps, locale: locale, closeable: closeable, rtl: rtl, onClose: onClose.bind(this, 'closeClick'), height: height, noPadding: noPadding }, others), children));
    };
    Dialog.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, visible = _a.visible, hasMask = _a.hasMask, animation = _a.animation, autoFocus = _a.autoFocus, closeable = _a.closeable, closeMode = _a.closeMode, onClose = _a.onClose, afterClose = _a.afterClose, shouldUpdatePosition = _a.shouldUpdatePosition, align = _a.align, popupContainer = _a.popupContainer, cache = _a.cache, overlayProps = _a.overlayProps, rtl = _a.rtl;
        var useCSS = this.useCSSToPosition();
        var newCloseable = 'closeMode' in this.props
            ? Array.isArray(closeMode)
                ? closeMode.join(',')
                : closeMode
            : closeable;
        var _b = this.mapcloseableToConfig(newCloseable), canCloseByCloseClick = _b.canCloseByCloseClick, closeConfig = tslib_1.__rest(_b, ["canCloseByCloseClick"]);
        var newOverlayProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ disableScroll: true, container: popupContainer, cache: cache }, overlayProps), { prefix: prefix, visible: visible, animation: animation, hasMask: hasMask, autoFocus: autoFocus, afterClose: afterClose }), closeConfig), { canCloseByOutSideClick: false, align: (useCSS ? false : align), onRequestClose: onClose, needAdjust: false, ref: this.getOverlayRef, rtl: rtl, maskClass: useCSS ? "".concat(prefix, "dialog-container") : '', isChildrenInMask: useCSS && hasMask });
        if (!useCSS) {
            newOverlayProps.beforePosition = this.beforePosition;
            newOverlayProps.onPosition = this.adjustPosition;
            newOverlayProps.shouldUpdatePosition = shouldUpdatePosition;
        }
        var inner = this.renderInner(canCloseByCloseClick);
        // useCSS && hasMask : isFullScreen 并且 有 mask 的模式下，为了解决 next-overlay-backdrop 覆盖 mask，使得点击 mask 关闭页面的功能不生效的问题，需要开启 Overlay 的 isChildrenInMask 功能，并且把 next-dialog-container 放到 next-overlay-backdrop 上
        // useCSS && !hasMask : isFullScreen 并且 没有 mask 的情况下，需要关闭 isChildrenInMask 功能，以防止 children 不渲染
        // 其他模式下维持 mask 与 children 同级的关系
        return (react_1.default.createElement(overlay_1.default, tslib_1.__assign({}, newOverlayProps), useCSS && !hasMask ? (react_1.default.createElement("div", { className: "".concat(prefix, "dialog-container"), dir: rtl ? 'rtl' : undefined }, inner)) : (inner)));
    };
    Dialog.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        visible: prop_types_1.default.bool,
        title: prop_types_1.default.node,
        children: prop_types_1.default.node,
        footer: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.node]),
        footerAlign: prop_types_1.default.oneOf(['left', 'center', 'right']),
        footerActions: prop_types_1.default.array,
        onOk: prop_types_1.default.func,
        onCancel: prop_types_1.default.func,
        okProps: prop_types_1.default.object,
        cancelProps: prop_types_1.default.object,
        closeMode: prop_types_1.default.oneOfType([
            prop_types_1.default.arrayOf(prop_types_1.default.oneOf(['close', 'mask', 'esc'])),
            prop_types_1.default.oneOf(['close', 'mask', 'esc']),
        ]),
        cache: prop_types_1.default.bool,
        afterClose: prop_types_1.default.func,
        hasMask: prop_types_1.default.bool,
        animation: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]),
        autoFocus: prop_types_1.default.bool,
        overlayProps: prop_types_1.default.object,
        locale: prop_types_1.default.object,
        // Do not remove this, it's for <ConfigProvider popupContainer={} />
        // see https://github.com/alibaba-fusion/next/issues/1508
        popupContainer: prop_types_1.default.any,
        height: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        v2: prop_types_1.default.bool,
        width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        top: prop_types_1.default.number,
        bottom: prop_types_1.default.number,
        closeIcon: prop_types_1.default.node,
        centered: prop_types_1.default.bool,
        overflowScroll: prop_types_1.default.bool,
        wrapperClassName: prop_types_1.default.string,
        closeable: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
        onClose: prop_types_1.default.func,
        align: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
        isFullScreen: prop_types_1.default.bool,
        shouldUpdatePosition: prop_types_1.default.bool,
        minMargin: prop_types_1.default.number,
        noPadding: prop_types_1.default.bool,
    };
    Dialog.defaultProps = {
        prefix: 'next-',
        pure: false,
        visible: false,
        footerAlign: 'right',
        footerActions: ['ok', 'cancel'],
        onOk: noop,
        onCancel: noop,
        cache: false,
        okProps: {},
        cancelProps: {},
        closeable: 'esc,close',
        onClose: noop,
        afterClose: noop,
        centered: false,
        hasMask: true,
        animation: {
            in: 'fadeInUp',
            out: 'fadeOutUp',
        },
        autoFocus: false,
        align: 'cc cc',
        isFullScreen: false,
        overflowScroll: true,
        shouldUpdatePosition: false,
        minMargin: 40,
        bottom: 40,
        overlayProps: {},
        locale: zh_cn_1.default.Dialog,
        noPadding: false,
    };
    Dialog.displayName = 'Dialog';
    return Dialog;
}(react_1.Component));
exports.default = Dialog;
