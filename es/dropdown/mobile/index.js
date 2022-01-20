import { Dropdown as MeetDropdown } from '@alifd/meet-react';
import NextDropdown from '../index';

var Dropdown = MeetDropdown ? MeetDropdown : NextDropdown;

export default Dropdown;