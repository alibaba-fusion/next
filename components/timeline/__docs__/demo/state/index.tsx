import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from '@alifd/next';

const TimelineItem = Timeline.Item;
ReactDOM.render(
    <Timeline>
        <TimelineItem title="Cloudy" time={'2016-06-10 10:30:00'} state="process" />
        <TimelineItem title="Sunny" time={'2016-06-11'} state="success" />
        <TimelineItem title="Rainy" time={'2016-06-09'} state="error" />
    </Timeline>,
    mountNode
);
