import type { ReactNode, MouseEventHandler, CSSProperties } from 'react';

/**
 * @api Notification.Config
 * @order 1
 */
export interface NotificationConfig {
    /**
     * 对齐之后的偏移 [x, y]
     * @en Offset after align, [x, y]
     * @defaultValue [30, 30]
     */
    offset?: [number, number];
    /**
     * 最多同时出现的个数, 默认不限制
     * @en Max visible count, default Infinity
     * @defaultValue -
     */
    maxCount?: number;
    /**
     * 使用 `Message` 组件的
     * @en Use `Message` size prop
     * @defaultValue large
     */
    size?: 'large' | 'medium';
    /**
     * 默认自动关闭延时，单位毫秒
     * @en Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically
     * @defaultValue 4500
     */
    duration?: number;
    /**
     * 配置渲染节点的输出位置
     * @en Return the mount node for Notification
     * @defaultValue `() => document.body`
     */
    getContainer?: () => HTMLElement;
    /**
     * 弹出位置，可选 `tl` `tr` `bl` `br`
     * @en Position of Notification, can be one of `tl` `tr` `bl` `br`
     * @defaultValue topRight
     */
    placement?: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight';
}

/**
 * @api NotificationOptions
 * @order 2
 */
export interface NotificationOptions {
    /**
     * 当前通知唯一标志, 默认会自动生成
     * @en The unique identifier of the Notification
     * @defaultValue -
     */
    key?: string;
    /**
     * 通知类型，`Notification.open`可选参数，可选值：`success`\|`error`\|`warning`\|`notice`\|`help`
     * @en Notification type, `Notification.open` optional parameter, optional value: `success`\|`error`\|`warning`\|`notice`\|`help`
     * @defaultValue `success`
     */
    type?: 'success' | 'error' | 'warning' | 'notice' | 'help';
    /**
     * 通知提醒标题
     * @en The title of notification box
     */
    title?: ReactNode;
    /**
     * 通知提醒内容
     * @en The content of notification box
     */
    content?: ReactNode;
    /**
     * 自定义图标
     * @en Customized icon
     */
    icon?: string;
    /**
     * 默认 4.5 秒后自动关闭，配置为 0 则不自动关闭（单位毫秒）
     * @en Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically
     * @defaultValue 4500
     */
    duration?: number;
    /**
     * 自定义内联样式 [详见](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794)
     * @en Customized inline style
     */
    style?: CSSProperties;
    /**
     * 自定义 CSS class
     * @en Customized CSS class
     */
    className?: string;
    /**
     * 点击默认关闭按钮时触发的回调函数
     * @en Specify a function that will be called when the close button is clicked
     */
    onClose?: () => void;
    /**
     * 点击通知时触发的回调函数
     * @en Specify a function that will be called when the notification is clicked
     */
    onClick?: MouseEventHandler;
    /**
     * @skip
     */
    timer?: number;
}

/**
 * @api Notification
 * @order 0
 */
export interface Notification {
    config: (config: NotificationConfig) => NotificationConfig;
    open: (options: NotificationOptions) => string;
    close: (key: string) => void;
    destroy: () => void;
    success: (options: NotificationOptions) => string;
    error: (options: NotificationOptions) => string;
    warning: (options: NotificationOptions) => string;
    notice: (options: NotificationOptions) => string;
    help: (options: NotificationOptions) => string;
}
