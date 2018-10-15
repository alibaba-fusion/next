# 弹层嵌套

- order: 4

有弹层嵌套需求时，请使用 container 属性将第二个弹层渲染到第一个弹层内部。

:::lang=en-us
# Nested overlay

- order: 4

When there is a overlay nesting requirement, use the container property to render the second overlay inside the first overlay.
:::

---

````jsx
import { Overlay } from '@alifd/next';

const { Popup } = Overlay;

ReactDOM.render((
    <Popup trigger={<button>Open first overlay</button>}
        triggerType="click">
        <div className="overlay-demo">
            <Popup trigger={<button>Open second overlay</button>}
                triggerType="click"
                container={trigger => trigger.parentNode}>
                <div className="overlay-demo">
                    <p>Hello World From Second Overlay!</p>
                </div>
            </Popup>
            <p>Hello World From First Overlay!</p>
        </div>
    </Popup>
), mountNode);
````

````css
.overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);
}
````
