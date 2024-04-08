import React, { type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import moment, { type Moment } from 'moment';
import ConfigProvider from '../config-provider';
import nextLocale from '../locale/zh-cn';
import { obj, func, type ClassPropsWithDefault } from '../util';
import RangePanelHeader from './head/range-panel-header';
import MonthPanelHeader from './head/month-panel-header';
import YearPanelHeader from './head/year-panel-header';
import DateTable from './table/date-table';
import MonthTable from './table/month-table';
import YearTable from './table/year-table';
import {
    checkMomentObj,
    formatDateValue,
    getVisibleMonth,
    isSameYearMonth,
    CALENDAR_MODES,
    CALENDAR_MODE_DATE,
    CALENDAR_MODE_MONTH,
    CALENDAR_MODE_YEAR,
    getLocaleData,
} from './utils';
import type {
    CalendarMode,
    RangeCalendarProps,
    RangeCalendarState,
    VisibleMonthChangeType,
} from './types';

type InnerRangeCalendarProps = ClassPropsWithDefault<
    RangeCalendarProps,
    keyof typeof RangeCalendar.defaultProps
>;

class RangeCalendar extends React.Component<RangeCalendarProps, RangeCalendarState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        defaultStartValue: checkMomentObj,
        defaultEndValue: checkMomentObj,
        startValue: checkMomentObj,
        endValue: checkMomentObj,
        mode: PropTypes.oneOf(CALENDAR_MODES),
        disableChangeMode: PropTypes.bool,
        format: PropTypes.string,
        yearRange: PropTypes.arrayOf(PropTypes.number),
        showOtherMonth: PropTypes.bool,
        defaultVisibleMonth: PropTypes.func,
        onVisibleMonthChange: PropTypes.func,
        disabledDate: PropTypes.func,
        onSelect: PropTypes.func,
        dateCellRender: PropTypes.func,
        monthCellRender: PropTypes.func,
        yearCellRender: PropTypes.func, // 兼容 0.x yearCellRender
        locale: PropTypes.object,
        className: PropTypes.string,
    };

    static defaultProps: RangeCalendarProps = {
        prefix: 'next-',
        rtl: false,
        mode: CALENDAR_MODE_DATE,
        disableChangeMode: false,
        format: 'YYYY-MM-DD',
        dateCellRender: value => value.date(),
        onSelect: func.noop,
        onVisibleMonthChange: func.noop,
        locale: nextLocale.Calendar,
        showOtherMonth: false,
    };

    readonly props: InnerRangeCalendarProps;
    today: Moment;

    constructor(props: RangeCalendarProps) {
        super(props);

        const startValue = formatDateValue(props.startValue || props.defaultStartValue);
        const endValue = formatDateValue(props.endValue || props.defaultEndValue);
        const visibleMonth = getVisibleMonth(props.defaultVisibleMonth, startValue);

        this.state = {
            startValue,
            endValue,
            mode: props.mode,
            prevMode: props.mode!,
            startVisibleMonth: visibleMonth,
            activePanel: undefined,
            lastMode: undefined,
            lastPanelType: 'start', // enum, 包括 start end
        };
        this.today = moment();
    }

    static getDerivedStateFromProps(props: InnerRangeCalendarProps, state: RangeCalendarState) {
        const st: Partial<RangeCalendarState> = {};
        if ('startValue' in props) {
            const startValue = formatDateValue(props.startValue);
            st.startValue = startValue;
            if (startValue && !startValue.isSame(state.startValue, 'day')) {
                st.startVisibleMonth = startValue;
            }
        }

        if ('endValue' in props) {
            st.endValue = formatDateValue(props.endValue);
        }

        if ('mode' in props && state.prevMode !== props.mode) {
            st.prevMode = props.mode;
            st.mode = props.mode;
        }

        return st;
    }

    onSelectCell = (date: Moment, nextMode: CalendarMode | MouseEvent<HTMLElement>) => {
        if (this.state.mode === CALENDAR_MODE_DATE) {
            this.props.onSelect(date);
        } else {
            this.changeVisibleMonth(date, 'cellClick');
        }

        this.changeMode(nextMode as CalendarMode);
    };

    changeMode = (mode: CalendarMode, activePanel?: 'start' | 'end') => {
        const { lastMode, lastPanelType } = this.state;

        const state = {
            lastMode: mode,
            // rangePicker 的 panel 下，选 year -> month，从当前函数的 activePanel 传来的数据已经拿不到 start end panel 的状态了，需要根据 lastMode 来判断
            lastPanelType: lastMode === 'year' ? lastPanelType : activePanel,
        } as RangeCalendarState;
        if (typeof mode === 'string' && mode !== this.state.mode) {
            state.mode = mode;
        }
        if (activePanel && activePanel !== this.state.activePanel) {
            state.activePanel = activePanel;
        }

        this.setState(state);
    };

    changeVisibleMonth = (date: Moment, reason: VisibleMonthChangeType) => {
        const { lastPanelType } = this.state;
        if (!isSameYearMonth(date, this.state.startVisibleMonth)) {
            const startVisibleMonth =
                lastPanelType === 'end' ? date.clone().add(-1, 'month') : date;
            this.setState({ startVisibleMonth });
            this.props.onVisibleMonthChange(startVisibleMonth, reason);
        }
    };

    /**
     * 根据日期偏移量设置当前展示的月份
     * @param offset - 日期偏移量
     * @param type - 日期偏移类型 days, months, years
     */
    changeVisibleMonthByOffset = (offset: number, type: 'days' | 'months' | 'years') => {
        const offsetDate = this.state.startVisibleMonth.clone().add(offset, type);
        this.changeVisibleMonth(offsetDate, 'buttonClick');
    };

    goPrevDecade = () => {
        this.changeVisibleMonthByOffset(-10, 'years');
    };

    goNextDecade = () => {
        this.changeVisibleMonthByOffset(10, 'years');
    };

    goPrevYear = () => {
        this.changeVisibleMonthByOffset(-1, 'years');
    };

    goNextYear = () => {
        this.changeVisibleMonthByOffset(1, 'years');
    };

    goPrevMonth = () => {
        this.changeVisibleMonthByOffset(-1, 'months');
    };

    goNextMonth = () => {
        this.changeVisibleMonthByOffset(1, 'months');
    };

    render() {
        const {
            prefix,
            rtl,
            dateCellRender,
            monthCellRender,
            yearCellRender,
            className,
            format,
            locale,
            showOtherMonth,
            disabledDate,
            disableChangeMode,
            yearRange,
            ...others
        } = this.props;
        const { startValue, endValue, mode, startVisibleMonth, activePanel } = this.state;

        // reset moment locale
        if (locale.momentLocale) {
            startValue && startValue.locale(locale.momentLocale);
            endValue && endValue.locale(locale.momentLocale);
            startVisibleMonth.locale(locale.momentLocale);
        }

        if (rtl) {
            others.dir = 'rtl';
        }
        const localeData = getLocaleData(locale.format || {}, startVisibleMonth.localeData());

        const endVisibleMonth = startVisibleMonth.clone().add(1, 'months');

        const headerProps = {
            prefix,
            rtl,
            mode,
            locale,
            momentLocale: localeData,
            startVisibleMonth,
            endVisibleMonth,
            changeVisibleMonth: this.changeVisibleMonth,
            changeMode: this.changeMode,
            yearRange,
            disableChangeMode,
        };

        const tableProps = {
            prefix,
            value: startValue,
            startValue,
            endValue,
            mode,
            locale,
            momentLocale: localeData,
            showOtherMonth,
            today: this.today,
            disabledDate,
            dateCellRender,
            monthCellRender,
            yearCellRender,
            changeMode: this.changeMode,
            changeVisibleMonth: this.changeVisibleMonth,
        };

        const visibleMonths = {
            start: startVisibleMonth,
            end: endVisibleMonth,
        };

        const visibleMonth = visibleMonths[activePanel!];

        let header;
        let table;

        switch (mode) {
            case CALENDAR_MODE_DATE: {
                table = [
                    <div className={`${prefix}calendar-body-left`} key="left-panel">
                        <DateTable
                            format={format}
                            {...tableProps}
                            visibleMonth={startVisibleMonth}
                            onSelectDate={this.onSelectCell}
                        />
                    </div>,
                    <div className={`${prefix}calendar-body-right`} key="right-panel">
                        <DateTable
                            format={format}
                            {...tableProps}
                            visibleMonth={endVisibleMonth}
                            onSelectDate={this.onSelectCell}
                        />
                    </div>,
                ];
                header = (
                    <RangePanelHeader
                        {...headerProps}
                        goPrevYear={this.goPrevYear}
                        goPrevMonth={this.goPrevMonth}
                        goNextYear={this.goNextYear}
                        goNextMonth={this.goNextMonth}
                    />
                );
                break;
            }
            case CALENDAR_MODE_MONTH: {
                table = (
                    <MonthTable
                        {...tableProps}
                        visibleMonth={visibleMonth}
                        onSelectMonth={this.onSelectCell}
                    />
                );
                header = (
                    <MonthPanelHeader
                        {...headerProps}
                        visibleMonth={visibleMonth}
                        goPrevYear={this.goPrevYear}
                        goNextYear={this.goNextYear}
                    />
                );
                break;
            }
            case CALENDAR_MODE_YEAR: {
                table = (
                    <YearTable
                        {...tableProps}
                        rtl={rtl}
                        visibleMonth={visibleMonth}
                        onSelectYear={this.onSelectCell}
                        goPrevDecade={this.goPrevDecade}
                        goNextDecade={this.goNextDecade}
                    />
                );
                header = (
                    <YearPanelHeader
                        {...headerProps}
                        visibleMonth={visibleMonth}
                        goPrevDecade={this.goPrevDecade}
                        goNextDecade={this.goNextDecade}
                    />
                );
                break;
            }
        }

        const classNames = classnames(
            {
                [`${prefix}calendar`]: true,
                [`${prefix}calendar-range`]: true,
            },
            className
        );

        return (
            <div {...obj.pickOthers(RangeCalendar.propTypes, others)} className={classNames}>
                {header}
                <div className={`${prefix}calendar-body`}>{table}</div>
            </div>
        );
    }
}

export default ConfigProvider.config(polyfill(RangeCalendar), {
    componentName: 'Calendar',
});
