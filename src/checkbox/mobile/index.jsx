import { Checkbox as MeetCheckbox } from '@alifd/meet-react';
import NextCheckbox from '../index';

const Checkbox = MeetCheckbox ? MeetCheckbox : NextCheckbox;

export default Checkbox;
