import type React from 'react';
import type { PopupProps } from '../overlay';
import type { CloseMode } from '../dialog';
import type { CommonProps } from '../util';
import type { ComponentLocaleObject } from '../locale/types';

interface HTMLAttributesWeak extends PopupProps {}

/**
 * @api Drawer
 */
export interface DrawerV1Props
    extends Omit<HTMLAttributesWeak, 'content' | 'onClose' | 'title'>,
        CommonProps {
    /**
     * [废弃]同closeMode, 控制对话框关闭的方式，
     * @en [Deprecated] Control the way the drawer is closed
     * @deprecated 由于设计变更，该属性已被弃用。请使用 `closeMode` 属性来控制对话框关闭的方式。
     * @defaultValue true
     * @remarks
     * 值可以为字符串或者布尔值，其中字符串是由以下值组成：
     * **close** 表示点击关闭按钮可以关闭对话框，
     * **mask** 表示点击遮罩区域可以关闭对话框，
     * **esc** 表示按下 esc 键可以关闭对话框，
     * 如 'mask' 或 'esc,mask'，
     * 如果设置为 true，则以上关闭方式全部生效，
     * 如果设置为 false，则以上关闭方式全部失效。
     * -
     * The value can be a string or a Boolean value, where the string is composed of the following values:
     * **close** (Click the close button to close the drawer),
     * **mask** (Click the mask area to close the drawer),
     * **esc** (Press the esc key to close the drawer),
     * For example: 'close' or 'close,esc,mask', [],
     * If set to true, the above close modes are all effective,
     * If set to false, the above close modes are all invalid.
     */
    closeable?: 'close' | 'mask' | 'esc' | boolean | 'close,mask' | 'close,esc' | 'mask,esc';
    /**
     * [推荐]控制对话框关闭的方式
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
    closeMode?: CloseMode[] | 'close' | 'mask' | 'esc';
    /**
     * 隐藏时是否保留子节点，不销毁
     * @en Whether to retain the child node when hiding
     */
    cache?: boolean;
    /**
     * 标题
     * @en Title
     */
    title?: React.ReactNode;
    /**
     * body上的样式
     * @en Style on body
     */
    bodyStyle?: React.CSSProperties;
    /**
     * header上的样式
     * @en Style on header
     */
    headerStyle?: React.CSSProperties;
    /**
     * 显示隐藏时动画的播放方式
     * @en Animation playback method when showing and hiding
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     * @remarks
     * `animation` 对象包含两个属性: `in` 和 `out`。
     * - `in`: 进场动画
     * - `out`: 出场动画
     * @param animation - 指定进场和出场动画的对象。
     */
    animation?: { in: string; out: string } | false;
    /**
     * 是否显示
     * @en Whether to show
     */
    visible?: boolean;
    /**
     * 宽度，仅在 placement是 left right 的时候生效
     * @en Width, only effective when placement is left right
     */
    width?: number | string;
    /**
     * 高度，仅在 placement是 top bottom 的时候生效
     * @en Height, only effective when placement is the top bottom
     */
    height?: number | string;
    /**
     * [v2 废弃] 受控模式下(没有 trigger 的时候)，只会在关闭时触发，相当于onClose
     * @en [v2 Deprecated] Controlled mode (without trigger), only triggered when closed, equivalent to onClose
     * @remarks
     * 该属性在v2版本已被废弃，不再推荐使用。
     * 请改用 `onClose` 事件处理器来处理关闭事件。
     * -
     * This attribute has been deprecated in version v2 and is no longer recommended for use.
     * Please use the 'onClose' event handler to handle the shutdown event instead.
     * @deprecated v2 废弃 - v2 deprecated
     */
    onVisibleChange?: (visible: boolean, reason: string, e?: React.MouseEvent) => void;
    /**
     * 对话框关闭时触发的回调函数
     * @en Callback when the dialog is closed
     * @defaultValue `() => {}`
     */
    onClose?: (reason: string, e: React.MouseEvent | KeyboardEvent) => void;
    /**
     * 位于页面的位置
     * @en The position of the page
     * @defaultValue 'right'
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * 开启v2
     * @en Enable v2 version
     * @defaultValue false
     */
    v2?: false | undefined;
    /**
     * 内容
     * @en Content
     */
    content?: React.ReactNode;
    /**
     * 渲染组件的容器
     * @en Render component container
     * @remarks
     * 如果是函数需要返回 ref，
     * 如果是字符串则是该 DOM 的 id，
     * 也可以直接传入 DOM 节点。
     * -
     * If it is a function, it needs to return ref,
     * if it is a string, it is the id of the DOM,
     * or you can directly pass in DOM nodes
     */
    popupContainer?: string | HTMLElement | null;
    /**
     * 是否显示遮罩
     * @en Whether there is a mask
     * @defaultValue true
     */
    hasMask?: boolean;
    /**
     * [v2 废弃]对话框打开后的回调函数
     * @en Callback after the dialog is opened
     * @deprecated v2 废弃 - v2 deprecated
     */
    afterOpen?: () => void;
}

