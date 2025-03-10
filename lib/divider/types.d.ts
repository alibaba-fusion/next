import React from 'react';
import { CommonProps } from '../util';
/**
 * @api Divider
 */
export interface DividerProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 是否为虚线
     * @en Is it a dashed line
     * @defaultValue false
     */
    dashed?: boolean;
    /**
     * 线是水平还是垂直类型
     * @en Is the line of horizontal or vertical type
     * @defaultValue 'hoz'
     */
    direction?: 'hoz' | 'ver';
    /**
     * 分割线标题的位置
     * @en The position of the divider title
     * @defaultValue 'center'
     */
    orientation?: 'left' | 'right' | 'center';
}
