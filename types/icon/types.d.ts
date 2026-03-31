import type * as React from 'react';
import type { CommonProps } from '../util';
export interface IconSvgProps extends React.SVGAttributes<SVGSVGElement>, CommonProps {
    /**
     * 指定显示哪种图标
     * @en Type of icon
     */
    type?: string;
    /**
     * 指定图标大小
     * @en Size of icon
     * @defaultValue 'medium'
     */
    size?: number | 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'xxxl' | 'inherit';
}
/**
 * @api Icon
 */
export interface IconProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 指定显示哪种图标
     * @en Type of icon
     */
    type?: string;
    /**
     * 指定图标大小
     * @en Size of icon
     * @defaultValue 'medium'
     */
    size?: number | 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'xxxl' | 'inherit';
}
export interface IconOptions {
    /**
     * 如果页面上已经有同 id 的标签，那么不会再加载这个图标库
     * @en If there is already a tag with the same ID on the page, the icon library will not be loaded again
     */
    scriptUrl: string;
    /**
     * extra common props of icon-font
     * @skip
     */
    extraCommonProps?: React.SVGAttributes<SVGSVGElement>;
}
