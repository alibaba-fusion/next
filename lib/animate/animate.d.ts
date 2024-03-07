import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { AnimateProps } from './types';
/**
 * Animate
 */
declare class Animate extends Component<AnimateProps> {
    static displayName: string;
    static propTypes: {
        animation: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        animationAppear: PropTypes.Requireable<boolean>;
        component: PropTypes.Requireable<any>;
        singleMode: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<NonNullable<PropTypes.ReactElementLike | (PropTypes.ReactElementLike | null | undefined)[] | null | undefined>>;
        beforeAppear: PropTypes.Requireable<(...args: any[]) => any>;
        onAppear: PropTypes.Requireable<(...args: any[]) => any>;
        afterAppear: PropTypes.Requireable<(...args: any[]) => any>;
        beforeEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onEnter: PropTypes.Requireable<(...args: any[]) => any>;
        afterEnter: PropTypes.Requireable<(...args: any[]) => any>;
        beforeLeave: PropTypes.Requireable<(...args: any[]) => any>;
        onLeave: PropTypes.Requireable<(...args: any[]) => any>;
        afterLeave: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        animationAppear: boolean;
        component: string;
        singleMode: boolean;
        beforeAppear: () => void;
        onAppear: () => void;
        afterAppear: () => void;
        beforeEnter: () => void;
        onEnter: () => void;
        afterEnter: () => void;
        beforeLeave: () => void;
        onLeave: () => void;
        afterLeave: () => void;
    };
    normalizeNames(names: AnimateProps['animation']): {
        appear: string | undefined;
        appearActive: string;
        enter: string;
        enterActive: string;
        leave: string;
        leaveActive: string;
    } | undefined;
    render(): React.JSX.Element;
}
export default Animate;
