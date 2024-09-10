import type {
    ComponentPropsWithRef,
    CSSProperties,
    MouseEventHandler,
    ReactElement,
    ReactNode,
} from 'react';
import type { CommonProps } from '../util';
import Overlay, { type PopupProps } from '../overlay';

import type { Locale } from '../locale/types';

const { Popup } = Overlay;
interface HTMLAttributesWeak extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {}

/**
 * @api Balloon V2
 * @order 0
 */
export interface BalloonV2Props extends HTMLAttributesWeak, CommonProps {
    /**
     * 开启 v2 版本
     * @en Enable v2
     * @version 1.25
     */
    v2?: true;
    /**
     * 是否 pure render
     * @en Whether to pure render
     * @skip
     */
    pure?: boolean;

    /**
     * 是否开启 rtl
     * @en Whether to enable rtl
     * @skip
     */
    rtl?: boolean;

    /**
     * 自定义内联样式
     * @en Custom inline style
     * @skip
     */
    style?: CSSProperties;

    /**
     * 浮层的内容
     * @en Content of popup
     */
    children?: ReactNode;

    /**
     * 弹层的尺寸
     * @en Size of popup
     * @skip
     */
    size?: string;

    /**
     * 样式类型
     * @en Style type
     * @version 1.23
     * @defaultValue 'normal'
     */
    type?: 'normal' | 'primary';

    /**
     * 标题
     * @en Title
     * @version 1.23
     */
    title?: ReactNode;

    /**
     * 弹层当前显示的状态
     * @en Popup current display status
     */
    visible?: boolean;

    /**
     * 弹层默认显示的状态
     * @en Popup default display status
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 弹层关闭时触发的事件
     * @en Popup close event
     * @skip
     * @deprecated use onVisibleChange instead
     */
    onCloseClick?: () => void;

    /**
     * 弹层在显示和隐藏触发的事件
     * @en Popup display and hide event
     * @param visible - 弹层是否隐藏和显示 - wether the popup is hidden or displayed
     * @param type - 触发弹层显示或隐藏的来源，closeClick 表示由自带的关闭按钮触发；fromTrigger 表示由 trigger 的点击触发；docClick 表示由 document 的点击触发 - source of trigger popup display or hide, closeClick means triggered by the close button; fromTrigger means triggered by the trigger click; docClick means triggered by the document click
     */
    onVisibleChange?: (visible: boolean, type: string) => void;

    /**
     * [v2] 箭头是否指向目标元素的中心
     * @en Whether the arrow points to the center of the target element
     * @version 1.25
     * @defaultValue false
     */
    arrowPointToCenter?: boolean;

    /**
     * [v2] 弹层偏离触发元素的像素值
     * @en Popup offset
     */
    placementOffset?: number;

    /**
     * 弹出层对齐方式
     * @en Popup alignment
     * @skip
     */
    alignEdge?: boolean;

    /**
     * 是否显示关闭按钮
     * @en Whether to display close button
     * @defaultValue true
     */
    closable?: boolean;

    /**
     * 弹出层位置
     * @en Position of popup
     * @defaultValue 'b'
     */
    align?: AlignType;

    /**
     * 弹出层位置
     * @en Position of popup
     * @skip
     * @deprecated use alignEdge instead
     */
    alignment?: string;

    /**
     * 弹层相对于 trigger 的定位的微调，接收数组 [hoz, ver], 表示弹层在 left / top 上的增量，e.g. [100, 100] 表示往右 (RTL 模式下是往左) 、下分布偏移 100px
     * @en Tuning of popup relative to trigger, receive an array [hoz, ver], indicating the offset of the popup on left / top, e.g. [100, 100] means to the right (in RTL mode, it is to the left) and downward offset 100px
     * @defaultValue [0, 0]
     */
    offset?: Array<number>;

    /**
     * 触发元素
     * @en Trigger element
     * @defaultValue <span/>
     */
    trigger?: ReactElement | string;

