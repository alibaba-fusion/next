import React from 'react';
import Icon from '../../icon';

class DatePanelHeader extends React.PureComponent {

    render() {
        const { prefix, rtl, visibleMonth, momentLocale, locale, changeMode, goNextMonth, goNextYear, goPrevMonth, goPrevYear } = this.props;

        const localedMonths = momentLocale.months();
        const monthLabel = localedMonths[visibleMonth.month()];
        const yearLable = visibleMonth.year();
        const btnCls = `${prefix}calendar-btn`;

        const leftIcon = rtl ? <Icon type="arrow-right" /> : <Icon type="arrow-left" />;
        const rightIcon = rtl ? <Icon type="arrow-left" /> : <Icon type="arrow-right" />;
        const leftDoubleIcon = rtl ? <Icon type="arrow-double-right" /> : <Icon type="arrow-double-left" />;
        const rightDoubleIcon = rtl ? <Icon type="arrow-double-left" /> : <Icon type="arrow-double-right" />;

        return (<div className={`${prefix}calendar-panel-header`}>
            <button
                role="button"
                title={locale.prevYear}
                className={`${btnCls} ${btnCls}-prev-year`}
                onClick={goPrevYear}>{leftDoubleIcon}</button>
            <button
                role="button"
                title={locale.prevMonth}
                className={`${btnCls} ${btnCls}-prev-month`}
                onClick={goPrevMonth}>{leftIcon}</button>
            <div className={`${prefix}calendar-panel-header-full`}>
                <button role="button" className={btnCls} title={monthLabel} onClick={() => changeMode('month', 'start')}>{monthLabel}</button>
                <button role="button" className={btnCls} title={yearLable} onClick={() => changeMode('year', 'start')}>{yearLable}</button>
            </div>
            <button
                role="button"
                title={locale.nextMonth}
                className={`${btnCls} ${btnCls}-next-month`}
                onClick={goNextMonth}>{rightIcon}</button>
            <button
                role="button"
                title={locale.nextYear}
                className={`${btnCls} ${btnCls}-next-year`}
                onClick={goNextYear}>{rightDoubleIcon}</button>
        </div>);
    }
}

export default DatePanelHeader;
