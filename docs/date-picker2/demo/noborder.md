# 无边框

-   order: 7

无边框样式。

:::lang=en-us

# Borderless

-   order: 7

borderless style.

:::

---

```jsx
import { DatePicker2 } from '@alifd/next';

const { RangePicker} = DatePicker2;

function App() {
    return (
        <div className="app">
            <div><DatePicker2 hasBorder={false}/></div>
            <div><RangePicker hasBorder={false} /></div>
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
```

```css
.app > div {
    margin-bottom: 20px;
}
```
