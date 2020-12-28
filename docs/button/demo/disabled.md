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
import { Button, Box } from '@alifd/next';

ReactDOM.render(<div>
    <Box wrap direction="column" spacing={20}>
        <Box direction="row" spacing={20}>
            <Button type="normal">Normal</Button>
            <Button type="normal" disabled>Normal</Button>
        </Box>
        <Box direction="row" spacing={20}>
            <Button type="primary">Primary</Button>
            <Button component="a" type="primary" disabled>Primary</Button>
        </Box>
        <Box direction="row" spacing={20}>
            <Button type="warning">Warning</Button>
            <Button type="warning" disabled>Warning</Button>
        </Box>
        <Box direction="row" align="center" spacing={20} style={{backgroundColor: '#000', height: 40 }}>
            <Button type="inverse">Inverse</Button>
            <Button type="inverse" disabled>Warning</Button>
        </Box>
    </Box>
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
