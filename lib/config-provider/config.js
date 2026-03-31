"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.getDirection = exports.getLanguage = exports.getLocale = exports.setDirection = exports.setLocale = exports.setLanguage = exports.initLocales = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var hoist_non_react_statics_1 = tslib_1.__importDefault(require("hoist-non-react-statics"));
var util_1 = require("../util");
var get_context_props_1 = tslib_1.__importDefault(require("./get-context-props"));
var error_boundary_1 = tslib_1.__importDefault(require("./error-boundary"));
var shallowEqual = util_1.obj.shallowEqual;
function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}
var globalLocales;
var currentGlobalLanguage = 'zh-cn';
var currentGlobalLocale = {};
var currentGlobalRtl;
function initLocales(locales) {
    globalLocales = locales;
    if (locales) {
        currentGlobalLocale = locales[currentGlobalLanguage];
        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
}
exports.initLocales = initLocales;
function setLanguage(language) {
    if (globalLocales) {
        currentGlobalLanguage = language;
        currentGlobalLocale = globalLocales[language];
        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
}
exports.setLanguage = setLanguage;
function setLocale(locale) {
    currentGlobalLocale = tslib_1.__assign(tslib_1.__assign({}, (globalLocales ? globalLocales[currentGlobalLanguage] : {})), locale);
    if (typeof currentGlobalRtl !== 'boolean') {
        currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
    }
}
exports.setLocale = setLocale;
function setDirection(dir) {
    currentGlobalRtl = dir === 'rtl';
}
exports.setDirection = setDirection;
function getLocale() {
    return currentGlobalLocale;
}
exports.getLocale = getLocale;
function getLanguage() {
    return currentGlobalLanguage;
}
exports.getLanguage = getLanguage;
function getDirection() {
    return currentGlobalRtl;
}
exports.getDirection = getDirection;
function isCanPassRefComponent(component) {
    return util_1.obj.isClassComponent(component) || util_1.obj.isForwardRefComponent(component);
}
function config(Component, options) {
    if (options === void 0) { options = {}; }
    // 非 forwardRef 创建的 class component
    if (util_1.obj.isClassComponent(Component) &&
        Component.prototype.shouldComponentUpdate === undefined) {
        // class component: 通过定义 shouldComponentUpdate 改写成 pure component, 有 refs
        Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.pure) {
                return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
            }
            return true;
        };
    }
    var ConfigedComponent = /** @class */ (function (_super) {
        tslib_1.__extends(ConfigedComponent, _super);
        function ConfigedComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this._getInstance = _this._getInstance.bind(_this);
            _this._deprecated = _this._deprecated.bind(_this);
            return _this;
        }
        ConfigedComponent.prototype._getInstance = function (ref) {
            var _this = this;
            this._instance = ref;
            if (this._instance && options.exportNames) {
                options.exportNames.forEach(function (name) {
                    var field = _this._instance[name];
                    if (typeof field === 'function') {
                        _this[name] = field.bind(_this._instance);
                    }
                    else {
                        _this[name] = field;
                    }
                });
            }
        };
        ConfigedComponent.prototype._deprecated = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.context.nextWarning !== false) {
                util_1.log.deprecated.apply(util_1.log, tslib_1.__spreadArray([], tslib_1.__read(args), false));
            }
        };
        ConfigedComponent.prototype.getInstance = function () {
            return this._instance;
        };
        ConfigedComponent.prototype.render = function () {
            var _a = this.props, prefix = _a.prefix, locale = _a.locale, 
            // fixme: defaultPropsConfig is unused
            defaultPropsConfig = _a.defaultPropsConfig, pure = _a.pure, rtl = _a.rtl, device = _a.device, popupContainer = _a.popupContainer, errorBoundary = _a.errorBoundary, others = tslib_1.__rest(_a, ["prefix", "locale", "defaultPropsConfig", "pure", "rtl", "device", "popupContainer", "errorBoundary"]);
            var _b = this.context, nextPrefix = _b.nextPrefix, _c = _b.nextLocale, nextLocale = _c === void 0 ? {} : _c, _d = _b.nextDefaultPropsConfig, nextDefaultPropsConfig = _d === void 0 ? {} : _d, nextPure = _b.nextPure, nextRtl = _b.nextRtl, nextDevice = _b.nextDevice, nextPopupContainer = _b.nextPopupContainer, nextErrorBoundary = _b.nextErrorBoundary;
            var displayName = options.componentName || getDisplayName(Component);
            var contextProps = (0, get_context_props_1.default)({
                prefix: prefix,
                locale: locale,
                defaultPropsConfig: defaultPropsConfig,
                pure: pure,
                device: device,
                popupContainer: popupContainer,
                rtl: rtl,
                errorBoundary: errorBoundary,
            }, {
                nextPrefix: nextPrefix,
                nextLocale: tslib_1.__assign(tslib_1.__assign({}, currentGlobalLocale), nextLocale),
                nextDefaultPropsConfig: nextDefaultPropsConfig,
                nextPure: nextPure,
                nextDevice: nextDevice,
                nextPopupContainer: nextPopupContainer,
                nextRtl: typeof nextRtl === 'boolean'
                    ? nextRtl
                    : currentGlobalRtl === true
                        ? true
                        : undefined,
                nextErrorBoundary: nextErrorBoundary,
            }, displayName);
            // errorBoundary is only for <ErrorBoundary>
            var newContextProps = ['prefix', 'locale', 'pure', 'rtl', 'device', 'popupContainer'].reduce(function (ret, name) {
                if (typeof contextProps[name] !== 'undefined') {
                    // @ts-expect-error ignore assign type error
                    ret[name] = contextProps[name];
                }
                return ret;
            }, {});
            if ('pure' in newContextProps && newContextProps.pure) {
                util_1.log.warning('pure of ConfigProvider is deprecated, use Function Component or React.PureComponent');
            }
            // 对于两个真正消费 popupContainer 的组件来说，正确的名字是 container,
            if ('popupContainer' in newContextProps &&
                this.props.container === undefined &&
                ['Overlay', 'Popup'].indexOf(displayName) > -1) {
                newContextProps.container = newContextProps.popupContainer;
                delete newContextProps.popupContainer;
            }
            var newOthers = options.transform
                ? options.transform(others, this._deprecated)
                : others;
            var newProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, contextProps.defaultPropsConfig[displayName]), newOthers), newContextProps);
            // 仅向 class or forwardRef component 传递 ref，否则 react 会报一个 warning
            if (isCanPassRefComponent(Component)) {
                newProps.ref = this._getInstance;
            }
            var content = react_1.default.createElement(Component, tslib_1.__assign({}, newProps));
            var _e = contextProps.errorBoundary, open = _e.open, othersBoundary = tslib_1.__rest(_e, ["open"]);
            return open ? react_1.default.createElement(error_boundary_1.default, tslib_1.__assign({}, othersBoundary), content) : content;
        };
        ConfigedComponent.displayName = "Config(".concat(getDisplayName(Component), ")");
        ConfigedComponent.propTypes = tslib_1.__assign(tslib_1.__assign({}, (Component.propTypes || {})), { prefix: prop_types_1.default.string, locale: prop_types_1.default.object, defaultPropsConfig: prop_types_1.default.object, pure: prop_types_1.default.bool, rtl: prop_types_1.default.bool, device: prop_types_1.default.oneOf(['tablet', 'desktop', 'phone']), popupContainer: prop_types_1.default.any, errorBoundary: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.object]) });
        ConfigedComponent.contextTypes = tslib_1.__assign(tslib_1.__assign({}, (Component.contextTypes || {})), { nextPrefix: prop_types_1.default.string, nextLocale: prop_types_1.default.object, nextDefaultPropsConfig: prop_types_1.default.object, nextPure: prop_types_1.default.bool, nextRtl: prop_types_1.default.bool, nextWarning: prop_types_1.default.bool, nextDevice: prop_types_1.default.oneOf(['tablet', 'desktop', 'phone']), nextPopupContainer: prop_types_1.default.any, nextErrorBoundary: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.object]) });
        return ConfigedComponent;
    }(react_1.default.Component));
    (0, hoist_non_react_statics_1.default)(ConfigedComponent, Component);
    // 这里将 ConfigedComponent 推断一个限定的类型，以简化生成的类型代码
    return ConfigedComponent;
}
exports.config = config;
