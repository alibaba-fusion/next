import React from 'react';
import type { TimePickerProps, ValueType, RangePickerProps, PresetType } from './types';
declare const TimePickerWithSub: import('../config-provider/types').ConfiguredComponentClass<
    TimePickerProps & import('../config-provider/types').ComponentCommonProps,
    {
        prefixCls: string;
        dateInput: {
            prefixCls: string;
            input?:
                | (import('../config-provider/types').ConfiguredComponent<
                      import('../input').InputProps &
                          import('../config-provider/types').ComponentCommonProps,
                      import('../input/input').default<import('../input').InputProps>
                  > &
                      Pick<
                          import('../input/input').default<import('../input').InputProps>,
                          'focus' | 'getInputNode'
                      >)
                | (import('../config-provider/types').ConfiguredComponent<
                      import('../input').InputProps &
                          import('../config-provider/types').ComponentCommonProps,
                      import('../input/input').default<import('../input').InputProps>
                  > &
                      Pick<
                          import('../input/input').default<import('../input').InputProps>,
                          'focus' | 'getInputNode'
                      >)[]
                | undefined;
            setInputRef: (
                el: import('../config-provider/types').ConfiguredComponent<
                    import('../input').InputProps &
                        import('../config-provider/types').ComponentCommonProps,
                    import('../input/input').default<import('../input').InputProps>
                > &
                    Pick<
                        import('../input/input').default<import('../input').InputProps>,
                        'focus' | 'getInputNode'
                    >,
                index?: number | undefined
            ) => void;
            setValue: (
                v: string | number | null
            ) => string | number | (string | number | null)[] | null;
            formatter: (v: import('dayjs').Dayjs) => string | import('dayjs').Dayjs;
            onInput:
                | ((
                      value: string | number,
                      e:
                          | React.CompositionEvent<HTMLInputElement>
                          | React.ChangeEvent<HTMLInputElement>
                          | React.KeyboardEvent<HTMLInputElement>,
                      reason?: string | undefined
                  ) => void)
                | undefined;
            handleTypeChange: (inputType: number) => void;
            getPlaceholder: () => string | string[] | undefined;
            getHtmlSize: () => string;
            render(): React.JSX.Element;
            context: any;
            setState<K extends never>(
                state:
                    | {}
                    | ((
                          prevState: Readonly<{}>,
                          props: Readonly<import('./types').DateInputProps>
                      ) => {} | Pick<{}, K> | null)
                    | Pick<{}, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('./types').DateInputProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').DateInputProps>,
                prevState: Readonly<{}>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').DateInputProps>,
                prevState: Readonly<{}>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
        };
        clearTimeoutId: number;
        getInitValue: () => ValueType;
        getInitRangeInputState: () => {
            justBeginInput: boolean;
            inputType: import('./types').InputType;
        };
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
        onVisibleChange: (visible: boolean, type?: string | undefined) => void;
        onClick: () => void;
        handleVisibleChange: (visible: boolean, targetType: string) => void;
        handleInputFocus: (inputType: number) => void;
        onOk: () => void;
        onInputTypeChange: (idx: import('./types').InputType) => void;
        checkValue: (
            value:
                | string
                | import('dayjs').Dayjs
                | (string | import('dayjs').Dayjs | null)[]
                | null
                | undefined,
            strictly?: boolean | undefined
        ) => ValueType;
        getOutputArgs: (value: ValueType) => (string | string[] | ValueType)[];
        onChange: (v: ValueType) => void;
        shouldSwitchInput: (value: (import('dayjs').Dayjs | null)[]) => boolean;
        handleChange: (v: string | string[] | ValueType, eventType?: string | undefined) => void;
        isEnabled: (idx?: number | undefined) => boolean;
        handleClear: () => void;
        handleInput: (v: string, eventType?: string | undefined) => void;
        renderPreview(
            others: Omit<TimePickerProps, 'defaultValue' | 'onChange'>
        ): React.JSX.Element;
        render(): React.JSX.Element;
        context: any;
        setState<K_1 extends keyof import('./types').TimePickerState>(
            state:
                | import('./types').TimePickerState
                | ((
                      prevState: Readonly<import('./types').TimePickerState>,
                      props: Readonly<TimePickerProps>
                  ) =>
                      | import('./types').TimePickerState
                      | Pick<import('./types').TimePickerState, K_1>
                      | null)
                | Pick<import('./types').TimePickerState, K_1>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<TimePickerProps> &
            Readonly<{
                children?: React.ReactNode;
            }>;
        state: Readonly<import('./types').TimePickerState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<TimePickerProps>,
            nextState: Readonly<import('./types').TimePickerState>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<TimePickerProps>,
            prevState: Readonly<import('./types').TimePickerState>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<TimePickerProps>,
            prevState: Readonly<import('./types').TimePickerState>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<TimePickerProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<TimePickerProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<TimePickerProps>,
            nextState: Readonly<import('./types').TimePickerState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<TimePickerProps>,
            nextState: Readonly<import('./types').TimePickerState>,
            nextContext: any
        ): void;
    },
    {}
> & {
    RangePicker: React.ForwardRefExoticComponent<
        TimePickerProps &
            React.RefAttributes<
                import('../config-provider/types').ConfiguredComponent<
                    TimePickerProps & import('../config-provider/types').ComponentCommonProps,
                    {
                        prefixCls: string;
                        dateInput: {
                            prefixCls: string;
                            input?:
                                | (import('../config-provider/types').ConfiguredComponent<
                                      import('../input').InputProps &
                                          import('../config-provider/types').ComponentCommonProps,
                                      import('../input/input').default<
                                          import('../input').InputProps
                                      >
                                  > &
                                      Pick<
                                          import('../input/input').default<
                                              import('../input').InputProps
                                          >,
                                          'focus' | 'getInputNode'
                                      >)
                                | (import('../config-provider/types').ConfiguredComponent<
                                      import('../input').InputProps &
                                          import('../config-provider/types').ComponentCommonProps,
                                      import('../input/input').default<
                                          import('../input').InputProps
                                      >
                                  > &
                                      Pick<
                                          import('../input/input').default<
                                              import('../input').InputProps
                                          >,
                                          'focus' | 'getInputNode'
                                      >)[]
                                | undefined;
                            setInputRef: (
                                el: import('../config-provider/types').ConfiguredComponent<
                                    import('../input').InputProps &
                                        import('../config-provider/types').ComponentCommonProps,
                                    import('../input/input').default<import('../input').InputProps>
                                > &
                                    Pick<
                                        import('../input/input').default<
                                            import('../input').InputProps
                                        >,
                                        'focus' | 'getInputNode'
                                    >,
                                index?: number | undefined
                            ) => void;
                            setValue: (
                                v: string | number | null
                            ) => string | number | (string | number | null)[] | null;
                            formatter: (v: import('dayjs').Dayjs) => string | import('dayjs').Dayjs;
                            onInput:
                                | ((
                                      value: string | number,
                                      e:
                                          | React.CompositionEvent<HTMLInputElement>
                                          | React.ChangeEvent<HTMLInputElement>
                                          | React.KeyboardEvent<HTMLInputElement>,
                                      reason?: string | undefined
                                  ) => void)
                                | undefined;
                            handleTypeChange: (inputType: number) => void;
                            getPlaceholder: () => string | string[] | undefined;
                            getHtmlSize: () => string;
                            render(): React.JSX.Element;
                            context: any;
                            setState<K extends never>(
                                state:
                                    | {}
                                    | ((
                                          prevState: Readonly<{}>,
                                          props: Readonly<import('./types').DateInputProps>
                                      ) => {} | Pick<{}, K> | null)
                                    | Pick<{}, K>
                                    | null,
                                callback?: (() => void) | undefined
                            ): void;
                            forceUpdate(callback?: (() => void) | undefined): void;
                            readonly props: Readonly<import('./types').DateInputProps> &
                                Readonly<{
                                    children?: React.ReactNode;
                                }>;
                            state: Readonly<{}>;
                            refs: {
                                [key: string]: React.ReactInstance;
                            };
                            componentDidMount?(): void;
                            shouldComponentUpdate?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextState: Readonly<{}>,
                                nextContext: any
                            ): boolean;
                            componentWillUnmount?(): void;
                            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                            getSnapshotBeforeUpdate?(
                                prevProps: Readonly<import('./types').DateInputProps>,
                                prevState: Readonly<{}>
                            ): any;
                            componentDidUpdate?(
                                prevProps: Readonly<import('./types').DateInputProps>,
                                prevState: Readonly<{}>,
                                snapshot?: any
                            ): void;
                            componentWillMount?(): void;
                            UNSAFE_componentWillMount?(): void;
                            componentWillReceiveProps?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextContext: any
                            ): void;
                            UNSAFE_componentWillReceiveProps?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextContext: any
                            ): void;
                            componentWillUpdate?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextState: Readonly<{}>,
                                nextContext: any
                            ): void;
                            UNSAFE_componentWillUpdate?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextState: Readonly<{}>,
                                nextContext: any
                            ): void;
                        };
                        clearTimeoutId: number;
                        getInitValue: () => ValueType;
                        getInitRangeInputState: () => {
                            justBeginInput: boolean;
                            inputType: import('./types').InputType;
                        };
                        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
                        onVisibleChange: (visible: boolean, type?: string | undefined) => void;
                        onClick: () => void;
                        handleVisibleChange: (visible: boolean, targetType: string) => void;
                        handleInputFocus: (inputType: number) => void;
                        onOk: () => void;
                        onInputTypeChange: (idx: import('./types').InputType) => void;
                        checkValue: (
                            value:
                                | string
                                | import('dayjs').Dayjs
                                | (string | import('dayjs').Dayjs | null)[]
                                | null
                                | undefined,
                            strictly?: boolean | undefined
                        ) => ValueType;
                        getOutputArgs: (value: ValueType) => (string | string[] | ValueType)[];
                        onChange: (v: ValueType) => void;
                        shouldSwitchInput: (value: (import('dayjs').Dayjs | null)[]) => boolean;
                        handleChange: (
                            v: string | string[] | ValueType,
                            eventType?: string | undefined
                        ) => void;
                        isEnabled: (idx?: number | undefined) => boolean;
                        handleClear: () => void;
                        handleInput: (v: string, eventType?: string | undefined) => void;
                        renderPreview(
                            others: Omit<TimePickerProps, 'defaultValue' | 'onChange'>
                        ): React.JSX.Element;
                        render(): React.JSX.Element;
                        context: any;
                        setState<K_1 extends keyof import('./types').TimePickerState>(
                            state:
                                | import('./types').TimePickerState
                                | ((
                                      prevState: Readonly<import('./types').TimePickerState>,
                                      props: Readonly<TimePickerProps>
                                  ) =>
                                      | import('./types').TimePickerState
                                      | Pick<import('./types').TimePickerState, K_1>
                                      | null)
                                | Pick<import('./types').TimePickerState, K_1>
                                | null,
                            callback?: (() => void) | undefined
                        ): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<TimePickerProps> &
                            Readonly<{
                                children?: React.ReactNode;
                            }>;
                        state: Readonly<import('./types').TimePickerState>;
                        refs: {
                            [key: string]: React.ReactInstance;
                        };
                        componentDidMount?(): void;
                        shouldComponentUpdate?(
                            nextProps: Readonly<TimePickerProps>,
                            nextState: Readonly<import('./types').TimePickerState>,
                            nextContext: any
                        ): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                        getSnapshotBeforeUpdate?(
                            prevProps: Readonly<TimePickerProps>,
                            prevState: Readonly<import('./types').TimePickerState>
                        ): any;
                        componentDidUpdate?(
                            prevProps: Readonly<TimePickerProps>,
                            prevState: Readonly<import('./types').TimePickerState>,
                            snapshot?: any
                        ): void;
                        componentWillMount?(): void;
                        UNSAFE_componentWillMount?(): void;
                        componentWillReceiveProps?(
                            nextProps: Readonly<TimePickerProps>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillReceiveProps?(
                            nextProps: Readonly<TimePickerProps>,
                            nextContext: any
                        ): void;
                        componentWillUpdate?(
                            nextProps: Readonly<TimePickerProps>,
                            nextState: Readonly<import('./types').TimePickerState>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillUpdate?(
                            nextProps: Readonly<TimePickerProps>,
                            nextState: Readonly<import('./types').TimePickerState>,
                            nextContext: any
                        ): void;
                    }
                >
            >
    >;
};
export default TimePickerWithSub;
export type { TimePickerProps, ValueType, RangePickerProps, PresetType };
