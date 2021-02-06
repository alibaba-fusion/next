# 无障碍支持

- order: 4

为了使得屏幕阅读器能传达右侧按钮的含义，我们可以通过`triggerProps`传递对右侧按钮的`aria-label`描述。

:::lang=en-us
# Accessibility

- order: 4

To make screen-reader understand the meaning of the button on the right, we can pass description of `aria-label` via `triggerProps` to `SplitButton` component. Please refer to `ARIA and KeyBoard` for keyboard operation information.

:::
---

````jsx
import { SplitButton } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(<div>
    <SplitButton label="Edit Document" type="primary" triggerProps={{ 'aria-label': "click to see more menu option" }}>{menu}</SplitButton>
</div>, mountNode);
````
