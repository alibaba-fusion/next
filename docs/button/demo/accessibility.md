# 无障碍支持

- order: 8

在使用不包含文本的icon Button组件时，我们需要添加`aria-label`对其进行描述，键盘操作请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。

:::lang=en-us
# Accessibility

- order: 8

When using icon Button component , we should add `aria-label` to describe it. Please refer to `ARIA and KeyBoard` for keyboard operation information.

:::

---

````jsx
import { Button, Icon } from '@alifd/next';

ReactDOM.render(<div>
    <Button.Group>
        <Button type="primary" aria-label="prompt button"><Icon type="prompt" /></Button>
        <Button type="primary" aria-label="clock button"><Icon type="clock" /></Button>
        <Button type="primary" aria-label="set button"><Icon type="set" /></Button>
    </Button.Group>
</div>, mountNode);
````
