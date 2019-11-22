/// <reference types="react" />

import { HTMLAttributes, ElementType, Component } from "react";
import CommonProps from '../util';

export interface BoxProps extends HTMLAttributes<HTMLElement>, CommonProps {
    device?: 'phone' | 'tablet' | 'desktop';
    flex?: number | Array<number> | Array<string>;
    direction?: 'row' | 'column';
    wrap?: boolean;
    spacing?: number | Array<number>;
    margin?: number | Array<number>;
    padding?: number | Array<number>;
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    align?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
}

export default class Box extends Component<BoxProps, any> {}
