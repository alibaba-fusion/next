import React from 'react';
import type { CommonProps } from '../util';

/**
 * @api Overlay.Popup
 */
export interface PopupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * [v2] 浮窗被遮挡时是否自动调整位置
     * @en whether to adjust the position automatically when the overlay is covered
     */
    autoAdjust?: boolean;
    /**
     * @skip
     */
    onMaskMouseEnter?: () => void;
    /**
     * @skip
     */
    onMaskMouseLeave?: () => void;
    /**
     * @skip
     */
    overlay?: boolean | Element | React.ReactNode;
    /**
     * 弹层内容
     * @en content of overlay
     */
    children?: React.ReactNode;
    /**
     * 弹层是否自适应内容
     * @en whether the overlay is automatically adapted to the content
     * @defaultValue false
     */
    autoFit?: boolean;
    /**
     * 弹层当前是否显示
     * @en whether the overlay is visible currently
     * @defaultValue false
     */
    visible?: boolean;

    /**
     * 弹层请求关闭时触发事件的回调函数
     * @en Callback function that triggers an event when the overlay request closed
     * @defaultValue func.noop
     * @skip
     */
    onRequestClose?: (type: string, e: React.MouseEvent) => void;

    /**
     * 弹层定位的参照元素
     * @en reference element for overlay positioning
     */
    target?: React.ReactNode;

    /**
     * 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)
     * @en Alignment of the overlay relative to the reference element, see [Alignment](#Alignment)
     * @defaultValue 'tl bl'
     * @skip
     */
    align?: string | boolean;

    /**
     * 弹层相对于参照元素定位的微调
     * @en Extra adjustment for trigger element. e.g. [hoz, ver] means move to right
     * @defaultValue [0, 0]
     * @skip
     */
    offset?: Array<number | string>;

    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @en Container of the overlay, if it is a function, it should return ref, if it is a string, it is should be the id of the DOM element, it can also be passed the DOM element directly.
     * @skip
     */
    container?: React.ReactNode;

    /**
     * 是否显示遮罩
     * @en Whether to show the mask
     * @defaultValue false
     * @skip
     */
    hasMask?: boolean;

    /**
     * 是否支持 esc 按键关闭弹层
     * @en Whether to support pressing esc to close the overlay
     * @defaultValue true
     * @skip
     */
    canCloseByEsc?: boolean;

    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     * @en Whether to support clicking the outside to close the overlay when the mask is hidden
     * @defaultValue true
     * @skip
     */
    canCloseByOutSideClick?: boolean;

    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     * @en Whether to support clicking the mask to close the overlay when the mask is visible
     * @defaultValue true
     * @skip
     */
    canCloseByMask?: boolean;

    /**
     * 弹层打开前触发事件的回调函数
     * @en Callback function that triggers the event before the overlay opens
     * @defaultValue func.noop
     * @skip
     */
    beforeOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开时触发事件的回调函数
     * @en Callback function that triggers the event when the overlay opens
     * @defaultValue func.noop
     * @skip
     */
    onOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     * @en Callback function that triggers the event after the overlay opens, if enable animations, trigger after the animation ends
     * @defaultValue func.noop
     * @skip
     */
    afterOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭前触发事件的回调函数
     * @en Callback function that triggers the event before the overlay closes
     * @defaultValue func.noop
     * @skip
     */
    beforeClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭时触发事件的回调函数
     * @en Callback function that triggers the event when the overlay closes
     * @defaultValue func.noop
     * @skip
     */
    onClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     * @en Callback function that triggers the event after the overlay closes, if enable animations, trigger after the animation ends
     * @defaultValue func.noop
     * @skip
     */
    afterClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层定位完成前触发的事件
     * @en Callback function that triggers the event before the overlay posiitons
     * @defaultValue func.noop
     * @skip
     */
    beforePosition?: (target?: React.ReactNode) => void;

    /**
     * 弹层定位完成时触发的事件
     * @en Callback function that triggers the event when the overlay posiitons
     * @defaultValue func.noop
     * @skip
     */
    onPosition?: (config: object, node?: object) => void;

    /**
     * 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式
     * @en Whether to force the update of positioning after each rerendered, which is generally used to maintain the original positioning when the size of the content area changes.
     * @defaultValue false
     * @skip
     */
    shouldUpdatePosition?: boolean;

    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     * @en Whether to focus the element in the overlay automatically when the overlay is opened
     * @defaultValue false
     * @skip
     */
    autoFocus?: boolean;

    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     * @en When the overlay is not visible due to scrolling of the page, does it automatically adjust the position to appear in the visible area? in v2
     * @defaultValue true
     * @skip
     */
    needAdjust?: boolean;

    /**
     * 是否禁用页面滚动
     * @en Whether to disable page scrolling
     * @defaultValue false
     * @skip
     */
    disableScroll?: boolean;

    /**
     * 隐藏时是否保留子节点
     * @en Whether to keep dom nodes when hidden
     * @defaultValue false
     * @skip
     */
    cache?: boolean;

    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     * @en When clicking on the document, does not close the overlay if the node is included. If it is a function, it should return ref, if it is a string, it should be the id of the DOM element, it can also be directly passed to the DOM element, or the above values Array
     * @skip
     */
    safeNode?: React.ReactNode;

    /**
     * 弹层的根节点的样式类
     * @en Class name of the overlay's wrapper node
     * @skip
     */
    wrapperClassName?: string;

    /**
     * 弹层的根节点的内联样式
     * @en Inline stylesheet of the overlay's wrapper node
     * @skip
     */
    wrapperStyle?: React.CSSProperties;

    /**
     * 配置动画的播放方式，支持 \{ in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名
     * @en configure animation, support the \{in: 'enter-class', out: 'leave-class' \} object parameters, if set to false, do not play the animation. Refer to Animate component documentation for available animations.
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     * @skip
     */
    animation?: string | false | Record<'in' | 'out', string> | undefined;

    /**
     * 触发弹层显示或隐藏的元素
     * @en trigger the overlay to show or hide elements
     */
    trigger?: React.ReactElement<React.ReactNode>;

    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     * @en trigger the overlay to show or hide operations, either 'click', 'hover', 'focus', or an array of them, such as ['hover', 'focus']
     * @defaultValue 'hover'
     */
    triggerType?: string | Array<string>;

    /**
     * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
     * @en Customize the keyboard trigger keys that will trigger click event handlers when trigger is focused. It will only take effect when the triggerType is 'click'.
     * @defaultValue [KEYCODE.SPACE, KEYCODE.ENTER]
     */
    triggerClickKeycode?: number | Array<number>;

    /**
     * 弹层默认是否显示
     * @en whether the overlay is visible default
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 弹层显示或隐藏时触发的回调函数, v2 版本第二个参数是 event
     * @en callback function triggered when the ovlery is visible or hidden
        signatures:
        Function(visible: Boolean, type: String, e: Object) =\> void
        params:
        visible: \{Boolean\} whether the overlay is visible
        type: \{String\} the reason that triggers the overlay to show or hide
        e: \{Object\} DOM event
     */
    onVisibleChange?: (visible: boolean, type: string | object, e?: object) => void;

    /**
     * 设置此属性，弹层无法显示或隐藏
     * @en if set this property, the overlay cannot be shown or hidden
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     * @en The delay time, in milliseconds, that the overlay shows or hides and only works when triggerType is set to hover
     * @defaultValue 200
     */
    delay?: number;

    /**
     * trigger 是否可以关闭弹层
     * @en whether the trigger element can close the overlay
     * @defaultValue true
     */
    canCloseByTrigger?: boolean;

    /**
     * 是否跟随trigger滚动
     * @en follow trigger to scroll or not
     * @defaultValue false
     */
    followTrigger?: boolean;

    /**
     * 开启 v2 版本
     * @en enable v2 version
     */
    v2?: boolean;

    /**
     * [v2] 快捷位置
     * @en [v2] quick position
     * @defaultValue 'tr'
     */
    placement?: string;
}

