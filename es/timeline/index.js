import { assignSubComponent } from '../util/component';
import Timeline from './view/timeline';
import TimelineItem from './view/timeline-item';
var TimelineWithItem = assignSubComponent(Timeline, {
    Item: TimelineItem,
});
export default TimelineWithItem;
