import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ProgressCircleState } from '../types';
import { type ProgressWithDefaultProps } from './progress';
export type ProgressCircleProps = Omit<ProgressWithDefaultProps, 'shape' | 'hasBorder'>;
export default class Circle extends Component<ProgressCircleProps, ProgressCircleState> {
    static propTypes: {
        size: PropTypes.Requireable<string>;
        percent: PropTypes.Requireable<number>;
        state: PropTypes.Requireable<string>;
        progressive: PropTypes.Requireable<boolean>;
        textRender: PropTypes.Requireable<(...args: any[]) => any>;
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        backgroundColor: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
    };
    underlay: SVGPathElement | null;
    overlay: SVGPathElement | null;
    constructor(props: ProgressCircleProps);
    componentDidMount(): void;
    _getCssValue(dom: SVGPathElement, name: string): number;
    _underlayRefHandler: (ref: SVGPathElement) => void;
    _overlayRefHandler: (ref: SVGPathElement) => void;
    _computeOverlayStrokeDashOffset(): number;
    _getPath(radius: number): string;
    render(): React.JSX.Element;
}
