import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import Loading from '../loading';
import zhCN from '../locale/zh-cn';
import ConfigProvider from '../config-provider';
import type { ListProps } from './types';

/**
 * List
 */
class List extends Component<ListProps> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        header: PropTypes.node,
        footer: PropTypes.node,
        size: PropTypes.oneOf(['medium', 'small']),
        divider: PropTypes.bool,
        dataSource: PropTypes.array,
        renderItem: PropTypes.func,
        loading: PropTypes.bool,
        loadingComponent: PropTypes.func,
        emptyContent: PropTypes.node,
        className: PropTypes.string,
        children: PropTypes.any,
        locale: PropTypes.object,
    };

    static defaultProps = {
        rtl: false,
        size: 'medium',
        divider: true,
        prefix: 'next-',
        locale: zhCN.List,
        renderItem: (item: object) => item,
        loading: false,
    };

    render() {
        const {
            prefix,
            header,
            footer,
            size,
            divider,
            className,
            children,
            rtl,
            dataSource,
            renderItem,
            locale,
            loading,
            loadingComponent: LoadingComponent = Loading,
            emptyContent,
            ...others
        } = this.props;

        if (rtl) {
            others.dir = 'rtl';
        }

        const dSValid = Array.isArray(dataSource);

        const classes = classNames(
            `${prefix}list`,
            {
                [`${prefix}list-${size}`]: size,
                [`${prefix}list-divider`]: divider,
            },
            className
        );

        const customContent =
            dSValid &&
            renderItem &&
            dataSource.map((one, index) => {
                return renderItem(one, index);
            });

        const content = (
            <div {...others} className={classes}>
                {header ? <div className={`${prefix}list-header`}>{header}</div> : null}

                {!(dSValid && dataSource.length > 0) && !children ? (
                    <div className={`${prefix}list-empty`}>{emptyContent || locale?.empty}</div>
                ) : (
                    <ul key="list-body" className={`${prefix}list-items`}>
                        {customContent}
                        {children}
                    </ul>
                )}

                {footer ? <div className={`${prefix}list-footer`}>{footer}</div> : null}
            </div>
        );

        if (loading) {
            const loadingClassName = `${prefix}list-loading`;
            return <LoadingComponent className={loadingClassName}>{content}</LoadingComponent>;
        }

        return content;
    }
}

export default ConfigProvider.config(polyfill(List));
