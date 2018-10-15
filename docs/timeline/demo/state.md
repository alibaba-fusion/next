# 状态

- order: 1

设置每个节点不同的状态。

:::lang=en-us

# State

- order: 1

Set different states for each node.

:::

---

````jsx
import { Timeline } from '@alifd/next';

const TimelineItem = Timeline.Item;
ReactDOM.render(<Timeline>
    <TimelineItem title="Cloudy" time={'2016-06-10 10:30:00'} state="process"/>
    <TimelineItem title="Sunny" time={'2016-06-11'} state="success"/>
    <TimelineItem title="Rainy" time={'2016-06-09'} state="error"/>
</Timeline>, mountNode);
````
