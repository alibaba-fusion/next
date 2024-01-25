import type React from 'react';
import type { CommonProps } from '../util';

/**
 * @api AnimationObjectType
 */
export type AnimationObjectType = Record<'in' | 'out', string>;

/**
 * @api Target
 */
export type Target<T = unknown> =
    | React.ReactInstance
    | string
    | ((param?: T) => React.ReactInstance | Element | Text | Node | null | void | undefined)
    | Element
    | Node
    | Text
    | null
    | false
    | undefined;

/**
 * @api Overlay.Popup
 * @order 3
 */
export interface PopupV1Props extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * [v2] 浮窗被遮挡时是否自动调整位置
     * @en whether to adjust the position automatically when the overlay is covered
     */
    autoAdjust?: boolean;
    /**
     * 鼠标进入遮罩时触发的回调函数
     * @en Callback function that triggers when the mouse enters the mask
     * @skip
     */
    onMaskMouseEnter?: () => void;
    /**
     * 鼠标离开遮罩时触发的回调函数
     * @en Callback function that triggers when the mouse leaves the mask
     * @skip
     */
    onMaskMouseLeave?: () => void;
    /**
     * 弹层元素
     * @en overlay element
     * @skip
     */
    overlay?: React.ReactElement;
    /**
     * 弹层内容
     * @en content of overlay
     */
    children?: React.ReactElement;
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
     * @skip
     */
    onRequestClose?: (type: string, e: React.MouseEvent) => void;

    /**
     * 弹层定位的参照元素
     * @en reference element for overlay positioning
     */
    target?: Target;

    /**
     * 弹层相对于参照元素的定位，详见开发指南的 [定位部分](#定位)
     * @en Alignment of the overlay relative to the reference element, see [Alignment](#Alignment)
     * @defaultValue 'tl bl'
     * @skip
     */
    align?: string;

    /**
     * 弹层相对于参照元素定位的微调
     * @en Extra adjustment for trigger element. e.g. [hoz, ver] means move to right
     * @defaultValue [0, 0]
     * @skip
     */
    offset?: Array<number>;

    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @en Container of the overlay, if it is a function, it should return ref, if it is a string, it is should be the id of the DOM element, it can also be passed the DOM element directly.
     * @skip
     */
    container?: Target;
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
     * @skip
     */
    beforeOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开时触发事件的回调函数
     * @en Callback function that triggers the event when the overlay opens
     * @skip
     */
    onOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开后触发事件的回调函数，如果有动画，则在动画结束后触发
     * @en Callback function that triggers the event after the overlay opens, if enable animations, trigger after the animation ends
     * @skip
     */
    afterOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭前触发事件的回调函数
     * @en Callback function that triggers the event before the overlay closes
     * @skip
     */
    beforeClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭时触发事件的回调函数
     * @en Callback function that triggers the event when the overlay closes
     * @skip
     */
    onClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭后触发事件的回调函数，如果有动画，则在动画结束后触发
     * @en Callback function that triggers the event after the overlay closes, if enable animations, trigger after the animation ends
     * @skip
     */
    afterClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层定位完成前触发的事件
     * @en Callback function that triggers the event before the overlay positions
     * @skip
     */
    beforePosition?: (target?: React.ReactNode) => void;

    /**
     * 弹层定位完成时触发的事件
     * @en Callback function that triggers the event when the overlay positions
     * @skip
     */
    onPosition?: (
        result: { config: { placement: string; points: string }; style?: CSSCounterStyleRule },
        node?: object
    ) => void;

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
     * 配置动画的播放方式，支持 \{ in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画。请参考 Animate 组件的文档获取可用的动画名
     * @en configure animation, support the \{in: 'enter-class', out: 'leave-class' \} object parameters, if set to false, do not play the animation. Refer to Animate component documentation for available animations.
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     * @skip
     */
    animation?: string | false | Record<'in' | 'out', string> | undefined;

    /**
     * 触发弹层显示或隐藏的元素
     * @en trigger the overlay to show or hide elements
     */
    trigger?: React.ReactElement;

    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     * @en trigger the overlay to show or hide operations, either 'click', 'hover', 'focus', or an array of them, such as ['hover', 'focus']
     * @defaultValue 'hover'
     */
    triggerType?: 'click' | 'hover' | 'focus' | Array<'click' | 'hover' | 'focus'>;

    /**
     * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
     * @en Customize the keyboard trigger keys that will trigger click event handlers when trigger is focused. It will only take effect when the triggerType is 'click'.
     * @defaultValue [KEYCODE.SPACE, KEYCODE.ENTER]
     */
    triggerClickKeycode?: number | Array<number>;

    /**
     * 弹层默认是否显示
     * @en Whether to show the overlay by default
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 弹层显示或隐藏时触发的回调函数，v2 版本第二个参数是 event
     * @en callback function that triggers when the overlay shows or hides
     */
    onVisibleChange?: (visible: boolean, type: string | object, e?: object) => void;

    /**
     * 设置此属性，弹层无法显示或隐藏
     * @en Set this property, the overlay cannot be displayed or hidden
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     * @en Delay time (in milliseconds) when the overlay is displayed or hidden, effective when triggerType is set to hover
     * @defaultValue 200
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示，单位毫秒 ms, 优先级高于 delay
     * @en Delay display after mouse enter, Higher priority than delay
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示，单位毫秒 ms, 优先级高于 delay
     * @en Delay display after mouse leave, Higher priority than delay
     */
    mouseLeaveDelay?: number;

    /**
     * trigger 是否可以关闭弹层
     * @en whether overlay can be closed by trigger
     * @defaultValue true
     */
    canCloseByTrigger?: boolean;

    /**
     * 是否跟随 trigger 滚动
     * @en follow trigger to scroll or not
     * @defaultValue false
     */
    followTrigger?: boolean;

    /**
     * 开启 v2 版本
     * @en enable v2 version
     */
    v2?: false | undefined;

    /**
     * [v2] 快捷位置
     * @en [v2] quick position
     * @defaultValue 'tr'
     */
    placement?: string;

    /**
     * 固定时是否销毁跟随底座元件
     * @en Whether to destroy the follow-the-base element when fixed
     * @skip
     */
    pinFollowBaseElementWhenFixed?: boolean;
}

