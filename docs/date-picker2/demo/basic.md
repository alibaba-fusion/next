# 基本用法

-   order: 0

最基本的用法。可以通过 `onChange` 监听选中值的变化。

:::lang=en-us

# Basic

-   order: 0

A basic usage case.

:::

---

```jsx
import { DatePicker2 } from '@alifd/next';

const { MonthPicker, YearPicker, WeekPicker, QuarterPicker } = DatePicker2;

const onChange = (date, dateStr) => console.log(date, dateStr);

function App() {
    return (
        <div className="app">
            <div><DatePicker2 onChange={onChange}/></div>
            <div><MonthPicker onChange={onChange} /></div>
            <div><YearPicker onChange={onChange} /></div>
            <div><WeekPicker onChange={onChange} /></div>
            <div><QuarterPicker onChange={onChange} /></div>
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
