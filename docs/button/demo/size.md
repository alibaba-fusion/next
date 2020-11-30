# 按钮尺寸

- order: 6

可以通过设置 `size` 属性控制按钮的尺寸，可选值为 `large` `medium` `small`，其中默认值为 `medium`。

:::lang=en-us
# Size

- order: 6

The size of a Button is controlled by a `size` attribute, supporting `large`, `medium`, `small`, the default value is `medium`.

:::

---

````jsx
import { Button, Icon } from '@alifd/next';

ReactDOM.render(<div>
    <Button className="basic-button" type="primary" size="large"><Icon type="atm" />Large</Button>
    <Button className="basic-button" type="primary"><Icon type="atm" />Medium</Button>
    <Button className="basic-button" type="primary" size="small"><Icon type="atm" />Small</Button>
    <br />
    <br />
    <Button.Group size="large">
        <Button className="basic-button">Button</Button>
        <Button className="basic-button">Button</Button>
        <Button className="basic-button">Button</Button>
    </Button.Group>
</div>, mountNode);
````

````css
.basic-button{
    margin-right: 10px;
}
````
