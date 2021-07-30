'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _utils = require('./utils');

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _rangeCalendar = require('./range-calendar');

var _rangeCalendar2 = _interopRequireDefault(_rangeCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
var transform = function transform(props, deprecated) {
    var type = props.type,
        onChange = props.onChange,
        base = props.base,
        disabledMonth = props.disabledMonth,
        disabledYear = props.disabledYear,
        others = (0, _objectWithoutProperties3.default)(props, ['type', 'onChange', 'base', 'disabledMonth', 'disabledYear']);

    var newProps = others;

    if ('type' in props) {
        deprecated('type', 'shape', 'Calendar');

        newProps.shape = type;

        if ('shape' in props) {
            newProps.shape = props.shape;
        }
    }

    if ('base' in props) {
        deprecated('base', 'defaultVisibleMonth', 'Calendar');

        var newDefaultVisibleMonth = function newDefaultVisibleMonth() {
            (0, _utils.preFormatDateValue)(base, 'YYYY-MM-DD');
        };

        if ('defaultVisibleMonth' in props) {
            newDefaultVisibleMonth = props.defaultVisibleMonth;
        }

        newProps.defaultVisibleMonth = newDefaultVisibleMonth;
    }

    if ('onChange' in props && typeof onChange === 'function') {
        deprecated('onChange', 'onSelect', 'Calendar');

        var newOnSelect = function newOnSelect(date) {
            onChange({ mode: others.mode, value: date });

            if ('onSelect' in props) {
                props.onSelect(date);
            }
        };

        newProps.onSelect = newOnSelect;
    }

    if ('disabledMonth' in props && typeof disabledMonth === 'function') {
        deprecated('disabledMonth', 'disabledDate', 'Calendar');
    }

    if ('disabledYear' in props && typeof disabledYear === 'function') {
        deprecated('disabledYear', 'disabledDate', 'Calendar');
    }

    if ('yearCellRender' in props && typeof yearCellRender === 'function') {
        deprecated('yearCellRender', 'monthCellRender/dateCellRender', 'Calendar');
    }

    if ('language' in props) {
        deprecated('language', 'moment.locale', 'Calendar');
    }

    return newProps;
};

_calendar2.default.RangeCalendar = _rangeCalendar2.default;
exports.default = _configProvider2.default.config(_calendar2.default, {
    transform: transform
});
module.exports = exports['default'];