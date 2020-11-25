# 步骤运行错误

- order: 3

可通过自定义 step item 来实现当前步骤的状态。

:::lang=en-us

# Disable Step

- order: 9

You can display StepItem's state by customizing the content of StepItem.

:::

---


````jsx
import { Step, Box, Icon } from '@alifd/next';

ReactDOM.render(<div>
    <Step current={1}>
        <Step.Item title="Step 1" />
        <Step.Item title={<span style={{ color: 'red' }}>In Progress</span>} content={<span style={{ color: 'red' }}>download image failed</span>} itemRender={
            (index, status) => {
                return <div><Icon type="error" size="xl" style={{ color: '#FF3333' }} /></div>;
            }
        } />
        <Step.Item title="Step 3" />
        <Step.Item title="Step 4" />
    </Step>
</div>, mountNode);
````
