import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Drawer from './drawer-v2';

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
        var _temp, _this, _ret;

        _classCallCheck(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            visible: true,
            loading: false
        }, _this.close = function () {
            _this.setState({
                visible: false
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Modal.prototype.render = function render() {
        var _props = this.props,
            visible = _props.visible,
            content = _props.content,
            others = _objectWithoutProperties(_props, ['visible', 'content']);

        return React.createElement(
            Drawer,
            _extends({}, others, { visible: this.state.visible }),
            content
        );
    };

    return Modal;
}(React.Component);

Modal.displayName = 'Modal';


var ConfigModal = ConfigProvider.config(Modal, { componentName: 'Drawer' });

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
        ReactDOM.unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
    };

    document.body.appendChild(container);
    var newContext = config.contextConfig;
    if (!newContext) newContext = ConfigProvider.getContext();

    var instance = void 0,
        myRef = void 0;

    var handleClose = function handleClose() {
        var inc = instance && instance.getInstance();
        inc && inc.close();
        if (config.onClose) {
            config.onClose();
        }
    };

    ReactDOM.render(React.createElement(
        ConfigProvider,
        newContext,
        React.createElement(ConfigModal, _extends({}, config, {
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

export { _show as show };
export var withContext = function withContext(WrappedComponent) {
    var HOC = function HOC(props) {
        return React.createElement(
            ConfigProvider.Consumer,
            null,
            function (contextConfig) {
                return React.createElement(WrappedComponent, _extends({}, props, {
                    contextDialog: {
                        show: function show() {
                            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            return _show(_extends({}, config, { contextConfig: contextConfig }));
                        }
                    }
                }));
            }
        );
    };
    return HOC;
};