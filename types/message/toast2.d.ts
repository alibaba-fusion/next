import type { OpenProps } from './types';
declare const config: {
    top: number;
    maxCount: number;
    duration: number;
};
export type MessageConfig = Partial<typeof config>;
declare function close(key?: string): void;
declare function destory(): void;
declare const _default: {
    open: (config: OpenProps) => {
        key: string;
        close: () => void;
    };
    success: (config: OpenProps) => {
        key: string;
        close: () => void;
    };
    warning: (config: OpenProps) => {
        key: string;
        close: () => void;
    };
    error: (config: OpenProps) => {
        key: string;
        close: () => void;
    };
    help: (config: OpenProps) => {
        key: string;
        close: () => void;
    };
    loading: (config: OpenProps) => {
        key: string;
        close: () => void;
    };
    notice: (config: OpenProps) => {
        key: string;
        close: () => void;
    };
    close: typeof close;
    destory: typeof destory;
    config(...args: MessageConfig[]): any;
};
export default _default;
