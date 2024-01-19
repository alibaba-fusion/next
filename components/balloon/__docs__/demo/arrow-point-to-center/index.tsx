import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Balloon } from '@alifd/next';

const Tooltip = Balloon.Tooltip;

const defaultTrigger = (
    <Button className="btrigger" style={{ margin: '5px' }}>
        Default Align Edge / 默认边缘对齐
    </Button>
);
const pointCenterTrigger = (
    <Button className="btrigger" style={{ margin: '5px' }}>
        Arrow Point To Center / 箭头指向中心
    </Button>
);
const primary = (
    <Button className="btrigger" style={{ margin: '5px' }}>
        primary style
    </Button>
);

const Demo = () => (
    <div className="container">
        <Tooltip v2 trigger={defaultTrigger} align="bl">
            Tooltip Tooltip
        </Tooltip>
        <Tooltip v2 trigger={pointCenterTrigger} arrowPointToCenter align="bl">
            Tooltip Tooltip
        </Tooltip>
    </div>
);

ReactDOM.render(<Demo />, mountNode);
