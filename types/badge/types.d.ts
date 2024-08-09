import React from 'react';
import { CommonProps } from '../util';
/**
 * @api Badge
 */
export interface BadgeProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'content'>,
        CommonProps {
    /**
     * 徽章依托的内容
     * @en content of Badge based on
     */
    children?: React.ReactNode;
    /**
     * 展示的数字，大于 overflowCount 时显示为 overflowCount+，为 0 时隐藏
     * @en number to display, display overflowCount+ when count is greater than overflowCount, display none when count equal to 0
     * @defaultValue 0
     */
    count?: number | string;
    /**
     * 自定义节点内容
     * @en customized node content
     */
    content?: React.ReactNode;
    /**
     * 展示的封顶的数字
     * @en max number to display
     * @defaultValue 99
     */
    overflowCount?: number | string;
    /**
     * 不展示数字，只展示一个小红点
     * @en display a red dot, not a number
     * @defaultValue false
     */
    dot?: boolean;
    /**
     * 当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示
     * @en whether to show count when count is 0
     * @defaultValue false
     */
    showZero?: boolean;
}
export interface BadgeSubProps
    extends Pick<
        BadgeProps,
        'prefix' | 'count' | 'showZero' | 'overflowCount' | 'content' | 'dot' | 'style'
    > {}
export interface BadgeSubState {
    lastCount: BadgeSubProps['count'];
    currentCount: BadgeSubProps['count'];
}
