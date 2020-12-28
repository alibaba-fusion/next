import React, { Component, Children, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../../config-provider';
import { obj, log } from '../../util';

function mapIconSize(size) {
    return {
        large: 'small',
        medium: 'xs',
        small: 'xs',
    }[size];
}

/** Button */
export default class Button extends Component {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 按钮的类型
         * normal、primary、warning、inverse
         */
        type: PropTypes.oneOf(['normal', 'primary', 'warning', 'inverse']),
        /**
         * 按钮展示样式
         * solid, outline, text
         */
        model: PropTypes.oneOf(['solid', 'outline', 'text']),
        /**
         * 按钮的尺寸
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * 按钮中可配置的 Icon，格式为 { loading: <Icon type="loading" /> }
         */
        icons: PropTypes.shape({
            loading: PropTypes.node,
        }),
        /**
         * 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小
         */
        iconSize: PropTypes.oneOfType([
            PropTypes.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl', 'inherit']),
            PropTypes.number,
        ]),
        /**
         * 当 component = 'button' 时，设置 button 标签的 type 值
         */
        htmlType: PropTypes.oneOf(['submit', 'reset', 'button']),
        /**
         * 设置标签类型
         */
        component: PropTypes.oneOf(['button', 'a', 'div', 'span']),
        /**
         * 设置按钮的载入状态
         */
        loading: PropTypes.bool,
        /**
         * 是否为幽灵按钮
         */
        ghost: PropTypes.oneOf([true, false, 'light', 'dark']),
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        /**
         * 点击按钮的回调
         * @param {Object} e Event Object
         */
        onClick: PropTypes.func,
        className: PropTypes.string,
        onMouseUp: PropTypes.func,
        children: PropTypes.node,
    };

    static defaultProps = {
        prefix: 'next-',
        type: 'normal',
        model: 'solid',
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

    onMouseUp = e => {
        this.button.blur();

        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    };

    buttonRefHandler = button => {
        this.button = button;
    };

    render() {
        const {
            prefix,
            className,
            type,
            model,
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
        const ghostType = ['light', 'dark'].indexOf(ghost) >= 0 ? ghost : 'dark';

        const btnClsObj = {
            [`${prefix}btn`]: true,
            [`${prefix}${size}`]: size,
            [`${prefix}btn-${type}`]: type && !ghost,
            [`${prefix}btn-${model}`]: model,
            [`${prefix}btn-loading`]: loading,
            [`${prefix}btn-ghost`]: ghost,
            [`${prefix}btn-${ghostType}`]: ghost,
            [className]: className,
        };
        let loadingIcon = null;

        // 如果传入了 loading 的 icons，使用该节点来渲染
        if (icons && icons.loading && isValidElement(icons.loading)) {
            if (loading) {
                delete btnClsObj[`${prefix}btn-loading`];
                btnClsObj[`${prefix}btn-custom-loading`] = true;
            }

            const loadingSize = iconSize || mapIconSize(size);
            loadingIcon = React.cloneElement(icons.loading, {
                className: classNames({
                    [`${prefix}btn-custom-loading-icon`]: true,
                    show: loading,
                }),
                size: loadingSize,
            });
        }

        const count = Children.count(children);
        const clonedChildren = Children.map(children, (child, index) => {
            if (child && ['function', 'object'].indexOf(typeof child.type) > -1 && child.type._typeMark === 'icon') {
                const iconCls = classNames({
                    [`${prefix}btn-icon`]: !iconSize, // 如果用户没有传 iconSize，则使用该样式标记 icon 为 button 预设尺寸
                    [`${prefix}icon-first`]: count > 1 && index === 0,
                    [`${prefix}icon-last`]: count > 1 && index === count - 1,
                    [`${prefix}icon-alone`]: count === 1,
                    [child.props.className]: !!child.props.className,
                });

                if ('size' in child.props) {
                    log.warning(
                        `The size of Icon will not take effect, when Icon is the [direct child element] of Button(<Button><Icon size="${
                            child.props.size
                        }" /></Button>), use <Button iconSize="${child.props.size}"> or <Button><div><Icon size="${
                            child.props.size
                        }" /></div></Button> instead of.`
                    );
                }
                return React.cloneElement(child, {
                    className: iconCls,
                    size: iconSize || mapIconSize(size),
                });
            }

            if (!isValidElement(child)) {
                return <span className={`${prefix}btn-helper`}>{child}</span>;
            }

            return child;
        });

        const TagName = component;
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
                tagAttrs.href && delete tagAttrs.href; // a 标签在禁用状态下无跳转
            }
        }

        return (
            <TagName {...tagAttrs} dir={rtl ? 'rtl' : undefined} onMouseUp={this.onMouseUp} ref={this.buttonRefHandler}>
                {loadingIcon}
                {clonedChildren}
            </TagName>
        );
    }
}
