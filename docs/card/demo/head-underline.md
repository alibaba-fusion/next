# 隐藏头部下划线

- order: 4

可以通过设置 `showHeadDivider={false}` 隐藏头部下划线。

:::lang=en-us
# Head divider

- order: 4

Hiding head divider by `showHeadDivider`.

:::

---

````jsx
import { Card } from '@alifd/next';

const commonProps = {
    title: 'Title',
    style: { width: 300 },
    subTitle: 'Sub-title',
    extra: 'Link'
};

ReactDOM.render(<div>
    <Card {...commonProps} showHeadDivider={false}>
        <div className="card-placeholder"></div>
    </Card>
</div>, mountNode);
````

````css
.card-placeholder {
    height: 500px;
    text-align: center;
    background: #F7F8FA;
}
````
