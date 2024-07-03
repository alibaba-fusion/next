import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import type { ItemProps } from './types';

/**
 * Breadcrumb.Item
 */
class Item extends Component<ItemProps> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        link: PropTypes.string,
        activated: PropTypes.bool,
        separator: PropTypes.node,
        className: PropTypes.any,
        children: PropTypes.node,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        prefix: 'next-',
    };

    static _typeMark = 'breadcrumb_item';

    // stateless separator component
    static Separator({ prefix, children }: { prefix?: string; children: React.ReactNode }) {
        return <span className={`${prefix}breadcrumb-separator`}>{children}</span>;
    }

    render() {
        const { prefix, rtl, className, children, link, activated, separator, onClick, ...others } =
            this.props;
        const clazz = classNames(`${prefix}breadcrumb-text`, className, {
            activated,
        });

        return (
            <li
                dir={rtl ? 'rtl' : undefined}
                className={`${prefix}breadcrumb-item`}
                onClick={onClick}
            >
                {link ? (
                    <a href={link} className={clazz} {...others}>
                        {children}
                    </a>
                ) : (
                    <span className={clazz} {...others}>
                        {children}
                    </span>
                )}
                {activated ? null : Item.Separator({ prefix, children: separator })}
            </li>
        );
    }
}

export default ConfigProvider.config(Item);
