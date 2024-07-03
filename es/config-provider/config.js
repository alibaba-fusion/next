import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { obj, log } from '../util';
import getContextProps from './get-context-props';
import ErrorBoundary from './error-boundary';
var shallowEqual = obj.shallowEqual;
function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}
var globalLocales;
var currentGlobalLanguage = 'zh-cn';
var currentGlobalLocale = {};
var currentGlobalRtl;
export function initLocales(locales) {
    globalLocales = locales;
    if (locales) {
        currentGlobalLocale = locales[currentGlobalLanguage];
        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
}
export function setLanguage(language) {
    if (globalLocales) {
        currentGlobalLanguage = language;
        currentGlobalLocale = globalLocales[language];
        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
}
export function setLocale(locale) {
    currentGlobalLocale = __assign(__assign({}, (globalLocales ? globalLocales[currentGlobalLanguage] : {})), locale);
    if (typeof currentGlobalRtl !== 'boolean') {
        currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
    }
}
export function setDirection(dir) {
    currentGlobalRtl = dir === 'rtl';
}
export function getLocale() {
    return currentGlobalLocale;
}
export function getLanguage() {
    return currentGlobalLanguage;
}
export function getDirection() {
    return currentGlobalRtl;
}
function isCanPassRefComponent(component) {
    return obj.isClassComponent(component) || obj.isForwardRefComponent(component);
}
function config(Component, options) {
    if (options === void 0) { options = {}; }
    // 非 forwardRef 创建的 class component
    if (obj.isClassComponent(Component) &&
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
        __extends(ConfigedComponent, _super);
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
                log.deprecated.apply(log, __spreadArray([], __read(args), false));
            }
        };
        ConfigedComponent.prototype.getInstance = function () {
            return this._instance;
        };
        ConfigedComponent.prototype.render = function () {
            var _a = this.props, prefix = _a.prefix, locale = _a.locale, 
            // fixme: defaultPropsConfig is unused
            defaultPropsConfig = _a.defaultPropsConfig, pure = _a.pure, rtl = _a.rtl, device = _a.device, popupContainer = _a.popupContainer, errorBoundary = _a.errorBoundary, others = __rest(_a, ["prefix", "locale", "defaultPropsConfig", "pure", "rtl", "device", "popupContainer", "errorBoundary"]);
            var _b = this.context, nextPrefix = _b.nextPrefix, _c = _b.nextLocale, nextLocale = _c === void 0 ? {} : _c, _d = _b.nextDefaultPropsConfig, nextDefaultPropsConfig = _d === void 0 ? {} : _d, nextPure = _b.nextPure, nextRtl = _b.nextRtl, nextDevice = _b.nextDevice, nextPopupContainer = _b.nextPopupContainer, nextErrorBoundary = _b.nextErrorBoundary;
            var displayName = options.componentName || getDisplayName(Component);
            var contextProps = getContextProps({
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
                nextLocale: __assign(__assign({}, currentGlobalLocale), nextLocale),
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
                log.warning('pure of ConfigProvider is deprecated, use Function Component or React.PureComponent');
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
            var newProps = __assign(__assign(__assign({}, contextProps.defaultPropsConfig[displayName]), newOthers), newContextProps);
            // 仅向 class or forwardRef component 传递 ref，否则 react 会报一个 warning
            if (isCanPassRefComponent(Component)) {
                newProps.ref = this._getInstance;
            }
            var content = React.createElement(Component, __assign({}, newProps));
            var _e = contextProps.errorBoundary, open = _e.open, othersBoundary = __rest(_e, ["open"]);
            return open ? React.createElement(ErrorBoundary, __assign({}, othersBoundary), content) : content;
        };
        ConfigedComponent.displayName = "Config(".concat(getDisplayName(Component), ")");
        ConfigedComponent.propTypes = __assign(__assign({}, (Component.propTypes || {})), { prefix: PropTypes.string, locale: PropTypes.object, defaultPropsConfig: PropTypes.object, pure: PropTypes.bool, rtl: PropTypes.bool, device: PropTypes.oneOf(['tablet', 'desktop', 'phone']), popupContainer: PropTypes.any, errorBoundary: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]) });
        ConfigedComponent.contextTypes = __assign(__assign({}, (Component.contextTypes || {})), { nextPrefix: PropTypes.string, nextLocale: PropTypes.object, nextDefaultPropsConfig: PropTypes.object, nextPure: PropTypes.bool, nextRtl: PropTypes.bool, nextWarning: PropTypes.bool, nextDevice: PropTypes.oneOf(['tablet', 'desktop', 'phone']), nextPopupContainer: PropTypes.any, nextErrorBoundary: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]) });
        return ConfigedComponent;
    }(React.Component));
    hoistNonReactStatic(ConfigedComponent, Component);
    // 这里将 ConfigedComponent 推断一个限定的类型，以简化生成的类型代码
    return ConfigedComponent;
}
export { config };
