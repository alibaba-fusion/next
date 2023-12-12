import * as React from 'react';
import { CSSProperties } from 'react';
import { CommonProps } from '../util';

export interface AffixMode {
    top: boolean;
    bottom: boolean;
    offset: number;
}

export interface AffixState {
    style: CSSProperties | null;
    containerStyle: CSSProperties | null;
    positionStyle: CSSProperties['position'] | null;
    affixMode: AffixMode;
}

export interface GetContainer {
    (): Element;
}

export interface AffixProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 设置 Affix 需要监听滚动事件的容器元素
     */
    container?: GetContainer;

    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop?: number;

    /**
     * 距离窗口底部达到制定偏移量后触发
     */
    offsetBottom?: number;

    /**
     * 当元素的样式发生固钉样式变化时触发的回调函数
     */
    onAffix?: (affixed: boolean) => void;

    /**
     * 是否启用绝对布局实现 affix
     */
    useAbsolute?: boolean;
}

export default class Affix extends React.Component<AffixProps, unknown> {}
