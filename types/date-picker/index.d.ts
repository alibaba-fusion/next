/// <reference types="react" />
export type {
    DatePickerProps,
    RangePickerProps,
    MonthPickerProps,
    YearPickerProps,
    WeekPickerProps,
} from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').DatePickerProps & import('../config-provider/types').ComponentCommonProps,
    {
        readonly props: Readonly<
            import('../util').RequiredSome<
                import('./types').DatePickerProps,
                | 'size'
                | 'rtl'
                | 'format'
                | 'prefix'
                | 'locale'
                | 'onChange'
                | 'defaultVisible'
                | 'onVisibleChange'
                | 'popupAlign'
                | 'disabledDate'
                | 'hasClear'
                | 'popupTriggerType'
                | 'showTime'
                | 'resetTime'
                | 'footerRender'
                | 'onOk'
            >
        > &
            Readonly<
                Pick<
                    {
                        prefix: string;
                        rtl: boolean;
                        format: string;
                        size: string;
                        showTime: boolean;
                        resetTime: boolean;
                        disabledDate: () => boolean;
                        footerRender: () => null;
                        hasClear: boolean;
                        popupTriggerType: string;
                        popupAlign: string;
                        locale: Partial<{
                            placeholder: string;
                            datetimePlaceholder: string;
                            monthPlaceholder: string;
                            weekPlaceholder: string;
                            yearPlaceholder: string;
                            now: string;
                            selectTime: string;
                            selectDate: string;
                            ok: string;
                            clear: string;
                            startPlaceholder: string;
                            endPlaceholder: string;
                            hour: string;
                            minute: string;
                            second: string;
                            monthBeforeYear?: boolean | undefined;
                        }> & {
                            momentLocale?: string | undefined;
                        };
                        defaultVisible: boolean;
                        onChange: () => void;
                        onVisibleChange: () => void;
                        onOk: () => void;
                    },
                    never
                >
            >;
        onValueChange: (
            newValue: import('moment').Moment | null,
            handler?: 'onChange' | 'onOk'
        ) => void;
        onSelectCalendarPanel: (value: import('moment').Moment) => void;
        onSelectTimePanel: (value: import('moment').Moment) => void;
        clearValue: () => void;
        onDateInputChange: (
            inputStr: string | null | undefined,
            e: import('react').UIEvent<Element, UIEvent>,
            eventType?: string | undefined
        ) => void;
        onTimeInputChange: (inputStr: string) => void;
        onDateInputBlur: () => void;
        onTimeInputBlur: () => void;
        onKeyDown: (e: import('react').KeyboardEvent<Element>) => void;
        onTimeKeyDown: (e: import('react').KeyboardEvent<Element>) => void;
        handleChange: (
            newValue: import('moment').Moment | null,
            prevValue: import('moment').Moment | null,
            others?: {}
        ) => void;
        onFoucsDateInput: () => void;
        onFoucsTimeInput: () => void;
        onVisibleChange: (visible: boolean, type: string) => void;
        changePanel: (panel: import('./types').PanelType) => void;
        onOk: (value?: import('moment').Moment | null | undefined) => void;
        renderPreview(
            others: import('react').HTMLAttributes<HTMLDivElement>
        ): import('react').JSX.Element;
        render(): import('react').JSX.Element;
        context: any;
        setState<K extends keyof import('./types').DatePickerState>(
            state:
                | import('./types').DatePickerState
                | ((
                      prevState: Readonly<import('./types').DatePickerState>,
                      props: Readonly<import('./types').DatePickerProps>
                  ) =>
                      | import('./types').DatePickerState
                      | Pick<import('./types').DatePickerState, K>
                      | null)
                | Pick<import('./types').DatePickerState, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        state: Readonly<import('./types').DatePickerState>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<import('./types').DatePickerProps>,
            nextState: Readonly<import('./types').DatePickerState>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<import('./types').DatePickerProps>,
            prevState: Readonly<import('./types').DatePickerState>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<import('./types').DatePickerProps>,
            prevState: Readonly<import('./types').DatePickerState>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(
            nextProps: Readonly<import('./types').DatePickerProps>,
            nextContext: any
        ): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<import('./types').DatePickerProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<import('./types').DatePickerProps>,
            nextState: Readonly<import('./types').DatePickerState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<import('./types').DatePickerProps>,
            nextState: Readonly<import('./types').DatePickerState>,
            nextContext: any
        ): void;
    },
    {}
