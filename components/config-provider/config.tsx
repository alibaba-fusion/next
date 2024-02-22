import React, {
    ComponentType,
    ForwardRefExoticComponent,
    ComponentProps,
    ComponentRef,
    StaticLifecycle,
    JSXElementConstructor,
    ComponentPropsWithoutRef,
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
    ComponentCommonProps,
    OverlayCommonProps,
    ConfigProviderProps,
    ConfiguredComponentClass,
    PartialLocale,
    NonReactStatics,
    NonBlank,
} from './types';

const { shallowEqual } = obj;

function getDisplayName(Component: ComponentType<unknown> | ForwardRefExoticComponent<unknown>) {
    return Component.displayName || Component.name || 'Component';
}

let globalLocales: Record<string, Partial<Locale>> | undefined;
let currentGlobalLanguage: string = 'zh-cn';
let currentGlobalLocale: PartialLocale = {};
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

export function setLocale(locale: PartialLocale) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyProps = any;

function isCanPassRefComponent(component: JSXElementConstructor<AnyProps>) {
    return obj.isClassComponent(component) || obj.isForwardRefComponent(component);
}

function config<
    C extends
        | ComponentType<AnyProps>
        | ForwardRefExoticComponent<AnyProps>
        | JSXElementConstructor<AnyProps>,
    K extends Exclude<keyof ComponentRef<C>, symbol> = never,
>(Component: C, options: ConfigOptions<ComponentPropsWithoutRef<C>, K> = {}) {
    type P = ComponentPropsWithoutRef<C> & ComponentCommonProps;
    type R = ComponentRef<C>;
    type RefType = R extends never ? undefined : R;
    type HoistsProperties = NonBlank<Pick<R, K>>;

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
            ...((Component as ComponentType).propTypes || {}),
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
            ...((Component as ComponentType).contextTypes || {}),
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

        // ref data
        private _instance: R;

        constructor(props: P, context?: unknown) {
            super(props, context);

            this._getInstance = this._getInstance.bind(this);
            this._deprecated = this._deprecated.bind(this);
        }

        private _getInstance(ref: R) {
            this._instance = ref;

            if (this._instance && options.exportNames) {
                options.exportNames.forEach(name => {
                    const field = this._instance[name];
                    if (typeof field === 'function') {
                        (this as R)[name] = field.bind(this._instance);
                    } else {
                        (this as R)[name] = field;
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
                ? options.transform(others as P, this._deprecated)
                : others;

            const newProps = {
                ...contextProps.defaultPropsConfig[displayName],
                ...newOthers,
                ...newContextProps,
            } as ComponentProps<C>;

            // 仅向 class or forwardRef component 传递 ref，否则 react 会报一个 warning
            if (isCanPassRefComponent(Component)) {
                newProps.ref = this._getInstance;
            }

            const content = <Component {...newProps} />;

            const { open, ...othersBoundary } = contextProps.errorBoundary;

            return open ? <ErrorBoundary {...othersBoundary}>{content}</ErrorBoundary> : content;
        }
    }

    hoistNonReactStatic(ConfigedComponent, Component);

    // 这里将 ConfigedComponent 推断一个限定的类型，以简化生成的类型代码
    return ConfigedComponent as unknown as ConfiguredComponentClass<P, RefType, HoistsProperties> &
        NonReactStatics<C>;
}

export { config };
