# 自动高度

- order: 9

根据内容自动调整 TextArea 的高度

:::lang=en-us

# Auto Height

- order: 9

auto set TextArea height by content
:::

---

````jsx
import { Input } from '@alifd/next';




ReactDOM.render(
    <div >
        <Input.TextArea
            autoHeight
            aria-label="auto height"
            placeholder="Press the Enter button continuously"
            onKeyDown={(e, opts) => {
                console.log('onKeyDown', opts);
            }} /><br/><br/>

        <Input.TextArea aria-label="auto height" autoHeight={{ minRows: 2, maxRows: 6 }} placeholder="Press the Enter button continuously"/>
    </div>
    , mountNode);
````
