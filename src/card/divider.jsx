import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';

/**
 * Card.Divider
 */
class CardDivider extends PureComponent {
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
        component: 'hr',
    };

    render() {
        const {
            prefix,
            component: Component,
            className,
            ...others
        } = this.props;
        return (
            <Component
                {...others}
                className={classNames(`${prefix}card-divider`, className)}
            />
        );
    }
}

export default ConfigProvider.config(CardDivider);
