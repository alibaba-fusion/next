'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

/**
 * Message
 */
var Message = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(Message, _Component);

    function Message() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Message);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            visible: typeof _this.props.visible === 'undefined' ? _this.props.defaultVisible : _this.props.visible
        }, _this.onClose = function () {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: false
                });
            }
            _this.props.onClose(false);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Message.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        if ('visible' in props) {
            return {
                visible: props.visible
            };
        }

        return {};
    };

    Message.prototype.render = function render() {
        var _classNames;

        /* eslint-disable no-unused-vars */
        var _props = this.props,
            prefix = _props.prefix,
            pure = _props.pure,
            className = _props.className,
            style = _props.style,
            type = _props.type,
            shape = _props.shape,
            size = _props.size,
            title = _props.title,
            children = _props.children,
            defaultVisible = _props.defaultVisible,
            propsVisible = _props.visible,
            icon = _props.iconType,
            closeable = _props.closeable,
            onClose = _props.onClose,
            afterClose = _props.afterClose,
            animation = _props.animation,
            rtl = _props.rtl,
            locale = _props.locale;

        var others = (0, _extends3.default)({}, _util.obj.pickOthers(Object.keys(Message.propTypes), this.props));
        /* eslint-enable */
        var visible = this.state.visible;

        var messagePrefix = prefix + 'message';

        var classes = (0, _classnames2.default)((_classNames = {}, _classNames[messagePrefix] = true, _classNames[prefix + 'message-' + type] = type, _classNames['' + prefix + shape] = shape, _classNames['' + prefix + size] = size, _classNames[prefix + 'title-content'] = !!title, _classNames[prefix + 'only-content'] = !title && !!children, _classNames[className] = className, _classNames));

        var newChildren = visible ? _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                role: 'alert',
                style: style
            }, others, {
                className: classes,
                dir: rtl ? 'rtl' : undefined
            }),
            closeable ? _react2.default.createElement(
                'a',
                {
                    role: 'button',
                    'aria-label': locale.closeAriaLabel,
                    className: messagePrefix + '-close',
                    onClick: this.onClose
                },
                _react2.default.createElement(_icon2.default, { type: 'close' })
            ) : null,
            _react2.default.createElement(_icon2.default, {
                className: messagePrefix + '-symbol ' + (!icon && messagePrefix + '-symbol-icon'),
                type: icon
            }),
            title ? _react2.default.createElement(
                'div',
                { className: messagePrefix + '-title' },
                title
            ) : null,
            children ? _react2.default.createElement(
                'div',
                { className: messagePrefix + '-content' },
                children
            ) : null
        ) : null;

        if (animation) {
            return _react2.default.createElement(
                _animate2.default.Expand,
                { animationAppear: false, afterLeave: afterClose },
                newChildren
            );
        }

        return newChildren;
    };

    return Message;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    /**
     * 反馈类型
     */
    type: _propTypes2.default.oneOf(['success', 'warning', 'error', 'notice', 'help', 'loading']),
    /**
     * 反馈外观
     */
    shape: _propTypes2.default.oneOf(['inline', 'addon', 'toast']),
    /**
     * 反馈大小
     */
    size: _propTypes2.default.oneOf(['medium', 'large']),
    /**
     * 标题
     */
    title: _propTypes2.default.node,
    /**
     * 内容
     */
    children: _propTypes2.default.node,
    /**
     * 默认是否显示
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 当前是否显示
     */
    visible: _propTypes2.default.bool,
    /**
     * 显示的图标类型，会覆盖内部设置的IconType
     */
    iconType: _propTypes2.default.string,
    /**
     * 显示关闭按钮
     */
    closeable: _propTypes2.default.bool,
    /**
     * 关闭按钮的回调
     */
    onClose: _propTypes2.default.func,
    /**
     * 关闭之后调用的函数
     */
    afterClose: _propTypes2.default.func,
    /**
     * 是否开启展开收起动画
     */
    animation: _propTypes2.default.bool,
    locale: _propTypes2.default.object,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    type: 'success',
    shape: 'inline',
    size: 'medium',
    defaultVisible: true,
    closeable: false,
    onClose: noop,
    afterClose: noop,
    animation: true,
    locale: _zhCn2.default.Message
}, _temp2);
Message.displayName = 'Message';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(Message));
module.exports = exports['default'];