import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';
import Animate from '../animate';
import Message from '../message';
import uuid from '../util/guid';
import config from './config';
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
    __extends(Notification, _super);
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
            var key = _a.key, duration = _a.duration, others = __rest(_a, ["key", "duration"]);
            var notifications = __spreadArray([], __read(_this.state.notifications), false);
            if (!key) {
                key = uuid('notification-');
            }
            var index = notifications.findIndex(function (notification) { return notification.key === key; });
            if (index !== -1) {
                notifications[index] = __assign(__assign({}, notifications[index]), others);
            }
            else {
                var timer = void 0;
                if (duration && duration > 0) {
                    timer = window.setTimeout(function () {
                        _this.close(key);
                    }, duration);
                    _this.timers.push(timer);
                }
                notifications.push(__assign(__assign({}, others), { key: key, timer: timer }));
            }
            if (config.maxCount > 0 && config.maxCount < notifications.length) {
                while (notifications.length > config.maxCount) {
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
        return (React.createElement("div", { className: "".concat(prefix, "notification"), style: (_a = {},
                _a[config.placement.indexOf('b') === 0 ? 'bottom' : 'top'] = config.offset[1],
                _a[config.placement.indexOf('l') !== -1 ? 'left' : 'right'] = config.offset[0],
                _a) },
            React.createElement(Animate, { animationAppear: true, animation: {
                    enter: getAnimation(config.placement),
                    leave: "".concat(prefix, "notification-fade-leave"),
                }, singleMode: false }, notifications.map(function (_a) {
                var key = _a.key, type = _a.type, title = _a.title, content = _a.content, icon = _a.icon, onClick = _a.onClick, style = _a.style, className = _a.className;
                return (React.createElement(Message, { key: key, shape: "toast", type: type, title: title, iconType: icon, closeable: true, animation: false, size: config.size, visible: true, style: style, className: className, onClick: onClick, onClose: function () { return close(key); } }, content));
            }))));
    };
    Notification.propTypes = {
        prefix: PropTypes.string,
    };
    Notification.defaultProps = {
        prefix: 'next-',
    };
    return Notification;
}(Component));
var ConfigedNotification = ConfigProvider.config(Notification, {
    exportNames: ['open', 'close'],
});
function open(options) {
    if (options === void 0) { options = {}; }
    if (!options.title && !options.content)
        return;
    var duration = !options.duration && options.duration !== 0 ? config.duration : options.duration;
    if (!instance) {
        if (!options.key) {
            options.key = uuid('notification-');
        }
        waitOpens.push(__assign(__assign({}, options), { duration: duration }));
        if (!mounting) {
            mounting = true;
            var div = document.createElement('div');
            if (config.getContainer) {
                var root = config.getContainer();
                root.appendChild(div);
            }
            else {
                document.body.appendChild(div);
            }
            // 类型提示使用 createRoot，考虑到兼容性，暂时不处理
            // eslint-disable-next-line react/no-deprecated
            ReactDOM.render(React.createElement(ConfigProvider, __assign({}, ConfigProvider.getContext()),
                React.createElement(ConfigedNotification, { ref: function (ref) {
                        instance = ref;
                    } })), div, function () {
                waitOpens.forEach(function (item) { return instance.open(item); });
                waitOpens = [];
                mounting = false;
            });
        }
        return options.key;
    }
    var key = instance.open(__assign(__assign({}, options), { duration: duration }));
    return key;
}
function destroy() {
    var _a, _b;
    if (!instance)
        return;
    var mountNode = (_a = ReactDOM.findDOMNode(instance)) === null || _a === void 0 ? void 0 : _a.parentNode;
    if (mountNode) {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.unmountComponentAtNode(mountNode);
        (_b = mountNode.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(mountNode);
    }
}
var levels = {};
['success', 'error', 'warning', 'notice', 'help'].forEach(function (type) {
    levels[type] = function (options) {
        if (options === void 0) { options = {}; }
        return open(__assign(__assign({}, options), { type: type }));
    };
});
export default __assign({ config: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object.assign.apply(Object, __spreadArray([config], __read(args), false));
    }, open: open, close: close, destroy: destroy }, levels);
