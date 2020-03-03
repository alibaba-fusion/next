import React, { isValidElement } from 'react';
import Icon from '../../icon';

class MonthPanelHeader extends React.PureComponent {
    render() {
        const {
            prefix,
            visibleMonth,
            locale,
            changeMode,
            goPrevYear,
            goNextYear,
            icons,
        } = this.props;
        const yearLabel = visibleMonth.year();
        const btnCls = `${prefix}calendar-btn`;

        let iconDoubleLeft = icons.doubleLeft;
        let iconDoubleRight = icons.doubleRight;
        if (!isValidElement(icons.doubleLeft) && icons.doubleLeft) {
            iconDoubleLeft = <span>{icons.doubleLeft}</span>;
        }

        if (!isValidElement(icons.doubleRight) && icons.doubleRight) {
            iconDoubleRight = <span>{icons.doubleRight}</span>;
        }

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
                <div className={`${prefix}calendar-panel-header-full`}>
                    <button
                        role="button"
                        title={yearLabel}
                        className={`${btnCls}`}
                        onClick={() => changeMode('year')}
                    >
                        {yearLabel}
                    </button>
                </div>
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

export default MonthPanelHeader;
