import { Select as MeetSelect } from '@alifd/meet-react';
import NextSelect from '../index';

var Select = MeetSelect ? MeetSelect : NextSelect;

export default Select;