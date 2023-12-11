# zh-CN order=5

# 日历面板

日历面板通用用于嵌套在弹层容器中。

```jsx
import { Calendar } from '@alifd/next';
import moment from 'moment';

ReactDOM.render(
    <div>
        <Calendar shape="panel" defaultValue={moment().add(1, 'days')} />
    </div>,
    mountNode
);
```

# en-US order=5

# Panel

A calendar panel is usually used for embedding in a popup container.
