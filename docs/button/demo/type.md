# 按钮类型

- order: 0

Button通过`type`和`model`控制按钮类型。不同的类型可以用来区别按钮的重要程度。

:::lang=en-us
# Type

- order: 0

The types of button includes: primary, secondary, normal. Each one used to describe the importance level of a button.

:::

---

````jsx
import { Button, Box } from '@alifd/next';

ReactDOM.render(<div >
    <Box direction="row" spacing={20}>
        <Button type="normal" model="solid">Normal</Button> 
        <Button type="normal" model="outline">Normal</Button>
        <Button type="normal" model="text">Normal</Button>
    </Box>
    <br/>
    <Box direction="row" spacing={20}>
        <Button type="primary" model="solid">Prirmary</Button> 
        <Button type="primary" model="outline">Primary</Button>
        <Button type="primary"  model="text">Primary</Button> 
    </Box>
    <br/>
    <Box direction="row" spacing={20}>
        <Button type="warning" model="solid">Warning</Button>
        <Button type="warning" model="outline">Warning</Button>
        <Button type="warning" model="text">Warning</Button>
    </Box>
    <br/>
    <Box direction="row" align="center" spacing={20} style={{backgroundColor: '#000', height: 40 }}>
        <Button type="inverse" model="solid">Inverse</Button>
        <Button type="inverse" model="outline">Inverse</Button>
        <Button type="inverse" model="text">Inverse</Button>
    </Box>
</div>, mountNode);
````