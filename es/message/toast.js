import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import ConfigProvider from '../config-provider';
import { guid } from '../util';
import Message from './message';
var config = ConfigProvider.config;
var instance;
var timeouts = {};
var Mask = /** @class */ (function (_super) {
    __extends(Mask, _super);
    function Mask() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        var _a = this.props, prefix = _a.prefix, type = _a.type, title = _a.title, content = _a.content, align = _a.align, offset = _a.offset, hasMask = _a.hasMask, afterClose = _a.afterClose, animation = _a.animation, overlayProps = _a.overlayProps, timeoutId = _a.timeoutId, className = _a.className, style = _a.style, others = __rest(_a, ["prefix", "type", "title", "content", "align", "offset", "hasMask", "afterClose", "animation", "overlayProps", "timeoutId", "className", "style"]);
        var visible = this.state.visible;
        return (React.createElement(Overlay, __assign({}, overlayProps, { prefix: prefix, animation: animation, visible: visible, align: align, offset: offset, hasMask: hasMask, afterClose: afterClose }),
            React.createElement(Message, __assign({}, others, { prefix: prefix, visible: true, type: type, shape: "toast", title: title, style: style, className: "".concat(prefix, "message-wrapper ").concat(className), onClose: this.handleClose }), content)));
    };
    Mask.contextTypes = {
        prefix: PropTypes.string,
    };
    Mask.propTypes = {
        prefix: PropTypes.string,
        type: PropTypes.string,
        title: PropTypes.node,
        content: PropTypes.node,
        align: PropTypes.string,
        offset: PropTypes.array,
        hasMask: PropTypes.bool,
        afterClose: PropTypes.func,
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        overlayProps: PropTypes.object,
        onClose: PropTypes.func,
        timeoutId: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
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
}(React.Component));
var NewMask = config(Mask);
var create = function (props) {
    var duration = props.duration, afterClose = props.afterClose, contextConfig = props.contextConfig, others = __rest(props, ["duration", "afterClose", "contextConfig"]);
    var div = document.createElement('div');
    document.body.appendChild(div);
    var closeChain = function () {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        afterClose && afterClose();
    };
    var newContext = contextConfig;
    if (!newContext)
        newContext = ConfigProvider.getContext();
    var mask = null, myRef, destroyed = false;
    var destroy = function () {
        var inc = mask && mask.getInstance();
        inc && inc.handleClose(true);
        destroyed = true;
    };
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(React.createElement(ConfigProvider, __assign({}, newContext),
        React.createElement(NewMask, __assign({ afterClose: closeChain }, others, { ref: function (ref) {
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
    if (typeof config === 'string' || React.isValidElement(config)) {
        newConfig.title = config;
    }
    else if (isObject(config)) {
        newConfig = __assign({}, config);
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
    var timeoutId = guid();
    instance = create(__assign(__assign({}, config), { timeoutId: timeoutId }));
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
export default {
    show: show,
    hide: hide,
    success: success,
    warning: warning,
    error: error,
    help: help,
    loading: loading,
    notice: notice,
};
export var withContext = function (WrappedComponent) {
    var HOC = function (props) {
        return (React.createElement(ConfigProvider.Consumer, null, function (contextConfig) { return (React.createElement(WrappedComponent
        // why AnyProps? see: https://react-typescript-cheatsheet.netlify.app/docs/hoc/react_hoc_docs
        , __assign({}, props, { contextMessage: {
                show: function (config) {
                    if (config === void 0) { config = {}; }
                    return show(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                hide: hide,
                success: function (config) {
                    if (config === void 0) { config = {}; }
                    return success(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                warning: function (config) {
                    if (config === void 0) { config = {}; }
                    return warning(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                error: function (config) {
                    if (config === void 0) { config = {}; }
                    return error(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                help: function (config) {
                    if (config === void 0) { config = {}; }
                    return help(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                loading: function (config) {
                    if (config === void 0) { config = {}; }
                    return loading(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
                notice: function (config) {
                    if (config === void 0) { config = {}; }
                    return notice(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
            } }))); }));
    };
    return HOC;
};
