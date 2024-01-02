/// <reference types="react" />

import React, { HTMLAttributes, ElementType, Component } from 'react';
import { CommonProps } from '../util';

export interface BoxProps extends HTMLAttributes<HTMLElement>, CommonProps {
    device?: 'phone' | 'tablet' | 'desktop';
    flex?: number | Array<number | string>;
    direction?: 'row' | 'column' | 'row-reverse';
    wrap?: boolean;
    spacing?: number | Array<number>;
    margin?: number | Array<number>;
    padding?: number | Array<number>;
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | string;
    align?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch' | string;
    component?: keyof React.JSX.IntrinsicElements;
}

export default class Box extends Component<BoxProps, any> {}
