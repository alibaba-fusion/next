import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from '@alifd/next';

const TimelineItem = Timeline.Item;
ReactDOM.render(
    <Timeline>
        <TimelineItem title="Sign" state="process" timeLeft="2016-10-03" />
        <TimelineItem title="Ship" timeLeft="2016-10-02" />
        <TimelineItem title="Order" timeLeft="2016-10-01" />
    </Timeline>,
    mountNode
);
