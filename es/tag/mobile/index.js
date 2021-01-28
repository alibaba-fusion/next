import { Tag as MeetTag } from '@alifd/meet-react';
import NextTag from '../index';

var Tag = MeetTag ? MeetTag : NextTag;

export default Tag;