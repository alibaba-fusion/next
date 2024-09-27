import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';
import type { BaseProps } from './types';

export default function Base(props: { componentName?: string }) {
    const { componentName } = props;
    class Shell extends Component<BaseProps> {
        static displayName = componentName;

        static _typeMark = `Shell_${componentName}`;

        static propTypes = {
            ...ConfigProvider.propTypes,
            prefix: PropTypes.string,
            collapse: PropTypes.bool,
            miniable: PropTypes.bool,
            component: PropTypes.string,
            trigger: PropTypes.node,
            triggerProps: PropTypes.object,
            direction: PropTypes.oneOf(['hoz', 'ver']),
            align: PropTypes.oneOf(['left', 'right', 'center']),
            onCollapseChange: PropTypes.func,
            fixed: PropTypes.bool,
        };

        static defaultProps = {
            prefix: 'next-',
            component: 'div',
            onCollapseChange: () => {},
            fixed: false,
        };

        static childContextTypes = {
            isCollapse: PropTypes.bool,
        };

        getChildContext() {
            const { collapse } = this.props;

            return {
                isCollapse: collapse,
            };
        }

        render() {
            const {
                prefix,
                className,
                miniable,
                device,
                direction,
                children,
                collapse,
                triggerProps,
                onCollapseChange,
                component,
                align,
                fixed,
                ...others
            } = this.props;

            const Tag = component as React.ElementType;

            const cls = classnames({
                [`${prefix}shell-${componentName!.toLowerCase()}`]: true,
                [`${prefix}shell-collapse`]: !!collapse,
                [`${prefix}shell-mini`]: miniable,
                [`${prefix}shell-nav-${align}`]:
                    componentName === 'Navigation' && direction === 'hoz' && align,
                [className!]: !!className,
            });

            let newChildren = children;
            if (componentName === 'Content') {
                newChildren = <div className={`${prefix}shell-content-inner`}>{children}</div>;
            }

            if (componentName === 'Page') {
                return children;
            }

            return (
                <Tag className={cls} {...others}>
                    {newChildren}
                </Tag>
            );
        }
    }

    return ConfigProvider.config(Shell);
}
