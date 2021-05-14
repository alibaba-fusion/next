import { Badge as MeetBadge } from '@alifd/meet-react';
import NextBadge from '../index';

var Badge = MeetBadge ? MeetBadge : NextBadge;

export default Badge;