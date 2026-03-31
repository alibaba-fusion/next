/// <reference types="react" />
export type {
    CalendarProps,
    CellData,
    OnPrevOrNext,
    CalendarMode,
    CalendarPanelMode,
    CustomCellRender,
} from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').CalendarProps & import('../config-provider/types').ComponentCommonProps,
    {
        readonly props: Readonly<
            import('../util').RequiredSome<
                import('./types').CalendarProps,
                'rtl' | 'prefix' | 'locale' | 'mode' | 'shape'
            >
        > &
            Readonly<
                Pick<
                    {
                        rtl: boolean;
                        prefix: string;
                        locale: Partial<{
                            today: string;
                            now: string;
                            ok: string;
                            clear: string;
                            month: string;
                            year: string;
                            prevYear: string;
                            nextYear: string;
                            prevMonth: string;
                            nextMonth: string;
                            prevDecade: string;
                            nextDecade: string;
                            yearSelectAriaLabel: string;
                            monthSelectAriaLabel: string;
                            monthBeforeYear?: boolean | undefined;
                            format?:
                                | {
                                      months?: string[] | undefined;
                                      shortMonths?: string[] | undefined;
                                      firstDayOfWeek?: number | undefined;
                                      weekdays?: string[] | undefined;
                                      shortWeekdays?: string[] | undefined;
                                      veryShortWeekdays?: string[] | undefined;
                                  }
                                | undefined;
                        }> & {
                            momentLocale?: string | undefined;
                        };
                        shape: string;
                        mode: string;
                    },
                    never
                >
            >;
        switchPanelMode: (
            mode: import('./types').CalendarPanelMode
        ) => import('./types').CalendarPanelMode;
        shouldSwitchPanelMode: () => boolean;
        onDateSelect: (
            value: import('dayjs').Dayjs,
            _: import('react').UIEvent<Element, UIEvent>,
            { isCurrent }: Pick<import('./types').CellData, 'isCurrent'>
        ) => void;
        onModeChange: (mode: import('./types').CalendarMode, reason?: string | undefined) => void;
        onPanelValueChange: (
            panelValue: import('dayjs').Dayjs,
            reason?: string | undefined
        ) => void;
        onPanelModeChange: (
            panelMode: import('./types').CalendarPanelMode,
            reason?: string | undefined
        ) => void;
        onPanelChange: (
            value: import('dayjs').Dayjs,
            mode: import('./types').CalendarPanelMode,
            reason?: string | undefined
        ) => void;
        onChange: (value: import('dayjs').Dayjs) => void;
        render(): import('react').JSX.Element;
        context: any;
        setState<K extends keyof import('./types').CalendarState>(
            state:
                | import('./types').CalendarState
                | ((
                      prevState: Readonly<import('./types').CalendarState>,
                      props: Readonly<import('./types').CalendarProps>
                  ) =>
                      | import('./types').CalendarState
                      | Pick<import('./types').CalendarState, K>
                      | null)
                | Pick<import('./types').CalendarState, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        state: Readonly<import('./types').CalendarState>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<import('./types').CalendarProps>,
            nextState: Readonly<import('./types').CalendarState>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<import('./types').CalendarProps>,
            prevState: Readonly<import('./types').CalendarState>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<import('./types').CalendarProps>,
            prevState: Readonly<import('./types').CalendarState>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(
            nextProps: Readonly<import('./types').CalendarProps>,
            nextContext: any
        ): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<import('./types').CalendarProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<import('./types').CalendarProps>,
            nextState: Readonly<import('./types').CalendarState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<import('./types').CalendarProps>,
            nextState: Readonly<import('./types').CalendarState>,
            nextContext: any
        ): void;
    },
    {}
>;
export default _default;
