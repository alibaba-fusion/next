import React, { Component, Children, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonProps } from '../types';
import ConfigProvider from '../../config-provider';
import { obj, log } from '../../util';

function mapIconSize(size: NonNullable<ButtonProps['size']>): ButtonProps['iconSize'] {
    return {
        large: 'small' as const,
        medium: 'xs' as const,
        small: 'xs' as const,
    }[size];
}

export default class Button extends Component<ButtonProps> {
    static displayName = 'Button';
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        type: PropTypes.oneOf(['primary', 'secondary', 'normal']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        icons: PropTypes.shape({ loading: PropTypes.node }),
        iconSize: PropTypes.oneOfType([
            PropTypes.oneOf([
                'xxs',
                'xs',
                'small',
                'medium',
                'large',
                'xl',
                'xxl',
                'xxxl',
                'inherit',
            ]),
            PropTypes.number,
        ]),
        htmlType: PropTypes.oneOf(['submit', 'reset', 'button']),
        component: PropTypes.oneOf(['button', 'a', 'div', 'span']),
        loading: PropTypes.bool,
        ghost: PropTypes.oneOf([true, false, 'light', 'dark']),
        text: PropTypes.bool,
        warning: PropTypes.bool,
        disabled: PropTypes.bool,
        onClick: PropTypes.func,
        className: PropTypes.string,
        onMouseUp: PropTypes.func,
        children: PropTypes.node,
    };

    static defaultProps = {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        icons: {},
        htmlType: 'button',
        component: 'button',
        loading: false,
        ghost: false,
        text: false,
        warning: false,
        disabled: false,
        onClick: () => {},
    };

    button: HTMLButtonElement | HTMLAnchorElement | unknown;

    onMouseUp = (e: React.MouseEvent<HTMLElement>) => {
        // @ts-expect-error fixme: may have no blur
        this.button.blur();

        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    };

    buttonRefHandler = (button: unknown) => {
        this.button = button;
    };

    render() {
        const {
            prefix,
            className,
            type,
            size,
            htmlType,
            loading,
            text,
            warning,
            ghost,
            component,
            iconSize,
            icons,
            disabled,
            onClick,
            children,
            rtl,
            ...others
        } = this.props;
        const ghostType = ['light', 'dark'].indexOf(ghost as string) >= 0 ? ghost : 'dark';

        const btnClsObj = {
            [`${prefix}btn`]: true,
            [`${prefix}${size}`]: size,
            [`${prefix}btn-${type}`]: type && !ghost,
            [`${prefix}btn-text`]: text,
            [`${prefix}btn-warning`]: warning,
            [`${prefix}btn-loading`]: loading,
            [`${prefix}btn-ghost`]: ghost,
            [`${prefix}btn-${ghostType}`]: ghost,
            [className!]: className,
        };

        let loadingIcon: React.ReactNode = null;

        // 如果传入了 loading 的 icons，使用该节点来渲染
        if (icons && icons.loading && isValidElement(icons.loading)) {
            if (loading) {
                delete btnClsObj[`${prefix}btn-loading`];
                btnClsObj[`${prefix}btn-custom-loading`] = true;
            }

            const loadingSize = iconSize || mapIconSize(size!);
            loadingIcon = React.cloneElement(icons.loading as React.ReactElement, {
                className: classNames({
                    [`${prefix}btn-custom-loading-icon`]: true,
                    show: loading,
                }),
                size: loadingSize,
            });
        }

        const count = Children.count(children);
        // fixme: react children is a complex types, map children to modify is unrecommended
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const clonedChildren = Children.map(children, (child: any, index) => {
            if (
                child &&
                ['function', 'object'].indexOf(typeof child.type) > -1 &&
                child.type._typeMark === 'icon'
            ) {
                const iconCls = classNames({
                    [`${prefix}btn-icon`]: !iconSize, // 如果用户没有传 iconSize，则使用该样式标记 icon 为 button 预设尺寸
                    [`${prefix}btn-icon-size`]: iconSize,
                    [`${prefix}icon-first`]: count > 1 && index === 0,
                    [`${prefix}icon-last`]: count > 1 && index === count - 1,
                    [`${prefix}icon-alone`]: count === 1,
                    [child.props.className]: !!child.props.className,
                });

                if ('size' in child.props) {
                    log.warning(
                        `The size of Icon will not take effect, when Icon is the [direct child element] of Button(<Button><Icon size="${child.props.size}" /></Button>), use <Button iconSize="${child.props.size}"> or <Button><div><Icon size="${child.props.size}" /></div></Button> instead of.`
                    );
                }
                return React.cloneElement(child, {
                    className: iconCls,
                    size: iconSize || mapIconSize(size!),
                });
            }

            if (!isValidElement(child)) {
                return <span className={`${prefix}btn-helper`}>{child}</span>;
            }

            return child;
        });

        const TagName = component!;
        const tagAttrs = {
            ...obj.pickOthers(Object.keys(Button.propTypes), others),
            type: htmlType,
            disabled: disabled,
            onClick: onClick,
            className: classNames(btnClsObj),
        };

        if (TagName !== 'button') {
            delete tagAttrs.type;

            if (tagAttrs.disabled) {
                delete tagAttrs.onClick; // a 标签的 onClick 浏览器默认不会禁用
                if ('href' in tagAttrs && tagAttrs.href) {
                    delete tagAttrs.href; // a 标签在禁用状态下无跳转
                }
            }
        }

        return (
            <TagName
                {...tagAttrs}
                dir={rtl ? 'rtl' : undefined}
                onMouseUp={this.onMouseUp}
                ref={this.buttonRefHandler}
            >
                {loadingIcon}
                {clonedChildren}
            </TagName>
        );
    }
}
