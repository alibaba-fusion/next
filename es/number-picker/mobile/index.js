import { NumberPicker as MeetNumberPicker } from '@alifd/meet-react';
import NextNumberPicker from '../index';

var NumberPicker = MeetNumberPicker ? MeetNumberPicker : NextNumberPicker;

export default NumberPicker;