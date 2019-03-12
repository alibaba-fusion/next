import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { obj, log } from '../util';
import getContextProps from './get-context-props';
import ErrorBoundary from './error-boundary';

const { shallowEqual } = obj;

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

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
    currentGlobalLocale = {
        ...(globalLocales ? globalLocales[currentGlobalLanguage] : {}),
        ...locale,
    };

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

export function config(Component, options = {}) {
    if (Component.prototype.shouldComponentUpdate === undefined) {
        Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(
            nextProps,
            nextState
        ) {
            if (this.props.pure) {
                return (
                    !shallowEqual(this.props, nextProps) ||
                    !shallowEqual(this.state, nextState)
                );
            }

            return true;
        };
    }

    class ConfigedComponent extends React.Component {
        static propTypes = {
            ...(Component.propTypes || {}),
            prefix: PropTypes.string,
            locale: PropTypes.object,
            pure: PropTypes.bool,
            rtl: PropTypes.bool,
            errorBoundary: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.object,
            ]),
        };
        static contextTypes = {
            ...(Component.contextTypes || {}),
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

        constructor(props, context) {
            super(props, context);

            this._getInstance = this._getInstance.bind(this);
            this._deprecated = this._deprecated.bind(this);
        }

        _getInstance(ref) {
            this._instance = ref;

            if (this._instance && options.exportNames) {
                options.exportNames.forEach(name => {
                    const field = this._instance[name];
                    if (typeof field === 'function') {
                        this[name] = field.bind(this._instance);
                    } else {
                        this[name] = field;
                    }
                });
            }
        }

        _deprecated(...args) {
            if (this.context.nextWarning !== false) {
                log.deprecated(...args);
            }
        }

        getInstance() {
            return this._instance;
        }

        render() {
            const {
                prefix,
                locale,
                pure,
                rtl,
                errorBoundary,
                ...others
            } = this.props;
            const {
                nextPrefix,
                nextLocale = {},
                nextPure,
                nextRtl,
                nextErrorBoundary = {},
            } = this.context;

            const displayName =
                options.componentName || getDisplayName(Component);
            const contextProps = getContextProps(
                { prefix, locale, pure, rtl, errorBoundary },
                {
                    nextPrefix,
                    nextLocale: { ...currentGlobalLocale, ...nextLocale },
                    nextPure,
                    nextRtl:
                        typeof nextRtl === 'boolean'
                            ? nextRtl
                            : currentGlobalRtl === true
                            ? true
                            : undefined,
                    nextErrorBoundary,
                },
                displayName
            );

            // errorBoundary is only for <ErrorBoundary>
            const newContextProps = ['prefix', 'locale', 'pure', 'rtl'].reduce(
                (ret, name) => {
                    if (typeof contextProps[name] !== 'undefined') {
                        ret[name] = contextProps[name];
                    }
                    return ret;
                },
                {}
            );

            const newOthers = options.transform
                ? options.transform(others, this._deprecated)
                : others;

            const content = (
                <Component
                    {...newOthers}
                    {...newContextProps}
                    ref={this._getInstance}
                />
            );

            const { open, ...othersBoundary } = contextProps.errorBoundary;

            return open ? (
                <ErrorBoundary {...othersBoundary}>{content}</ErrorBoundary>
            ) : (
                content
            );
        }
    }

    ConfigedComponent.displayName = `Config(${getDisplayName(Component)})`;

    hoistNonReactStatic(ConfigedComponent, Component);

    return ConfigedComponent;
}
