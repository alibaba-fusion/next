import React from 'react';
import Icon from '../../icon';

class MonthPanelHeader extends React.PureComponent {

    render() {
        const { prefix, rtl, visibleMonth, locale, changeMode, goPrevYear, goNextYear } = this.props;
        const yearLabel = visibleMonth.year();
        const btnCls = `${prefix}calendar-btn`;
        const leftDoubleIcon = rtl ? <Icon type="arrow-double-right" /> : <Icon type="arrow-double-left" />;
        const rightDoubleIcon = rtl ? <Icon type="arrow-double-left" /> : <Icon type="arrow-double-right" />;

        return (<div className={`${prefix}calendar-panel-header`}>
            <button
                role="button"
                title={locale.prevYear}
                className={`${btnCls} ${btnCls}-prev-year`}
                onClick={goPrevYear}>{leftDoubleIcon}</button>
            <div className={`${prefix}calendar-panel-header-full`}>
                <button role="button" title={yearLabel} className={`${btnCls}`} onClick={() => changeMode('year')}>{yearLabel}</button>
            </div>
            <button
                role="button"
                title={locale.nextYear}
                className={`${btnCls} ${btnCls}-next-year`}
                onClick={goNextYear}>{rightDoubleIcon}</button>
        </div>);
    }
}

export default MonthPanelHeader;
