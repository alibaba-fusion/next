import { ReactNode } from "react";

export interface IconsType {
    [key: string]: ReactNode;
}

export default interface CommonProps {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;

    /**
     * 国际化文案对象，属性为组件的 displayName
     */
    locale?: {};

    /**
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     */
    pure?: boolean;

    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     */
    warning?: boolean;

    /**
     * 是否开启 rtl 模式
     */
    rtl?: boolean;
}
