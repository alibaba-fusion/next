import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import type { GroupProps } from './types';

/**
 * Input.Group
 */
class Group extends React.Component<GroupProps> {
    static displayName = 'Group';

    static propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.node,
        addonBefore: PropTypes.node,
        addonBeforeClassName: PropTypes.string,
        addonAfter: PropTypes.node,
        addonAfterClassName: PropTypes.string,
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
    };

    render() {
        const {
            className,
            style,
            children,
            prefix,
            addonBefore,
            addonAfter,
            addonBeforeClassName,
            addonAfterClassName,
            rtl,
            disabled,
            ...others
        } = this.props;

        const cls = classNames({
            [`${prefix}input-group`]: true,
            [`${prefix}disabled`]: disabled,
            [className!]: !!className,
        });

        const addonCls = `${prefix}input-group-addon`;
        const beforeCls = classNames(addonCls, {
            [`${prefix}before`]: true,
            [addonBeforeClassName!]: addonBeforeClassName,
        });
        const afterCls = classNames(addonCls, {
            [`${prefix}after`]: true,
            [addonAfterClassName!]: addonAfterClassName,
        });

        const before = addonBefore ? <span className={beforeCls}>{addonBefore}</span> : null;

        const after = addonAfter ? <span className={afterCls}>{addonAfter}</span> : null;

        return (
            <span
                {...others}
                // @ts-expect-error span 上没有 disabled
                disabled={disabled}
                dir={rtl ? 'rtl' : undefined}
                className={cls}
                style={style}
            >
                {before}
                {children}
                {after}
            </span>
        );
    }
}

export default ConfigProvider.config(Group);
