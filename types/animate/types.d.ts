import React, { type ReactElement } from 'react';
import type { CommonProps } from '../util';
export interface AnimateChildProps {
    names?: {
        appear: string | undefined;
        appearActive: string;
        enter: string;
        enterActive: string;
        leave: string;
        leaveActive: string;
    };
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
     * @en The animation className
     */
    animation?: string | Partial<Record<'appear' | 'enter' | 'leave', string>>;
    /**
     * 子元素第一次挂载时是否执行动画
     * @en Whether to execute animation on the first mount
     * @defaultValue true
     */
    animationAppear?: boolean;
    /**
     * 包裹子元素的标签
     * @en The tag of the wrapper
     * @defaultValue 'div'
     */
    component?: React.ElementType;
    /**
     * 是否只有单个子元素，如果有多个子元素，请设置为 false
     * @en Whether to only have a single child
     * @defaultValue true
     */
    singleMode?: boolean;
    /**
     * 执行第一次挂载动画前触发的回调函数
     * @en Callback fired before the "entering" status of the first mount is applied
     */
    beforeAppear?: (node: HTMLElement) => void;
    /**
     * 执行第一次挂载动画，添加 xxx-appear-active 类名后触发的回调函数
     * @en Callback fired after the "entering" status of the first mount is applied
     */
    onAppear?: (node: HTMLElement) => void;
    /**
     * 执行完第一次挂载动画后触发的函数
     * @en Callback fired after the "entered" status of the first mount is applied
     */
    afterAppear?: (node: HTMLElement) => void;
    /**
     * 执行进场动画前触发的回调函数
     * @en Callback fired before the "entering" status is applied
     */
    beforeEnter?: (node: HTMLElement) => void;
    /**
     * 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数
     * @en Callback fired after the "entering" status is applied
     */
    onEnter?: (node: HTMLElement) => void;
    /**
     * 执行完进场动画后触发的回调函数
     * @en Callback fired after the "entered" status is applied
     */
    afterEnter?: (node: HTMLElement) => void;
    /**
     * 执行离场动画前触发的回调函数
     * @en Callback fired before the "exiting" status is applied
     */
    beforeLeave?: (node: HTMLElement) => void;
    /**
     * 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数
     * @en Callback fired after the leave stage
     */
    onLeave?: (node: HTMLElement) => void;
    /**
     * 执行完离场动画后触发的回调函数
     * @en Callback fired after the leave stage
     */
    afterLeave?: (node: HTMLElement) => void;
}
/**
 * @api Animate.Expand
 */
export interface ExpandProps
    extends Omit<
        AnimateProps,
        | 'animation'
        | 'beforeEnter'
        | 'onEnter'
        | 'afterEnter'
        | 'beforeLeave'
        | 'onLeave'
        | 'afterLeave'
    > {
    /**
     * 动画 className
     * @en The animation className
     */
    animation?: string | Partial<Record<'appear' | 'enter' | 'leave', string>>;
    /**
     * 执行进场动画前触发的回调函数
     * @en Callback fired before the "entering" status is applied
     */
    beforeEnter?: (node: HTMLElement) => void;
    /**
     * 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数
     * @en Callback fired after the "entering" status is applied
     */
    onEnter?: (node: HTMLElement) => void;
    /**
     * 执行完进场动画后触发的回调函数
     * @en Callback fired after the "entered" status is applied
     */
    afterEnter?: (node: HTMLElement) => void;
    /**
     * 执行离场动画前触发的回调函数
     * @en Callback fired before the "exiting" status is applied
     */
    beforeLeave?: (node: HTMLElement) => void;
    /**
     * 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数
     * @en Callback fired after the "exiting" status is applied
     */
    onLeave?: (node: HTMLElement) => void;
    /**
     * 执行完离场动画后触发的回调函数
     * @en Callback fired after the "exited" status is applied
     */
    afterLeave?: (node: HTMLElement) => void;
}
/**
 * @api Animate.OverlayAnimate
 */
