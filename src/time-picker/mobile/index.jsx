import { TimePicker as MeetTimePicker } from '@alifd/meet-react';
import NextTimePicker from '../index';

const TimePicker = MeetTimePicker ? MeetTimePicker : NextTimePicker;

export default TimePicker;
