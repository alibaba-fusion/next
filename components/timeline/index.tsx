import { assignSubComponent } from '../util/component';
import Timeline from './view/timeline';
import TimelineItem from './view/timeline-item';

const TimelineWithItem = assignSubComponent(Timeline, {
    Item: TimelineItem,
});

export type { TimelineProps, ItemProps } from './types';

export default TimelineWithItem;
