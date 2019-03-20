# 禁用步骤项

- order: 3

可以通过在 `Step.Item` 上设置 `disabled` 属性来禁用某个步骤。

:::lang=en-us

# Disable Step

- order: 3

You can disable a step by setting the `disabled` attribute on `Step.Item`.

:::

---


````jsx
import { Step } from '@alifd/next';

ReactDOM.render(<div>
    <Step current={1} shape="arrow">
        <Step.Item title="Step 1" />
        <Step.Item title="Step 2" aria-label="Current Step, Step 2" />
        <Step.Item title="Step 3" disabled />
        <Step.Item title="Step 4" />
    </Step>
    <br />
    <br />
    <Step current={1} shape="dot">
        <Step.Item title="Step 1" />
        <Step.Item title="Step 2" aria-label="Current Step, Step 2" />
        <Step.Item title="Step 3" disabled />
        <Step.Item title="Step 4" />
    </Step>
    <br />
    <br />
    <Step current={1} shape="circle">
        <Step.Item title="Step 1" />
        <Step.Item title="Step 2" aria-label="Current Step, Step 2" />
        <Step.Item title="Step 3" disabled />
        <Step.Item title="Step 4" />
    </Step>
</div>, mountNode);
````
