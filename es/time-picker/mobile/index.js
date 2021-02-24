import { TimePicker as MeetTimePicker } from '@alifd/meet-react';
import NextTimePicker from '../index';

var TimePicker = MeetTimePicker ? MeetTimePicker : NextTimePicker;

export default TimePicker;