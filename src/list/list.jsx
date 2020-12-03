import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import Loading from '../loading';
import zhCN from '../locale/zh-cn';
import ConfigProvider from '../config-provider';

/**
 * List
 */
class List extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 列表头部
         */
        header: PropTypes.node,
        /**
         * 列表尾部
         */
        footer: PropTypes.node,
        /**
         * 列表尺寸
         */
        size: PropTypes.oneOf(['medium', 'small']),
        /**
         * 是否显示分割线
         */
        divider: PropTypes.bool,
        /**
         * 列表数据源
         */
        dataSource: PropTypes.array,
        /**
         * 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项
         * @param {Any} current 当前遍历的项
         * @param {Number} index 当前遍历的项的索引
         */
        renderItem: PropTypes.func,
        /**
         * 是否在加载中
         */
        loading: PropTypes.bool,
        /**
         * 自定义 Loading 组件
         * 请务必传递 props, 使用方式： loadingComponent={props => <Loading {...props}/>}
         * @param {LoadingProps} props 需要透传给组件的参数
         * @return {React.ReactNode} 展示的组件
         */
        loadingComponent: PropTypes.func,
        /**
         * 设置数据为空的时候的表格内容展现
         */
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
        renderItem: item => item,
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
            dataSource.map((one, index) => {
                return renderItem(one, index);
            });

        const content = (
            <div {...others} className={classes}>
                {header ? <div className={`${prefix}list-header`}>{header}</div> : null}

                {!(dSValid && dataSource.length > 0) && !children ? (
                    <div className={`${prefix}list-empty`}>{emptyContent || locale.empty}</div>
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
