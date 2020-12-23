# Popup弹层

- order: 2

`Popup` 是对 `Overlay` 的封装，它接收某个节点作为触发节点，弹出一个浮层，这个浮层默认情况下使用这个节点作为定位的参照对象。

:::lang=en-us
# Popup

- order: 2

Use popup to pop up a overlay.
:::

---

````jsx
import { Overlay, Button, Input } from '@alifd/next';

const { Popup } = Overlay;

ReactDOM.render(
    <div>
        <Popup trigger={<Button>Open</Button>} triggerType="click">
            <span className="overlay-demo">
                Hello World From Popup!
            </span>
        </Popup>
        <br />
        <br />
        <Popup trigger={<Input placeholder="Use Down Arrow to open" />} triggerType="click" triggerClickKeycode={40}>
            <span className="overlay-demo">
                Hello World From Popup!
            </span>
        </Popup>
    </div>
    , mountNode);
````

````css
.overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);
}
````
