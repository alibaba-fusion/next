"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var get_context_props_1 = tslib_1.__importDefault(require("./get-context-props"));
var config_1 = require("./config");
var consumer_1 = tslib_1.__importDefault(require("./consumer"));
var error_boundary_1 = tslib_1.__importDefault(require("./error-boundary"));
var cache_1 = tslib_1.__importDefault(require("./cache"));
var date_1 = tslib_1.__importDefault(require("../util/date"));
var childContextCache = new cache_1.default();
var setMomentLocale = function (locale) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var moment, e_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require('moment')); })];
            case 1:
                moment = _a.sent();
                if (moment && moment.default && moment.default.isMoment)
                    moment = moment.default;
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                return [3 /*break*/, 3];
            case 3:
                if (moment && moment.locale && locale) {
                    moment.locale(locale.momentLocale);
                }
                return [2 /*return*/];
        }
    });
}); };
var setDateLocale = function (locale) {
    if (locale) {
        date_1.default.locale(locale.dateLocale || locale.momentLocale);
    }
};
var ConfigProvider = /** @class */ (function (_super) {
    tslib_1.__extends(ConfigProvider, _super);
    function ConfigProvider(props, context) {
        var _this = _super.call(this, props, context) || this;
        childContextCache.add(_this, Object.assign({}, childContextCache.get(_this, {}), _this.getChildContext()));
        setMomentLocale(_this.props.locale);
        setDateLocale(_this.props.locale);
        _this.state = {
            locale: _this.props.locale,
        };
        return _this;
    }
    ConfigProvider.prototype.getChildContext = function () {
        var _a = this.props, prefix = _a.prefix, locale = _a.locale, defaultPropsConfig = _a.defaultPropsConfig, pure = _a.pure, warning = _a.warning, rtl = _a.rtl, device = _a.device, popupContainer = _a.popupContainer, errorBoundary = _a.errorBoundary;
        var _b = this.context, nextPrefix = _b.nextPrefix, nextDefaultPropsConfig = _b.nextDefaultPropsConfig, nextLocale = _b.nextLocale, nextPure = _b.nextPure, nextRtl = _b.nextRtl, nextWarning = _b.nextWarning, nextDevice = _b.nextDevice, nextPopupContainer = _b.nextPopupContainer, nextErrorBoundary = _b.nextErrorBoundary;
        return {
            nextPrefix: prefix || nextPrefix,
            nextDefaultPropsConfig: defaultPropsConfig || nextDefaultPropsConfig,
            nextLocale: locale || nextLocale,
            nextPure: typeof pure === 'boolean' ? pure : nextPure,
            nextRtl: typeof rtl === 'boolean' ? rtl : nextRtl,
            nextWarning: typeof warning === 'boolean' ? warning : nextWarning,
            nextDevice: device || nextDevice,
            nextPopupContainer: popupContainer || nextPopupContainer,
            nextErrorBoundary: errorBoundary || nextErrorBoundary,
        };
    };
    ConfigProvider.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.locale !== prevState.locale) {
            setMomentLocale(nextProps.locale);
            setDateLocale(nextProps.locale);
            return {
                locale: nextProps.locale,
            };
        }
        return null;
    };
    ConfigProvider.prototype.componentDidUpdate = function () {
        childContextCache.add(this, Object.assign({}, childContextCache.get(this, {}), this.getChildContext()));
    };
    ConfigProvider.prototype.componentWillUnmount = function () {
        childContextCache.remove(this);
    };
    ConfigProvider.prototype.render = function () {
        return react_1.Children.only(this.props.children);
    };
    ConfigProvider.propTypes = {
        /**
         * 样式类名的品牌前缀
         */
        prefix: prop_types_1.default.string,
        /**
         * 国际化文案对象，属性为组件的 displayName
         */
        locale: prop_types_1.default.object,
        /**
         * 组件 API 的默认配置
         */
        defaultPropsConfig: prop_types_1.default.object,
        /**
         * 是否开启错误捕捉 errorBoundary
         * 如需自定义参数，请传入对象 对象接受参数列表如下：
         *
         * fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示
         * afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为，比如埋点上传
         */
        errorBoundary: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.object]),
        /**
         * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
         */
        pure: prop_types_1.default.bool,
        /**
         * 是否在开发模式下显示组件属性被废弃的 warning 提示
         */
        warning: prop_types_1.default.bool,
        /**
         * 是否开启 rtl 模式
         */
        rtl: prop_types_1.default.bool,
        /**
         * 设备类型，针对不同的设备类型组件做出对应的响应式变化
         */
        device: prop_types_1.default.oneOf(['tablet', 'desktop', 'phone']),
        /**
         * 组件树
         */
        children: prop_types_1.default.any,
        /**
         * 指定浮层渲染的父节点，可以为节点 id 的字符串，也可以返回节点的函数
         */
        popupContainer: prop_types_1.default.any,
    };
    ConfigProvider.defaultProps = {
        warning: true,
        errorBoundary: false,
    };
    ConfigProvider.contextTypes = {
        nextPrefix: prop_types_1.default.string,
        nextLocale: prop_types_1.default.object,
        nextDefaultPropsConfig: prop_types_1.default.object,
        nextPure: prop_types_1.default.bool,
        nextRtl: prop_types_1.default.bool,
        nextWarning: prop_types_1.default.bool,
        nextDevice: prop_types_1.default.oneOf(['tablet', 'desktop', 'phone']),
        nextPopupContainer: prop_types_1.default.any,
        nextErrorBoundary: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.object]),
    };
    ConfigProvider.childContextTypes = {
        nextPrefix: prop_types_1.default.string,
        nextLocale: prop_types_1.default.object,
        nextDefaultPropsConfig: prop_types_1.default.object,
        nextPure: prop_types_1.default.bool,
        nextRtl: prop_types_1.default.bool,
        nextWarning: prop_types_1.default.bool,
        nextDevice: prop_types_1.default.oneOf(['tablet', 'desktop', 'phone']),
        nextPopupContainer: prop_types_1.default.any,
        nextErrorBoundary: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.object]),
    };
    /**
     * 传入组件，生成受 ConfigProvider 控制的 HOC 组件
     * @param Component - 组件类
     * @param options - 可选项
     * @returns 被 HOC 后的组件
     */
    ConfigProvider.config = config_1.config;
    ConfigProvider.initLocales = config_1.initLocales;
    ConfigProvider.setLanguage = config_1.setLanguage;
    ConfigProvider.setLocale = config_1.setLocale;
    ConfigProvider.setDirection = config_1.setDirection;
    ConfigProvider.getLanguage = config_1.getLanguage;
    ConfigProvider.getLocale = config_1.getLocale;
    ConfigProvider.getDirection = config_1.getDirection;
    ConfigProvider.Consumer = consumer_1.default;
    ConfigProvider.ErrorBoundary = error_boundary_1.default;
    /**
     * 传入组件的 props 和 displayName，得到和 childContext 计算过的包含有 preifx/locale/pure 的对象，一般用于通过静态方法生成脱离组件树的组件
     * @param props - 组件的 props
     * @param displayName - 组件的 displayName
     * @returns 新的 context props
     */
    ConfigProvider.getContextProps = function (props, displayName) {
        return (0, get_context_props_1.default)(props, childContextCache.root() || {}, displayName);
    };
    ConfigProvider.clearCache = function () {
        childContextCache.clear();
    };
    ConfigProvider.getContext = function () {
        var _a = childContextCache.root() || {}, nextPrefix = _a.nextPrefix, nextLocale = _a.nextLocale, nextDefaultPropsConfig = _a.nextDefaultPropsConfig, nextPure = _a.nextPure, nextRtl = _a.nextRtl, nextWarning = _a.nextWarning, nextDevice = _a.nextDevice, nextPopupContainer = _a.nextPopupContainer, nextErrorBoundary = _a.nextErrorBoundary;
        return {
            prefix: nextPrefix,
            locale: nextLocale,
            defaultPropsConfig: nextDefaultPropsConfig,
            pure: nextPure,
            rtl: nextRtl,
            warning: nextWarning,
            device: nextDevice,
            popupContainer: nextPopupContainer,
            errorBoundary: nextErrorBoundary,
        };
    };
    return ConfigProvider;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(ConfigProvider);
