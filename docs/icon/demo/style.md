# 自定义样式

- order: 3

图标字体本质上还是文字，可以使用 style 和 className 设置图标的大小和颜色。

:::lang=en-us
# Custom Style

- order: 3

Icon fonts are essentially text. You can use `style` and `className` to set the size and color of the icons.
:::
---

````jsx
import { Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        <div className="icon-style-demo">
            <Icon type="success" style={{ color: '#1DC11D', marginRight: '10px' }} />
            This is a success message!
        </div>
        <div className="icon-style-demo">
            <Icon type="warning" style={{ color: '#FFA003', marginRight: '10px' }} />
            This is a warning message!
        </div>
        <div className="icon-style-demo">
            <Icon type="error" style={{ color: '#FF3333', marginRight: '10px' }} />
            This is a failure message!
        </div>
    </div>
    , mountNode);
````

````css
.icon-style-demo {
    height: 24px;
    line-height: 24px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
}
````
