import React, { LegacyRef } from 'react';
import ConfigProvider from '../config-provider';

import Overlay1 from './overlay';
import Overlay2 from './overlay-v2';

import Gateway from './gateway';
import Position from './position';

import Popup1 from './popup';
import Popup2 from './popup-v2';
import { log } from '../util';
import type { OverlayProps, PopupProps } from './types';

class Overlay extends React.Component<OverlayProps> {
    overlayRef: HTMLElement | { getContent: () => void; getContentNode: () => void } | null;
    static Gateway: typeof Gateway;
    static Position: typeof Position;
    static Popup: {
        new (
            props: PopupProps &
                import('/Users/eamon/fusion-contributing/next/components/config-provider/types').ComponentCommonProps,
            context?: unknown
        ): import('/Users/eamon/fusion-contributing/next/components/config-provider/types').ConfiguredComponent<
            PopupProps &
                import('/Users/eamon/fusion-contributing/next/components/config-provider/types').ComponentCommonProps,
            Popup
        >;
        prototype: import('/Users/eamon/fusion-contributing/next/components/config-provider/types').ConfiguredComponent<
            PopupProps &
                import('/Users/eamon/fusion-contributing/next/components/config-provider/types').ComponentCommonProps,
            Popup
        >;
        // eslint-disable-next-line
        contextType?: React.Context<any> | undefined;
    } & object;
    constructor(props: OverlayProps) {
        super(props);
        this.overlayRef = null;
        this.saveRef = this.saveRef.bind(this);
    }
    saveRef(ref: Overlay) {
        this.overlayRef = ref;
    }
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */
    getContent() {
        if (this.overlayRef) {
            return (
                this.overlayRef as { getContent: () => void; getContentNode: () => void }
            ).getContent();
        }
        return null;
    }
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */
    getContentNode() {
        if (this.overlayRef) {
            return (
                this.overlayRef as { getContent: () => void; getContentNode: () => void }
            ).getContentNode();
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
            return <Overlay1 {...others} ref={this.saveRef as () => void} />;
        }
    }
}
// eslint-disable-next-line
class Popup extends React.Component<PopupProps> {
    overlay: HTMLDivElement | null;
    constructor(props: PopupProps) {
        super(props);
        this.overlay = null;
        this.saveRef = this.saveRef.bind(this);
    }
    saveRef(ref: Popup) {
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
            return <Popup1 {...others} ref={this.saveRef as () => void} />;
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

export type { OverlayProps };
