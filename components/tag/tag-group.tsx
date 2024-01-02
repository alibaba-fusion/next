import * as React from 'react';
import * as cn from 'classnames';
import { TagGroupProps } from './types';

/**
 * Tag.Group
 */
class Group extends React.Component<TagGroupProps> {
    static defaultProps = {
        prefix: 'next-',
        rtl: false,
    };

    render() {
        const { className, prefix, children, rtl, ...others } = this.props;
        const clazz = cn(`${prefix || 'next-'}tag-group`, className);

        return (
            <div className={clazz} dir={rtl ? 'rtl' : undefined} {...others}>
                {children}
            </div>
        );
    }
}

export { Group };
