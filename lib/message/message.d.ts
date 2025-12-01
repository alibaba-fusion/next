import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { MessageProps } from './types';
import type * as toast2 from './toast2';
type Toast2 = typeof toast2.default;
/**
 * Message
 */
declare class Message extends Component<MessageProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        type: PropTypes.Requireable<string>;
        shape: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        defaultVisible: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        iconType: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        closeable: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        afterClose: PropTypes.Requireable<(...args: any[]) => any>;
        animation: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static displayName: string;
    static config: (config: toast2.MessageConfig) => void;
    static open: Toast2['open'];
    static close: Toast2['close'];
    static destory: Toast2['destory'];
    static defaultProps: {
        prefix: string;
        pure: boolean;
        type: string;
        shape: string;
        size: string;
        defaultVisible: boolean;
        closeable: boolean;
        onClose: () => void;
        afterClose: () => void;
        animation: boolean;
        locale: Partial<{
            closeAriaLabel: string;
        }> & {
            momentLocale?: string | undefined;
        };
    };
    state: {
        visible: boolean | undefined;
    };
    static getDerivedStateFromProps(props: MessageProps): {
        visible: boolean | undefined;
    } | {
        visible?: undefined;
    };
    onClose: () => void;
    render(): React.JSX.Element | null;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<MessageProps & import("../config-provider/types").ComponentCommonProps, Message, {}> & {
    open: (config: import("./types").OpenProps) => {
        key: string;
        close: () => void;
    };
    close: (key?: string | undefined) => void;
    config: (config: Partial<{
        top: number;
        maxCount: number;
        duration: number;
    }>) => void;
    destory: () => void;
};
export default _default;
