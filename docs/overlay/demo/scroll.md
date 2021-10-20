# 更换弹窗挂载容器

- order: 7

遇到有父元素有 overflow 滚动的情况，可以通过更换弹窗的挂载容器到父节点，获得更好性能。



:::lang=en-us
# Overlay follows the container scroll

- order: 7

The overlay defaults to absolute positioning with reference to document.body. If the overlay trigger element's container (usually the parent node) has a scrollbar, then when the container is scrolled, the trigger element will be separated from the overlay. The solution is to render the overlay to the container where the trigger element is located. (The container must have a position style to support the absolute positioning of the overlay.)
:::


---

````jsx
import { Overlay, Button } from '@alifd/next';

const { Popup } = Overlay;

ReactDOM.render(
    <div className="scroll-container">
        <Popup trigger={<Button>Open</Button>}
            triggerType="click"
            container={trigger => trigger.parentNode}>
            <div className="overlay-demo">
                Hello World From Popup!
            </div>
        </Popup>
        <div style={{ height: '300px' }} />
    </div>
    , mountNode);
````

````css
.overlay-demo {
    width: 400px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);
}

.scroll-container {
    position: relative;
    height: 150px;
    padding: 10px;
    border: 1px solid #eee;
    overflow: auto;
}
````
