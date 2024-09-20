"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var animate_1 = tslib_1.__importDefault(require("../animate"));
var message_1 = tslib_1.__importDefault(require("../message"));
var guid_1 = tslib_1.__importDefault(require("../util/guid"));
var config_1 = tslib_1.__importDefault(require("./config"));
var getAnimation = function (placement) {
    switch (placement) {
        case 'tl':
        case 'bl':
            return 'slideInLeft';
        case 'tr':
        case 'br':
            return 'slideInRight';
        default:
            return undefined;
    }
};
// let instance: Notification;
var instance;
var mounting = false;
var waitOpens = [];
function close(key) {
    if (!instance) {
        var index = waitOpens.findIndex(function (item) { return item.key === key; });
        waitOpens.splice(index, 1);
        return;
    }
    instance.close(key);
}
var Notification = /** @class */ (function (_super) {
    tslib_1.__extends(Notification, _super);
    function Notification(props) {
        var _this = _super.call(this, props) || this;
        _this.close = function (key) {
            var notifications = _this.state.notifications;
            var index = notifications.findIndex(function (notification) { return notification.key === key; });
            if (index === -1)
                return;
            var _a = notifications[index], onClose = _a.onClose, timer = _a.timer;
            notifications.splice(index, 1);
            var timerIndex = _this.timers.findIndex(function (v) { return v === timer; });
            if (timerIndex !== -1) {
                _this.timers.splice(timerIndex, 1);
            }
            if (timer) {
                clearTimeout(timer);
            }
            _this.setState({
                notifications: notifications,
            });
            if (onClose) {
                onClose();
            }
        };
        _this.open = function (_a) {
            var key = _a.key, duration = _a.duration, others = tslib_1.__rest(_a, ["key", "duration"]);
            var notifications = tslib_1.__spreadArray([], tslib_1.__read(_this.state.notifications), false);
            if (!key) {
                key = (0, guid_1.default)('notification-');
            }
            var index = notifications.findIndex(function (notification) { return notification.key === key; });
            if (index !== -1) {
                notifications[index] = tslib_1.__assign(tslib_1.__assign({}, notifications[index]), others);
            }
            else {
                var timer = void 0;
                if (duration && duration > 0) {
                    timer = window.setTimeout(function () {
                        _this.close(key);
                    }, duration);
                    _this.timers.push(timer);
                }
                notifications.push(tslib_1.__assign(tslib_1.__assign({}, others), { key: key, timer: timer }));
            }
            if (config_1.default.maxCount > 0 && config_1.default.maxCount < notifications.length) {
                while (notifications.length > config_1.default.maxCount) {
                    var key_1 = notifications[0].key;
                    _this.close(key_1);
                    notifications.splice(0, 1);
                }
            }
            _this.setState({
                notifications: notifications,
            });
            return key;
        };
        _this.state = {
            notifications: [],
        };
        _this.timers = [];
        return _this;
    }
    Notification.prototype.componentWillUnmount = function () {
        this.timers.forEach(function (timer) {
            if (!timer)
                return;
            clearTimeout(timer);
        });
    };
    Notification.prototype.render = function () {
        var _a;
        var prefix = this.props.prefix;
        var notifications = this.state.notifications;
        return (react_1.default.createElement("div", { className: "".concat(prefix, "notification"), style: (_a = {},
                _a[config_1.default.placement.indexOf('b') === 0 ? 'bottom' : 'top'] = config_1.default.offset[1],
                _a[config_1.default.placement.indexOf('l') !== -1 ? 'left' : 'right'] = config_1.default.offset[0],
                _a) },
            react_1.default.createElement(animate_1.default, { animationAppear: true, animation: {
                    enter: getAnimation(config_1.default.placement),
                    leave: "".concat(prefix, "notification-fade-leave"),
                }, singleMode: false }, notifications.map(function (_a) {
                var key = _a.key, type = _a.type, title = _a.title, content = _a.content, icon = _a.icon, onClick = _a.onClick, style = _a.style, className = _a.className;
                return (react_1.default.createElement(message_1.default, { key: key, shape: "toast", type: type, title: title, iconType: icon, closeable: true, animation: false, size: config_1.default.size, visible: true, style: style, className: className, onClick: onClick, onClose: function () { return close(key); } }, content));
            }))));
    };
    Notification.propTypes = {
        prefix: prop_types_1.default.string,
    };
    Notification.defaultProps = {
        prefix: 'next-',
    };
    return Notification;
}(react_1.Component));
var ConfigedNotification = config_provider_1.default.config(Notification, {
    exportNames: ['open', 'close'],
});
function open(options) {
    if (options === void 0) { options = {}; }
    if (!options.title && !options.content)
        return;
    var duration = !options.duration && options.duration !== 0 ? config_1.default.duration : options.duration;
    if (!instance) {
        if (!options.key) {
            options.key = (0, guid_1.default)('notification-');
        }
        waitOpens.push(tslib_1.__assign(tslib_1.__assign({}, options), { duration: duration }));
        if (!mounting) {
            mounting = true;
            var div = document.createElement('div');
            if (config_1.default.getContainer) {
                var root = config_1.default.getContainer();
                root.appendChild(div);
            }
            else {
                document.body.appendChild(div);
            }
            // 类型提示使用 createRoot，考虑到兼容性，暂时不处理
            // eslint-disable-next-line react/no-deprecated
            react_dom_1.default.render(react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, config_provider_1.default.getContext()),
                react_1.default.createElement(ConfigedNotification, { ref: function (ref) {
                        instance = ref;
                    } })), div, function () {
                waitOpens.forEach(function (item) { return instance.open(item); });
                waitOpens = [];
                mounting = false;
            });
        }
        return options.key;
    }
    var key = instance.open(tslib_1.__assign(tslib_1.__assign({}, options), { duration: duration }));
    return key;
}
function destroy() {
    var _a, _b;
    if (!instance)
        return;
    var mountNode = (_a = react_dom_1.default.findDOMNode(instance)) === null || _a === void 0 ? void 0 : _a.parentNode;
    if (mountNode) {
        // eslint-disable-next-line react/no-deprecated
        react_dom_1.default.unmountComponentAtNode(mountNode);
        (_b = mountNode.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(mountNode);
    }
}
var levels = {};
['success', 'error', 'warning', 'notice', 'help'].forEach(function (type) {
    levels[type] = function (options) {
        if (options === void 0) { options = {}; }
        return open(tslib_1.__assign(tslib_1.__assign({}, options), { type: type }));
    };
});
exports.default = tslib_1.__assign({ config: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object.assign.apply(Object, tslib_1.__spreadArray([config_1.default], tslib_1.__read(args), false));
    }, open: open, close: close, destroy: destroy }, levels);
