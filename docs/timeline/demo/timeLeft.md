# 左侧展示时间

- order: 3

设置时间轴左边的内容。

:::lang=en-us

# Time in the left side of tiemline

- order: 3

Set the left side of the timeline.

:::

---

````jsx
import { Timeline } from '@alifd/next';

const TimelineItem = Timeline.Item;
ReactDOM.render(<Timeline>
    <TimelineItem title="Sign" state="process" timeLeft="2016-10-03" />
    <TimelineItem title="Ship" timeLeft="2016-10-02" />
    <TimelineItem title="Order" timeLeft="2016-10-01" />
</Timeline>, mountNode);
````
