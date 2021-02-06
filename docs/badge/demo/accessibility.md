# 无障碍支持

- order: 7

可通过给内容添加`className="next-sr-only"`，使内容仅能被读屏软件读取，但不会展示到页面上。

:::lang=en-us
# Accessibility

- order: 0

Accessibility of Badge.

:::
---

````jsx
import { Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge count={5}>
            <a href="#" className="basic-example"><span className="next-sr-only">unread messages</span></a>
        </Badge>
    </div>
    , mountNode);
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
