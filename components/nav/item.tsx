import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../menu';
import Icon from '../icon';
import Balloon from '../balloon';
import { ItemProps } from './types';

const { Tooltip } = Balloon;

/**
 * Nav.Item
 * @remarks 继承自 `Menu.Item` 的能力请查看 `Menu.Item` 文档
 */
class Item extends Component<ItemProps> {
    static menuChildType = 'item';

    static propTypes = {
        /**
         * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
         */
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        /**
         * 导航内容
         */
        children: PropTypes.node,
        parentMode: PropTypes.oneOf(['inline', 'popup']),
    };

    static contextTypes = {
        prefix: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        iconTextOnly: PropTypes.bool,
        hasTooltip: PropTypes.bool,
    };

    render() {
        const { prefix, iconOnly, iconOnlyWidth, hasTooltip, iconTextOnly } = this.context;
        const { icon, children, className, ...others } = this.props;
        const iconEl =
            typeof icon === 'string' ? <Icon className={`${prefix}nav-icon`} type={icon} /> : icon;

        let title;

        if (typeof children === 'string') {
            title = children;
        }

        const showChildren = !iconOnly || (iconOnly && !iconOnlyWidth) || iconTextOnly;
        const cls = classNames({
            [`${prefix}nav-with-title`]: iconOnly && iconTextOnly,
            [className as string]: !!className,
        });

        const newChildren = showChildren ? (
            iconTextOnly ? (
                <span className={`${prefix}nav-text`}>{children}</span>
            ) : (
                children
            )
        ) : null;

        const item = (
            <Menu.Item title={title} className={cls} {...others}>
                {iconEl}
                {newChildren}
            </Menu.Item>
        );

        if (iconOnly && hasTooltip && others.parentMode !== 'popup') {
            return (
                <Tooltip align="r" trigger={item}>
                    {children}
                </Tooltip>
            );
        }

        return item;
    }
}

export default Item;
