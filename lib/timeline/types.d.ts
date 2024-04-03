import React from 'react';
import { CommonProps } from '../util';
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
}
/**
 * @api Timeline.Item
 * @order 1
 */
export interface ItemProps extends Omit<HTMLAttributesWeak, 'content' | 'title'>, CommonProps {
    /**
     * 节点状态
     * @en node state
     * @defaultValue 'done'
     */
    state?: 'done' | 'process' | 'error' | 'success';
    /**
     * 图标
     * @en icon
     */
    icon?: string;
    /**
     * 自定义时间轴节点
     * @en custom dot
     */
    dot?: React.ReactNode;
    /**
     * 格式化后的时间
     * @en formatted time
     */
    time?: React.ReactNode;
    /**
     * 标题
     * @en title
     */
    title?: React.ReactNode;
    /**
     * 左侧时间
     * @en left time
     */
    timeLeft?: React.ReactNode;
    /**
     * 右侧内容
     * @en right content
     */
    content?: React.ReactNode;
    /**
     * 展示动画
     * @en show animation
     * @defaultValue true
     */
    animation?: boolean;
    /**
     * 展示的模式，left 为左，alternate 为交替显示
     * @en show mode
     * @defaultValue 'left'
     * @version 1.23.18
     */
    mode?: 'left' | 'alternate';
    /**
     * 折叠回调
     * @en fold callback
     * @skip
     */
    toggleFold?: (foldIndex: number) => void;
    /**
     * @skip
     */
    index?: number;
    /**
     * @skip
     */
    total?: number;
    /**
     * @skip
     */
    folderIndex?: number;
    /**
     * @skip
     */
    foldShow?: boolean;
}
export type FoldItem = {
    /**
     * [startIndex, endIndex] or [startIndex] 到最后一个节点
     */
    foldArea?: Array<number>;
    foldShow?: boolean;
};
/**
 * @api Timeline
 * @order 0
 */
export interface TimelineProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 自定义折叠选项
     * @en custom folding options
     * @example `[{foldArea: [startIndex, endIndex], foldShow: boolean}]`
     */
    fold?: Array<FoldItem>;
    /**
     * 自定义类名
     * @en custom className
     */
    className?: string;
    /**
     * 展示动画
     * @en show animation
     * @defaultValue true
     */
    animation?: boolean;
    /**
     * 展示的模式，left 为左，alternate 为交替显示
     * @en show mode
     * @defaultValue 'left'
     * @version 1.23.18
     */
    mode?: 'left' | 'alternate';
}
export interface TimelineState {
    fold: NonNullable<TimelineProps['fold']>;
    innerUpdate?: boolean;
}
export {};
