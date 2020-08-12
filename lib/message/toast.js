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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _configProvider2.default.config;


var instance = void 0;
var timeouts = {};

var Mask = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Mask, _React$Component);

    function Mask() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Mask);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            visible: true
        }, _this.handleClose = function () {
            var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _this.setState({
                visible: false
            });

            if (!silent) {
                _this.props.onClose && _this.props.onClose();
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Mask.prototype.componentWillUnmount = function componentWillUnmount() {
        var timeoutId = this.props.timeoutId;


        if (timeoutId in timeouts) {
            var timeout = timeouts[timeoutId];
            clearTimeout(timeout);
            delete timeouts[timeoutId];
        }
    };

    Mask.prototype.render = function render() {
        /* eslint-disable no-unused-vars */
        var _props = this.props,
            prefix = _props.prefix,
            type = _props.type,
            title = _props.title,
            content = _props.content,
            align = _props.align,
            offset = _props.offset,
            hasMask = _props.hasMask,
            afterClose = _props.afterClose,
            animation = _props.animation,
            overlayProps = _props.overlayProps,
            timeoutId = _props.timeoutId,
            className = _props.className,
            style = _props.style,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'type', 'title', 'content', 'align', 'offset', 'hasMask', 'afterClose', 'animation', 'overlayProps', 'timeoutId', 'className', 'style']);
        /* eslint-enable */

        var visible = this.state.visible;

        return _react2.default.createElement(
            _overlay2.default,
            (0, _extends3.default)({}, overlayProps, {
                prefix: prefix,
                animation: animation,
                visible: visible,
                align: align,
                offset: offset,
                hasMask: hasMask,
                afterClose: afterClose
            }),
            _react2.default.createElement(
                _message2.default,
                (0, _extends3.default)({}, others, {
                    prefix: prefix,
                    visible: true,
                    type: type,
                    shape: 'toast',
                    title: title,
                    style: style,
                    className: prefix + 'message-wrapper ' + className,
                    onClose: this.handleClose
                }),
                content
            )
        );
    };

    return Mask;
}(_react2.default.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = {
    prefix: _propTypes2.default.string,
    type: _propTypes2.default.string,
    title: _propTypes2.default.node,
    content: _propTypes2.default.node,
    align: _propTypes2.default.string,
    offset: _propTypes2.default.array,
    hasMask: _propTypes2.default.bool,
    afterClose: _propTypes2.default.func,
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    overlayProps: _propTypes2.default.object,
    onClose: _propTypes2.default.func,
    timeoutId: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    align: 'tc tc',
    offset: [0, 30],
    hasMask: false,
    animation: {
        in: 'pulse',
        out: 'zoomOut'
    },
    style: {},
    className: ''
}, _temp2);
Mask.displayName = 'Mask';


var NewMask = config(Mask);

var create = function create(props) {
    /* eslint-disable no-unused-vars */
    var duration = props.duration,
        afterClose = props.afterClose,
        others = (0, _objectWithoutProperties3.default)(props, ['duration', 'afterClose']);
    /* eslint-enable no-unused-vars */

    var div = document.createElement('div');
    document.body.appendChild(div);
    var closeChain = function closeChain() {
        _reactDom2.default.unmountComponentAtNode(div);
        document.body.removeChild(div);
        afterClose && afterClose();
    };

    var newContext = _configProvider2.default.getContext();

    var mask = void 0,
        myRef = void 0,
        destroyed = false;
    var destroy = function destroy() {
        var inc = mask && mask.getInstance();
        inc && inc.handleClose(true);
        destroyed = true;
    };

    _reactDom2.default.render(_react2.default.createElement(
        _configProvider2.default,
        newContext,
        _react2.default.createElement(NewMask, (0, _extends3.default)({
            afterClose: closeChain
        }, others, {
            ref: function ref(_ref) {
                myRef = _ref;
            }
        }))
    ), div, function () {
        mask = myRef;
        if (mask && destroyed) {
            destroy();
        }
    });

    return {
        component: mask,
        destroy: destroy
    };
};

function handleConfig(config, type) {
    var newConfig = {};

    if (typeof config === 'string' || _react2.default.isValidElement(config)) {
        newConfig.title = config;
    } else if (isObject(config)) {
        newConfig = (0, _extends3.default)({}, config);
    }
    if (typeof newConfig.duration !== 'number') {
        newConfig.duration = 3000;
    }
    if (type) {
        newConfig.type = type;
    }

    return newConfig;
}

function isObject(obj) {
    return {}.toString.call(obj) === '[object Object]';
}

function open(config, type) {
    close();
    config = handleConfig(config, type);
    var timeoutId = (0, _util.guid)();
    instance = create((0, _extends3.default)({}, config, { timeoutId: timeoutId }));

    if (config.duration > 0) {
        var timeout = setTimeout(close, config.duration);
        timeouts[timeoutId] = timeout;
    }
}

function close() {
    if (instance) {
        instance.destroy();
        instance = null;
    }
}

/**
 * 创建提示弹层
 * @exportName show
 * @param {Object} props 属性对象
 */
function show(config) {
    open(config);
}

/**
 * 关闭提示弹层
 * @exportName hide
 */
function hide() {
    close();
}

/**
 * 创建成功提示弹层
 * @exportName success
 * @param {Object} props 属性对象
 */
function success(config) {
    open(config, 'success');
}

/**
 * 创建警告提示弹层
 * @exportName warning
 * @param {Object} props 属性对象
 */
function warning(config) {
    open(config, 'warning');
}

/**
 * 创建错误提示弹层
 * @exportName error
 * @param {Object} props 属性对象
 */
function error(config) {
    open(config, 'error');
}

/**
 * 创建帮助提示弹层
 * @exportName help
 * @param {Object} props 属性对象
 */
function help(config) {
    open(config, 'help');
}

/**
 * 创建加载中提示弹层
 * @exportName loading
 * @param {Object} props 属性对象
 */
function loading(config) {
    open(config, 'loading');
}

/**
 * 创建通知提示弹层
 * @exportName notice
 * @param {Object} props 属性对象
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
    notice: notice
};
module.exports = exports['default'];