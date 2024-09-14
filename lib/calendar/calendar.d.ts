import React, { Component, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { type Moment } from 'moment';
import { type ClassPropsWithDefault } from '../util';
import { checkMomentObj } from './utils';
import type { CalendarMode, CalendarProps, CalendarState, VisibleMonthChangeType } from './types';
type InnerCalendarProps = ClassPropsWithDefault<CalendarProps, typeof Calendar.defaultProps>;
/** Calendar */
declare class Calendar extends Component<CalendarProps, CalendarState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        defaultValue: typeof checkMomentObj;
        value: typeof checkMomentObj;
        mode: PropTypes.Requireable<CalendarMode>;
        modes: PropTypes.Requireable<any[]>;
        disableChangeMode: PropTypes.Requireable<boolean>;
        format: PropTypes.Requireable<string>;
        showOtherMonth: PropTypes.Requireable<boolean>;
        defaultVisibleMonth: PropTypes.Requireable<(...args: any[]) => any>;
        shape: PropTypes.Requireable<string>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onModeChange: PropTypes.Requireable<(...args: any[]) => any>;
        onVisibleMonthChange: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        dateCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        monthCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        yearCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        yearRange: PropTypes.Requireable<(number | null | undefined)[]>;
        disabledDate: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: CalendarProps;
    static displayName: string;
    MODES: CalendarMode[];
    today: Moment;
    readonly props: InnerCalendarProps;
    constructor(props: CalendarProps);
    static getDerivedStateFromProps(props: CalendarProps, state: CalendarState): Partial<CalendarState>;
    onSelectCell: (date: Moment, nextMode: CalendarMode | MouseEvent<HTMLElement>) => void;
    changeMode: (nextMode: CalendarMode) => void;
    changeVisibleMonth: (date: Moment, reason: VisibleMonthChangeType) => void;
    /**
     * 根据日期偏移量设置当前展示的月份
     * @param offset - 日期偏移的数量
     * @param type - 日期偏移的类型 days, months, years
     */
    changeVisibleMonthByOffset(offset: number, type: 'days' | 'months' | 'years'): void;
    goPrevDecade: () => void;
    goNextDecade: () => void;
    goPrevYear: () => void;
    goNextYear: () => void;
    goPrevMonth: () => void;
    goNextMonth: () => void;
    render(): React.JSX.Element;
}
declare const _default: typeof Calendar;
export default _default;
