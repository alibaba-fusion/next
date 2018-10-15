import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import getContextProps from './get-context-props';
import { config, initLocales, setLanguage, setLocale, getLocale, getLanguage } from './config';
import Consumer from './consumer';

let childContextCache = {};

/**
 * ConfigProvider
 * @propsExtends false
 */
class ConfigProvider extends Component {
    static propTypes = {
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
    };

    static defaultProps = {
        warning: true
    };

    static childContextTypes = {
        nextPrefix: PropTypes.string,
        nextLocale: PropTypes.object,
        nextPure: PropTypes.bool,
        nextWarning: PropTypes.bool
    };

    /**
     * 传入组件，生成受 ConfigProvider 控制的 HOC 组件
     * @param {Component} Component 组件类
     * @param {Object} options 可选项
     * @returns {Component} HOC
     */
    static config = (Component, options) => {
        return config(Component, options);
    };

    /**
     * 传入组件的 props 和 displayName，得到和 childContext 计算过的包含有 preifx/locale/pure 的对象，一般用于通过静态方法生成脱离组件树的组件
     * @param {Object} props 组件的 props
     * @param {String} displayName 组件的 displayName
     * @returns {Object} 新的 context props
     */
    static getContextProps = (props, displayName) => {
        return getContextProps(props, childContextCache, displayName);
    };

    static initLocales = initLocales;
    static setLanguage = setLanguage;
    static setLocale = setLocale;
    static getLanguage = getLanguage;
    static getLocale = getLocale;
    static Consumer = Consumer;

    static getContext = () => {
        const { nextPrefix, nextLocale, nextPure, nextWarning } = childContextCache;

        return {
            prefix: nextPrefix,
            locale: nextLocale,
            pure: nextPure,
            warning: nextWarning
        };
    }

    getChildContext() {
        const { prefix, locale, pure, warning } = this.props;

        return {
            nextPrefix: prefix,
            nextLocale: locale,
            nextPure: pure,
            nextWarning: warning
        };
    }

    componentWillMount() {
        this.setMomentLocale(this.props.locale);
    }

    componentDidMount() {
        childContextCache = Object.assign({}, this.getChildContext(), childContextCache);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.locale !== nextProps.locale) {
            this.setMomentLocale(nextProps.locale);
        }
    }

    componentDidUpdate() {
        childContextCache = this.getChildContext();
    }

    componentWillUnmount() {
        childContextCache = {};
    }

    setMomentLocale(locale) {
        let moment;
        try {
            moment = require('moment');
        } catch (e) {
            // ignore
        }

        if (moment && locale) {
            moment.locale(locale.momentLocale);
        }
    }

    render() {
        return Children.only(this.props.children);
    }
}

export default ConfigProvider;
