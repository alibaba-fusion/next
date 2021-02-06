/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface MessageProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 反馈类型
     */
    type?: 'success' | 'warning' | 'error' | 'notice' | 'help' | 'loading';

    /**
     * 反馈外观
     */
    shape?: 'inline' | 'addon' | 'toast';

    /**
     * 反馈大小
     */
    size?: 'medium' | 'large';

    /**
     * 标题
     */
    title?: React.ReactNode;

    /**
     * 内容
     */
    children?: React.ReactNode;

    /**
     * 默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 当前是否显示
     */
    visible?: boolean;

    /**
     * 显示的图标类型，会覆盖内部设置的IconType
     */
    iconType?: string;

    /**
     * 显示关闭按钮
     */
    closeable?: boolean;

    /**
     * 关闭按钮的回调
     */
    onClose?: () => void;

    /**
     * 关闭之后调用的函数
     */
    afterClose?: () => void;

    /**
     * 是否开启展开收起动画
     */
    animation?: boolean;
}

type OpenProps = string | React.ReactElement | MessageProps;

export default class Message extends React.Component<MessageProps, any> {
    static show(props: OpenProps): void;
    static hide(): void;
    static success(props: OpenProps): void;
    static warning(props: OpenProps): void;
    static error(props: OpenProps): void;
    static help(props: OpenProps): void;
    static loading(props: OpenProps): void;
    static notice(props: OpenProps): void;
}
