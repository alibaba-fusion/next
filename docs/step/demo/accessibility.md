# 无障碍

- order: 7

组件已支持无障碍。

:::lang=en-us
# Accessibility

- order: 7

Components already support accessibility.
:::

---

````jsx
import { Step } from '@alifd/next';

const steps = [['Step 1', 'Open the refrigerator door'], ['Step 2', 'Put the elephant in the refrigerator'], ['Step 3', 'Close the refrigerator door']].map((item, index) => <Step.Item aria-current={index === 1 ? 'step' : null} aria-label={index === 1 ? `Current Step, ${item[0]}, ${item[1]}` : null} key={index} title={item[0]} content={item[1]}/>);

ReactDOM.render(<div>
    <h3>Arrow Accessibility Test</h3>
    <Step current={1} shape="arrow">
        {steps}
    </Step>
</div>, mountNode);
````
