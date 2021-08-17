import { Progress as MeetProgress } from '@alifd/meet-react';
import NextProgress from '../index';

var Progress = MeetProgress ? MeetProgress : NextProgress;

export default Progress;