# 多语言

- order: 7

日期时间的多语言来源于 dayjs ，可以通过 `dayjs.locale('zh-cn')` 来设置显示中文。

:::lang=en-us
# Value Locale

- order: 7

Locale of date values comes from `dayjs`, and you can set it to dispaly other languages (Chinese for instance) with `dayjs.locale('zh-cn')`.

:::

---

````jsx
import { Calendar } from '@alifd/next';
import dayjs from 'dayjs';

// Setting dayjs locale to Chinese
dayjs.locale('zh-cn');

ReactDOM.render(<Calendar />, mountNode);
````