/**
 * @api Overlay
 */
export interface OverlayProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     * @en trigger the overlay to show or hide operations, either 'click', 'hover', 'focus', or an array of them, such as ['hover', 'focus']
     * @defaultValue 'hover'
     * @skip
     */
    triggerType?: string | Array<string>;
    /**
     * @skip
     */
    pinFollowBaseElementWhenFixed?: boolean;
    /**
     * @skip
     */
    isChildrenInMask?: boolean;
    /**
     * @skip
     */
    maskClass?: string;
    /**
     * @skip
     */
    onMaskMouseLeave?: (e: React.MouseEvent) => void;
    /**
     * @skip
     */
    onMaskMouseEnter?: (e: React.MouseEvent) => void;
    /**
     * 弹层是否自适应内容
     * @en whether the overlay is automatically adapted to the content
     * @defaultValue false
     * @skip
     */
    autoFit?: boolean;
    /**
     * 弹层内容
     * @en conent of overlay
     */
    // children 类型不好定义，之前也是any，先保持一致
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    children?: any;

    /**
     * 是否显示弹层
     * @en whether to show the overlay
     * @defaultValue false
     */
    visible?: boolean;

    /**
     * 弹层请求关闭时触发事件的回调函数, v2 版本第一个参数是 event
     * @en callback function that triggers an event when the overlay request closed
     * @defaultValue func.noop
     */
    onRequestClose?: (type: string | object, e: Event | React.MouseEvent<Element>) => void;

    /**
     * 弹层定位的参照元素
     * @en reference element for overlay positioning
     * @defaultValue Position.VIEWPORT
     */
    target?: React.ReactNode;

    /**
     * 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)
     * @en alignment of the overlay relative to the reference element, see [Alignment](#Alignment)
     * @defaultValue 'tl bl'
     */
    align?: string | boolean;

    /**
     * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量 e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
     * @en Fine-tuning the positioning of the elastic layer relative to the trigger, receiving array [hoz, ver], indicating the increment of the elastic layer on the left / top e.g. [100, 100] means moving to the right (to the left in RTL mode) and downward distribution Move 100px
     * @defaultValue [0, 0]
     */
    offset?: Array<number | string>;

    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @en container of the overlay, if it is a function, it should return ref, if it is a string, it is should be the id of the DOM element, it can also be passed the DOM element directly.
     */
    container?: React.ReactNode;

    /**
     * 是否显示遮罩
     * @en whether to show the mask
     * @defaultValue false
     */
    hasMask?: boolean;

    /**
     * 是否支持 esc 按键关闭弹层
     * @en whether to support pressing esc to close the overlay
     * @defaultValue true
     */
    canCloseByEsc?: boolean;

    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     * @en whether to support clicking the outside to close the overlay when the mask is hidden
     * @defaultValue true
     */
    canCloseByOutSideClick?: boolean;

    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     * @en whether to support clicking the mask to close the overlay when the mask is visible
     * @defaultValue true
     */
    canCloseByMask?: boolean;

    /**
     * 弹层打开前触发事件的回调函数
     * @en callback function that triggers the event before the overlay opens
     * @defaultValue func.noop
     */
    beforeOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开时触发事件的回调函数
     * @en callback function that triggers the event when the overlay opens
     * @defaultValue func.noop
     */
    onOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     * @en callback function that triggers the event after the overlay opens, if enable animations, trigger after the animation ends
     * @defaultValue func.noop
     */
    afterOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭前触发事件的回调函数
     * @en callback function that triggers the event before the overlay closes
     * @defaultValue func.noop
     */
    beforeClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭时触发事件的回调函数
     * @en callback function that triggers the event when the overlay closes
     * @defaultValue func.noop
     */
    onClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     * @en callback function that triggers the event after the overlay closes, if enable animations, trigger after the animation ends
     * @defaultValue func.noop
     */
    afterClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层定位完成前触发的事件
     * @en callback function that triggers the event before the overlay posiitons
     * @defaultValue func.noop
     */
    beforePosition?: () => void;

    /**
     * 弹层定位完成时触发的事件
     * @en callback function that triggers the event when the overlay posiitons
     * @defaultValue func.noop
     */
    onPosition?: (config: object, node?: object) => void;

    /**
     * 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式
     * @en whether to force the update of positioning after each rerendered, which is generally used to maintain the original positioning when the size of the content area changes.
     * @defaultValue false
     */
    shouldUpdatePosition?: boolean;

    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     * @en whether to focus the element in the overlay automatically when the overlay is opened
     * @defaultValue false
     */
    autoFocus?: boolean;

    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     * @en when the overlay is not visible due to scrolling of the page, does it automatically adjust the position to appear in the visible area?
     * @defaultValue true
     */
    needAdjust?: boolean;

    /**
     * 浮窗被遮挡时是否自动调整位置
     * @en whether to adjust the position automatically when the overlay is covered
     * @skip
     */
    autoAdjust?: boolean;

    /**
     * 是否禁用页面滚动
     * @en whether to disable page scrolling
     * @defaultValue false
     */
    disableScroll?: boolean;

    /**
     * 隐藏时是否保留子节点
     * @en whether to keep dom nodes when hidden
     * @defaultValue false
     */
    cache?: boolean;

    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     * @en when clicking on the document, does not close the overlay if the node is included. If it is a function, it should return ref, if it is a string, it should be the id of the DOM element, it can also be directly passed to the DOM element, or the above values Array
     */
    safeNode?: React.ReactNode;

    /**
     * 弹层的根节点的样式类
     * @en class name of the overlay's wrapper node
     */
    wrapperClassName?: string;

    /**
     * 弹层的根节点的内联样式
     * @en inline stylesheet of the overlay's wrapper node
     */
    wrapperStyle?: React.CSSProperties;
    /**
     * 配置动画的播放方式，支持 \{ in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名
     * @en configure animation, support the \{in: 'enter-class', out: 'leave-class' \} object parameters, if set to false, do not play the animation. Refer to Animate component documentation for available animations.
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     */
    animation?: string | false | Record<'in' | 'out', string> | undefined;
    /**
     * 开启 v2 版本
     * @en enable v2
     * @version 1.25
     */
    v2?: boolean;
    /**
     * [v2] align 的数组形式，不能和 align 同时使用
     * @en [v2] align in the array form, cannot be used with align
     * @version 1.25
     */
    points?: Array<string>;
    /**
     * 是否在捕获阶段监听，适配 react 17 事件模型变更
     * @en add listener in capture phase, compatible with react 17
     * @version 1.25
     */
    useCapture?: boolean;
}

