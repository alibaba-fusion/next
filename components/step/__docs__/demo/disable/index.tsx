import React from 'react';
import ReactDOM from 'react-dom';
import { Step } from '@alifd/next';

ReactDOM.render(
    <div>
        <Step current={1} shape="arrow">
            <Step.Item title="Step 1" />
            <Step.Item title="Step 2" />
            <Step.Item title="Step 3" disabled />
            <Step.Item title="Step 4" />
        </Step>
        <br />
        <br />
        <Step current={1} shape="dot">
            <Step.Item title="Step 1" />
            <Step.Item title="Step 2" />
            <Step.Item title="Step 3" disabled />
            <Step.Item title="Step 4" />
        </Step>
        <br />
        <br />
        <Step current={1} shape="circle">
            <Step.Item title="Step 1" />
            <Step.Item title="Step 2" />
            <Step.Item title="Step 3" disabled />
            <Step.Item title="Step 4" />
        </Step>
    </div>,
    mountNode
);
