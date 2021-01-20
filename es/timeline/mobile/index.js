import { Timeline as MeetTimeline } from '@alifd/meet-react';
import NextTimeline from '../index';

var Timeline = MeetTimeline ? MeetTimeline : NextTimeline;

export default Timeline;