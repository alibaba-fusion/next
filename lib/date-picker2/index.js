'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _MODE2FORMAT;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _picker = require('./picker');

var _picker2 = _interopRequireDefault(_picker);

var _constant = require('./constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE = _constant.DATE_PICKER_MODE.DATE,
    WEEK = _constant.DATE_PICKER_MODE.WEEK,
    MONTH = _constant.DATE_PICKER_MODE.MONTH,
    QUARTER = _constant.DATE_PICKER_MODE.QUARTER,
    YEAR = _constant.DATE_PICKER_MODE.YEAR;

var MODE2FORMAT = (_MODE2FORMAT = {}, _MODE2FORMAT[DATE] = 'YYYY-MM-DD', _MODE2FORMAT[WEEK] = 'gggg-wo', _MODE2FORMAT[MONTH] = 'YYYY-MM', _MODE2FORMAT[QUARTER] = 'YYYY-[Q]Q', _MODE2FORMAT[YEAR] = 'YYYY', _MODE2FORMAT);

/* istanbul ignore next */
var transform = function transform(props, deprecated) {
    var footerRender = props.footerRender,
        onVisibleMonthChange = props.onVisibleMonthChange,
        defaultVisibleMonth = props.defaultVisibleMonth,
        ranges = props.ranges,
        newProps = (0, _objectWithoutProperties3.default)(props, ['footerRender', 'onVisibleMonthChange', 'defaultVisibleMonth', 'ranges']);

    var mode = props.mode || DATE;

    if ('footerRender' in props) {
        deprecated('footerRender', 'extraFooterRender', 'DatePicker');
        newProps.extraFooterRender = footerRender;
    }

    if (onVisibleMonthChange) {
        deprecated('onVisibleMonthChange', 'onPanelChange', 'DatePicker');
        newProps.onPanelChange = onVisibleMonthChange;
    }

    if (defaultVisibleMonth) {
        deprecated('defaultVisibleMonth', 'defaultPanelValue', 'DatePicker');
        newProps.defaultPanelValue = onVisibleMonthChange;
    }

    if ('ranges' in props) {
        deprecated('ranges', 'preset: PT.oneOfType([PT.array, PT.object])', 'DatePicker');
        newProps.preset = ranges;
    }

    if ([WEEK, MONTH, QUARTER, YEAR].includes(mode)) {
        delete newProps.showTime;
    } else if ((0, _typeof3.default)(props.showTime) === 'object') {
        deprecated('showTime: object', 'showTime && timePanelProps', 'DatePicker');
        newProps.timePanelProps = props.showTime;
        newProps.showTime = true;
    }

    if (!newProps.format) {
        newProps.format = MODE2FORMAT[mode] + (newProps.showTime ? ' HH:mm:ss' : '');
    } else if (mode === WEEK && typeof newProps.format === 'string' && newProps.format.includes('YYYY')) {
        // see https://github.com/alibaba-fusion/next/issues/3727
        newProps.format = newProps.format.replace('YYYY', 'gggg');
    }

    return newProps;
};

var ConfigPicker = _configProvider2.default.config(_picker2.default, {
    componentName: 'DatePicker2',
    transform: transform
});
var generatePicker = function generatePicker(mode) {
    return _react2.default.forwardRef(function (props, ref) {
        return _react2.default.createElement(ConfigPicker, (0, _extends3.default)({ ref: ref }, props, { mode: mode }));
    });
};

var DatePicker2 = generatePicker();
DatePicker2.displayName = 'DatePicker2';

DatePicker2.MonthPicker = generatePicker(MONTH);
DatePicker2.MonthPicker.displayName = 'MonthPicker2';

DatePicker2.YearPicker = generatePicker(YEAR);
DatePicker2.YearPicker.displayName = 'YearPicker2';

DatePicker2.WeekPicker = generatePicker(WEEK);
DatePicker2.WeekPicker.displayName = 'WeekPicker2';

DatePicker2.QuarterPicker = generatePicker(QUARTER);
DatePicker2.QuarterPicker.displayName = 'QuarterPicker2';

DatePicker2.RangePicker = _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(ConfigPicker, (0, _extends3.default)({ ref: ref }, props, { type: 'range' }));
});
DatePicker2.RangePicker.displayName = 'RangePicker2';

exports.default = DatePicker2;
module.exports = exports.default;
module.exports.default = exports.default;