/**
 * @api Overlay.Popup
 * @order 3
 */
export interface PopupV2Props extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * [v2] 浮窗被遮挡时是否自动调整位置
     * @en whether to adjust the position automatically when the overlay is covered
     */
    autoAdjust?: boolean;
    /**
     * 鼠标进入遮罩时触发的回调函数
     * @en Callback function that triggers when the mouse enters the mask
     * @skip
     */
    onMaskMouseEnter?: () => void;
    /**
     * 鼠标离开遮罩时触发的回调函数
     * @en Callback function that triggers when the mouse leaves the mask
     * @skip
     */
    onMaskMouseLeave?: () => void;
    /**
     * 弹层元素
     * @en overlay element
     * @skip
     */
    overlay?: React.ReactElement;
    /**
     * 弹层内容
     * @en content of overlay
     */
    children?: React.ReactElement;
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
     * @skip
     */
    onRequestClose?: (type: string, e: React.MouseEvent) => void;

    /**
     * 弹层定位的参照元素
     * @en reference element for overlay positioning
     */
    target?: Target;

    /**
     * 弹层相对于参照元素的定位，详见开发指南的 [定位部分](#定位)
     * @en Alignment of the overlay relative to the reference element, see [Alignment](#Alignment)
     * @defaultValue 'tl bl'
     * @skip
     */
    align?: string;

    /**
     * 弹层相对于参照元素定位的微调
     * @en Extra adjustment for trigger element. e.g. [hoz, ver] means move to right
     * @defaultValue [0, 0]
     * @skip
     */
    offset?: Array<number>;

    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @en Container of the overlay, if it is a function, it should return ref, if it is a string, it is should be the id of the DOM element, it can also be passed the DOM element directly.
     * @skip
     */
    container?: Target;
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
     * @skip
     */
    beforeOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开时触发事件的回调函数
     * @en Callback function that triggers the event when the overlay opens
     * @skip
     */
    onOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开后触发事件的回调函数，如果有动画，则在动画结束后触发
     * @en Callback function that triggers the event after the overlay opens, if enable animations, trigger after the animation ends
     * @skip
     */
    afterOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭前触发事件的回调函数
     * @en Callback function that triggers the event before the overlay closes
     * @skip
     */
    beforeClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭时触发事件的回调函数
     * @en Callback function that triggers the event when the overlay closes
     * @skip
     */
    onClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭后触发事件的回调函数，如果有动画，则在动画结束后触发
     * @en Callback function that triggers the event after the overlay closes, if enable animations, trigger after the animation ends
     * @skip
     */
    afterClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层定位完成前触发的事件
     * @en Callback function that triggers the event before the overlay positions
     * @skip
     */
    beforePosition?: (target?: React.ReactNode) => void;

    /**
     * 弹层定位完成时触发的事件
     * @en Callback function that triggers the event when the overlay positions
     * @skip
     */
    onPosition?: (
        result: { config: { placement: string; points: string }; style?: CSSCounterStyleRule },
        node?: object
    ) => void;

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
     * 配置动画的播放方式，支持 \{ in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画。请参考 Animate 组件的文档获取可用的动画名
     * @en configure animation, support the \{in: 'enter-class', out: 'leave-class' \} object parameters, if set to false, do not play the animation. Refer to Animate component documentation for available animations.
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     * @skip
     */
    animation?: string | false | Record<'in' | 'out', string> | undefined;

    /**
     * 触发弹层显示或隐藏的元素
     * @en trigger the overlay to show or hide elements
     */
    trigger?: React.ReactElement;

    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     * @en trigger the overlay to show or hide operations, either 'click', 'hover', 'focus', or an array of them, such as ['hover', 'focus']
     * @defaultValue 'hover'
     */
    triggerType?: 'click' | 'hover' | 'focus' | Array<'click' | 'hover' | 'focus'>;

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
     * 弹层显示或隐藏时触发的回调函数，v2 版本第二个参数是 event
     * @en Callback function that triggers the event when the overlay shows or hides
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
     * @en Delay time (in milliseconds) when the overlay is displayed or hidden, effective when triggerType is set to hover
     * @defaultValue 200
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示，单位毫秒 ms, 优先级高于 delay
     * @en Delay display after mouse enter, Higher priority than delay
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示，单位毫秒 ms, 优先级高于 delay
     * @en Delay display after mouse leave, Higher priority than delay
     */
    mouseLeaveDelay?: number;

    /**
     * trigger 是否可以关闭弹层
     * @en whether the trigger element can close the overlay
     * @defaultValue true
     */
    canCloseByTrigger?: boolean;

    /**
     * 是否跟随 trigger 滚动
     * @en follow trigger to scroll or not
     * @defaultValue false
     */
    followTrigger?: boolean;

    /**
     * 开启 v2 版本
     * @en enable v2 version
     */
    v2?: true;

    /**
     * [v2] 快捷位置
     * @en [v2] quick position
     * @defaultValue 'tr'
     */
    placement?: string;

    /**
     * 固定时是否销毁跟随底座元件
     * @en Whether to destroy the follow-the-base element when fixed
     * @skip
     */
    pinFollowBaseElementWhenFixed?: boolean;
}

