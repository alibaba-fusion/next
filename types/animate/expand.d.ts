import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ExpandProps } from './types';
export default class Expand extends Component<ExpandProps> {
    static displayName: string;
    static propTypes: {
        animation: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        beforeEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onEnter: PropTypes.Requireable<(...args: any[]) => any>;
        afterEnter: PropTypes.Requireable<(...args: any[]) => any>;
        beforeLeave: PropTypes.Requireable<(...args: any[]) => any>;
        onLeave: PropTypes.Requireable<(...args: any[]) => any>;
        afterLeave: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        beforeEnter: () => void;
        onEnter: () => void;
        afterEnter: () => void;
        beforeLeave: () => void;
        onLeave: () => void;
        afterLeave: () => void;
    };
    leaving: boolean;
    styleBorderTopWidth: string;
    stylePaddingTop: string;
    styleHeight: string;
    stylePaddingBottom: string;
    styleBorderBottomWidth: string;
    borderTopWidth: string | number;
    paddingTop: string | number;
    height: number;
    paddingBottom: string | number;
    borderBottomWidth: string | number;
    constructor(props: ExpandProps);
    beforeEnter(node: HTMLElement): void;
    onEnter(node: HTMLElement): void;
    afterEnter(node: HTMLElement): void;
    beforeLeave(node: HTMLElement): void;
    onLeave(node: HTMLElement): void;
    afterLeave(node: HTMLElement): void;
    cacheCurrentStyle(node: HTMLElement): void;
    cacheComputedStyle(node: HTMLElement): void;
    setCurrentStyleToZero(node: HTMLElement): void;
    setCurrentStyleToComputedStyle(node: HTMLElement): void;
    restoreCurrentStyle(node: HTMLElement): void;
    render(): React.JSX.Element;
}
