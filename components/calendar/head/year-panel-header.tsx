import React from 'react';
import Icon from '../../icon';

class YearPanelHeader extends React.PureComponent {
    getDecadeLabel = date => {
        const year = date.year();
        const start = parseInt(year / 10, 10) * 10;
        const end = start + 9;
        return `${start}-${end}`;
    };

    render() {
        const { prefix, visibleMonth, locale, goPrevDecade, goNextDecade } = this.props;
        const decadeLable = this.getDecadeLabel(visibleMonth);
        const btnCls = `${prefix}calendar-btn`;

        return (
            <div className={`${prefix}calendar-panel-header`}>
                <button
                    role="button"
                    type="button"
                    title={locale.prevDecade}
                    className={`${btnCls} ${btnCls}-prev-decade`}
                    onClick={goPrevDecade}
                >
                    <Icon
                        type="arrow-double-left"
                        className={`${prefix}calendar-symbol-prev-super`}
                    />
                </button>
                <div className={`${prefix}calendar-panel-header-full`}>
                    <button role="button" type="button" title={decadeLable} className={btnCls}>
                        {decadeLable}
                    </button>
                </div>
                <button
                    role="button"
                    type="button"
                    title={locale.nextDecade}
                    className={`${btnCls} ${btnCls}-next-decade`}
                    onClick={goNextDecade}
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

export default YearPanelHeader;
