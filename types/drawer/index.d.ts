/// <reference types="react" />

import * as React from 'react';
import { PopupProps } from '../overlay';


export interface DrawerProps extends PopupProps {
    /**
     * 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：
     * **mask** 表示点击遮罩区域可以关闭对话框
     * **esc** 表示按下 esc 键可以关闭对话框
     * 如 'mask' 或 'esc,mask'
     * 如果设置为 true，则以上关闭方式全部生效
     * 如果设置为 false，则以上关闭方式全部失效
     */
    closeable?: string | boolean;

    /**
     * 显示隐藏时动画的播放方式
     * @property {String} in 进场动画
     * @property {String} out 出场动画
     */
    animation?: {} | boolean;

    /**
     * 位于页面的位置
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
}

export default class Drawer extends React.Component<DrawerProps, any> {
}
