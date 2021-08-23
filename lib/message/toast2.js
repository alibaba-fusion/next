'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    var _useState = (0, _react.useState)(),
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

    return _react2.default.createElement(
        'div',
        { className: prefix + 'message-wrapper-v2', style: { top: _config.top } },
        _react2.default.createElement(
            _animate2.default,
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
                    others = (0, _objectWithoutProperties3.default)(i, ['key', 'className', 'type', 'title', 'content', 'style']);

                return _react2.default.createElement(
                    'div',
                    { className: prefix + 'message-list', key: key },
                    _react2.default.createElement(
                        _message2.default,
                        (0, _extends3.default)({}, others, {
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

var ConfigedMessages = _configProvider2.default.config(MessageWrapper);

var messageRootNode = void 0;
var messageList = [];

var createMessage = function createMessage(props) {
    var _props$key = props.key,
        key = _props$key === undefined ? (0, _util.guid)('message-') : _props$key,
        others = (0, _objectWithoutProperties3.default)(props, ['key']);

    if (!messageRootNode) {
        messageRootNode = document.createElement('div');
        document.body.appendChild(messageRootNode);
    }

    var maxCount = _config.maxCount,
        duration = _config.duration;


    var item = (0, _extends3.default)({
        key: key,
        duration: duration
    }, others);

    messageList.push(item);

    if (maxCount && messageList.length > maxCount) {
        messageList.shift();
    }

    _reactDom2.default.render(_react2.default.createElement(
        _configProvider2.default,
        _configProvider2.default.getContext(),
        _react2.default.createElement(ConfigedMessages, { dataSource: messageList })
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

                _reactDom2.default.render(_react2.default.createElement(
                    _configProvider2.default,
                    _configProvider2.default.getContext(),
                    _react2.default.createElement(ConfigedMessages, { dataSource: messageList })
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
        _reactDom2.default.render(_react2.default.createElement(
            _configProvider2.default,
            _configProvider2.default.getContext(),
            _react2.default.createElement(ConfigedMessages, { dataSource: messageList })
        ), messageRootNode);
    }
}

function handleConfig(config, type) {
    var newConfig = {};

    if (typeof config === 'string' || _react2.default.isValidElement(config)) {
        newConfig.title = config;
    } else if (_util.obj.typeof(config) === 'Object') {
        newConfig = (0, _extends3.default)({}, config);
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

exports.default = {
    open: open(),
    success: open('success'),
    warning: open('warning'),
    error: open('error'),
    help: open('help'),
    loading: open('loading'),
    notice: open('notice'),
    close: close,
    config: function config() {
        if (!_react.useState) {
            _util.log.warning('need react version > 16.8.0');
            return;
        }

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _extends3.default.apply(undefined, [_config].concat(args));
    }
};
module.exports = exports['default'];