import React from 'react';
import ConfigProvider from '../config-provider';
import Picker from './picker';

const DatePicker2 = props => {
    const format = props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    return <Picker format={format} {...props} />;
};

DatePicker2.MonthPicker = props => <Picker format="YYYY-MM" mode="month" {...props} />;

DatePicker2.YearPicker = props => <Picker format="YYYY" mode="year" {...props} />;

DatePicker2.WeekPicker = props => <Picker format="YYYY-wo" mode="week" {...props} />;

DatePicker2.QuarterPicker = props => <Picker format="YYYY-Q" mode="quarter" {...props} />;

DatePicker2.RangePicker = props => {
    let format;

    switch (props.mode) {
        case 'year':
            format = 'YYYY';
            break;
        case 'month':
            format = 'YYYY-MM';
            break;
        case 'week':
            format = 'YYYY-wo';
            break;
        case 'quarter':
            format = 'YYYY-Q';
            break;
        default:
            format = props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
            break;
    }
    return <Picker type="range" format={format} {...props} />;
};

export default ConfigProvider.config(DatePicker2);
