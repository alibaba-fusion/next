import { Switch as MeetSwitch } from '@alifd/meet-react';
import NextSwitch from '../index';

var Switch = MeetSwitch ? MeetSwitch : NextSwitch;

export default Switch;