import React from 'react';
import Icon from '../../icon';

class RangePanelHeader extends React.PureComponent {

    render() {
        const { prefix, startVisibleMonth, endVisibleMonth, momentLocale, locale, changeMode, goNextMonth, goNextYear, goPrevMonth, goPrevYear } = this.props;

        const localedMonths = momentLocale.months();
        const startMonthLabel = localedMonths[startVisibleMonth.month()];
        const endMonthLabel = localedMonths[endVisibleMonth.month()];
        const startYearLable = startVisibleMonth.year();
        const endYearLabel = endVisibleMonth.year();
        const btnCls = `${prefix}calendar-btn`;

        return (<div className={`${prefix}calendar-panel-header`}>
            <button
                role="button"
                title={locale.prevYear}
                className={`${btnCls} ${btnCls}-prev-year`}
                onClick={goPrevYear}>
                <Icon type="arrow-double-left" />
            </button>
            <button
                role="button"
                title={locale.prevMonth}
                className={`${btnCls} ${btnCls}-prev-month`}
                onClick={goPrevMonth}>
                <Icon type="arrow-left" />
            </button>
            <div className={`${prefix}calendar-panel-header-left`}>
                <button role="button" title={startMonthLabel} className={btnCls} onClick={() => changeMode('month', 'start')}>{startMonthLabel}</button>
                <button role="button" title={startYearLable} className={btnCls} onClick={() => changeMode('year', 'start')}>{startYearLable}</button>
            </div>
            <div className={`${prefix}calendar-panel-header-right`}>
                <button role="button" title={endMonthLabel} className={btnCls} onClick={() => changeMode('month', 'end')}>{endMonthLabel}</button>
                <button role="button" title={endYearLabel} className={btnCls} onClick={() => changeMode('year', 'end')}>{endYearLabel}</button>
            </div>
            <button
                role="button"
                title={locale.nextMonth}
                className={`${btnCls} ${btnCls}-next-month`}
                onClick={goNextMonth}>
                <Icon type="arrow-right" />
            </button>
            <button
                role="button"
                title={locale.nextYear}
                className={`${btnCls} ${btnCls}-next-year`}
                onClick={goNextYear}>
                <Icon type="arrow-double-right" />
            </button>
        </div>);
    }
}

export default RangePanelHeader;
