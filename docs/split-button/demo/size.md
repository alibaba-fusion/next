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

ReactDOM.render(<div className="split-button-size-demo">
    <SplitButton label="Edit Document" size="small" type="secondary">{menu}</SplitButton>
    <SplitButton label="Edit Document" size="medium" type="secondary">{menu}</SplitButton>
    <SplitButton label="Edit Document" size="large" type="secondary">{menu}</SplitButton>
</div>, mountNode);
````
````css
.split-button-size-demo > * {
    margin-right: 10px;
}
````
