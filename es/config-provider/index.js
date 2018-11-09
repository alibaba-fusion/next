import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import getContextProps from './get-context-props';
import { config, initLocales, setLanguage, setLocale, getLocale, getLanguage } from './config';
import Consumer from './consumer';

var childContextCache = {};

/**
 * ConfigProvider
 * @propsExtends false
 */
var ConfigProvider = (_temp = _class = function (_Component) {
    _inherits(ConfigProvider, _Component);

    function ConfigProvider() {
        _classCallCheck(this, ConfigProvider);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
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
        childContextCache = _extends({}, this.getChildContext(), childContextCache);
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
        return Children.only(this.props.children);
    };

    return ConfigProvider;
}(Component), _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: PropTypes.string,
    /**
     * 国际化文案对象，属性为组件的 displayName
     */
    locale: PropTypes.object,
    /**
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     */
    pure: PropTypes.bool,
    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     */
    warning: PropTypes.bool,
    /**
     * 组件树
     */
    children: PropTypes.element
}, _class.defaultProps = {
    warning: true
}, _class.childContextTypes = {
    nextPrefix: PropTypes.string,
    nextLocale: PropTypes.object,
    nextPure: PropTypes.bool,
    nextWarning: PropTypes.bool
}, _class.config = function (Component, options) {
    return config(Component, options);
}, _class.getContextProps = function (props, displayName) {
    return getContextProps(props, childContextCache, displayName);
}, _class.initLocales = initLocales, _class.setLanguage = setLanguage, _class.setLocale = setLocale, _class.getLanguage = getLanguage, _class.getLocale = getLocale, _class.Consumer = Consumer, _class.getContext = function () {
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


export default ConfigProvider;