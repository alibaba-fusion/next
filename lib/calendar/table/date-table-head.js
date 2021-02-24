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

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTableHead = function (_PureComponent) {
    (0, _inherits3.default)(DateTableHead, _PureComponent);

    function DateTableHead() {
        (0, _classCallCheck3.default)(this, DateTableHead);
        return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
    }

    DateTableHead.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            momentLocale = _props.momentLocale;

        var firstDayOfWeek = momentLocale.firstDayOfWeek();
        var weekdaysShort = momentLocale.weekdaysShort();

        var elements = [];
        for (var i = 0; i < _utils.DAYS_OF_WEEK; i++) {
            var index = (firstDayOfWeek + i) % _utils.DAYS_OF_WEEK;
            elements.push(_react2.default.createElement(
                'th',
                { key: i, className: prefix + 'calendar-th', role: 'cell' },
                weekdaysShort[index]
            ));
        }

        return _react2.default.createElement(
            'thead',
            { className: prefix + 'calendar-thead', role: 'rowgroup' },
            _react2.default.createElement(
                'tr',
                { role: 'row' },
                elements
            )
        );
    };

    return DateTableHead;
}(_react.PureComponent);

exports.default = DateTableHead;
module.exports = exports['default'];