    /**
     * 触发行为，鼠标悬浮，鼠标点击 ('hover','click') 或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用 click
     * @en Trigger behavior, mouse hover, mouse click ('hover','click') or an array of them, e.g. ['hover', 'click'], strongly not recommended to use 'focus', if the popup content has complex interactions, it is recommended to use click
     * @defaultValue 'hover'
     */
    triggerType?: 'hover' | 'click' | 'focus' | ('hover' | 'click' | 'focus')[];

    /**
     * 点击事件
     * @en Click event
     * @skip
     */
    onClick?: () => void;

    /**
     * hover 事件
     * @en hover event
     * @skip
     */
    onHover?: () => void;

    /**
     * 任何 visible 为 false 时会触发的事件
     * @en Any event triggered when visible is false
     */
    onClose?: () => void;

    /**
     * [v2] 是否进行自动位置调整，默认自动开启
     * @en Whether to perform automatic position adjustment, default automatic opening
     * @version 1.25
     */
    autoAdjust?: boolean;

    /**
     * 是否进行自动位置调整
     * @en Whether to perform automatic position adjustment
     * @skip
     */
    needAdjust?: boolean;

    /**
     * 弹层在触发以后的延时显示，单位毫秒 ms
     * @en Popup delay display
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示，单位毫秒 ms
     * @en Mouse delay display
     * @skip
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示，单位毫秒 ms
     * @en Mouse delay display
     * @skip
     */
    mouseLeaveDelay?: number;

    /**
     * 浮层关闭后触发的事件，如果有动画，则在动画结束后触发
     * @en Popup close event
     */
    afterClose?: () => void;

    /**
     * 强制更新定位信息
     * @en Force update location information
     * @skip
     */
    shouldUpdatePosition?: boolean;

    /**
     * 弹层出现后是否自动 focus 到内部第一个元素
     * @en Whether to automatically focus to the internal first element
     * @defaultValue true
     */
    autoFocus?: boolean;

    /**
     * 安全节点：对于 triggetType 为 click 的浮层，会在点击除了浮层外的其它区域时关闭浮层.safeNode 用于添加不触发关闭的节点，值可以是 dom 节点的 id 或者是节点的 dom 对象
     * @en Safe node: for the popup with triggerType set to click, the popup will be closed when clicking on other areas other than the popup
     */
    safeNode?: string | ReactNode;

    /**
     * 用来指定 safeNode 节点的 id，和 safeNode 配合使用
     * @en Used to specify the id of the safeNode node, and combined with safeNode
     * @defaultValue null
     */
    safeId?: string;

    /**
     * 配置动画的播放方式，格式是 \{ in: '', out: '' \}，常用的动画 class 请查看 Animate 组件文档
     * @en Configure the playback method of the animation, the format is \{ in: '', out: '' \}, commonly used animation class please see the documentation of the Animate component
     * @param in - 进场动画
     * @param out - 出场动画
     * @defaultValue \{ in: 'zoomIn zoomInBig', out: 'zoomOut zoomOutBig', \}
     */
    animation?: string | false | Record<'in' | 'out', string>;

    /**
     * 弹层的 dom 节点关闭时是否删除
     * @en Whether to delete the dom node of the popup when it is closed
     * @defaultValue false
     */
    cache?: boolean;

    /**
     * 指定浮层渲染的父节点，可以为节点 id 的字符串，也可以返回节点的函数。
     * @en Specify the parent node of the floating layer that is rendered, which can be a string of node id, or a function that returns a node
     */
    popupContainer?: PopupProps['container'];

    /**
     * 容器
     * @en Container
     * @skip
     */
    container?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层组件 style，透传给 Popup
     * @en Popup style
     */
    popupStyle?: CSSProperties;

    /**
     * 弹层组件 className，透传给 Popup
     * @en Popup className
     */
    popupClassName?: string;

    /**
     * 弹层组件属性，透传给 Popup
     * @en Popup props
     */
    popupProps?: ComponentPropsWithRef<typeof Popup>;

    /**
     * 跟随滚动
     * @en Follow scrolling
     */
    followTrigger?: boolean;

