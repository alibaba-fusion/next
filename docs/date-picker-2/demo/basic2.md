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

const DatePicker = DatePicker2;
const { MonthPicker, YearPicker, WeekPicker } = DatePicker;

const onChange = val => console.log(val);

const App = () => <div>
    <DatePicker onChange={onChange} /> <br />
    <WeekPicker onChange={onChange} /> <br />
    <MonthPicker onChange={onChange} /> <br />
    <YearPicker onChange={onChange} /> <br />
</div>

ReactDOM.render(<App />, mountNode);
```
