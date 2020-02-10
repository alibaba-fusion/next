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

var _class, _temp2;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
var Popup = _overlay2.default.Popup;
var pickOthers = _util.obj.pickOthers;

/**
 * Drawer
 */

var Drawer = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(Drawer, _Component);

    function Drawer() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Drawer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getAlign = function (placement) {
            var align = void 0;
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
        }, _this.getAnimation = function (placement) {
            if ('animation' in _this.props) {
                return _this.props.animation;
            }

            var animation = void 0;
            switch (placement) {
                case 'top':
                    animation = {
                        in: 'slideInDown',
                        out: 'slideOutUp'
                    };
                    break;
                case 'bottom':
                    animation = {
                        in: 'slideInUp',
                        out: 'slideOutDown'
                    };
                    break;
                case 'left':
                    animation = {
                        in: 'slideInLeft',
                        out: 'slideOutLeft'
                    };
                    break;
                case 'right':
                default:
                    animation = {
                        in: 'slideInRight',
                        out: 'slideOutRight'
                    };
                    break;
            }

            return animation;
        }, _this.getOverlayRef = function (ref) {
            _this.overlay = ref;
        }, _this.mapcloseableToConfig = function (closeable) {
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
        }, _this.handleVisibleChange = function (visible, reason, e) {
            var _this$props = _this.props,
                onClose = _this$props.onClose,
                onVisibleChange = _this$props.onVisibleChange;


            if (visible === false) {
                onClose && onClose(reason, e);
            }

            onVisibleChange && onVisibleChange(visible, reason, e);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Drawer.prototype.renderInner = function renderInner(closeable) {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            title = _props.title,
            onClose = _props.onClose,
            locale = _props.locale,
            headerStyle = _props.headerStyle,
            bodyStyle = _props.bodyStyle,
            placement = _props.placement,
            rtl = _props.rtl;


        var others = pickOthers(Object.keys(Drawer.propTypes), this.props);

        return _react2.default.createElement(
            _inner2.default,
            (0, _extends3.default)({
                prefix: prefix,
                title: title,
                className: className,
                locale: locale,
                closeable: closeable,
                rtl: rtl,
                headerStyle: headerStyle,
                bodyStyle: bodyStyle,
                placement: placement,
                onClose: onClose.bind(this, 'closeClick')
            }, others),
            children
        );
    };

    Drawer.prototype.render = function render() {
        var _props2 = this.props,
            prefix = _props2.prefix,
            style = _props2.style,
            width = _props2.width,
            height = _props2.height,
            trigger = _props2.trigger,
            triggerType = _props2.triggerType,
            animation = _props2.animation,
            hasMask = _props2.hasMask,
            visible = _props2.visible,
            placement = _props2.placement,
            onClose = _props2.onClose,
            onVisibleChange = _props2.onVisibleChange,
            closeable = _props2.closeable,
            rtl = _props2.rtl,
            popupContainer = _props2.popupContainer,
            others = (0, _objectWithoutProperties3.default)(_props2, ['prefix', 'style', 'width', 'height', 'trigger', 'triggerType', 'animation', 'hasMask', 'visible', 'placement', 'onClose', 'onVisibleChange', 'closeable', 'rtl', 'popupContainer']);


        var newStyle = (0, _extends3.default)({
            width: width,
            height: height
        }, style);

        var _mapcloseableToConfig = this.mapcloseableToConfig(closeable),
            canCloseByCloseClick = _mapcloseableToConfig.canCloseByCloseClick,
            closeConfig = (0, _objectWithoutProperties3.default)(_mapcloseableToConfig, ['canCloseByCloseClick']);

        var newPopupProps = (0, _extends3.default)({
            prefix: prefix,
            visible: visible,
            trigger: trigger,
            triggerType: triggerType,
            onVisibleChange: this.handleVisibleChange,
            animation: this.getAnimation(placement),
            hasMask: hasMask,
            align: this.getAlign(placement)
        }, closeConfig, {
            canCloseByOutSideClick: false,
            disableScroll: true,
            ref: this.getOverlayRef,
            rtl: rtl,
            target: 'viewport',
            style: newStyle,
            needAdjust: false,
            container: popupContainer
        });

        var inner = this.renderInner(canCloseByCloseClick);

        return _react2.default.createElement(
            Popup,
            (0, _extends3.default)({}, newPopupProps, others),
            inner
        );
    };

    return Drawer;
}(_react.Component), _class.displayName = 'Drawer', _class.propTypes = (0, _extends3.default)({}, Popup.propTypes || {}, {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    // 不建议使用trigger
    trigger: _propTypes2.default.element,
    triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 宽度，仅在 placement是 left right 的时候生效
     */
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 高度，仅在 placement是 top bottom 的时候生效
     */
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
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
     * 位于页面的位置
     */
    placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * 标题
     */
    title: _propTypes2.default.node,
    /**
     * header上的样式
     */
    headerStyle: _propTypes2.default.object,
    /**
     * body上的样式
     */
    bodyStyle: _propTypes2.default.object,
    /**
     * 是否显示
     */
    visible: _propTypes2.default.bool,
    /**
     * 是否显示遮罩
     */
    hasMask: _propTypes2.default.bool,
    // 受控模式下(没有 trigger 的时候)，只会在关闭时触发，相当于onClose
    onVisibleChange: _propTypes2.default.func,
    /**
     * 显示隐藏时动画的播放方式
     * @property {String} in 进场动画
     * @property {String} out 出场动画
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    locale: _propTypes2.default.object,
    // for ConfigProvider
    popupContainer: _propTypes2.default.any
}), _class.defaultProps = {
    prefix: 'next-',
    triggerType: 'click',
    trigger: null,
    closeable: true,
    onClose: noop,
    hasMask: true,
    placement: 'right',
    locale: _zhCn2.default.Drawer
}, _temp2);
Drawer.displayName = 'Drawer';
exports.default = Drawer;
module.exports = exports['default'];