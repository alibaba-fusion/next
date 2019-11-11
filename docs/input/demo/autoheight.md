# 自动高度

- order: 9

设置 `Input` 为 多行文本域；

:::lang=en-us

# Auto Height

- order: 9

Set `Input` as a TextArea
:::

---

````jsx
import { Input } from '@alifd/next';




ReactDOM.render(
    <div >
        <Input.TextArea
            autoHeight
            aria-label="auto height"
            placeholder="autoHeight"
            onKeyDown={(e, opts) => {
                console.log('onKeyDown', opts);
            }} /><br/><br/>

        <Input.TextArea aria-label="auto height" autoHeight={{ minRows: 2, maxRows: 6 }} />
    </div>
    , mountNode);
````
