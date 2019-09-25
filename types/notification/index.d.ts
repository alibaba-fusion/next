import { ReactNode, MouseEventHandler, CSSProperties } from "react";

export interface NotificationConfig {
    offset?: [number, number];
    maxCount?: number;
    size?: 'large' | 'medium';
    duration?: number;
    getContainer?: () => HTMLElement;
    placement?: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight',
}

export interface NotificationOptions {
    key?: string;
    type?: 'success' | 'error' | 'warning' | 'notice' | 'help';
    title?: ReactNode;
    content?: ReactNode;
    icon?: string;
    duration?: number;
    onClick?: MouseEventHandler;
    style?: CSSProperties;
    className?: string;
    onClose?: () => void;
}

export default class Notification {
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
