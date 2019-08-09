import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import Icon from '../../icon';

var DatePanelHeader = function (_React$PureComponent) {
    _inherits(DatePanelHeader, _React$PureComponent);

    function DatePanelHeader() {
        _classCallCheck(this, DatePanelHeader);

        return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
    }

    DatePanelHeader.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            visibleMonth = _props.visibleMonth,
            momentLocale = _props.momentLocale,
            locale = _props.locale,
            changeMode = _props.changeMode,
            goNextMonth = _props.goNextMonth,
            goNextYear = _props.goNextYear,
            goPrevMonth = _props.goPrevMonth,
            goPrevYear = _props.goPrevYear;


        var localedMonths = momentLocale.months();
        var monthLabel = localedMonths[visibleMonth.month()];
        var yearLable = visibleMonth.year();
        var btnCls = prefix + 'calendar-btn';

        return React.createElement(
            'div',
            { className: prefix + 'calendar-panel-header' },
            React.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.prevYear,
                    className: btnCls + ' ' + btnCls + '-prev-year',
                    onClick: goPrevYear
                },
                React.createElement(Icon, { type: 'arrow-double-left' })
            ),
            React.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.prevMonth,
                    className: btnCls + ' ' + btnCls + '-prev-month',
                    onClick: goPrevMonth
                },
                React.createElement(Icon, { type: 'arrow-left' })
            ),
            React.createElement(
                'div',
                { className: prefix + 'calendar-panel-header-full' },
                React.createElement(
                    'button',
                    {
                        role: 'button',
                        className: btnCls,
                        title: monthLabel,
                        onClick: function onClick() {
                            return changeMode('month', 'start');
                        }
                    },
                    monthLabel
                ),
                React.createElement(
                    'button',
                    {
                        role: 'button',
                        className: btnCls,
                        title: yearLable,
                        onClick: function onClick() {
                            return changeMode('year', 'start');
                        }
                    },
                    yearLable
                )
            ),
            React.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextMonth,
                    className: btnCls + ' ' + btnCls + '-next-month',
                    onClick: goNextMonth
                },
                React.createElement(Icon, { type: 'arrow-right' })
            ),
            React.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextYear,
                    className: btnCls + ' ' + btnCls + '-next-year',
                    onClick: goNextYear
                },
                React.createElement(Icon, { type: 'arrow-double-right' })
            )
        );
    };

    return DatePanelHeader;
}(React.PureComponent);

export default DatePanelHeader;