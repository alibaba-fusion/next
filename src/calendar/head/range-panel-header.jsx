/* istanbul ignore file */
import React, { isValidElement } from 'react';
import Icon from '../../icon';
import Dropdown from '../../dropdown';
import SelectMenu from './menu';
import { getMonths, getYears } from '../utils';

/* eslint-disable */
class RangePanelHeader extends React.PureComponent {
    static defaultProps = {
        yearRangeOffset: 10,
    };

    selectContainerHandler = target => {
        return target.parentNode;
    };

    onYearChange = (visibleMonth, year) => {
        const { changeVisibleMonth } = this.props;
        changeVisibleMonth(visibleMonth.clone().year(year), 'yearSelect');
    };

    changeVisibleMonth = (visibleMonth, month) => {
        const { changeVisibleMonth } = this.props;
        changeVisibleMonth(visibleMonth.clone().month(month), 'monthSelect');
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
            icons,
        } = this.props;

        let iconLeft = icons.left,
            iconRight = icons.right,
            iconDoubleLeft = icons.doubleLeft,
            iconDoubleRight = icons.doubleRight;

        if (!isValidElement(icons.right) && icons.right) {
            iconRight = <span>{icons.right}</span>;
        }

        if (!isValidElement(icons.left) && icons.left) {
            iconLeft = <span>{icons.left}</span>;
        }

        if (!isValidElement(icons.doubleLeft) && icons.doubleLeft) {
            iconDoubleLeft = <span>{icons.doubleLeft}</span>;
        }

        if (!isValidElement(icons.doubleRight) && icons.doubleRight) {
            iconDoubleRight = <span>{icons.doubleRight}</span>;
        }

        const localedMonths = momentLocale.months();
        const startMonthLabel = localedMonths[startVisibleMonth.month()];
        const endMonthLabel = localedMonths[endVisibleMonth.month()];
        const startYearLabel = startVisibleMonth.year();
        const endYearLabel = endVisibleMonth.year();
        const btnCls = `${prefix}calendar-btn`;

        const months = getMonths(momentLocale);
        const startYears = getYears(
            yearRange,
            yearRangeOffset,
            startVisibleMonth.year()
        );
        const endYears = getYears(
            yearRange,
            yearRangeOffset,
            endVisibleMonth.year()
        );

        return (
            <div className={`${prefix}calendar-panel-header`}>
                <button
                    role="button"
                    title={locale.prevYear}
                    className={`${btnCls} ${btnCls}-prev-year`}
                    onClick={goPrevYear}
                >
                    {React.cloneElement(
                        iconDoubleLeft || <Icon type="arrow-double-left" />,
                        {}
                    )}
                </button>
                <button
                    role="button"
                    title={locale.prevMonth}
                    className={`${btnCls} ${btnCls}-prev-month`}
                    onClick={goPrevMonth}
                >
                    {React.cloneElement(
                        iconLeft || <Icon type="arrow-left" />,
                        {}
                    )}
                </button>
                <div className={`${prefix}calendar-panel-header-left`}>
                    {disableChangeMode ? (
                        <Dropdown
                            align="tc bc"
                            container={this.selectContainerHandler}
                            trigger={
                                <button
                                    role="button"
                                    className={btnCls}
                                    title={startMonthLabel}
                                >
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
                                    this.changeVisibleMonth(
                                        startVisibleMonth,
                                        value
                                    )
                                }
                            />
                        </Dropdown>
                    ) : (
                        <button
                            role="button"
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
                                    role="button"
                                    className={btnCls}
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
                                onChange={v =>
                                    this.onYearChange(startVisibleMonth, v)
                                }
                            />
                        </Dropdown>
                    ) : (
                        <button
                            role="button"
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
                                <button
                                    role="button"
                                    className={btnCls}
                                    title={endMonthLabel}
                                >
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
                                    this.changeVisibleMonth(
                                        endVisibleMonth,
                                        value
                                    )
                                }
                            />
                        </Dropdown>
                    ) : (
                        <button
                            role="button"
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
                                    role="button"
                                    className={btnCls}
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
                                onChange={v =>
                                    this.onYearChange(endVisibleMonth, v)
                                }
                            />
                        </Dropdown>
                    ) : (
                        <button
                            role="button"
                            title={endYearLabel}
                            className={btnCls}
                            onClick={() => changeMode('year', 'end')}
                        >
                            {endYearLabel}
                        </button>
                    )}
                </div>
                <button
                    role="button"
                    title={locale.nextMonth}
                    className={`${btnCls} ${btnCls}-next-month`}
                    onClick={goNextMonth}
                >
                    {React.cloneElement(
                        iconRight || <Icon type="arrow-right" />,
                        {}
                    )}
                </button>
                <button
                    role="button"
                    title={locale.nextYear}
                    className={`${btnCls} ${btnCls}-next-year`}
                    onClick={goNextYear}
                >
                    {React.cloneElement(
                        iconDoubleRight || <Icon type="arrow-double-right" />,
                        {}
                    )}
                </button>
            </div>
        );
    }
}

export default RangePanelHeader;
