import { Icon as MeetIcon } from '@alifd/meet-react';
import NextIcon from '../index';

const Icon = MeetIcon ? MeetIcon : NextIcon;

Icon.createFromIconfontCN = NextIcon.createFromIconfontCN;
export default Icon;
