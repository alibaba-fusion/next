import type React from 'react';
import type { CommonProps } from '../util';
/**
 * @api Avatar
 * @order 0
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 孩子节点列表
     * @en children node list
     */
    children?: React.ReactNode;
    /**
     * 头像的大小
     * @en The size of the avatar
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large' | number;
    /**
     * 头像的形状
     * @en The shape of the avatar
     * @defaultValue 'circle'
     */
    shape?: 'circle' | 'square';
    /**
     * icon 类头像的图标类型，可设为 Icon 的 `type` 或 `ReactElement`
     * @en The icon type of the icon avatar, can be set to the `type` or `ReactElement` of Icon
     */
    icon?: React.ReactElement | string;
    /**
     * 图片类头像的资源地址
     * @en The resource address of the image avatar
     */
    src?: string;
    /**
     * 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为
     * @en The event of the image loading failure, returning false will close the component's default fallback behavior
     */
    onError?: () => boolean;
    /**
     * 图片的其他属性
     * @en The other properties of the image
     */
    imgProps?: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'onError' | 'alt'>;
    /**
     * 图像无法显示时的 alt 替代文本
     * @en The alt replacement text when the image cannot be displayed
     */
    alt?: string;
    /**
     * 图片类头像响应式资源地址
     * @en The responsive resource address of the image avatar
     */
    srcSet?: string;
}
