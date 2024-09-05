import React, { PureComponent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TabContentProps, TabItemProps } from '../types';
class TabContent extends PureComponent<TabContentProps> {
    static propTypes = {
        prefix: PropTypes.string,
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        lazyLoad: PropTypes.bool,
        children: PropTypes.any,
    };

    render() {
        const { prefix, activeKey, lazyLoad, unmountInactiveTabs, children, className, ...others } =
            this.props;
        const formatChildren: React.ReactNode[] = [];
        React.Children.forEach(children, child => {
            /* eslint-disable eqeqeq */
            if (React.isValidElement<TabItemProps>(child)) {
                const active = activeKey == child.key;
                formatChildren.push(
                    React.cloneElement(child, {
                        prefix,
                        active,
                        lazyLoad,
                        unmountInactiveTabs,
                    })
                );
            }
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
