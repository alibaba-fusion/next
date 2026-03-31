import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component, forwardRef, useImperativeHandle, } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Message from '../message';
import zhCN from '../locale/zh-cn';
import dialog from './dialog';
import Dialog2Ins from './dialog-v2';
var Dialog = ConfigProvider.config(dialog);
var Dialog2 = ConfigProvider.config(forwardRef(function (props, ref) {
    useImperativeHandle(ref, function () { return undefined; });
    return React.createElement(Dialog2Ins, __assign({}, props));
}));
var noop = function () { };
var MESSAGE_TYPE = {
    alert: 'warning', // deprecated in 2.x
    confirm: 'help',
    success: 'success',
    error: 'error',
    warning: 'warning',
    notice: 'notice',
    help: 'help',
};
export var ModalInner = function (_a) {
    var type = _a.type, _b = _a.messageProps, messageProps = _b === void 0 ? {} : _b, title = _a.title, rtl = _a.rtl, _c = _a.prefix, prefix = _c === void 0 ? 'next-' : _c, content = _a.content;
    return (React.createElement(Message, __assign({ size: "large", shape: "addon", type: MESSAGE_TYPE[type] }, messageProps, { title: title, rtl: rtl, className: cx("".concat(prefix, "dialog-message"), messageProps.className) }), content));
};
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.state = {
            visible: true,
            okLoading: false,
            cancelLoading: false,
        };
        _this.close = function () {
            _this.setState({
                visible: false,
            });
        };
        _this.okLoading = function (loading) {
            _this.setState({
                okLoading: loading,
            });
        };
        _this.cancelLoading = function (loading) {
            _this.setState({
                cancelLoading: loading,
            });
        };
        return _this;
    }
    Modal.prototype.wrapper = function (fn, callback, changeLoading) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var res = fn.apply(void 0, __spreadArray([], __read(args), false));
            if (res && res.then) {
                changeLoading(true);
                res
                    .then(function (result) {
                    changeLoading(false);
                    if (result !== false) {
                        return callback();
                    }
                })
                    .catch(function (e) {
                    changeLoading(false);
                    throw e;
                });
            }
            else if (res !== false) {
                return callback();
            }
        };
    };
    Modal.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, type = _a.type, title = _a.title, content = _a.content, messageProps = _a.messageProps, footerActions = _a.footerActions, onOk = _a.onOk, onCancel = _a.onCancel, onClose = _a.onClose, okProps = _a.okProps, cancelProps = _a.cancelProps, needWrapper = _a.needWrapper, rtl = _a.rtl, className = _a.className, v2 = _a.v2, _b = _a.width, width = _b === void 0 ? 420 : _b, others = __rest(_a, ["prefix", "type", "title", "content", "messageProps", "footerActions", "onOk", "onCancel", "onClose", "okProps", "cancelProps", "needWrapper", "rtl", "className", "v2", "width"]);
        var newTitle = needWrapper && type ? null : title;
        var newContent = needWrapper && type ? (React.createElement(ModalInner, { type: type, messageProps: messageProps, title: title, rtl: rtl, prefix: prefix, content: content })) : (content);
        var newFooterActions = footerActions ||
            (type === 'confirm'
                ? ['ok', 'cancel']
                : ['alert', 'success', 'error', 'notice', 'warning', 'help'].indexOf(type) > -1
                    ? ['ok']
                    : undefined);
        var newOnOk = this.wrapper(onOk, this.close, this.okLoading);
        var newOnCancel = this.wrapper(onCancel, this.close, this.cancelLoading);
        var newOnClose = this.wrapper(onClose, this.close, this.cancelLoading);
        var _c = this.state, visible = _c.visible, okLoading = _c.okLoading, cancelLoading = _c.cancelLoading;
        // 不能直接改，这里修改相当于改了全局 okProps
        // okProps.loading = loading;
        var newOkProps = __assign({}, okProps);
        if (!('loading' in okProps)) {
            newOkProps.loading = okLoading;
        }
        var newCancelProps = __assign({}, cancelProps);
        if (!('loading' in cancelProps)) {
            newCancelProps.loading = cancelLoading;
        }
        var classNames = cx("".concat(prefix, "dialog-quick"), className);
        var Tag = v2 ? Dialog2 : Dialog;
        return (React.createElement(Tag, __assign({ prefix: prefix, role: "alertdialog" }, others, { visible: visible, title: newTitle, rtl: rtl, footerActions: newFooterActions, onOk: this.state.loading ? noop : newOnOk, onCancel: newOnCancel, onClose: newOnClose, okProps: newOkProps, cancelProps: newCancelProps, className: classNames, width: v2 ? width : undefined }), newContent));
    };
    Modal.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        type: PropTypes.oneOf([
            'alert',
            'confirm',
            'success',
            'error',
            'notice',
            'warning',
            'help',
        ]),
        title: PropTypes.node,
        content: PropTypes.node,
        messageProps: PropTypes.object,
        footerActions: PropTypes.array,
        onOk: PropTypes.func,
        onCancel: PropTypes.func,
        onClose: PropTypes.func,
        okProps: PropTypes.object,
        cancelProps: PropTypes.object,
        locale: PropTypes.object,
        needWrapper: PropTypes.bool,
        className: PropTypes.string,
    };
    Modal.defaultProps = {
        prefix: 'next-',
        pure: false,
        messageProps: {},
        onOk: noop,
        onCancel: noop,
        onClose: noop,
        okProps: {},
        cancelProps: {},
        locale: zhCN.Dialog,
        needWrapper: true,
    };
    return Modal;
}(Component));
var ConfigModal = ConfigProvider.config(Modal, { componentName: 'Dialog' });
/**
 * 创建对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
export var show = function (config) {
    if (config === void 0) { config = {}; }
    var container = document.createElement('div');
    var unmount = function () {
        var _a;
        if (config.afterClose) {
            config.afterClose();
        }
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.unmountComponentAtNode(container);
        (_a = container.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(container);
    };
    document.body.appendChild(container);
    var newContext = config.contextConfig;
    if (!newContext)
        newContext = ConfigProvider.getContext();
    var instance, myRef;
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(React.createElement(ConfigProvider, __assign({}, newContext),
        React.createElement(ConfigModal, __assign({}, config, { afterClose: unmount, ref: function (ref) {
                myRef = ref;
            } }))), container, function () {
        instance = myRef;
    });
    return {
        hide: function () {
            var inc = instance && instance.getInstance();
            inc && inc.close();
        },
    };
};
var methodFactory = function (type) {
    return function (config) {
        if (config === void 0) { config = {}; }
        config.type = type;
        return show(config);
    };
};
/**
 * 创建警示对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
export var alert = methodFactory('alert');
export var success = methodFactory('success');
export var error = methodFactory('error');
export var notice = methodFactory('notice');
export var warning = methodFactory('warning');
export var help = methodFactory('help');
/**
 * 创建确认对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
export var confirm = methodFactory('confirm');
export var withContext = function (WrappedComponent) {
    var HOC = function (props) {
        return (React.createElement(ConfigProvider.Consumer, null, function (contextConfig) { return (React.createElement(WrappedComponent
        // why AnyProps? see: https://react-typescript-cheatsheet.netlify.app/docs/hoc/react_hoc_docs
        , __assign({}, props, { contextDialog: {
                show: function (config) {
                    if (config === void 0) { config = {}; }
                    return show(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                alert: function (config) {
                    if (config === void 0) { config = {}; }
                    return alert(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                confirm: function (config) {
                    if (config === void 0) { config = {}; }
                    return confirm(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                success: function (config) {
                    if (config === void 0) { config = {}; }
                    return success(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                error: function (config) {
                    if (config === void 0) { config = {}; }
                    return error(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                warning: function (config) {
                    if (config === void 0) { config = {}; }
                    return warning(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                notice: function (config) {
                    if (config === void 0) { config = {}; }
                    return notice(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                help: function (config) {
                    if (config === void 0) { config = {}; }
                    return help(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
            } }))); }));
    };
    return HOC;
};
