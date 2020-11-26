# 徽标可点击

- order: 5

用`<a>`标签包裹组件，实现徽标本身可点击。

:::lang=en-us
# Clickable Badge

- order: 5

Wrap Badge with `<a>` to make it clickable.

:::
---

````jsx
import { Badge } from '@alifd/next';

ReactDOM.render(
    <a href="#" >
        <Badge count={5}>
            <span className="basic-example"></span>
        </Badge>
    </a>, mountNode);
````

````css
.basic-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
}

.next-badge {
    margin-right: 16px;
}
````
