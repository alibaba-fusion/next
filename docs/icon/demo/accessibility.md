# 无障碍

- order: 6

若为装饰性icon，请设置通过设置 `aria-hidden` 忽略；若为按钮类型icon，请务必设置 `role="button"` 和 `aria-label`。

:::lang=en-us

If it's a decorative icon, set `aria-hidden` to ignore; Or it's a button, set `role="button" `and  `aria-label`.

# Addon

- order: 6

:::
---

````jsx

import { Icon } from '@alifd/next';

ReactDOM.render(<div>
    button: <br/>
    <Icon type="atm"  role="button"  aria-label="icon atm" style={{ margin:'5px' }}/>
    <Icon type="smile"  role="button"  aria-label="icon smile" style={{ margin:'5px' }}/>
    <br/>
    decoration: <br/>
    <Icon type="success" aria-hidden style={{ margin:'5px' }}/>
</div>, mountNode);

````
