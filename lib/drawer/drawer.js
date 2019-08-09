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

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            var animation = void 0;
            switch (placement) {
                case 'top':
                    animation = {
                        in: 'fadeInDown',
                        out: 'fadeOutUp'
                    };
                    break;
                case 'bottom':
                    animation = {
                        in: 'fadeInUp',
                        out: 'fadeOutDown'
                    };
                    break;
                case 'left':
                    animation = {
                        in: 'fadeInLeft',
                        out: 'fadeOutLeft'
                    };
                    break;
                case 'right':
                default:
                    animation = {
                        in: 'fadeInRight',
                        out: 'fadeOutRight'
                    };
                    break;
            }

            return animation;
        }, _this.getOverlayRef = function (ref) {
            _this.overlay = ref;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Drawer.prototype.mapcloseableToConfig = function mapcloseableToConfig(closeable) {
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

    Drawer.prototype.renderInner = function renderInner(closeable) {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            locale = _props.locale,
            placement = _props.placement,
            rtl = _props.rtl;


        var others = pickOthers(Object.keys(Drawer.propTypes), this.props);

        return _react2.default.createElement(
            _inner2.default,
            (0, _extends3.default)({
                prefix: prefix,
                className: className,
                locale: locale,
                closeable: closeable,
                rtl: rtl,
                placement: placement
            }, others),
            children
        );
    };

    Drawer.prototype.render = function render() {
        var _props2 = this.props,
            prefix = _props2.prefix,
            trigger = _props2.trigger,
            triggerType = _props2.triggerType,
            animation = _props2.animation,
            hasMask = _props2.hasMask,
            placement = _props2.placement,
            closeable = _props2.closeable,
            rtl = _props2.rtl,
            others = (0, _objectWithoutProperties3.default)(_props2, ['prefix', 'trigger', 'triggerType', 'animation', 'hasMask', 'placement', 'closeable', 'rtl']);

        var _mapcloseableToConfig = this.mapcloseableToConfig(closeable),
            canCloseByCloseClick = _mapcloseableToConfig.canCloseByCloseClick,
            closeConfig = (0, _objectWithoutProperties3.default)(_mapcloseableToConfig, ['canCloseByCloseClick']);

        var newPopupProps = (0, _extends3.default)({
            prefix: prefix,
            trigger: trigger,
            triggerType: triggerType,
            animation: animation || this.getAnimation(placement),
            hasMask: hasMask,
            align: this.getAlign(placement)
        }, closeConfig, {
            canCloseByOutSideClick: false,
            disableScroll: true,
            ref: this.getOverlayRef,
            rtl: rtl,
            target: 'viewport'
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
    /**
     * 触发弹层显示或隐藏的元素
     */
    trigger: _propTypes2.default.element,
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     */
    triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 是否显示
     */
    visible: _propTypes2.default.bool,
    /**
     * 是否显示遮罩
     */
    hasMask: _propTypes2.default.bool,
    /**
     * 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：
     * **mask** 表示点击遮罩区域可以关闭对话框
     * **esc** 表示按下 esc 键可以关闭对话框
     * 如 'mask' 或 'esc,mask'
     * 如果设置为 true，则以上关闭方式全部生效
     * 如果设置为 false，则以上关闭方式全部失效
     */
    closeable: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    /**
     * 位于页面的位置
     */
    placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * 弹层显示或隐藏时触发的回调
     * @param {Boolean} visible 弹层是否显示
     * @param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 显示隐藏时动画的播放方式
     * @property {String} in 进场动画
     * @property {String} out 出场动画
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool])
}), _class.defaultProps = {
    prefix: 'next-',
    triggerType: 'click',
    trigger: null,
    closeable: true,
    hasMask: true,
    placement: 'right'
}, _temp2);
Drawer.displayName = 'Drawer';
exports.default = Drawer;
module.exports = exports['default'];