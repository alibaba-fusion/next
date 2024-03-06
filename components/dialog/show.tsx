import React, {
    Component,
    type JSXElementConstructor,
    forwardRef,
    useImperativeHandle,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Message, { type MessageProps } from '../message';
import zhCN from '../locale/zh-cn';
import dialog from './dialog';
import Dialog2Ins from './dialog-v2';
import type { ShowModalInnerProps, DialogProps } from './types';

const Dialog = ConfigProvider.config(dialog);
const Dialog2 = ConfigProvider.config(
    forwardRef((props, ref) => {
        useImperativeHandle(ref, () => undefined);
        return <Dialog2Ins {...props} />;
    })
);

const noop = () => {};
const MESSAGE_TYPE: Record<string, MessageProps['type']> = {
    alert: 'warning', // deprecated in 2.x
    confirm: 'help',
    success: 'success',
    error: 'error',
    warning: 'warning',
    notice: 'notice',
    help: 'help',
};

type ModalInnerProps = ShowModalInnerProps & { type?: keyof typeof MESSAGE_TYPE };

export const ModalInner = function ({
    type,
    messageProps = {},
    title,
    rtl,
    prefix = 'next-',
    content,
}: ModalInnerProps) {
    return (
        <Message
            size="large"
            shape="addon"
            type={MESSAGE_TYPE[type!]}
            {...messageProps}
            title={title}
            rtl={rtl}
            className={cx(`${prefix}dialog-message`, messageProps.className)}
        >
            {content}
        </Message>
    );
};

interface ModalState {
    visible?: boolean;
    loading?: boolean;
    okLoading?: boolean;
    cancelLoading?: boolean;
}

interface ModelProps extends DialogProps, Omit<ShowModalInnerProps, 'locale'> {
    type?: keyof typeof MESSAGE_TYPE;
    needWrapper?: boolean;
}

class Modal extends Component<ModelProps, ModalState> {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        type: PropTypes.oneOf([
            'alert',
            'confirm',
            'success',
            'error',
            'notice',
            'warning',
            'help',
        ]),
        title: PropTypes.node,
        content: PropTypes.node,
        messageProps: PropTypes.object,
        footerActions: PropTypes.array,
        /**
         * Callback function triggered when Ok button is clicked
         * @param event - click event object
         * @returns Optionally handles a Promise return object
         */
        onOk: PropTypes.func,
        /**
         * Callback function triggered when Cancel button is clicked
         * @param event - click event object
         * @returns Optionally handles a Promise return object
         */
        onCancel: PropTypes.func,
        /**
         * Callback function triggered when Close button is clicked
         * @param event - click event object
         * @returns Optionally handles a Promise return object
         */
        onClose: PropTypes.func,
        okProps: PropTypes.object,
        cancelProps: PropTypes.object,
        locale: PropTypes.object,
        needWrapper: PropTypes.bool,
        className: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        messageProps: {},
        onOk: noop,
        onCancel: noop,
        onClose: noop,
        okProps: {},
        cancelProps: {},
        locale: zhCN.Dialog,
        needWrapper: true,
    };

    state: ModalState = {
        visible: true,
        okLoading: false,
        cancelLoading: false,
    };

    close = () => {
        this.setState({
            visible: false,
        });
    };

    okLoading = (loading: boolean) => {
        this.setState({
            okLoading: loading,
        });
    };
    cancelLoading = (loading: boolean) => {
        this.setState({
            cancelLoading: loading,
        });
    };

    wrapper(
        fn: (...args: unknown[]) => unknown,
        callback: () => void,
        changeLoading: (n: boolean) => void
    ) {
        return (...args: unknown[]) => {
            const res = fn(...args);
            if (res && (res as Promise<unknown>).then) {
                changeLoading(true);

                (res as Promise<unknown>)
                    .then(result => {
                        changeLoading(false);

                        if (result !== false) {
                            return callback();
                        }
                    })
                    .catch(e => {
                        changeLoading(false);
                        throw e;
                    });
            } else if (res !== false) {
                return callback();
            }
        };
    }

    render() {
        const {
            prefix,
            type,
            title,
            content,
            messageProps,
            footerActions,
            onOk,
            onCancel,
            onClose,
            okProps,
            cancelProps,
            needWrapper,
            rtl,
            className,
            v2,
            width = 420,
            ...others
        } = this.props;
        const newTitle = needWrapper && type ? null : title;

        const newContent =
            needWrapper && type ? (
                <ModalInner
                    type={type}
                    messageProps={messageProps}
                    title={title}
                    rtl={rtl}
                    prefix={prefix}
                    content={content}
                />
            ) : (
                content
            );

        const newFooterActions =
            footerActions ||
            (type === 'confirm'
                ? ['ok', 'cancel']
                : ['alert', 'success', 'error', 'notice', 'warning', 'help'].indexOf(type!) > -1
                  ? ['ok']
                  : undefined);
        const newOnOk = this.wrapper(onOk!, this.close, this.okLoading);
        const newOnCancel = this.wrapper(onCancel!, this.close, this.cancelLoading);
        const newOnClose = this.wrapper(onClose!, this.close, this.cancelLoading);

        const { visible, okLoading, cancelLoading } = this.state;
        // 不能直接改，这里修改相当于改了全局 okProps
        // okProps.loading = loading;

        const newOkProps = { ...okProps };
        if (!('loading' in okProps!)) {
            newOkProps.loading = okLoading;
        }
        const newCancelProps = { ...cancelProps };
        if (!('loading' in cancelProps!)) {
            newCancelProps.loading = cancelLoading;
        }

        const classNames = cx(`${prefix}dialog-quick`, className);

        const Tag = v2 ? Dialog2 : Dialog;

        return (
            <Tag
                prefix={prefix}
                role="alertdialog"
                {...others}
                visible={visible}
                title={newTitle}
                rtl={rtl}
                footerActions={newFooterActions}
                onOk={this.state.loading ? noop : newOnOk}
                onCancel={newOnCancel}
                onClose={newOnClose}
                okProps={newOkProps}
                cancelProps={newCancelProps}
                className={classNames}
                width={v2 ? width : undefined}
            >
                {newContent}
            </Tag>
        );
    }
}

