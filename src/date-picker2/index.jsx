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

const DatePicker2 = props => <Picker format={props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'} {...props} />;

DatePicker2.MonthPicker = props => <Picker format={MODE2FORMAT[MONTH]} mode={MONTH} {...props} />;
DatePicker2.YearPicker = props => <Picker format={MODE2FORMAT[YEAR]} mode={YEAR} {...props} />;
DatePicker2.WeekPicker = props => <Picker format={MODE2FORMAT[WEEK]} mode={WEEK} {...props} />;
DatePicker2.QuarterPicker = props => <Picker format={MODE2FORMAT[QUARTER]} mode={QUARTER} {...props} />;

DatePicker2.RangePicker = props => {
    let format = MODE2FORMAT[props.mode];

    if (!format) {
        format = props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    }

    return <Picker type="range" format={format} {...props} />;
};

export default ConfigProvider.config(DatePicker2);