export interface OverlayState {
    visible?: boolean;
    status?: string;
    animation?: string | false | Record<'in' | 'out', string> | undefined;
    willOpen?: boolean;
    willClose?: boolean;
}

export default class Overlay extends React.Component<OverlayProps, OverlayState> {
    static Popup: typeof Popup;
}

export interface PopupState {
    visible?: boolean;
}

export interface PositionProps {
    children?: React.ReactNode;
    target?: React.ReactNode;
    container?: React.ReactNode;
    align?: string | boolean;
    offset: Array<number | string>;
    beforePosition: () => void;
    onPosition: (config: object, node?: object) => void;
    needAdjust?: boolean;
    autoFit?: boolean;
    needListenResize?: boolean;
    shouldUpdatePosition?: boolean;
    rtl?: boolean;
    pinElement?: HTMLElement;
    baseElement?: HTMLElement;
    pinFollowBaseElementWhenFixed?: boolean;
    isRtl?: boolean;
}

export interface PointsType {
    element: HTMLElement | 'viewport';
    x: number;
    y: number;
    size: () => {
        width: number;
        height: number;
    };
    offset: (ignoreScroll: boolean) => {
        left: number;
        top: number;
    };
}

export interface GatewayProps {
    children?: React.ReactNode;
    container?: React.ReactNode;
    target?: React.ReactNode;
}

export interface GatewayState {
    containerNode: Element | Text | null;
}
