# 基本

- order: 0

最简单的用法。

:::lang=en-us
# Basic

- order: 0

A simple card with title and sub-title.

:::

---

````jsx
import { Card } from '@alifd/next';

const commonProps = {
    style: { width: 300 },
    subTitle: 'SubTitle',
    extra: 'Link',
};

ReactDOM.render(<div>
    <Card {...commonProps} title="Simple Card">
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
