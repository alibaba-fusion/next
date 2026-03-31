import React from 'react';
import { CommonProps } from '../util';
export interface AffixMode {
    top: boolean;
    bottom: boolean;
    offset: number;
}
export interface AffixState {
    style: React.CSSProperties | null;
    containerStyle: React.CSSProperties | null;
    positionStyle: React.CSSProperties['position'] | null;
    affixMode: AffixMode;
}
export interface GetContainer {
    (): Element;
}
/**
 * @api Affix
 */
export interface AffixProps extends CommonProps {
    /**
     * 设置 Affix 需要监听滚动事件的容器元素
     * @en The container for listening scroll events
     * @returns 目标容器元素
     * @defaultValue () =\> window
     */
    container?: () => Element | Window;
    /**
     * 距离窗口顶部达到指定偏移量后触发
     * @en Offset from top when event triggers
     */
    offsetTop?: number;
    /**
     * 距离窗口底部达到指定偏移量后触发
     * @en Offset from bottom when event triggers
     */
    offsetBottom?: number;
    /**
     * 当元素的样式发生固钉样式变化时触发的回调函数
     * @en Callback when affix event triggers
     * @param affixed - 是否固定 - if element is affixed
     */
    onAffix?: (affixed: boolean) => void;
    /**
     * 是否启用绝对布局实现 affix
     * @en Enable absolute position
     */
    useAbsolute?: boolean;
    /**
     * 包裹 children 容器的类名
     */
    className?: string;
    /**
     * 最外层容器的 style 样式
     */
    style?: React.CSSProperties;
}
