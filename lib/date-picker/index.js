'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _datePicker = require('./date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _rangePicker = require('./range-picker');

var _rangePicker2 = _interopRequireDefault(_rangePicker);

var _monthPicker = require('./month-picker');

var _monthPicker2 = _interopRequireDefault(_monthPicker);

var _yearPicker = require('./year-picker');

var _yearPicker2 = _interopRequireDefault(_yearPicker);

var _weekPicker = require('./week-picker');

var _weekPicker2 = _interopRequireDefault(_weekPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
var transform = function transform(props, deprecated) {
    var open = props.open,
        defaultOpen = props.defaultOpen,
        onOpenChange = props.onOpenChange,
        others = (0, _objectWithoutProperties3.default)(props, ['open', 'defaultOpen', 'onOpenChange']);

    var newProps = others;

    delete newProps.formater;

    if ('open' in props) {
        deprecated('open', 'visible', 'DatePicker');

        newProps.visible = open;

        if ('visible' in props) {
            newProps.visible = props.visible;
        }
    }

    if ('defaultOpen' in props) {
        deprecated('defaultOpen', 'defaultVisible', 'DatePicker');

        newProps.defaultVisible = defaultOpen;

        if ('defaultVisible' in props) {
            newProps.defaultVisible = props.defaultVisible;
        }
    }

    if ('onOpenChange' in props && typeof onOpenChange === 'function') {
        deprecated('onOpenChange', 'onVisibleChange', 'DatePicker');

        newProps.onVisibleChange = onOpenChange;

        if ('onVisibleChange' in props) {
            newProps.onVisibleChange = props.onVisibleChange;
        }
    }

    if ('formater' in props) {
        deprecated('formater', 'format showTime.format', 'DatePicker');
    }

    if ('format' in props && typeof props.format !== 'string') {
        deprecated('format', 'format: PropTypes.string,', 'DatePicker');
    }

    if ('ranges' in props) {
        deprecated('ranges', 'footerRender: PropTypes.func', 'RangePicker');
    }

    return newProps;
};

_datePicker2.default.RangePicker = _configProvider2.default.config(_rangePicker2.default, {
    componentName: 'DatePicker',
    transform: transform
});
_datePicker2.default.MonthPicker = _configProvider2.default.config(_monthPicker2.default, {
    componentName: 'DatePicker',
    transform: transform
});
_datePicker2.default.YearPicker = _configProvider2.default.config(_yearPicker2.default, {
    componentName: 'DatePicker',
    transform: transform
});

_datePicker2.default.WeekPicker = _configProvider2.default.config(_weekPicker2.default, {
    componentName: 'DatePicker'
});

exports.default = _configProvider2.default.config(_datePicker2.default, {
    transform: transform
});
module.exports = exports['default'];