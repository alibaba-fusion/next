/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

export interface DividerProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 是否为虚线
     */
    dashed?: boolean;
    /**
     * 线是水平还是垂直类型
     */
    direction?: 'hoz' | 'ver';
    /**
     * 分割线标题的位置
     */
    orientation?: 'left' | 'right' | 'center';
}

export default class Divider extends React.Component<DividerProps, any> {}