export interface OverlayAnimateProps {
    /**
     * 动画 className
     * @en The animation className
     */
    animation?: string | false | Record<'in' | 'out', string>;
    /**
     * 是否显示
     * @en Show the component; triggers the enter or exit states
     */
    visible?: boolean;
    /**
     * 子元素
     * @en The element to be wrapped
     */
    children: ReactElement;
    /**
     * 过渡的超时时间。
     * @en The duration of the transition.
     * @example
     * 你可以为所有的过渡指定一个超时时间：
     * ```js
     *   timeout={500}
     * ```
     * 或者分别设置
     * ```js
     *   timeout={{
     *     appear: 500,
     *     enter: 300,
     *     exit: 500,
     *   }}
     * ```
     * appear 默认值为 `enter` 的值
     * enter 默认值为 `0`
     * exit 默认值为 `0`
     * -
     * You may specify a single timeout for all transitions:
     * ```js
     *   timeout={500}
     * ```
     * or individually:
     * ```js
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     * appear defaults to the value of `enter`
     * enter defaults to `0`
     * exit defaults to `0`
     */
    timeout?:
        | number
        | {
              appear?: number | undefined;
              enter?: number | undefined;
              exit?: number | undefined;
          };
    /**
     * 子元素样式
     * @en The style of the child element
     */
    style?: React.CSSProperties;
    /**
     * 在第一次 `in={true}` 时“惰性”挂载组件
     * @en "lazy mount" the component on the first `in={true}`
     * @remarks
     * 默认情况下，子元素会在 OverlayAnimate 组件挂载时立即挂载。如果您想在第一次 `in={true}` 时“惰性”挂载组件，
     * 可以设置 `mountOnEnter`。在第一次进入后 OverlayAnimate 组件将保持挂载，即使在“退出”状态下也是如此，除非您也指定了 `unmountOnExit`。
     * -
     * By default the child component is mounted immediately along with the
     * parent OverlayAnimate component. If you want to "lazy mount" the component on
     * the first `in={true}` you can set `mountOnEnter`. After the first enter
     * OverlayAnimate the component will stay mounted, even on "exited", unless you
     * also specify `unmountOnExit`.
     * @defaultValue false
     */
    mountOnEnter?: boolean;
    /**
     * 在第一次 `in={false}` 时“惰性”卸载组件
     * @en "lazy unmount" the component on the first `in={false}`
     * @remarks
     * 默认情况下，子元素会在 OverlayAnimate 组件离开时立即卸载。如果您想在第一次 `in={false}` 时“惰性”卸载组件，
     * 可以设置 `unmountOnExit`。在第一次离开后 OverlayAnimate 组件将保持卸载，即使在“进入”状态下也是如此，除非您也指定了 `mountOnEnter`。
     * -
     * By default the child component stays mounted after it reaches the
     * 'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
     * component after it finishes exiting.
     * @defaultValue false
     */
    unmountOnExit?: boolean;
    /**
     * 在“进入”状态被应用前触发的回调。
     * @en Callback fired before the "entering" status is applied.
     * @param isAppearing - 是否在初次挂载 - isAppearing
     */
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    /**
     * 在“进入”状态被应用后触发的回调。
     * @en Callback fired after the "entering" status is applied.
     * @param isAppearing - 是否在初次挂载 - isAppearing
     */
    onEntering?: (node: HTMLElement, isAppearing: boolean) => void;
    /**
     * 在“已进入”状态被应用后触发的回调。
     * @en Callback fired after the "entered" status is applied.
     * @param isAppearing - 是否在初次挂载 - isAppearing
     */
    onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
    /**
     * 在“离开”状态被应用前触发的回调。
     * @en Callback fired before the "exiting" status is applied.
     */
    onExit?: (node: HTMLElement) => void;
    /**
     * 在“离开”状态被应用后触发的回调。
     * @en Callback fired after the "exiting" status is applied.
     */
    onExiting?: (node: HTMLElement) => void;
    /**
     * 在“已离开”状态被应用后触发的回调。
     * @en Callback fired after the "exited" status is applied.
     */
    onExited?: (node: HTMLElement) => void;
    /**
     * 初次挂载时实现过渡效果
     * @en transition on the first mount.
     * @remarks
     * 正常情况下，如果组件在<OverlayAnimate>组件挂载时就已经显示，那么它不会进行过渡效果。
     * 如果你想在初次挂载时实现过渡效果，请将 appear 属性设置为 true，这样当<OverlayAnimate>挂载时，组件会立即开始过渡过程。
     * 请注意，并没有专门的“出现”状态。“出现”属性仅会在初始挂载时增加一次进入过渡效果。
     * -
     * Normally a component is not transitioned if it is shown when the
     * `<OverlayAnimate>` component mounts. If you want to transition on the first
     * mount set  appear to true, and the component will transition in as soon
     * as the `<OverlayAnimate>` mounts. Note: there are no specific "appear" states.
     * appear only adds an additional enter transition.
     */
    appear?: boolean;
    /**
     * 启用或禁用进场动画
     * @en Enable or disable enter transitions.
     */
    enter?: boolean;
    /**
     * 启用或禁用离场动画
     * @en Enable or disable exit transitions.
     */
    exit?: boolean;
}
