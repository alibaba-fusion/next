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

ReactDOM.render(<div>
    <Button className="basic-button" type="primary">Primary</Button>
    <Button className="basic-button" component="a" type="primary" disabled>Primary</Button>
    <br />
    <br />
    <Button className="basic-button" type="secondary">Secondary</Button>
    <Button className="basic-button" type="secondary" disabled>Secondary</Button>
    <br />
    <br />
    <Button className="basic-button" type="normal">Normal</Button>
    <Button className="basic-button" type="normal" disabled>Normal</Button>
    <br />
    <br />
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
.basic-button{
    margin-right: 10px;
}
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
