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

var MonthPanelHeader = function (_React$PureComponent) {
    (0, _inherits3.default)(MonthPanelHeader, _React$PureComponent);

    function MonthPanelHeader() {
        (0, _classCallCheck3.default)(this, MonthPanelHeader);
        return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
    }

    MonthPanelHeader.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            visibleMonth = _props.visibleMonth,
            locale = _props.locale,
            changeMode = _props.changeMode,
            goPrevYear = _props.goPrevYear,
            goNextYear = _props.goNextYear;

        var yearLabel = visibleMonth.year();
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
                    onClick: goPrevYear
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-double-left',
                    className: [prefix + 'calendar-symbol-prev-super']
                })
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'calendar-panel-header-full' },
                _react2.default.createElement(
                    'button',
                    {
                        role: 'button',
                        title: yearLabel,
                        className: '' + btnCls,
                        onClick: function onClick() {
                            return changeMode('year');
                        }
                    },
                    yearLabel
                )
            ),
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextYear,
                    className: btnCls + ' ' + btnCls + '-next-year',
                    onClick: goNextYear
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-double-right',
                    className: [prefix + 'calendar-symbol-next-super']
                })
            )
        );
    };

    return MonthPanelHeader;
}(_react2.default.PureComponent);

exports.default = MonthPanelHeader;
module.exports = exports['default'];