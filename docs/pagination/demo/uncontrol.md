# 非受控分页

-   order: 0

非受控分页，是指分页组件的状态由自己维护，组件值的改变可以通过 `onChange` 事件通知父组件，默认值由 `defaultCurrent` 初始化。

:::lang=en-us
# Uncontrolled Pagination Component
-   order: 0
Uncontrolled Pagination-Component means that the state of the paging component is maintained by itself. Changes to the component values can be notified to the parent component via the `onChange` event. The default value is initialized by `defaultCurrent`.
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
