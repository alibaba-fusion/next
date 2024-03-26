import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import type { ItemProps, StepStatus } from '../types';
/** Step.Item */
declare class StepItem extends Component<ItemProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        status: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        direction: PropTypes.Requireable<string>;
        labelPlacement: PropTypes.Requireable<string>;
        shape: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<string>;
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        percent: PropTypes.Requireable<number>;
        index: PropTypes.Requireable<number>;
        total: PropTypes.Requireable<number>;
        animation: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        parentWidth: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        parentHeight: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        readOnly: PropTypes.Requireable<boolean>;
        onResize: PropTypes.Requireable<(...args: any[]) => any>;
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
        shape: string;
        index: number;
        total: number;
        onClick: () => void;
        stretch: boolean;
    };
    ro: ResizeObserver;
    container: HTMLDivElement;
    stepNode: HTMLDivElement;
    step: HTMLLIElement;
    body: HTMLDivElement;
    title: HTMLDivElement;
    tail: HTMLDivElement;
    eventHandler: {
        off: () => void;
    } | undefined;
    constructor(props: ItemProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    adjustItemWidth(): void;
    adjustTail(): void;
    resize(): void;
    _getNode(): {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    getNode(args: {
        stepCls: string;
        overlayCls: {
            width: string;
        } | null;
        others: Omit<ItemProps, keyof typeof StepItem.propTypes>;
    }): React.JSX.Element;
    getStyle(): {
        width: string | number;
    };
    onClick: () => false | undefined;
    removeClickedCls(): void;
    _itemRender(index: number, status: StepStatus): React.ReactNode;
    _refHandlerCreator<Name extends 'container' | 'stepNode' | 'step' | 'body' | 'title' | 'tail'>(refName: Name): (ref: this[Name]) => void;
    render(): React.JSX.Element;
}
declare const _default: import("../../config-provider/types").ConfiguredComponentClass<ItemProps<HTMLElement> & import("../../config-provider/types").ComponentCommonProps, StepItem, {}>;
export default _default;
