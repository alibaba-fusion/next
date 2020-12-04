# 颜色

- order: 5

通过 `color` 属性可以改变进度条的颜色。Progress 有三个API可以改变进度条的颜色,其优先级为 color > progressive >  state。

:::lang=en-us
# Color

- order: 5

Use `color` prop to controll progress bar color. The Progress Component has three APIs which can controll the color of progress bar and it's priority: color > progressive >  state.

:::

---

````jsx
import { Progress, Icon, Box } from '@alifd/next';

ReactDOM.render(<div>
    <Box direction="row" spacing={60}>
        <Progress percent={30} shape="circle" color="#AF5F3C"/>
        <Progress percent={50} shape="circle" color="#E91E63" backgroundColor={'#00BCD4'}  />
        <Progress percent={90} shape="circle" color="rgba(119,66,141, 0.9)" textRender={() => <Icon type="select" size="xl" />} />
    </Box>
    <br/>
    <br/>
    <Box direction="column" spacing={20}>
        <Progress percent={30} shape="line" color="rgb(208,16,76)"/>
        <Progress percent={50} shape="line" color="#E91E63" backgroundColor={'#00BCD4'} />
        <Progress percent={90} shape="line" color="blue" textRender={() => <Icon type="select" size="medium" />} />
    </Box>
</div>, mountNode);
````
