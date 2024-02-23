import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';
import Animate from '../animate';
import Message from '../message';
import uuid from '../util/guid';
import config from './config';

import type { NotificationConfig, NotificationOptions } from './types';

const getAnimation = (placement: string) => {
    switch (placement) {
        case 'tl':
        case 'bl':
            return 'slideInLeft';
        case 'tr':
        case 'br':
            return 'slideInRight';
        default:
            return undefined;
    }
};

interface NotificationProps {
    prefix?: string;
}

interface NotificationState {
    notifications: NotificationOptions[];
}

let instance: Notification;
let mounting = false;
let waitOpens: NotificationOptions[] = [];
function close(key: string) {
    if (!instance) {
        const index = waitOpens.findIndex(item => item.key === key);
        waitOpens.splice(index, 1);
        return;
    }

    instance.close(key);
}

class Notification extends Component<NotificationProps, NotificationState> {
    static propTypes = {
        prefix: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
    };
    timers: number[];

    constructor(props: NotificationProps) {
        super(props);
        this.state = {
            notifications: [],
        };
        this.timers = [];
    }

    componentWillUnmount() {
        this.timers.forEach(timer => {
            if (!timer) return;
            clearTimeout(timer);
        });
    }

    close = (key: string) => {
        const { notifications } = this.state;
        const index = notifications.findIndex(notification => notification.key === key);

        if (index === -1) return;
        const { onClose, timer } = notifications[index];

        notifications.splice(index, 1);

        const timerIndex = this.timers.findIndex(v => v === timer);

        if (timerIndex !== -1) {
            this.timers.splice(timerIndex, 1);
        }

        if (timer) {
            clearTimeout(timer);
        }

        this.setState({
            notifications,
        });

        if (onClose) {
            onClose();
        }
    };

    open = ({ key, duration, ...others }: NotificationOptions) => {
        const notifications = [...this.state.notifications];
        if (!key) {
            key = uuid('notification-');
        }

        const index = notifications.findIndex(notification => notification.key === key);

        if (index !== -1) {
            notifications[index] = {
                ...notifications[index],
                ...others,
            };
        } else {
            let timer;

            if (duration && duration > 0) {
                timer = setTimeout(() => {
                    this.close(key as string);
                }, duration) as unknown as number;
                this.timers.push(timer);
            }
            notifications.push({
                ...others,
                key,
                timer,
            });
        }

        if (config.maxCount > 0 && config.maxCount < notifications.length) {
            while (notifications.length > config.maxCount) {
                const { key } = notifications[0];
                this.close(key as string);
                notifications.splice(0, 1);
            }
        }

        this.setState({
            notifications,
        });

        return key;
    };

    render() {
        const { prefix } = this.props;
        const { notifications } = this.state;

        return (
            <div
                className={`${prefix}notification`}
                style={{
                    [config.placement.indexOf('b') === 0 ? 'bottom' : 'top']: config.offset[1],
                    [config.placement.indexOf('l') !== -1 ? 'left' : 'right']: config.offset[0],
                }}
            >
                <Animate
                    animationAppear
                    animation={{
                        enter: getAnimation(config.placement),
                        leave: `${prefix}notification-fade-leave`,
                    }}
                    singleMode={false}
                >
                    {notifications.map(
                        ({ key, type, title, content, icon, onClick, style, className }) => (
                            <Message
                                key={key}
                                shape="toast"
                                type={type}
                                title={title}
                                iconType={icon}
                                closeable
                                animation={false}
                                size={(config as NotificationConfig).size}
                                visible
                                style={style}
                                className={className}
                                onClick={onClick}
                                onClose={() => close(key as string)}
                            >
                                {content}
                            </Message>
                        )
                    )}
                </Animate>
            </div>
        );
    }
}

const ConfigedNotification = ConfigProvider.config(Notification, {
    exportNames: ['open', 'close'],
});

function open(options: NotificationOptions = {}) {
    if (!options.title && !options.content) return;

    const duration =
        !options.duration && options.duration !== 0 ? config.duration : options.duration;

    if (!instance) {
        if (!options.key) {
            options.key = uuid('notification-');
        }

        waitOpens.push({
            ...options,
            duration,
        });

        if (!mounting) {
            mounting = true;
            const div = document.createElement('div');
            if (config.getContainer) {
                const root = config.getContainer();
                root.appendChild(div);
            } else {
                document.body.appendChild(div);
            }

            // 类型提示使用 createRoot，考虑到兼容性，暂时不处理
            // eslint-disable-next-line react/no-deprecated
            ReactDOM.render(
                <ConfigProvider {...ConfigProvider.getContext()}>
                    <ConfigedNotification
                        ref={ref => {
                            instance = ref as unknown as Notification;
                        }}
                    />
                </ConfigProvider>,
                div,
                () => {
                    waitOpens.forEach(item => instance.open(item));
                    waitOpens = [];
                    mounting = false;
                }
            );
        }

        return options.key;
    }

    const key = instance.open({
        ...options,
        duration,
    });

    return key;
}

function destroy() {
    if (!instance) return;
    const mountNode = ReactDOM.findDOMNode(instance)?.parentNode;
    if (mountNode) {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.unmountComponentAtNode(mountNode as Element);
        mountNode.parentNode?.removeChild(mountNode);
    }
}

interface objectAny {
    [key: string]: () => string | undefined;
}
const levels: objectAny = {};

['success', 'error', 'warning', 'notice', 'help'].forEach(type => {
    levels[type] = (options = {}) => {
        return open({
            ...options,
            type: type as NotificationOptions['type'],
        });
    };
});

export default {
    config(...args: { placement: unknown }[]) {
        return Object.assign(config, ...args);
    },
    open,
    close,
    destroy,
    ...levels,
};

export type { NotificationConfig, NotificationOptions };
