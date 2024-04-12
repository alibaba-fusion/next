import React, { type JSXElementConstructor } from 'react';
import type { ShowModalInnerProps, ShowConfig } from './types';
type ModalInnerProps = ShowModalInnerProps & {
    type?: string;
};
export declare const ModalInner: ({ type, messageProps, title, rtl, prefix, content, }: ModalInnerProps) => React.JSX.Element;
/**
 * 创建对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
export declare const show: (config?: ShowConfig) => {
    hide: () => void;
};
/**
 * 创建警示对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
export declare const alert: (config?: ShowConfig) => {
    hide: () => void;
};
export declare const success: (config?: ShowConfig) => {
    hide: () => void;
};
export declare const error: (config?: ShowConfig) => {
    hide: () => void;
};
export declare const notice: (config?: ShowConfig) => {
    hide: () => void;
};
export declare const warning: (config?: ShowConfig) => {
    hide: () => void;
};
export declare const help: (config?: ShowConfig) => {
    hide: () => void;
};
/**
 * 创建确认对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
export declare const confirm: (config?: ShowConfig) => {
    hide: () => void;
};
export interface ContextDialog {
    show: (config?: ShowConfig) => {
        hide: () => void;
    };
    alert: (config?: ShowConfig) => {
        hide: () => void;
    };
    confirm: (config?: ShowConfig) => {
        hide: () => void;
    };
    success: (config?: ShowConfig) => {
        hide: () => void;
    };
    error: (config?: ShowConfig) => {
        hide: () => void;
    };
    warning: (config?: ShowConfig) => {
        hide: () => void;
    };
    notice: (config?: ShowConfig) => {
        hide: () => void;
    };
    help: (config?: ShowConfig) => {
        hide: () => void;
    };
}
export interface WithContextDialogProps {
    contextDialog: ContextDialog;
}
export declare const withContext: <P extends WithContextDialogProps, C>(WrappedComponent: React.JSXElementConstructor<P> & C) => (props: JSX.LibraryManagedAttributes<C, Omit<P, "contextDialog">>) => React.JSX.Element;
export {};
