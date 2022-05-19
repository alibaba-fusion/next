'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _guid = require('../util/guid');

var _guid2 = _interopRequireDefault(_guid);

var _config2 = require('./config');

var _config3 = _interopRequireDefault(_config2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAnimation = function getAnimation(placement) {
    switch (placement) {
        case 'tl':
        case 'bl':
            return 'slideInLeft';
        case 'tr':
        case 'br':
            return 'slideInRight';
        default:
            return null;
    }
};

var Notification = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Notification, _Component);

    function Notification(props) {
        (0, _classCallCheck3.default)(this, Notification);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.close = function (key) {
            var notifications = _this.state.notifications;

            var index = notifications.findIndex(function (notification) {
                return notification.key === key;
            });

            if (index === -1) return;
            var _notifications$index = notifications[index],
                onClose = _notifications$index.onClose,
                timer = _notifications$index.timer;


            notifications.splice(index, 1);

            var timerIndex = _this.timers.findIndex(function (v) {
                return v === timer;
            });

            if (timerIndex !== -1) {
                _this.timers.splice(timerIndex, 1);
            }

            if (timer) {
                clearTimeout(timer);
            }

            _this.setState({
                notifications: notifications
            });

            if (onClose) {
                onClose();
            }
        };

        _this.open = function (_ref) {
            var key = _ref.key,
                duration = _ref.duration,
                others = (0, _objectWithoutProperties3.default)(_ref, ['key', 'duration']);

            var notifications = [].concat(_this.state.notifications);
            if (!key) {
                key = (0, _guid2.default)('notification-');
            }

            var index = notifications.findIndex(function (notification) {
                return notification.key === key;
            });

            if (index !== -1) {
                notifications[index] = (0, _extends3.default)({}, notifications[index], others);
            } else {
                var timer = void 0;

                if (duration > 0) {
                    timer = setTimeout(function () {
                        _this.close(key);
                    }, duration);
                    _this.timers.push(timer);
                }
                notifications.push((0, _extends3.default)({}, others, {
                    key: key,
                    timer: timer
                }));
            }

            if (_config3.default.maxCount > 0 && _config3.default.maxCount < notifications.length) {
                while (notifications.length > _config3.default.maxCount) {
                    var _key = notifications[0].key;

                    _this.close(_key);
                    notifications.splice(0, 1);
                }
            }

            _this.setState({
                notifications: notifications
            });

            return key;
        };

        _this.state = {
            notifications: []
        };
        _this.timers = [];
        return _this;
    }

    Notification.prototype.componentWillUnmount = function componentWillUnmount() {
        this.timers.forEach(function (timer) {
            if (!timer) return;
            clearTimeout(timer);
        });
    };

    Notification.prototype.render = function render() {
        var _ref2;

        var prefix = this.props.prefix;
        var notifications = this.state.notifications;


        return _react2.default.createElement(
            'div',
            {
                className: prefix + 'notification',
                style: (_ref2 = {}, _ref2[_config3.default.placement.indexOf('b') === 0 ? 'bottom' : 'top'] = _config3.default.offset[1], _ref2[_config3.default.placement.indexOf('l') !== -1 ? 'left' : 'right'] = _config3.default.offset[0], _ref2)
            },
            _react2.default.createElement(
                _animate2.default,
                {
                    animationAppear: true,
                    animation: {
                        enter: getAnimation(_config3.default.placement),
                        leave: prefix + 'notification-fade-leave'
                    },
                    singleMode: false
                },
                notifications.map(function (_ref3) {
                    var key = _ref3.key,
                        type = _ref3.type,
                        title = _ref3.title,
                        content = _ref3.content,
                        icon = _ref3.icon,
                        onClick = _ref3.onClick,
                        style = _ref3.style,
                        className = _ref3.className;
                    return _react2.default.createElement(
                        _message2.default,
                        {
                            key: key,
                            shape: 'toast',
                            type: type,
                            title: title,
                            iconType: icon,
                            closeable: true,
                            animation: false,
                            size: _config3.default.size,
                            visible: true,
                            style: style,
                            className: className,
                            onClick: onClick,
                            onClose: function onClose() {
                                return close(key);
                            }
                        },
                        content
                    );
                })
            )
        );
    };

    return Notification;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Notification.displayName = 'Notification';


var ConfigedNotification = _configProvider2.default.config(Notification, {
    exportNames: ['open', 'close']
});
var instance = void 0;
var mounting = false;
var waitOpens = [];

function open() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!options.title && !options.content) return;

    var duration = !options.duration && options.duration !== 0 ? _config3.default.duration : options.duration;

    if (!instance) {
        if (!options.key) {
            options.key = (0, _guid2.default)('notification-');
        }

        waitOpens.push((0, _extends3.default)({}, options, {
            duration: duration
        }));

        if (!mounting) {
            mounting = true;
            var div = document.createElement('div');
            if (_config3.default.getContainer) {
                var root = _config3.default.getContainer();
                root.appendChild(div);
            } else {
                document.body.appendChild(div);
            }

            _reactDom2.default.render(_react2.default.createElement(
                _configProvider2.default,
                _configProvider2.default.getContext(),
                _react2.default.createElement(ConfigedNotification, {
                    ref: function ref(_ref4) {
                        instance = _ref4;
                    }
                })
            ), div, function () {
                waitOpens.forEach(function (item) {
                    return instance.open(item);
                });
                waitOpens = [];
                mounting = false;
            });
        }

        return options.key;
    }

    var key = instance.open((0, _extends3.default)({}, options, {
        duration: duration
    }));

    return key;
}

function close(key) {
    if (!instance) {
        var index = waitOpens.findIndex(function (item) {
            return item.key === key;
        });
        waitOpens.splice(index, 1);
        return;
    }

    instance.close(key);
}

function destroy() {
    if (!instance) return;
    var mountNode = _reactDom2.default.findDOMNode(instance).parentNode;
    if (mountNode) {
        _reactDom2.default.unmountComponentAtNode(mountNode);
        mountNode.parentNode.removeChild(mountNode);
    }
}

var levels = {};

['success', 'error', 'warning', 'notice', 'help'].forEach(function (type) {
    levels[type] = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return open((0, _extends3.default)({}, options, {
            type: type
        }));
    };
});
exports.default = (0, _extends3.default)({
    config: function config() {
        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _extends3.default.apply(undefined, [_config3.default].concat(args));
    },

    open: open,
    close: close,
    destroy: destroy
}, levels);
module.exports = exports['default'];