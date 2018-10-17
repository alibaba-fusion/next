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

var _getContextProps = require('./get-context-props');

var _getContextProps2 = _interopRequireDefault(_getContextProps);

var _config = require('./config');

var _consumer = require('./consumer');

var _consumer2 = _interopRequireDefault(_consumer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var childContextCache = {};

/**
 * ConfigProvider
 * @propsExtends false
 */
var ConfigProvider = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ConfigProvider, _Component);

    function ConfigProvider() {
        (0, _classCallCheck3.default)(this, ConfigProvider);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
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
            warning = _props.warning;


        return {
            nextPrefix: prefix,
            nextLocale: locale,
            nextPure: pure,
            nextWarning: warning
        };
    };

    /**
     * 传入组件，生成受 ConfigProvider 控制的 HOC 组件
     * @param {Component} Component 组件类
     * @param {Object} options 可选项
     * @returns {Component} HOC
     */


    ConfigProvider.prototype.componentWillMount = function componentWillMount() {
        this.setMomentLocale(this.props.locale);
    };

    ConfigProvider.prototype.componentDidMount = function componentDidMount() {
        childContextCache = (0, _extends3.default)({}, this.getChildContext(), childContextCache);
    };

    ConfigProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.locale !== nextProps.locale) {
            this.setMomentLocale(nextProps.locale);
        }
    };

    ConfigProvider.prototype.componentDidUpdate = function componentDidUpdate() {
        childContextCache = this.getChildContext();
    };

    ConfigProvider.prototype.componentWillUnmount = function componentWillUnmount() {
        childContextCache = {};
    };

    ConfigProvider.prototype.setMomentLocale = function setMomentLocale(locale) {
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
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     */
    pure: _propTypes2.default.bool,
    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     */
    warning: _propTypes2.default.bool,
    /**
     * 组件树
     */
    children: _propTypes2.default.element
}, _class.defaultProps = {
    warning: true
}, _class.childContextTypes = {
    nextPrefix: _propTypes2.default.string,
    nextLocale: _propTypes2.default.object,
    nextPure: _propTypes2.default.bool,
    nextWarning: _propTypes2.default.bool
}, _class.config = function (Component, options) {
    return (0, _config.config)(Component, options);
}, _class.getContextProps = function (props, displayName) {
    return (0, _getContextProps2.default)(props, childContextCache, displayName);
}, _class.initLocales = _config.initLocales, _class.setLanguage = _config.setLanguage, _class.setLocale = _config.setLocale, _class.getLanguage = _config.getLanguage, _class.getLocale = _config.getLocale, _class.Consumer = _consumer2.default, _class.getContext = function () {
    var _childContextCache = childContextCache,
        nextPrefix = _childContextCache.nextPrefix,
        nextLocale = _childContextCache.nextLocale,
        nextPure = _childContextCache.nextPure,
        nextWarning = _childContextCache.nextWarning;


    return {
        prefix: nextPrefix,
        locale: nextLocale,
        pure: nextPure,
        warning: nextWarning
    };
}, _temp);
ConfigProvider.displayName = 'ConfigProvider';
exports.default = ConfigProvider;
module.exports = exports['default'];