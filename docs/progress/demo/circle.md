# 圆形进度条

- order: 1

通过 `shape` 属性可以改变进度指示器的外观，当取值为 `circle` 时为圆形进度条。

:::lang=en-us
# Progress circle

- order: 1

A simple progress circle.

:::

---

````jsx
import { Progress, Icon } from '@alifd/next';

ReactDOM.render(<div>
    <Progress percent={30} shape="circle" /> &nbsp;&nbsp;
    <Progress percent={50} shape="circle" /> &nbsp;&nbsp;
    <Progress percent={80} shape="circle" textRender={() => ''}/>&nbsp;&nbsp;
    <Progress percent={100} shape="circle" textRender={() => <Icon type="select" size="xl" />} />
</div>, mountNode);
````
