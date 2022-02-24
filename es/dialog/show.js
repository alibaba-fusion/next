import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';

var _class, _temp2;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Message from '../message';
import zhCN from '../locale/zh-cn';
import dialog from './dialog';
import dialog2 from './dialog-v2';

var Dialog = ConfigProvider.config(dialog);
var Dialog2 = ConfigProvider.config(dialog2);

var noop = function noop() {};
var MESSAGE_TYPE = {
    alert: 'warning', // deprecated in 2.x
    confirm: 'help',

    success: 'success',
    error: 'error',
    warning: 'warning',
    notice: 'notice',
    help: 'help'
};

export var ModalInner = function ModalInner(_ref) {
    var type = _ref.type,
        _ref$messageProps = _ref.messageProps,
        messageProps = _ref$messageProps === undefined ? {} : _ref$messageProps,
        title = _ref.title,
        rtl = _ref.rtl,
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === undefined ? 'next-' : _ref$prefix,
        content = _ref.content;

    return React.createElement(
        Message,
        _extends({
            size: 'large',
            shape: 'addon',
            type: MESSAGE_TYPE[type]
        }, messageProps, {
            title: title,
            rtl: rtl,
            className: cx(prefix + 'dialog-message', messageProps.className)
        }),
        content
    );
};

var Modal = (_temp2 = _class = function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
        var _temp, _this, _ret;

        _classCallCheck(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
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
            v2 = _props.v2,
            _props$width = _props.width,
            width = _props$width === undefined ? 420 : _props$width,
            others = _objectWithoutProperties(_props, ['prefix', 'type', 'title', 'content', 'messageProps', 'footerActions', 'onOk', 'onCancel', 'onClose', 'okProps', 'needWrapper', 'rtl', 'className', 'v2', 'width']);

        var newTitle = needWrapper && type ? null : title;

        var newContent = needWrapper && type ? React.createElement(ModalInner, {
            type: type,
            messageProps: messageProps,
            title: title,
            rtl: rtl,
            prefix: prefix,
            content: content
        }) : content;

        var newFooterActions = footerActions || (type === 'confirm' ? ['ok', 'cancel'] : ['alert', 'success', 'error', 'notice', 'warning', 'help'].indexOf(type) > -1 ? ['ok'] : undefined);
        var newOnOk = this.wrapper(onOk, this.close);
        var newOnCancel = this.wrapper(onCancel, this.close);
        var newOnClose = this.wrapper(onClose, this.close);

        var _state = this.state,
            visible = _state.visible,
            loading = _state.loading;
        // 不能直接改，这里修改相当于改了全局 okProps
        // okProps.loading = loading;

        var newOkProps = _extends({}, okProps);
        if (!('loading' in okProps)) {
            newOkProps.loading = loading;
        }

        var classNames = cx(prefix + 'dialog-quick', className);

        var Tag = v2 ? Dialog2 : Dialog;

        return React.createElement(
            Tag,
            _extends({
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
                okProps: newOkProps,
                className: classNames,
                width: v2 ? width : undefined
            }),
            newContent
        );
    };

    return Modal;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    pure: PropTypes.bool,
    rtl: PropTypes.bool,
    type: PropTypes.oneOf(['alert', 'confirm', 'success', 'error', 'notice', 'warning', 'help']),
    title: PropTypes.node,
    content: PropTypes.node,
    messageProps: PropTypes.object,
    footerActions: PropTypes.array,
    /**
     * Callback function triggered when Ok button is clicked
     * @param {Object} event click event object
     * @returns {Promise} Optionally handles a Promise return object
     */
    onOk: PropTypes.func,
    /**
     * Callback function triggered when Cancel button is clicked
     * @param {Object} event click event object
     * @returns {Promise} Optionally handles a Promise return object
     */
    onCancel: PropTypes.func,
    /**
     * Callback function triggered when Close button is clicked
     * @param {Object} event click event object
     * @returns {Promise} Optionally handles a Promise return object
     */
    onClose: PropTypes.func,
    okProps: PropTypes.object,
    locale: PropTypes.object,
    needWrapper: PropTypes.bool,
    className: PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    messageProps: {},
    onOk: noop,
    onCancel: noop,
    onClose: noop,
    okProps: {},
    locale: zhCN.Dialog,
    needWrapper: true
}, _temp2);
Modal.displayName = 'Modal';


var ConfigModal = ConfigProvider.config(Modal, { componentName: 'Dialog' });

/**
 * 创建对话框
 * @exportName show
 * @param {Object} config 配置项
 * @returns {Object} 包含有 hide 方法，可用来关闭对话框
 */
var _show = function _show() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var container = document.createElement('div');
    var unmount = function unmount() {
        if (config.afterClose) {
            config.afterClose();
        }
        ReactDOM.unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
    };

    document.body.appendChild(container);
    var newContext = config.contextConfig;
    if (!newContext) newContext = ConfigProvider.getContext();

    var instance = void 0,
        myRef = void 0;

    ReactDOM.render(React.createElement(
        ConfigProvider,
        newContext,
        React.createElement(ConfigModal, _extends({}, config, {
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

export { _show as show };
var methodFactory = function methodFactory(type) {
    return function () {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        config.type = type;
        return _show(config);
    };
};

/**
 * 创建警示对话框
 * @exportName alert
 * @param {Object} config 配置项
 * @returns {Object} 包含有 hide 方法，可用来关闭对话框
 */
var _alert = methodFactory('alert');

export { _alert as alert };
var _success = methodFactory('success');
export { _success as success };
var _error = methodFactory('error');
export { _error as error };
var _notice = methodFactory('notice');
export { _notice as notice };
var _warning = methodFactory('warning');
export { _warning as warning };
var _help = methodFactory('help');

/**
 * 创建确认对话框
 * @exportName confirm
 * @param {Object} config 配置项
 * @returns {Object} 包含有 hide 方法，可用来关闭对话框
 */
export { _help as help };
var _confirm = methodFactory('confirm');

export { _confirm as confirm };
export var withContext = function withContext(WrappedComponent) {
    var HOC = function HOC(props) {
        return React.createElement(
            ConfigProvider.Consumer,
            null,
            function (contextConfig) {
                return React.createElement(WrappedComponent, _extends({}, props, {
                    contextDialog: {
                        show: function show() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _show(_extends({}, config, { contextConfig: contextConfig }));
                        },
                        alert: function alert() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _alert(_extends({}, config, { contextConfig: contextConfig }));
                        },
                        confirm: function confirm() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _confirm(_extends({}, config, { contextConfig: contextConfig }));
                        },
                        success: function success() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _success(_extends({}, config, { contextConfig: contextConfig }));
                        },
                        error: function error() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _error(_extends({}, config, { contextConfig: contextConfig }));
                        },
                        warning: function warning() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _warning(_extends({}, config, { contextConfig: contextConfig }));
                        },
                        notice: function notice() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _notice(_extends({}, config, { contextConfig: contextConfig }));
                        },
                        help: function help() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _help(_extends({}, config, { contextConfig: contextConfig }));
                        }
                    }
                }));
            }
        );
    };
    return HOC;
};