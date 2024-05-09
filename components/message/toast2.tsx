import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ConfigProvider from '../config-provider';
import Animate from '../animate';
import Message from './message';
import { obj, log, guid } from '../util';
import type {
    OpenProps,
    MessageQuickProps,
    MessageWrapperProps,
    MessageWrapperItem,
} from './types';

const config = {
    top: 8,
    maxCount: 0,
    duration: 3000,
};
export type MessageConfig = Partial<typeof config>;

const MessageWrapper = (props: MessageWrapperProps) => {
    const { prefix = 'next-', dataSource = [] } = props;
    const [, forceUpdate] = useState<Record<string, never>>();

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

let messageRootNode: HTMLDivElement | null;
let messageList: MessageWrapperProps['dataSource'] = [];

const createMessage = (props: MessageQuickProps & { key?: string }) => {
    const { key = guid('message-'), ...others } = props;
    if (!messageRootNode) {
        messageRootNode = document.createElement('div');
        document.body.appendChild(messageRootNode);
    }

    const { maxCount, duration } = config;

    const item: MessageWrapperItem = {
        key,
        duration,
        ...others,
    };

    messageList.push(item);

    if (maxCount && messageList.length > maxCount) {
        messageList.shift();
    }

    // eslint-disable-next-line react/no-deprecated
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

                // eslint-disable-next-line react/no-deprecated
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

function close(key?: string) {
    if (key) {
        const index = messageList.findIndex(item => item.key === key);
        messageList.splice(index, 1);
    } else {
        messageList = [];
    }

    if (messageRootNode) {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.render(
            <ConfigProvider {...ConfigProvider.getContext()}>
                <ConfigedMessages dataSource={messageList} />
            </ConfigProvider>,
            messageRootNode
        );
    }
}

function handleConfig(config: OpenProps, type?: MessageQuickProps['type']) {
    let newConfig: MessageQuickProps = {};

    if (typeof config === 'string' || React.isValidElement(config)) {
        newConfig.title = config;
    } else if (obj.typeOf(config) === 'Object') {
        newConfig = { ...config } as MessageQuickProps;
    }

    if (type) {
        newConfig.type = type;
    }

    return newConfig;
}

function open(type?: MessageQuickProps['type']) {
    return (config: OpenProps) => {
        config = handleConfig(config, type);
        return createMessage(config);
    };
}

function destory() {
    if (!messageRootNode) return;
    if (messageRootNode) {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.unmountComponentAtNode(messageRootNode);
        messageRootNode.parentNode!.removeChild(messageRootNode);
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
    config(...args: MessageConfig[]) {
        if (!useState) {
            log.warning('need react version > 16.8.0');
            return;
        }
        return Object.assign(config, ...args);
    },
};
