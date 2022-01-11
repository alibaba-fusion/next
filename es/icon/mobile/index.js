import { Icon as MeetIcon } from '@alifd/meet-react';
import NextIcon from '../index';

var Icon = MeetIcon ? MeetIcon : NextIcon;

Icon.createFromIconfontCN = NextIcon.createFromIconfontCN;
export default Icon;