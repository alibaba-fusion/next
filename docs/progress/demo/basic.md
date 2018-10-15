# 基本进度条

- order: 0

普通模式的进度条，通过 `percent` 属性指定进度，通过 `textRender` 控制右侧文本信息的展示，
通过 `hasBorder` 属性设置组件是否包含边框。

:::lang=en-us
# Basic progress bar

- order: 0

A basic progress bar, using `percent` to control current progress, and control the tail text with `textRender`.

:::

---

````jsx
import { Progress } from '@alifd/next';

ReactDOM.render(<div>
    <Progress percent={30} textRender={() => ''} />
    <Progress percent={50} />
    <Progress percent={90} />
    <Progress percent={40} />
    <Progress percent={40} hasBorder size="large" />
</div>, mountNode);
````
