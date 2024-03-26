/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface CardProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 卡片的上的图片 / 视频
     */
    media?: React.ReactNode;

    /**
     * 卡片的标题
     */
    title?: React.ReactNode;

    /**
     * 卡片的副标题
     */
    subTitle?: React.ReactNode;

    /**
     * 卡片操作组，位置在卡片底部
     */
    actions?: React.ReactNode;

    /**
     * 是否显示标题的项目符号
     */
    showTitleBullet?: boolean;

    /**
     * 是否展示头部的分隔线
     */
    showHeadDivider?: boolean;

    /**
     * 内容区域的固定高度
     */
    contentHeight?: string | number;

    /**
     * 标题区域的用户自定义内容
     */
    extra?: React.ReactNode;

    /**
     * 是否开启自由模式，开启后card 将使用子组件配合使用, 设置此项后 title, subtitle, 等等属性都将失效
     */
    free?: boolean;
    hasBorder?: boolean;
}

export interface CardBulletHeaderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 卡片的标题
     */
    title?: React.ReactNode;

    /**
     * 卡片的副标题
     */
    subTitle?: React.ReactNode;
    /**
     * 是否显示标题的项目符号
     */
    showTitleBullet?: boolean;
    /**
     * 标题区域的用户自定义内容
     */
    extra?: React.ReactNode;
}

export interface CardCollaspeContentProps extends HTMLAttributesWeak, CommonProps {
    contentHeight?: string | number;
}
export interface CardCollapseContentProps extends HTMLAttributesWeak, CommonProps {
    contentHeight?: string | number;
}

export interface CardHeaderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 卡片的标题
     */
    title?: React.ReactNode;

    /**
     * 卡片的副标题
     */
    subTitle?: React.ReactNode;

    /**
     * 标题区域的用户自定义内容
     */
    extra?: React.ReactNode;

    /**
     * 设置标签类型
     */
    component?: React.ElementType;
}

export interface CardContentProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置标签类型
     */
    component?: React.ElementType;
}

export interface CardMediaProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置标签类型
     */
    component?: React.ElementType;
    /**
     * 背景图片地址
     */
    image?: string;
    /**
     * 媒体源文件地址
     */
    src?: string;
}

export interface CardActionsProps extends HTMLAttributesWeak, CommonProps {}

export interface CardDividerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 分割线是否向内缩进
     */
    inset?: boolean;
}

export default class Card extends React.Component<CardProps, any> {
    static BulletHeader: React.ComponentType<CardBulletHeaderProps>;
    static CollaspeContent: React.ComponentType<CardCollaspeContentProps>;
    static CollapseContent: React.ComponentType<CardCollapseContentProps>;
    static Header: React.ComponentType<CardHeaderProps>;
    static Content: React.ComponentType<CardContentProps>;
    static Media: React.ComponentType<CardMediaProps>;
    static Actions: React.ComponentType<CardActionsProps>;
    static Divider: React.ComponentType<CardDividerProps>;
}
