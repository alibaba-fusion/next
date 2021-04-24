# 幽灵按钮

- order: 4

`ghost`属性将在后续版本废弃，请使用`type="inverse"`配置幽灵按钮。

:::lang=en-us
# Ghost

- order: 4

Ghost button is usually used for colored backgrounds. Change a Button to ghost by adding `type="inverse"` attribute。

:::

---

````jsx
import { Button, Box } from '@alifd/next';

ReactDOM.render(<div style={{ clear: 'both' }}>
    <Box className="ghost-dark-background" direction="row" spacing={20}>
        <Button type="inverse" model="solid">inverse Solid</Button>
        <Button type="inverse" model="outline">inverse Outline</Button>
        <Button type="inverse" model="text">inverse Text</Button>
    </Box>
</div>, mountNode);
````

````css
.ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    background: #222;
    margin-bottom: 20px;
    padding:0 10px 0 10px;
    box-sizing: border-box;
}
````
