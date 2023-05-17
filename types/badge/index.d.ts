/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLElement>, 'content'>, CommonProps {
    /**
     * 徽章依托的内容
     */
    children?: React.ReactNode;

    /**
     * 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏
     */
    count?: number | string;

    /**
     * 自定义节点内容
     */
    content?: React.ReactNode;

    /**
     * 展示的封顶的数字
     */
    overflowCount?: number | string;

    /**
     * 不展示数字，只展示一个小红点
     */
    dot?: boolean;

    /**
     * 当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示
     */
    showZero?: boolean;
}

export default class Badge extends React.Component<BadgeProps, any> {}
