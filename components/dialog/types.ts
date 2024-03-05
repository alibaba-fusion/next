import React from 'react';
import { type CommonProps } from '../util';
import { type ButtonProps } from '../button';
import { type OverlayProps } from '../overlay';
import { type MessageProps } from '../message';

export type CloseMode = 'close' | 'mask' | 'esc';
interface HTMLAttributes extends React.HTMLAttributes<HTMLElement> {}

/**
 * @api Dialog
 */
export interface DialogProps extends Omit<HTMLAttributes, 'content' | 'title'>, CommonProps {
    /**
     * 是否显示
     * @en Whether to show
     * @defaultValue false
     */
    visible?: boolean;

    /**
     * 标题
     * @en Title
     */
    title?: React.ReactNode;

    /**
     * 内容
     * @en Content
     */
    children?: React.ReactNode;

    /**
     * 底部内容，设置为 false，则不进行显示
     * @en Footer content, set to false to hide
     */
    footer?: boolean | React.ReactNode;

    /**
     * 底部按钮的对齐方式
     * @en Footer button alignment
     * @defaultValue 'right'
     */
    footerAlign?: 'left' | 'center' | 'right';

    /**
     * 指定确定按钮和取消按钮是否存在以及如何排列
     * @en Specify whether to exist and how to arrange the confirm and cancel buttons
     * @defaultValue ['ok', 'cancel']
     * @remarks
     * **可选值**：
     * ['ok', 'cancel']（确认取消按钮同时存在，确认按钮在左）,
     * ['cancel', 'ok']（确认取消按钮同时存在，确认按钮在右）,
     * ['ok']（只存在确认按钮）,
     * ['cancel']（只存在取消按钮）.
     * -
     * ['ok', 'cancel'] (Confirm and cancel buttons exist at the same time, the confirm button is on the left),
     * ['cancel', 'ok'] (Confirm and cancel buttons exist at the same time, the confirm button is on the right),
     * ['ok'] (Only the confirm button exists),
     * ['cancel'] (Only the cancel button exists).
     */
    footerActions?: Array<'ok' | 'cancel'>;

    /**
     * 隐藏时是否保留子节点，不销毁
     * @en Whether to retain the child node when hiding
     * @version 1.23
     * @defaultValue false
     */
    cache?: boolean;

    /**
     * 在点击确定按钮时触发的回调函数
     * @en Callback function when the confirm button is clicked
     */
    onOk?: (event: React.MouseEvent) => void;

    /**
     * 在点击取消按钮时触发的回调函数
     * @en Callback function when the cancel button is clicked
     */
    onCancel?: (event: React.MouseEvent) => void;

    /**
     * 应用于确定按钮的属性对象
     * @en Properties for the confirm button
     */
    okProps?: ButtonProps;

    /**
     * 应用于取消按钮的属性对象
     * @en Properties for the cancel button
     */
    cancelProps?: ButtonProps;

    /**
     * [废弃] 同 closeMode, 控制对话框关闭的方式
     * @en [Deprecated] Control the way the dialog is closed
     * @deprecated use closeMode instead
     * @defaultValue 'esc,close'
     * @remarks
     * 值可以为字符串或者布尔值，其中字符串是由以下值组成：
     * **close** 表示点击关闭按钮可以关闭对话框，
     * **mask** 表示点击遮罩区域可以关闭对话框，
     * **esc** 表示按下 esc 键可以关闭对话框，
     * 如 'close' 或 'close,esc,mask'，
     * 如果设置为 true，则以上关闭方式全部生效，
     * 如果设置为 false，则以上关闭方式全部失效。
     * -
     * The value can be a string or boolean, where the string is composed of the following values:
     * **close** (Click the close button to close the dialog),
     * **mask** (Click the mask area to close the dialog),
     * **esc** (Press the esc key to close the dialog),
     * For example: 'close' or 'close,esc,mask', [],
     * If set to true, the above close modes are all effective,
     * If set to false, the above close modes are all invalid.
     */
    closeable?: 'close' | 'mask' | 'esc' | boolean | 'close,mask' | 'close,esc' | 'mask,esc';
    /**
     * [推荐] 控制对话框关闭的方式
     * @en Control the way the dialog is closed
     * @version 1.21
     * @remarks
     * 值可以为字符串或者数组，其中字符串、数组均为以下值的枚举：
     * **close** 表示点击关闭按钮可以关闭对话框，
     * **mask** 表示点击遮罩区域可以关闭对话框，
     * **esc** 表示按下 esc 键可以关闭对话框，
     * 如 'close' 或 ['close','esc','mask'], []。
     * -
     * The value can be a string or array, where the string and array are enumerated values of the following:
     * **close** (Click the close button to close the dialog),
     * **mask** (Click the mask area to close the dialog),
     * **esc** (Press the esc key to close the dialog),
     * For example: 'close' or ['close','esc','mask'], [].
     */
    closeMode?: CloseMode[] | CloseMode;

    /**
     * 对话框关闭时触发的回调函数
     * @en Callback function when the dialog is closed
     */
    onClose?: (trigger: string, event: React.MouseEvent | KeyboardEvent) => void;

    /**
     * 对话框关闭后触发的回调函数，如果有动画，则在动画结束后触发
     * @en Callback function after the dialog is closed, if there is an animation, it will be triggered after the animation ends
     */
    afterClose?: () => void;

    /**
     * 是否显示遮罩
     * @en Whether to show the mask
     */
    hasMask?: boolean;

