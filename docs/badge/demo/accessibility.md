# 无障碍

- order: 6

组件内置了部分支持无障碍, 但是额外需要开发者手动设置才能完整支持无障碍: 比如添加className="next-visually-hidden"，使得badge能被读屏软件读取含义。

:::lang=en-us
# Accessibility

- order: 6

To Support accessibility, you can assign className="next-visually-hidden", which can make badge read by software like voiceover.
:::

---

````jsx
import { Badge, Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge dot>
            <a href="#"><span className="next-visually-hidden">new mail</span></a>
        </Badge>
    </div>, mountNode);
````

````css
.next-badge {
    margin-right: 16px;
}
````

