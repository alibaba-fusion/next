import { Field as MeetField } from '@alifd/meet-react';
import NextField from '../index';

const Field = MeetField ? MeetField : NextField;

export default Field;
