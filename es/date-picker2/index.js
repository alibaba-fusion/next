import _extends from 'babel-runtime/helpers/extends';
import _typeof from 'babel-runtime/helpers/typeof';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';

var _MODE2FORMAT;

import React from 'react';
import ConfigProvider from '../config-provider';
import Picker from './picker';
import { DATE_PICKER_MODE } from './constant';

var DATE = DATE_PICKER_MODE.DATE,
    WEEK = DATE_PICKER_MODE.WEEK,
    MONTH = DATE_PICKER_MODE.MONTH,
    QUARTER = DATE_PICKER_MODE.QUARTER,
    YEAR = DATE_PICKER_MODE.YEAR;

var MODE2FORMAT = (_MODE2FORMAT = {}, _MODE2FORMAT[DATE] = 'YYYY-MM-DD', _MODE2FORMAT[WEEK] = 'gggg-wo', _MODE2FORMAT[MONTH] = 'YYYY-MM', _MODE2FORMAT[QUARTER] = 'YYYY-[Q]Q', _MODE2FORMAT[YEAR] = 'YYYY', _MODE2FORMAT);

/* istanbul ignore next */
var transform = function transform(props, deprecated) {
    var footerRender = props.footerRender,
        onVisibleMonthChange = props.onVisibleMonthChange,
        defaultVisibleMonth = props.defaultVisibleMonth,
        ranges = props.ranges,
        newProps = _objectWithoutProperties(props, ['footerRender', 'onVisibleMonthChange', 'defaultVisibleMonth', 'ranges']);

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
    } else if (_typeof(props.showTime) === 'object') {
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

var ConfigPicker = ConfigProvider.config(Picker, {
    componentName: 'DatePicker2',
    transform: transform
});
var generatePicker = function generatePicker(mode) {
    return React.forwardRef(function (props, ref) {
        return React.createElement(ConfigPicker, _extends({ ref: ref }, props, { mode: mode }));
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

DatePicker2.RangePicker = React.forwardRef(function (props, ref) {
    return React.createElement(ConfigPicker, _extends({ ref: ref }, props, { type: 'range' }));
});
DatePicker2.RangePicker.displayName = 'RangePicker2';

export default DatePicker2;