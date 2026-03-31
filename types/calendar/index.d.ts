/// <reference types="react" />
import { type Moment } from 'moment';
import type { CalendarProps } from './types';
export type { CalendarProps, RangeCalendarProps, CalendarMode } from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    CalendarProps & import('../config-provider/types').ComponentCommonProps,
    {
        MODES: import('./types').CalendarMode[];
        today: Moment;
        readonly props: Readonly<
            import('../util').RequiredSome<CalendarProps, keyof CalendarProps>
        > &
            Readonly<Pick<CalendarProps, never>>;
        onSelectCell: (
            date: Moment,
            nextMode:
                | import('react').MouseEvent<HTMLElement, MouseEvent>
                | import('./types').CalendarMode
        ) => void;
        changeMode: (nextMode: import('./types').CalendarMode) => void;
        changeVisibleMonth: (
            date: Moment,
            reason: import('./types').VisibleMonthChangeType
        ) => void;
        changeVisibleMonthByOffset(offset: number, type: 'months' | 'years' | 'days'): void;
        goPrevDecade: () => void;
        goNextDecade: () => void;
        goPrevYear: () => void;
        goNextYear: () => void;
        goPrevMonth: () => void;
        goNextMonth: () => void;
        render(): import('react').JSX.Element;
        context: any;
        setState<K extends keyof import('./types').CalendarState>(
            state:
                | import('./types').CalendarState
                | ((
                      prevState: Readonly<import('./types').CalendarState>,
                      props: Readonly<CalendarProps>
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
            nextProps: Readonly<CalendarProps>,
            nextState: Readonly<import('./types').CalendarState>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<CalendarProps>,
            prevState: Readonly<import('./types').CalendarState>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<CalendarProps>,
            prevState: Readonly<import('./types').CalendarState>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<CalendarProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<CalendarProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<CalendarProps>,
            nextState: Readonly<import('./types').CalendarState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<CalendarProps>,
            nextState: Readonly<import('./types').CalendarState>,
            nextContext: any
        ): void;
    },
    {}
> & {
    RangeCalendar: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').RangeCalendarProps &
            import('../config-provider/types').ComponentCommonProps,
        {
            readonly props: Readonly<
                import('../util').RequiredSome<
                    import('./types').RangeCalendarProps,
                    | 'rtl'
                    | 'format'
                    | 'prefix'
                    | 'locale'
                    | 'onSelect'
                    | 'mode'
                    | 'showOtherMonth'
                    | 'onVisibleMonthChange'
                    | 'dateCellRender'
                    | 'disableChangeMode'
                >
            > &
                Readonly<
                    Pick<
                        {
                            prefix: string;
                            rtl: boolean;
                            mode: string;
                            disableChangeMode: boolean;
                            format: string;
                            dateCellRender: (value: Moment) => number;
                            onSelect: () => void;
                            onVisibleMonthChange: () => void;
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
                            showOtherMonth: boolean;
                        },
                        never
                    >
                >;
            today: Moment;
            onSelectCell: (
                date: Moment,
                nextMode:
                    | import('react').MouseEvent<HTMLElement, MouseEvent>
                    | import('./types').CalendarMode
            ) => void;
            changeMode: (
                mode: import('./types').CalendarMode,
                activePanel?: 'end' | 'start' | undefined
            ) => void;
            changeVisibleMonth: (
                date: Moment,
                reason: import('./types').VisibleMonthChangeType
            ) => void;
            changeVisibleMonthByOffset: (offset: number, type: 'months' | 'years' | 'days') => void;
            goPrevDecade: () => void;
            goNextDecade: () => void;
            goPrevYear: () => void;
            goNextYear: () => void;
            goPrevMonth: () => void;
            goNextMonth: () => void;
            render(): import('react').JSX.Element;
            context: any;
            setState<K_1 extends keyof import('./types').RangeCalendarState>(
                state:
                    | import('./types').RangeCalendarState
                    | ((
                          prevState: Readonly<import('./types').RangeCalendarState>,
                          props: Readonly<import('./types').RangeCalendarProps>
                      ) =>
                          | import('./types').RangeCalendarState
                          | Pick<import('./types').RangeCalendarState, K_1>
                          | null)
                    | Pick<import('./types').RangeCalendarState, K_1>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            state: Readonly<import('./types').RangeCalendarState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').RangeCalendarProps>,
                nextState: Readonly<import('./types').RangeCalendarState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').RangeCalendarProps>,
                prevState: Readonly<import('./types').RangeCalendarState>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').RangeCalendarProps>,
                prevState: Readonly<import('./types').RangeCalendarState>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').RangeCalendarProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').RangeCalendarProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').RangeCalendarProps>,
                nextState: Readonly<import('./types').RangeCalendarState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').RangeCalendarProps>,
                nextState: Readonly<import('./types').RangeCalendarState>,
                nextContext: any
            ): void;
        },
        {}
    >;
};
export default _default;
