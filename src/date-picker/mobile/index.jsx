import { DatePicker as MeetDatePicker } from '@alifd/meet-react';
import NextDatePicker from '../index';

const DatePicker = MeetDatePicker ? MeetDatePicker : NextDatePicker;

export default DatePicker;
