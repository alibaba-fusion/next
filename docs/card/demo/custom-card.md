# 自定义卡片样式

- order: 2

如果默认的卡片样式不能满足您的需求，除了通过 Fusion 配置平台修改，还可以通过传入自定义样式修改。
如果 `title` 属性不传入任何值，则默认会去除整个头部区域。

:::lang=en-us
# Custom style

- order: 2

Customize default styles of a card.

:::

---

````jsx
import { Card } from '@alifd/next';

ReactDOM.render(<Card className="image-card" contentHeight="auto">
    <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" alt="father day" />
    <div className="custom-card">
        <h3>Father's Day</h3>
        <p>Thank you, papa</p>
    </div>
</Card>, mountNode);
````

````css
.image-card {
    display: inline-block;
    text-align: center;
}

.custom-card p {
    color: #999;
}
````
