# 弹层跟随滚动

- order: 5

弹层默认参照 document.body 绝对定位，如果弹层显示隐藏的触发元素所在容器（一般为父节点）有滚动条，那么当容器滚动时，会发生触发元素与弹层相分离的情况，解决的办法是将弹层渲染到触发元素所在的容器中。（触发元素所在的容器，必须设置 position 样式，以完成弹层的绝对定位。）

:::lang=en-us
# Overlay follows the container scroll

- order: 5

The overlay defaults to absolute positioning with reference to document.body. If the overlay trigger element's container (usually the parent node) has a scrollbar, then when the container is scrolled, the trigger element will be separated from the overlay. The solution is to render the overlay to the container where the trigger element is located. (The container must have a position style to support the absolute positioning of the overlay.)
:::


---

````jsx
import { Overlay } from '@alifd/next';

const { Popup } = Overlay;

ReactDOM.render(
    <div className="scroll-container">
        <Popup trigger={<button>Open</button>}
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
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);
}

.scroll-container {
    position: relative;
    height: 150px;
    padding: 10px;
    border: 1px solid #999999;
    overflow: auto;
}
````
