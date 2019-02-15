# 无障碍

- order: 3

组件已支持无障碍

:::lang=en-us
# Accessibility

- order: 3

Components already support accessibility.
:::

---

````jsx
import { Switch } from '@alifd/next';


function onChange(checked) {
    console.log(`switch to ${checked}`);
}

ReactDOM.render(<div>
    <Switch checkedChildren="on" onChange={onChange} unCheckedChildren="off" />

</div>,
mountNode);
````

````css
.large-width {
    width: 100px;
}
````