# 自定义偏移量

- order: 2

可以通过 `offsetTop` 或 `offsetBottom` 自定义偏移量。

:::lang=en-us
# Offset

- order: 2

Setting the offset by `offsetTop` or `offsetBottom`.

:::

---

````jsx
import { Affix, Button } from '@alifd/next';

ReactDOM.render(
    <Affix offsetBottom={0}>
        <Button type="primary" model="outline">Custom Offset Affixed</Button>
    </Affix>, mountNode);
````
