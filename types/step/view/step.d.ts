import PropTypes from 'prop-types';
import React, { Component, type ReactNode } from 'react';
import type { StepProps, StepState } from '../types';
/** Step */
declare class Step extends Component<StepProps, StepState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        current: PropTypes.Requireable<number>;
        direction: PropTypes.Requireable<string>;
        labelPlacement: PropTypes.Requireable<string>;
        shape: PropTypes.Requireable<string>;
        readOnly: PropTypes.Requireable<boolean>;
        animation: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        stretch: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        current: number;
        direction: string;
        labelPlacement: string;
        shape: string;
        animation: boolean;
        itemRender: null;
        stretch: boolean;
    };
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
    };
    static getDerivedStateFromProps(newProps: StepProps): {
        current: number | undefined;
    } | null;
    step: HTMLOListElement | null;
    constructor(props: StepProps, context?: unknown);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    adjustHeight(): void;
    resize(): void;
    _getValidChildren(
        children: ReactNode
    ): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    _stepRefHandler: (ref: HTMLOListElement | null) => void;
    render(): React.JSX.Element;
}
declare const _default: typeof Step;
export default _default;
