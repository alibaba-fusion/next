import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline, Icon } from '@alifd/next';

const TimelineItem = Timeline.Item;
ReactDOM.render(
    <Timeline>
        <TimelineItem title="Receipt" state="process" icon="smile" time="2017-10-21" />
        <TimelineItem
            title="Ship"
            dot={<span style={{ fontSize: '14px' }}> 😂 </span>}
            state="success"
            time="2017-10-22"
        />
        <TimelineItem
            title="Order"
            dot={<Icon type="success" size="medium" style={{ color: '#1DC11D' }} />}
            content="Congratulations, successful orders!"
            time="2017-10-23"
        />
    </Timeline>,
    mountNode
);
