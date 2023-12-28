"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withContext = exports.show = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
var drawer_v2_1 = require("./drawer-v2");
var Modal = /** @class */ (function (_super) {
    tslib_1.__extends(Modal, _super);
    function Modal() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
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
        var _a = this.props, visible = _a.visible, content = _a.content, others = tslib_1.__rest(_a, ["visible", "content"]);
        return (react_1.default.createElement(drawer_v2_1.default, tslib_1.__assign({}, others, { visible: this.state.visible }), content));
    };
    return Modal;
}(react_1.default.Component));
var ConfigModal = config_provider_1.default.config(Modal, { componentName: 'Drawer' });
/**
 * 创建对话框
 * @exportName show
 * @param {Object} config 配置项
 * @returns {Object} 包含有 hide 方法，可用来关闭对话框
 */
var show = function (config) {
    if (config === void 0) { config = {}; }
    var container = document.createElement('div');
    var unmount = function () {
        if (config.afterClose) {
            config.afterClose();
        }
        react_dom_1.default.unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
    };
    document.body.appendChild(container);
    var newContext = config.contextConfig;
    if (!newContext)
        newContext = config_provider_1.default.getContext();
    var instance, myRef;
    var handleClose = function () {
        var inc = instance && instance.getInstance();
        inc && inc.close();
        if (config.onClose) {
            config.onClose();
        }
    };
    react_dom_1.default.render(react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, newContext),
        react_1.default.createElement(ConfigModal, tslib_1.__assign({}, config, { onClose: handleClose, afterClose: unmount, ref: function (ref) {
                myRef = ref;
            } }))), container, function () {
        instance = myRef;
    });
    return {
        hide: handleClose,
    };
};
exports.show = show;
var withContext = function (WrappedComponent) {
    var HOC = function (props) {
        return (react_1.default.createElement(config_provider_1.default.Consumer, null, function (contextConfig) { return (react_1.default.createElement(WrappedComponent, tslib_1.__assign({}, props, { contextDialog: {
                show: function (config) {
                    if (config === void 0) { config = {}; }
                    return (0, exports.show)(tslib_1.__assign(tslib_1.__assign({}, config), { contextConfig: contextConfig }));
                },
            } }))); }));
    };
    return HOC;
};
exports.withContext = withContext;
