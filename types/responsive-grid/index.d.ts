/// <reference types="react" />

import { HTMLAttributes, ElementType, Component } from "react";
import CommonProps from '../util';

export interface ResponsiveGridProps extends HTMLAttributes<HTMLElement>, CommonProps {
    rows?: number | string;
    columns?: number | string;
    gap?: number | Array<number>;
    device?: 'phone' | 'tablet' | 'desktop';
    component?: ElementType;
}

export interface CellProps extends HTMLAttributes<HTMLElement>, CommonProps {
    component?: ElementType;
    rowSpan?: number;
    colSpan?: number | {
        desktop?: number;
        tablet?: number;
        phone?: number;
    };
}

export class Cell extends Component<CellProps, any>  {}

export default class ResponsiveGrid extends Component<ResponsiveGridProps, any> {
    static Cell: typeof Cell;
}