    /**
     * 弹层 id, 传入值才会支持无障碍
     * @en Popup id, if passed value will support accessibility
     */
    id?: string;
}
export type BalloonProps = BalloonV1Props | BalloonV2Props;
/**
 * @api Balloon V1
 * @order 1
 */
export interface BalloonV1Props extends HTMLAttributesWeak, CommonProps {
    /**
     * 开启 v2 版本
     * @en Enable v2
     * @version 1.25
     */
    v2?: false | undefined;
    /**
     * 是否 pure render
     * @en Whether to pure render
     * @skip
     */
    pure?: boolean;

    /**
     * 是否开启 rtl
     * @en Whether to enable rtl
     * @skip
     */
    rtl?: boolean;

    /**
     * 自定义内联样式
     * @en Custom inline style
     * @skip
     */
    style?: CSSProperties;

    /**
     * 浮层的内容
     * @en Content of popup
     */
    children?: ReactNode;

    /**
     * 标题
     * @en Title
     * @version 1.23
     */
    title?: ReactNode;

    /**
     * 弹层的尺寸
     * @en Size of popup
     * @skip
     */
    size?: string;

    /**
     * 样式类型
     * @en Style type
     * @version 1.23
     * @defaultValue 'normal'
     */
    type?: 'normal' | 'primary';

    /**
     * 弹层当前显示的状态
     * @en Popup current display status
     */
    visible?: boolean;

    /**
     * 弹层默认显示的状态
     * @en Popup default display status
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 弹层关闭时触发的事件
     * @en Popup close event
     * @skip
     * @deprecated use onVisibleChange instead
     */
    onCloseClick?: () => void;

    /**
     * 弹层在显示和隐藏触发的事件
     * @en Popup display and hide event
     * @param visible - 弹层是否隐藏和显示 - wether the popup is hidden or displayed
     * @param type - 触发弹层显示或隐藏的来源，closeClick 表示由自带的关闭按钮触发；fromTrigger 表示由 trigger 的点击触发；docClick 表示由 document 的点击触发 - source of trigger popup display or hide, closeClick means triggered by the close button; fromTrigger means triggered by the trigger click; docClick means triggered by the document click
     */
    onVisibleChange?: (visible: boolean, type: string) => void;

    /**
     * 弹出层对齐方式
     * @en Popup alignment
     * @skip
     */
    alignEdge?: boolean;

    /**
     * 是否显示关闭按钮
     * @en Whether to display close button
     * @defaultValue true
     */
    closable?: boolean;

    /**
     * 弹出层位置
     * @en Position of popup
     * @defaultValue 'b'
     */
    align?: AlignType;

    /**
     * 弹出层位置
     * @en Position of popup
     * @skip
     * @deprecated use alignEdge instead
     */
    alignment?: string;

    /**
     * 弹层相对于 trigger 的定位的微调，接收数组 [hoz, ver], 表示弹层在 left / top 上的增量，e.g. [100, 100] 表示往右 (RTL 模式下是往左) 、下分布偏移 100px
     * @en Tuning of popup relative to trigger, receive an array [hoz, ver], indicating the offset of the popup on left / top, e.g. [100, 100] means to the right (in RTL mode, it is to the left) and downward offset 100px
     * @defaultValue [0, 0]
     */
    offset?: Array<number>;

    /**
     * 触发元素
     * @en Trigger element
     * @defaultValue <span/>
     */
    trigger?: ReactElement | string;

    /**
     * 触发行为，鼠标悬浮，鼠标点击 ('hover','click') 或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用 click
     * @en Trigger behavior, mouse hover, mouse click ('hover','click') or an array of them, e.g. ['hover', 'click'], strongly not recommended to use 'focus', if the popup content has complex interactions, it is recommended to use click
     * @defaultValue 'hover'
     */
    triggerType?: 'hover' | 'click' | 'focus' | ('hover' | 'click' | 'focus')[];

    /**
     * 点击事件
     * @en Click event
     * @skip
     */
    onClick?: () => void;

