import React from 'react';
import Icon from '../../icon';

class MonthPanelHeader extends React.PureComponent {
    render() {
        const { prefix, visibleMonth, locale, changeMode, goPrevYear, goNextYear } = this.props;
        const yearLabel = visibleMonth.year();
        const btnCls = `${prefix}calendar-btn`;

        return (
            <div className={`${prefix}calendar-panel-header`}>
                <button
                    role="button"
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
                <div className={`${prefix}calendar-panel-header-full`}>
                    <button
                        role="button"
                        type="button"
                        title={yearLabel}
                        className={`${btnCls}`}
                        onClick={() => changeMode('year')}
                    >
                        {yearLabel}
                    </button>
                </div>
                <button
                    role="button"
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

export default MonthPanelHeader;