const ConfigModal = ConfigProvider.config(Modal, { componentName: 'Dialog' });

export interface Config extends ModelProps {
    afterClose?: () => void;
    contextConfig?: Partial<ReturnType<typeof ConfigProvider.getContext>>;
}

/**
 * 创建对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
export const show = (config: Config = {}) => {
    const container = document.createElement('div');
    const unmount = () => {
        if (config.afterClose) {
            config.afterClose();
        }
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.unmountComponentAtNode(container);
        container.parentNode?.removeChild(container);
    };

    document.body.appendChild(container);
    let newContext = config.contextConfig;
    if (!newContext) newContext = ConfigProvider.getContext();

    let instance: InstanceType<typeof ConfigModal> | null,
        myRef: InstanceType<typeof ConfigModal> | null;

    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(
        <ConfigProvider {...newContext}>
            <ConfigModal
                {...config}
                afterClose={unmount}
                ref={ref => {
                    myRef = ref;
                }}
            />
        </ConfigProvider>,
        container,
        function () {
            instance = myRef;
        }
    );
    return {
        hide: () => {
            const inc = instance && instance.getInstance();
            inc && inc.close();
        },
    };
};

const methodFactory =
    (type: Config['type']) =>
    (config: Config = {}) => {
        config.type = type;
        return show(config);
    };

/**
 * 创建警示对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
export const alert = methodFactory('alert');

export const success = methodFactory('success');
export const error = methodFactory('error');
export const notice = methodFactory('notice');
export const warning = methodFactory('warning');
export const help = methodFactory('help');

/**
 * 创建确认对话框
 * @param config - 配置项
 * @returns 包含有 hide 方法，可用来关闭对话框
 */
export const confirm = methodFactory('confirm');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = any;

export interface ContextDialog {
    show: (config?: Config) => { hide: () => void };
    alert: (config?: Config) => { hide: () => void };
    confirm: (config?: Config) => { hide: () => void };
    success: (config?: Config) => { hide: () => void };
    error: (config?: Config) => { hide: () => void };
    warning: (config?: Config) => { hide: () => void };
    notice: (config?: Config) => { hide: () => void };
    help: (config?: Config) => { hide: () => void };
}

export interface WithContextDialogProps {
    contextDialog: ContextDialog;
}

export const withContext = <P extends WithContextDialogProps, C>(
    WrappedComponent: JSXElementConstructor<P> & C
) => {
    type Props = React.JSX.LibraryManagedAttributes<C, Omit<P, 'contextDialog'>>;
    const HOC = (props: Props) => {
        return (
            <ConfigProvider.Consumer>
                {contextConfig => (
                    <WrappedComponent
                        // why AnyProps? see: https://react-typescript-cheatsheet.netlify.app/docs/hoc/react_hoc_docs
                        {...(props as AnyProps)}
                        contextDialog={
                            {
                                show: (config = {}) => show({ ...config, contextConfig }),
                                alert: (config = {}) => alert({ ...config, contextConfig }),
                                confirm: (config = {}) => confirm({ ...config, contextConfig }),
                                success: (config = {}) => success({ ...config, contextConfig }),
                                error: (config = {}) => error({ ...config, contextConfig }),
                                warning: (config = {}) => warning({ ...config, contextConfig }),
                                notice: (config = {}) => notice({ ...config, contextConfig }),
                                help: (config = {}) => help({ ...config, contextConfig }),
                            } as ContextDialog
                        }
                    />
                )}
            </ConfigProvider.Consumer>
        );
    };
    return HOC;
};
