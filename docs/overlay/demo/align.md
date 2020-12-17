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
    <div id="containerId" className="overlay-container">
        <Overlay target="containerId" visible align="br tl"><button>br tl</button></Overlay>
        <Overlay target="containerId" visible align="tc tc"><button>tc tc</button></Overlay>
        <Overlay target="containerId" visible align="bl tr"><button>bl tr</button></Overlay>
        <Overlay target="containerId" visible align="cr cr"><button>cr cr</button></Overlay>
        <Overlay target="containerId" visible align="br br"><button>br br</button></Overlay>
        <Overlay target="containerId" visible align="tc bc"><button>tc bc</button></Overlay>
        <Overlay target="containerId" visible align="bl bl"><button>bl bl</button></Overlay>
        <Overlay target="containerId" visible align="cl cl"><button>cl cl</button></Overlay>
        <Overlay target="containerId" visible align="cc cc"><button>cc cc</button></Overlay>
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
}
````
