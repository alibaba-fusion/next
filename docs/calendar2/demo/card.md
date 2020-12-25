# 卡片日历

- order: 1

卡片日历通常用来被嵌套在宽高受限的容器中。

:::lang=en-us
# Card

- order: 1

A card calendar is usually used for embedding in a container with limited width and height.

:::

---

````jsx
import { Calendar2 } from '@alifd/next';

function onDateChange(value) {
    console.log(value);
}

ReactDOM.render(<div className="wrapped-calendar">
    <Calendar2 onSelect={onDateChange} shape="card" />
</div>, mountNode);
````

````css
.wrapped-calendar {
    width: 300px;
    border: 1px solid #eee;
    border-radius: 3px;
}
````
