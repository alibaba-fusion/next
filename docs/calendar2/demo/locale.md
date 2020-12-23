# 多语言

- order: 7

日期时间的多语言来源于 moment ，可以通过 `moment.locale('zh-cn')` 来设置显示中文。

:::lang=en-us
# Value Locale

- order: 7

Locale of date values comes from `moment`, and you can set it to dispaly other languages (Chinese for instance) with `moment.locale('zh-cn')`.

:::

---

````jsx
import { Calendar } from '@alifd/next';
import moment from 'moment';

// Setting moment locale to Chinese
moment.locale('zh-cn');

ReactDOM.render(<Calendar />, mountNode);
````
