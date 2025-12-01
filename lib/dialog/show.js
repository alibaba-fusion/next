"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withContext = exports.confirm = exports.help = exports.warning = exports.notice = exports.error = exports.success = exports.alert = exports.show = exports.ModalInner = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var message_1 = tslib_1.__importDefault(require("../message"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var dialog_1 = tslib_1.__importDefault(require("./dialog"));
var dialog_v2_1 = tslib_1.__importDefault(require("./dialog-v2"));
var Dialog = config_provider_1.default.config(dialog_1.default);
var Dialog2 = config_provider_1.default.config((0, react_1.forwardRef)(function (props, ref) {
    (0, react_1.useImperativeHandle)(ref, function () { return undefined; });
    return react_1.default.createElement(dialog_v2_1.default, tslib_1.__assign({}, props));
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
var ModalInner = function (_a) {
    var type = _a.type, _b = _a.messageProps, messageProps = _b === void 0 ? {} : _b, title = _a.title, rtl = _a.rtl, _c = _a.prefix, prefix = _c === void 0 ? 'next-' : _c, content = _a.content;
    return (react_1.default.createElement(message_1.default, tslib_1.__assign({ size: "large", shape: "addon", type: MESSAGE_TYPE[type] }, messageProps, { title: title, rtl: rtl, className: (0, classnames_1.default)("".concat(prefix, "dialog-message"), messageProps.className) }), content));
};
exports.ModalInner = ModalInner;
var Modal = /** @class */ (function (_super) {
    tslib_1.__extends(Modal, _super);
    function Modal() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
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
            var res = fn.apply(void 0, tslib_1.__spreadArray([], tslib_1.__read(args), false));
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
        var _a = this.props, prefix = _a.prefix, type = _a.type, title = _a.title, content = _a.content, messageProps = _a.messageProps, footerActions = _a.footerActions, onOk = _a.onOk, onCancel = _a.onCancel, onClose = _a.onClose, okProps = _a.okProps, cancelProps = _a.cancelProps, needWrapper = _a.needWrapper, rtl = _a.rtl, className = _a.className, v2 = _a.v2, _b = _a.width, width = _b === void 0 ? 420 : _b, others = tslib_1.__rest(_a, ["prefix", "type", "title", "content", "messageProps", "footerActions", "onOk", "onCancel", "onClose", "okProps", "cancelProps", "needWrapper", "rtl", "className", "v2", "width"]);
        var newTitle = needWrapper && type ? null : title;
        var newContent = needWrapper && type ? (react_1.default.createElement(exports.ModalInner, { type: type, messageProps: messageProps, title: title, rtl: rtl, prefix: prefix, content: content })) : (content);
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
        var newOkProps = tslib_1.__assign({}, okProps);
        if (!('loading' in okProps)) {
            newOkProps.loading = okLoading;
        }
        var newCancelProps = tslib_1.__assign({}, cancelProps);
        if (!('loading' in cancelProps)) {
            newCancelProps.loading = cancelLoading;
        }
        var classNames = (0, classnames_1.default)("".concat(prefix, "dialog-quick"), className);
        var Tag = v2 ? Dialog2 : Dialog;
        return (react_1.default.createElement(Tag, tslib_1.__assign({ prefix: prefix, role: "alertdialog" }, others, { visible: visible, title: newTitle, rtl: rtl, footerActions: newFooterActions, onOk: this.state.loading ? noop : newOnOk, onCancel: newOnCancel, onClose: newOnClose, okProps: newOkProps, cancelProps: newCancelProps, className: classNames, width: v2 ? width : undefined }), newContent));
    };
    Modal.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        type: prop_types_1.default.oneOf([
            'alert',
            'confirm',
            'success',
            'error',
            'notice',
            'warning',
            'help',
        ]),
        title: prop_types_1.default.node,
        content: prop_types_1.default.node,
        messageProps: prop_types_1.default.object,
        footerActions: prop_types_1.default.array,
        onOk: prop_types_1.default.func,
        onCancel: prop_types_1.default.func,
        onClose: prop_types_1.default.func,
        okProps: prop_types_1.default.object,
        cancelProps: prop_types_1.default.object,
        locale: prop_types_1.default.object,
        needWrapper: prop_types_1.default.bool,
        className: prop_types_1.default.string,
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
        locale: zh_cn_1.default.Dialog,
        needWrapper: true,
    };
    return Modal;
}(react_1.Component));
var ConfigModal = config_provider_1.default.config(Modal, { componentName: 'Dialog' });
/**
 * 创建对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
var show = function (config) {
    if (config === void 0) { config = {}; }
    var container = document.createElement('div');
    var unmount = function () {
        var _a;
        if (config.afterClose) {
            config.afterClose();
        }
        // eslint-disable-next-line react/no-deprecated
        react_dom_1.default.unmountComponentAtNode(container);
        (_a = container.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(container);
    };
    document.body.appendChild(container);
    var newContext = config.contextConfig;
    if (!newContext)
        newContext = config_provider_1.default.getContext();
    var instance, myRef;
    // eslint-disable-next-line react/no-deprecated
    react_dom_1.default.render(react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, newContext),
        react_1.default.createElement(ConfigModal, tslib_1.__assign({}, config, { afterClose: unmount, ref: function (ref) {
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
exports.show = show;
var methodFactory = function (type) {
    return function (config) {
        if (config === void 0) { config = {}; }
        config.type = type;
        return (0, exports.show)(config);
    };
};
/**
 * 创建警示对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
exports.alert = methodFactory('alert');
exports.success = methodFactory('success');
exports.error = methodFactory('error');
exports.notice = methodFactory('notice');
exports.warning = methodFactory('warning');
exports.help = methodFactory('help');
/**
 * 创建确认对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
exports.confirm = methodFactory('confirm');
var withContext = function (WrappedComponent) {
    var HOC = function (props) {
        return (react_1.default.createElement(config_provider_1.default.Consumer, null, function (contextConfig) { return (react_1.default.createElement(WrappedComponent
        // why AnyProps? see: https://react-typescript-cheatsheet.netlify.app/docs/hoc/react_hoc_docs
        , tslib_1.__assign({}, props, { contextDialog: {
                show: function (config) {
                    if (config === void 0) { config = {}; }
                    return (0, exports.show)(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                alert: function (config) {
                    if (config === void 0) { config = {}; }
                    return (0, exports.alert)(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                confirm: function (config) {
                    if (config === void 0) { config = {}; }
                    return (0, exports.confirm)(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                success: function (config) {
                    if (config === void 0) { config = {}; }
                    return (0, exports.success)(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                error: function (config) {
                    if (config === void 0) { config = {}; }
                    return (0, exports.error)(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                warning: function (config) {
                    if (config === void 0) { config = {}; }
                    return (0, exports.warning)(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                notice: function (config) {
                    if (config === void 0) { config = {}; }
                    return (0, exports.notice)(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                help: function (config) {
                    if (config === void 0) { config = {}; }
                    return (0, exports.help)(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
            } }))); }));
    };
    return HOC;
};
exports.withContext = withContext;
