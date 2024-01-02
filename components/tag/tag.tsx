import * as React from 'react';
import * as cn from 'classnames';
import Animate from '../animate';
import Icon from '../icon';
import { func, KEYCODE, obj, support } from '../util';
import zhCN from '../locale/zh-cn';
import ConfigProvider from '../config-provider';
import { CloseArea, TagProps, TagState } from './types';
import { Closeable } from './closeable';
import { Selectable } from './selectable';
import { Group } from './tag-group';

const { noop, bindCtx } = func;

const PRESET_COLOR_REG = /blue|green|orange|red|turquoise|yellow/;

/**
 * Tag
 */
class Tag extends React.Component<TagProps, TagState> {
    // 静态属性用于导出相关子组件
    static Closable: typeof Closeable;
    static Closeable: typeof Closeable;
    static Selectable: typeof Selectable;
    static Group: typeof Group;

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

    constructor(props: TagProps | Readonly<TagProps>) {
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
    __destroyed: boolean;
    private tagNode: HTMLElement | null = null;

    handleClose(from: CloseArea) {
        const { animation, onClose, afterClose } = this.props;
        const hasAnimation = support.animation && animation;

        // 先执行回调
        const result = onClose?.(from, this.tagNode);

        // 如果回调函数返回 false，则阻止关闭行为
        if (result !== false && !this.__destroyed) {
            this.setState(
                {
                    visible: false,
                },
                () =>
                    // 如果没有动画，则直接执行 afterClose
                    !hasAnimation && afterClose && afterClose(this.tagNode)
            );
        }
    }

    // 标签体点击
    handleBodyClick(e: React.MouseEvent<HTMLDivElement>) {
        const { closable, closeArea, onClick } = this.props;
        const node = e.currentTarget;

        if (node && (node === e.target || (node as Node).contains(e.target as Node))) {
            if (closable && closeArea === 'tag') {
                this.handleClose('tag');
            }

            if (typeof onClick === 'function') {
                return onClick(e);
            }
        }
    }

    onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // 针对无障碍化要求 添加键盘SPACE事件
        const { closable, closeArea, onClick, disabled } = this.props;
        if (e.keyCode !== KEYCODE.SPACE || disabled) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (closable && closeArea) {
            this.handleClose(closeArea);
        } else if (typeof onClick === 'function') {
            return onClick(e);
        }
    };

    handleTailClick(e: React.MouseEvent<HTMLSpanElement>) {
        e?.preventDefault();
        e?.stopPropagation();

        this.handleClose('tail');
    }

    handleAnimationInit(node: HTMLElement) {
        const { afterAppear } = this.props;
        afterAppear?.(node);
    }

    handleAnimationEnd(node: HTMLElement) {
        const { afterClose } = this.props;
        afterClose?.(node);
    }

    renderAnimatedTag(children: React.ReactNode, animationName: string) {
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
                aria-label={locale?.delete as string}
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
        } = this.props;
        const { visible } = this.state;
        const isPresetColor = this.isPresetColor();
        const others = obj.pickOthers(Tag.defaultProps, this.props);
        // eslint-disable-next-line no-unused-vars
        const { style, ...otherTagProps } = others;
        const shape = closable ? 'closable' : _shape;
        const bodyClazz = cn(
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
                tabIndex={disabled ? -1 : 0}
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
