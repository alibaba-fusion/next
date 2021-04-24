# 所有类型的splitButton

- order: 99
- debug: true

最简单的用法。支持 `Button` 的 `type`, `size`, `component`, `model` 等属性透传。

:::lang=en-us
# Basic

- order: 0

Use SplitButton as Button.

:::

---

````jsx
import { SplitButton, Box } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<Box direction="column" spacing={20}>
    <Box direction="row" spacing={20} >
        <SplitButton label="Edit Document">{menu}</SplitButton>
        <SplitButton label="Edit Document" model="outline">{menu}</SplitButton>
        <SplitButton label="Edit Document" model="text">{menu}</SplitButton>
    </Box>
    <Box direction="row" spacing={20} >
        <SplitButton label="Edit Document" type="primary">{menu}</SplitButton>
        <SplitButton label="Edit Document" type="primary" model="outline">{menu}</SplitButton>
        <SplitButton label="Edit Document" type="primary" model="text">{menu}</SplitButton>
    </Box>
    <Box direction="row" spacing={20} >
        <SplitButton label="Edit Document" type="warning">{menu}</SplitButton>
        <SplitButton label="Edit Document" type="warning" model="outline">{menu}</SplitButton>
        <SplitButton label="Edit Document" type="warning" model="text">{menu}</SplitButton>
    </Box>
    <Box direction="row" align="center" spacing={20} style={{backgroundColor: '#000', height: 40}}>
        <SplitButton label="Edit Document" type="inverse">{menu}</SplitButton>
        <SplitButton label="Edit Document" type="inverse" model="outline">{menu}</SplitButton>
        <SplitButton label="Edit Document" type="inverse" model="text">{menu}</SplitButton>
    </Box>
</Box>, mountNode);
````
