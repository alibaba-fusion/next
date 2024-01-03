import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Balloon } from '@alifd/next';

const Tooltip = Balloon.Tooltip;

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

const App = () => (
    <div style={{ paddingLeft: 220 }}>
        <div style={{ marginLeft: 75 }}>
            <Tooltip v2 trigger={topLeft} align="tl">
                text text
            </Tooltip>
            <Tooltip v2 trigger={top} align="t">
                text text
            </Tooltip>
            <Tooltip v2 trigger={topRight} align="tr">
                text text
            </Tooltip>
        </div>
        <div style={{ width: 80, float: 'left' }}>
            <Tooltip v2 popupProps={{ cache: true }} trigger={leftTop} align="lt">
                text text
            </Tooltip>
            <Tooltip v2 trigger={left} align="l">
                text text
            </Tooltip>
            <Tooltip v2 trigger={leftBottom} align="lb">
                text text
            </Tooltip>
        </div>
        <div style={{ width: 80, marginLeft: 290 }}>
            <Tooltip v2 trigger={rightTop} align="rt">
                text text
            </Tooltip>
            <Tooltip v2 trigger={right} align="r">
                text text
            </Tooltip>
            <Tooltip v2 trigger={rightBottom} align="rb">
                text text
            </Tooltip>
        </div>
        <div style={{ marginLeft: 80, clear: 'both' }}>
            <Tooltip v2 trigger={bottomLeft} align="bl">
                text text
            </Tooltip>
            <Tooltip v2 trigger={bottom} align="b">
                text text
            </Tooltip>
            <Tooltip v2 trigger={bottomRight} align="br">
                text text
            </Tooltip>
        </div>
    </div>
);

ReactDOM.render(<App />, mountNode);
