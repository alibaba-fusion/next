# 尺寸

- order: 1

SplitButton 实际是上一个按钮组，通过 `size` 属性可以改变按钮组的大小。

:::lang=en-us
# Size

- order: 1

Change the component size by passing `size`.

:::

---

````jsx
import { SplitButton, Box } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<Box direction="row" spacing={20}>
    <SplitButton label="Edit Document" size="small" type="primary">{menu}</SplitButton>
    <SplitButton label="Edit Document" size="medium" type="primary">{menu}</SplitButton>
    <SplitButton label="Edit Document" size="large" type="primary">{menu}</SplitButton>
</Box>, mountNode);
````
