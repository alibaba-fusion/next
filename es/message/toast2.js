import { __assign, __read, __rest, __spreadArray } from "tslib";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ConfigProvider from '../config-provider';
import Animate from '../animate';
import Message from './message';
import { obj, log, guid } from '../util';
var config = {
    top: 8,
    maxCount: 0,
    duration: 3000,
};
var MessageWrapper = function (props) {
    var _a = props.prefix, prefix = _a === void 0 ? 'next-' : _a, _b = props.dataSource, dataSource = _b === void 0 ? [] : _b;
    var _c = __read(useState(), 2), forceUpdate = _c[1];
    dataSource.forEach(function (i) {
        if (!i.timer) {
            i.timer = setTimeout(function () {
                var idx = dataSource.indexOf(i);
                if (idx > -1) {
                    var item = dataSource[idx];
                    typeof item.onClose === 'function' && item.onClose();
                    dataSource.splice(idx, 1);
                    forceUpdate({});
                }
            }, i.duration);
        }
    });
    return (React.createElement("div", { className: "".concat(prefix, "message-wrapper-v2"), style: { top: config.top } },
        React.createElement(Animate, { animationAppear: true, animation: {
                appear: 'pulse',
                enter: 'pulse',
                leave: "".concat(prefix, "message-fade-leave"),
            }, singleMode: false }, dataSource.map(function (i) {
            var key = i.key, className = i.className, type = i.type, title = i.title, content = i.content, style = i.style, others = __rest(i, ["key", "className", "type", "title", "content", "style"]);
            return (React.createElement("div", { className: "".concat(prefix, "message-list"), key: key },
                React.createElement(Message, __assign({}, others, { className: className, prefix: prefix, visible: true, type: type, shape: "toast", title: title, style: style }), content)));
        }))));
};
var ConfigedMessages = ConfigProvider.config(MessageWrapper);
var messageRootNode;
var messageList = [];
var createMessage = function (props) {
    var _a = props.key, key = _a === void 0 ? guid('message-') : _a, others = __rest(props, ["key"]);
    if (!messageRootNode) {
        messageRootNode = document.createElement('div');
        document.body.appendChild(messageRootNode);
    }
    var maxCount = config.maxCount, duration = config.duration;
    var item = __assign({ key: key, duration: duration }, others);
    messageList.push(item);
    if (maxCount && messageList.length > maxCount) {
        messageList.shift();
    }
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(React.createElement(ConfigProvider, __assign({}, ConfigProvider.getContext()),
        React.createElement(ConfigedMessages, { dataSource: messageList })), messageRootNode);
    return {
        key: key,
        close: function () {
            if (item.timer) {
                clearTimeout(item.timer);
            }
            var idx = messageList.indexOf(item);
            if (idx > -1) {
                typeof item.onClose === 'function' && item.onClose();
                messageList.splice(idx, 1);
                // eslint-disable-next-line react/no-deprecated
                ReactDOM.render(React.createElement(ConfigProvider, __assign({}, ConfigProvider.getContext()),
                    React.createElement(ConfigedMessages, { dataSource: messageList })), messageRootNode);
            }
        },
    };
};
function close(key) {
    if (key) {
        var index = messageList.findIndex(function (item) { return item.key === key; });
        messageList.splice(index, 1);
    }
    else {
        messageList = [];
    }
    if (messageRootNode) {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.render(React.createElement(ConfigProvider, __assign({}, ConfigProvider.getContext()),
            React.createElement(ConfigedMessages, { dataSource: messageList })), messageRootNode);
    }
}
function handleConfig(config, type) {
    var newConfig = {};
    if (typeof config === 'string' || React.isValidElement(config)) {
        newConfig.title = config;
    }
    else if (obj.typeOf(config) === 'Object') {
        newConfig = __assign({}, config);
    }
    if (type) {
        newConfig.type = type;
    }
    return newConfig;
}
function open(type) {
    return function (config) {
        config = handleConfig(config, type);
        return createMessage(config);
    };
}
function destory() {
    if (!messageRootNode)
        return;
    if (messageRootNode) {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.unmountComponentAtNode(messageRootNode);
        messageRootNode.parentNode.removeChild(messageRootNode);
        messageRootNode = null;
    }
}
export default {
    open: open(),
    success: open('success'),
    warning: open('warning'),
    error: open('error'),
    help: open('help'),
    loading: open('loading'),
    notice: open('notice'),
    close: close,
    destory: destory,
    config: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!useState) {
            log.warning('need react version > 16.8.0');
            return;
        }
        return Object.assign.apply(Object, __spreadArray([config], __read(args), false));
    },
};
