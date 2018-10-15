# 基本

- order: 0

最简单的用法。

:::lang=en-us

# Basic

- order: 0

The simplest usage.

:::

---

````jsx
import { Timeline } from '@alifd/next';

const TimelineItem = Timeline.Item;
ReactDOM.render(<Timeline>
    <TimelineItem title="Receipt" state="process"/>
    <TimelineItem title="Ship" />
    <TimelineItem title="Order" />
</Timeline>, mountNode);
````