    /**
     * hover 事件
     * @en hover event
     * @skip
     */
    onHover?: () => void;

    /**
     * 任何 visible 为 false 时会触发的事件
     * @en Any event triggered when visible is false
     */
    onClose?: () => void;

    /**
     * 是否进行自动位置调整
     * @en Whether to perform automatic position adjustment
     * @skip
     */
    needAdjust?: boolean;

    /**
     * 弹层在触发以后的延时显示，单位毫秒 ms
     * @en Popup delay display
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示，单位毫秒 ms
     * @en Mouse delay display
     * @skip
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示，单位毫秒 ms
     * @en Mouse delay display
     * @skip
     */
    mouseLeaveDelay?: number;

    /**
     * 浮层关闭后触发的事件，如果有动画，则在动画结束后触发
     * @en Popup close event
     */
    afterClose?: () => void;

    /**
     * 强制更新定位信息
     * @en Force update location information
     * @skip
     */
    shouldUpdatePosition?: boolean;

    /**
     * 弹层出现后是否自动 focus 到内部第一个元素
     * @en Whether to automatically focus to the internal first element
     * @defaultValue true
     */
    autoFocus?: boolean;

    /**
     * 安全节点：对于 triggetType 为 click 的浮层，会在点击除了浮层外的其它区域时关闭浮层.safeNode 用于添加不触发关闭的节点，值可以是 dom 节点的 id 或者是节点的 dom 对象
     * @en Safe node: for the popup with triggerType set to click, the popup will be closed when clicking on other areas other than the popup
     */
    safeNode?: string | ReactNode;

    /**
     * 用来指定 safeNode 节点的 id，和 safeNode 配合使用
     * @en Used to specify the id of the safeNode node, and combined with safeNode
     * @defaultValue null
     */
    safeId?: string;

    /**
     * 配置动画的播放方式，格式是 \{ in: '', out: '' \}，常用的动画 class 请查看 Animate 组件文档
     * @en Configure the playback method of the animation, the format is \{ in: '', out: '' \}, commonly used animation class please see the documentation of the Animate component
     * @param in - 进场动画
     * @param out - 出场动画
     * @defaultValue \{ in: 'zoomIn zoomInBig', out: 'zoomOut zoomOutBig', \}
     */
    animation?: string | false | Record<'in' | 'out', string>;

    /**
     * 弹层的 dom 节点关闭时是否删除
     * @en Whether to delete the dom node of the popup when it is closed
     * @defaultValue false
     */
    cache?: boolean;

    /**
     * 指定浮层渲染的父节点，可以为节点 id 的字符串，也可以返回节点的函数。
     * @en Specify the parent node of the floating layer that is rendered, which can be a string of node id, or a function that returns a node
     */
    popupContainer?: PopupProps['container'];

    /**
     * 容器
     * @en Container
     * @skip
     */
    container?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层组件 style，透传给 Popup
     * @en Popup style
     */
    popupStyle?: CSSProperties;

    /**
     * 弹层组件 className，透传给 Popup
     * @en Popup className
     */
    popupClassName?: string;

    /**
     * 弹层组件属性，透传给 Popup
     * @en Popup props
     */
    popupProps?: ComponentPropsWithRef<typeof Popup>;

    /**
     * 跟随滚动
     * @en Follow scrolling
     */
    followTrigger?: boolean;

    /**
     * 弹层 id, 传入值才会支持无障碍
     * @en Popup id, if passed value will support accessibility
     */
    id?: string;
}

/**
 * @api Balloon.Tooltip V2
 * @order 2
 */
export interface TooltipV2Props extends HTMLAttributesWeak, CommonProps {
    /**
     * 开启 v2
     * @en Enable v2
     */
    v2?: true;

    /**
     * 自定义内联样式
     * @en Custom inline style
     * @skip
     */
    style?: CSSProperties;

    /**
     * tooltip 的内容
     * @en Content of tooltip
     */
    children?: ReactNode;

