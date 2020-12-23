import { NumberPicker as MeetNumberPicker } from '@alifd/meet-react';
import NextNumberPicker from '../index';

const NumberPicker = MeetNumberPicker ? MeetNumberPicker : NextNumberPicker;

export default NumberPicker;
