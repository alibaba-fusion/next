import React from 'react';
import ConfigProvider from '../config-provider';
import Picker from './picker';
import { DATE_PICKER_MODE } from './constant';

const { WEEK, MONTH, QUARTER, YEAR } = DATE_PICKER_MODE;
const MODE2FORMAT = {
    [WEEK]: 'YYYY-wo',
    [MONTH]: 'YYYY-MM',
    [QUARTER]: 'YYYY-Q',
    [YEAR]: 'YYYY',
};

const transform = (props, deprecated) => {
    const { footerRender, onVisibleMonthChange, defaultVisibleMonth, ranges, ...resetProps } = props;
    const newProps = resetProps;

    delete newProps.formater;

    if ('footerRender' in props) {
        deprecated('footerRender', 'extraFooterRender', 'DatePicker');
        newProps.extraFooterRender = footerRender;
    }

    if (typeof props.showTime === 'object') {
        deprecated('showTime: object', 'showTime && timePanelProps', 'DatePicker');
        newProps.timePanelProps = props.showTime;
        newProps.showTime = true;
    }

    if (onVisibleMonthChange) {
        deprecated('onVisibleMonthChange', 'onPanelChange', 'DatePicker');
        newProps.onPanelChange = onVisibleMonthChange;
    }

    if (defaultVisibleMonth) {
        deprecated('defaultVisibleMonth', 'onPanelChange', 'DatePicker');
        newProps.onPanelChange = onVisibleMonthChange;
    }

    if ('ranges' in props) {
        deprecated('ranges', 'preset: PT.oneOfType([PT.array, PT.object])', 'DatePicker');
        newProps.preset = ranges;
    }

    return newProps;
};

const ConfigPicker = ConfigProvider.config(Picker, { componentName: 'DatePicker', transform });

const DatePicker2 = props => <ConfigPicker format={props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'} {...props} />;
DatePicker2.displayName = 'DatePicker2';

DatePicker2.MonthPicker = props => <ConfigPicker format={MODE2FORMAT[MONTH]} mode={MONTH} {...props} />;
DatePicker2.MonthPicker.displayName = 'MonthPicker2';

DatePicker2.YearPicker = props => <ConfigPicker format={MODE2FORMAT[YEAR]} mode={YEAR} {...props} />;
DatePicker2.YearPicker.displayName = 'YearPicker2';

DatePicker2.WeekPicker = props => <ConfigPicker format={MODE2FORMAT[WEEK]} mode={WEEK} {...props} />;
DatePicker2.WeekPicker.displayName = 'WeekPicker2';

DatePicker2.QuarterPicker = props => <ConfigPicker format={MODE2FORMAT[QUARTER]} mode={QUARTER} {...props} />;
DatePicker2.QuarterPicker.displayName = 'QuarterPicker2';

DatePicker2.RangePicker = props => {
    let format = MODE2FORMAT[props.mode];
    if (!format) {
        format = props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    }
    return <ConfigPicker type="range" format={format} {...props} />;
};
DatePicker2.RangePicker.displayName = 'RangePicker2';

export default DatePicker2;
