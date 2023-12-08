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

    <div id="containerId" className="overlay-container">
        <Overlay v2 target="containerId" visible align="br tl"><Button>br tl</Button></Overlay>
        <Overlay v2 target="containerId" visible align="tc tc"><Button>tc tc</Button></Overlay>
        <Overlay v2 target="containerId" visible align="bl tr"><Button>bl tr</Button></Overlay>
        <Overlay v2 target="containerId" visible align="cr cr"><Button>cr cr</Button></Overlay>
        <Overlay v2 target="containerId" visible align="br br"><Button>br br</Button></Overlay>
        <Overlay v2 target="containerId" visible align="tc bc"><Button>tc bc</Button></Overlay>
        <Overlay v2 target="containerId" visible align="bl bl"><Button>bl bl</Button></Overlay>
        <Overlay v2 target="containerId" visible align="cl cl"><Button>cl cl</Button></Overlay>
        <Overlay v2 target="containerId" visible align="cc cc"><Button>cc cc</Button></Overlay>
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
