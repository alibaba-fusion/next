import React from 'react';
import ConfigProvider from '../config-provider';
import { log } from '../util';
import Dialog1 from './dialog';
import Dialog2 from './dialog-v2';

import Inner from './inner';
import { show, alert, confirm, withContext } from './show';

class Dialog extends React.Component {
    render() {
        const { v2, ...others } = this.props;
        if (v2) {
            return <Dialog2 {...others} />;
        } else {
            return <Dialog1 {...others} />;
        }
    }
}

Dialog.Inner = Inner;
Dialog.show = config => {
    const { warning } = ConfigProvider.getContextProps(config, 'Dialog');
    if (warning !== false) {
        config = processProps(config, log.deprecated);
    }
    return show(config);
};
Dialog.alert = config => {
    const { warning } = ConfigProvider.getContextProps(config, 'Dialog');
    if (warning !== false) {
        config = processProps(config, log.deprecated);
    }
    return alert(config);
};
Dialog.confirm = config => {
    const { warning } = ConfigProvider.getContextProps(config, 'Dialog');
    if (warning !== false) {
        config = processProps(config, log.deprecated);
    }
    return confirm(config);
};
Dialog.withContext = withContext;

/* istanbul ignore next */
function processProps(props, deprecated) {
    if ('v2' in props) {
        return props;
    }

    if ('closable' in props) {
        deprecated('closable', 'closeable', 'Dialog');
        const { closable, ...others } = props;
        props = { closeable: closable, ...others };
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

export default ConfigProvider.config(Dialog, {
    transform: (props, deprecated) => {
        return processProps(props, deprecated);
    },
});