/**
 * @api Overlay
 * @order 1
 */
export interface OverlayV1Props extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     * @en trigger the overlay to show or hide operations, either 'click', 'hover', 'focus', or an array of them, such as ['hover', 'focus']
     * @defaultValue 'hover'
     * @skip
     */
    triggerType?: 'click' | 'hover' | 'focus' | Array<'click' | 'hover' | 'focus'>;
    /**
     * 固定时是否销毁跟随底座元件
     * @en Whether to destroy the follow-the-base element when fixed
     * @skip
     */
    pinFollowBaseElementWhenFixed?: boolean;
    /**
     * 弹层子节点是否在遮罩里
     * @en Whether the overlay child node is in the mask
     * @skip
     */
    isChildrenInMask?: boolean;
    /**
     * 遮罩样式类名
     * @en Mask class name
     * @skip
     */
    maskClass?: string;
    /**
     * 鼠标离开遮罩时触发的回调函数
     * @en Callback function that triggers when the mouse leaves the mask
     * @skip
     */
    onMaskMouseLeave?: (e: React.MouseEvent) => void;
    /**
     * 鼠标进入遮罩时触发的回调函数
     * @en Callback function that triggers when the mouse enters the mask
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
     * @en content of overlay
     */
    children?: React.ReactElement & { ref?: React.RefCallback<HTMLElement> };

    /**
     * 是否显示弹层
     * @en whether to show the overlay
     * @defaultValue false
     */
    visible?: boolean;

    /**
     * 弹层请求关闭时触发事件的回调函数，v2 版本第一个参数是 event
     * @en callback function that triggers an event when the overlay request closed
     */
    onRequestClose?: (type: string, e: Event | React.MouseEvent<Element>) => void;

    /**
     * 弹层定位的参照元素
     * @en reference element for overlay positioning
     * @defaultValue Position.VIEWPORT
     */
    target?: Target;
    /**
     * 弹层相对于参照元素的定位，详见开发指南的 [定位部分](#定位)
     * @en alignment of the overlay relative to the reference element, see [Alignment](#Alignment)
     * @defaultValue 'tl bl'
     */
    align?: string | boolean;

    /**
     * 弹层相对于 trigger 的定位的微调，接收数组 [hoz, ver], 表示弹层在 left / top 上的增量 e.g. [100, 100] 表示往右 (RTL 模式下是往左) 、下分布偏移 100px
     * @en Fine-tuning the positioning of the elastic layer relative to the trigger, receiving array [hoz, ver], indicating the increment of the elastic layer on the left / top e.g. [100, 100] means moving to the right (to the left in RTL mode) and downward distribution Move 100px
     * @defaultValue [0, 0]
     */
    offset?: Array<number>;

    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @en container of the overlay, if it is a function, it should return ref, if it is a string, it is should be the id of the DOM element, it can also be passed the DOM element directly.
     */
    container?: Target;

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
     */
    beforeOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开时触发事件的回调函数
     * @en callback function that triggers the event when the overlay opens
     */
    onOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开后触发事件的回调函数，如果有动画，则在动画结束后触发
     * @en callback function that triggers the event after the overlay opens, if enable animations, trigger after the animation ends
     */
    afterOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭前触发事件的回调函数
     * @en callback function that triggers the event before the overlay closes
     */
    beforeClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭时触发事件的回调函数
     * @en callback function that triggers the event when the overlay closes
     */
    onClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭后触发事件的回调函数，如果有动画，则在动画结束后触发
     * @en callback function that triggers the event after the overlay closes, if enable animations, trigger after the animation ends
     */
    afterClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层定位完成前触发的事件
     * @en callback function that triggers the event before the overlay positions

     */
    beforePosition?: () => void;

    /**
     * 弹层定位完成时触发的事件
     * @en callback function that triggers the event when the overlay positions
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
     * 配置动画的播放方式，支持 \{ in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画。请参考 Animate 组件的文档获取可用的动画名
     * @en configure animation, support the \{in: 'enter-class', out: 'leave-class' \} object parameters, if set to false, do not play the animation. Refer to Animate component documentation for available animations.
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     */
    animation?: string | boolean | AnimationObjectType | undefined;
    /**
     * 开启 v2 版本
     * @en enable v2
     * @defaultValue false
     * @version 1.25
     */
    v2?: false | undefined;
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

