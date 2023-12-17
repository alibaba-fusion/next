import { ReactNode, ErrorInfo, JSXElementConstructor, Component, PropsWithChildren } from 'react';
import { ComponentLocaleObject, Locale } from '../locale/types';

export interface PropsDeprecatedPrinter {
    (props: string, instead: string, component: string): void;
}

export type DeviceType = 'tablet' | 'desktop' | 'phone';
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
    nextLocale?: Locale;
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

export interface ConfigOptions<Props = Record<string, never>, Names extends string = string> {
    exportNames?: Names[];
    componentName?: string;
    transform?: (
        props: PropsWithChildren<Omit<Props, keyof ComponentCommonProps>>,
        propsDeprecatedPrinter: PropsDeprecatedPrinter
    ) => PropsWithChildren<Props & ComponentCommonProps>;
}

/**
 * @api ConfigProvider
 */
export interface ConfigProviderProps {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;
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
    /**
     * 各组件的国际化文案对象，属性为组件的 displayName
     */
    locale?: Partial<Locale>;
    /**
     * 弹层挂载的容器节点
     */
    popupContainer?: PopupContainerType;
    /**
     * 组件树
     */
    children?: ReactNode;
    /**
     * 各组件 API 的默认配置
     */
    defaultPropsConfig?: DefaultPropsConfig;
}

export interface ParsedContextConfig extends Omit<ConfigProviderProps, 'locale'> {
    locale?: ComponentLocaleObject;
    errorBoundary: ParsedErrorBoundary;
    prefix: string;
    defaultPropsConfig: DefaultPropsConfig;
}

export declare class ConfiguredComponent<P, S, R> extends Component<P, S> {
    getInstance(): R;
    [key: string]: unknown;
}
