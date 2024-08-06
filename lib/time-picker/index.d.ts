/// <reference types="react" />
export type { TimePickerProps } from './types';
declare const _default: import("../config-provider/types").ConfiguredComponentClass<import("./types").TimePickerProps & import("../config-provider/types").ComponentCommonProps, {
    inputAsString: boolean;
    readonly props: Readonly<import("../util").RequiredSome<import("./types").TimePickerProps, "size" | "rtl" | "disabled" | "format" | "prefix" | "locale" | "onChange" | "onVisibleChange" | "popupAlign" | "hasClear" | "popupTriggerType">> & Readonly<Pick<{
        prefix: string;
        rtl: boolean;
        locale: Partial<{
            placeholder: string;
            clear: string;
            hour: string;
            minute: string;
            second: string;
            ok: string;
        }> & {
            momentLocale?: string | undefined;
        };
        size: string;
        format: string;
        hasClear: boolean;
        disabled: boolean;
        popupAlign: string;
        popupTriggerType: string;
        onChange: () => void;
        onVisibleChange: () => void;
    }, never>>;
    onValueChange(newValue: import("moment").Moment | null): void;
    onClearValue: () => void;
    onInputChange: (inputValue: string, e?: import("react").SyntheticEvent<Element, Event> | undefined, eventType?: string | undefined) => void;
    onInputBlur: () => void;
    onKeyown: (e: import("react").KeyboardEvent<HTMLInputElement>) => void;
    onTimePanelSelect: (value: import("moment").Moment) => void;
    onVisibleChange: (visible: boolean, type: string) => void;
    renderPreview(others: import("react").HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends keyof import("./types").TimePickerState>(state: import("./types").TimePickerState | ((prevState: Readonly<import("./types").TimePickerState>, props: Readonly<import("./types").TimePickerProps>) => import("./types").TimePickerState | Pick<import("./types").TimePickerState, K> | null) | Pick<import("./types").TimePickerState, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    state: Readonly<import("./types").TimePickerState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<import("./types").TimePickerProps>, nextState: Readonly<import("./types").TimePickerState>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").TimePickerProps>, prevState: Readonly<import("./types").TimePickerState>): any;
    componentDidUpdate?(prevProps: Readonly<import("./types").TimePickerProps>, prevState: Readonly<import("./types").TimePickerState>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("./types").TimePickerProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").TimePickerProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("./types").TimePickerProps>, nextState: Readonly<import("./types").TimePickerState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").TimePickerProps>, nextState: Readonly<import("./types").TimePickerState>, nextContext: any): void;
}, {}>;
export default _default;
