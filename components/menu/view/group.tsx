import React, { Component, cloneElement, type ReactChild } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Item from './item';
import type { ChildPropsInMenu, GroupProps } from '../types';

export default class Group extends Component<GroupProps> {
    static menuChildType = 'group';

    static propTypes = {
        root: PropTypes.object,
        className: PropTypes.string,
        label: PropTypes.node,
        children: PropTypes.node,
        parentMode: PropTypes.oneOf(['inline', 'popup']),
    };

    render() {
        const { root, className, label, children, parentMode, ...others } = this
            .props as ChildPropsInMenu<GroupProps>;
        const { prefix } = root.props;

        const newClassName = cx(
            {
                [`${prefix}menu-group-label`]: true,
            },
            className
        );

        const newChildren = (children as ReactChild[]).map(child => {
            // to fix https://github.com/alibaba-fusion/next/issues/952
            if (typeof child !== 'function' && typeof child !== 'object') {
                return child;
            }
            const { className } = child.props;
            const newChildClassName = cx({
                [`${prefix}menu-group-item`]: true,
                [className]: !!className,
            });

            return cloneElement(child, {
                parentMode,
                className: newChildClassName,
            });
        });

        return [
            <Item
                key="menu-group-label"
                className={newClassName}
                replaceClassName
                root={root}
                parentMode={parentMode}
                {...others}
            >
                {label}
            </Item>,
            ...newChildren,
        ];
    }
}
