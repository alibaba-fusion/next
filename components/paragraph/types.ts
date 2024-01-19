import React from 'react';
import { CommonProps } from '../util';

/**
 * @api Paragraph
 */
export interface ParagraphProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 额外的样式名 会附加到 root dom 上
     * @en Additional class name that will be appended to the root DOM element
     */
    className?: string;

    /**
     * 什么方式展示段落
     * @en How to display the paragraph
     * @remarks
     * - 'long' :  展示所有文本
     * - 'short' : 展示三行以内（非强制）
     * @defaultValue 'long'
     */
    type?: 'long' | 'short';

    /**
     * 组件大小。
     * @en The size of the component.
     * @remarks
     * - 'medium' : 中号
     * - 'short' : 小号
     * @defaultValue 'medium'
     */
    size?: 'medium' | 'small';
}
