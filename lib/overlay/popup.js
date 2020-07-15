'use strict';

exports.__esModule = true;

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

var _reactDom = require('react-dom');

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('../util');

var _overlay = require('./overlay');

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop,
    makeChain = _util.func.makeChain,
    bindCtx = _util.func.bindCtx;

/**
 * Overlay.Popup
 * @description 继承 Overlay 的 API，除非特别说明
 * */

var Popup = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Popup, _Component);

    function Popup(props) {
        (0, _classCallCheck3.default)(this, Popup);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.state = {
            visible: typeof props.visible === 'undefined' ? props.defaultVisible : props.visible
        };

        bindCtx(_this, ['handleTriggerClick', 'handleTriggerKeyDown', 'handleTriggerMouseEnter', 'handleTriggerMouseLeave', 'handleTriggerFocus', 'handleTriggerBlur', 'handleContentMouseEnter', 'handleContentMouseLeave', 'handleContentMouseDown', 'handleRequestClose', 'handleMaskMouseEnter', 'handleMaskMouseLeave']);
        return _this;
    }

    Popup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if ('visible' in nextProps) {
            return (0, _extends3.default)({}, prevState, {
                visible: nextProps.visible
            });
        }

        return null;
    };

    Popup.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        ['_timer', '_hideTimer', '_showTimer'].forEach(function (time) {
            _this2[time] && clearTimeout(_this2[time]);
        });
    };

    Popup.prototype.handleVisibleChange = function handleVisibleChange(visible, type, e) {
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible
            });
        }

        this.props.onVisibleChange(visible, type, e);
    };

    Popup.prototype.handleTriggerClick = function handleTriggerClick(e) {
        if (this.state.visible && !this.props.canCloseByTrigger) {
            return;
        }

        this.handleVisibleChange(!this.state.visible, 'fromTrigger', e);
    };

    Popup.prototype.handleTriggerKeyDown = function handleTriggerKeyDown(e) {
        var triggerClickKeycode = this.props.triggerClickKeycode;

        var keycodes = Array.isArray(triggerClickKeycode) ? triggerClickKeycode : [triggerClickKeycode];
        if (keycodes.includes(e.keyCode)) {
            e.preventDefault();
            this.handleTriggerClick(e);
        }
    };

    Popup.prototype.handleTriggerMouseEnter = function handleTriggerMouseEnter(e) {
        var _this3 = this;

        this._mouseNotFirstOnMask = false;

        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (!this.state.visible) {
            this._showTimer = setTimeout(function () {
                _this3.handleVisibleChange(true, 'fromTrigger', e);
            }, this.props.delay);
        }
    };

    Popup.prototype.handleTriggerMouseLeave = function handleTriggerMouseLeave(e, type) {
        var _this4 = this;

        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (this.state.visible) {
            this._hideTimer = setTimeout(function () {
                _this4.handleVisibleChange(false, type || 'fromTrigger', e);
            }, this.props.delay);
        }
    };

    Popup.prototype.handleTriggerFocus = function handleTriggerFocus(e) {
        this.handleVisibleChange(true, 'fromTrigger', e);
    };

    Popup.prototype.handleTriggerBlur = function handleTriggerBlur(e) {
        if (!this._isForwardContent) {
            this.handleVisibleChange(false, 'fromTrigger', e);
        }
        this._isForwardContent = false;
    };

    Popup.prototype.handleContentMouseDown = function handleContentMouseDown() {
        this._isForwardContent = true;
    };

    Popup.prototype.handleContentMouseEnter = function handleContentMouseEnter() {
        clearTimeout(this._hideTimer);
    };

    Popup.prototype.handleContentMouseLeave = function handleContentMouseLeave(e) {
        this.handleTriggerMouseLeave(e, 'fromContent');
    };

    Popup.prototype.handleMaskMouseEnter = function handleMaskMouseEnter() {
        if (!this._mouseNotFirstOnMask) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
            this._mouseNotFirstOnMask = false;
        }
    };

    Popup.prototype.handleMaskMouseLeave = function handleMaskMouseLeave() {
        this._mouseNotFirstOnMask = true;
    };

    Popup.prototype.handleRequestClose = function handleRequestClose(type, e) {
        this.handleVisibleChange(false, type, e);
    };

    Popup.prototype.renderTrigger = function renderTrigger() {
        var _this5 = this;

        var _props = this.props,
            trigger = _props.trigger,
            disabled = _props.disabled;

        var props = {
            key: 'trigger',
            'aria-haspopup': true,
            'aria-expanded': this.state.visible
        };

        if (!this.state.visible) {
            props['aria-describedby'] = undefined;
        }

        if (!disabled) {
            var triggerType = this.props.triggerType;

            var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];

            var _ref = trigger && trigger.props || {},
                onClick = _ref.onClick,
                onKeyDown = _ref.onKeyDown,
                onMouseEnter = _ref.onMouseEnter,
                onMouseLeave = _ref.onMouseLeave,
                onFocus = _ref.onFocus,
                onBlur = _ref.onBlur;

            triggerTypes.forEach(function (triggerType) {
                switch (triggerType) {
                    case 'click':
                        props.onClick = makeChain(_this5.handleTriggerClick, onClick);
                        props.onKeyDown = makeChain(_this5.handleTriggerKeyDown, onKeyDown);
                        break;
                    case 'hover':
                        props.onMouseEnter = makeChain(_this5.handleTriggerMouseEnter, onMouseEnter);
                        props.onMouseLeave = makeChain(_this5.handleTriggerMouseLeave, onMouseLeave);
                        break;
                    case 'focus':
                        props.onFocus = makeChain(_this5.handleTriggerFocus, onFocus);
                        props.onBlur = makeChain(_this5.handleTriggerBlur, onBlur);
                        break;
                    default:
                        break;
                }
            });
        }

        return trigger && _react2.default.cloneElement(trigger, props);
    };

    Popup.prototype.renderContent = function renderContent() {
        var _this6 = this;

        var _props2 = this.props,
            children = _props2.children,
            triggerType = _props2.triggerType;

        var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
        var content = _react.Children.only(children);
        var _content$props = content.props,
            onMouseDown = _content$props.onMouseDown,
            onMouseEnter = _content$props.onMouseEnter,
            onMouseLeave = _content$props.onMouseLeave;

        var props = {
            key: 'portal'
        };

        triggerTypes.forEach(function (triggerType) {
            switch (triggerType) {
                case 'focus':
                    props.onMouseDown = makeChain(_this6.handleContentMouseDown, onMouseDown);
                    break;
                case 'hover':
                    props.onMouseEnter = makeChain(_this6.handleContentMouseEnter, onMouseEnter);
                    props.onMouseLeave = makeChain(_this6.handleContentMouseLeave, onMouseLeave);
                    break;
                default:
                    break;
            }
        });

        return _react2.default.cloneElement(content, props);
    };

    Popup.prototype.renderPortal = function renderPortal() {
        var _this7 = this;

        var _props3 = this.props,
            target = _props3.target,
            safeNode = _props3.safeNode,
            followTrigger = _props3.followTrigger,
            triggerType = _props3.triggerType,
            hasMask = _props3.hasMask,
            wrapperStyle = _props3.wrapperStyle,
            others = (0, _objectWithoutProperties3.default)(_props3, ['target', 'safeNode', 'followTrigger', 'triggerType', 'hasMask', 'wrapperStyle']);
        var container = this.props.container;

        var findTriggerNode = function findTriggerNode() {
            return (0, _reactDom.findDOMNode)(_this7);
        };
        var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
        safeNodes.unshift(findTriggerNode);

        var newWrapperStyle = wrapperStyle || {};

        if (followTrigger) {
            container = function container(trigger) {
                return trigger && trigger.parentNode || trigger;
            };
            newWrapperStyle.position = 'relative';
        }

        if (triggerType === 'hover' && hasMask) {
            others.onMaskMouseEnter = this.handleMaskMouseEnter;
            others.onMaskMouseLeave = this.handleMaskMouseLeave;
        }

        return _react2.default.createElement(
            _overlay2.default,
            (0, _extends3.default)({}, others, {
                key: 'overlay',
                ref: function ref(overlay) {
                    return _this7.overlay = overlay;
                },
                visible: this.state.visible,
                target: target || findTriggerNode,
                container: container,
                safeNode: safeNodes,
                wrapperStyle: newWrapperStyle,
                triggerType: triggerType,
                hasMask: hasMask,
                onRequestClose: this.handleRequestClose
            }),
            this.renderContent()
        );
    };

    Popup.prototype.render = function render() {
        return [this.renderTrigger(), this.renderPortal()];
    };

    return Popup;
}(_react.Component), _class.propTypes = {
    /**
     * 弹层内容
     */
    children: _propTypes2.default.node,
    /**
     * 触发弹层显示或隐藏的元素
     */
    trigger: _propTypes2.default.element,
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     */
    triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
     */

    triggerClickKeycode: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.array]),
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
     * @param {String} type 触发弹层显示或隐藏的来源 fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     * @param {Object} e DOM事件
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 设置此属性，弹层无法显示或隐藏
     */
    disabled: _propTypes2.default.bool,
    autoFit: _propTypes2.default.bool,
    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     */
    delay: _propTypes2.default.number,
    /**
     * trigger 是否可以关闭弹层
     */
    canCloseByTrigger: _propTypes2.default.bool,
    /**
     * 弹层定位的参照元素
     * @default target 属性，即触发元素
     */
    target: _propTypes2.default.any,
    safeNode: _propTypes2.default.any,
    /**
     * 是否跟随trigger滚动
     */
    followTrigger: _propTypes2.default.bool,
    container: _propTypes2.default.any,
    hasMask: _propTypes2.default.bool,
    wrapperStyle: _propTypes2.default.object,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    triggerType: 'hover',
    triggerClickKeycode: [_util.KEYCODE.SPACE, _util.KEYCODE.ENTER],
    defaultVisible: false,
    onVisibleChange: noop,
    disabled: false,
    autoFit: false,
    delay: 200,
    canCloseByTrigger: true,
    followTrigger: false,
    container: function container() {
        return document.body;
    },
    rtl: false
}, _temp);
Popup.displayName = 'Popup';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Popup);
module.exports = exports['default'];