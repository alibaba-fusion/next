# 测试Demo

-   order: 0

最基本的用法。可以通过 `onChange` 监听选中值的变化。

:::lang=en-us

# Basic

-   order: 0

A basic usage case.

:::

---

```jsx
import { DatePicker2, Calendar2, ConfigProvider } from '@alifd/next';
import 'dayjs/locale/en'; // 组件库国际化
import en from '@alifd/next/lib/locale/en-us'; // 组件国际化

function App() {
    return (
        <div className="app">
            <Calendar2 />
            <Calendar2 mode="year"/>
            <Calendar2 shape="card"/>
            <Calendar2 shape="card" mode="year"/>
            <Calendar2 shape="panel" />
            <Calendar2 shape="panel"  mode="year" />
            <DatePicker2 defaultVisible />
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
```

```css
.app {
    line-height: 1.8;
}
.app > div {
    margin-bottom: 20px;
}
```
