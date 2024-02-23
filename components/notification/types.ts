import { ReactNode, MouseEventHandler, CSSProperties } from 'react';

export interface NotificationConfig {
    offset?: [number, number];
    maxCount?: number;
    size?: 'large' | 'medium';
    duration?: number;
    getContainer?: () => HTMLElement;
    placement?: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight';
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
    static config: (config: NotificationConfig) => NotificationConfig;
    static open: (options: NotificationOptions) => string;
    static close: (key: string) => void;
    static destroy: () => void;
    static success: (options: NotificationOptions) => string;
    static error: (options: NotificationOptions) => string;
    static warning: (options: NotificationOptions) => string;
    static notice: (options: NotificationOptions) => string;
    static help: (options: NotificationOptions) => string;
}
