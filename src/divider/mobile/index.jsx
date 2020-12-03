import { Divider as MeetDivider } from '@alifd/meet-react';
import NextDivider from '../index';

const Divider = MeetDivider ? MeetDivider : NextDivider;

export default Divider;
