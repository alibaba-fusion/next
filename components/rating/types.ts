/// <reference types="react" />

import * as React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    defaultValue?: any;
    onChange?: any;
}

export interface RatingProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 默认值
     */
    defaultValue?: number;

    /**
     * 值
     */
    value?: number;

    /**
     * 评分的总数
     */
    count?: number;

    /**
     * 是否显示 grade
     */
    showGrade?: boolean;

    /**
     * 尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否允许半星评分
     */
    allowHalf?: boolean;

    /**
     * 是否允许再次点击后清除
     */
    allowClear?: boolean;

    /**
     * 用户点击评分时触发的回调
     */
    onChange?: (value: number) => void;

    /**
     * 用户hover评分时触发的回调
     */
    onHoverChange?: (value?: number) => void;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 评分文案生成方法，传入id支持无障碍时，读屏软件可读
     */
    readAs?: (val: number) => void;

    prefix: string;
    // 实验属性: 自定义评分icon
    iconType: string;
    // 实验属性: 开启 `-webkit-text-stroke` 显示边框颜色，在IE中无效
    strokeMode: boolean;
    className: string;
    id: string;
    rtl: boolean;
    /**
     * 自定义国际化文案对象
     */
    locale: any;
    /**
     * 是否为预览态
     */
    isPreview: boolean;
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: any;
    /**
     * 是否为只读态，效果上同 disabeld
     */
    readOnly: boolean;
}

export interface RatingState {
    value?: number;
    hoverValue: number;
    cleanedValue: number | null;
    iconSpace: number;
    iconSize: number;
    clicked: boolean;
    disabled: boolean;
}

export default class Rating extends React.Component<RatingProps, any> {}
