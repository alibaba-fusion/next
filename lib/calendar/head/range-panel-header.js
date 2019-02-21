'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePanelHeader = function (_React$PureComponent) {
    (0, _inherits3.default)(RangePanelHeader, _React$PureComponent);

    function RangePanelHeader() {
        (0, _classCallCheck3.default)(this, RangePanelHeader);
        return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
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

        return _react2.default.createElement(
            'div',
            { className: prefix + 'calendar-panel-header' },
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.prevYear,
                    className: btnCls + ' ' + btnCls + '-prev-year',
                    onClick: goPrevYear },
                _react2.default.createElement(_icon2.default, { type: 'arrow-double-left' })
            ),
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.prevMonth,
                    className: btnCls + ' ' + btnCls + '-prev-month',
                    onClick: goPrevMonth },
                _react2.default.createElement(_icon2.default, { type: 'arrow-left' })
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'calendar-panel-header-left' },
                _react2.default.createElement(
                    'button',
                    { role: 'button', title: startMonthLabel, className: btnCls, onClick: function onClick() {
                            return changeMode('month', 'start');
                        } },
                    startMonthLabel
                ),
                _react2.default.createElement(
                    'button',
                    { role: 'button', title: startYearLable, className: btnCls, onClick: function onClick() {
                            return changeMode('year', 'start');
                        } },
                    startYearLable
                )
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'calendar-panel-header-right' },
                _react2.default.createElement(
                    'button',
                    { role: 'button', title: endMonthLabel, className: btnCls, onClick: function onClick() {
                            return changeMode('month', 'end');
                        } },
                    endMonthLabel
                ),
                _react2.default.createElement(
                    'button',
                    { role: 'button', title: endYearLabel, className: btnCls, onClick: function onClick() {
                            return changeMode('year', 'end');
                        } },
                    endYearLabel
                )
            ),
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextMonth,
                    className: btnCls + ' ' + btnCls + '-next-month',
                    onClick: goNextMonth },
                _react2.default.createElement(_icon2.default, { type: 'arrow-right' })
            ),
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextYear,
                    className: btnCls + ' ' + btnCls + '-next-year',
                    onClick: goNextYear },
                _react2.default.createElement(_icon2.default, { type: 'arrow-double-right' })
            )
        );
    };

    return RangePanelHeader;
}(_react2.default.PureComponent);

exports.default = RangePanelHeader;
module.exports = exports['default'];