> & {
    RangePicker: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').RangePickerProps &
            import('../config-provider/types').ComponentCommonProps,
        {
            readonly props: Readonly<
                import('../util').RequiredSome<
                    import('./types').RangePickerProps,
                    | 'size'
                    | 'rtl'
                    | 'type'
                    | 'prefix'
                    | 'locale'
                    | 'onChange'
                    | 'defaultVisible'
                    | 'onVisibleChange'
                    | 'popupAlign'
                    | 'disabledDate'
                    | 'disableChangeMode'
                    | 'hasClear'
                    | 'popupTriggerType'
                    | 'showTime'
                    | 'resetTime'
                    | 'footerRender'
                    | 'onOk'
                >
            > &
                Readonly<
                    Pick<
                        {
                            prefix: string;
                            rtl: boolean;
                            type: string;
                            size: string;
                            showTime: boolean;
                            resetTime: boolean;
                            disabledDate: () => boolean;
                            footerRender: () => null;
                            hasClear: boolean;
                            defaultVisible: boolean;
                            popupTriggerType: string;
                            popupAlign: string;
                            locale: Partial<{
                                placeholder: string;
                                datetimePlaceholder: string;
                                monthPlaceholder: string;
                                weekPlaceholder: string;
                                yearPlaceholder: string;
                                now: string;
                                selectTime: string;
                                selectDate: string;
                                ok: string;
                                clear: string;
                                startPlaceholder: string;
                                endPlaceholder: string;
                                hour: string;
                                minute: string;
                                second: string;
                                monthBeforeYear?: boolean | undefined;
                            }> & {
                                momentLocale?: string | undefined;
                            };
                            disableChangeMode: boolean;
                            onChange: () => void;
                            onOk: () => void;
                            onVisibleChange: () => void;
                        },
                        never
                    >
                >;
            startDateInputRef: import('react').RefObject<
                import('../config-provider/types').ConfiguredComponent<
                    import('../input').InputProps &
                        import('../config-provider/types').ComponentCommonProps,
                    import('../input/input').default<import('../input').InputProps>
                > &
                    Pick<
                        import('../input/input').default<import('../input').InputProps>,
                        'focus' | 'getInputNode'
                    >
            >;
            endDateInputRef: import('react').RefObject<
                import('../config-provider/types').ConfiguredComponent<
                    import('../input').InputProps &
                        import('../config-provider/types').ComponentCommonProps,
                    import('../input/input').default<import('../input').InputProps>
                > &
                    Pick<
                        import('../input/input').default<import('../input').InputProps>,
                        'focus' | 'getInputNode'
                    >
            >;
            autoSwitchDateInput: boolean;
            onValueChange: (
                values: (import('moment').Moment | null | undefined)[],
                handler?: 'onChange' | 'onOk'
            ) => void;
            onSelectCalendarPanel: (
                value: import('moment').Moment,
                active?: 'startValue' | 'endValue' | 'startTime' | 'endTime' | undefined
            ) => void;
            clearRange: () => void;
            onDateInputChange: (
                inputStr: string,
                e: import('react').SyntheticEvent<Element, Event>,
                eventType?: string | undefined
            ) => void;
            onDateInputBlur: () => void;
            onDateInputKeyDown: (e: import('react').KeyboardEvent<Element>) => void;
            onFocusDateInput: (
                type: 'startValue' | 'endValue' | 'startTime' | 'endTime' | undefined
            ) => void;
            onFocusTimeInput: (
                type: 'startValue' | 'endValue' | 'startTime' | 'endTime' | undefined
            ) => void;
            onSelectStartTime: (value: import('moment').Moment) => void;
            onSelectEndTime: (value: import('moment').Moment) => void;
            onTimeInputChange: (inputStr: string) => void;
            onTimeInputBlur: () => void;
            onTimeInputKeyDown: (e: import('react').KeyboardEvent<Element>) => void;
            handleChange: (
                valueName: 'startValue' | 'endValue',
                newValue?: import('moment').Moment | null | undefined
            ) => void;
            onVisibleChange: (visible: boolean, type: string) => void;
            changePanel: (panel: import('./types').PanelType) => void;
            onOk: (value?: (import('moment').Moment | null | undefined)[] | undefined) => void;
            getDisabledTime: ({
                startValue,
                endValue,
            }: {
                startValue?: import('moment').Moment | null | undefined;
                endValue?: import('moment').Moment | null | undefined;
            } & Record<string, unknown>) => {};
            enableAutoSwitchDateInput: () => void;
            afterOpen: () => void;
            renderPreview(
                [startValue, endValue]: [
                    import('moment').Moment | null,
                    import('moment').Moment | null,
                ],
                others: import('react').HTMLAttributes<HTMLDivElement>
            ): import('react').JSX.Element;
            render(): import('react').JSX.Element;
            context: any;
            setState<K_1 extends keyof import('./types').RangePickerState>(
                state:
                    | import('./types').RangePickerState
                    | ((
                          prevState: Readonly<import('./types').RangePickerState>,
                          props: Readonly<import('./types').RangePickerProps>
                      ) =>
                          | import('./types').RangePickerState
                          | Pick<import('./types').RangePickerState, K_1>
                          | null)
                    | Pick<import('./types').RangePickerState, K_1>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            state: Readonly<import('./types').RangePickerState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').RangePickerProps>,
                nextState: Readonly<import('./types').RangePickerState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').RangePickerProps>,
                prevState: Readonly<import('./types').RangePickerState>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').RangePickerProps>,
                prevState: Readonly<import('./types').RangePickerState>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').RangePickerProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').RangePickerProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').RangePickerProps>,
                nextState: Readonly<import('./types').RangePickerState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').RangePickerProps>,
                nextState: Readonly<import('./types').RangePickerState>,
                nextContext: any
            ): void;
        },
        {}
    >;
    MonthPicker: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').MonthPickerProps &
            import('../config-provider/types').ComponentCommonProps,
        {
            readonly props: Readonly<
                import('../util').RequiredSome<
                    import('./types').MonthPickerProps,
                    | 'size'
                    | 'rtl'
                    | 'format'
                    | 'prefix'
                    | 'locale'
                    | 'onChange'
                    | 'onVisibleChange'
                    | 'popupAlign'
                    | 'disabledDate'
                    | 'hasClear'
                    | 'popupTriggerType'
                    | 'footerRender'
                >
            > &
                Readonly<
                    Pick<
                        {
                            prefix: string;
                            rtl: boolean;
                            format: string;
                            size: string;
                            disabledDate: () => boolean;
                            footerRender: () => null;
                            hasClear: boolean;
                            popupTriggerType: string;
                            popupAlign: string;
                            locale: Partial<{
                                placeholder: string;
                                datetimePlaceholder: string;
                                monthPlaceholder: string;
                                weekPlaceholder: string;
                                yearPlaceholder: string;
                                now: string;
                                selectTime: string;
                                selectDate: string;
                                ok: string;
                                clear: string;
                                startPlaceholder: string;
                                endPlaceholder: string;
                                hour: string;
                                minute: string;
                                second: string;
                                monthBeforeYear?: boolean | undefined;
                            }> & {
                                momentLocale?: string | undefined;
                            };
                            onChange: () => void;
                            onVisibleChange: () => void;
                        },
                        never
                    >
                >;
            onValueChange: (newValue: import('moment').Moment | null) => void;
            onSelectCalendarPanel: (value: import('moment').Moment) => void;
            clearValue: () => void;
            onDateInputChange: (
                inputStr: string,
                e: import('react').SyntheticEvent<HTMLInputElement, Event>,
                eventType?: string | undefined
            ) => void;
            onDateInputBlur: () => void;
            onKeyDown: (e: import('react').KeyboardEvent<Element>) => void;
            handleChange: (
                newValue: import('moment').Moment | null,
                prevValue: import('moment').Moment | null,
                others?: {},
                callback?: (() => void) | undefined
            ) => void;
            onVisibleChange: (visible: boolean, type: string) => void;
            renderPreview(
                others: import('react').HTMLAttributes<HTMLDivElement>
            ): import('react').JSX.Element;
            render(): import('react').JSX.Element;
            context: any;
            setState<K_2 extends keyof import('./types').MonthPickerState>(
                state:
                    | import('./types').MonthPickerState
                    | ((
                          prevState: Readonly<import('./types').MonthPickerState>,
                          props: Readonly<import('./types').MonthPickerProps>
                      ) =>
                          | import('./types').MonthPickerState
                          | Pick<import('./types').MonthPickerState, K_2>
                          | null)
                    | Pick<import('./types').MonthPickerState, K_2>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            state: Readonly<import('./types').MonthPickerState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').MonthPickerProps>,
                nextState: Readonly<import('./types').MonthPickerState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').MonthPickerProps>,
                prevState: Readonly<import('./types').MonthPickerState>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').MonthPickerProps>,
                prevState: Readonly<import('./types').MonthPickerState>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').MonthPickerProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').MonthPickerProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').MonthPickerProps>,
                nextState: Readonly<import('./types').MonthPickerState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').MonthPickerProps>,
                nextState: Readonly<import('./types').MonthPickerState>,
                nextContext: any
            ): void;
        },
        {}
    >;
    YearPicker: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').YearPickerProps & import('../config-provider/types').ComponentCommonProps,
        {
            readonly props: Readonly<
                import('../util').RequiredSome<
                    import('./types').YearPickerProps,
                    | 'size'
                    | 'rtl'
                    | 'format'
                    | 'prefix'
                    | 'locale'
                    | 'onChange'
                    | 'onVisibleChange'
                    | 'popupAlign'
                    | 'disabledDate'
                    | 'hasClear'
                    | 'popupTriggerType'
                    | 'footerRender'
                >
            > &
                Readonly<
                    Pick<
                        {
                            prefix: string;
                            rtl: boolean;
                            format: string;
                            size: string;
                            disabledDate: () => boolean;
                            footerRender: () => null;
                            hasClear: boolean;
                            popupTriggerType: string;
                            popupAlign: string;
                            locale: Partial<{
                                placeholder: string;
                                datetimePlaceholder: string;
                                monthPlaceholder: string;
                                weekPlaceholder: string;
                                yearPlaceholder: string;
                                now: string;
                                selectTime: string;
                                selectDate: string;
                                ok: string;
                                clear: string;
                                startPlaceholder: string;
                                endPlaceholder: string;
                                hour: string;
                                minute: string;
                                second: string;
                                monthBeforeYear?: boolean | undefined;
                            }> & {
                                momentLocale?: string | undefined;
                            };
                            onChange: () => void;
                            onVisibleChange: () => void;
                        },
                        never
                    >
                >;
            onValueChange: (newValue: import('moment').Moment | null) => void;
            onSelectCalendarPanel: (value: import('moment').Moment) => void;
            clearValue: () => void;
            onDateInputChange: (
                inputStr: string,
                e: import('react').SyntheticEvent<Element, Event>,
                eventType?: string | undefined
            ) => void;
            onDateInputBlur: () => void;
            onKeyDown: (e: import('react').KeyboardEvent<Element>) => void;
            handleChange: (
                newValue: import('moment').Moment | null,
                prevValue: import('moment').Moment | null,
                others?: {},
                callback?: (() => void) | undefined
            ) => void;
            onVisibleChange: (visible: boolean, reason: string) => void;
            renderPreview(
                others: import('react').HTMLAttributes<HTMLDivElement>
            ): import('react').JSX.Element;
            render(): import('react').JSX.Element;
            context: any;
            setState<K_3 extends keyof import('./types').YearPickerState>(
                state:
                    | import('./types').YearPickerState
                    | ((
                          prevState: Readonly<import('./types').YearPickerState>,
                          props: Readonly<import('./types').YearPickerProps>
                      ) =>
                          | import('./types').YearPickerState
                          | Pick<import('./types').YearPickerState, K_3>
                          | null)
                    | Pick<import('./types').YearPickerState, K_3>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            state: Readonly<import('./types').YearPickerState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').YearPickerProps>,
                nextState: Readonly<import('./types').YearPickerState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').YearPickerProps>,
                prevState: Readonly<import('./types').YearPickerState>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').YearPickerProps>,
                prevState: Readonly<import('./types').YearPickerState>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').YearPickerProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').YearPickerProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').YearPickerProps>,
                nextState: Readonly<import('./types').YearPickerState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').YearPickerProps>,
                nextState: Readonly<import('./types').YearPickerState>,
                nextContext: any
            ): void;
        },
        {}
    >;
    WeekPicker: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').WeekPickerProps & import('../config-provider/types').ComponentCommonProps,
        {
            readonly props: Readonly<
                import('../util').RequiredSome<
                    import('./types').WeekPickerProps,
                    | 'size'
                    | 'rtl'
                    | 'format'
                    | 'prefix'
                    | 'locale'
                    | 'onChange'
                    | 'defaultVisible'
                    | 'onVisibleChange'
                    | 'popupAlign'
                    | 'disabledDate'
                    | 'hasClear'
                    | 'popupTriggerType'
                    | 'footerRender'
                >
            > &
                Readonly<
                    Pick<
                        {
                            prefix: string;
                            rtl: boolean;
                            format: string;
                            size: string;
                            disabledDate: () => boolean;
                            footerRender: () => null;
                            hasClear: boolean;
                            popupTriggerType: string;
                            popupAlign: string;
                            locale: Partial<{
                                placeholder: string;
                                datetimePlaceholder: string;
                                monthPlaceholder: string;
                                weekPlaceholder: string;
                                yearPlaceholder: string;
                                now: string;
                                selectTime: string;
                                selectDate: string;
                                ok: string;
                                clear: string;
                                startPlaceholder: string;
                                endPlaceholder: string;
                                hour: string;
                                minute: string;
                                second: string;
                                monthBeforeYear?: boolean | undefined;
                            }> & {
                                momentLocale?: string | undefined;
                            };
                            defaultVisible: boolean;
                            onChange: () => void;
                            onVisibleChange: () => void;
                        },
                        never
                    >
                >;
            handleChange: (
                newValue: import('moment').Moment | null,
                prevValue: import('moment').Moment | null
            ) => void;
            onDateInputChange: (
                value: import('moment').Moment | null,
                e: import('react').SyntheticEvent<Element, Event>,
                eventType: string
            ) => void;
            onKeyDown: (e: import('react').KeyboardEvent<Element>) => void;
            onVisibleChange: (visible: boolean, type: string) => void;
            onSelectCalendarPanel: (value: import('moment').Moment | null) => void;
            renderPreview(
                others: import('react').HTMLAttributes<HTMLDivElement>
            ): import('react').JSX.Element;
            dateRender: (value: import('moment').Moment) => import('react').ReactNode;
            render(): import('react').JSX.Element;
            context: any;
            setState<K_4 extends keyof import('./types').WeekPickerState>(
                state:
                    | import('./types').WeekPickerState
                    | ((
                          prevState: Readonly<import('./types').WeekPickerState>,
                          props: Readonly<import('./types').WeekPickerProps>
                      ) =>
                          | import('./types').WeekPickerState
                          | Pick<import('./types').WeekPickerState, K_4>
                          | null)
                    | Pick<import('./types').WeekPickerState, K_4>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            state: Readonly<import('./types').WeekPickerState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').WeekPickerProps>,
                nextState: Readonly<import('./types').WeekPickerState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').WeekPickerProps>,
                prevState: Readonly<import('./types').WeekPickerState>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').WeekPickerProps>,
                prevState: Readonly<import('./types').WeekPickerState>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').WeekPickerProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').WeekPickerProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').WeekPickerProps>,
                nextState: Readonly<import('./types').WeekPickerState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').WeekPickerProps>,
                nextState: Readonly<import('./types').WeekPickerState>,
                nextContext: any
            ): void;
        },
        {}
    >;
};
export default _default;
