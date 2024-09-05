import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import type { CardContentProps } from './types';

class CardContent extends Component<CardContentProps> {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 设置标签类型
         */
        component: PropTypes.elementType,
        className: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        component: 'div',
    };

    render() {
        const { prefix, className, component, ...others } = this.props;
        const Component = component as React.ElementType;
        return (
            <Component
                {...others}
                className={classNames(`${prefix}card-content-container`, className)}
            />
        );
    }
}

export default ConfigProvider.config(CardContent);
