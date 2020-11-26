# 自定义图标和百分比展示

- order: 2

可以在点型和圆形步骤条中使用图标，圆形步骤条还支持使用百分比。

:::lang=en-us

# Icons and percentages

- order: 2

You can use icons in `dot` and `circle` step, and `circle` step also support percentages.

:::

---


````jsx
import { Step } from '@alifd/next';

ReactDOM.render(<div>
    <Step current={1} animation={false} shape="dot">
        <Step.Item title="Step 1" content="Open the refrigerator door" icon="calendar" />
        <Step.Item title="Step 2" content="Put the elephant in the refrigerator" percent={40}/>
        <Step.Item title="Step 3" content="Close the refrigerator door" icon="smile" />
    </Step>
    <br />
    <br />
    <Step current={1} animation={false}>
        <Step.Item title="Step 1" content="Open the refrigerator door" icon="calendar" />
        <Step.Item title="Step 2" content="Put the elephant in the refrigerator" percent={40}/>
        <Step.Item title="Step 3" content="Close the refrigerator door" icon="smile" />
    </Step>
</div>, mountNode);
````
