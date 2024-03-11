import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ConfigProvider from '../config-provider';
import Animate from '../animate';
import Message from './message';
import { obj, log, guid } from '../util';

const config = {
    top: 8,
    maxCount: 0,
    duration: 3000,
};

const MessageWrapper = props => {
    // eslint-disable-next-line
    const { prefix = 'next-', dataSource = [] } = props;
    const [, forceUpdate] = useState();

    dataSource.forEach(i => {
        if (!i.timer) {
            i.timer = setTimeout(() => {
                const idx = dataSource.indexOf(i);
                if (idx > -1) {
                    const item = dataSource[idx];
                    typeof item.onClose === 'function' && item.onClose();
                    dataSource.splice(idx, 1);
                    forceUpdate({});
                }
            }, i.duration);
        }
    });

    return (
        <div className={`${prefix}message-wrapper-v2`} style={{ top: config.top }}>
            <Animate
                animationAppear
                animation={{
                    appear: 'pulse',
                    enter: 'pulse',
                    leave: `${prefix}message-fade-leave`,
                }}
                singleMode={false}
            >
                {dataSource.map(i => {
                    const { key, className, type, title, content, style, ...others } = i;
                    return (
                        <div className={`${prefix}message-list`} key={key}>
                            <Message
                                {...others}
                                className={className}
                                prefix={prefix}
                                visible
                                type={type}
                                shape="toast"
                                title={title}
                                style={style}
                            >
                                {content}
                            </Message>
                        </div>
                    );
                })}
            </Animate>
        </div>
    );
};

const ConfigedMessages = ConfigProvider.config(MessageWrapper);

let messageRootNode;
let messageList = [];

const createMessage = props => {
    const { key = guid('message-'), ...others } = props;
    if (!messageRootNode) {
        messageRootNode = document.createElement('div');
        document.body.appendChild(messageRootNode);
    }

    const { maxCount, duration } = config;

    const item = {
        key,
        duration,
        ...others,
    };

    messageList.push(item);

    if (maxCount && messageList.length > maxCount) {
        messageList.shift();
    }

    ReactDOM.render(
        <ConfigProvider {...ConfigProvider.getContext()}>
            <ConfigedMessages dataSource={messageList} />
        </ConfigProvider>,
        messageRootNode
    );

    return {
        key,
        close: () => {
            if (item.timer) {
                clearTimeout(item.timer);
            }
            const idx = messageList.indexOf(item);
            if (idx > -1) {
                typeof item.onClose === 'function' && item.onClose();
                messageList.splice(idx, 1);

                ReactDOM.render(
                    <ConfigProvider {...ConfigProvider.getContext()}>
                        <ConfigedMessages dataSource={messageList} />
                    </ConfigProvider>,
                    messageRootNode
                );
            }
        },
    };
};

function close(key) {
    if (key) {
        const index = messageList.findIndex(item => item.key === key);
        messageList.splice(index, 1);
    } else {
        messageList = [];
    }

    if (messageRootNode) {
        ReactDOM.render(
            <ConfigProvider {...ConfigProvider.getContext()}>
                <ConfigedMessages dataSource={messageList} />
            </ConfigProvider>,
            messageRootNode
        );
    }
}

function handleConfig(config, type) {
    let newConfig = {};

    if (typeof config === 'string' || React.isValidElement(config)) {
        newConfig.title = config;
    } else if (obj.typeOf(config) === 'Object') {
        newConfig = { ...config };
    }

    if (type) {
        newConfig.type = type;
    }

    return newConfig;
}

function open(type) {
    return config => {
        config = handleConfig(config, type);
        return createMessage(config);
    };
}

function destory() {
    if (!messageRootNode) return;
    if (messageRootNode) {
        ReactDOM.unmountComponentAtNode(messageRootNode);
        messageRootNode.parentNode.removeChild(messageRootNode);
        messageRootNode = null;
    }
}

export default {
    open: open(),
    success: open('success'),
    warning: open('warning'),
    error: open('error'),
    help: open('help'),
    loading: open('loading'),
    notice: open('notice'),
    close,
    destory,
    config(...args) {
        if (!useState) {
            log.warning('need react version > 16.8.0');
            return;
        }
        return Object.assign(config, ...args);
    },
};
