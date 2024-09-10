/// <reference types="react" />
import type { StepProps, ItemProps } from './types';
export type { StepProps, ItemProps };
declare const _default: import("../config-provider/types").ConfiguredComponentClass<StepProps & import("../config-provider/types").ComponentCommonProps, {
    step: HTMLOListElement | null;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    adjustHeight(): void;
    resize(): void;
    _getValidChildren(children: import("react").ReactNode): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
    _stepRefHandler: (ref: HTMLOListElement | null) => void;
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends keyof import("./types").StepState>(state: import("./types").StepState | ((prevState: Readonly<import("./types").StepState>, props: Readonly<StepProps>) => import("./types").StepState | Pick<import("./types").StepState, K> | null) | Pick<import("./types").StepState, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<StepProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    state: Readonly<import("./types").StepState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    shouldComponentUpdate?(nextProps: Readonly<StepProps>, nextState: Readonly<import("./types").StepState>, nextContext: any): boolean;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<StepProps>, prevState: Readonly<import("./types").StepState>): any;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<StepProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<StepProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<StepProps>, nextState: Readonly<import("./types").StepState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<StepProps>, nextState: Readonly<import("./types").StepState>, nextContext: any): void;
}, {}> & {
    Item: import("../config-provider/types").ConfiguredComponentClass<ItemProps<HTMLElement> & import("../config-provider/types").ComponentCommonProps, {
        ro: import("resize-observer-polyfill").default;
        container: HTMLDivElement;
        stepNode: HTMLDivElement;
        step: HTMLLIElement;
        body: HTMLDivElement;
        title: HTMLDivElement;
        tail: HTMLDivElement;
        eventHandler: {
            off: () => void;
        } | undefined;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        adjustItemWidth(): void;
        adjustTail(): void;
        resize(): void;
        _getNode(): {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
        getNode(args: {
            stepCls: string;
            overlayCls: {
                width: string;
            } | null;
            others: Omit<ItemProps<HTMLElement>, "animation" | "content" | "direction" | "title" | "stretch" | "rtl" | "icon" | "disabled" | "total" | "popupContainer" | "prefix" | "locale" | "pure" | "device" | "errorBoundary" | "warning" | "children" | "defaultPropsConfig" | "className" | "status" | "onClick" | "readOnly" | "shape" | "itemRender" | "percent" | "index" | "labelPlacement" | "parentWidth" | "parentHeight" | "onResize">;
        }): import("react").JSX.Element;
        getStyle(): {
            width: string | number;
        };
        onClick: () => false | undefined;
        removeClickedCls(): void;
        _itemRender(index: number, status: import("./types").StepStatus): import("react").ReactNode;
        _refHandlerCreator<Name extends "container" | "body" | "title" | "step" | "tail" | "stepNode">(refName: Name): (ref: any[Name]) => void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<ItemProps<HTMLElement>>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<ItemProps<HTMLElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<ItemProps<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ItemProps<HTMLElement>>, prevState: Readonly<{}>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ItemProps<HTMLElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ItemProps<HTMLElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ItemProps<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ItemProps<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
};
export default _default;
