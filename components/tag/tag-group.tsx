import React, { Component } from 'react';
import classNames from 'classnames';
import type { TagGroupProps } from './types';

class Group extends Component<TagGroupProps> {
    static defaultProps = {
        prefix: 'next-',
        rtl: false,
    };

    render() {
        const { className, prefix, children, rtl, ...others } = this.props;
        const clazz = classNames(`${prefix || 'next-'}tag-group`, className);

        return (
            <div className={clazz} dir={rtl ? 'rtl' : undefined} {...others}>
                {children}
            </div>
        );
    }
}

export default Group;
