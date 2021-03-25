import { DatePicker as MeetDatePicker } from '@alifd/meet-react';
import NextDatePicker from '../index';

var DatePicker = MeetDatePicker ? MeetDatePicker : NextDatePicker;

export default DatePicker;