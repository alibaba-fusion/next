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
import { Progress, Box } from '@alifd/next';

ReactDOM.render(<div>
    <Box direction="row" spacing={20}>
        <Progress percent={30} size="small" shape="circle" />
        <Progress percent={50} size="medium" shape="circle" /> 
        <Progress percent={90} size="large" shape="circle" />
    </Box>
    <br />
    <Box direction="column" spacing={20}>
        <Progress percent={30} size="small" />
        <Progress percent={50} size="medium" />
        <Progress percent={90} size="large" />
    </Box>
</div>, mountNode);
````
