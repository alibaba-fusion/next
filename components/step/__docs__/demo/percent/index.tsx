import React from 'react';
import ReactDOM from 'react-dom';
import { Step } from '@alifd/next';

ReactDOM.render(
    <div>
        <Step current={1} animation={false} shape="dot">
            <Step.Item title="Step 1" content="Open the refrigerator door" icon="calendar" />
            <Step.Item title="Step 2" content="Put the elephant in the refrigerator" percent={40} />
            <Step.Item title="Step 3" content="Close the refrigerator door" icon="smile" />
        </Step>
        <br />
        <br />
        <Step current={1} animation={false}>
            <Step.Item title="Step 1" content="Open the refrigerator door" icon="calendar" />
            <Step.Item title="Step 2" content="Put the elephant in the refrigerator" percent={40} />
            <Step.Item title="Step 3" content="Close the refrigerator door" icon="smile" />
        </Step>
    </div>,
    mountNode
);
