import React from 'react';

import ConfigProvider from '../config-provider';
import Drawer1 from './drawer';
import Drawer2 from './drawer-v2';

import Inner from './inner';

import { show, withContext } from './show';
import type { DrawerV2Props, DrawerV1Props } from './types';

export interface QuickShowRet {
    hide: () => void;
}

export type DrawerProps = DrawerV2Props | DrawerV1Props;

class Drawer extends React.Component<DrawerProps> {
    static Inner: typeof Inner;
    static show: (config?: DrawerProps) => QuickShowRet;
    static withContext: <P extends object>(
        WrappedComponent: React.ComponentType<P>
    ) => React.ComponentType<P>;

    render() {
        const { v2, ...others } = this.props;
        if (v2) {
            return <Drawer2 {...others} />;
        } else {
            return <Drawer1 {...others} />;
        }
    }
}

Drawer.Inner = Inner;
Drawer.show = show;
Drawer.withContext = withContext;

export default ConfigProvider.config(Drawer);
