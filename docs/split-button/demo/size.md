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
import { SplitButton } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<div>
    <SplitButton label="Edit Document" size="small">{menu}</SplitButton> &nbsp; &nbsp;
    <SplitButton label="Edit Document" size="medium">{menu}</SplitButton> &nbsp; &nbsp;
    <SplitButton label="Edit Document" size="large">{menu}</SplitButton>
</div>, mountNode);
````
