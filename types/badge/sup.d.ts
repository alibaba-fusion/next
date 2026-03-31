import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { BadgeSubProps, BadgeSubState } from './types';
declare class Sup extends Component<BadgeSubProps, BadgeSubState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        count: PropTypes.Requireable<number>;
        showZero: PropTypes.Requireable<boolean>;
        overflowCount: PropTypes.Requireable<number>;
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        dot: PropTypes.Requireable<boolean>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        prefix: string;
        count: number;
        showZero: boolean;
        overflowCount: number;
        dot: boolean;
    };
    supEl: HTMLElement | null;
    static renderDigit(prefix: string, digit: number, key: string | number): React.JSX.Element;
    static renderNumber(prefix: string, count: number | string): React.JSX.Element[];
    constructor(props: BadgeSubProps);
    static getDerivedStateFromProps(
        nextProps: BadgeSubProps,
        prevState: BadgeSubState
    ): {
        lastCount: string | number | undefined;
        currentCount: string | number | undefined;
    } | null;
    componentDidMount(): void;
    componentDidUpdate(prevProps: BadgeSubProps): void;
    computeStyle(removeTransition: boolean, revert?: boolean): void;
    getPositionByDigit(digit: number, i: number, revert?: boolean): number;
    saveRef: React.LegacyRef<HTMLElement>;
    render(): React.FunctionComponentElement<any>;
}
declare const _default: typeof Sup;
export default _default;
