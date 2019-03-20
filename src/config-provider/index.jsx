import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import getContextProps from './get-context-props';
import {
    config,
    initLocales,
    setLanguage,
    setLocale,
    setDirection,
    getLocale,
    getLanguage,
    getDirection,
} from './config';
import Consumer from './consumer';
import ErrorBoundary from './error-boundary';
import Cache from './cache';

const childContextCache = new Cache();

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
         * 是否开启错误捕捉 errorBoundary
         * 如需自定义参数，请传入对象 对象接受参数列表如下：
         *
         * fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示
         * afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为, 比如埋点上传
         */
        errorBoundary: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        /**
         * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
         */
        pure: PropTypes.bool,
        /**
         * 是否在开发模式下显示组件属性被废弃的 warning 提示
         */
        warning: PropTypes.bool,
        /**
         * 是否开启 rtl 模式
         */
        rtl: PropTypes.bool,
        /**
         * 组件树
         */
        children: PropTypes.element,
    };

    static defaultProps = {
        warning: true,
        errorBoundary: false,
    };

    static childContextTypes = {
        nextPrefix: PropTypes.string,
        nextLocale: PropTypes.object,
        nextPure: PropTypes.bool,
        nextRtl: PropTypes.bool,
        nextWarning: PropTypes.bool,
        nextErrorBoundary: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object,
        ]),
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
        return getContextProps(
            props,
            childContextCache.root() || {},
            displayName
        );
    };

    static initLocales = initLocales;
    static setLanguage = setLanguage;
    static setLocale = setLocale;
    static setDirection = setDirection;
    static getLanguage = getLanguage;
    static getLocale = getLocale;
    static getDirection = getDirection;
    static Consumer = Consumer;
    static ErrorBoundary = ErrorBoundary;

    static getContext = () => {
        const {
            nextPrefix,
            nextLocale,
            nextPure,
            nextRtl,
            nextWarning,
            nextErrorBoundary,
        } = childContextCache.root() || {};

        return {
            prefix: nextPrefix,
            locale: nextLocale,
            pure: nextPure,
            rtl: nextRtl,
            warning: nextWarning,
            errorBoundary: nextErrorBoundary,
        };
    };

    constructor(...args) {
        super(...args);
        childContextCache.add(
            this,
            Object.assign(
                {},
                childContextCache.get(this, {}),
                this.getChildContext()
            )
        );
    }

    getChildContext() {
        const {
            prefix,
            locale,
            pure,
            warning,
            rtl,
            errorBoundary,
        } = this.props;

        return {
            nextPrefix: prefix,
            nextLocale: locale,
            nextPure: pure,
            nextRtl: rtl,
            nextWarning: warning,
            nextErrorBoundary: errorBoundary,
        };
    }

    componentWillMount() {
        this.setMomentLocale(this.props.locale);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.locale !== nextProps.locale) {
            this.setMomentLocale(nextProps.locale);
        }
    }

    componentDidUpdate() {
        childContextCache.add(
            this,
            Object.assign(
                {},
                childContextCache.get(this, {}),
                this.getChildContext()
            )
        );
    }

    componentWillUnmount() {
        childContextCache.remove(this);
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
