# 幽灵按钮

- order: 4

幽灵按钮通常用在有色背景下，可以使用 `ghost` 属性开启，此时 Button 为透明背景。对于浅色背景和深色背景，通过取值 `light`, `dark` 可以配置使用幽灵按钮的场景。

:::lang=en-us
# Ghost

- order: 4

Ghost button is usually used for colored backgrounds. Change a Button to ghost by adding `ghost` attribute,
and set the attribute's value to `light` or `darked` based on the color depth.

:::

---

````jsx
import { Button } from '@alifd/next';

ReactDOM.render(<div style={{ clear: 'both' }}>
    <div className="ghost-light-background">
        <Button ghost="light">Ghost light</Button>
    </div>
    <div className="ghost-dark-background">
        <Button ghost="dark">Ghost dark</Button>
    </div>
</div>, mountNode);
````

````css
.ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #EBECF0;
    margin-bottom: 20px;
    padding-left:10px;
    box-sizing: border-box;
}
.ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left:10px;
    box-sizing: border-box;
}
````
