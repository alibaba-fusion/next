/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { TransitionProps } from 'react-transition-group/Transition';
import { TransitionGroupProps } from 'react-transition-group/TransitionGroup';

export interface AnimateProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 动画 className
     */
    animation?: string | any;

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
     * 子元素
     */
    children?: React.ReactElement<any> | Array<any>;

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

export default class Animate extends React.Component<AnimateProps, any> {}
