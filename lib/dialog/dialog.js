'use strict';

exports.__esModule = true;
exports.default = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
var limitTabRange = _util.focus.limitTabRange;
var bindCtx = _util.func.bindCtx;
var pickOthers = _util.obj.pickOthers;
var getStyle = _util.dom.getStyle,
    setStyle = _util.dom.setStyle;

// [fix issue #1609](https://github.com/alibaba-fusion/next/issues/1609)
// https://stackoverflow.com/questions/19717907/getcomputedstyle-reporting-different-heights-between-chrome-safari-firefox-and-i

function _getSize(dom, name) {
    var boxSizing = getStyle(dom, 'boxSizing');

    if (_util.env.ieVersion && ['width', 'height'].indexOf(name) !== -1 && boxSizing === 'border-box') {
        return parseFloat(dom.getBoundingClientRect()[name].toFixed(1));
    } else {
        return getStyle(dom, name);
    }
}

/**
 * Dialog
 */
var Dialog = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Dialog, _Component);

    function Dialog(props, context) {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        bindCtx(_this, ['onKeyDown', 'beforePosition', 'adjustPosition', 'getOverlayRef']);
        return _this;
    }

    Dialog.prototype.componentDidMount = function componentDidMount() {
        _util.events.on(document, 'keydown', this.onKeyDown);
        if (!this.useCSSToPosition()) {
            this.adjustPosition();
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        _util.events.off(document, 'keydown', this.onKeyDown);
    };

    Dialog.prototype.useCSSToPosition = function useCSSToPosition() {
        var _props = this.props,
            align = _props.align,
            isFullScreen = _props.isFullScreen;

        return align === 'cc cc' && isFullScreen;
    };

    Dialog.prototype.onKeyDown = function onKeyDown(e) {
        var node = this.getInnerNode();
        if (node) {
            limitTabRange(node, e);
        }
    };

    Dialog.prototype.beforePosition = function beforePosition() {
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

    Dialog.prototype.adjustPosition = function adjustPosition() {
        if (this.props.visible && this.overlay) {
            var inner = this.getInner();
            if (inner) {
                var node = this.getInnerNode();

                var top = getStyle(node, 'top');
                var minMargin = this.props.minMargin;
                if (top < minMargin) {
                    top = minMargin;
                    setStyle(node, 'top', minMargin + 'px');
                }

                var height = _getSize(node, 'height');
                var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

                if (viewportHeight < height + top * 2 - 1 || // 分辨率和精确度的原因 高度计算的时候 可能会有1px内的偏差
                this.props.height) {
                    this.adjustSize(inner, node, Math.min(height, viewportHeight - top * 2));
                } else {
                    this.revertSize(inner.bodyNode);
                }

                this._lastDialogHeight = height;
            }
        }
    };

    Dialog.prototype.adjustSize = function adjustSize(inner, node, expectHeight) {
        var headerNode = inner.headerNode,
            bodyNode = inner.bodyNode,
            footerNode = inner.footerNode;

        var _map = [headerNode, footerNode].map(function (node) {
            return node ? _getSize(node, 'height') : 0;
        }),
            headerHeight = _map[0],
            footerHeight = _map[1];

        var padding = ['padding-top', 'padding-bottom'].reduce(function (sum, attr) {
            return sum + getStyle(node, attr);
        }, 0);

        var maxBodyHeight = expectHeight - headerHeight - footerHeight - padding;

        if (maxBodyHeight < 0) {
            maxBodyHeight = 1;
        }

        if (bodyNode) {
            this.dialogBodyStyleMaxHeight = bodyNode.style.maxHeight;
            this.dialogBodyStyleOverflowY = bodyNode.style.overflowY;

            setStyle(bodyNode, {
                'max-height': maxBodyHeight + 'px',
                'overflow-y': 'auto'
            });
        }
    };

    Dialog.prototype.revertSize = function revertSize(bodyNode) {
        setStyle(bodyNode, {
            'max-height': this.dialogBodyStyleMaxHeight,
            'overflow-y': this.dialogBodyStyleOverflowY
        });
    };

    Dialog.prototype.mapcloseableToConfig = function mapcloseableToConfig(closeable) {
        return ['esc', 'close', 'mask'].reduce(function (ret, option) {
            var key = option.charAt(0).toUpperCase() + option.substr(1);
            var value = typeof closeable === 'boolean' ? closeable : closeable.split(',').indexOf(option) > -1;

            if (option === 'esc' || option === 'mask') {
                ret['canCloseBy' + key] = value;
            } else {
                ret['canCloseBy' + key + 'Click'] = value;
            }

            return ret;
        }, {});
    };

    Dialog.prototype.getOverlayRef = function getOverlayRef(ref) {
        this.overlay = ref;
    };

    Dialog.prototype.getInner = function getInner() {
        return this.overlay.getInstance().getContent();
    };

    Dialog.prototype.getInnerNode = function getInnerNode() {
        return this.overlay.getInstance().getContentNode();
    };

    Dialog.prototype.renderInner = function renderInner(closeable) {
        var _props2 = this.props,
            prefix = _props2.prefix,
            className = _props2.className,
            title = _props2.title,
            children = _props2.children,
            footer = _props2.footer,
            footerAlign = _props2.footerAlign,
            footerActions = _props2.footerActions,
            onOk = _props2.onOk,
            onCancel = _props2.onCancel,
            okProps = _props2.okProps,
            cancelProps = _props2.cancelProps,
            onClose = _props2.onClose,
            locale = _props2.locale,
            visible = _props2.visible,
            rtl = _props2.rtl,
            height = _props2.height;

        var others = pickOthers(Object.keys(Dialog.propTypes), this.props);

        return _react2.default.createElement(
            _inner2.default,
            (0, _extends3.default)({
                prefix: prefix,
                className: className,
                title: title,
                footer: footer,
                footerAlign: footerAlign,
                footerActions: footerActions,
                onOk: visible ? onOk : noop,
                onCancel: visible ? onCancel : noop,
                okProps: okProps,
                cancelProps: cancelProps,
                locale: locale,
                closeable: closeable,
                rtl: rtl,
                onClose: onClose.bind(this, 'closeClick'),
                height: height
            }, others),
            children
        );
    };

    Dialog.prototype.render = function render() {
        var _props3 = this.props,
            prefix = _props3.prefix,
            visible = _props3.visible,
            hasMask = _props3.hasMask,
            animation = _props3.animation,
            autoFocus = _props3.autoFocus,
            closeable = _props3.closeable,
            onClose = _props3.onClose,
            afterClose = _props3.afterClose,
            shouldUpdatePosition = _props3.shouldUpdatePosition,
            align = _props3.align,
            popupContainer = _props3.popupContainer,
            overlayProps = _props3.overlayProps,
            rtl = _props3.rtl;


        var useCSS = this.useCSSToPosition();

        var _mapcloseableToConfig = this.mapcloseableToConfig(closeable),
            canCloseByCloseClick = _mapcloseableToConfig.canCloseByCloseClick,
            closeConfig = (0, _objectWithoutProperties3.default)(_mapcloseableToConfig, ['canCloseByCloseClick']);

        var newOverlayProps = (0, _extends3.default)({
            disableScroll: true,
            container: popupContainer
        }, overlayProps, {
            prefix: prefix,
            visible: visible,
            animation: animation,
            hasMask: hasMask,
            autoFocus: autoFocus,
            afterClose: afterClose
        }, closeConfig, {
            canCloseByOutSideClick: false,
            align: useCSS ? false : align,
            onRequestClose: onClose,
            needAdjust: false,
            ref: this.getOverlayRef,
            rtl: rtl,
            maskClass: useCSS ? prefix + 'dialog-container' : '',
            isChildrenInMask: useCSS && hasMask
        });
        if (!useCSS) {
            newOverlayProps.beforePosition = this.beforePosition;
            newOverlayProps.onPosition = this.adjustPosition;
            newOverlayProps.shouldUpdatePosition = shouldUpdatePosition;
        }

        var inner = this.renderInner(canCloseByCloseClick);

        // useCSS && hasMask : isFullScreen 并且 有mask的模式下，为了解决 next-overlay-backdrop 覆盖mask，使得点击mask关闭页面的功能不生效的问题，需要开启 Overlay 的 isChildrenInMask 功能，并且把 next-dialog-container 放到 next-overlay-backdrop上
        // useCSS && !hasMask : isFullScreen 并且 没有mask的情况下，需要关闭 isChildrenInMask 功能，以防止children不渲染
        // 其他模式下维持 mask 与 children 同级的关系
        return _react2.default.createElement(
            _overlay2.default,
            newOverlayProps,
            useCSS && !hasMask ? _react2.default.createElement(
                'div',
                {
                    className: prefix + 'dialog-container',
                    dir: rtl ? 'rtl' : undefined
                },
                inner
            ) : inner
        );
    };

    return Dialog;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    /**
     * 是否显示
     */
    visible: _propTypes2.default.bool,
    /**
     * 标题
     */
    title: _propTypes2.default.node,
    /**
     * 内容
     */
    children: _propTypes2.default.node,
    /**
     * 底部内容，设置为 false，则不进行显示
     * @default [<Button type="primary">确定</Button>, <Button>取消</Button>]
     */
    footer: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node]),
    /**
     * 底部按钮的对齐方式
     */
    footerAlign: _propTypes2.default.oneOf(['left', 'center', 'right']),
    /**
     * 指定确定按钮和取消按钮是否存在以及如何排列,<br><br>**可选值**：
     * ['ok', 'cancel']（确认取消按钮同时存在，确认按钮在左）
     * ['cancel', 'ok']（确认取消按钮同时存在，确认按钮在右）
     * ['ok']（只存在确认按钮）
     * ['cancel']（只存在取消按钮）
     */
    footerActions: _propTypes2.default.array,
    /**
     * 在点击确定按钮时触发的回调函数
     * @param {Object} event 点击事件对象
     */
    onOk: _propTypes2.default.func,
    /**
     * 在点击取消按钮时触发的回调函数
     * @param {Object} event 点击事件对象
     */
    onCancel: _propTypes2.default.func,
    /**
     * 应用于确定按钮的属性对象
     */
    okProps: _propTypes2.default.object,
    /**
     * 应用于取消按钮的属性对象
     */
    cancelProps: _propTypes2.default.object,
    /**
     * 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：
     * **close** 表示点击关闭按钮可以关闭对话框
     * **mask** 表示点击遮罩区域可以关闭对话框
     * **esc** 表示按下 esc 键可以关闭对话框
     * 如 'close' 或 'close,esc,mask'
     * 如果设置为 true，则以上关闭方式全部生效
     * 如果设置为 false，则以上关闭方式全部失效
     */
    closeable: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    /**
     * 对话框关闭时触发的回调函数
     * @param {String} trigger 关闭触发行为的描述字符串
     * @param {Object} event 关闭时事件对象
     */
    onClose: _propTypes2.default.func,
    /**
     * 对话框关闭后触发的回调函数, 如果有动画，则在动画结束后触发
     */
    afterClose: _propTypes2.default.func,
    /**
     * 是否显示遮罩
     */
    hasMask: _propTypes2.default.bool,
    /**
     * 显示隐藏时动画的播放方式
     * @property {String} in 进场动画
     * @property {String} out 出场动画
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    /**
     * 对话框弹出时是否自动获得焦点
     */
    autoFocus: _propTypes2.default.bool,
    /**
     * 对话框对齐方式, 具体见Overlay文档
     */
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    /**
     * 当对话框高度超过浏览器视口高度时，是否显示所有内容而不是出现滚动条以保证对话框完整显示在浏览器视口内，该属性仅在对话框垂直水平居中时生效，即 align 被设置为 'cc cc' 时
     */
    isFullScreen: _propTypes2.default.bool,
    /**
     * 是否在对话框重新渲染时及时更新对话框位置，一般用于对话框高度变化后依然能保证原来的对齐方式
     */
    shouldUpdatePosition: _propTypes2.default.bool,
    /**
     * 对话框距离浏览器顶部和底部的最小间距，align 被设置为 'cc cc' 并且 isFullScreen 被设置为 true 时不生效
     */
    minMargin: _propTypes2.default.number,
    /**
     * 透传到弹层组件的属性对象
     */
    overlayProps: _propTypes2.default.object,
    /**
     * 自定义国际化文案对象
     * @property {String} ok 确认按钮文案
     * @property {String} cancel 取消按钮文案
     */
    locale: _propTypes2.default.object,
    /**
     * 对话框的高度样式属性
     */
    height: _propTypes2.default.string,
    // Do not remove this, it's for <ConfigProvider popupContainer={} />
    // see https://github.com/alibaba-fusion/next/issues/1508
    popupContainer: _propTypes2.default.any
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    visible: false,
    footerAlign: 'right',
    footerActions: ['ok', 'cancel'],
    onOk: noop,
    onCancel: noop,
    okProps: {},
    cancelProps: {},
    closeable: 'esc,close',
    onClose: noop,
    afterClose: noop,
    hasMask: true,
    animation: {
        in: 'fadeInDown',
        out: 'fadeOutUp'
    },
    autoFocus: false,
    align: 'cc cc',
    isFullScreen: false,
    shouldUpdatePosition: false,
    minMargin: 40,
    overlayProps: {},
    locale: _zhCn2.default.Dialog
}, _temp);
Dialog.displayName = 'Dialog';
exports.default = Dialog;
module.exports = exports['default'];