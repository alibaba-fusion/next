# 文字和图标

- order: 3

带有文字说明和图标

:::lang=en-us
# text and icon

- order: 3

with text or icon

:::

---

````jsx
import { Switch, Icon } from '@alifd/next';


function onChange(checked) {
    console.log(`switch to ${checked}`);
}

ReactDOM.render(<div>
    <Switch autoWidth checkedChildren="on" unCheckedChildren="off" onChange={onChange} />
    <br />
    <Switch autoWidth checkedChildren="已启用" unCheckedChildren="已关闭" onChange={onChange}/>
    <br />
    <Switch autoWidth checkedChildren={<Icon type="select" size="xs"/>} unCheckedChildren={<Icon type="close" size="xs"/>}  onChange={onChange} />
</div>,
mountNode);
````
