import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import ReactDOM from 'react-dom';
import ConfigProvider from '../config-provider';
import Drawer from './drawer-v2';
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.state = {
            visible: true,
            loading: false,
        };
        _this.close = function () {
            _this.setState({
                visible: false,
            });
        };
        return _this;
    }
    Modal.prototype.render = function () {
        var _a = this.props, visible = _a.visible, content = _a.content, others = __rest(_a, ["visible", "content"]);
        return (React.createElement(Drawer, __assign({}, others, { visible: this.state.visible }), content));
    };
    return Modal;
}(React.Component));
var ConfigModal = ConfigProvider.config(Modal, { componentName: 'Drawer' });
/**
 * 创建对话框。
 *
 * @remarks
 * 该函数导出的名字是 `show`。
 *
 * @param config - 配置项。
 * @returns 返回一个对象，该对象包含有 `hide` 方法，可用来关闭对话框。
 */
export var show = function (config) {
    if (config === void 0) { config = {}; }
    var container = document.createElement('div');
    var unmount = function () {
        var _a;
        if (config.afterClose) {
            config.afterClose();
        }
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.unmountComponentAtNode(container);
        (_a = container.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(container);
    };
    document.body.appendChild(container);
    var newContext = config.contextConfig;
    if (!newContext)
        newContext = ConfigProvider.getContext();
    var instance, myRef;
    var handleClose = function () {
        var inc = instance && instance.getInstance();
        inc && inc.close();
        if (config.onClose) {
            config.onClose();
        }
    };
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(React.createElement(ConfigProvider, __assign({}, newContext),
        React.createElement(ConfigModal, __assign({}, config, { onClose: handleClose, afterClose: unmount, ref: function (ref) {
                myRef = ref;
            } }))), container, function () {
        instance = myRef;
    });
    return {
        hide: handleClose,
    };
};
export var withContext = function (WrappedComponent) {
    var HOC = function (props) {
        return (React.createElement(ConfigProvider.Consumer, null, function (contextConfig) { return (React.createElement(WrappedComponent
        // why AnyProps? see: https://react-typescript-cheatsheet.netlify.app/docs/hoc/react_hoc_docs
        , __assign({}, props, { contextDialog: {
                show: function (config) {
                    if (config === void 0) { config = {}; }
                    return show(__assign(__assign({}, config), { contextConfig: contextConfig }));
                },
            } }))); }));
    };
    return HOC;
};
