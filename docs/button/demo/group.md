# 按钮组

- order: 7

`Button.Group` 子组件用于将多个按钮组合在一个容器中。

:::lang=en-us
# Button group

- order: 7

`Button.Group` could be used to combine multiple Buttons.

:::

---

````jsx
import { Button, Icon } from '@alifd/next';

ReactDOM.render(<div>
    <Button.Group style={{marginRight: 20}}>
        <Button type="primary" model="solid">OK</Button>
        <Button type="primary" model="outline">Cancel</Button>
    </Button.Group>
    
    <Button.Group>
        <Button disabled>Left</Button>
        <Button disabled>Middle</Button>
        <Button disabled>Right</Button>
    </Button.Group>
    <br />
    <br />

    <Button.Group style={{marginRight: 20}}>
        <Button type="primary"><Icon type="arrow-left" /> Backward</Button>
        <Button type="primary">Forward <Icon type="arrow-right" /></Button>
    </Button.Group>

    <Button.Group>
        <Button type="warning" model="outline" ><Icon type="prompt" /></Button>
        <Button type="warning" model="outline"><Icon type="clock" /></Button>
        <Button type="warning" model="outline"><Icon type="set" /></Button>
    </Button.Group>
</div>, mountNode);
````
