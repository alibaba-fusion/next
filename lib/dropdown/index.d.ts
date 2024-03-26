/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

export interface DropdownProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 弹层内容
     */
    children?: React.ReactNode;

    /**
     * 弹层当前是否显示
     */
    visible?: boolean;

    /**
     * 弹层请求关闭时触发事件的回调函数
     */
    onRequestClose?: (type: string, e: {}) => void;

    /**
     * 弹层定位的参照元素
     */
    target?: any;

    /**
     * 弹层相对于触发元素的定位, 详见 Overlay 的定位部分
     */
    align?: string;

    /**
     * 弹层相对于触发元素定位的微调
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
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画
     */
    animation?: any | boolean;

    /**
     * 触发弹层显示或者隐藏的元素
     */
    trigger?: React.ReactNode;

    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']
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
     * 开启后，默认点击children弹窗就收起 0.x 2.x中默认是true
     */
    autoClose?: boolean;

    /**
     * 弹层显示或隐藏时触发的回调函数
     */
    onVisibleChange?: (visible: boolean, type: string, e: {}) => void;

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
}

export default class Dropdown extends React.Component<DropdownProps, any> {}
