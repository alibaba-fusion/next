# 自定义内容高度

- order: 1

可以通过 `contentHeight` 属性自定义内容区的高度。例如取值为 `auto` 的时候会默认关闭卡片的收缩效果。

:::lang=en-us
# Content height

- order: 1

Setting contet height by `contentHeight`, setting value to `auto` will disabled the collapse behavior.

:::

---

````jsx
import { Card } from '@alifd/next';

const commonProps = {
    style: { width: 300 },
    title: 'Title',
    subTitle: 'Sub-title'
};

ReactDOM.render(<div>
    <Card {...commonProps} contentHeight="auto">
        <div className="custom-content">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </div>
    </Card>
    &nbsp;&nbsp;
    <Card {...commonProps} contentHeight={200}>
        <div className="custom-content">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </div>
    </Card>
</div>, mountNode);
````

````css
.custom-content p {
    margin: 0;
}
````
