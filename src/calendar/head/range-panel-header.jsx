import React from 'react';
import Icon from '../../icon';

class RangePanelHeader extends React.PureComponent {

    render() {
        const { prefix, rtl, startVisibleMonth, endVisibleMonth, momentLocale, locale, changeMode, goNextMonth, goNextYear, goPrevMonth, goPrevYear } = this.props;

        const localedMonths = momentLocale.months();
        const startMonthLabel = localedMonths[startVisibleMonth.month()];
        const endMonthLabel = localedMonths[endVisibleMonth.month()];
        const startYearLable = startVisibleMonth.year();
        const endYearLabel = endVisibleMonth.year();
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
                onClick={goNextMonth}>{rightIcon}</button>
            <button
                role="button"
                title={locale.nextYear}
                className={`${btnCls} ${btnCls}-next-year`}
                onClick={goNextYear}>{rightDoubleIcon}</button>
        </div>);
    }
}

export default RangePanelHeader;
