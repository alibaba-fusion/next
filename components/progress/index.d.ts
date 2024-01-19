/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 形态
     */
    shape?: 'circle' | 'line';

    /**
     * 尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 所占百分比
     */
    percent?: number;

    /**
     * 进度状态, 显示优先级: color > progressive > state
     */
    state?: 'normal' | 'success' | 'error';

    /**
     * 是否为色彩阶段变化模式, 显示优先级: color > progressive > state
     */
    progressive?: boolean;

    /**
     * 是否添加 Border（只适用于 Line Progress)
     */
    hasBorder?: boolean;

    /**
     * 文本渲染函数
     */
    textRender?: (percent: number, option: {}) => React.ReactNode;

    /**
     * 进度条颜色, 显示优先级: color > progressive > state
     */
    color?: string;

    /**
     * 背景色
     */
    backgroundColor?: string;
}

export default class Progress extends React.Component<ProgressProps, any> {}
