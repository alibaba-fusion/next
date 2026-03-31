"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withContext = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var message_1 = tslib_1.__importDefault(require("./message"));
var config = config_provider_1.default.config;
var instance;
var timeouts = {};
var Mask = /** @class */ (function (_super) {
    tslib_1.__extends(Mask, _super);
    function Mask() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.state = {
            visible: true,
        };
        _this.handleClose = function (silent) {
            if (silent === void 0) { silent = false; }
            _this.setState({
                visible: false,
            });
            if (!silent) {
                _this.props.onClose && _this.props.onClose();
            }
        };
        return _this;
    }
    Mask.prototype.componentWillUnmount = function () {
        var timeoutId = this.props.timeoutId;
        if (timeoutId in timeouts) {
            var timeout = timeouts[timeoutId];
            clearTimeout(timeout);
            delete timeouts[timeoutId];
        }
    };
    Mask.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, type = _a.type, title = _a.title, content = _a.content, align = _a.align, offset = _a.offset, hasMask = _a.hasMask, afterClose = _a.afterClose, animation = _a.animation, overlayProps = _a.overlayProps, timeoutId = _a.timeoutId, className = _a.className, style = _a.style, others = tslib_1.__rest(_a, ["prefix", "type", "title", "content", "align", "offset", "hasMask", "afterClose", "animation", "overlayProps", "timeoutId", "className", "style"]);
        var visible = this.state.visible;
        return (react_1.default.createElement(overlay_1.default, tslib_1.__assign({}, overlayProps, { prefix: prefix, animation: animation, visible: visible, align: align, offset: offset, hasMask: hasMask, afterClose: afterClose }),
            react_1.default.createElement(message_1.default, tslib_1.__assign({}, others, { prefix: prefix, visible: true, type: type, shape: "toast", title: title, style: style, className: "".concat(prefix, "message-wrapper ").concat(className), onClose: this.handleClose }), content)));
    };
    Mask.contextTypes = {
        prefix: prop_types_1.default.string,
    };
    Mask.propTypes = {
        prefix: prop_types_1.default.string,
        type: prop_types_1.default.string,
        title: prop_types_1.default.node,
        content: prop_types_1.default.node,
        align: prop_types_1.default.string,
        offset: prop_types_1.default.array,
        hasMask: prop_types_1.default.bool,
        afterClose: prop_types_1.default.func,
        animation: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]),
        overlayProps: prop_types_1.default.object,
        onClose: prop_types_1.default.func,
        timeoutId: prop_types_1.default.string,
        style: prop_types_1.default.object,
        className: prop_types_1.default.string,
    };
    Mask.defaultProps = {
        prefix: 'next-',
        align: 'tc tc',
        offset: [0, 30],
        hasMask: false,
        animation: {
            in: 'pulse',
            out: 'zoomOut',
        },
        style: {},
        className: '',
    };
    return Mask;
}(react_1.default.Component));
var NewMask = config(Mask);
var create = function (props) {
    var duration = props.duration, afterClose = props.afterClose, contextConfig = props.contextConfig, others = tslib_1.__rest(props, ["duration", "afterClose", "contextConfig"]);
    var div = document.createElement('div');
    document.body.appendChild(div);
    var closeChain = function () {
        // eslint-disable-next-line react/no-deprecated
        react_dom_1.default.unmountComponentAtNode(div);
        document.body.removeChild(div);
        afterClose && afterClose();
    };
    var newContext = contextConfig;
    if (!newContext)
        newContext = config_provider_1.default.getContext();
    var mask = null, myRef, destroyed = false;
    var destroy = function () {
        var inc = mask && mask.getInstance();
        inc && inc.handleClose(true);
        destroyed = true;
    };
    // eslint-disable-next-line react/no-deprecated
    react_dom_1.default.render(react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, newContext),
        react_1.default.createElement(NewMask, tslib_1.__assign({ afterClose: closeChain }, others, { ref: function (ref) {
                myRef = ref;
            } }))), div, function () {
        mask = myRef;
        if (mask && destroyed) {
            destroy();
        }
    });
    return {
        component: mask,
        destroy: destroy,
    };
};
function isObject(obj) {
    return {}.toString.call(obj) === '[object Object]';
}
function handleConfig(config, type) {
    var newConfig = {};
    if (typeof config === 'string' || react_1.default.isValidElement(config)) {
        newConfig.title = config;
    }
    else if (isObject(config)) {
        newConfig = tslib_1.__assign({}, config);
    }
    if (typeof newConfig.duration !== 'number') {
        newConfig.duration = 3000;
    }
    if (type) {
        newConfig.type = type;
    }
    return newConfig;
}
function close() {
    if (instance) {
        instance.destroy();
        instance = null;
    }
}
function open(config, type) {
    close();
    config = handleConfig(config, type);
    var timeoutId = (0, util_1.guid)();
    instance = create(tslib_1.__assign(tslib_1.__assign({}, config), { timeoutId: timeoutId }));
    if (config.duration > 0) {
        var timeout = setTimeout(close, config.duration);
        timeouts[timeoutId] = timeout;
    }
}
/**
 * 创建提示弹层
 * @param config - 属性对象
 */
function show(config) {
    open(config);
}
/**
 * 关闭提示弹层
 */
function hide() {
    close();
}
/**
 * 创建成功提示弹层
 * @param config - 属性对象
 */
function success(config) {
    open(config, 'success');
}
/**
 * 创建警告提示弹层
 * @param config - 属性对象
 */
function warning(config) {
    open(config, 'warning');
}
/**
 * 创建错误提示弹层
 * @param config - 属性对象
 */
function error(config) {
    open(config, 'error');
}
/**
 * 创建帮助提示弹层
 * @param config - 属性对象
 */
function help(config) {
    open(config, 'help');
}
/**
 * 创建加载中提示弹层
 * @param config - 属性对象
 */
function loading(config) {
    open(config, 'loading');
}
/**
 * 创建通知提示弹层
 * @param config - 属性对象
 */
function notice(config) {
    open(config, 'notice');
}
exports.default = {
    show: show,
    hide: hide,
    success: success,
    warning: warning,
    error: error,
    help: help,
    loading: loading,
    notice: notice,
};
var withContext = function (WrappedComponent) {
    var HOC = function (props) {
        return (react_1.default.createElement(config_provider_1.default.Consumer, null, function (contextConfig) { return (react_1.default.createElement(WrappedComponent
        // why AnyProps? see: https://react-typescript-cheatsheet.netlify.app/docs/hoc/react_hoc_docs
        , tslib_1.__assign({}, props, { contextMessage: {
                show: function (config) {
                    if (config === void 0) { config = {}; }
                    return show(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                hide: hide,
                success: function (config) {
                    if (config === void 0) { config = {}; }
                    return success(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                warning: function (config) {
                    if (config === void 0) { config = {}; }
                    return warning(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                error: function (config) {
                    if (config === void 0) { config = {}; }
                    return error(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                help: function (config) {
                    if (config === void 0) { config = {}; }
                    return help(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                loading: function (config) {
                    if (config === void 0) { config = {}; }
                    return loading(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
                notice: function (config) {
                    if (config === void 0) { config = {}; }
                    return notice(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
            } }))); }));
    };
    return HOC;
};
exports.withContext = withContext;
