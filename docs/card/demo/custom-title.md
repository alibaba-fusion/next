# 标题无项目符号

- order: 3

可以通过配置 `hasTitleBullet` 属性配置卡片标题是否显示项目符号。此外，`extra` 允许用户传入自定义的 React 组件。

:::lang=en-us
# Title bullet

- order: 3

Customize card head by `hasTitleBullet` and `extra`.

:::

---

````jsx
import { Card, Button } from '@alifd/next';

const commonProps = {
    style: { width: 300 },
    title: 'Title',
    extra: <Button text>More</Button>
};

ReactDOM.render(<div>
    <Card {...commonProps} showTitleBullet={false}>
        Card Content
    </Card>
</div>, mountNode);
````
