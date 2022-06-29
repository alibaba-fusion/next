import React from 'react';

import ConfigProvider from '../config-provider';
import Drawer1 from './drawer';
import Drawer2 from './drawer-v2';

import Inner from './inner';

import { show, withContext } from './show';

class Drawer extends React.Component {
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