/**
 * @api Overlay V2
 * @order 2
 */
export interface OverlayV2Props extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     * @en trigger the overlay to show or hide operations, either 'click', 'hover', 'focus', or an array of them, such as ['hover', 'focus']
     * @defaultValue 'hover'
     * @skip
     */
    triggerType?: 'click' | 'hover' | 'focus' | Array<'click' | 'hover' | 'focus'>;
    /**
     * 固定时是否销毁跟随底座元件
     * @en Whether to destroy the follow-the-base element when fixed
     * @skip
     */
    pinFollowBaseElementWhenFixed?: boolean;
    /**
     * 弹层子节点是否在遮罩里
     * @en Whether the overlay child node is in the mask
     * @skip
     */
    isChildrenInMask?: boolean;
    /**
     * 遮罩样式类名
     * @en Mask class name
     * @skip
     */
    maskClass?: string;
    /**
     * 鼠标离开遮罩时触发的回调函数
     * @en Callback function that triggers when the mouse leaves the mask
     * @skip
     */
    onMaskMouseLeave?: (e: React.MouseEvent) => void;
    /**
     * 鼠标进入遮罩时触发的回调函数
     * @en Callback function that triggers when the mouse enters the mask
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
     * @en content of overlay
     */
    children?: React.ReactElement & { ref?: React.RefCallback<HTMLElement> };

    /**
     * 是否显示弹层
     * @en whether to show the overlay
     * @defaultValue false
     */
    visible?: boolean;

    /**
     * 弹层请求关闭时触发事件的回调函数，v2 版本第一个参数是 event
     * @en callback function that triggers an event when the overlay request closed
     */
    onRequestClose?: (type: string, e: Event | React.MouseEvent<Element>) => void;

    /**
     * 弹层定位的参照元素
     * @en reference element for overlay positioning
     * @defaultValue Position.VIEWPORT
     */
    target?: Target;
    /**
     * 弹层相对于参照元素的定位，详见开发指南的 [定位部分](#定位)
     * @en alignment of the overlay relative to the reference element, see [Alignment](#Alignment)
     * @defaultValue 'tl bl'
     */
    align?: string;

    /**
     * 弹层相对于 trigger 的定位的微调，接收数组 [hoz, ver], 表示弹层在 left / top 上的增量 e.g. [100, 100] 表示往右 (RTL 模式下是往左) 、下分布偏移 100px
     * @en Fine-tuning the positioning of the elastic layer relative to the trigger, receiving array [hoz, ver], indicating the increment of the elastic layer on the left / top e.g. [100, 100] means moving to the right (to the left in RTL mode) and downward distribution Move 100px
     * @defaultValue [0, 0]
     */
    offset?: Array<number>;

    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @en container of the overlay, if it is a function, it should return ref, if it is a string, it is should be the id of the DOM element, it can also be passed the DOM element directly.
     */
    container?: Target;

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
     */
    beforeOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开时触发事件的回调函数
     * @en callback function that triggers the event when the overlay opens
     */
    onOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层打开后触发事件的回调函数，如果有动画，则在动画结束后触发
     * @en callback function that triggers the event after the overlay opens, if enable animations, trigger after the animation ends
     */
    afterOpen?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭前触发事件的回调函数
     * @en callback function that triggers the event before the overlay closes
     */
    beforeClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭时触发事件的回调函数
     * @en callback function that triggers the event when the overlay closes
     */
    onClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层关闭后触发事件的回调函数，如果有动画，则在动画结束后触发
     * @en callback function that triggers the event after the overlay closes, if enable animations, trigger after the animation ends
     */
    afterClose?: (target?: React.ReactNode) => void;

    /**
     * 弹层定位完成前触发的事件
     * @en callback function that triggers the event before the overlay positions

     */
    beforePosition?: () => void;

    /**
     * 弹层定位完成时触发的事件
     * @en callback function that triggers the event when the overlay positions
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
     * @deprecated v2 废弃 - v2 deprecated
     * @skip
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
     * 配置动画的播放方式，支持 \{ in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画。请参考 Animate 组件的文档获取可用的动画名
     * @en configure animation, support the \{in: 'enter-class', out: 'leave-class' \} object parameters, if set to false, do not play the animation. Refer to Animate component documentation for available animations.
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     */
    animation?: string | false | AnimationObjectType | undefined;
    /**
     * 开启 v2 版本
     * @en enable v2
     * @defaultValue false
     * @version 1.25
     */
    v2?: true;
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

