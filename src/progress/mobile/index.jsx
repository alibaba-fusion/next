import { Progress as MeetProgress } from '@alifd/meet-react';
import NextProgress from '../index';

const Progress = MeetProgress ? MeetProgress : NextProgress;

export default Progress;
