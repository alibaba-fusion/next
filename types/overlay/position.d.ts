import { Component } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import type { PositionProps } from './types';
export default class Position extends Component<PositionProps> {
    static displayName: string;
    static VIEWPORT: 'viewport';
    static propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        target: PropTypes.Requireable<any>;
        container: PropTypes.Requireable<any>;
        align: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        offset: PropTypes.Requireable<any[]>;
        beforePosition: PropTypes.Requireable<(...args: any[]) => any>;
        onPosition: PropTypes.Requireable<(...args: any[]) => any>;
        needAdjust: PropTypes.Requireable<boolean>;
        autoFit: PropTypes.Requireable<boolean>;
        needListenResize: PropTypes.Requireable<boolean>;
        shouldUpdatePosition: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        pinFollowBaseElementWhenFixed: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        align: string;
        offset: number[];
        beforePosition: () => void;
        onPosition: () => void;
        needAdjust: boolean;
        autoFit: boolean;
        needListenResize: boolean;
        shouldUpdatePosition: boolean;
        rtl: boolean;
    };
    resizeObserver: ResizeObserver;
    shouldUpdatePosition: boolean;
    updateCount: number;
    resizeTimeout: number;
    constructor(props: PositionProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: PositionProps): void;
    componentWillUnmount(): void;
    observe: () => void;
    unobserve: () => void;
    shouldIgnorePosition: () => boolean;
    setPosition(): void;
    getContentNode(): null | HTMLElement;
    getTargetNode(): Element | Text | 'viewport' | null;
    handleResize(): void;
    render():
        | import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>>
        | (import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>> &
              string)
        | (import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>> &
              number)
        | (import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>> &
              false)
        | (import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>> &
              true)
        | (import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>> &
              import('react').ReactElement<
                  any,
                  string | import('react').JSXElementConstructor<any>
              >)
        | (import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>> &
              import('react').ReactPortal)
        | undefined;
}
