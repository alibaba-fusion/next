'use strict';

exports.__esModule = true;
exports.withContext = exports.show = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _drawerV = require('./drawer-v2');

var _drawerV2 = _interopRequireDefault(_drawerV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_React$Component) {
    (0, _inherits3.default)(Modal, _React$Component);

    function Modal() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            visible: true,
            loading: false
        }, _this.close = function () {
            _this.setState({
                visible: false
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Modal.prototype.render = function render() {
        var _props = this.props,
            visible = _props.visible,
            content = _props.content,
            others = (0, _objectWithoutProperties3.default)(_props, ['visible', 'content']);

        return _react2.default.createElement(
            _drawerV2.default,
            (0, _extends3.default)({}, others, { visible: this.state.visible }),
            content
        );
    };

    return Modal;
}(_react2.default.Component);

Modal.displayName = 'Modal';


var ConfigModal = _configProvider2.default.config(Modal, { componentName: 'Drawer' });

/**
 * 创建对话框
 * @exportName show
 * @param {Object} config 配置项
 * @returns {Object} 包含有 hide 方法，可用来关闭对话框
 */
var _show = function _show() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var container = document.createElement('div');
    var unmount = function unmount() {
        if (config.afterClose) {
            config.afterClose();
        }
        _reactDom2.default.unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
    };

    document.body.appendChild(container);
    var newContext = config.contextConfig;
    if (!newContext) newContext = _configProvider2.default.getContext();

    var instance = void 0,
        myRef = void 0;

    var handleClose = function handleClose() {
        var inc = instance && instance.getInstance();
        inc && inc.close();
        if (config.onClose) {
            config.onClose();
        }
    };

    _reactDom2.default.render(_react2.default.createElement(
        _configProvider2.default,
        newContext,
        _react2.default.createElement(ConfigModal, (0, _extends3.default)({}, config, {
            onClose: handleClose,
            afterClose: unmount,
            ref: function ref(_ref) {
                myRef = _ref;
            }
        }))
    ), container, function () {
        instance = myRef;
    });
    return {
        hide: handleClose
    };
};

exports.show = _show;
var withContext = exports.withContext = function withContext(WrappedComponent) {
    var HOC = function HOC(props) {
        return _react2.default.createElement(
            _configProvider2.default.Consumer,
            null,
            function (contextConfig) {
                return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, props, {
                    contextDialog: {
                        show: function show() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _show((0, _extends3.default)({}, config, { contextConfig: contextConfig }));
                        }
                    }
                }));
            }
        );
    };
    return HOC;
};