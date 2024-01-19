import React, {
    ComponentType,
    ComponentClass,
    FunctionComponent,
    ForwardRefExoticComponent,
    ComponentProps,
    ComponentRef,
    StaticLifecycle,
} from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { obj, log } from '../util';
import getContextProps from './get-context-props';
import ErrorBoundary from './error-boundary';
import { Locale } from '../locale/types';
import type {
    ConfigOptions,
    PropsDeprecatedPrinter,
    ContextState,
    ComponentCommonProps,
    OverlayCommonProps,
    ConfiguredComponent,
    ConfigProviderProps,
} from './types';

const { shallowEqual } = obj;

function getDisplayName(Component: ComponentType<unknown> | ForwardRefExoticComponent<unknown>) {
    return Component.displayName || Component.name || 'Component';
}

let globalLocales: Record<string, Partial<Locale>> | undefined;
let currentGlobalLanguage: string = 'zh-cn';
let currentGlobalLocale: Partial<Locale> = {};
let currentGlobalRtl: Locale['rtl'];

export function initLocales(locales?: Record<string, Locale>) {
    globalLocales = locales;

    if (locales) {
        currentGlobalLocale = locales[currentGlobalLanguage];

        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
}

export function setLanguage(language: string) {
    if (globalLocales) {
        currentGlobalLanguage = language;
        currentGlobalLocale = globalLocales[language];

        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
}

export function setLocale(locale: Partial<Locale>) {
    currentGlobalLocale = {
        ...(globalLocales ? globalLocales[currentGlobalLanguage] : {}),
        ...locale,
    };

    if (typeof currentGlobalRtl !== 'boolean') {
        currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
    }
}

export function setDirection(dir: 'ltr' | 'rtl') {
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

export type ExcludeComponentStatics =
    | 'prototype'
    | 'contextType'
    | keyof StaticLifecycle<unknown, unknown>;

function config<
    C extends ComponentClass | ForwardRefExoticComponent<unknown> | FunctionComponent,
    R = C extends ComponentClass
        ? InstanceType<C>
        : C extends ForwardRefExoticComponent<unknown>
          ? ComponentRef<C>
          : unknown,
>(
    Component: C,
    options: ConfigOptions<ComponentProps<C>> = {}
): typeof ConfiguredComponent<ComponentProps<C> & ComponentCommonProps, R> & {
    [K in Exclude<keyof C, ExcludeComponentStatics>]: C[K];
} {
    type P = ComponentProps<C> & ComponentCommonProps;
    // 非 forwardRef 创建的 class component
    if (
        obj.isClassComponent(Component) &&
        Component.prototype.shouldComponentUpdate === undefined
    ) {
        // class component: 通过定义 shouldComponentUpdate 改写成 pure component, 有 refs
        Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(
            nextProps: P,
            nextState: unknown
        ) {
            if (this.props.pure) {
                return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
            }

            return true;
        };
    }

    class ConfigedComponent extends React.Component<P> {
        static displayName = `Config(${getDisplayName(Component)})`;
        static propTypes = {
            ...(Component.propTypes || {}),
            prefix: PropTypes.string,
            locale: PropTypes.object,
            defaultPropsConfig: PropTypes.object,
            pure: PropTypes.bool,
            rtl: PropTypes.bool,
            device: PropTypes.oneOf(['tablet', 'desktop', 'phone']),
            popupContainer: PropTypes.any,
            errorBoundary: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        };
        static contextTypes = {
            ...((Component as ComponentClass).contextTypes || {}),
            nextPrefix: PropTypes.string,
            nextLocale: PropTypes.object,
            nextDefaultPropsConfig: PropTypes.object,
            nextPure: PropTypes.bool,
            nextRtl: PropTypes.bool,
            nextWarning: PropTypes.bool,
            nextDevice: PropTypes.oneOf(['tablet', 'desktop', 'phone']),
            nextPopupContainer: PropTypes.any,
            nextErrorBoundary: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        };

        constructor(props: P, context: ContextState) {
            super(props, context);

            this._getInstance = this._getInstance.bind(this);
            this._deprecated = this._deprecated.bind(this);
        }

        // ref data
        private _instance: R;
        // proxied properties
        [key: string]: unknown;

        private _getInstance(ref: R) {
            this._instance = ref;

            if (this._instance && options.exportNames) {
                options.exportNames.forEach(name => {
                    const field = (this._instance as Record<string, unknown>)[name];
                    if (typeof field === 'function') {
                        this[name] = field.bind(this._instance);
                    } else {
                        this[name] = field;
                    }
                });
            }
        }

        private _deprecated(...args: Parameters<PropsDeprecatedPrinter>) {
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
                // fixme: defaultPropsConfig is unused
                defaultPropsConfig,
                pure,
                rtl,
                device,
                popupContainer,
                errorBoundary,
                ...others
            } = this.props as OverlayCommonProps & Pick<ConfigProviderProps, 'defaultPropsConfig'>;
            const {
                nextPrefix,
                nextLocale = {},
                nextDefaultPropsConfig = {},
                nextPure,
                nextRtl,
                nextDevice,
                nextPopupContainer,
                nextErrorBoundary,
            } = this.context;

            const displayName = options.componentName || getDisplayName(Component);
            const contextProps = getContextProps(
                {
                    prefix,
                    locale,
                    defaultPropsConfig,
                    pure,
                    device,
                    popupContainer,
                    rtl,
                    errorBoundary,
                },
                {
                    nextPrefix,
                    nextLocale: { ...currentGlobalLocale, ...nextLocale },
                    nextDefaultPropsConfig,
                    nextPure,
                    nextDevice,
                    nextPopupContainer,
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
            const newContextProps = (
                ['prefix', 'locale', 'pure', 'rtl', 'device', 'popupContainer'] as const
            ).reduce((ret, name) => {
                if (typeof contextProps[name] !== 'undefined') {
                    // @ts-expect-error ignore assign type error
                    ret[name] = contextProps[name];
                }
                return ret;
            }, {} as OverlayCommonProps);

            if ('pure' in newContextProps && newContextProps.pure) {
                log.warning(
                    'pure of ConfigProvider is deprecated, use Function Component or React.PureComponent'
                );
            }

            // 对于两个真正消费 popupContainer 的组件来说，正确的名字是 container,
            if (
                'popupContainer' in newContextProps &&
                (this.props as OverlayCommonProps).container === undefined &&
                ['Overlay', 'Popup'].indexOf(displayName) > -1
            ) {
                (newContextProps as OverlayCommonProps).container = newContextProps.popupContainer;
                delete newContextProps.popupContainer;
            }

            const newOthers = options.transform
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  options.transform(others as any, this._deprecated)
                : others;

            const newProps = {
                ...contextProps.defaultPropsConfig[displayName],
                ...newOthers,
                ...newContextProps,
                ref: this._getInstance,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any;

            const content = <Component {...newProps} />;

            const { open, ...othersBoundary } = contextProps.errorBoundary;

            return open ? <ErrorBoundary {...othersBoundary}>{content}</ErrorBoundary> : content;
        }
    }

    ConfigedComponent.displayName = `Config(${getDisplayName(Component)})`;

    hoistNonReactStatic(ConfigedComponent, Component);

    return ConfigedComponent as unknown as typeof ConfiguredComponent<P, R> & {
        [K in Exclude<keyof C, ExcludeComponentStatics>]: C[K];
    };
}

export { config };
