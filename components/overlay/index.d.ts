/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

export interface PopupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 弹层内容
     */
    children?: React.ReactNode;
    autoFit?: boolean;

    /**
     * 弹层当前是否显示
     */
    visible?: boolean;

    /**
     * 弹层请求关闭时触发事件的回调函数
     */
    onRequestClose?: (type: string, e: React.MouseEvent) => void;

    /**
     * 弹层定位的参照元素
     */
    target?: any;

    /**
     * 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)
     */
    align?: string | boolean;

    /**
     * 弹层相对于参照元素定位的微调
     */
    offset?: Array<any>;

    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     */
    container?: any;

    /**
     * 是否显示遮罩
     */
    hasMask?: boolean;

    /**
     * 是否支持 esc 按键关闭弹层
     */
    canCloseByEsc?: boolean;

    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     */
    canCloseByOutSideClick?: boolean;

    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     */
    canCloseByMask?: boolean;

    /**
     * 弹层打开前触发事件的回调函数
     */
    beforeOpen?: () => void;

    /**
     * 弹层打开时触发事件的回调函数
     */
    onOpen?: () => void;

    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterOpen?: () => void;

    /**
     * 弹层关闭前触发事件的回调函数
     */
    beforeClose?: () => void;

    /**
     * 弹层关闭时触发事件的回调函数
     */
    onClose?: () => void;

    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterClose?: () => void;

    /**
     * 弹层定位完成前触发的事件
     */
    beforePosition?: () => void;

    /**
     * 弹层定位完成时触发的事件
     */
    onPosition?: (config: {}, node: {}) => void;

    /**
     * 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式
     */
    shouldUpdatePosition?: boolean;

    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     */
    autoFocus?: boolean;

    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     */
    needAdjust?: boolean;

    /**
     * 是否禁用页面滚动
     */
    disableScroll?: boolean;

    /**
     * 隐藏时是否保留子节点
     */
    cache?: boolean;

    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     */
    safeNode?: any;

    /**
     * 弹层的根节点的样式类
     */
    wrapperClassName?: string;

    /**
     * 弹层的根节点的内联样式
     */
    wrapperStyle?: React.CSSProperties;

    /**
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名
     */
    animation?: any | boolean;

    /**
     * 触发弹层显示或隐藏的元素
     */
    trigger?: React.ReactElement<any>;

    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     */
    triggerType?: string | Array<any>;

    /**
     * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
     */
    triggerClickKeycode?: number | Array<any>;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层显示或隐藏时触发的回调函数, v2 版本第二个参数是 event
     */
    onVisibleChange?: (visible: boolean, type: string | object, e?: {}) => void;

    /**
     * 设置此属性，弹层无法显示或隐藏
     */
    disabled?: boolean;

    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     */
    delay?: number;

    /**
     * trigger 是否可以关闭弹层
     */
    canCloseByTrigger?: boolean;

    /**
     * 是否跟随trigger滚动
     */
    followTrigger?: boolean;

    /**
     * 开启 v2 版本
     */
    v2?: boolean;

    /**
     * [v2可用]
     * 快捷位置
     */
    placement?: string;

    pinFollowBaseElementWhenFixed?: boolean;
}

export class Popup extends React.Component<PopupProps, any> {}
export interface OverlayProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 弹层内容
     */
    children?: any;

    /**
     * 是否显示弹层
     */
    visible?: boolean;

    /**
     * 弹层请求关闭时触发事件的回调函数, v2 版本第一个参数是 event
     */
    onRequestClose?: (type: string | object, e: React.MouseEvent) => void;

    /**
     * 弹层定位的参照元素
     */
    target?: any;

    /**
     * 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)
     */
    align?: string | boolean;

    /**
     * 弹层相对于参照元素定位的微调
     */
    offset?: Array<any>;

    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     */
    container?: any;

    /**
     * 是否显示遮罩
     */
    hasMask?: boolean;

    /**
     * 是否支持 esc 按键关闭弹层
     */
    canCloseByEsc?: boolean;

    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     */
    canCloseByOutSideClick?: boolean;

    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     */
    canCloseByMask?: boolean;

    /**
     * 弹层打开前触发事件的回调函数
     */
    beforeOpen?: () => void;

    /**
     * 弹层打开时触发事件的回调函数
     */
    onOpen?: () => void;

    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterOpen?: () => void;

    /**
     * 弹层关闭前触发事件的回调函数
     */
    beforeClose?: () => void;

    /**
     * 弹层关闭时触发事件的回调函数
     */
    onClose?: () => void;

    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterClose?: () => void;

    /**
     * 弹层定位完成前触发的事件
     */
    beforePosition?: () => void;

    /**
     * 弹层定位完成时触发的事件
     */
    onPosition?: (config: {}, node: {}) => void;

    /**
     * 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式
     */
    shouldUpdatePosition?: boolean;

    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     */
    autoFocus?: boolean;

    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     * @depreacted in v2
     */
    needAdjust?: boolean;

    /**
     * 浮窗被遮挡时是否自动调整位置
     */
    autoAdjust?: boolean;

    /**
     * 是否禁用页面滚动
     */
    disableScroll?: boolean;

    /**
     * 隐藏时是否保留子节点
     */
    cache?: boolean;

    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     */
    safeNode?: any;

    /**
     * 弹层的根节点的样式类
     */
    wrapperClassName?: string;

    /**
     * 弹层的根节点的内联样式
     */
    wrapperStyle?: React.CSSProperties;
    /**
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名
     */
    animation?: { in: string; out: string } | boolean;
    /**
     * 开启 v2 版本
     */
    v2?: boolean;
    /**
     * 是否在捕获阶段监听，适配 react 17 事件模型变更
     */
    useCapture?: boolean;

    pinFollowBaseElementWhenFixed?: boolean;
}

export default class Overlay extends React.Component<OverlayProps, any> {
    static Popup: typeof Popup;
}