/**
 * @api Drawer V2
 */
export interface DrawerV2Props
    extends Omit<HTMLAttributesWeak, 'content' | 'onClose' | 'title'>,
        CommonProps {
    /**
     * [废弃]同closeMode, 控制对话框关闭的方式，
     * @en [Deprecated] Control the way the drawer is closed
     * @deprecated 由于设计变更，该属性已被弃用。请使用 `closeMode` 属性来控制对话框关闭的方式。
     * @defaultValue true
     * @remarks
     * 值可以为字符串或者布尔值，其中字符串是由以下值组成：
     * **close** 表示点击关闭按钮可以关闭对话框，
     * **mask** 表示点击遮罩区域可以关闭对话框，
     * **esc** 表示按下 esc 键可以关闭对话框，
     * 如 'mask' 或 'esc,mask'，
     * 如果设置为 true，则以上关闭方式全部生效，
     * 如果设置为 false，则以上关闭方式全部失效。
     * -
     * The value can be a string or a Boolean value, where the string is composed of the following values:
     * **close** (Click the close button to close the drawer),
     * **mask** (Click the mask area to close the drawer),
     * **esc** (Press the esc key to close the drawer),
     * For example: 'close' or 'close,esc,mask', [],
     * If set to true, the above close modes are all effective,
     * If set to false, the above close modes are all invalid.
     */
    closeable?: 'close' | 'mask' | 'esc' | boolean | 'close,mask' | 'close,esc' | 'mask,esc';
    /**
     * [推荐]控制对话框关闭的方式
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
    closeMode?: CloseMode[] | 'close' | 'mask' | 'esc';
    /**
     * 隐藏时是否保留子节点，不销毁
     * @en Whether to retain the child node when hiding
     */
    cache?: boolean;
    /**
     * 标题
     * @en Title
     */
    title?: React.ReactNode;
    /**
     * body上的样式
     * @en Style on body
     */
    bodyStyle?: React.CSSProperties;
    /**
     * header上的样式
     * @en Style on header
     */
    headerStyle?: React.CSSProperties;
    /**
     * 显示隐藏时动画的播放方式
     * @en Animation playback method when showing and hiding
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     * @remarks
     * `animation` 对象包含两个属性: `in` 和 `out`。
     * - `in`: 进场动画
     * - `out`: 出场动画
     * @param animation - 指定进场和出场动画的对象。
     */
    animation?: { in: string; out: string } | false;
    /**
     * 是否显示
     * @en Whether to show
     */
    visible?: boolean;
    /**
     * 宽度，仅在 placement是 left right 的时候生效
     * @en Width, only effective when placement is left right
     */
    width?: number | string;
    /**
     * 高度，仅在 placement是 top bottom 的时候生效
     * @en Height, only effective when placement is the top bottom
     */
    height?: number | string;
    /**
     * [v2] 弹窗关闭后的回调
     * @en Callback after the dialog is closed
     */
    afterClose?: () => void;
    /**
     * 对话框关闭时触发的回调函数
     * @en Callback when the dialog is closed
     * @defaultValue `() => {}`
     */
    onClose?: (reason: string, e: React.MouseEvent | KeyboardEvent) => void;
    /**
     * 位于页面的位置
     * @en The position of the page
     * @defaultValue 'right'
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * 开启v2
     * @en Enable v2 version
     * @defaultValue false
     */
    v2?: boolean;
    /**
     * 内容
     * @en Content
     */
    content?: React.ReactNode;
    /**
     * 渲染组件的容器
     * @en Render component container
     * @remarks
     * 如果是函数需要返回 ref，
     * 如果是字符串则是该 DOM 的 id，
     * 也可以直接传入 DOM 节点。
     * -
     * If it is a function, it needs to return ref,
     * if it is a string, it is the id of the DOM,
     * or you can directly pass in DOM nodes
     */
    popupContainer?: string | HTMLElement | null;
    /**
     * 是否显示遮罩
     * @en Whether there is a mask
     * @defaultValue true
     */
    hasMask?: boolean;
}

export type DrawerProps = DrawerV2Props | DrawerV1Props;

export interface InnerProps extends Omit<DrawerProps, 'onClose'> {
    prefix?: string;
    className?: string | undefined;
    role?: string;
    rtl?: boolean | undefined;
    onClose?: (e: React.MouseEvent) => void;
    locale?: ComponentLocaleObject | undefined;
    beforeOpen?: () => void;
    beforeClose?: () => void;
    shouldUpdatePosition?: boolean;
}
