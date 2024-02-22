import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { AnimateChildProps } from './types';
export default class AnimateChild extends Component<AnimateChildProps> {
    static displayName: string;
    static propTypes: {
        names: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        onAppear: PropTypes.Requireable<(...args: any[]) => any>;
        onAppearing: PropTypes.Requireable<(...args: any[]) => any>;
        onAppeared: PropTypes.Requireable<(...args: any[]) => any>;
        onEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onEntering: PropTypes.Requireable<(...args: any[]) => any>;
        onEntered: PropTypes.Requireable<(...args: any[]) => any>;
        onExit: PropTypes.Requireable<(...args: any[]) => any>;
        onExiting: PropTypes.Requireable<(...args: any[]) => any>;
        onExited: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        onAppear: () => void;
        onAppearing: () => void;
        onAppeared: () => void;
        onEnter: () => void;
        onEntering: () => void;
        onEntered: () => void;
        onExit: () => void;
        onExiting: () => void;
        onExited: () => void;
    };
    endListeners: Record<string, Array<(e: UIEvent) => void>>;
    timeoutMap: Record<string, number>;
    node: HTMLElement;
    transitionOff: () => void;
    animationOff: () => void;
    constructor(props: AnimateChildProps);
    componentWillUnmount(): void;
    generateEndListener(
        node: HTMLElement,
        done: () => void,
        eventName: string,
        id: string
    ): (e: UIEvent) => void;
    addEndListener(node: HTMLElement, done: () => void): void;
    removeEndtListener(): void;
    removeClassNames(node: HTMLElement, names: NonNullable<AnimateChildProps['names']>): void;
    handleEnter(node: HTMLElement, isAppearing: boolean): void;
    handleEntering(node: HTMLElement, isAppearing: boolean): void;
    handleEntered(node: HTMLElement, isAppearing: boolean): void;
    handleExit(node: HTMLElement): void;
    handleExiting(node: HTMLElement): void;
    handleExited(node: HTMLElement): void;
    render(): React.JSX.Element;
}
