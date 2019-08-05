import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './error-boundary';
import ConfigContext, {
    propTypes,
    defaultProps,
    setContext,
    getContextProps,
} from './context';
import { obj } from '../util';
import Cache from './cache';

const childContextCache = new Cache();
let globalLocales;
let currentGlobalLanguage = 'zh-cn';
let currentGlobalLocale = {};
let currentGlobalRtl;

export function initLocales(locales) {
    globalLocales = locales;

    if (locales) {
        currentGlobalLocale = locales[currentGlobalLanguage];

        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
    updateContext();
}

export function setLanguage(language) {
    if (globalLocales) {
        currentGlobalLanguage = language;
        currentGlobalLocale = globalLocales[language];

        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
    updateContext();
}

export function setLocale(locale) {
    currentGlobalLocale = {
        ...(globalLocales ? globalLocales[currentGlobalLanguage] : {}),
        ...locale,
    };

    if (typeof currentGlobalRtl !== 'boolean') {
        currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
    }
    updateContext();
}

export function setDirection(dir) {
    currentGlobalRtl = dir === 'rtl';
    updateContext();
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

export function updateContext() {
    setContext({
        rtl: currentGlobalRtl,
        locale: currentGlobalLocale,
    });
}

class ConfigProvider extends Component {
    static propTypes = {
        children: PropTypes.element,
        ...propTypes,
    };

    static defaultProps = {
        ...defaultProps,
    };

    static getContext = () => {
        return {
            ...(childContextCache.root() || {}),
        };
    };

    static setContext = setContext;
    static initLocales = initLocales;
    static setLanguage = setLanguage;
    static setLocale = setLocale;
    static setDirection = setDirection;
    static getLanguage = getLanguage;
    static getLocale = getLocale;
    static getDirection = getDirection;
    static ErrorBoundary = ErrorBoundary;

    static getContextProps = (props, displayName) =>
        getContextProps(props, childContextCache.root() || {}, displayName);

    static Consumer = ConfigContext.Consumer;

    constructor(...args) {
        super(...args);
        this.addToCache();
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
        this.addToCache();
    }

    componentWillUnmount() {
        childContextCache.remove(this);
    }

    addToCache() {
        childContextCache.add(this, {
            ...childContextCache.get(this, {}),
            ...obj.pickInProps(propTypes, this.props),
        });
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
        return (
            <ConfigContext.Provider
                value={obj.pickInProps(propTypes, this.props)}
            >
                {this.props.children}
            </ConfigContext.Provider>
        );
    }
}

export default ConfigProvider;
