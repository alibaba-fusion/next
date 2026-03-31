import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import type { AffixProps, AffixState, AffixMode } from './types';
/** Affix */
declare class Affix extends Component<AffixProps, AffixState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        container: PropTypes.Requireable<(...args: any[]) => any>;
        offsetTop: PropTypes.Requireable<number>;
        offsetBottom: PropTypes.Requireable<number>;
        onAffix: PropTypes.Requireable<(...args: any[]) => any>;
        useAbsolute: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        container: () => Window & typeof globalThis;
        onAffix: () => void;
    };
    static _getAffixMode(nextProps: AffixProps): AffixMode;
    constructor(props: AffixProps, context?: unknown);
    static getDerivedStateFromProps(nextProps: AffixProps): {
        affixMode: AffixMode;
    } | null;
    componentDidMount(): void;
    componentDidUpdate(prevProps: AffixProps): void;
    componentWillUnmount(): void;
    resizeObserver: ResizeObserver;
    timeout: ReturnType<typeof setTimeout> | null;
    affixNode: HTMLDivElement;
    affixChildNode: HTMLDivElement;
    _clearContainerEvent: () => void;
    _setEventHandlerForContainer(getContainer: NonNullable<AffixProps['container']>): void;
    _removeEventHandlerForContainer(getContainer: NonNullable<AffixProps['container']>): void;
    updatePosition: () => void;
    _updateNodePosition: () => false | undefined;
    _setAffixStyle(affixStyle: AffixState['style'], affixed?: boolean): void;
    _setContainerStyle(containerStyle: AffixState['containerStyle']): void;
    _getOffset(
        affixNode: HTMLDivElement,
        affixContainer: Element | Window
    ): {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    _affixNodeRefHandler: (ref: HTMLDivElement) => void;
    _affixChildNodeRefHandler: (ref: HTMLDivElement) => void;
    render(): React.JSX.Element;
}
export { AffixProps };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    AffixProps & import('../config-provider/types').ComponentCommonProps,
    Affix,
    {}
> & {
    _getAffixMode: typeof Affix._getAffixMode;
};
export default _default;
