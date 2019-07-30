/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

export interface IconProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 指定显示哪种图标
     */
    type?: string;

    /**
     * 指定图标大小
     */
    size?:
        | 'xxs'
        | 'xs'
        | 'small'
        | 'medium'
        | 'large'
        | 'xl'
        | 'xxl'
        | 'xxxl'
        | 'inherit';
}

export default class Icon extends React.Component<IconProps, any> {}
