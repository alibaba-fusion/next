# 简单

- order: 0

最简单的用法,size可设置大小。

:::lang=en-us
# Basic

- order: 0

Basic usage where size is set.

:::

---

````jsx
import { Switch } from '@alifd/next';


function onChange(checked) {
    console.log(`switch to ${checked}`);
}

ReactDOM.render(<div>
    <Switch checkedChildren="on" onChange={onChange} unCheckedChildren="off" />
    <br />
    <Switch defaultChecked={false} onChange={onChange} size="small" />
    <br />
    <Switch className="large-width" checkedChildren="on" onChange={onChange} unCheckedChildren="off please" />
</div>,
mountNode);
````

````css
.large-width {
    width: 100px;
}
````
