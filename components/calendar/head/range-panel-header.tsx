import React from 'react';
import { type Moment } from 'moment';
import Icon from '../../icon';
import Dropdown from '../../dropdown';
import SelectMenu from './menu';
import { getMonths, getYears } from '../utils';
import { type RangePanelHeaderProps } from '../types';

class RangePanelHeader extends React.PureComponent<RangePanelHeaderProps> {
    static defaultProps = {
        yearRangeOffset: 10,
    };

    selectContainerHandler = (target: HTMLElement) => {
        return target.parentNode as HTMLElement;
    };

    onYearChange = (visibleMonth: Moment, year: number, tag: 'start' | 'end') => {
        const { changeVisibleMonth } = this.props;
        const startYear = visibleMonth
            .clone()
            .year(year)
            .add(tag === 'end' ? -1 : 0, 'month');
        changeVisibleMonth(startYear, 'yearSelect');
    };

    changeVisibleMonth = (visibleMonth: Moment, month: number, tag: 'start' | 'end') => {
        const { changeVisibleMonth } = this.props;
        const startMonth = tag === 'end' ? month - 1 : month;
        changeVisibleMonth(visibleMonth.clone().month(startMonth), 'monthSelect');
    };

    render() {
        const {
            prefix,
            startVisibleMonth,
            endVisibleMonth,
            yearRange = [],
            yearRangeOffset,
            momentLocale,
            locale,
            changeMode,
            goNextMonth,
            goNextYear,
            goPrevMonth,
            goPrevYear,
            disableChangeMode,
        } = this.props;

        const localedMonths = momentLocale.months();
        const startMonthLabel = localedMonths[startVisibleMonth.month()];
        const endMonthLabel = localedMonths[endVisibleMonth.month()];
        const startYearLabel = startVisibleMonth.year();
        const endYearLabel = endVisibleMonth.year();
        const btnCls = `${prefix}calendar-btn`;

        const months = getMonths(momentLocale);
        const startYears = getYears(yearRange, yearRangeOffset!, startVisibleMonth.year());
        const endYears = getYears(yearRange, yearRangeOffset!, endVisibleMonth.year());

        return (
            <div className={`${prefix}calendar-panel-header`}>
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
                <div className={`${prefix}calendar-panel-header-left`}>
                    {disableChangeMode ? (
                        <Dropdown
                            align="tc bc"
                            container={this.selectContainerHandler}
                            trigger={
                                <button type="button" className={btnCls} title={startMonthLabel}>
                                    {startMonthLabel}
                                    <Icon type="arrow-down" />
                                </button>
                            }
                            triggerType="click"
                        >
                            <SelectMenu
                                prefix={prefix}
                                value={startVisibleMonth.month()}
                                dataSource={months}
                                onChange={value =>
                                    this.changeVisibleMonth(startVisibleMonth, value, 'start')
                                }
                            />
                        </Dropdown>
                    ) : (
                        <button
                            type="button"
                            title={startMonthLabel}
                            className={btnCls}
                            onClick={() => changeMode('month', 'start')}
                        >
                            {startMonthLabel}
                        </button>
                    )}
                    {disableChangeMode ? (
                        <Dropdown
                            align="tc bc"
                            container={this.selectContainerHandler}
                            trigger={
                                <button
                                    type="button"
                                    className={btnCls}
                                    // @ts-expect-error startYearLabel 应转为 string
                                    title={startYearLabel}
                                >
                                    {startYearLabel}
                                    <Icon type="arrow-down" />
                                </button>
                            }
                            triggerType="click"
                        >
                            <SelectMenu
                                prefix={prefix}
                                value={startVisibleMonth.year()}
                                dataSource={startYears}
                                onChange={v => this.onYearChange(startVisibleMonth, v, 'start')}
                            />
                        </Dropdown>
                    ) : (
                        <button
                            type="button"
                            // @ts-expect-error startYearLabel 应转为 string
                            title={startYearLabel}
                            className={btnCls}
                            onClick={() => changeMode('year', 'start')}
                        >
                            {startYearLabel}
                        </button>
                    )}
                </div>
                <div className={`${prefix}calendar-panel-header-right`}>
                    {disableChangeMode ? (
                        <Dropdown
                            align="tc bc"
                            container={this.selectContainerHandler}
                            trigger={
                                <button type="button" className={btnCls} title={endMonthLabel}>
                                    {endMonthLabel}
                                    <Icon type="arrow-down" />
                                </button>
                            }
                            triggerType="click"
                        >
                            <SelectMenu
                                prefix={prefix}
                                value={endVisibleMonth.month()}
                                dataSource={months}
                                onChange={value =>
                                    this.changeVisibleMonth(endVisibleMonth, value, 'end')
                                }
                            />
                        </Dropdown>
                    ) : (
                        <button
                            type="button"
                            title={endMonthLabel}
                            className={btnCls}
                            onClick={() => changeMode('month', 'end')}
                        >
                            {endMonthLabel}
                        </button>
                    )}
                    {disableChangeMode ? (
                        <Dropdown
                            align="tc bc"
                            container={this.selectContainerHandler}
                            trigger={
                                <button
                                    type="button"
                                    className={btnCls}
                                    // @ts-expect-error endYearLabel 应转为 string
                                    title={endYearLabel}
                                >
                                    {endYearLabel}
                                    <Icon type="arrow-down" />
                                </button>
                            }
                            triggerType="click"
                        >
                            <SelectMenu
                                prefix={prefix}
                                value={endVisibleMonth.year()}
                                dataSource={endYears}
                                onChange={v => this.onYearChange(endVisibleMonth, v, 'end')}
                            />
                        </Dropdown>
                    ) : (
                        <button
                            type="button"
                            // @ts-expect-error endYearLabel 应转为 string
                            title={endYearLabel}
                            className={btnCls}
                            onClick={() => changeMode('year', 'end')}
                        >
                            {endYearLabel}
                        </button>
                    )}
                </div>
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
            </div>
        );
    }
}

export default RangePanelHeader;
