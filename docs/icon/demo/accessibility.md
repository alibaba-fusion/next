# 无障碍

- order: 6

通过设置`tabIndex`与`aria-label`读取。

:::lang=en-us

This is handled by the `tabIndex` and `aria-label`.

# Addon

- order: 6

:::
---

````jsx

import { Icon } from '@alifd/next';

ReactDOM.render(<div>
    <Icon type="atm"  tabIndex="0"  aria-label="icon atm" style={{ margin:'5px' }}/>
    <Icon type="smile"  tabIndex="-1"  aria-label="icon smile" style={{ margin:'5px' }}/>
    <Icon type="success"  tabIndex="-1"  aria-label="icon success" style={{ margin:'5px' }}/>
</div>, mountNode);

````
