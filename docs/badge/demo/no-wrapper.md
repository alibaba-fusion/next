# 独立使用

- order: 5

不包裹任何元素即独立使用，可自定样式展示。

:::lang=en-us
# Alone Usage

- order: 5

Alone usage mean that badge component wrap nothing, and you can custom style of badge component.

:::
---

````jsx
import { Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge count={25} />
        <Badge count={4} style={{backgroundColor: '#fff', color: '#999', border: '1px solid #d9d9d9'}} />
        <Badge count={109} style={{backgroundColor: '#87d068'}} />
        <Badge dot />
        <Badge content="hot" style={{backgroundColor: '#FC0E3D', color: '#FFFFFF'}} />
    </div>, mountNode);
````

````css
.next-badge {
    margin-right: 16px;
}
````
