import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ItemProps } from '../types';
/** Timeline.Item */
declare class TimelineItem extends Component<ItemProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        index: PropTypes.Requireable<number>;
        total: PropTypes.Requireable<number>;
        folderIndex: PropTypes.Requireable<number>;
        foldShow: PropTypes.Requireable<boolean>;
        state: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<string>;
        dot: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        time: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        timeLeft: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        toggleFold: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        animation: PropTypes.Requireable<boolean>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        state: string;
        toggleFold: () => void;
        animation: boolean;
    };
    'timeline-item'?: HTMLDivElement | null;
    toggleFold(folderIndex: number): void;
    beforeEnter: () => void;
    beforeLeave: () => void;
    render(): React.JSX.Element;
}
declare const _default: import("../../config-provider/types").ConfiguredComponentClass<ItemProps & import("../../config-provider/types").ComponentCommonProps, TimelineItem, {}>;
export default _default;
