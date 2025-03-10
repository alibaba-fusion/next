import React from 'react';
import Inner from './inner';
import type { DialogProps, InnerProps, ShowConfig, ShowConfigV1, ShowConfigV2 } from './types';
export type { DialogProps, ShowConfig, InnerProps, ShowConfigV1, ShowConfigV2 };
declare class Dialog extends React.Component<DialogProps> {
    static displayName: string;
    static Inner: typeof Inner;
    static withContext: <P extends import("./show").WithContextDialogProps, C>(WrappedComponent: React.JSXElementConstructor<P> & C) => (props: JSX.LibraryManagedAttributes<C, Omit<P, "contextDialog">>) => React.JSX.Element;
    static show: (config: ShowConfig) => {
        hide: () => void;
    };
    static alert: (config: ShowConfig) => {
        hide: () => void;
    };
    static confirm: (config: ShowConfig) => {
        hide: () => void;
    };
    static success: (config: ShowConfig) => {
        hide: () => void;
    };
    static error: (config: ShowConfig) => {
        hide: () => void;
    };
    static notice: (config: ShowConfig) => {
        hide: () => void;
    };
    static warning: (config: ShowConfig) => {
        hide: () => void;
    };
    static help: (config: ShowConfig) => {
        hide: () => void;
    };
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<DialogProps & import("../config-provider/types").ComponentCommonProps, Dialog, {}> & {
    help: (config: ShowConfig) => {
        hide: () => void;
    };
    show: (config: ShowConfig) => {
        hide: () => void;
    };
    warning: (config: ShowConfig) => {
        hide: () => void;
    };
    error: (config: ShowConfig) => {
        hide: () => void;
    };
    alert: (config: ShowConfig) => {
        hide: () => void;
    };
    confirm: (config: ShowConfig) => {
        hide: () => void;
    };
    Inner: typeof Inner;
    success: (config: ShowConfig) => {
        hide: () => void;
    };
    notice: (config: ShowConfig) => {
        hide: () => void;
    };
    withContext: <P extends import("./show").WithContextDialogProps, C>(WrappedComponent: React.JSXElementConstructor<P> & C) => (props: JSX.LibraryManagedAttributes<C, Omit<P, "contextDialog">>) => React.JSX.Element;
};
export default _default;