    /**
     * 弹出层位置
     * @en Position of popup
     * @defaultValue 'b'
     */
    align?: AlignType;

    /**
     * 弹出层位置
     * @en Position of popup
     * @skip
     * @deprecated use align instead
     */
    placement?: AlignType;

    /**
     * 触发元素
     * @en Trigger element
     * @defaultValue <span/>
     */
    trigger?: ReactElement | string;

    /**
     * 触发行为，鼠标悬浮，鼠标点击 ('hover', 'click') 或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用 triggerType 为 click 的 Balloon 组件
     * @en Trigger behavior, mouse hover, mouse click ('hover', 'click') or an array of them, e.g. ['hover', 'click'], strongly not recommended to use 'focus', if the popup content has complex interactions, it is recommended to use the Balloon component with triggerType set to click
     * @defaultValue 'hover'
     */
    triggerType?: 'hover' | 'click' | 'focus' | ('hover' | 'click' | 'focus')[];

    /**
     * 弹层组件 style，透传给 Popup
     * @en Popup style
     */
    popupStyle?: CSSProperties;

    /**
     * 弹层组件 className，透传给 Popup
     * @en Popup className
     */
    popupClassName?: string;

    /**
     * 弹层组件属性，透传给 Popup
     * @en Popup props
     */
    popupProps?: ComponentPropsWithRef<typeof Popup>;

    /**
     * 是否 pure render
     * @en Whether to pure render
     */
    pure?: boolean;

    /**
     * 指定浮层渲染的父节点，可以为节点 id 的字符串，也可以返回节点的函数。
     * @en Specify the parent node of the floating layer that is rendered, which can be a string of node id, or a function that returns a node
     */
    popupContainer?: PopupProps['container'];

    /**
     * 是否跟随滚动
     * @en Whether to follow scrolling
     */
    followTrigger?: boolean;

    /**
     * 弹层 id, 传入值才会支持无障碍
     * @en Popup id, if passed value will support accessibility
     */
    id?: string;

    /**
     * 如果需要让 Tooltip 内容可被点击，可以设置这个参数，例如 100px
     * @en If needed, set this parameter to allow the Tooltip content to be clicked, e.g. 100px
     * @defaultValue 50
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示，单位毫秒 ms
     * @en Delay display after mouse
     * @skip
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示，单位毫秒 ms
     * @en Delay display after mouse
     * @skip
     */
    mouseLeaveDelay?: number;

    /**
     * 是否自动 focus
     * @en Whether to automatically focus
     * @skip
     */
    autoFocus?: boolean;

    /**
     * 弹出层对齐方式
     * @en Popup alignment
     * @skip
     */
    alignEdge?: boolean;

    /**
     * 是否自动调整
     * @en Whether to automatically adjust
     * @skip
     */
    autoAdjust?: boolean;

    /**
     * 是否开启 rtl
     * @en Whether to enable rtl
     * @skip
     */
    rtl?: boolean;

    /**
     * 弹出层是否显示
     * @en Popup is displayed
     * @skip
     */
    visible?: boolean;

    /**
     * 组件内容
     * @en Component content
     * @deprecated Use children instead
     * @skip
     */
    text?: ReactNode;

    /**
     * [v2] 箭头是否指向目标元素的中心
     * @en Whether the arrow points to the center of the target element
     * @defaultValue false
     */
    arrowPointToCenter?: boolean;
}

/**
 * @api Balloon.Tooltip V1
 * @order 3
 */
export interface TooltipV1Props extends HTMLAttributesWeak, CommonProps {
    /**
     * 开启 v2
     * @en Enable v2
     */
    v2?: false | undefined;

    /**
     * 自定义内联样式
     * @en Custom inline style
     * @skip
     */
    style?: CSSProperties;

    /**
     * tooltip 的内容
     * @en Content of tooltip
     */
    children?: ReactNode;

    /**
     * 弹出层位置
     * @en Position of popup
     * @defaultValue 'b'
     */
    align?: AlignType;

    /**
     * 弹出层位置
     * @en Position of popup
     * @skip
     * @deprecated use align instead
     */
    placement?: AlignType;

