'use strict';

exports.__esModule = true;
exports.default = undefined;

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

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop,
    makeChain = _util.func.makeChain,
    bindCtx = _util.func.bindCtx;

var Popup = _overlay2.default.Popup;

/**
 * Dropdown
 * @description 继承 Popup 的 API，除非特别说明
 */
var Dropdown = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Dropdown, _Component);

    function Dropdown(props) {
        (0, _classCallCheck3.default)(this, Dropdown);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.state = {
            visible: 'visible' in props ? props.visible : props.defaultVisible || false,
            autoFocus: 'autoFocus' in props ? props.autoFocus : false
        };

        bindCtx(_this, ['onTriggerKeyDown', 'onMenuClick', 'onVisibleChange']);
        return _this;
    }

    Dropdown.prototype.getVisible = function getVisible() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

        return 'visible' in props ? props.visible : this.state.visible;
    };

    Dropdown.prototype.onMenuClick = function onMenuClick() {
        this.onVisibleChange(false, 'fromContent');
    };

    Dropdown.prototype.onVisibleChange = function onVisibleChange(visible, from) {
        this.setState({ visible: visible });

        this.props.onVisibleChange(visible, from);
    };

    Dropdown.prototype.onTriggerKeyDown = function onTriggerKeyDown() {
        var autoFocus = true;

        if ('autoFocus' in this.props) {
            autoFocus = this.props.autoFocus;
        }

        this.setState({
            autoFocus: autoFocus
        });
    };

    Dropdown.prototype.render = function render() {
        var child = _react.Children.only(this.props.children);
        if (typeof child.type === 'function' && child.type.isNextMenu) {
            child = _react2.default.cloneElement(child, {
                onItemClick: makeChain(this.onMenuClick, child.props.onItemClick)
            });
        }

        var _props = this.props,
            trigger = _props.trigger,
            rtl = _props.rtl;

        var newTrigger = _react2.default.cloneElement(trigger, {
            onKeyDown: makeChain(this.onTriggerKeyDown, trigger.props.onKeyDown)
        });

        return _react2.default.createElement(
            Popup,
            (0, _extends3.default)({}, this.props, {
                rtl: rtl,
                autoFocus: this.state.autoFocus,
                trigger: newTrigger,
                visible: this.getVisible(),
                onVisibleChange: this.onVisibleChange,
                canCloseByOutSideClick: true
            }),
            child
        );
    };

    return Dropdown;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    /**
     * 弹层内容
     */
    children: _propTypes2.default.node,
    /**
     * 弹层当前是否显示
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认是否显示
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层显示或隐藏时触发的回调函数
     * @param {Boolean} visible 弹层是否显示
     * @param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 触发弹层显示或者隐藏的元素
     */
    trigger: _propTypes2.default.node,
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']
     */
    triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 设置此属性，弹层无法显示或隐藏
     */
    disabled: _propTypes2.default.bool,
    /**
     * 弹层相对于触发元素的定位, 详见 Overlay 的定位部分
     */
    align: _propTypes2.default.string,
    /**
     * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量
     * e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
     */
    offset: _propTypes2.default.array,
    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     */
    delay: _propTypes2.default.number,
    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     */
    autoFocus: _propTypes2.default.bool,
    /**
     * 是否显示遮罩
     */
    hasMask: _propTypes2.default.bool,
    /**
     * 隐藏时是否保留子节点
     */
    cache: _propTypes2.default.bool,
    /**
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画
     * @default { in: 'expandInDown', out: 'expandOutUp' }
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool])
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    defaultVisible: false,
    onVisibleChange: noop,
    triggerType: 'hover',
    disabled: false,
    align: 'tl bl',
    offset: [0, 0],
    delay: 200,
    hasMask: false,
    cache: false,
    onPosition: noop
}, _temp);
Dropdown.displayName = 'Dropdown';
exports.default = Dropdown;
module.exports = exports['default'];