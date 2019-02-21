# 基本

- order: 0

在最简单的情况下，Step 有三种类型，可以通过 `shape` 属性进行切换。

`circle`类型可通过`labelPlacement`设置文本排列方向。

在当前的step item上添加aria-label标签来支持无障碍识别当前step进度

:::lang=en-us
# Basic

- order: 0

In the simplest case, Step has three types that can be toggled through the `shape` attribute.

The `circle` type can be used to set the orientation of the text through `labelPlacement`.

Add the `aria-label` tag to the current step item to support the current step progress for accessibility recognition

:::

---

````jsx
import { Step } from '@alifd/next';

const steps = [['Step 1', 'Open the refrigerator door'], ['Step 2', 'Put the elephant in the refrigerator'], ['Step 3', 'Close the refrigerator door']].map((item, index) => <Step.Item aria-current={index === 1 ? 'step' : null} aria-label={index === 1 ? `Current Step, ${item[0]}, ${item[1]}` : null} key={index} title={item[0]} content={item[1]}/>);

ReactDOM.render(<div>
    <h3>Arrow</h3>
    <Step current={1} shape="arrow">
        {steps}
    </Step>

    <h3>Circle</h3>
    <Step current={1} shape="circle">
        {steps}
    </Step>

    <h3>Circle(Horizontal content)</h3>
    <Step current={1} shape="circle" labelPlacement="hoz">
        {steps}
    </Step>

    <h3>Dot</h3>
    <Step current={1} shape="dot">
        {steps}
    </Step>

</div>, mountNode);
````
