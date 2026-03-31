import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overlay from './overlay';
import type { PopupProps, PopupState } from './types';
/**
 * Overlay.Popup
 * 继承 Overlay 的 API，除非特别说明
 * */
declare class Popup extends Component<PopupProps, PopupState> {
    static propTypes: {
        /**
         * 弹层内容
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 触发弹层显示或隐藏的元素
         */
        trigger: PropTypes.Requireable<PropTypes.ReactElementLike>;
        /**
         * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
         */
        triggerType: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        /**
         * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
         */
        triggerClickKeycode: PropTypes.Requireable<NonNullable<number | any[] | null | undefined>>;
        /**
         * 弹层当前是否显示
         */
        visible: PropTypes.Requireable<boolean>;
        /**
         * 弹层默认是否显示
         */
        defaultVisible: PropTypes.Requireable<boolean>;
        /**
         * 弹层显示或隐藏时触发的回调函数
         */
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置此属性，弹层无法显示或隐藏
         */
        disabled: PropTypes.Requireable<boolean>;
        autoFit: PropTypes.Requireable<boolean>;
        /**
         * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
         */
        delay: PropTypes.Requireable<number>;
        /**
         * 鼠标放置后的延时显示, 单位毫秒 ms
         */
        mouseEnterDelay: PropTypes.Requireable<number>;
        /**
         * 鼠标离开后的延时显示, 单位毫秒 ms
         */
        mouseLeaveDelay: PropTypes.Requireable<number>;
        /**
         * trigger 是否可以关闭弹层
         */
        canCloseByTrigger: PropTypes.Requireable<boolean>;
        /**
         * 弹层定位的参照元素
         */
        target: PropTypes.Requireable<any>;
        safeNode: PropTypes.Requireable<any>;
        /**
         * 是否跟随trigger滚动
         */
        followTrigger: PropTypes.Requireable<boolean>;
        container: PropTypes.Requireable<any>;
        hasMask: PropTypes.Requireable<boolean>;
        wrapperStyle: PropTypes.Requireable<object>;
        rtl: PropTypes.Requireable<boolean>;
        /**
         * 开启 v2 版本
         */
        v2: PropTypes.Requireable<boolean>;
        /**
         * [v2] 快捷位置，包含 'tl' | 't' | 'tr' | 'rt' | 'r' | 'rb' | 'bl' | 'b' | 'br' | 'lt' | 'l' | 'lb'
         */
        placement: PropTypes.Requireable<string>;
        /**
         * [v2] 弹层偏离触发元素的像素值
         */
        placementOffset: PropTypes.Requireable<number>;
        /**
         * [v2] 浮窗被遮挡时是否自动调整位置
         */
        autoAdjust: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        triggerType: string;
        triggerClickKeycode: number[];
        defaultVisible: boolean;
        onVisibleChange: () => void;
        disabled: boolean;
        autoFit: boolean;
        delay: number;
        canCloseByTrigger: boolean;
        followTrigger: boolean;
        container: () => HTMLElement;
        rtl: boolean;
    };
    static displayName: string;
    _mouseNotFirstOnMask: boolean;
    _isForwardContent: boolean | null;
    overlay: InstanceType<typeof Overlay> | null;
    _timer: number | null;
    _hideTimer: number | null;
    _showTimer: number | null;
    constructor(props: PopupProps);
    static getDerivedStateFromProps(
        nextProps: PopupProps,
        prevState: PopupState
    ): {
        visible: boolean | undefined;
    } | null;
    componentWillUnmount(): void;
    handleVisibleChange(
        visible: boolean,
        type: string | object,
        e?: MouseEvent | KeyboardEvent
    ): void;
    handleTriggerClick(e: MouseEvent | KeyboardEvent): void;
    handleTriggerKeyDown(e: KeyboardEvent): void;
    handleTriggerMouseEnter(e: MouseEvent): void;
    handleTriggerMouseLeave(e: MouseEvent, type: string | object): void;
    handleTriggerFocus(e: MouseEvent): void;
    handleTriggerBlur(e: MouseEvent): void;
    handleContentMouseDown(): void;
    handleContentMouseEnter(): void;
    handleContentMouseLeave(e: MouseEvent): void;
    handleMaskMouseEnter(): void;
    handleMaskMouseLeave(): void;
    handleRequestClose(type: string | object, e: MouseEvent): void;
    renderTrigger(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    renderContent(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    renderPortal(): React.JSX.Element;
    render(): (React.JSX.Element | undefined)[];
}
declare const _default: typeof Popup;
export default _default;
