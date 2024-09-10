import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import type { CardDividerProps } from './types';

class CardDivider extends Component<CardDividerProps> {
    static displayName = 'CardDivider';
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 设置标签类型
         */
        component: PropTypes.elementType,
        /**
         * 分割线是否向内缩进
         */
        inset: PropTypes.bool,
        className: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        component: 'hr',
    };

    render() {
        const { prefix, component, inset, className, ...others } = this.props;
        const Component = component as React.ElementType;
        const dividerClassName = classNames(
            `${prefix}card-divider`,
            {
                [`${prefix}card-divider--inset`]: inset,
            },
            className
        );

        return <Component {...others} className={dividerClassName} />;
    }
}

export default ConfigProvider.config(CardDivider);
