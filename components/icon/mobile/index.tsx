import { Icon as MeetIcon } from '@alifd/meet-react';
import NextIcon from '../index';

const Icon = MeetIcon as typeof MeetIcon & {
    createFromIconfontCN: typeof NextIcon.createFromIconfontCN;
};

Icon.createFromIconfontCN = NextIcon.createFromIconfontCN;
export default Icon;
