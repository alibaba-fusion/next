import { Timeline as MeetTimeline } from '@alifd/meet-react';
import NextTimeline from '../index';

const Timeline = MeetTimeline ? MeetTimeline : NextTimeline;

export default Timeline;
