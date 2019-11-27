# 简单

- order: 0

:::lang=en-us

# Basic

- order: 0

:::
---


````jsx
import { Input } from '@alifd/next';

function onChange(v) {
    console.log(v);
}

ReactDOM.render(<div>
    <Input size="large" state="warning" placeholder="Large" onChange={onChange} aria-label="Large" /><br /><br />

    <span id="J_InputMedium" style={{display: 'none'}}>Aria Labelby Demo </span>
    <Input placeholder="Medium" state="warning" aria-label="Medium" aria-labelledby="J_InputMedium" /><br /><br />

    <Input placeholder="Small" state="warning" size="small" label="SIZE :" id="J_InputSmall" /><br /><br />

    <Input.TextArea state="warning" placeholder="TextArea" aria-label="TextArea" />
</div>, mountNode);
````
