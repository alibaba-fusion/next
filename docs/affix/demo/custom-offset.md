# 自定义偏移量

- order: 1

可以通过 `offsetTop` 或 `offsetBottom` 自定义偏移量。

:::lang=en-us
# Offset

- order: 1

Setting the offset by `offsetTop` or `offsetBottom`.

:::

---

````jsx
import { Affix, Button } from '@alifd/next';

ReactDOM.render(<div className="custom-affix-wrapper">
    <Affix offsetBottom={0}>
        <Button type="secondary">Affixed Button</Button>
    </Affix>
</div>, mountNode);
````

````css
.custom-affix-wrapper {
    padding: 40px 0;
}
````
