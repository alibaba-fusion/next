import React from 'react';
import Icon from '../../icon';
import Dropdown from '../../dropdown';
import SelectMenu from './menu';
import { getMonths, getYears } from '../utils';
import { type DatePanelHeaderProps } from '../types';

class DatePanelHeader extends React.PureComponent<DatePanelHeaderProps> {
    static defaultProps = {
        yearRangeOffset: 10,
    };

    selectContainerHandler = (target: HTMLElement) => {
        return target.parentNode;
    };

    onYearChange = (year: number) => {
        const { visibleMonth, changeVisibleMonth } = this.props;
        changeVisibleMonth(visibleMonth.clone().year(year), 'yearSelect');
    };

    changeVisibleMonth = (month: number) => {
        const { visibleMonth, changeVisibleMonth } = this.props;
        changeVisibleMonth(visibleMonth.clone().month(month), 'monthSelect');
    };

    render() {
        const {
            prefix,
            visibleMonth,
            momentLocale,
            locale,
            showOtherMonth,
            changeMode,
            goNextMonth,
            goNextYear,
            goPrevMonth,
            goPrevYear,
            disableChangeMode,
            yearRangeOffset,
            yearRange = [],
        } = this.props;

        const localedMonths = momentLocale.months();
        const monthLabel = localedMonths[visibleMonth.month()];
        const yearLabel = visibleMonth.year();
        const btnCls = `${prefix}calendar-btn`;

        let monthButton = (
            <button
                type="button"
                className={btnCls}
                title={monthLabel}
                onClick={() => showOtherMonth && changeMode('month', 'start')}
            >
                {monthLabel}
            </button>
        );

        let yearButton = (
            <button
                type="button"
                className={btnCls}
                // @ts-expect-error yearLabel 应转为 string
                title={yearLabel}
                onClick={() => showOtherMonth && changeMode('year', 'start')}
            >
                {yearLabel}
            </button>
        );

        if (disableChangeMode) {
            const months = getMonths(momentLocale);
            const years = getYears(yearRange, yearRangeOffset, visibleMonth.year());

            monthButton = (
                <Dropdown
                    align="tc bc"
                    container={this.selectContainerHandler}
                    trigger={
                        <button type="button" className={btnCls} title={monthLabel}>
                            {monthLabel}
                            <Icon type="arrow-down" />
                        </button>
                    }
                    triggerType="click"
                >
                    <SelectMenu
                        prefix={prefix}
                        value={visibleMonth.month()}
                        dataSource={months}
                        onChange={value => this.changeVisibleMonth(value)}
                    />
                </Dropdown>
            );

            yearButton = (
                <Dropdown
                    align="tc bc"
                    container={this.selectContainerHandler}
                    trigger={
                        <button
                            type="button"
                            className={btnCls}
                            // @ts-expect-error yearLabel 应转为 string
                            title={yearLabel}
                        >
                            {yearLabel}
                            <Icon type="arrow-down" />
                        </button>
                    }
                    triggerType="click"
                >
                    <SelectMenu
                        prefix={prefix}
                        value={visibleMonth.year()}
                        dataSource={years}
                        onChange={this.onYearChange}
                    />
                </Dropdown>
            );
        }

        return (
            <div className={`${prefix}calendar-panel-header`}>
                {showOtherMonth && (
                    <>
                        <button
                            type="button"
                            title={locale.prevYear}
                            className={`${btnCls} ${btnCls}-prev-year`}
                            onClick={goPrevYear}
                        >
                            <Icon
                                type="arrow-double-left"
                                className={`${prefix}calendar-symbol-prev-super`}
                            />
                        </button>
                        <button
                            type="button"
                            title={locale.prevMonth}
                            className={`${btnCls} ${btnCls}-prev-month`}
                            onClick={goPrevMonth}
                        >
                            <Icon type="arrow-left" className={`${prefix}calendar-symbol-prev`} />
                        </button>
                    </>
                )}
                <div className={`${prefix}calendar-panel-header-full`}>
                    {monthButton}
                    {yearButton}
                </div>
                {showOtherMonth && (
                    <>
                        <button
                            type="button"
                            title={locale.nextMonth}
                            className={`${btnCls} ${btnCls}-next-month`}
                            onClick={goNextMonth}
                        >
                            <Icon type="arrow-right" className={`${prefix}calendar-symbol-next`} />
                        </button>
                        <button
                            type="button"
                            title={locale.nextYear}
                            className={`${btnCls} ${btnCls}-next-year`}
                            onClick={goNextYear}
                        >
                            <Icon
                                type="arrow-double-right"
                                className={`${prefix}calendar-symbol-next-super`}
                            />
                        </button>
                    </>
                )}
            </div>
        );
    }
}

export default DatePanelHeader;
