import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Balloon } from '@alifd/next';

const top = (
    <Button id="top" style={{ margin: '5px' }} className="btrigger">
        top
    </Button>
);
const right = (
    <Button id="right" style={{ margin: '5px' }} className="btrigger">
        right
    </Button>
);
const bottom = (
    <Button id="bottom" style={{ margin: '5px' }} className="btrigger">
        bottom
    </Button>
);
const left = (
    <Button id="left" style={{ margin: '5px' }} className="btrigger">
        left
    </Button>
);
const topLeft = (
    <Button id="topLeft" style={{ margin: '5px' }} className="btrigger">
        top left
    </Button>
);
const topRight = (
    <Button id="topRight" style={{ margin: '5px' }} className="btrigger">
        top right
    </Button>
);
const rightTop = (
    <Button id="rightTop" style={{ margin: '5px' }} className="btrigger">
        right top
    </Button>
);
const rightBottom = (
    <Button id="rightBottom" style={{ margin: '5px' }} className="btrigger">
        right bottom
    </Button>
);
const bottomLeft = (
    <Button id="bottomLeft" style={{ margin: '5px' }} className="btrigger">
        bottom left
    </Button>
);
const bottomRight = (
    <Button id="bottomRight" style={{ margin: '5px' }} className="btrigger">
        bottom right
    </Button>
);
const leftTop = (
    <Button id="leftTop" style={{ margin: '5px' }} className="btrigger">
        left top
    </Button>
);
const leftBottom = (
    <Button id="leftBottom" style={{ margin: '5px' }} className="btrigger">
        left bottom
    </Button>
);

const Content = () => (
    <span>balloon content balloon content balloon content balloon content balloon content</span>
);

const App = () => (
    <div style={{ paddingLeft: 320 }}>
        <div style={{ marginLeft: 75 }}>
            <Balloon
                v2
                trigger={topLeft}
                align="tl"
                triggerType="click"
                style={{ width: 300 }}
                closable={false}
                title="title"
            >
                <Content />
            </Balloon>
            <Balloon
                v2
                trigger={top}
                align="t"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon
                v2
                trigger={topRight}
                align="tr"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
        </div>
        <div style={{ width: 80, float: 'left' }}>
            <Balloon
                v2
                trigger={leftTop}
                align="lt"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon
                v2
                trigger={left}
                align="l"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon
                v2
                trigger={leftBottom}
                align="lb"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
        </div>
        <div style={{ width: 80, marginLeft: 290 }}>
            <Balloon
                v2
                trigger={rightTop}
                align="rt"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon
                v2
                trigger={right}
                align="r"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon
                v2
                trigger={rightBottom}
                align="rb"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
        </div>
        <div style={{ marginLeft: 80, clear: 'both' }}>
            <Balloon
                v2
                trigger={bottomLeft}
                align="bl"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon
                v2
                trigger={bottom}
                align="b"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon
                v2
                trigger={bottomRight}
                align="br"
                triggerType="click"
                title="title"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
        </div>
    </div>
);

ReactDOM.render(<App />, mountNode);
