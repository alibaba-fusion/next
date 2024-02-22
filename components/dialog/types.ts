/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { ButtonProps } from '../button';
import { OverlayProps } from '../overlay';

export type CloseMode = 'close' | 'mask' | 'esc';
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface DialogProps extends Omit<HTMLAttributesWeak, 'content'>, CommonProps {
    /**
     * 是否显示
     */
    visible?: boolean;

    /**
     * 标题
     */
    title?: React.ReactNode;

    /**
     * 内容
     */
    children?: React.ReactNode;

    /**
     * 底部内容，设置为 false，则不进行显示
     */
    footer?: boolean | React.ReactNode;

    /**
     * 底部按钮的对齐方式
     */
    footerAlign?: 'left' | 'center' | 'right';

    /**
     * 指定确定按钮和取消按钮是否存在以及如何排列,<br><br>**可选值**：
     * ['ok', 'cancel']（确认取消按钮同时存在，确认按钮在左）
     * ['cancel', 'ok']（确认取消按钮同时存在，确认按钮在右）
     * ['ok']（只存在确认按钮）
     * ['cancel']（只存在取消按钮）
     */
    footerActions?: Array<string>;

    /**
     * 隐藏时是否保留子节点，不销毁
     */
    cache?: boolean;

    /**
     * 在点击确定按钮时触发的回调函数
     */
    onOk?: (event: React.MouseEvent) => void;

    /**
     * 在点击取消按钮时触发的回调函数
     */
    onCancel?: (event: React.MouseEvent) => void;

    /**
     * 应用于确定按钮的属性对象
     */
    okProps?: ButtonProps;

    /**
     * 应用于取消按钮的属性对象
     */
    cancelProps?: ButtonProps;

    /**
     * [废弃]同closeMode, 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：
     * **close** 表示点击关闭按钮可以关闭对话框
     * **mask** 表示点击遮罩区域可以关闭对话框
     * **esc** 表示按下 esc 键可以关闭对话框
     * 如 'close' 或 'close,esc,mask'
     * 如果设置为 true，则以上关闭方式全部生效
     * 如果设置为 false，则以上关闭方式全部失效
     */
    closeable?: 'close' | 'mask' | 'esc' | boolean | 'close,mask' | 'close,esc' | 'mask,esc';
    /**
     * [推荐]控制对话框关闭的方式，值可以为字符串或者数组，其中字符串、数组均为以下值的枚举：
     * **close** 表示点击关闭按钮可以关闭对话框
     * **mask** 表示点击遮罩区域可以关闭对话框
     * **esc** 表示按下 esc 键可以关闭对话框
     * 如 'close' 或 ['close','esc','mask'], []
     */
    closeMode?: CloseMode[] | 'close' | 'mask' | 'esc';

    /**
     * 对话框关闭时触发的回调函数
     */
    onClose?: (trigger: string, event: React.MouseEvent) => void;

    /**
     * 对话框关闭后触发的回调函数, 如果有动画，则在动画结束后触发
     */
    afterClose?: () => void;

    /**
     * 是否显示遮罩
     */
    hasMask?: boolean;

    /**
     * 显示隐藏时动画的播放方式
     */
    animation?: any | boolean;

    /**
     * 对话框弹出时是否自动获得焦点
     */
    autoFocus?: boolean;

    /**
     * [v2废弃] 对话框对齐方式, 具体见Overlay文档
     * @deprecated
     */
    align?: string | boolean;
    /**
     * [v2废弃] 当对话框高度超过浏览器视口高度时，是否显示所有内容而不是出现滚动条以保证对话框完整显示在浏览器视口内，该属性仅在对话框垂直水平居中时生效，即 align 被设置为 'cc cc' 时
     * @deprecated
     */
    isFullScreen?: boolean;

    /**
     * [v2废弃] 是否在对话框重新渲染时及时更新对话框位置，一般用于对话框高度变化后依然能保证原来的对齐方式
     * @deprecated
     */
    shouldUpdatePosition?: boolean;

    /**
     * [v2废弃] 对话框距离浏览器顶部和底部的最小间距，align 被设置为 'cc cc' 并且 isFullScreen 被设置为 true 时不生效
     * @deprecated
     */
    minMargin?: number;
    /**
     * 透传到弹层组件的属性对象
     */
    overlayProps?: OverlayProps;

    /**
     * 自定义国际化文案对象
     */
    locale?: {
        ok: string;
        cancel: string;
    };

    /**
     * 对话框的高度样式属性
     */
    height?: string | number;
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);
    /**
     * 开启 v2 版本弹窗
     */
    v2?: boolean;
    /**
     * [v2] 定制关闭按钮 icon
     */
    closeIcon?: React.ReactNode;
    /**
     * [v2] 弹窗宽度 v2 生效
     */
    width?: string | number;
    /**
     * [v2] 弹窗上边距。默认 100，设置 centered=true 后默认 40
     */
    top?: number;
    /**
     * [v2] 弹窗下边距, 默认 40
     */
    bottom?: number;
    /**
     * [v2] 对话框高度超过浏览器视口高度时，对话框是否展示滚动条。关闭此功后对话框会随高度撑开页面
     */
    overflowScroll?: boolean;
    /**
     * [v2] 弹窗居中对齐
     */
    centered?: boolean;
    /**
     * [v2] 自定义渲染弹窗
     */
    dialogRender?: (modal: React.ReactNode) => React.ReactNode;
    /**
     * [v2] 最外包裹层 className
     */
    wrapperClassName?: string;
}

export interface QuickShowConfig extends DialogProps {
    prefix?: string;
    type?: 'alert' | 'confirm';
    messageProps?: object;
    content?: React.ReactNode;
    onOk?: () => void;
    onCancel?: () => void;
    okProps?: object;
    needWrapper?: boolean;
}

export interface QuickShowRet {
    hide: () => void;
}

export default class Dialog extends React.Component<DialogProps, any> {
    static show(config: QuickShowConfig): QuickShowRet;
    static alert(config: QuickShowConfig): QuickShowRet;
    static confirm(config: QuickShowConfig): QuickShowRet;
    static success(config: QuickShowConfig): QuickShowRet;
    static error(config: QuickShowConfig): QuickShowRet;
    static warning(config: QuickShowConfig): QuickShowRet;
    static notice(config: QuickShowConfig): QuickShowRet;
    static help(config: QuickShowConfig): QuickShowRet;
}
