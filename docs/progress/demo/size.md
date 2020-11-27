# 尺寸

- order: 2

可以通过 `size` 属性制定进度条的大小。

:::lang=en-us
# Size

- order: 2

Change the size of progress.

:::

---

````jsx
import { Progress } from '@alifd/next';

ReactDOM.render(<div>
    <Progress percent={30} size="small" shape="circle" /> &nbsp;&nbsp;
    <Progress percent={50} size="medium" shape="circle" /> &nbsp;&nbsp;
    <Progress percent={90} size="large" shape="circle" />
    <br />
    <Progress percent={30} size="small" />
    <Progress percent={50} size="medium" />
    <Progress percent={90} size="large" />

</div>, mountNode);
````
