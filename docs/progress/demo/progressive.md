# Progressive

- order: 4

当开启 `progressive` 模式时，Progress 组件会根据自身的进度自动设置展现的颜色值。
注意，此时会忽略用户设置的 `state` 的属性值。

:::lang=en-us
# Progressive

- order: 4

Progressive progresses.

:::

---

````jsx
import { Progress } from '@alifd/next';

ReactDOM.render(<div>
    <Progress percent={20} progressive />
    <Progress percent={60} progressive />
    <Progress percent={90} progressive />
</div>, mountNode);
````
