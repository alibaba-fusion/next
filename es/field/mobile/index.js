import { Field as MeetField } from '@alifd/meet-react';
import NextField from '../index';

var Field = MeetField ? MeetField : NextField;

export default Field;