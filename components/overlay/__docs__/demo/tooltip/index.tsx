import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button } from '@alifd/next';

const { Popup } = Overlay;

const top = (
    <Button style={{ margin: '5px' }} id="top" className="btrigger">
        top
    </Button>
);
const right = (
    <Button style={{ margin: '5px' }} id="right" className="btrigger">
        right
    </Button>
);
const bottom = (
    <Button style={{ margin: '5px' }} id="bottom" className="btrigger">
        bottom
    </Button>
);
const left = (
    <Button style={{ margin: '5px' }} id="left" className="btrigger">
        left
    </Button>
);
const topLeft = (
    <Button style={{ margin: '5px' }} id="topLeft" className="btrigger">
        top left
    </Button>
);
const topRight = (
    <Button style={{ margin: '5px' }} id="topRight" className="btrigger">
        top right
    </Button>
);
const rightTop = (
    <Button style={{ margin: '5px' }} id="rightTop" className="btrigger">
        right top
    </Button>
);
const rightBottom = (
    <Button style={{ margin: '5px' }} id="rightBottom" className="btrigger">
        right bottom
    </Button>
);
const bottomLeft = (
    <Button style={{ margin: '5px' }} id="bottomLeft" className="btrigger">
        bottom left
    </Button>
);
const bottomRight = (
    <Button style={{ margin: '5px' }} id="bottomRight" className="btrigger">
        bottom right
    </Button>
);
const leftTop = (
    <Button style={{ margin: '5px' }} id="leftTop" className="btrigger">
        left top
    </Button>
);
const leftBottom = (
    <Button style={{ margin: '5px' }} id="leftBottom" className="btrigger">
        left bottom
    </Button>
);
const popupProps = {
    animation: {
        in: 'zoomIn',
        out: 'zoomOut',
    },
    triggerType: 'hover',
    placementOffset: 4,
};

const Demo = () => (
    <div style={{ paddingLeft: 220 }}>
        <div style={{ marginLeft: 75 }}>
            <Popup cache {...popupProps} v2 trigger={topLeft} placement="tl">
                <span className="tooltips-demo">popup text</span>
            </Popup>
            <Popup {...popupProps} v2 trigger={top} placement="t">
                <span className="tooltips-demo">popup text</span>
            </Popup>
            <Popup {...popupProps} v2 trigger={topRight} placement="tr">
                <span className="tooltips-demo">popup text</span>
            </Popup>
        </div>
        <div style={{ width: 80, float: 'left' }}>
            <Popup {...popupProps} v2 trigger={leftTop} placement="lt">
                <span className="tooltips-demo">popup text</span>
            </Popup>
            <Popup {...popupProps} v2 trigger={left} placement="l">
                <span className="tooltips-demo">popup text</span>
            </Popup>
            <Popup {...popupProps} v2 trigger={leftBottom} placement="lb">
                <span className="tooltips-demo">popup text</span>
            </Popup>
        </div>
        <div style={{ width: 80, marginLeft: 290 }}>
            <Popup {...popupProps} v2 trigger={rightTop} placement="rt">
                <span className="tooltips-demo">popup text</span>
            </Popup>
            <Popup {...popupProps} v2 trigger={right} placement="r">
                <span className="tooltips-demo">popup text</span>
            </Popup>
            <Popup {...popupProps} v2 trigger={rightBottom} placement="rb">
                <span className="tooltips-demo">popup text</span>
            </Popup>
        </div>
        <div style={{ marginLeft: 80, clear: 'both' }}>
            <Popup {...popupProps} v2 trigger={bottomLeft} placement="bl">
                <span className="tooltips-demo">popup text</span>
            </Popup>
            <Popup {...popupProps} v2 trigger={bottom} placement="b">
                <span className="tooltips-demo">popup text</span>
            </Popup>
            <Popup {...popupProps} v2 trigger={bottomRight} placement="br">
                <span className="tooltips-demo">popup text</span>
            </Popup>
        </div>
    </div>
);

ReactDOM.render(<Demo />, mountNode);
