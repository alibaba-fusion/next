'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _select = require('../../select');

var _select2 = _interopRequireDefault(_select);

var _radio = require('../../radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardHeader = (_temp2 = _class = function (_React$PureComponent) {
    (0, _inherits3.default)(CardHeader, _React$PureComponent);

    function CardHeader() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CardHeader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.selectContainerHandler = function (target) {
            return target.parentNode;
        }, _this.onYearChange = function (year) {
            var _this$props = _this.props,
                visibleMonth = _this$props.visibleMonth,
                changeVisibleMonth = _this$props.changeVisibleMonth;

            changeVisibleMonth(visibleMonth.clone().year(year), 'yearSelect');
        }, _this.changeVisibleMonth = function (month) {
            var _this$props2 = _this.props,
                visibleMonth = _this$props2.visibleMonth,
                changeVisibleMonth = _this$props2.changeVisibleMonth;

            changeVisibleMonth(visibleMonth.clone().month(month), 'monthSelect');
        }, _this.onModePanelChange = function (mode) {
            _this.props.changeMode(mode);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    CardHeader.prototype.getYearSelect = function getYearSelect(year) {
        var _props = this.props,
            prefix = _props.prefix,
            yearRangeOffset = _props.yearRangeOffset,
            _props$yearRange = _props.yearRange,
            yearRange = _props$yearRange === undefined ? [] : _props$yearRange,
            locale = _props.locale;
        var startYear = yearRange[0],
            endYear = yearRange[1];

        if (!startYear || !endYear) {
            startYear = year - yearRangeOffset;
            endYear = year + yearRangeOffset;
        }

        var options = [];
        for (var i = startYear; i <= endYear; i++) {
            options.push(_react2.default.createElement(
                _select2.default.Option,
                { key: i, value: i },
                i
            ));
        }

        return _react2.default.createElement(
            _select2.default,
            {
                prefix: prefix,
                value: year,
                'aria-label': locale.yearSelectAriaLabel,
                onChange: this.onYearChange,
                popupContainer: this.selectContainerHandler
            },
            options
        );
    };

    CardHeader.prototype.getMonthSelect = function getMonthSelect(month) {
        var _props2 = this.props,
            prefix = _props2.prefix,
            momentLocale = _props2.momentLocale,
            locale = _props2.locale;

        var localeMonths = momentLocale.monthsShort();
        var options = [];
        for (var i = 0; i < 12; i++) {
            options.push(_react2.default.createElement(
                _select2.default.Option,
                { key: i, value: i },
                localeMonths[i]
            ));
        }
        return _react2.default.createElement(
            _select2.default,
            {
                'aria-label': locale.monthSelectAriaLabel,
                prefix: prefix,
                value: month,
                onChange: this.changeVisibleMonth,
                popupContainer: this.selectContainerHandler
            },
            options
        );
    };

    CardHeader.prototype.render = function render() {
        var _props3 = this.props,
            prefix = _props3.prefix,
            mode = _props3.mode,
            locale = _props3.locale,
            visibleMonth = _props3.visibleMonth;


        var yearSelect = this.getYearSelect(visibleMonth.year());
        var monthSelect = mode === 'month' ? null : this.getMonthSelect(visibleMonth.month());
        var panelSelect = _react2.default.createElement(
            _radio2.default.Group,
            {
                shape: 'button',
                size: 'medium',
                value: mode,
                onChange: this.onModePanelChange
            },
            _react2.default.createElement(
                _radio2.default,
                { value: 'date' },
                locale.month
            ),
            _react2.default.createElement(
                _radio2.default,
                { value: 'month' },
                locale.year
            )
        );

        return _react2.default.createElement(
            'div',
            { className: prefix + 'calendar-header' },
            yearSelect,
            monthSelect,
            panelSelect
        );
    };

    return CardHeader;
}(_react2.default.PureComponent), _class.propTypes = {
    yearRange: _propTypes2.default.arrayOf(_propTypes2.default.number),
    yearRangeOffset: _propTypes2.default.number,
    locale: _propTypes2.default.object
}, _class.defaultProps = {
    yearRangeOffset: 10
}, _temp2);
exports.default = CardHeader;
module.exports = exports['default'];