# 无障碍

- order: 8

通过Tab键或其他方式使滑块被聚焦之后，可以通过按下键盘的左右箭头来改变滑块的位置，目前只有单滑块支持无障碍。

:::lang=en-us
# Accessibility

- order: 8

After the slider is focused by Tab or other approaches, you can change its position by pressing the left or right arrows on the keyboard. Currently, only a single slider supports accessibility.
:::

---

````jsx
import { Range } from '@alifd/next';


const style = {
    marginBottom: '15px'
};

ReactDOM.render(<div style={{width: '400px', margin: '50px'}}>
        <h4>single slider - from left to right</h4>
        <Range defaultValue={30} style={style} hasTip={false} />
        <h4>single slider - from right to left</h4>
        <Range defaultValue={30} style={style} reverse hasTip={false} />
    </div>, mountNode);
````