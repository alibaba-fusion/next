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
import { MenuButton } from '@alifd/next';

const { Item } = MenuButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<div>
    <MenuButton label="Edit Document" size="small">{menu}</MenuButton> &nbsp; &nbsp;
    <MenuButton label="Edit Document" size="medium">{menu}</MenuButton> &nbsp; &nbsp;
    <MenuButton label="Edit Document" size="large">{menu}</MenuButton>
</div>, mountNode);
````
