import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Drawer from './drawer-v2';

class Modal extends React.Component {
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

/**
 * 创建对话框
 * @exportName show
 * @param {Object} config 配置项
 * @returns {Object} 包含有 hide 方法，可用来关闭对话框
 */
export const show = (config = {}) => {
    const container = document.createElement('div');
    const unmount = () => {
        if (config.afterClose) {
            config.afterClose();
        }
        ReactDOM.unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
    };

    document.body.appendChild(container);
    let newContext = config.contextConfig;
    if (!newContext) newContext = ConfigProvider.getContext();

    let instance, myRef;

    const handleClose = () => {
        const inc = instance && instance.getInstance();
        inc && inc.close();
        if (config.onClose) {
            config.onClose();
        }
    };

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

export const withContext = WrappedComponent => {
    const HOC = props => {
        return (
            <ConfigProvider.Consumer>
                {contextConfig => (
                    <WrappedComponent
                        {...props}
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
