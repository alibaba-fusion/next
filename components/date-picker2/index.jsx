import React from 'react';
import ConfigProvider from '../config-provider';
import Picker from './picker';
import { DATE_PICKER_MODE } from './constant';

const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PICKER_MODE;
const MODE2FORMAT = {
    [DATE]: 'YYYY-MM-DD',
    [WEEK]: 'gggg-wo',
    [MONTH]: 'YYYY-MM',
    [QUARTER]: 'YYYY-[Q]Q',
    [YEAR]: 'YYYY',
};

/* istanbul ignore next */
const transform = (props, deprecated) => {
    const { footerRender, onVisibleMonthChange, defaultVisibleMonth, ranges, ...newProps } = props;
    const mode = props.mode || DATE;

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
    } else if (typeof props.showTime === 'object') {
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

const ConfigPicker = ConfigProvider.config(Picker, {
    componentName: 'DatePicker2',
    transform,
});
const generatePicker = mode => React.forwardRef((props, ref) => <ConfigPicker ref={ref} {...props} mode={mode} />);

const DatePicker2 = generatePicker();
DatePicker2.displayName = 'DatePicker2';

DatePicker2.MonthPicker = generatePicker(MONTH);
DatePicker2.MonthPicker.displayName = 'MonthPicker2';

DatePicker2.YearPicker = generatePicker(YEAR);
DatePicker2.YearPicker.displayName = 'YearPicker2';

DatePicker2.WeekPicker = generatePicker(WEEK);
DatePicker2.WeekPicker.displayName = 'WeekPicker2';

DatePicker2.QuarterPicker = generatePicker(QUARTER);
DatePicker2.QuarterPicker.displayName = 'QuarterPicker2';

DatePicker2.RangePicker = React.forwardRef((props, ref) => <ConfigPicker ref={ref} {...props} type="range" />);
DatePicker2.RangePicker.displayName = 'RangePicker2';

export default DatePicker2;
