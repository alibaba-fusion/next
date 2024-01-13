import React, { type ReactElement, type CSSProperties } from 'react';
import type { TransitionProps } from 'react-transition-group/Transition';
import type { TransitionGroupProps } from 'react-transition-group/TransitionGroup';
import type { CommonProps } from '../util';

export interface AnimateChildProps {
    names?: Partial<{
        appear: string;
        appearActive: string;
        enter: string;
        enterActive: string;
        leave: string;
        leaveActive: string;
    }>;
    onAppear?: (node: HTMLElement) => void;
    onAppeared?: (node: HTMLElement) => void;
    onAppearing?: (node: HTMLElement) => void;
    onEnter?: (node: HTMLElement) => void;
    onEntering?: (node: HTMLElement) => void;
    onEntered?: (node: HTMLElement) => void;
    onExit?: (node: HTMLElement) => void;
    onExiting?: (node: HTMLElement) => void;
    onExited?: (node: HTMLElement) => void;
}

/**
 * @api Animate
 */
export interface AnimateProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 动画 className
     */
    animation?: string | Partial<Record<'appear' | 'enter' | 'leave', string>>;

    /**
     * 子元素第一次挂载时是否执行动画
     */
    animationAppear?: TransitionGroupProps['appear'];

    /**
     * 包裹子元素的标签
     */
    component?: TransitionGroupProps['component'];

    /**
     * 是否只有单个子元素，如果有多个子元素，请设置为 false
     */
    singleMode?: boolean;

    /**
     * 执行第一次挂载动画前触发的回调函数
     */
    beforeAppear?: (node: HTMLElement) => void;

    /**
     * 执行第一次挂载动画，添加 xxx-appear-active 类名后触发的回调函数
     */
    onAppear?: (node: HTMLElement) => void;

    /**
     * 执行完第一次挂载动画后触发的函数
     */
    afterAppear?: (node: HTMLElement) => void;

    /**
     * 执行进场动画前触发的回调函数
     */
    beforeEnter?: (node: HTMLElement) => void;

    /**
     * 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数
     */
    onEnter?: (node: HTMLElement) => void;

    /**
     * 执行完进场动画后触发的回调函数
     */
    afterEnter?: (node: HTMLElement) => void;

    /**
     * 执行离场动画前触发的回调函数
     */
    beforeLeave?: TransitionProps['onExit'];

    /**
     * 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数
     */
    onLeave?: TransitionProps['onExiting'];

    /**
     * 执行完离场动画后触发的回调函数
     */
    afterLeave?: TransitionProps['onExited'];
}

/**
 * @api Animate.Expand
 */
export interface ExpandProps {
    /**
     * 动画 className
     */
    animation?: string | Partial<Record<'appear' | 'enter' | 'leave', string>>;
    /**
     * 执行进场动画前触发的回调函数
     */
    beforeEnter?: (node: HTMLElement) => void;
    /**
     * 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数
     */
    onEnter?: (node: HTMLElement) => void;
    /**
     * 执行完进场动画后触发的回调函数
     */
    afterEnter?: (node: HTMLElement) => void;

    /**
     * 执行离场动画前触发的回调函数
     */
    beforeLeave?: TransitionProps['onExit'];

    /**
     * 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数
     */
    onLeave?: TransitionProps['onExiting'];

    /**
     * 执行完离场动画后触发的回调函数
     */
    afterLeave?: TransitionProps['onExited'];
}

/**
 * @api Animate.OverlayAnimate
 */
export interface OverlayAnimateProps {
    animation?: string | false | Record<'in' | 'out', string>;
    visible?: boolean;
    children?: ReactElement;
    timeout?: number;
    style?: CSSProperties;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onEntering?: (node: HTMLElement, isAppearing: boolean) => void;
    onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
    onExit?: (node: HTMLElement) => void;
    onExiting?: (node: HTMLElement) => void;
    onExited?: (node: HTMLElement) => void;
    appear?: boolean;
    enter?: boolean;
    exit?: boolean;
}
