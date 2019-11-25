/// <reference types="react" />

import { HTMLAttributes, ElementType, Component } from "react";
import CommonProps from '../util';

export interface BoxProps extends HTMLAttributes<HTMLElement>, CommonProps {
    device?: 'phone' | 'tablet' | 'desktop';
    flex?: number | Array<number | string> ;
    direction?: 'row' | 'column';
    wrap?: boolean;
    spacing?: number | Array<number>;
    margin?: number | Array<number>;
    padding?: number | Array<number>;
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | string;
    align?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch' | string;
}

export default class Box extends Component<BoxProps, any> {}
