# 自定义标签类型

- order: 6

默认情况下 Button 组件使用 `<button>` 标签来渲染按钮，通过 `component` 属性可以自定义 Button 的标签类型。
可选值为 `button` 和 `a`。

:::lang=en-us
# Custom component

- order: 6

By default, a Button component is rendered by a html `<button>` tag, its render behavior could be modified by a props named `component`, which should be set to `button` or `a`.

:::

---

````jsx
import { Button } from '@alifd/next';

const props = {
    component: 'a',
    href: 'http://www.alibaba.com',
    target: '_blank',
};

ReactDOM.render(<div>
    <Button {...props} type="primary">alibaba.com</Button> &nbsp;&nbsp;
    <Button {...props} type="secondary">alibaba.com</Button> &nbsp;&nbsp;
    <Button {...props} type="normal">alibaba.com</Button>
</div>, mountNode);
````
