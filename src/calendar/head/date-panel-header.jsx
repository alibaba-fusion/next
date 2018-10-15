import React from 'react';
import Icon from '../../icon';

class DatePanelHeader extends React.PureComponent {

    render() {
        const { prefix, visibleMonth, momentLocale, locale, changeMode, goNextMonth, goNextYear, goPrevMonth, goPrevYear } = this.props;

        const localedMonths = momentLocale.months();
        const monthLabel = localedMonths[visibleMonth.month()];
        const yearLable = visibleMonth.year();
        const btnCls = `${prefix}calendar-btn`;

        return (<div className={`${prefix}calendar-panel-header`}>
            <button
                role="button"
                title={locale.prevYear}
                className={`${btnCls} ${btnCls}-prev-year`}
                onClick={goPrevYear}><Icon type="arrow-double-left" /></button>
            <button
                role="button"
                title={locale.prevMonth}
                className={`${btnCls} ${btnCls}-prev-month`}
                onClick={goPrevMonth}><Icon type="arrow-left" /></button>
            <div className={`${prefix}calendar-panel-header-full`}>
                <button role="button" className={btnCls} title={monthLabel} onClick={() => changeMode('month', 'start')}>{monthLabel}</button>
                <button role="button" className={btnCls} title={yearLable} onClick={() => changeMode('year', 'start')}>{yearLable}</button>
            </div>
            <button
                role="button"
                title={locale.nextMonth}
                className={`${btnCls} ${btnCls}-next-month`}
                onClick={goNextMonth}><Icon type="arrow-right" /></button>
            <button
                role="button"
                title={locale.nextYear}
                className={`${btnCls} ${btnCls}-next-year`}
                onClick={goNextYear}><Icon type="arrow-double-right" /></button>
        </div>);
    }
}

export default DatePanelHeader;
