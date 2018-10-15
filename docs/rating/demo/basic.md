# 基本

- order: 0

最简单的用法。

:::lang=en-us
# Basic

- order: 0

Basic usage.

:::
---


````jsx
import { Rating } from '@alifd/next';

ReactDOM.render(<div>
    <Rating defaultValue={3.2} onChange={val => console.log('change:', val)} onHoverChange={val => console.log('hover:', val)} />
</div>, mountNode);
````