    /**
     * 触发元素
     * @en Trigger element
     * @defaultValue <span/>
     */
    trigger?: ReactElement | string;

    /**
     * 触发行为，鼠标悬浮，鼠标点击 ('hover', 'click') 或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用 triggerType 为 click 的 Balloon 组件
     * @en Trigger behavior, mouse hover, mouse click ('hover', 'click') or an array of them, e.g. ['hover', 'click'], strongly not recommended to use 'focus', if the popup content has complex interactions, it is recommended to use the Balloon component with triggerType set to click
     * @defaultValue 'hover'
     */
    triggerType?: 'hover' | 'click' | 'focus' | ('hover' | 'click' | 'focus')[];

    /**
     * 弹层组件 style，透传给 Popup
     * @en Popup style
     */
    popupStyle?: CSSProperties;

    /**
     * 弹层组件 className，透传给 Popup
     * @en Popup className
     */
    popupClassName?: string;

    /**
     * 弹层组件属性，透传给 Popup
     * @en Popup props
     */
    popupProps?: ComponentPropsWithRef<typeof Popup>;

    /**
     * 是否 pure render
     * @en Whether to pure render
     */
    pure?: boolean;

    /**
     * 指定浮层渲染的父节点，可以为节点 id 的字符串，也可以返回节点的函数。
     * @en Specify the parent node of the floating layer that is rendered, which can be a string of node id, or a function that returns a node
     */
    popupContainer?: PopupProps['container'];

    /**
     * 是否跟随滚动
     * @en Whether to follow scrolling
     */
    followTrigger?: boolean;

    /**
     * 弹层 id, 传入值才会支持无障碍
     * @en Popup id, if passed value will support accessibility
     */
    id?: string;

    /**
     * 如果需要让 Tooltip 内容可被点击，可以设置这个参数，例如 100px
     * @en If needed, set this parameter to allow the Tooltip content to be clicked, e.g. 100px
     * @defaultValue 50
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示，单位毫秒 ms
     * @en Delay display after mouse
     * @skip
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示，单位毫秒 ms
     * @en Delay display after mouse
     * @skip
     */
    mouseLeaveDelay?: number;

    /**
     * 是否自动 focus
     * @en Whether to automatically focus
     * @skip
     */
    autoFocus?: boolean;

    /**
     * 弹出层对齐方式
     * @en Popup alignment
     * @skip
     */
    alignEdge?: boolean;

    /**
     * 是否自动调整
     * @en Whether to automatically adjust
     * @skip
     */
    autoAdjust?: boolean;

    /**
     * 是否开启 rtl
     * @en Whether to enable rtl
     * @skip
     */
    rtl?: boolean;

    /**
     * 弹出层是否显示
     * @en Popup is displayed
     * @skip
     */
    visible?: boolean;

    /**
     * 组件内容
     * @en Component content
     * @deprecated Use children instead
     * @skip
     */
    text?: ReactNode;
}
export type TooltipProps = TooltipV1Props | TooltipV2Props;
export interface TooltipState {
    align?: AlignType;
    innerAlign: boolean;
}

export type AlignType =
    | 't'
    | 'r'
    | 'b'
    | 'l'
    | 'tl'
    | 'tr'
    | 'bl'
    | 'br'
    | 'lt'
    | 'lb'
    | 'rt'
    | 'rb';

export interface BalloonState {
    visible?: boolean;
    align?: AlignType;
    innerAlign?: boolean;
}

export interface BalloonInnerProps extends HTMLAttributesWeak, CommonProps {
    rtl?: boolean;
    closable?: boolean;
    children?: ReactNode;
    title?: ReactNode;
    alignEdge: boolean;
    onClose: MouseEventHandler<HTMLAnchorElement>;
    style?: CSSProperties;
    align: AlignType;
    type: string;
    isTooltip?: boolean;
    pure: boolean;
    v2?: boolean;
    id?: string;
    locale: Locale['Balloon'];
    text?: ReactNode;
}
