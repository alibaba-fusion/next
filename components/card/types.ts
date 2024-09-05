import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import type { CommonProps } from '../util';

type HTMLAttributesWeak = Omit<HTMLAttributes<HTMLElement>, 'title'>;

/**
 * @api Card
 * @order 0
 */
export interface CardProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置类名前缀
     * @en The prefix of class
     * @defaultValue 'next-'
     * @skip
     */
    prefix?: string;

    /**
     * 卡片的上的图片 / 视频
     * @en Media content
     */
    media?: ReactNode;

    /**
     * 卡片的标题
     * @en Title of card
     */
    title?: ReactNode;

    /**
     * 卡片的副标题
     * @en Sub title of card
     */
    subTitle?: ReactNode;

    /**
     * 卡片操作组，位置在卡片底部
     * @en Actions of card
     */
    actions?: ReactNode;

    /**
     * 是否显示标题的项目符号
     * @en If show title bullet
     * @defaultValue true
     */
    showTitleBullet?: boolean;

    /**
     * 是否显示标题的项目符号
     * @en If show title bullet
     * @deprecated Use showTitleBullet
     * @skip
     */
    titlePrefixLine?: boolean;

    /**
     * 是否展示头部的分隔线
     * @en If show head divider
     * @defaultValue true
     */
    showHeadDivider?: boolean;

    /**
     * 是否展示头部的分隔线
     * @en If show head divider
     * @deprecated Use showHeadDivider
     * @skip
     */
    titleBottomLine?: boolean;

    /**
     * 内容区域的固定高度
     * @en Height of content
     * @defaultValue 120
     */
    contentHeight?: string | number;

    /**
     * 内容区域的固定高度
     * @en Height of content
     * @deprecated Use contentHeight
     * @skip
     */
    bodyHeight?: string | number;

    /**
     * 标题区域的用户自定义内容
     * @en Extra of card header
     */
    extra?: ReactNode;

    /**
     * 是否开启自由模式，开启后 card 将使用子组件配合使用，设置此项后 title, subtitle, 等等属性都将失效
     * @en Whether to open free mode, if opened, can not set title subTitle ..., must use Card.Header Card.Content ... to set Card
     * @defaultValue false
     */
    free?: boolean;

    /**
     * 是否带边框
     * @en Whether to show border
     * @defaultValue true
     * @version 1.24
     */
    hasBorder?: boolean;
}

/**
 * @api Card.Media
 * @order 1
 */
export interface CardMediaProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置类名前缀
     * @en The prefix of class
     * @defaultValue 'next-'
     * @skip
     */
    prefix?: string;
    /**
     * 设置样式
     * @en The style of component
     * @defaultValue \{\}
     * @skip
     */
    style?: React.CSSProperties;
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'div'
     */
    component?: ElementType;
    /**
     * 背景图片地址
     * @en Media background image
     */
    image?: string;
    /**
     * 媒体源文件地址
     * @en Media source URL
     */
    src?: string;
}

/**
 * @api Card.Header
 * @order 2
 */
export interface CardHeaderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置类名前缀
     * @en The prefix of class
     * @defaultValue 'next-'
     * @skip
     */
    prefix?: string;
    /**
     * 卡片的标题
     * @en Title of card
     */
    title?: ReactNode;

    /**
     * 卡片的副标题
     * @en Sub Title of Card
     */
    subTitle?: ReactNode;

    /**
     * 标题区域的用户自定义内容
     * @en Extra of card header
     */
    extra?: ReactNode;

    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'div'
     */
    component?: ElementType;
}

/**
 * @api Card.Content
 * @order 3
 */
export interface CardContentProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置类名前缀
     * @en The prefix of class
     * @defaultValue 'next-'
     * @skip
     */
    prefix?: string;
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'div'
     */
    component?: ElementType;
}

/**
 * @api Card.Divider
 * @order 4
 */
export interface CardDividerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置类名前缀
     * @en The prefix of class
     * @defaultValue 'next-'
     * @skip
     */
    prefix?: string;
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'hr'
     */
    component?: ElementType;

    /**
     * 分割线是否向内缩进
     * @en inset
     */
    inset?: boolean;
}

/**
 * @api Card.Actions
 * @order 5
 */
export interface CardActionsProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置类名前缀
     * @en The prefix of class
     * @defaultValue 'next-'
     * @skip
     */
    prefix?: string;
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'div'
     */
    component?: ElementType;
}

export interface CardBulletHeaderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置类名前缀
     * @en The prefix of class
     * @defaultValue 'next-'
     * @skip
     */
    prefix?: string;
    /**
     * 卡片的标题
     */
    title?: ReactNode;

    /**
     * 卡片的副标题
     */
    subTitle?: ReactNode;
    /**
     * 是否显示标题的项目符号
     */
    showTitleBullet?: boolean;
    /**
     * 标题区域的用户自定义内容
     */
    extra?: ReactNode;
}

export interface CardCollaspeContentProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置类名前缀
     * @en The prefix of class
     * @defaultValue 'next-'
     * @skip
     */
    prefix?: string;
    /**
     * 设置内容区域的固定高度
     * @en Height of content
     * @defaultValue 120
     */
    contentHeight?: string | number;
}

export interface CardCollapseContentProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置类名前缀
     * @en The prefix of class
     * @defaultValue 'next-'
     * @skip
     */
    prefix?: string;
    /**
     * 设置内容区域的固定高度
     * @en Height of content
     * @defaultValue 120
     */
    contentHeight?: string | number;
}
