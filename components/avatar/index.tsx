import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from '../icon';
import { obj } from '../util';
import type { AvatarProps } from './types';

/**
 * Avatar
 */
class Avatar extends Component<AvatarProps> {
    static propTypes = {
        prefix: PropTypes.string,
        children: PropTypes.any,
        className: PropTypes.string,
        size: PropTypes.oneOfType([
            PropTypes.oneOf(['small', 'medium', 'large']),
            PropTypes.number,
        ]),
        shape: PropTypes.oneOf(['circle', 'square']),
        icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        src: PropTypes.string,
        onError: PropTypes.func,
        alt: PropTypes.string,
        srcSet: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        size: 'medium',
        shape: 'circle',
    };

    state = {
        isImgExist: true,
    };

    componentDidUpdate(prevProps: AvatarProps) {
        if (prevProps.src !== this.props.src) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ isImgExist: true });
        }
    }

    handleImgLoadError = () => {
        const { onError } = this.props;
        const errorFlag = onError ? onError() : undefined;
        if (errorFlag !== false) {
            this.setState({ isImgExist: false });
        }
    };

    getIconSize = (avatarSize: AvatarProps['size']) => {
        return typeof avatarSize === 'number' ? avatarSize / 2 : avatarSize;
    };

    render() {
        const { prefix, className, style, size, icon, alt, srcSet, shape, src, imgProps } =
            this.props;
        const { isImgExist } = this.state;
        let { children } = this.props;

        const others = obj.pickOthers(Avatar.propTypes, this.props);
        const cls = classNames(
            {
                [`${prefix}avatar`]: true,
                [`${prefix}avatar-${shape}`]: !!shape,
                [`${prefix}avatar-image`]: src && isImgExist,
                [`${prefix}avatar-${size}`]: typeof size === 'string',
            },
            className
        );

        const sizeStyle =
            typeof size === 'number'
                ? {
                      width: size,
                      height: size,
                      lineHeight: `${size}px`,
                      fontSize: icon ? size / 2 : 18,
                  }
                : {};

        const iconSize = this.getIconSize(size);
        if (src) {
            if (isImgExist) {
                children = (
                    <img
                        {...imgProps}
                        src={src}
                        srcSet={srcSet}
                        onError={this.handleImgLoadError}
                        alt={alt}
                    />
                );
            } else {
                children = <Icon type={'picture'} size={iconSize} />;
            }
        } else if (typeof icon === 'string') {
            children = <Icon type={icon} size={iconSize} />;
        } else if (icon) {
            const newIconSize = 'size' in icon.props ? icon.props.size : iconSize;
            children = React.cloneElement(icon, { size: newIconSize });
        }

        return (
            <span {...others} className={cls} style={{ ...sizeStyle, ...style }}>
                {children}
            </span>
        );
    }
}

export { AvatarProps };

export default ConfigProvider.config(Avatar);
