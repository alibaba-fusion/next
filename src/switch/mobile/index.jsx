import { Switch as MeetSwitch } from '@alifd/meet-react';
import NextSwitch from '../index';

const Switch = MeetSwitch ? MeetSwitch : NextSwitch;

export default Switch;
