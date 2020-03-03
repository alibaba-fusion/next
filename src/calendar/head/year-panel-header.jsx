import React, { isValidElement } from 'react';
import Icon from '../../icon';

class YearPanelHeader extends React.PureComponent {
    getDecadeLabel = date => {
        const year = date.year();
        const start = parseInt(year / 10, 10) * 10;
        const end = start + 9;
        return `${start}-${end}`;
    };

    render() {
        const {
            prefix,
            visibleMonth,
            locale,
            goPrevDecade,
            goNextDecade,
            icons,
        } = this.props;
        const decadeLable = this.getDecadeLabel(visibleMonth);
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
                    title={locale.prevDecade}
                    className={`${btnCls} ${btnCls}-prev-decade`}
                    onClick={goPrevDecade}
                >
                    {React.cloneElement(
                        iconDoubleLeft || <Icon type="arrow-double-left" />,
                        {}
                    )}
                </button>
                <div className={`${prefix}calendar-panel-header-full`}>
                    <button
                        role="button"
                        title={decadeLable}
                        className={btnCls}
                    >
                        {decadeLable}
                    </button>
                </div>
                <button
                    role="button"
                    title={locale.nextDecade}
                    className={`${btnCls} ${btnCls}-next-decade`}
                    onClick={goNextDecade}
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

export default YearPanelHeader;
