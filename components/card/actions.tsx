import React, { Component, type ElementType } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import type { CardActionsProps } from './types';

class CardActions extends Component<CardActionsProps> {
    static displayName = 'CardActions';
    static propTypes = {
        prefix: PropTypes.string,
        component: PropTypes.elementType,
        className: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        component: 'div',
    };

    render() {
        const { prefix, component, className, ...others } = this.props;
        const Component = component as ElementType;
        return <Component {...others} className={classNames(`${prefix}card-actions`, className)} />;
    }
}

export default ConfigProvider.config(CardActions);
