# 垂直模式

- order: 1

对于点型和圆圈型的 Step 组件而言，可以通过设置 `direction` 属性设置其展示方向为垂直。
箭头形不支持垂直模式。

:::lang=en-us

# Vertical mode

- order: 1

For type `dot` and `circle` Step components, you can set their orientation to vertical by setting the `direction` property.
While, type `arrows` do not support vertical mode.

:::

---

````jsx
import { Step } from '@alifd/next';

ReactDOM.render(<div>
    <h2>Shape of circle</h2>
    <Step current={1} direction="ver" animation={false}>
        <Step.Item title="Step 1" content="Open the refrigerator door" />
        <Step.Item title="Step 2" content="Put the elephant in the refrigerator" />
        <Step.Item title="Step 3" content="Close the refrigerator door" />
    </Step>

    <br /><br />
    <h2>Shape of dot</h2>
    <Step current={1} direction="ver" shape="dot" animation={false}>
        <Step.Item title="Step 1" content="Open the refrigerator door" />
        <Step.Item title="Step 2" content="Put the elephant in the refrigerator" />
        <Step.Item title="Step 3" content="Close the refrigerator door" />
    </Step>

    <h2>Display Flex</h2>
    <div style={{padding: 12}}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <div>I'm left</div>
            <Step current={1} direction="ver" shape="dot" animation={false}>
                <Step.Item title="Step 1" content="Open the refrigerator door" />
                <Step.Item title="Step 2" aria-label="Current Step, Step 2, Put the elephant in the refrigerator" content="Put the elephant in the refrigerator" />
                <Step.Item title="Step 3" content="Close the refrigerator door" />
            </Step>
        </div>
    </div>
</div>, mountNode);
````