export type OverlayProps = OverlayV1Props | OverlayV2Props;

export type PopupProps = PopupV1Props | PopupV2Props;

export interface OverlayState {
    visible?: boolean;
    status?: string;
    animation?: string | boolean | AnimationObjectType | undefined;
    willOpen?: boolean;
    willClose?: boolean;
}

export interface PopupState {
    visible?: boolean;
}

/**
 * @api Overlay.Position
 * @order 4
 */
export interface PositionProps {
    /**
     * 弹层内容
     * @en content of overlay
     */
    children?: React.ReactElement;
    /**
     * 弹层定位的参照元素
     * @en reference element for overlay positioning
     */
    target?: Target | 'viewport';
    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @en Container of the overlay, if it is a function, it should return ref, if it is a string, it is should be the id of the DOM element, it can also be passed the DOM element directly.
     * @skip
     */
    container?: Target;
    /**
     * 弹层相对于参照元素的定位，详见开发指南的 [定位部分](#定位)
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
    offset: Array<number>;
    /**
     * 弹层定位完成前触发的事件
     * @en Callback function that triggers the event before the overlay positions
     * @skip
     */
    beforePosition: () => void;
    /**
     * 弹层定位完成时触发的事件
     * @en Callback function that triggers the event when the overlay positions
     * @skip
     */
    onPosition: (config: object, node?: object) => void;
    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     * @en When the overlay is not visible due to scrolling of the page, does it automatically adjust the position to appear in the visible area? in v2
     * @defaultValue true
     * @skip
     */
    needAdjust?: boolean;
    /**
     * 弹层是否自适应内容
     * @en whether the overlay is automatically adapted to the content
     * @defaultValue false
     * @skip
     */
    autoFit?: boolean;
    /**
     * 弹层是否需要监听调整大小
     * @en whether the overlay needs to listen to adjusting size
     * @skip
     */
    needListenResize?: boolean;
    /**
     * 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式
     * @en Whether to force the update of positioning after each rerendered, which is generally used to maintain the original positioning when the size of the content area changes.
     * @defaultValue false
     * @skip
     */
    shouldUpdatePosition?: boolean;
    /**
     * 从右到左模式
     * @en right to left mode
     * @defaultValue false
     * @skip
     */
    rtl?: boolean;
    /**
     * 弹层固定元素
     * @en fixed element
     * @skip
     */
    pinElement?: HTMLElement;
    /**
     * 弹层基础元素
     * @en basic element
     * @skip
     */
    baseElement?: HTMLElement;
    /**
     * 固定元素是否开启跟随基础元素定位
     * @en Whether the fixed element is enabled to follow the basic element location
     * @skip
     */
    pinFollowBaseElementWhenFixed?: boolean;
    /**
     * 是否为从右到左模式
     * @en whether it is from right to left mode
     * @defaultValue false
     * @skip
     */
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

/**
 * @api Overlay.Gateway
 * @order 5
 */
export interface GatewayProps {
    /**
     * 弹层内容
     * @en content of overlay
     */
    children?: null | (React.ReactElement & { ref?: React.RefCallback<HTMLElement> | string });
    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @en Container of the overlay, if it is a function, it should return ref, if it is a string, it is should be the id of the DOM element, it can also be passed the DOM element directly.
     * @skip
     */
    container?: Target;
    /**
     * 弹层定位的参照元素
     * @en reference element for overlay positioning
     */
    target?: Target;
}

export interface GatewayState {
    containerNode: React.ReactElement | Element | Text | null;
}
