# 禁用状态

- order: 2

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

:::lang=en-us
# Disabled

- order: 2

Disable a Button by adding `disabled` attribute.

:::

---

````jsx
import { Button } from '@alifd/next';

ReactDOM.render(<div style={{display: 'grid', gridRowGap: 10}}>
    <div  style={{display: 'inline-flex', gridColumnGap: 10}}>
        <Button type="primary">Primary</Button>
        <Button component="a" type="primary" disabled>Primary</Button>
    </div>
    <div style={{display: 'inline-flex', gridColumnGap: 10}}>
        <Button type="secondary">Secondary</Button>
        <Button type="secondary" disabled>Secondary</Button>
    </div>
    <div style={{display: 'inline-flex', gridColumnGap: 10}}>
        <Button type="normal">Normal</Button>
        <Button type="normal" disabled>Normal</Button>
    </div>
    <div>
        <div className="ghost-light-background">
            <Button ghost="light" disabled>Ghost Light</Button>
        </div>
        <div className="ghost-dark-background">
            <Button ghost="dark" disabled>Ghost Dark</Button>
        </div>
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
