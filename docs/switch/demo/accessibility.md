# 无障碍

- order: 5

组件内部已支持无障碍，设置`aria-label`对组件进行描述。


:::lang=en-us
# Accessibility

- order: 5

Components inside has support for accessibility, set `aria-label` on component is described.

:::

---

````jsx
import { Switch } from '@alifd/next';


function onChange(checked) {
    console.log(`switch to ${checked}`);
}

ReactDOM.render(<div>
    <Switch checkedChildren="on" onChange={onChange} unCheckedChildren="off" aria-label="accessible switch"/>

</div>,
mountNode);
````

````css
.large-width {
    width: 100px;
}
````