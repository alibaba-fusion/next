# 按钮组

- order: 8

`Button.Group` 子组件用于将多个按钮组合在一个容器中。

:::lang=en-us
# Button group

- order: 8

`Button.Group` could be used to combine multiple Buttons.

:::

---

````jsx
import { Button, Icon } from '@alifd/next';

ReactDOM.render(<div>
    <Button.Group>
        <Button type="primary">OK</Button>
        <Button type="secondary">Cancel</Button>
    </Button.Group>
    &nbsp;&nbsp;
    <Button.Group>
        <Button disabled>Left</Button>
        <Button disabled>Middle</Button>
        <Button disabled>Right</Button>
    </Button.Group>
    <br />
    <br />

    <Button.Group>
        <Button type="primary"><Icon type="arrow-left" /> Backward</Button>
        <Button type="primary">Forward <Icon type="arrow-right" /></Button>
    </Button.Group>
    &nbsp;&nbsp;
    <Button.Group>
        <Button type="primary"><Icon type="prompt" /></Button>
        <Button type="primary"><Icon type="clock" /></Button>
        <Button type="primary"><Icon type="set" /></Button>
    </Button.Group>
</div>, mountNode);
````
