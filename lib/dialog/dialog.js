"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var overlay_1 = require("../overlay");
var zh_cn_1 = require("../locale/zh-cn");
var util_1 = require("../util");
var inner_1 = require("./inner");
var noop = function () { };
var limitTabRange = util_1.focus.limitTabRange;
var bindCtx = util_1.func.bindCtx;
var pickOthers = util_1.obj.pickOthers;
var getStyle = util_1.dom.getStyle, setStyle = util_1.dom.setStyle;
// [fix issue #1609](https://github.com/alibaba-fusion/next/issues/1609)
// https://stackoverflow.com/questions/19717907/getcomputedstyle-reporting-different-heights-between-chrome-safari-firefox-and-i
function _getSize(dom, name) {
    var boxSizing = getStyle(dom, 'boxSizing');
    if (util_1.env.ieVersion && ['width', 'height'].indexOf(name) !== -1 && boxSizing === 'border-box') {
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
    function Dialog(props, context) {
        var _this = _super.call(this, props, context) || this;
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
            var value = typeof closeable === 'boolean' ? closeable : closeable.split(',').indexOf(option) > -1;
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
        var newCloseable = 'closeMode' in this.props ? (Array.isArray(closeMode) ? closeMode.join(',') : closeMode) : closeable;
        var _b = this.mapcloseableToConfig(newCloseable), canCloseByCloseClick = _b.canCloseByCloseClick, closeConfig = tslib_1.__rest(_b, ["canCloseByCloseClick"]);
        var newOverlayProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ disableScroll: true, container: popupContainer, cache: cache }, overlayProps), { prefix: prefix, visible: visible, animation: animation, hasMask: hasMask, autoFocus: autoFocus, afterClose: afterClose }), closeConfig), { canCloseByOutSideClick: false, align: useCSS ? false : align, onRequestClose: onClose, needAdjust: false, ref: this.getOverlayRef, rtl: rtl, maskClass: useCSS ? "".concat(prefix, "dialog-container") : '', isChildrenInMask: useCSS && hasMask });
        if (!useCSS) {
            newOverlayProps.beforePosition = this.beforePosition;
            newOverlayProps.onPosition = this.adjustPosition;
            newOverlayProps.shouldUpdatePosition = shouldUpdatePosition;
        }
        var inner = this.renderInner(canCloseByCloseClick);
        // useCSS && hasMask : isFullScreen 并且 有mask的模式下，为了解决 next-overlay-backdrop 覆盖mask，使得点击mask关闭页面的功能不生效的问题，需要开启 Overlay 的 isChildrenInMask 功能，并且把 next-dialog-container 放到 next-overlay-backdrop上
        // useCSS && !hasMask : isFullScreen 并且 没有mask的情况下，需要关闭 isChildrenInMask 功能，以防止children不渲染
        // 其他模式下维持 mask 与 children 同级的关系
        return (react_1.default.createElement(overlay_1.default, tslib_1.__assign({}, newOverlayProps), useCSS && !hasMask ? (react_1.default.createElement("div", { className: "".concat(prefix, "dialog-container"), dir: rtl ? 'rtl' : undefined }, inner)) : (inner)));
    };
    Dialog.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        /**
         * 是否显示
         */
        visible: prop_types_1.default.bool,
        /**
         * 标题
         */
        title: prop_types_1.default.node,
        /**
         * 内容
         */
        children: prop_types_1.default.node,
        /**
         * 底部内容，设置为 false，则不进行显示
         * @default [<Button type="primary">确定</Button>, <Button>取消</Button>]
         */
        footer: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.node]),
        /**
         * 底部按钮的对齐方式
         */
        footerAlign: prop_types_1.default.oneOf(['left', 'center', 'right']),
        /**
         * 指定确定按钮和取消按钮是否存在以及如何排列,<br><br>**可选值**：
         * ['ok', 'cancel']（确认取消按钮同时存在，确认按钮在左）
         * ['cancel', 'ok']（确认取消按钮同时存在，确认按钮在右）
         * ['ok']（只存在确认按钮）
         * ['cancel']（只存在取消按钮）
         */
        footerActions: prop_types_1.default.array,
        /**
         * 在点击确定按钮时触发的回调函数
         * @param {Object} event 点击事件对象
         */
        onOk: prop_types_1.default.func,
        /**
         * 在点击取消/关闭按钮时触发的回调函数
         * @param {Object} event 点击事件对象, event.triggerType=esc|closeIcon 可区分点击来源
         */
        onCancel: prop_types_1.default.func,
        /**
         * 应用于确定按钮的属性对象
         */
        okProps: prop_types_1.default.object,
        /**
         * 应用于取消按钮的属性对象
         */
        cancelProps: prop_types_1.default.object,
        /**
         * [推荐]1.21.x 支持控制对话框关闭的方式，值可以为字符串或者数组，其中字符串、数组均为以下值的枚举：
         * **close** 表示点击关闭按钮可以关闭对话框
         * **mask** 表示点击遮罩区域可以关闭对话框
         * **esc** 表示按下 esc 键可以关闭对话框
         * 如 'close' 或 ['close','esc','mask'], []
         * @version 1.21
         */
        closeMode: prop_types_1.default.oneOfType([
            prop_types_1.default.arrayOf(prop_types_1.default.oneOf(['close', 'mask', 'esc'])),
            prop_types_1.default.oneOf(['close', 'mask', 'esc']),
        ]),
        /**
         * 隐藏时是否保留子节点，不销毁 （低版本通过 overlayProps 实现）
         * @version 1.23
         */
        cache: prop_types_1.default.bool,
        /**
         * 对话框关闭后触发的回调函数, 如果有动画，则在动画结束后触发
         */
        afterClose: prop_types_1.default.func,
        /**
         * 是否显示遮罩
         */
        hasMask: prop_types_1.default.bool,
        /**
         * 显示隐藏时动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名
         * @default { in: 'expandInDown', out: 'expandOutUp' }
         */
        animation: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]),
        /**
         * 对话框弹出时是否自动获得焦点
         */
        autoFocus: prop_types_1.default.bool,
        /**
         * [v2废弃] 透传到弹层组件的属性对象
         */
        overlayProps: prop_types_1.default.object,
        /**
         * 自定义国际化文案对象
         * @property {String} ok 确认按钮文案
         * @property {String} cancel 取消按钮文案
         */
        locale: prop_types_1.default.object,
        // Do not remove this, it's for <ConfigProvider popupContainer={} />
        // see https://github.com/alibaba-fusion/next/issues/1508
        /**
         * 自定义弹窗挂载位置
         */
        popupContainer: prop_types_1.default.any,
        /**
         * 对话框的高度样式属性
         */
        height: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        /**
         * 开启 v2 版本弹窗
         */
        v2: prop_types_1.default.bool,
        /**
         * [v2] 弹窗宽度
         * @version 1.25
         */
        width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        /**
         * [v2] 弹窗上边距。默认 100，设置 centered=true 后默认 40
         * @version 1.25
         */
        top: prop_types_1.default.number,
        /**
         * [v2] 弹窗下边距
         * @version 1.25
         */
        bottom: prop_types_1.default.number,
        /**
         * [v2] 定制关闭按钮 icon
         * @version 1.25
         */
        closeIcon: prop_types_1.default.node,
        /**
         * [v2] 弹窗居中对齐
         * @version 1.25
         */
        centered: prop_types_1.default.bool,
        /**
         * [v2] 对话框高度超过浏览器视口高度时，对话框是否展示滚动条。关闭此功后对话框会随高度撑开页面。
         * @version 1.25
         */
        overflowScroll: prop_types_1.default.bool,
        /**
         * [v2] 最外包裹层 className
         * @version 1.26
         */
        wrapperClassName: prop_types_1.default.string,
        /**
         * [废弃]同closeMode, 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：
         * **close** 表示点击关闭按钮可以关闭对话框
         * **mask** 表示点击遮罩区域可以关闭对话框
         * **esc** 表示按下 esc 键可以关闭对话框
         * 如 'close' 或 'close,esc,mask'
         * 如果设置为 true，则以上关闭方式全部生效
         * 如果设置为 false，则以上关闭方式全部失效
         */
        closeable: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
        /**
         * 点击对话框关闭按钮时触发的回调函数
         * @param {String} trigger 关闭触发行为的描述字符串
         * @param {Object} event 关闭时事件对象
         */
        onClose: prop_types_1.default.func,
        /**
         * [v2废弃] 对话框对齐方式, 具体见Overlay文档
         */
        align: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
        /**
         * [v2废弃] 是否撑开页面。 v2 改用 overflowScroll
         */
        isFullScreen: prop_types_1.default.bool,
        /**
         * [v2废弃] 是否在对话框重新渲染时及时更新对话框位置，一般用于对话框高度变化后依然能保证原来的对齐方式
         */
        shouldUpdatePosition: prop_types_1.default.bool,
        /**
         * [v2废弃] 对话框距离浏览器顶部和底部的最小间距，align 被设置为 'cc cc' 并且 isFullScreen 被设置为 true 时不生效
         */
        minMargin: prop_types_1.default.number,
        /**
         * 去除body内间距
         * @version 1.26
         */
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
    return Dialog;
}(react_1.Component));
exports.default = Dialog;
