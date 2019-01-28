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

var DatePanelHeader = function (_React$PureComponent) {
    (0, _inherits3.default)(DatePanelHeader, _React$PureComponent);

    function DatePanelHeader() {
        (0, _classCallCheck3.default)(this, DatePanelHeader);
        return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
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
                { className: prefix + 'calendar-panel-header-full' },
                _react2.default.createElement(
                    'button',
                    { role: 'button', className: btnCls, title: monthLabel, onClick: function onClick() {
                            return changeMode('month', 'start');
                        } },
                    monthLabel
                ),
                _react2.default.createElement(
                    'button',
                    { role: 'button', className: btnCls, title: yearLable, onClick: function onClick() {
                            return changeMode('year', 'start');
                        } },
                    yearLable
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

    return DatePanelHeader;
}(_react2.default.PureComponent);

exports.default = DatePanelHeader;
module.exports = exports['default'];