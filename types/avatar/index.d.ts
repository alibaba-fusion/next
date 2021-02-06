/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

export interface AvatarProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * children
     */
    children?: React.ReactNode;
    /**
         * 头像的大小
         */
        size?: 'small' | 'medium' | 'large' | number;
        /**
         * 头像的形状
         */
        shape?: 'circle' | 'square';
        /**
         * icon 类头像的图标类型，可设为 Icon 的 `type` 或 `ReactNode`
         */
        icon?: React.ReactNode | string;
        /**
         * 图片类头像的资源地址
         */
        src?: string;
        /**
         * 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为
         */
        onError?: () => boolean,
        /**
         * 图像无法显示时的 alt 替代文本
         */
        alt?: string;
        /**
         * 图片类头像响应式资源地址
         */
        srcSet?: string;

}

export default class Avatar extends React.Component<AvatarProps, any> {}
