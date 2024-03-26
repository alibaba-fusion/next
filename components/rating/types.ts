import type React from 'react';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';

type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>;

export type RatingLocale = Locale['Rating'];

/**
 * @api
 */
export interface RatingProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 默认值
     * @en Default value
     */
    defaultValue?: number;

    /**
     * 值（受控模式）
     * @en value（controlled mode）
     */
    value?: number;

    /**
     * 尺寸
     * @en size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 评分的总数
     * @en Full mark of rating
     * @defaultValue 5
     */
    count?: number;

    /**
     * 是否显示 grade
     * @en Display grade or not
     * @defaultValue false
     */
    showGrade?: boolean;

    /**
     * 是否允许半星评分
     * @en Allow half star or not
     */
    allowHalf?: boolean;

    /**
     * 是否允许再次点击后清除
     * @en Whether to allow clear when click again
     * @defaultValue false
     */
    allowClear?: boolean;

    /**
     * 用户点击评分时触发的回调
     * @en Callback function on click star
     */
    onChange?: (value: number) => void;

    /**
     * 用户 hover 评分时触发的回调
     * @en Callback function on hover star
     */
    onHoverChange?: (value?: number) => void;

    /**
     * 是否禁用
     * @en Disabled or not
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 是否为只读态，效果上同 disabeld
     * @defaultValue false
     * @skip
     */
    readOnly?: boolean;

    /**
     * 是否为预览态
     * @en Is preview mode or not
     * @defaultValue false
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容（isPreview 时必传，否则预览不生效）
     * @en Render method when is preview mode.（Required when isPreview=true）
     * @param value - 评分值 - score
     * @param props - 组件参数对象 - The props of rating
     * @returns 预览模式下的渲染内容 - The render content when preview
     */
    renderPreview?: (value: number, props: RatingProps) => React.ReactNode;

    /**
     * 评分文案生成方法，传入 id 支持无障碍时，读屏软件可读
     * @en Custom display of grade
     * @param val - 当前分值 - score value
     * @returns 该分值的渲染文案 - score label
     */
    readAs?: (val: number) => React.ReactNode;

    /**
     * 多语言文案
     * @skip
     */
    locale?: RatingLocale;

    /**
     * 实验属性：自定义评分 icon 类型
     * @experimental
     * @skip
     */
    iconType?: string;

    /**
     * 实验属性：开启 `-webkit-text-stroke` 显示边框颜色，在 IE 中无效
     * @experimental
     * @skip
     */
    strokeMode?: boolean;

    /**
     * @deprecated Use `showGrade=true` instead
     */
    type?: string;
}

export interface RatingState {
    value: number;
    hoverValue: number;
    cleanedValue: number | null;
    iconSpace: number;
    iconSize: number;
    clicked: boolean;
    disabled?: boolean;
}
