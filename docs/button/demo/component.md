# 按钮标签

- order: 1

默认情况下 Button 组件使用 `<button>` 标签来渲染按钮，通过 `component` 属性可以自定义 Button 的标签类型。可选值为 `button` 和 `a`。

:::lang=en-us
# Custom component

- order: 1

By default, a Button component is rendered by a html `<button>` tag, its render behavior could be modified by a props named `component`, which should be set to `button` or `a`.

:::

---

````jsx
import { Button, Box } from '@alifd/next';

const props = {
    component: 'a',
    href: 'http://www.alibaba.com',
    target: '_blank'
};

ReactDOM.render(<Box direction="row" spacing={20} >
    <Button {...props} type="primary">alibaba.com</Button>
    <Button {...props} type="secondary">alibaba.com</Button>
    <Button {...props} type="normal">alibaba.com</Button>
</Box>, mountNode);
````
