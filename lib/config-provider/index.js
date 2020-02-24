'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _getContextProps = require('./get-context-props');

var _getContextProps2 = _interopRequireDefault(_getContextProps);

var _config = require('./config');

var _consumer = require('./consumer');

var _consumer2 = _interopRequireDefault(_consumer);

var _errorBoundary = require('./error-boundary');

var _errorBoundary2 = _interopRequireDefault(_errorBoundary);

var _cache = require('./cache');

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var childContextCache = new _cache2.default();

var setMomentLocale = function setMomentLocale(locale) {
    var moment = void 0;
    try {
        moment = require('moment');
    } catch (e) {
        // ignore
    }

    if (moment && locale) {
        moment.locale(locale.momentLocale);
    }
};
/**
 * ConfigProvider
 * @propsExtends false
 */
var ConfigProvider = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ConfigProvider, _Component);

    /**
     * 传入组件，生成受 ConfigProvider 控制的 HOC 组件
     * @param {Component} Component 组件类
     * @param {Object} options 可选项
     * @returns {Component} HOC
     */
    function ConfigProvider() {
        (0, _classCallCheck3.default)(this, ConfigProvider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args)));

        childContextCache.add(_this, (0, _extends3.default)({}, childContextCache.get(_this, {}), _this.getChildContext()));

        _this.state = {
            locale: _this.props.locale
        };
        return _this;
    }

    /**
     * 传入组件的 props 和 displayName，得到和 childContext 计算过的包含有 preifx/locale/pure 的对象，一般用于通过静态方法生成脱离组件树的组件
     * @param {Object} props 组件的 props
     * @param {String} displayName 组件的 displayName
     * @returns {Object} 新的 context props
     */


    ConfigProvider.prototype.getChildContext = function getChildContext() {
        var _props = this.props,
            prefix = _props.prefix,
            locale = _props.locale,
            pure = _props.pure,
            warning = _props.warning,
            rtl = _props.rtl,
            device = _props.device,
            popupContainer = _props.popupContainer,
            errorBoundary = _props.errorBoundary;


        return {
            nextPrefix: prefix,
            nextLocale: locale,
            nextPure: pure,
            nextRtl: rtl,
            nextWarning: warning,
            nextDevice: device,
            nextPopupContainer: popupContainer,
            nextErrorBoundary: errorBoundary
        };
    };

    ConfigProvider.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.locale !== prevState.locale) {
            setMomentLocale(nextProps.locale);

            return {
                locale: nextProps.locale
            };
        }

        return null;
    };

    ConfigProvider.prototype.componentDidUpdate = function componentDidUpdate() {
        childContextCache.add(this, (0, _extends3.default)({}, childContextCache.get(this, {}), this.getChildContext()));
    };

    ConfigProvider.prototype.componentWillUnmount = function componentWillUnmount() {
        childContextCache.remove(this);
    };

    ConfigProvider.prototype.render = function render() {
        return _react.Children.only(this.props.children);
    };

    return ConfigProvider;
}(_react.Component), _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 国际化文案对象，属性为组件的 displayName
     */
    locale: _propTypes2.default.object,
    /**
     * 是否开启错误捕捉 errorBoundary
     * 如需自定义参数，请传入对象 对象接受参数列表如下：
     *
     * fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示
     * afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为, 比如埋点上传
     */
    errorBoundary: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
    /**
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     */
    pure: _propTypes2.default.bool,
    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     */
    warning: _propTypes2.default.bool,
    /**
     * 是否开启 rtl 模式
     */
    rtl: _propTypes2.default.bool,
    /**
     * 设备类型，针对不同的设备类型组件做出对应的响应式变化
     */
    device: _propTypes2.default.oneOf(['tablet', 'desktop', 'phone']),
    /**
     * 组件树
     */
    children: _propTypes2.default.any,
    /**
     * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数
     */
    popupContainer: _propTypes2.default.any
}, _class.defaultProps = {
    warning: true,
    errorBoundary: false
}, _class.childContextTypes = {
    nextPrefix: _propTypes2.default.string,
    nextLocale: _propTypes2.default.object,
    nextPure: _propTypes2.default.bool,
    nextRtl: _propTypes2.default.bool,
    nextWarning: _propTypes2.default.bool,
    nextDevice: _propTypes2.default.oneOf(['tablet', 'desktop', 'phone']),
    nextPopupContainer: _propTypes2.default.any,
    nextErrorBoundary: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object])
}, _class.config = function (Component, options) {
    return (0, _config.config)(Component, options);
}, _class.getContextProps = function (props, displayName) {
    return (0, _getContextProps2.default)(props, childContextCache.root() || {}, displayName);
}, _class.initLocales = _config.initLocales, _class.setLanguage = _config.setLanguage, _class.setLocale = _config.setLocale, _class.setDirection = _config.setDirection, _class.getLanguage = _config.getLanguage, _class.getLocale = _config.getLocale, _class.getDirection = _config.getDirection, _class.Consumer = _consumer2.default, _class.ErrorBoundary = _errorBoundary2.default, _class.getContext = function () {
    var _ref = childContextCache.root() || {},
        nextPrefix = _ref.nextPrefix,
        nextLocale = _ref.nextLocale,
        nextPure = _ref.nextPure,
        nextRtl = _ref.nextRtl,
        nextWarning = _ref.nextWarning,
        nextDevice = _ref.nextDevice,
        nextPopupContainer = _ref.nextPopupContainer,
        nextErrorBoundary = _ref.nextErrorBoundary;

    return {
        prefix: nextPrefix,
        locale: nextLocale,
        pure: nextPure,
        rtl: nextRtl,
        warning: nextWarning,
        device: nextDevice,
        popupContainer: nextPopupContainer,
        errorBoundary: nextErrorBoundary
    };
}, _temp);
ConfigProvider.displayName = 'ConfigProvider';
exports.default = (0, _reactLifecyclesCompat.polyfill)(ConfigProvider);
module.exports = exports['default'];