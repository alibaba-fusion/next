/// <reference types="react" />

import React from 'react';
import { PopupProps } from '../overlay';
import { CloseMode } from '../dialog';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends PopupProps {
    title?: any;
    onClose?: any;
}

export interface DrawerProps extends Omit<HTMLAttributesWeak, 'content'>, CommonProps {
    /**
     * [废弃]同closeMode, 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：
     * **mask** 表示点击遮罩区域可以关闭对话框
     * **esc** 表示按下 esc 键可以关闭对话框
     * 如 'mask' 或 'esc,mask'
     * 如果设置为 true，则以上关闭方式全部生效
     * 如果设置为 false，则以上关闭方式全部失效
     * @deprecated
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
     * 隐藏时是否保留子节点，不销毁
     */
    cache?: boolean;
    /**
     * 标题
     */
    title?: React.ReactNode;
    /**
     * body上的样式
     */
    bodyStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    /**
     * 显示隐藏时动画的播放方式
     * @property {String} in 进场动画
     * @property {String} out 出场动画
     */
    animation?: { in: string; out: string } | boolean;
    visible?: boolean;

    /**
     * 宽度，仅在 placement是 left right 的时候生效
     */
    width?: number | string;

    /**
     * 高度，仅在 placement是 top bottom 的时候生效
     */
    height?: number | string;
    /**
     * [v2 废弃] 受控模式下(没有 trigger 的时候)，只会在关闭时触发，相当于onClose
     * @deprecated
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;
    /**
     * [v2] 弹窗关闭后的回调
     */
    afterClose?: () => void;
    onClose?: (reason: string, e: React.MouseEvent) => void;
    /**
     * 位于页面的位置
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * 开启v2版本
     */
    v2?: boolean;

    /**
     * 内容
     */
    content?: React.ReactNode;
}

export interface QuickShowRet {
    hide: () => void;
}

export default class Drawer extends React.Component<DrawerProps, any> {
    static show(config: DrawerProps): QuickShowRet;
}
