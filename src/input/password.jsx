import React from 'react';
import PropTypes from 'prop-types';

import ConfigProvider from '../config-provider';
import Input from './input';
import Icon from '../icon/index';

export default class Password extends Input {
    state = {
        hint: 'eye',
        htmlType: 'password',
    };

    static propTypes = {
        ...Input.propTypes,
        showToggle: PropTypes.bool,
    };
    static defaultProps = {
        ...Input.defaultProps,
        showToggle: true,
    };

    toggleEye = () => {
        const eyeClose = this.state.hint === 'eye-close';

        this.setState({
            hint: eyeClose ? 'eye' : 'eye-close',
            htmlType: eyeClose || !this.props.showToggle ? 'password' : 'text',
        });
    };

    render() {
        const { showToggle, ...others } = this.props;
        const { hint, htmlType } = this.state;

        const extra = showToggle ? (
            <Icon type={hint} onClick={this.toggleEye} />
        ) : null;

        return <Input {...others} extra={extra} htmlType={htmlType} />;
    }
}
