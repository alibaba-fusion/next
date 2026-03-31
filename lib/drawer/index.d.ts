import React from 'react';
import Inner from './inner';
import type { DrawerV2Props, DrawerV1Props } from './types';
export interface QuickShowRet {
    hide: () => void;
}
export type DrawerProps = DrawerV2Props | DrawerV1Props;
declare class Drawer extends React.Component<DrawerProps> {
    static Inner: typeof Inner;
    static show: (config?: DrawerProps) => QuickShowRet;
    static withContext: <P extends object>(WrappedComponent: React.ComponentType<P>) => React.ComponentType<P>;
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<DrawerProps & import("../config-provider/types").ComponentCommonProps, Drawer, {}> & {
    show: (config?: DrawerProps | undefined) => QuickShowRet;
    Inner: typeof Inner;
    withContext: <P extends object>(WrappedComponent: React.ComponentType<P>) => React.ComponentType<P>;
};
export default _default;
