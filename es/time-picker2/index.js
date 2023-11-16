import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import ConfigProvider from '../config-provider';
import TimePicker from './time-picker';

var ConfigTimePicker = ConfigProvider.config(TimePicker);

ConfigTimePicker.RangePicker = React.forwardRef(function (props, ref) {
  return React.createElement(ConfigTimePicker, _extends({ ref: ref }, props, { type: 'range' }));
});
ConfigTimePicker.RangePicker.displayName = 'RangePicker';

export default ConfigTimePicker;