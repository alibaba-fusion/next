/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface CardProps extends HTMLAttributesWeak, CommonProps {
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
}

export default class Card extends React.Component<CardProps, any> {}
