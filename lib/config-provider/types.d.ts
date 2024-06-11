import type { ErrorInfo, JSXElementConstructor, Component, PropsWithChildren, WeakValidationMap, ValidationMap } from 'react';
import type * as React from 'react';
import type { ComponentLocaleObject, Locale } from '../locale/types';
export interface PropsDeprecatedPrinter {
    (props: string, instead: string, component: string): void;
}
/**
 * @api
 */
export type DeviceType = 'tablet' | 'desktop' | 'phone';
/**
 * @api
 */
export type PopupContainerType = string | HTMLElement | ((target: HTMLElement) => HTMLElement);
export interface AfterCatch {
    (error: Error, errorInfo: ErrorInfo): void;
}
export interface FallbackUIProps {
    error: Error;
    errorInfo: ErrorInfo;
}
export type FallbackUI = JSXElementConstructor<FallbackUIProps>;
export interface ErrorBoundaryConfig {
    afterCatch?: AfterCatch;
    fallbackUI?: FallbackUI;
}
export type ErrorBoundaryType = boolean | ParsedErrorBoundary;
export interface ParsedErrorBoundary extends ErrorBoundaryConfig {
    open?: boolean;
}
export type DefaultPropsConfig = Record<string, object>;
/**
 * Context 配置信息
 */
export interface ContextState {
    nextPrefix?: string;
    nextLocale?: Partial<Locale>;
    nextDefaultPropsConfig?: DefaultPropsConfig;
    nextPure?: boolean;
    nextDevice?: DeviceType;
    nextPopupContainer?: PopupContainerType;
    nextRtl?: boolean;
    nextWarning?: boolean;
    nextErrorBoundary?: ErrorBoundaryType;
}
/**
 * 组件通用参数配置
 */
export interface ComponentCommonProps {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;
    /**
     * 组件的国际化文案对象
     */
    locale?: ComponentLocaleObject;
    /**
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     */
    pure?: boolean;
    /**
     * 设备类型，针对不同的设备类型组件做出对应的响应式变化
     */
    device?: DeviceType;
    /**
     * 是否开启 rtl 模式
     */
    rtl?: boolean;
    /**
     * 是否开启错误捕捉 errorBoundary
     * 如需自定义参数，请传入对象 对象接受参数列表如下：
     *
     * fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示
     * afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为，比如埋点上传
     */
    errorBoundary?: ErrorBoundaryType;
    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     */
    warning?: boolean;
}
export interface OverlayCommonProps extends ComponentCommonProps {
    popupContainer?: PopupContainerType;
    container?: PopupContainerType;
}
export interface ConfigOptions<Props = Record<string, never>, Names extends PropertyKey = string> {
    exportNames?: Names[];
    componentName?: string;
    transform?: (props: PropsWithChildren<Omit<Props, keyof ComponentCommonProps>>, propsDeprecatedPrinter: PropsDeprecatedPrinter) => PropsWithChildren<Props & ComponentCommonProps>;
}
/**
 * @api ConfigProvider
 */
export interface ConfigProviderProps {
    /**
     * 样式类名的品牌前缀
     * @en Prefix of component className
     */
    prefix?: string;
    /**
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     * @en Enable the Pure Render mode, it will improve performance, but it will also have side effects
     */
    pure?: boolean;
    /**
     * 设备类型，针对不同的设备类型组件做出对应的响应式变化
     * @en Responsive of device
     */
    device?: DeviceType;
    /**
     * 是否开启 rtl 模式
     * @en Enable right to left mode
     */
    rtl?: boolean;
    /**
     * 是否开启错误捕捉
     * @en Turn errorBoundary on or not
     * @defaultValue false
     * @remarks
     * 如需自定义参数，请传入对象 对象接受参数列表如下：
     * fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示
     * afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为，比如埋点上传
     */
    errorBoundary?: ErrorBoundaryType;
    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     * @en whether to display the warning prompt for component properties being deprecated in development mode
     * @defaultValue true
     */
    warning?: boolean;
    /**
     * 各组件的国际化文案对象，属性为组件的 displayName
     * @en Locale object for components
     */
    locale?: Partial<Locale>;
    /**
     * 指定浮层渲染的父节点，可以为节点 id 的字符串，也可以返回节点的函数
     * @en shell container node
     */
    popupContainer?: PopupContainerType;
    /**
     * 组件树
     * @en children nodes
     */
    children?: React.ReactNode;
    /**
     * 各组件 API 的默认配置
     * @en Set default props of components in batches
     */
    defaultPropsConfig?: Record<string, object>;
}
export interface ParsedContextConfig extends Omit<ConfigProviderProps, 'locale'> {
    locale?: ComponentLocaleObject;
    errorBoundary: ParsedErrorBoundary;
    prefix: string;
    defaultPropsConfig: DefaultPropsConfig;
}
/**
 * 被 config() 包裹后的组件实例对象
 */
export interface ConfiguredComponent<P, R> extends Component<P> {
    /**
     * 获取到真实的组件 ref 对象的函数
     */
    getInstance(): R;
}
/**
 * 被 config() 包裹后的组件的 class 类型
 */
export interface ConfiguredComponentClass<P, R, OP> {
    new (props: P, context?: any): ConfiguredComponent<P, R> & OP;
    propTypes: WeakValidationMap<P> | undefined;
    displayName: string;
    contextTypes: ValidationMap<ContextState> | undefined;
}
export type NonBlank<O> = keyof O extends never ? {} : O;
export interface REACT_STATICS {
    childContextTypes: true;
    contextType: true;
    contextTypes: true;
    defaultProps: true;
    displayName: true;
    getDefaultProps: true;
    getDerivedStateFromError: true;
    getDerivedStateFromProps: true;
    mixins: true;
    propTypes: true;
    type: true;
    compare: true;
    render: true;
    $$typeof: true;
}
export interface KNOWN_FUNCTION_STATICS {
    name: true;
    length: true;
    prototype: true;
    caller: true;
    callee: true;
    arguments: true;
    arity: true;
}
export type ReactStaticsKeys = keyof REACT_STATICS | keyof KNOWN_FUNCTION_STATICS;
export type NonReactStatics<C> = NonBlank<{
    [k in Exclude<keyof C, ReactStaticsKeys>]: C[k];
}>;
export type PartialLocale = {
    [P in keyof Locale]?: Partial<Locale[P]>;
};
