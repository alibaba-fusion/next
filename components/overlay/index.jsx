import React from 'react';
import ConfigProvider from '../config-provider';

import Overlay1 from './overlay';
import Overlay2 from './overlay-v2';

import Gateway from './gateway';
import Position from './position';

import Popup1 from './popup';
import Popup2 from './popup-v2';
import { log } from '../util';

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.overlayRef = null;
        this.saveRef = this.saveRef.bind(this);
    }
    saveRef(ref) {
        this.overlayRef = ref;
    }
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */
    getContent() {
        if (this.overlayRef) {
            return this.overlayRef.getContent();
        }
        return null;
    }
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */
    getContentNode() {
        if (this.overlayRef) {
            return this.overlayRef.getContentNode();
        }
        return null;
    }
    render() {
        const { v2, ...others } = this.props;
        if (v2) {
            if ('needAdjust' in others) {
                log.deprecated('needAdjust', 'autoAdjust', 'Overlay v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }
            return <Overlay2 {...others} />;
        } else {
            return <Overlay1 {...others} ref={this.saveRef} />;
        }
    }
}
// eslint-disable-next-line
class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.overlay = null;
        this.saveRef = this.saveRef.bind(this);
    }
    saveRef(ref) {
        if (ref) {
            this.overlay = ref.overlay;
        }
    }
    render() {
        const { v2, ...others } = this.props;
        if (v2) {
            if ('needAdjust' in others) {
                log.deprecated('needAdjust', 'needAdjust', 'Popup v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }

            if ('shouldUpdatePosition' in others) {
                delete others.shouldUpdatePosition;
            }

            return <Popup2 {...others} />;
        } else {
            return <Popup1 {...others} ref={this.saveRef} />;
        }
    }
}

Overlay.Gateway = Gateway;
Overlay.Position = Position;
Overlay.Popup = ConfigProvider.config(Popup, {
    exportNames: ['overlay'],
});

export default ConfigProvider.config(Overlay, {
    exportNames: ['getContent', 'getContentNode'],
});
