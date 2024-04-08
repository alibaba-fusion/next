import React from 'react';
import { type Moment } from 'moment';
import Icon from '../../icon';
import { type YearPanelHeaderProps } from '../types';

class YearPanelHeader extends React.PureComponent<YearPanelHeaderProps> {
    getDecadeLabel = (date: Moment) => {
        const year = date.year();
        const start = parseInt((year / 10).toString(), 10) * 10;
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
                    <button type="button" title={decadeLable} className={btnCls}>
                        {decadeLable}
                    </button>
                </div>
                <button
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
