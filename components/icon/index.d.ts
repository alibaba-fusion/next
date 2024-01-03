/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

export interface IconProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 指定显示哪种图标
     */
    type?: string;

    /**
     * 指定图标大小
     */
    size?: number | 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'xxxl' | 'inherit';
}

export interface iconOptions {
    /**
     * 如果页面上已经有同 id 的标签，那么不会再加载这个图标库
     */
    scriptUrl: string;
}

export class CustomIcon extends React.Component<IconProps, any> {}

export default class Icon extends React.Component<IconProps, any> {
    static createFromIconfontCN(options: iconOptions): typeof CustomIcon;
}
