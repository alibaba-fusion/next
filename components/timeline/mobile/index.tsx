// @ts-expect-error Timeline 在 meet 中没有
import { Timeline as MeetTimeline } from '@alifd/meet-react';
import NextTimeline from '../index';

const Timeline = MeetTimeline ? MeetTimeline : NextTimeline;

export default Timeline;
