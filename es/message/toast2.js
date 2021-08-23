import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ConfigProvider from '../config-provider';
import Animate from '../animate';
import Message from './message';
import { obj, log, guid } from '../util';

var _config = {
    top: 8,
    maxCount: 0,
    duration: 3000
};

var MessageWrapper = function MessageWrapper(props) {
    // eslint-disable-next-line
    var _props$prefix = props.prefix,
        prefix = _props$prefix === undefined ? 'next-' : _props$prefix,
        _props$dataSource = props.dataSource,
        dataSource = _props$dataSource === undefined ? [] : _props$dataSource;

    var _useState = useState(),
        forceUpdate = _useState[1];

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

    return React.createElement(
        'div',
        { className: prefix + 'message-wrapper-v2', style: { top: _config.top } },
        React.createElement(
            Animate,
            {
                animationAppear: true,
                animation: {
                    appear: 'pulse',
                    enter: 'pulse',
                    leave: prefix + 'message-fade-leave'
                },
                singleMode: false
            },
            dataSource.map(function (i) {
                var key = i.key,
                    className = i.className,
                    type = i.type,
                    title = i.title,
                    content = i.content,
                    style = i.style,
                    others = _objectWithoutProperties(i, ['key', 'className', 'type', 'title', 'content', 'style']);

                return React.createElement(
                    'div',
                    { className: prefix + 'message-list', key: key },
                    React.createElement(
                        Message,
                        _extends({}, others, {
                            className: className,
                            prefix: prefix,
                            visible: true,
                            type: type,
                            shape: 'toast',
                            title: title,
                            style: style
                        }),
                        content
                    )
                );
            })
        )
    );
};

var ConfigedMessages = ConfigProvider.config(MessageWrapper);

var messageRootNode = void 0;
var messageList = [];

var createMessage = function createMessage(props) {
    var _props$key = props.key,
        key = _props$key === undefined ? guid('message-') : _props$key,
        others = _objectWithoutProperties(props, ['key']);

    if (!messageRootNode) {
        messageRootNode = document.createElement('div');
        document.body.appendChild(messageRootNode);
    }

    var maxCount = _config.maxCount,
        duration = _config.duration;


    var item = _extends({
        key: key,
        duration: duration
    }, others);

    messageList.push(item);

    if (maxCount && messageList.length > maxCount) {
        messageList.shift();
    }

    ReactDOM.render(React.createElement(
        ConfigProvider,
        ConfigProvider.getContext(),
        React.createElement(ConfigedMessages, { dataSource: messageList })
    ), messageRootNode);

    return {
        key: key,
        close: function close() {
            if (item.timer) {
                clearTimeout(item.timer);
            }
            var idx = messageList.indexOf(item);
            if (idx > -1) {
                typeof item.onClose === 'function' && item.onClose();
                messageList.splice(idx, 1);

                ReactDOM.render(React.createElement(
                    ConfigProvider,
                    ConfigProvider.getContext(),
                    React.createElement(ConfigedMessages, { dataSource: messageList })
                ), messageRootNode);
            }
        }
    };
};

function close(key) {
    if (key) {
        var index = messageList.findIndex(function (item) {
            return item.key === key;
        });
        messageList.splice(index, 1);
    } else {
        messageList = [];
    }

    if (messageRootNode) {
        ReactDOM.render(React.createElement(
            ConfigProvider,
            ConfigProvider.getContext(),
            React.createElement(ConfigedMessages, { dataSource: messageList })
        ), messageRootNode);
    }
}

function handleConfig(config, type) {
    var newConfig = {};

    if (typeof config === 'string' || React.isValidElement(config)) {
        newConfig.title = config;
    } else if (obj.typeof(config) === 'Object') {
        newConfig = _extends({}, config);
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

export default {
    open: open(),
    success: open('success'),
    warning: open('warning'),
    error: open('error'),
    help: open('help'),
    loading: open('loading'),
    notice: open('notice'),
    close: close,
    config: function config() {
        if (!useState) {
            log.warning('need react version > 16.8.0');
            return;
        }

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _extends.apply(undefined, [_config].concat(args));
    }
};