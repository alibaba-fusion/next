# 对齐

- order: 6

可以自定义对齐方式

:::lang=en-us
# Align

- order: 6

Use align prop to set align type
:::


---

````jsx
import { Overlay } from '@alifd/next';

const { Popup } = Overlay;

ReactDOM.render(
    <div >
        <div id="container1" className="overlay-container">
            normal example
            <Overlay target="container1" visible align="tr tr"><span>123</span></Overlay>
            <Overlay target="container1" visible align="cc cr"><span>123</span></Overlay>
            <Overlay target="container1" visible align="bc bc"><span>123</span></Overlay>
        </div>
        <br /><br /><br /><br />
        <div id="container2" className="overlay-container" dir="rtl">
            dir=rtl example
            <Overlay target="container2" rtl visible align="tr tr"><span>123</span></Overlay>
            <Overlay target="container2" rtl visible align="cc cr"><span>123</span></Overlay>
            <Overlay target="container2" rtl visible align="bc bc"><span>123</span></Overlay>
        </div>
    </div>
    , mountNode);
````

````css
.overlay-container {
    position: relative;
    height: 150px;
    margin: 50px;
    border: 1px solid #999;
    overflow: auto;
    text-align: center;
    color: red;
}
````
