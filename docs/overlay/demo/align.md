# 对齐

- order: 6

通过 `align` 可以自定义对齐方式。

:::lang=en-us
# Align

- order: 6

Use align prop to set align type
:::

---

````jsx
import { Overlay, Button } from '@alifd/next';

const { Popup } = Overlay;

ReactDOM.render(
    <div>
        <div id="container" className="overlay-container">
            <Overlay target="container" visible align="tr tr"><Button>tr tr</Button></Overlay>
            <Overlay target="container" visible align="cc cr"><Button>cc cr</Button></Overlay>
            <Overlay target="container" visible align="bc bc"><Button>bc bc</Button></Overlay>
        </div>
    </div>
    , mountNode);
````
````css
.overlay-container {
    position: relative;
    height: 150px;
    margin: 50px;
    border: 1px solid #eee;
    overflow: auto;
    text-align: center;
}
````
