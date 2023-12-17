# 日历卡片

- order: 1

可以将 `card` 形态的日历组件嵌套在宽高受限的容器中。

:::lang=en-us
# Card

- order: 1

A card calendar is usually used for embedding in a container with limiting width and height.

:::

---

````jsx
import { Calendar } from '@alifd/next';

function onDateChange(value) {
    console.log(value);
}

ReactDOM.render(<div className="wrapped-calendar">
    <Calendar onSelect={onDateChange} shape="card" />
</div>, mountNode);
````

````css
.wrapped-calendar {
    width: 300px;
    border: 1px solid #C4C6CF;
    border-radius: 3px;
    padding: 8px;
}
````
