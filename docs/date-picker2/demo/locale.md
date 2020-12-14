# 国际化配置

-   order: 9

默认配置为`zh-cn`，如果需要设置其它语言，推荐在入口通过`ConfigProvider`进行配置。日期组件的国际化分为组件本身的国际化和组件库`dayjs`的国际化两部分，需要分别引入语言包。

:::lang=en-us

# Locale

-   order: 9

A locale usage case.

:::

---

```jsx
import { useState } from 'react';
import { DatePicker2, ConfigProvider } from '@alifd/next';
import dayjs from 'dayjs'
import 'dayjs/locale/en';
import en from '../../../src/locale/en-us'

const { RangePicker, MonthPicker, YearPicker } = DatePicker2;

function App() {
    return (
        <ConfigProvider locale={en}>
            <div className="app">
                <div><DatePicker2 /></div>
                <div><MonthPicker /></div>
                <div><YearPicker /></div>
                <div><RangePicker /></div>
                <div><RangePicker mode="month" /></div>
                <div><RangePicker mode="year" /></div>
            </div>
        </ConfigProvider>
    );
}

ReactDOM.render(<App />, mountNode);
```

```css
.app > div {
    margin-bottom: 20px;
}
```
