import type React from 'react';
import type { CommonProps } from '../util';
/**
 * @api Progress
 */
export interface ProgressProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 形态
     * @en Shape
     * @defaultValue 'line'
     */
    shape?: 'circle' | 'line';
    /**
     * 尺寸
     * @en Size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 所占百分比
     * @en Current percente of progress
     * @defaultValue 0
     */
    percent?: number;
    /**
     * 进度状态, 显示优先级: color \> progressive \> state
     * @en State of progress, priority: color \> progressive \> state
     * @defaultValue 'normal'
     *
     */
    state?: 'normal' | 'success' | 'error';
    /**
     * 是否为色彩阶段变化模式, 显示优先级: color \> progressive \> state
     * @en Progressive mode (with dynamic color), priority: color \> progressive \> state
     * @defaultValue false
     */
    progressive?: boolean;
    /**
     * 是否添加 Border（只适用于 Line Progress)
     * @en Has border for progress line
     * @defaultValue false
     */
    hasBorder?: boolean;
    /**
     * 文本渲染函数
     * @en Text render
     * @param percent - 当前的进度信息 - current percent
     * @param option - 额外的参数 - additional options
     * @returns 文本节点 - text node
     * @defaultValue percent =\> \`$\{Math.floor(percent)\}%\`
     */
    textRender?: (
        percent: number,
        option?: {
            rtl?: boolean;
        }
    ) => React.ReactNode;
    /**
     * 进度条颜色, 显示优先级: color \> progressive \> state
     * @en progressbar color, priority: color \> progressive \> state
     */
    color?: string;
    /**
     * 背景色
     * @en Background color
     */
    backgroundColor?: string;
}
export interface ProgressCircleState {
    underlayStrokeWidth: number;
    overlayStrokeWidth: number;
}