    /**
     * 显示隐藏时动画的播放方式
     * @en Animation playback method when showing and hiding
     * @defaultValue \{ in: 'fadeInUp', out: 'fadeOutUp' \}
     */
    animation?: Record<'in' | 'out', string> | false;

    /**
     * 对话框弹出时是否自动获得焦点
     * @en Whether to automatically obtain focus when the dialog is displayed
     * @defaultValue false
     */
    autoFocus?: boolean;

    /**
     * [v2 废弃] 对话框对齐方式，具体见 Overlay 文档
     * @en [v2 Deprecated] Dialog alignment, see Overlay documentation
     * @deprecated v2 废弃
     */
    align?: string | boolean;
    /**
     * [v2 废弃] 当对话框高度超过浏览器视口高度时，是否显示所有内容而不是出现滚动条以保证对话框完整显示在浏览器视口内，该属性仅在对话框垂直水平居中时生效，即 align 被设置为 'cc cc' 时
     * @en [v2 Deprecated] Whether to display all content instead of appearing a scroll bar to ensure that the dialog is displayed completely in the browser viewport, and this attribute only takes effect when the dialog is vertically and horizontally centered, that is, when align is set to 'cc cc'
     * @deprecated v2 废弃 - v2 deprecated
     */
    isFullScreen?: boolean;

    /**
     * [v2 废弃] 是否在对话框重新渲染时及时更新对话框位置，一般用于对话框高度变化后依然能保证原来的对齐方式
     * @en [v2 Deprecated] Whether to update the dialog position immediately when the dialog is re-rendered, generally used for dialog height changes that still ensure the original alignment
     * @deprecated v2 废弃 - v2 deprecated
     */
    shouldUpdatePosition?: boolean;

    /**
     * [v2 废弃] 对话框距离浏览器顶部和底部的最小间距，align 被设置为 'cc cc' 并且 isFullScreen 被设置为 true 时不生效
     * @en [v2 Deprecated] The minimum spacing between the dialog and the top and bottom of the browser, and the isFullScreen property is set to true and the align property is set to 'cc cc' is not effective
     * @deprecated v2 废弃 - v2 deprecated
     * @defaultValue 40
     */
    minMargin?: number;
    /**
     * 透传到弹层组件的属性对象
     * @en Properties for the overlay component
     */
    overlayProps?: OverlayProps;

    /**
     * 自定义国际化文案对象
     * @en Customized internationalized text
     */
    locale?: {
        ok: string;
        cancel: string;
    };

    /**
     * 对话框的高度样式属性
     * @en Dialog height style
     */
    height?: string | number;
    /**
     * 自定义弹窗挂载位置
     * @en Custom mount position
     */
    popupContainer?: string | HTMLElement | ((target?: HTMLElement) => HTMLElement);
    /**
     * 开启 v2 版本弹窗
     * @en Enable v2 version
     * @defaultValue false
     */
    v2?: boolean;
    /**
     * [v2] 定制关闭按钮 icon
     * @en [v2] Customize the close button icon
     * @version 1.25
     */
    closeIcon?: React.ReactNode;
    /**
     * [v2] 弹窗宽度 v2 生效
     * @en [v2] Dialog width
     * @version 1.25
     */
    width?: string | number;
    /**
     * [v2] 弹窗上边距。默认 100，设置 centered=true 后默认 40
     * @en [v2] Dialog top margin, default 100, when centered=true, default 40
     * @version 1.25
     */
    top?: number;
    /**
     * [v2] 弹窗下边距
     * @en [v2] Dialog bottom margin
     * @defaultValue 40
     * @version 1.25
     */
    bottom?: number;
    /**
     * [v2] 对话框高度超过浏览器视口高度时，对话框是否展示滚动条。关闭此功后对话框会随高度撑开页面
     * @en [v2] Whether to display a scroll bar when the dialog height exceeds the browser viewport height
     * @version 1.25
     */
    overflowScroll?: boolean;
    /**
     * [v2] 弹窗居中对齐
     * @en [v2] Dialog center alignment
     * @version 1.25
     */
    centered?: boolean;
    /**
     * [v2] 自定义渲染弹窗
     * @en [v2] Custom rendering the dialog
     */
    dialogRender?: (modal: React.ReactNode) => React.ReactNode;
    /**
     * [v2] 最外包裹层 className
     * @en [v2] The className of the outer wrapper
     * @version 1.26
     */
    wrapperClassName?: string;
    /**
     * 去除 body 内间距
     * @en Remove body spacing
     * @version 1.26
     * @defaultValue false
     */
    noPadding?: boolean;
    /**
     * [v2] 最外包裹层 style
     * @en [v2] The style of the outer wrapper
     * @version 1.26
     */
    wrapperStyle?: React.CSSProperties;
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

export interface InnerProps
    extends Omit<HTMLAttributes, 'title'>,
        CommonProps,
        Pick<
            DialogProps,
            | 'footer'
            | 'footerAlign'
            | 'footerActions'
            | 'onOk'
            | 'onCancel'
            | 'closeable'
            | 'v2'
            | 'okProps'
            | 'cancelProps'
            | 'closeIcon'
            | 'title'
        > {
    height?: string | number;
    noPadding?: boolean;
    onClose?: (event: React.MouseEvent) => void;
}

export interface ShowModalInnerProps extends CommonProps, Pick<MessageProps, 'title'> {
    messageProps?: MessageProps;
    content?: MessageProps['children'];
}
