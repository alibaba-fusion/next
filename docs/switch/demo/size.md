# 两种大小

- order: 4

size="small" 表示小号开关

:::lang=en-us
# size

- order: 4

use size=small to set small switch

:::

---

````jsx
import { Switch } from '@alifd/next';

ReactDOM.render(
    <div>
        <Switch autoWidth/>
        <br/>
        <Switch autoWidth size="small"/>
    </div>,
    mountNode
);
````

````css
.line {
  margin-bottom: 10px;
}
.next-switch {
  margin-right: 20px;
}
````
