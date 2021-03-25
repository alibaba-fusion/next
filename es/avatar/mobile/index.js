import { Avatar as MeetAvatar } from '@alifd/meet-react';
import NextAvatar from '../index';

var Avatar = MeetAvatar ? MeetAvatar : NextAvatar;

export default Avatar;