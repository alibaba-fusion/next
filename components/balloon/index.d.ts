/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';

export interface TooltipProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;

    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: React.CSSProperties;

    /**
     * tooltip的内容
     */
    children?: any;

    /**
     * 弹出层位置
     */
    align?: 't' | 'r' | 'b' | 'l' | 'tl' | 'tr' | 'bl' | 'br' | 'lt' | 'lb' | 'rt' | 'rb';

    /**
     * 触发元素
     */
    trigger?: any;

    /**
     * 触发行为
     * 鼠标悬浮,  鼠标点击('hover', 'click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用triggerType为click的Balloon组件
     */
    triggerType?: string | Array<string>;

    /**
     * 弹层组件style，透传给Popup
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层组件className，透传给Popup
     */
    popupClassName?: string;

    /**
     * 弹层组件属性，透传给Popup
     */
    popupProps?: PopupProps;

    /**
     * 弹层在触发以后的延时显示, 单位毫秒 ms
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示, 单位毫秒 ms
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示, 单位毫秒 ms
     */
    mouseLeaveDelay?: number;

    /**
     * 是否pure render
     */
    pure?: boolean;

    /**
     * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层id, 传入值才会支持无障碍
     */
    id?: string;
    followTrigger?: boolean;
    /**
     * 开启 v2
     */
    v2?: boolean;
    /**
     * [v2] 箭头是否指向目标元素的中心
     */
    arrowPointToCenter?: boolean;
}

export class Tooltip extends React.Component<TooltipProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}
export interface BalloonProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义内敛样式
     */
    style?: React.CSSProperties;

    /**
     * 浮层的内容
     */
    children?: any;

    title?: React.ReactNode;

    /**
     * 样式类型
     */
    type?: 'normal' | 'primary';

    /**
     * 弹层当前显示的状态
     */
    visible?: boolean;

    /**
     * 弹层默认显示的状态
     */
    defaultVisible?: boolean;

    /**
     * 弹层在显示和隐藏触发的事件
     */
    onVisibleChange?: (visible: boolean, type: string) => void;

    /**
     * 弹出层对齐方式
     */
    alignEdge?: boolean;

    /**
     * 是否显示关闭按钮
     */
    closable?: boolean;

    /**
     * 弹出层位置
     */
    align?: 't' | 'r' | 'b' | 'l' | 'tl' | 'tr' | 'bl' | 'br' | 'lt' | 'lb' | 'rt' | 'rb';

    /**
     * 弹层相对于trigger的定位的微调
     */
    offset?: Array<number>;

    /**
     * 触发元素
     */
    trigger?: any;

    /**
     * 触发行为
     * 鼠标悬浮, 鼠标点击('hover','click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用click
     */
    triggerType?: string | Array<string>;

    /**
     * 任何visible为false时会触发的事件
     */
    onClose?: () => void;

    /**
     * 是否进行自动位置调整
     */
    needAdjust?: boolean;

    /**
     * 弹层在触发以后的延时显示, 单位毫秒 ms
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示, 单位毫秒 ms
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示, 单位毫秒 ms
     */
    mouseLeaveDelay?: number;

    /**
     * 浮层关闭后触发的事件, 如果有动画，则在动画结束后触发
     */
    afterClose?: () => void;

    /**
     * 强制更新定位信息
     */
    shouldUpdatePosition?: boolean;

    /**
     * 弹层出现后是否自动focus到内部第一个元素
     */
    autoFocus?: boolean;

    /**
     * 安全节点:对于triggetType为click的浮层,会在点击除了浮层外的其它区域时关闭浮层.safeNode用于添加不触发关闭的节点, 值可以是dom节点的id或者是节点的dom对象
     */
    safeNode?: any;

    /**
     * 用来指定safeNode节点的id，和safeNode配合使用
     */
    safeId?: string;

    /**
     * 配置动画的播放方式
     */
    animation?: any | boolean;

    /**
     * 弹层的dom节点关闭时是否删除
     */
    cache?: boolean;

    /**
     * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层组件style，透传给Popup
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层组件className，透传给Popup
     */
    popupClassName?: string;

    /**
     * 弹层组件属性，透传给Popup
     */
    popupProps?: PopupProps;

    /**
     * 弹层id, 传入值才会支持无障碍
     */
    id?: string;
    followTrigger?: boolean;
    /**
     * 开启 v2
     */
    v2?: boolean;
    /**
     * [v2] 箭头是否指向目标元素的中心
     */
    arrowPointToCenter?: boolean;
    /**
     * 	[v2] 是否进行自动位置调整，默认自动开启
     */
    autoAdjust?: boolean;
}

export default class Balloon extends React.Component<BalloonProps, any> {
    static Tooltip: typeof Tooltip;
}
