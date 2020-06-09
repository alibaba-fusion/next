/// <reference types="react" />

import * as React from 'react';

export interface ConfigProviderProps {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;

    /**
     * 国际化文案对象，属性为组件的 displayName
     */
    locale?: {};

    /**
     * 是否开启错误捕捉 errorBoundary
     * 如需自定义参数，请传入对象 对象接受参数列表如下：
     *
     * fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示
     * afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为, 比如埋点上传
     */
    errorBoundary?: boolean | {
        afterCatch?: (error: Error, errorInfo: React.ErrorInfo) => void;
        fallbackUI?: (error: Error, errorInfo: React.ErrorInfo) => React.ReactElement<any>;
    };

    /**
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     */
    pure?: boolean;

    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     */
    warning?: boolean;

    /**
     * 是否开启 rtl 模式
     */

    rtl?: boolean;
    /**
     * 设备类型，针对不同的设备类型组件做出对应的响应式变化
     */
    device?: 'tablet' | 'desktop' | 'phone';
    /**
     * 组件树
     */
    children?: React.ReactNode;
    /**
     * 弹层挂载的容器节点
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);
}

export default class ConfigProvider extends React.Component<
    ConfigProviderProps,
    any
> {
    static config(Component: any, options?: {}): any;
    static getContextProps(props: {}, displayName: string): {};
}
