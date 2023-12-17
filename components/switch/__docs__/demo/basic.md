# 简单

- order: 0

最简单的用法

:::lang=en-us
# Basic

- order: 0

Basic usage.

:::

---

````jsx
import { Switch } from '@alifd/next';


function onChange(checked) {
    console.log(`switch to ${checked}`);
}

ReactDOM.render(<div>
    <Switch autoWidth defaultChecked={false} onChange={onChange} />
</div>,
mountNode);
````

````css
.large-width {
    width: 100px;
}
````
