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

ReactDOM.render(
    <div>
        <Input htmlType="password" defaultValue="whoami" aria-label="Please input password"/>
    </div>
    , mountNode);
````
