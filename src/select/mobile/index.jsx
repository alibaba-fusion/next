import { Select as MeetSelect } from '@alifd/meet-react';
import NextSelect from '../index';

const Select = MeetSelect ? MeetSelect : NextSelect;

export default Select;
