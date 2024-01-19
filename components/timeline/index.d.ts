/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface ItemProps extends Omit<HTMLAttributesWeak, 'content'>, CommonProps {
    /**
     * 节点状态
     */
    state?: 'done' | 'process' | 'error' | 'success';

    /**
     * 图标
     */
    icon?: string;

    /**
     * 自定义时间轴节点
     */
    dot?: React.ReactNode;

    /**
     * 格式化后的时间
     */
    time?: React.ReactNode;

    /**
     * 标题
     */
    title?: React.ReactNode;

    /**
     * 左侧时间
     */
    timeLeft?: React.ReactNode;

    /**
     * 右侧内容
     */
    content?: React.ReactNode;

    /**
     * 动画
     */
    animation?: boolean;
    mode?: 'left' | 'alternate';
}

export class Item extends React.Component<ItemProps, any> {}

type foldItem = {
    /**
     * [startIndex, endIndex] or [startIndex] 到最后一个节点
     */
    foldArea?: Array<number>;
    foldShow?: boolean;
};

export interface TimelineProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 样式的品牌前缀
     */
    prefix?: string;

    /**
     * 自定义折叠选项 示例`[{foldArea: [startIndex, endIndex], foldShow: boolean}]`
     */
    fold?: Array<foldItem>;

    /**
     * 自定义类名
     */
    className?: string;
}

export default class Timeline extends React.Component<TimelineProps, any> {
    static Item: typeof Item;
}
