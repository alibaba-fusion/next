import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../config-provider';

/**
 * Icon
 */
class Icon extends Component {
    static propTypes = {
        /**
        * 样式类名的品牌前缀
        */
        prefix: PropTypes.string,
        /**
         * 指定显示哪种图标
         */
        type: PropTypes.string,
        /**
         * 指定图标大小
         */
        size: PropTypes.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl']),
        className: PropTypes.string,
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        size: 'medium'
    };

    static _typeMark = 'icon';

    render() {
        /* eslint-disable no-unused-vars*/
        const { prefix, type, size, className, rtl, ...other } = this.props;

        const classes = cx({
            [`${prefix}icon`]: true,
            [`${prefix}icon-${type}`]: !!type,
            [`${prefix}${size}`]: !!size,
            [className]: !!className
        });

        if (rtl && ['arrow-left', 'arrow-right', 'arrow-double-left', 'arrow-double-right', 'switch', 'sorting', 'descending', 'ascending'].indexOf(type) !== -1) {
            other.dir = 'rtl';
        }

        return <i {...other} className={classes} />;
    }
}

export default ConfigProvider.config(Icon);
