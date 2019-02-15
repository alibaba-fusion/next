# 无障碍

- order: 8

组件已支持无障碍。

:::lang=en-us
# Accessibility

- order: 8

Components already support accessibility.
:::

---

````jsx
import { Range } from '@alifd/next';


const style = {
    marginBottom: '15px'
};

ReactDOM.render((
    <div style={{width: '400px', margin: '50px'}}>

        <h4>single slider - from left to right</h4>
        <Range defaultValue={30} style={style} hasTip={false} />
        <h4>single slider - from right to left</h4>
        <Range defaultValue={30} style={style} reverse hasTip={false} />

    </div>
), mountNode);
````