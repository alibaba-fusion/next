import React, { type JSXElementConstructor } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import ConfigProvider from '../config-provider';
import { guid } from '../util';
import Message from './message';
import type { OpenProps, MessageQuickProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = any;
type ConfigMask = InstanceType<typeof NewMask>;

const { config } = ConfigProvider;

let instance: { destroy: () => void; component: ConfigMask | null } | null;
const timeouts: Record<string, ReturnType<typeof setTimeout>> = {};

class Mask extends React.Component<MessageQuickProps> {
    static contextTypes = {
        prefix: PropTypes.string,
    };

    static propTypes = {
        prefix: PropTypes.string,
        type: PropTypes.string,
        title: PropTypes.node,
        content: PropTypes.node,
        align: PropTypes.string,
        offset: PropTypes.array,
        hasMask: PropTypes.bool,
        afterClose: PropTypes.func,
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        overlayProps: PropTypes.object,
        onClose: PropTypes.func,
        timeoutId: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        align: 'tc tc',
        offset: [0, 30],
        hasMask: false,
        animation: {
            in: 'pulse',
            out: 'zoomOut',
        },
        style: {},
        className: '',
    };

    state = {
        visible: true,
    };

    componentWillUnmount() {
        const { timeoutId } = this.props;

        if (timeoutId! in timeouts) {
            const timeout = timeouts[timeoutId!];
            clearTimeout(timeout);
            delete timeouts[timeoutId!];
        }
    }

    handleClose = (silent = false) => {
        this.setState({
            visible: false,
        });

        if (!silent) {
            this.props.onClose && this.props.onClose();
        }
    };

    render() {
        const {
            prefix,
            type,
            title,
            content,
            align,
            offset,
            hasMask,
            afterClose,
            animation,
            overlayProps,
            timeoutId,
            className,
            style,
            ...others
        } = this.props;
        const { visible } = this.state;
        return (
            <Overlay
                {...overlayProps}
                prefix={prefix}
                animation={animation}
                visible={visible}
                align={align as string}
                offset={offset}
                hasMask={hasMask}
                afterClose={afterClose}
            >
                <Message
                    {...others}
                    prefix={prefix}
                    visible
                    type={type}
                    shape="toast"
                    title={title}
                    style={style}
                    className={`${prefix}message-wrapper ${className}`}
                    onClose={this.handleClose}
                >
                    {content}
                </Message>
            </Overlay>
        );
    }
}

const NewMask = config(Mask);

const create = (props: MessageQuickProps) => {
    const { duration, afterClose, contextConfig, ...others } = props;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const closeChain = function () {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        afterClose && afterClose();
    };

    let newContext = contextConfig;
    if (!newContext) newContext = ConfigProvider.getContext();
    let mask: ConfigMask | null = null,
        myRef: ConfigMask,
        destroyed = false;
    const destroy = () => {
        const inc = mask && mask.getInstance();
        inc && inc.handleClose(true);
        destroyed = true;
    };

    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(
        <ConfigProvider {...newContext}>
            <NewMask
                afterClose={closeChain}
                {...others}
                ref={ref => {
                    myRef = ref!;
                }}
            />
        </ConfigProvider>,
        div,
        function () {
            mask = myRef;
            if (mask && destroyed) {
                destroy();
            }
        }
    );

    return {
        component: mask,
        destroy,
    };
};

function isObject(obj: unknown) {
    return {}.toString.call(obj) === '[object Object]';
}

function handleConfig(config: OpenProps, type?: MessageQuickProps['type']) {
    let newConfig: MessageQuickProps = {};

    if (typeof config === 'string' || React.isValidElement(config)) {
        newConfig.title = config;
    } else if (isObject(config)) {
        newConfig = { ...config } as MessageQuickProps;
    }
    if (typeof newConfig.duration !== 'number') {
        newConfig.duration = 3000;
    }
    if (type) {
        newConfig.type = type;
    }

    return newConfig;
}

function close() {
    if (instance) {
        instance.destroy();
        instance = null;
    }
}

function open(config: OpenProps, type?: MessageQuickProps['type']) {
    close();
    config = handleConfig(config, type);
    const timeoutId = guid();
    instance = create({ ...config, timeoutId });

    if (config.duration! > 0) {
        const timeout = setTimeout(close, config.duration);
        timeouts[timeoutId] = timeout;
    }
}

/**
 * 创建提示弹层
 * @param config - 属性对象
 */
function show(config: OpenProps) {
    open(config);
}

/**
 * 关闭提示弹层
 */
function hide() {
    close();
}

/**
 * 创建成功提示弹层
 * @param config - 属性对象
 */
function success(config: OpenProps) {
    open(config, 'success');
}

/**
 * 创建警告提示弹层
 * @param config - 属性对象
 */
function warning(config: OpenProps) {
    open(config, 'warning');
}

/**
 * 创建错误提示弹层
 * @param config - 属性对象
 */
function error(config: OpenProps) {
    open(config, 'error');
}

/**
 * 创建帮助提示弹层
 * @param config - 属性对象
 */
function help(config: OpenProps) {
    open(config, 'help');
}

/**
 * 创建加载中提示弹层
 * @param config - 属性对象
 */
function loading(config: OpenProps) {
    open(config, 'loading');
}

/**
 * 创建通知提示弹层
 * @param config - 属性对象
 */
function notice(config: OpenProps) {
    open(config, 'notice');
}

export default {
    show,
    hide,
    success,
    warning,
    error,
    help,
    loading,
    notice,
};

export interface ContextMessage {
    show: (config?: MessageQuickProps) => void;
    hide: () => void;
    confirm: (config?: MessageQuickProps) => void;
    success: (config?: MessageQuickProps) => void;
    warning: (config?: MessageQuickProps) => void;
    error: (config?: MessageQuickProps) => void;
    help: (config?: MessageQuickProps) => void;
    loading: (config?: MessageQuickProps) => void;
    notice: (config?: MessageQuickProps) => void;
}
export interface WithContextMessageProps {
    contextMessage: ContextMessage;
}

export const withContext = <P extends WithContextMessageProps, C>(
    WrappedComponent: JSXElementConstructor<P> & C
) => {
    type Props = React.JSX.LibraryManagedAttributes<C, Omit<P, 'contextMessage'>>;
    const HOC = (props: Props) => {
        return (
            <ConfigProvider.Consumer>
                {contextConfig => (
                    <WrappedComponent
                        // why AnyProps? see: https://react-typescript-cheatsheet.netlify.app/docs/hoc/react_hoc_docs
                        {...(props as AnyProps)}
                        contextMessage={{
                            show: (config = {}) => show({ ...config, contextConfig }),
                            hide,
                            success: (config = {}) => success({ ...config, contextConfig }),
                            warning: (config = {}) => warning({ ...config, contextConfig }),
                            error: (config = {}) => error({ ...config, contextConfig }),
                            help: (config = {}) => help({ ...config, contextConfig }),
                            loading: (config = {}) => loading({ ...config, contextConfig }),
                            notice: (config = {}) => notice({ ...config, contextConfig }),
                        }}
                    />
                )}
            </ConfigProvider.Consumer>
        );
    };
    return HOC;
};
