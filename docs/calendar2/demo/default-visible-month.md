# 日历默认展示月份

- order: 5

日历组件默认使用当前月作为展示的月份，用户可以可以通过 `defaultPanelValue` 属性进行定制。并可以通过 `onPanelChange` 属性监听面板可视月份的变化。

:::lang=en-us
# Default visible month

- order: 5

Change default visible month by `defaultPanelValue`.

:::

---

````jsx
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';

function onSelect(value) {
    console.log(value.format('L'));
}

function onPanelChange(value, reason) {
    console.log('Visible month changed to %s from <%s>', value.format('YYYY-MM'), reason);
}

ReactDOM.render(<Calendar2 onSelect={onSelect} defaultPanelValue={() => dayjs('2018-01', 'YYYY-MM', true)} onPanelChange={onPanelChange} />, mountNode);
````
