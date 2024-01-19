import { Icon as MeetIcon } from '@alifd/meet-react';
import NextIcon from '../index';
import { assignSubComponent } from '../../util/component';

const MeetIconWithSub = assignSubComponent(MeetIcon, {
    createFromIconfontCN: NextIcon.createFromIconfontCN,
});

export default MeetIconWithSub;
