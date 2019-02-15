# 无障碍

- order: 9

组件已支持无障碍

:::lang=en-us
# Accessibility

- order: 9

Components already support accessibility
:::

---

````jsx
import { Pagination } from '@alifd/next';

const change = function(value) {
    console.log(value);
};

ReactDOM.render(
    <Pagination defaultCurrent={2} onChange={change} />,
    mountNode
);
````