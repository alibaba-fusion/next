import React from 'react';
import ConfigProvider from '../config-provider';
import Picker from './picker';

const DatePicker2 = props => {
    const { showTime, ...others } = props;
    const _props = {
        format: '',
    };

    _props.format = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    _props.showTime = showTime;

    return <Picker {..._props} {...others} />;
};

DatePicker2.MonthPicker = props => <DatePicker2 format="YYYY-MM" mode="month" {...props} />;

DatePicker2.YearPicker = props => <DatePicker2 format="YYYY" mode="year" {...props} />;

DatePicker2.WeekPicker = props => <DatePicker2 format="YYYY-wo" mode="week" {...props} />;

DatePicker2.QuarterPicker = props => <DatePicker2 format="YYYY-Q" mode="quarter" {...props} />;

DatePicker2.RangePicker = props => {
    const { mode, showTime, ...others } = props;
    const _props = {
        format: '',
    };
    switch (mode) {
        case 'year':
            _props.format = 'YYYY';
            break;
        case 'month':
            _props.format = 'YYYY-MM';
            break;
        case 'week':
            _props.format = 'YYYY-wo';
            break;
        case 'quarter':
            _props.format = 'YYYY-Q';
            break;
        default:
            _props.format = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
            _props.showTime = showTime;
            break;
    }
    return <DatePicker2 type="range" mode={mode} {..._props} {...others} />;
};

export default ConfigProvider.config(DatePicker2);
