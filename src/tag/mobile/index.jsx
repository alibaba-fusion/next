import { Tag as MeetTag } from '@alifd/meet-react';
import NextTag from '../index';

const Tag = MeetTag ? MeetTag : NextTag;

export default Tag;
