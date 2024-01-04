import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button } from '@alifd/next';

const { Popup } = Overlay;

ReactDOM.render(
    <div id="containerId" className="overlay-container">
        <Overlay v2 target="containerId" visible align="br tl">
            <Button>br tl</Button>
        </Overlay>
        <Overlay v2 target="containerId" visible align="tc tc">
            <Button>tc tc</Button>
        </Overlay>
        <Overlay v2 target="containerId" visible align="bl tr">
            <Button>bl tr</Button>
        </Overlay>
        <Overlay v2 target="containerId" visible align="cr cr">
            <Button>cr cr</Button>
        </Overlay>
        <Overlay v2 target="containerId" visible align="br br">
            <Button>br br</Button>
        </Overlay>
        <Overlay v2 target="containerId" visible align="tc bc">
            <Button>tc bc</Button>
        </Overlay>
        <Overlay v2 target="containerId" visible align="bl bl">
            <Button>bl bl</Button>
        </Overlay>
        <Overlay v2 target="containerId" visible align="cl cl">
            <Button>cl cl</Button>
        </Overlay>
        <Overlay v2 target="containerId" visible align="cc cc">
            <Button>cc cc</Button>
        </Overlay>
    </div>,
    mountNode
);
