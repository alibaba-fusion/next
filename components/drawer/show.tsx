import React, { type JSXElementConstructor } from 'react';
import ReactDOM from 'react-dom';
import ConfigProvider from '../config-provider';
import Drawer from './drawer-v2';
import type { DrawerProps } from './types';
import type { AnyProps } from '../config-provider/config';
import type { ConsumerState } from '../config-provider/consumer';

interface ModalState {
    visible?: boolean;
    loading?: boolean;
}

class Modal extends React.Component<DrawerProps, ModalState> {
    state = {
        visible: true,
        loading: false,
    };

    close = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { visible, content, ...others } = this.props;
        return (
            <Drawer {...others} visible={this.state.visible}>
                {content}
            </Drawer>
        );
    }
}

const ConfigModal = ConfigProvider.config(Modal, { componentName: 'Drawer' });

export type Config = DrawerProps & {
    afterClose?: () => void;
    onClose?: () => void;
    contextConfig?: ConsumerState;
};

/**
 * 创建对话框。
 *
 * @remarks
 * 该函数导出的名字是 `show`。
 *
 * @param config - 配置项。
 * @returns 返回一个对象，该对象包含有 `hide` 方法，可用来关闭对话框。
 */
export const show = (config: Config = {}) => {
    const container: HTMLDivElement = document.createElement('div');

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

    const handleClose = () => {
        const inc = instance && instance.getInstance();
        inc && inc.close();
        if (config.onClose) {
            config.onClose();
        }
    };

    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(
        <ConfigProvider {...newContext}>
            <ConfigModal
                {...config}
                onClose={handleClose}
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
        hide: handleClose,
    };
};

export interface ContextDialog {
    show: (config?: Config) => { hide: () => void };
}

export interface WithContextDrawerProps {
    contextDialog: ContextDialog;
}

export const withContext = <P extends WithContextDrawerProps, C>(
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
                        contextDialog={{
                            show: (config = {}) => show({ ...config, contextConfig }),
                        }}
                    />
                )}
            </ConfigProvider.Consumer>
        );
    };
    return HOC;
};
