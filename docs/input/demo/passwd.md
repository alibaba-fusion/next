# 密码输入框

- order: 1

设置 `Input` 为 密码类型；


:::lang=en-us

# Password Input

- order: 1

Set `Input` as a password type input;
:::
---

````jsx
import { Input } from '@alifd/next';

function onChange(v) {
    console.log(v);
}

ReactDOM.render(
    <div>
        <Input.Password placeholder="please input password" onChange={onChange} /><br /><br />
        <Input.Password size="large" placeholder="please input password" onChange={onChange} /><br /><br />
        <Input.Password size="small" placeholder="please input password" onChange={onChange} /><br /><br />
    </div>
    , mountNode);
````
