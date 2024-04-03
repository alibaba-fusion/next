import React, { type JSXElementConstructor } from 'react';
import type { DrawerV2Props } from './types';
import type { ConsumerState } from '../config-provider/consumer';
export type Config = DrawerV2Props & {
    afterClose?: () => void;
    onClose?: () => void;
    contextConfig?: ConsumerState;
};
/**
 * 创建对话框。
 *
 * @remarks
 * 该函数导出的名字是 `show`。
 *
 * @param config - 配置项。
 * @returns 返回一个对象，该对象包含有 `hide` 方法，可用来关闭对话框。
 */
export declare const show: (config?: Config) => {
    hide: () => void;
};
export interface ContextDialog {
    show: (config?: Config) => {
        hide: () => void;
    };
}
export interface WithContextDrawerProps {
    contextDialog: ContextDialog;
}
export declare const withContext: <P extends WithContextDrawerProps, C>(
    WrappedComponent: React.JSXElementConstructor<P> & C
) => (props: JSX.LibraryManagedAttributes<C, Omit<P, 'contextDialog'>>) => React.JSX.Element;
