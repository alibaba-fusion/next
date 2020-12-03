import { Avatar as MeetAvatar } from '@alifd/meet-react';
import NextAvatar from '../index';

const Avatar = MeetAvatar ? MeetAvatar : NextAvatar;

export default Avatar;
