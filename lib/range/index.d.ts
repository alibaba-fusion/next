/// <reference types="react" />
export type { RangeProps, RangeValueType } from './types';
declare const _default: import("../config-provider/types").ConfiguredComponentClass<import("./types").RangeProps & import("../config-provider/types").ComponentCommonProps, {
    _moving: {
        start: number;
        end: number;
        startValue: import("./types").RangeValueType | undefined;
        dragging?: "lower" | "upper" | undefined;
    } | null;
    dom: HTMLDivElement;
    isFixedWidth: boolean;
    lastPosition: number;
    oldDragging?: "lower" | "upper" | undefined;
    _onMouseMoveListener: {
        off: () => void;
    } | null;
    _onMouseUpListener: {
        off: () => void;
    } | null;
    _onContextMenuListener: {
        off: () => void;
    } | null;
    _onTouchMoveListener: {
        off: () => void;
    } | null;
    _onTouchEndListener: {
        off: () => void;
    } | null;
    readonly props: Readonly<import("../util").RequiredSome<import("./types").RangeProps, "reverse" | "rtl" | "disabled" | "min" | "max" | "prefix" | "pure" | "slider" | "onChange" | "step" | "isPreview" | "fixedWidth" | "marks" | "marksPosition" | "onProcess" | "hasTip" | "tipRender" | "tooltipVisible">> & Readonly<Pick<{
        prefix: string;
        slider: string;
        min: number;
        max: number;
        step: number;
        marks: boolean;
        disabled: boolean;
        fixedWidth: boolean;
        tooltipVisible: boolean;
        hasTip: boolean;
        onChange: () => void;
        onProcess: () => void;
        tipRender: (value: import("./types").RangeValueType) => import("./types").RangeValueType;
        reverse: boolean;
        pure: boolean;
        marksPosition: string;
        rtl: boolean;
        isPreview: boolean;
    }, never>>;
    _marksToScales(marks: number | false | number[] | Record<number, string>): number | false | number[];
    _calcScales(): number[];
    _calcMarks(): Record<number, string>;
    _onMouseDown(e: import("react").MouseEvent<HTMLDivElement, MouseEvent>): void;
    _onTouchStart(e: import("react").TouchEvent<HTMLDivElement>): void;
    onKeyDown(e: import("react").KeyboardEvent<HTMLDivElement>): void;
    _onContextMenu(e: import("react").MouseEvent<HTMLDivElement, MouseEvent>): void;
    _start(position: number): void;
    _end(): void;
    _move(e: import("react").MouseEvent<Element, MouseEvent> | import("react").TouchEvent<Element>): void;
    _onProcess(position: number, start?: boolean | undefined): void;
    _addDocumentMouseEvents(): void;
    _addDocumentTouchEvents(): void;
    _removeDocumentEvents(): void;
    _positionToCurrent(position: number): number;
    _currentToValue(current: number, preValue: number | [number, number], lastPosition: number, isFixedWidth: boolean): import("./types").RangeValueType | undefined;
    handleLowerTooltipVisibleChange(visible: boolean): void;
    handleUpperTooltipVisibleChange(visible: boolean): void;
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends keyof import("./types").RangeState>(state: import("./types").RangeState | ((prevState: Readonly<import("./types").RangeState>, props: Readonly<import("./types").RangeProps>) => import("./types").RangeState | Pick<import("./types").RangeState, K> | null) | Pick<import("./types").RangeState, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    state: Readonly<import("./types").RangeState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<import("./types").RangeProps>, nextState: Readonly<import("./types").RangeState>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").RangeProps>, prevState: Readonly<import("./types").RangeState>): any;
    componentDidUpdate?(prevProps: Readonly<import("./types").RangeProps>, prevState: Readonly<import("./types").RangeState>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("./types").RangeProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").RangeProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("./types").RangeProps>, nextState: Readonly<import("./types").RangeState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").RangeProps>, nextState: Readonly<import("./types").RangeState>, nextContext: any): void;
}, {}>;
export default _default;
