# 基本

- order: 0

默认情况下，Affix 的默认目标容器元素是整个 `window`，并且 `offsetTop = 0`，
也就意味着当页面往下滚动时，当 Affix 元素接触到浏览器边框时，此时会将 Affix 钉住。

:::lang=en-us
# Basic

- order: 0

The simple usage is to wrap your components direcly with Affix component.

:::

---

````jsx
import { Affix, Button } from '@alifd/next';

ReactDOM.render(
    <div>
        <Affix>
            <Button type="primary" model="outline">Basic Affixed Button</Button>
        </Affix>
        <br/>
        <span>Scroll window to see button affixed.</span>
    </div>, mountNode);
````
