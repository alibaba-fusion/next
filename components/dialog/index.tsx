import React from 'react';
import ConfigProvider from '../config-provider';
import { log } from '../util';
import Dialog1 from './dialog';
import Dialog2 from './dialog-v2';

import Inner from './inner';
import { show, alert, confirm, withContext, success, error, notice, warning, help } from './show';
import type { DialogProps, InnerProps, ShowConfig, ShowConfigV1, ShowConfigV2 } from './types';

export type { DialogProps, ShowConfig, InnerProps, ShowConfigV1, ShowConfigV2 };

function processProps(props: Record<string, unknown>, deprecated: typeof log.deprecated) {
    if ('closable' in props) {
        deprecated('closable', 'closeable', 'Dialog');
        const { closable, ...others } = props;
        props = { closeable: closable, ...others };
    }

    if ('v2' in props) {
        const nProps = { ...props };
        if ('align' in props) {
            delete nProps.align;
            deprecated('align', 'centered', '<Dialog v2 />');
        }
        if ('shouldUpdatePosition' in props) {
            delete nProps.shouldUpdatePosition;
            log.warning(`Warning: [ shouldUpdatePosition ] is deprecated at [ <Dialog v2 /> ]`);
        }
        if ('minMargin' in props) {
            // delete nProps.minMargin;
            deprecated('minMargin', 'top/bottom', '<Dialog v2 />');
        }
        if ('isFullScreen' in props) {
            props.overFlowScroll = !props.isFullScreen;
            delete nProps.isFullScreen;
            deprecated('isFullScreen', 'overFlowScroll', '<Dialog v2 />');
        }

        return nProps;
    }

    const overlayPropNames = [
        'target',
        'offset',
        'beforeOpen',
        'onOpen',
        'afterOpen',
        'beforePosition',
        'onPosition',
        'cache',
        'safeNode',
        'wrapperClassName',
        'container',
    ];
    overlayPropNames.forEach(name => {
        if (name in props) {
            deprecated(name, `overlayProps.${name}`, 'Dialog');
            const { overlayProps, ...others } = props;
            const newOverlayProps = {
                [name]: props[name],
                ...(overlayProps || {}),
            };
            delete others[name];
            props = { overlayProps: newOverlayProps, ...others };
        }
    });

    return props;
}

class Dialog extends React.Component<DialogProps> {
    static Inner = Inner;
    static withContext = withContext;
    static show = (config: ShowConfig) => {
        const { warning } = ConfigProvider.getContextProps(config, 'Dialog');
        if (warning !== false) {
            config = processProps(config as Record<string, unknown>, log.deprecated);
        }
        return show(config);
    };
    static alert = (config: ShowConfig) => {
        const { warning } = ConfigProvider.getContextProps(config, 'Dialog');
        if (warning !== false) {
            config = processProps(config as Record<string, unknown>, log.deprecated);
        }
        return alert(config);
    };
    static confirm = (config: ShowConfig) => {
        const { warning } = ConfigProvider.getContextProps(config, 'Dialog');
        if (warning !== false) {
            config = processProps(config as Record<string, unknown>, log.deprecated);
        }
        return confirm(config);
    };
    static success = (config: ShowConfig) => success(config);
    static error = (config: ShowConfig) => error(config);
    static notice = (config: ShowConfig) => notice(config);
    static warning = (config: ShowConfig) => warning(config);
    static help = (config: ShowConfig) => help(config);

    render() {
        const { v2, ...others } = this.props;
        if (v2) {
            return <Dialog2 {...others} />;
        } else {
            return <Dialog1 {...others} />;
        }
    }
}

export default ConfigProvider.config(Dialog, {
    transform: (props, deprecated) => {
        return processProps(props, deprecated);
    },
});
