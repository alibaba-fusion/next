import React, { type JSXElementConstructor } from 'react';
import type { OpenProps, MessageQuickProps } from './types';
/**
 * 创建提示弹层
 * @param config - 属性对象
 */
declare function show(config: OpenProps): void;
/**
 * 关闭提示弹层
 */
declare function hide(): void;
/**
 * 创建成功提示弹层
 * @param config - 属性对象
 */
declare function success(config: OpenProps): void;
/**
 * 创建警告提示弹层
 * @param config - 属性对象
 */
declare function warning(config: OpenProps): void;
/**
 * 创建错误提示弹层
 * @param config - 属性对象
 */
declare function error(config: OpenProps): void;
/**
 * 创建帮助提示弹层
 * @param config - 属性对象
 */
declare function help(config: OpenProps): void;
/**
 * 创建加载中提示弹层
 * @param config - 属性对象
 */
declare function loading(config: OpenProps): void;
/**
 * 创建通知提示弹层
 * @param config - 属性对象
 */
declare function notice(config: OpenProps): void;
declare const _default: {
    show: typeof show;
    hide: typeof hide;
    success: typeof success;
    warning: typeof warning;
    error: typeof error;
    help: typeof help;
    loading: typeof loading;
    notice: typeof notice;
};
export default _default;
export interface ContextMessage {
    show: (config?: MessageQuickProps) => void;
    hide: () => void;
    confirm: (config?: MessageQuickProps) => void;
    success: (config?: MessageQuickProps) => void;
    warning: (config?: MessageQuickProps) => void;
    error: (config?: MessageQuickProps) => void;
    help: (config?: MessageQuickProps) => void;
    loading: (config?: MessageQuickProps) => void;
    notice: (config?: MessageQuickProps) => void;
}
export interface WithContextMessageProps {
    contextMessage: ContextMessage;
}
export declare const withContext: <P extends WithContextMessageProps, C>(
    WrappedComponent: React.JSXElementConstructor<P> & C
) => (props: JSX.LibraryManagedAttributes<C, Omit<P, 'contextMessage'>>) => React.JSX.Element;
