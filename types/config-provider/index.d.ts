import { Component, type ReactNode } from 'react';
import PropTypes from 'prop-types';
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
import ErrorBoundary from './error-boundary';
import type {
    ConfigProviderProps,
    ComponentCommonProps,
    ContextState,
    PropsDeprecatedPrinter,
} from './types';
declare class ConfigProvider extends Component<
    ConfigProviderProps,
    Pick<ConfigProviderProps, 'locale'>
> {
    static propTypes: {
        /**
         * 样式类名的品牌前缀
         */
        prefix: PropTypes.Requireable<string>;
        /**
         * 国际化文案对象，属性为组件的 displayName
         */
        locale: PropTypes.Requireable<object>;
        /**
         * 组件 API 的默认配置
         */
        defaultPropsConfig: PropTypes.Requireable<object>;
        /**
         * 是否开启错误捕捉 errorBoundary
         * 如需自定义参数，请传入对象 对象接受参数列表如下：
         *
         * fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示
         * afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为，比如埋点上传
         */
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        /**
         * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
         */
        pure: PropTypes.Requireable<boolean>;
        /**
         * 是否在开发模式下显示组件属性被废弃的 warning 提示
         */
        warning: PropTypes.Requireable<boolean>;
        /**
         * 是否开启 rtl 模式
         */
        rtl: PropTypes.Requireable<boolean>;
        /**
         * 设备类型，针对不同的设备类型组件做出对应的响应式变化
         */
        device: PropTypes.Requireable<string>;
        /**
         * 组件树
         */
        children: PropTypes.Requireable<any>;
        /**
         * 指定浮层渲染的父节点，可以为节点 id 的字符串，也可以返回节点的函数
         */
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        warning: boolean;
        errorBoundary: boolean;
    };
    static contextTypes: {
        nextPrefix: PropTypes.Requireable<string>;
        nextLocale: PropTypes.Requireable<object>;
        nextDefaultPropsConfig: PropTypes.Requireable<object>;
        nextPure: PropTypes.Requireable<boolean>;
        nextRtl: PropTypes.Requireable<boolean>;
        nextWarning: PropTypes.Requireable<boolean>;
        nextDevice: PropTypes.Requireable<string>;
        nextPopupContainer: PropTypes.Requireable<any>;
        nextErrorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
    };
    static childContextTypes: {
        nextPrefix: PropTypes.Requireable<string>;
        nextLocale: PropTypes.Requireable<object>;
        nextDefaultPropsConfig: PropTypes.Requireable<object>;
        nextPure: PropTypes.Requireable<boolean>;
        nextRtl: PropTypes.Requireable<boolean>;
        nextWarning: PropTypes.Requireable<boolean>;
        nextDevice: PropTypes.Requireable<string>;
        nextPopupContainer: PropTypes.Requireable<any>;
        nextErrorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
    };
    /**
     * 传入组件，生成受 ConfigProvider 控制的 HOC 组件
     * @param Component - 组件类
     * @param options - 可选项
     * @returns 被 HOC 后的组件
     */
    static config: typeof config;
    static initLocales: typeof initLocales;
    static setLanguage: typeof setLanguage;
    static setLocale: typeof setLocale;
    static setDirection: typeof setDirection;
    static getLanguage: typeof getLanguage;
    static getLocale: typeof getLocale;
    static getDirection: typeof getDirection;
    static Consumer: {
        (
            { children }: import('./consumer').ConsumerProps,
            context: Record<PropertyKey, string>
        ): any;
        propTypes: {
            children: PropTypes.Requireable<(...args: any[]) => any>;
        };
        contextTypes: {
            nextPrefix: PropTypes.Requireable<string>;
            nextLocale: PropTypes.Requireable<object>;
            nextPure: PropTypes.Requireable<boolean>;
            newRtl: PropTypes.Requireable<boolean>;
            nextWarning: PropTypes.Requireable<boolean>;
            nextDevice: PropTypes.Requireable<string>;
            nextPopupContainer: PropTypes.Requireable<any>;
        };
    };
    static ErrorBoundary: typeof ErrorBoundary;
    /**
     * 传入组件的 props 和 displayName，得到和 childContext 计算过的包含有 preifx/locale/pure 的对象，一般用于通过静态方法生成脱离组件树的组件
     * @param props - 组件的 props
     * @param displayName - 组件的 displayName
     * @returns 新的 context props
     */
    static getContextProps: <P extends ComponentCommonProps>(
        props: P,
        displayName?: string
    ) => import('./types').ParsedContextConfig;
    static clearCache: () => void;
    static getContext: () => {
        prefix: string | undefined;
        locale: Partial<import('..').Locale> | undefined;
        defaultPropsConfig: import('./types').DefaultPropsConfig | undefined;
        pure: boolean | undefined;
        rtl: boolean | undefined;
        warning: boolean | undefined;
        device: import('./types').DeviceType | undefined;
        popupContainer: import('./types').PopupContainerType | undefined;
        errorBoundary: import('./types').ErrorBoundaryType | undefined;
    };
    constructor(props: ConfigProviderProps, context: ContextState);
    getChildContext(): {
        nextPrefix: any;
        nextDefaultPropsConfig: any;
        nextLocale: any;
        nextPure: any;
        nextRtl: any;
        nextWarning: any;
        nextDevice: any;
        nextPopupContainer: any;
        nextErrorBoundary: any;
    };
    static getDerivedStateFromProps(
        nextProps: ConfigProviderProps,
        prevState: Pick<ConfigProviderProps, 'locale'>
    ): {
        locale: Partial<import('..').Locale> | undefined;
    } | null;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): ReactNode;
}
export type { ConfigProviderProps, PropsDeprecatedPrinter };
declare const _default: typeof ConfigProvider;
export default _default;
