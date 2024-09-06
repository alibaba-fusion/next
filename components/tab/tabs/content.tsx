import React, { PureComponent, type ReactNode, type ReactElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import type { TabContentProps } from '../types';

class TabContent extends PureComponent<TabContentProps> {
    static displayName = 'TabContent';
    static propTypes = {
        prefix: PropTypes.string,
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        lazyLoad: PropTypes.bool,
        children: PropTypes.any,
    };

    render() {
        const { prefix, activeKey, lazyLoad, unmountInactiveTabs, children, className, ...others } =
            this.props;
        const formatChildren: ReactNode[] = [];
        React.Children.forEach(children, child => {
            const active = activeKey === (child as ReactElement).key;
            formatChildren.push(
                React.cloneElement(child as ReactElement, {
                    prefix,
                    active,
                    lazyLoad,
                    unmountInactiveTabs,
                })
            );
        });

        const classNames = classnames(
            {
                [`${prefix}tabs-content`]: true,
            },
            className
        );

        return (
            <div {...others} className={classNames}>
                {formatChildren}
            </div>
        );
    }
}

export default TabContent;
