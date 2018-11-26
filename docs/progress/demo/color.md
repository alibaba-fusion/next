# 颜色

- order: 1

通过 `color` 属性可以改变进度条的颜色, 而且优先级: color > progressive >  state。

:::lang=en-us
# Progress circle

- order: 1

Use `color` prop to controll progress bar color. priority: color > progressive >  state.

:::

---

````jsx
import { Progress, Icon } from '@alifd/next';

ReactDOM.render(<div>
    <Progress percent={30} shape="circle" color="#AF5F3C"/> &nbsp;&nbsp;&nbsp;&nbsp;
    <Progress percent={50} shape="circle"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <Progress percent={90} shape="circle" color="rgba(119,66,141, 0.9)" textRender={() => <Icon type="select" size="xl" />} />
    <br /><br />
    <Progress percent={30} shape="line" color="rgb(208,16,76)"/>
    <Progress percent={50} shape="line"/>
    <Progress percent={90} shape="line" color="blue" textRender={() => <Icon type="select" size="m" />} />
</div>, mountNode);
````
