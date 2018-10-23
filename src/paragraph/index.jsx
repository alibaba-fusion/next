import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';

/* eslint-disable */

/** Paragraph */
class Paragraph extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 额外的样式名 会附加到 root dom 上
         */
        className: PropTypes.string,
        /**
         * 什么方式展示段落
         * @enumdesc 展示所有文本, 展示三行以内（非强制）
         */
        type: PropTypes.oneOf(['long', 'short']),
        /**
         * 组件大小。 
         * @enumdesc 中号, 小号
         */
        size: PropTypes.oneOf(['medium', 'small']),
    };

    static defaultProps = {
        prefix: 'next-',
        type: 'long',
        size: 'medium'
    };

    render() {
        const {prefix, className, type, size, ...others} = this.props;

        const cls = classNames(
            `${prefix}paragraph`,
            type === 'short' ? `${prefix}paragraph-short` : `${prefix}paragraph-long`,
            size === 'small' ? `${prefix}paragraph-small` : `${prefix}paragraph-medium`,
            className
        );

        return (
            <div {...others} className={cls}>{this.props.children}</div>
        );
    }
}

export default ConfigProvider.config(Paragraph);
