import React from 'react';
import ConfigProvider from '../config-provider';
import TimePicker from './time-picker';

const ConfigTimePicker = ConfigProvider.config(TimePicker);

ConfigTimePicker.RangePicker = React.forwardRef((props, ref) => <ConfigTimePicker ref={ref} {...props} type="range" />);
ConfigTimePicker.RangePicker.displayName = 'RangePicker';

export default ConfigTimePicker;
