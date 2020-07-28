'use strict';

exports.__esModule = true;
exports.confirm = exports.alert = exports.show = exports.ModalInner = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = _configProvider2.default.config(_dialog2.default);

var noop = function noop() {};
var MESSAGE_TYPE = {
    alert: 'warning',
    confirm: 'help'
};

var ModalInner = exports.ModalInner = function ModalInner(_ref) {
    var type = _ref.type,
        _ref$messageProps = _ref.messageProps,
        messageProps = _ref$messageProps === undefined ? {} : _ref$messageProps,
        title = _ref.title,
        rtl = _ref.rtl,
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === undefined ? 'next-' : _ref$prefix,
        content = _ref.content;

    return _react2.default.createElement(
        _message2.default,
        (0, _extends3.default)({
            size: 'large',
            shape: 'addon',
            type: MESSAGE_TYPE[type]
        }, messageProps, {
            title: title,
            rtl: rtl,
            className: (0, _classnames2.default)(prefix + 'dialog-message', messageProps.className)
        }),
        content
    );
};

var Modal = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(Modal, _Component);

    function Modal() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            visible: true,
            loading: false
        }, _this.close = function () {
            _this.setState({
                visible: false
            });
        }, _this.loading = function (loading) {
            _this.setState({
                loading: loading
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Modal.prototype.wrapper = function wrapper(fn, callback) {
        var _this2 = this;

        return function () {
            var res = fn.apply(undefined, arguments);
            if (res && res.then) {
                _this2.loading(true);

                res.then(function (result) {
                    _this2.loading(false);

                    if (result !== false) {
                        return callback();
                    }
                }).catch(function (e) {
                    _this2.loading(false);
                    throw e;
                });
            } else if (res !== false) {
                return callback();
            }
        };
    };

    Modal.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            type = _props.type,
            title = _props.title,
            content = _props.content,
            messageProps = _props.messageProps,
            footerActions = _props.footerActions,
            onOk = _props.onOk,
            onCancel = _props.onCancel,
            onClose = _props.onClose,
            okProps = _props.okProps,
            needWrapper = _props.needWrapper,
            rtl = _props.rtl,
            className = _props.className,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'type', 'title', 'content', 'messageProps', 'footerActions', 'onOk', 'onCancel', 'onClose', 'okProps', 'needWrapper', 'rtl', 'className']);

        var newTitle = needWrapper && type ? null : title;

        var newContent = needWrapper && type ? _react2.default.createElement(ModalInner, {
            type: type,
            messageProps: messageProps,
            title: title,
            rtl: rtl,
            prefix: prefix,
            content: content
        }) : content;

        var newFooterActions = footerActions || (type === 'alert' ? ['ok'] : type === 'confirm' ? ['ok', 'cancel'] : undefined);
        var newOnOk = this.wrapper(onOk, this.close);
        var newOnCancel = this.wrapper(onCancel, this.close);
        var newOnClose = this.wrapper(onClose, this.close);

        var _state = this.state,
            visible = _state.visible,
            loading = _state.loading;

        okProps.loading = loading;

        var classNames = (0, _classnames2.default)(prefix + 'dialog-quick', className);

        return _react2.default.createElement(
            Dialog,
            (0, _extends3.default)({
                prefix: prefix,
                role: 'alertdialog'
            }, others, {
                visible: visible,
                title: newTitle,
                rtl: rtl,
                footerActions: newFooterActions,
                onOk: this.state.loading ? noop : newOnOk,
                onCancel: newOnCancel,
                onClose: newOnClose,
                okProps: okProps,
                className: classNames
            }),
            newContent
        );
    };

    return Modal;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    type: _propTypes2.default.oneOf(['alert', 'confirm']),
    title: _propTypes2.default.node,
    content: _propTypes2.default.node,
    messageProps: _propTypes2.default.object,
    footerActions: _propTypes2.default.array,
    /**
     * Callback function triggered when Ok button is clicked
     * @param {Object} event click event object
     * @returns {Promise} Optionally handles a Promise return object
     */
    onOk: _propTypes2.default.func,
    /**
     * Callback function triggered when Cancel button is clicked
     * @param {Object} event click event object
     * @returns {Promise} Optionally handles a Promise return object
     */
    onCancel: _propTypes2.default.func,
    /**
     * Callback function triggered when Close button is clicked
     * @param {Object} event click event object
     * @returns {Promise} Optionally handles a Promise return object
     */
    onClose: _propTypes2.default.func,
    okProps: _propTypes2.default.object,
    locale: _propTypes2.default.object,
    needWrapper: _propTypes2.default.bool,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    messageProps: {},
    onOk: noop,
    onCancel: noop,
    onClose: noop,
    okProps: {},
    locale: _zhCn2.default.Dialog,
    needWrapper: true
}, _temp2);
Modal.displayName = 'Modal';


var ConfigModal = _configProvider2.default.config(Modal, { componentName: 'Dialog' });

/**
 * 创建对话框
 * @exportName show
 * @param {Object} config 配置项
 * @returns {Object} 包含有 hide 方法，可用来关闭对话框
 */
var show = exports.show = function show() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var container = document.createElement('div');
    var unmount = function unmount() {
        if (config.afterClose) {
            config.afterClose();
        }
        _reactDom2.default.unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
    };

    document.body.appendChild(container);
    var newContext = _configProvider2.default.getContext();

    var instance = void 0,
        myRef = void 0;

    _reactDom2.default.render(_react2.default.createElement(
        _configProvider2.default,
        newContext,
        _react2.default.createElement(ConfigModal, (0, _extends3.default)({}, config, {
            afterClose: unmount,
            ref: function ref(_ref2) {
                myRef = _ref2;
            }
        }))
    ), container, function () {
        instance = myRef;
    });
    return {
        hide: function hide() {
            var inc = instance && instance.getInstance();
            inc && inc.close();
        }
    };
};

var methodFactory = function methodFactory(type) {
    return function () {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        config.type = type;
        return show(config);
    };
};

/**
 * 创建警示对话框
 * @exportName alert
 * @param {Object} config 配置项
 * @returns {Object} 包含有 hide 方法，可用来关闭对话框
 */
var alert = exports.alert = methodFactory('alert');

/**
 * 创建确认对话框
 * @exportName confirm
 * @param {Object} config 配置项
 * @returns {Object} 包含有 hide 方法，可用来关闭对话框
 */
var confirm = exports.confirm = methodFactory('confirm');