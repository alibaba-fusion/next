# 选择态反转

- order: 7

设置reverse为true, 选中态会反转。

:::lang=en-us
# Reverse

- order: 7

When reverse is set to true, the selected part is reversed.

:::

---
````jsx
import { Range } from '@alifd/next';


const style = {
    marginBottom: '15px'
};

ReactDOM.render(
    <div style={{width: '400px', margin: '50px'}}>
        <Range defaultValue={30} style={style} hasTip={false} />
        <Range defaultValue={30} style={style} reverse hasTip={false} />
        <Range slider={'double'} defaultValue={[20, 40]} style={style} />
        <Range slider={'double'} defaultValue={[20, 40]} style={style} reverse />
        <Range defaultValue={30} disabled style={style} />
        <Range defaultValue={30} disabled style={style} reverse />
        <Range slider={'double'} defaultValue={[20, 40]} disabled style={style} />
        <Range slider={'double'} defaultValue={[20, 40]} disabled style={style} reverse />
    </div>, mountNode);
````
