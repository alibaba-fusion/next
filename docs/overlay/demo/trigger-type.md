# 触发方式

- order: 3

通过 `triggerType` 属性设置触发方式。

:::lang=en-us
# Popup

- order: 3

Use `triggerType` prop.
:::

---

````jsx
import { Overlay } from '@alifd/next';

const { Popup } = Overlay;

const style ={ marginLeft: 10};
ReactDOM.render(
    <div>
        <Popup v2 trigger={<button style={style}>click</button>} triggerType="click">
            <span className="overlay-demo">
                Click to open Popup!
            </span>
        </Popup>
        <Popup v2 trigger={<button style={style}>hover</button>} triggerType="hover">
            <span className="overlay-demo">
                Hover to open Popup!
            </span>
        </Popup>
        <Popup v2 trigger={<button style={style}>focus</button>} triggerType="focus" autoFocus={false}>
            <span className="overlay-demo">
                Focus to open Popup!
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
