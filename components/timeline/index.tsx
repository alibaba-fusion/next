import ConfigProvider from '../config-provider';
import Timeline from './view/timeline';
import TimelineItem from './view/timeline-item';

Timeline.Item = ConfigProvider.config(TimelineItem, {});

export default ConfigProvider.config(Timeline, {});
