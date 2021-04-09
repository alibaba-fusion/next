# 自定义图标、颜色等

- order: 3

通过 `content` 属性可以自定义徽标的内容，自定义内容不包含任何色彩样式，完全由使用者自己定义。

:::lang=en-us
# Customized Content of Badge

- order: 3

You can set value of atrribute `content` to customize content of badge, customize content depend on what you code, and exclude any style.

:::
---

````jsx
import { Badge, Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge content="hot" style={{backgroundColor: '#FC0E3D', color: '#FFFFFF'}}>
            <a href="#" className="head-example"></a>
        </Badge>
        <Badge content={<Icon type="error" />} style={{backgroundColor: 'transparent', color: 'red', padding: 0}}>
            <a href="#" className="head-example"></a>
        </Badge>
    </div>, mountNode);
````

````css
.next-badge {
    margin-right: 24px;
}
.head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background-color: #eee;
}
````
