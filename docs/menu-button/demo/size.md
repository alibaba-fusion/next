# 尺寸

- order: 1

可以通过 size 属性改变按钮大小。

:::lang=en-us
# Size

- order: 1

Change component size by `size` attribute.

:::

---

````jsx
import { MenuButton, Box } from '@alifd/next';

const { Item } = MenuButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<Box direction="row" spacing={20}>
    <MenuButton label="Edit Document" size="small" type="secondary">{menu}</MenuButton>
    <MenuButton label="Edit Document" size="medium" type="secondary">{menu}</MenuButton>
    <MenuButton label="Edit Document" size="large" type="secondary">{menu}</MenuButton>
</Box>, mountNode);
````
