import React, { Component, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate from '../animate';
import Icon from '../icon';
import { func, KEYCODE, obj, support } from '../util';
import zhCN from '../locale/zh-cn';
import ConfigProvider from '../config-provider';
import type { CloseArea, TagRealProps, TagProps } from './types';

const { noop, bindCtx } = func;

const PRESET_COLOR_REG = /blue|green|orange|red|turquoise|yellow/;

class Tag extends Component<TagProps, { visible: boolean }> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        type: PropTypes.oneOf(['normal', 'primary']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        color: PropTypes.string,
        animation: PropTypes.bool,
        closeArea: PropTypes.oneOf(['tag', 'tail']),
        closable: PropTypes.bool,
        onClose: PropTypes.func,
        afterClose: PropTypes.func,
        afterAppear: PropTypes.func,
        className: PropTypes.any,
        children: PropTypes.node,
        onClick: PropTypes.func,
        _shape: PropTypes.oneOf(['default', 'closable', 'checkable']),
        disabled: PropTypes.bool,
        rtl: PropTypes.bool,
        locale: PropTypes.object,
    };

    static defaultProps = {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        closeArea: 'tail',
        animation: false,
        onClose: noop,
        afterClose: noop,
        afterAppear: noop,
        onClick: noop,
        _shape: 'default',
        disabled: false,
        rtl: false,
        locale: zhCN.Tag,
    };

    private __destroyed: boolean;
    private tagNode: HTMLDivElement | null = null;

    constructor(props: TagProps) {
        super(props);

        this.state = {
            visible: true,
        };

        bindCtx(this, [
            'handleBodyClick',
            'handleTailClick',
            'handleAnimationInit',
            'handleAnimationEnd',
            'renderTailNode',
        ]);
    }

    componentWillUnmount() {
        this.__destroyed = true;
    }

    get realProps() {
        return this.props as TagRealProps;
    }

    handleClose(from: CloseArea) {
        const { animation, onClose } = this.realProps;
        const hasAnimation = support.animation && animation;

        // 先执行回调
        const result = onClose!(from, this.tagNode!);

        // 如果回调函数返回 false，则阻止关闭行为
        if (result !== false && !this.__destroyed) {
            this.setState(
                {
                    visible: false,
                },
                () => {
                    // 如果没有动画，则直接执行 afterClose
                    !hasAnimation && this.realProps.afterClose!(this.tagNode);
                }
            );
        }
    }

    // 标签体点击
    handleBodyClick(e: MouseEvent<HTMLDivElement>) {
        const { closable, closeArea, onClick } = this.realProps;
        const node = e.currentTarget;

        if (node && (node === e.target || node.contains(e.target as HTMLElement))) {
            if (closable && closeArea === 'tag') {
                this.handleClose('tag');
            }

            if (typeof onClick === 'function') {
                return onClick(e);
            }
        }
    }

    onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        // 针对无障碍化要求 添加键盘 SPACE 事件
        const { closable, closeArea, onClick, disabled } = this.realProps;
        if (e.keyCode !== KEYCODE.SPACE || disabled) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (closable) {
            this.handleClose(closeArea!);
        } else {
            return onClick!(e);
        }
    };

    handleTailClick(e: MouseEvent<HTMLSpanElement>) {
        e && e.preventDefault();
        e && e.stopPropagation();

        this.handleClose('tail');
    }

    handleAnimationInit(node: HTMLElement) {
        this.realProps.afterAppear!(node);
    }

    handleAnimationEnd(node: HTMLElement) {
        this.realProps.afterClose!(node);
    }

    renderAnimatedTag(children: ReactNode, animationName: string) {
        return (
            <Animate
                animation={animationName}
                afterAppear={this.handleAnimationInit}
                afterLeave={this.handleAnimationEnd}
            >
                {children}
            </Animate>
        );
    }

    renderTailNode() {
        const { prefix, closable, locale } = this.props;

        if (!closable) {
            return null;
        }

        return (
            <span
                className={`${prefix}tag-close-btn`}
                onClick={this.handleTailClick}
                role="button"
                aria-label={locale!.delete}
            >
                <Icon type="close" />
            </span>
        );
    }

    isPresetColor() {
        const { color } = this.props;

        if (!color) {
            return false;
        }

        return PRESET_COLOR_REG.test(color);
    }

    getTagStyle() {
        const { color = '', style } = this.props;
        const isPresetColor = this.isPresetColor();
        const customColorStyle = {
            backgroundColor: color,
            borderColor: color,
            color: '#fff',
        };

        return {
            ...(color && !isPresetColor ? customColorStyle : null),
            ...style,
        };
    }

    render() {
        const {
            prefix,
            type,
            size,
            color,
            _shape,
            closable,
            closeArea,
            className,
            children,
            animation,
            disabled,
            rtl,
        } = this.realProps;
        const { visible } = this.state;
        const isPresetColor = this.isPresetColor();
        const others = obj.pickOthers(Tag.propTypes, this.props);
        const { style, ...otherTagProps } = others;
        const shape = closable ? 'closable' : _shape;
        const bodyClazz = classNames(
            [`${prefix}tag`, `${prefix}tag-${shape}`, `${prefix}tag-${size}`],
            {
                [`${prefix}tag-level-${type}`]: !color,
                [`${prefix}tag-closable`]: closable,
                [`${prefix}tag-body-pointer`]: closable && closeArea === 'tag',
                [`${prefix}tag-${color}`]: color && isPresetColor && type === 'primary',
                [`${prefix}tag-${color}-inverse`]: color && isPresetColor && type === 'normal',
            },
            className
        );

        // close btn
        const tailNode = this.renderTailNode();
        // tag node
        const tagNode = !visible ? null : (
            <div
                className={bodyClazz}
                onClick={this.handleBodyClick}
                onKeyDown={this.onKeyDown}
                // @ts-expect-error tagIndex required number
                tabIndex={disabled ? '' : '0'}
                role="button"
                aria-disabled={disabled}
                disabled={disabled}
                dir={rtl ? 'rtl' : undefined}
                ref={n => (this.tagNode = n)}
                style={this.getTagStyle()}
                {...otherTagProps}
            >
                <span className={`${prefix}tag-body`}>{children}</span>
                {tailNode}
            </div>
        );

        if (animation && support.animation) {
            return this.renderAnimatedTag(tagNode, `${prefix}tag-zoom`);
        }

        // 未开启或不支持动画
        return tagNode;
    }
}

export default ConfigProvider.config(Tag);
