"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var animate_1 = tslib_1.__importDefault(require("../animate"));
var message_1 = tslib_1.__importDefault(require("./message"));
var util_1 = require("../util");
var config = {
    top: 8,
    maxCount: 0,
    duration: 3000,
};
var MessageWrapper = function (props) {
    var _a = props.prefix, prefix = _a === void 0 ? 'next-' : _a, _b = props.dataSource, dataSource = _b === void 0 ? [] : _b;
    var _c = tslib_1.__read((0, react_1.useState)(), 2), forceUpdate = _c[1];
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
    return (react_1.default.createElement("div", { className: "".concat(prefix, "message-wrapper-v2"), style: { top: config.top } },
        react_1.default.createElement(animate_1.default, { animationAppear: true, animation: {
                appear: 'pulse',
                enter: 'pulse',
                leave: "".concat(prefix, "message-fade-leave"),
            }, singleMode: false }, dataSource.map(function (i) {
            var key = i.key, className = i.className, type = i.type, title = i.title, content = i.content, style = i.style, others = tslib_1.__rest(i, ["key", "className", "type", "title", "content", "style"]);
            return (react_1.default.createElement("div", { className: "".concat(prefix, "message-list"), key: key },
                react_1.default.createElement(message_1.default, tslib_1.__assign({}, others, { className: className, prefix: prefix, visible: true, type: type, shape: "toast", title: title, style: style }), content)));
        }))));
};
var ConfigedMessages = config_provider_1.default.config(MessageWrapper);
var messageRootNode;
var messageList = [];
var createMessage = function (props) {
    var _a = props.key, key = _a === void 0 ? (0, util_1.guid)('message-') : _a, others = tslib_1.__rest(props, ["key"]);
    if (!messageRootNode) {
        messageRootNode = document.createElement('div');
        document.body.appendChild(messageRootNode);
    }
    var maxCount = config.maxCount, duration = config.duration;
    var item = tslib_1.__assign({ key: key, duration: duration }, others);
    messageList.push(item);
    if (maxCount && messageList.length > maxCount) {
        messageList.shift();
    }
    // eslint-disable-next-line react/no-deprecated
    react_dom_1.default.render(react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, config_provider_1.default.getContext()),
        react_1.default.createElement(ConfigedMessages, { dataSource: messageList })), messageRootNode);
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
                react_dom_1.default.render(react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, config_provider_1.default.getContext()),
                    react_1.default.createElement(ConfigedMessages, { dataSource: messageList })), messageRootNode);
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
        react_dom_1.default.render(react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, config_provider_1.default.getContext()),
            react_1.default.createElement(ConfigedMessages, { dataSource: messageList })), messageRootNode);
    }
}
function handleConfig(config, type) {
    var newConfig = {};
    if (typeof config === 'string' || react_1.default.isValidElement(config)) {
        newConfig.title = config;
    }
    else if (util_1.obj.typeOf(config) === 'Object') {
        newConfig = tslib_1.__assign({}, config);
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
        react_dom_1.default.unmountComponentAtNode(messageRootNode);
        messageRootNode.parentNode.removeChild(messageRootNode);
        messageRootNode = null;
    }
}
exports.default = {
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
        if (!react_1.useState) {
            util_1.log.warning('need react version > 16.8.0');
            return;
        }
        return Object.assign.apply(Object, tslib_1.__spreadArray([config], tslib_1.__read(args), false));
    },
};
