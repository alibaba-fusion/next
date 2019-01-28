import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import Icon from '../../icon';

var RangePanelHeader = function (_React$PureComponent) {
    _inherits(RangePanelHeader, _React$PureComponent);

    function RangePanelHeader() {
        _classCallCheck(this, RangePanelHeader);

        return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
    }

    RangePanelHeader.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            startVisibleMonth = _props.startVisibleMonth,
            endVisibleMonth = _props.endVisibleMonth,
            momentLocale = _props.momentLocale,
            locale = _props.locale,
            changeMode = _props.changeMode,
            goNextMonth = _props.goNextMonth,
            goNextYear = _props.goNextYear,
            goPrevMonth = _props.goPrevMonth,
            goPrevYear = _props.goPrevYear;


        var localedMonths = momentLocale.months();
        var startMonthLabel = localedMonths[startVisibleMonth.month()];
        var endMonthLabel = localedMonths[endVisibleMonth.month()];
        var startYearLable = startVisibleMonth.year();
        var endYearLabel = endVisibleMonth.year();
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
                    onClick: goPrevYear },
                React.createElement(Icon, { type: 'arrow-double-left' })
            ),
            React.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.prevMonth,
                    className: btnCls + ' ' + btnCls + '-prev-month',
                    onClick: goPrevMonth },
                React.createElement(Icon, { type: 'arrow-left' })
            ),
            React.createElement(
                'div',
                { className: prefix + 'calendar-panel-header-left' },
                React.createElement(
                    'button',
                    { role: 'button', title: startMonthLabel, className: btnCls, onClick: function onClick() {
                            return changeMode('month', 'start');
                        } },
                    startMonthLabel
                ),
                React.createElement(
                    'button',
                    { role: 'button', title: startYearLable, className: btnCls, onClick: function onClick() {
                            return changeMode('year', 'start');
                        } },
                    startYearLable
                )
            ),
            React.createElement(
                'div',
                { className: prefix + 'calendar-panel-header-right' },
                React.createElement(
                    'button',
                    { role: 'button', title: endMonthLabel, className: btnCls, onClick: function onClick() {
                            return changeMode('month', 'end');
                        } },
                    endMonthLabel
                ),
                React.createElement(
                    'button',
                    { role: 'button', title: endYearLabel, className: btnCls, onClick: function onClick() {
                            return changeMode('year', 'end');
                        } },
                    endYearLabel
                )
            ),
            React.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextMonth,
                    className: btnCls + ' ' + btnCls + '-next-month',
                    onClick: goNextMonth },
                React.createElement(Icon, { type: 'arrow-right' })
            ),
            React.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextYear,
                    className: btnCls + ' ' + btnCls + '-next-year',
                    onClick: goNextYear },
                React.createElement(Icon, { type: 'arrow-double-right' })
            )
        );
    };

    return RangePanelHeader;
}(React.PureComponent);

export default RangePanelHeader;